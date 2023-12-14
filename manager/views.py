from django.views.generic import TemplateView
from django.http import JsonResponse

class IndexPage(TemplateView):
    template_name = "index.html"

class Form(TemplateView):
    template_name = "form.html"