from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name + " " + str(self.price)

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


