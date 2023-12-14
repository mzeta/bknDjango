from django.contrib import admin
from .models import Walker

# Register your models here.

@admin.register(Walker)
class WalkerAdmin(admin.ModelAdmin):
    ...

    # Registra ahora en Settings.py