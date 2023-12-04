from django.shortcuts import render, get_object_or_404
from .models import Cabana

# def crear_cabana(request):
#   # Código para crear una cabaña
#   pass

def listar_cabanas(request):
    print('Dentro de listar_cabanas')
    cabanas = Cabana.objects.filter(disponible=True)
    
    return render(request, 'lafelipa/cabanas.html', {'cabanas': cabanas})

def actualizar_cabana(request, cabana_id):
  # Código para actualizar una cabaña
  pass

def eliminar_cabana(request, cabana_id):
  # Código para eliminar una cabaña
  pass