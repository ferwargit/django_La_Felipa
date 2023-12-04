from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Cabana(models.Model):
    # Choices for num_habitaciones
    HABITACIONES_CHOICES = [(i, str(i)) for i in range(1, 11)]

    nombre = models.CharField("Nombre de la cabaña", max_length=200)
    descripcion = models.TextField("Descripción de la cabaña")
    num_habitaciones = models.IntegerField("Número de habitaciones", choices=HABITACIONES_CHOICES)
    capacidad = models.IntegerField("Cantidad de personas", validators=[MinValueValidator(1), MaxValueValidator(20)])
    precio = models.DecimalField("Precio por noche", max_digits=8, decimal_places=2)
    disponible = models.BooleanField("¿Está disponible?", default=True)
    foto = models.ImageField("Foto de la cabaña", upload_to='fotos_cabanas/')
    created = models.DateTimeField("Fecha de creación", auto_now_add=True)
    updated = models.DateTimeField("Fecha de última modificación", auto_now=True)

    def __str__(self):
        return self.nombre