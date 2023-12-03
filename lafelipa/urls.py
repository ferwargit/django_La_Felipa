from django.urls import path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('cabanas/', views.cabanas, name='cabanas'),
  path('galeria/', views.galeria, name='galeria'),
  path('tarifas/', views.tarifas, name='tarifas'),
  path('contacto/', views.contacto, name='contacto'),
]