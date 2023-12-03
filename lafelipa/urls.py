from django.urls import path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('tarifas/', views.tarifas, name='tarifas'),
  path('contacto/', views.contacto, name='contacto'),
]