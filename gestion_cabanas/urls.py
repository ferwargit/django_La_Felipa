from django.urls import path
from . import views

urlpatterns = [
    path('gestion_cabanas/cabanas/', views.listar_cabanas, name='listar_cabanas'),

    # path('actualizar_cabana/<int:cabana_id>/', views.actualizar_cabana, name='actualizar_cabana'),
    # path('eliminar_cabana/<int:cabana_id>/', views.eliminar_cabana, name='eliminar_cabana'),
]