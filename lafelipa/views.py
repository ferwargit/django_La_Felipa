from django.shortcuts import render

# Create your views here.
def home(request):
    context = {'show_clima': True}
    return render(request, 'home.html', context)

def galeria(request):
    return render(request, 'galeria.html')

def tarifas(request):
    return render(request, 'tarifas.html')

def contacto(request):
    return render(request, 'contacto.html')