from django.contrib import admin
from django.urls import path , include


from .views import      WalkerListView   \
                    ,   WalkerDetailView \
                    ,   WalkerCreateView \
                    ,   WalkerUpdateView \
                    ,   WalkerDeleteView

from .router import router

app_name = "walkers"

urlpatterns = [
    path("", WalkerListView.as_view(), name="all"),
    path("create/", WalkerCreateView.as_view(), name="create"),
    path("<int:pk>/detail/",WalkerDetailView.as_view(), name="detail"),
    path("<int:pk>/update/",WalkerUpdateView.as_view(), name="update"),
    path("<int:pk>/delete/",WalkerDeleteView.as_view(), name="delete")
]


# ahora vamos a la urls.py del manager


urlpatterns += router.urls