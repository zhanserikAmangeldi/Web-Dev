from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .models import Product, Category
from django.http import JsonResponse

# Create your views here.

def product_list(request):
    products = Product.objects.all()
    response = [{'name': product.name} for product in products]
    return JsonResponse(response, safe=False)
    
def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    response = [{'name': product.name, 'category': product.category, 'description':product.description}]
    return JsonResponse(response, safe=False)

def category_list(request):
    categories = Category.objects.all()
    response = [{'category_name': category.name} for category in categories]
    return JsonResponse(response, safe=False)

def category(request, id):
    category = get_object_or_404(Category, id=id)
    response = {'name': category.name}
    return JsonResponse(response, safe=False)

def category_product_list(request, id):
    category = get_object_or_404(Category, id=id)
    products = filter(lambda product: True if product.category == category.name else False, Product.objects.all())
    response = [{'name': product.name, 'category': product.category} for product in products]
    return JsonResponse(response, safe=False)
