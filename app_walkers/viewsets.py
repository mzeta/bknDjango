from rest_framework.viewsets import ModelViewSet
from .models import Walker
from .serializers import WalkerSerializer

class WalkerViewSet(ModelViewSet):
    queryset = Walker.objects.all()
    serializer_class = WalkerSerializer