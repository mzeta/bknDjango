from rest_framework.serializers import ModelSerializer
from .models import Walker

class WalkerSerializer(ModelSerializer):
    class Meta:
        model = Walker
        fields = "__all__"