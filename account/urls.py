from django.urls import path
from .views import signin, signup, signout

urlpatterns = [
    path('signin', signin),
    path('signup', signup),
    path('signout', signout),
]
