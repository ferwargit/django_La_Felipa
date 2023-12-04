from django.urls import path
from . import views

urlpatterns = [
    path('gestion_cabanas/tarifas/', views.listar_cabanas, name='listar_cabanas'),
]