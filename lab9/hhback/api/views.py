from .models import *
from .serializers import *
from rest_framework import generics

class CompanyListAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacancyListAPIView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class RetrieveCompanyView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class RetrieveVacancyView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyListByCompanyAPIView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        companyID = self.kwargs['id']
        return Vacancy.objects.filter(compnay_id=companyID)
    
class TopTenListBySalaryAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer