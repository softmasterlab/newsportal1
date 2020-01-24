from django.urls import path
from .views import index, create, edit, details, delete

urlpatterns = [
    path('', index),
    path('create', create),
    path('edit', edit),
    path('details', details),
    path('delete', delete)
]
