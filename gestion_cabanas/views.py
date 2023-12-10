from django.conf import settings
from django.shortcuts import render

from .models import Cabana

def listar_cabanas(request):
  cabanas = Cabana.objects.filter(disponible=True)
  return render(request, 'tarifas.html', {'cabanas': cabanas, 'MEDIA_URL': settings.MEDIA_URL})
