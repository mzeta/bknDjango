from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import View

from django.views.generic.list   import ListView
from django.views.generic.edit   import DeleteView, UpdateView, CreateView
from django.views.generic.detail import DetailView


from .models import Walker

# Create your views here.


class WalkerBaseView(View):
    template_name = 'walkers.html'
    model = Walker
    fields = '__all__'
    success_url = reverse_lazy('walkers:all')


class WalkerListView(WalkerBaseView,ListView):
    """
    ESTO ME PERMITE CREAR UNA VISTA CON LOS VINOS
    """

class WalkerDetailView(WalkerBaseView,DetailView):
    template_name = "walkers_detail.html"

class WalkerCreateView(WalkerBaseView,CreateView):
    template_name = "walkers_create.html"
    extra_context = {
        "tipo": "Crear profesional"
    }


class WalkerUpdateView(WalkerBaseView,UpdateView):
    template_name = "walkers_create.html"
    extra_context = {
        "tipo": "Actualizar profesional"
    }

class WalkerDeleteView(WalkerBaseView,DeleteView):
    template_name = "walkers_delete.html"
    extra_context = {
        "tipo": "Borrar profesional"
    }


#--> ahora voya a urls.py de la app