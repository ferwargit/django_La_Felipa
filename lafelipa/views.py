from django.shortcuts import render

# Create your views here.
def home(request):
    context = {'show_clima': True}
    return render(request, 'home.html', context)

def contacto(request):
    return render(request, 'contacto.html')