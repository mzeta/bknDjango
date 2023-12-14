from django.db import models
from django.db.models import Model

# Create your models here.

class Walker(Model):
    SERVICES = [
        ("P", "Paseo"),
        ("C", "Cuidado"),
        ("A", "Alojamiento"),
    ]
    name = models.CharField(max_length=100,null=False,blank=False)
    image = models.CharField(max_length=300,null=False,blank=False)
    resume = models.CharField(max_length=200,null=False,blank=False)
    service = models.CharField(max_length=1, choices=SERVICES,null=False,blank=False)

    class Meta:
        db_table = "walkers_db"

    def __str__(self):
        return f"El profesional: {self.name}, brinda el siguiente servicio: {self.service}"

    def get_fields(self):
        return [
            (field.verbose_name, field.value_from_object(self))
            for field in self.__class__._meta.fields[1:]
        ]

#luego registrar la app en Admin.py