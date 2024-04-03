from django.urls import path

from api.views import *

urlpatterns = [
    path('api/companies/', CompanyListAPIView.as_view(), name='company-list'),
    path('api/companies/<int:id>/', RetrieveCompanyView.as_view(), name='company'),
    path('api/companies/<int:id>/vacancies/', VacancyListByCompanyAPIView.as_view(), name='vacancy-list-by-company'),
    path('api/vacancies/', VacancyListAPIView.as_view(), name='vacancy-list'),
    path('api/vacancies/<int:id>/', RetrieveVacancyView.as_view(), name='vacancy'),
    path('api/vacancies/top_ten/', TopTenListBySalaryAPIView.as_view(), name='top-ten-vacancy-by-salary')
]