from django.db import models


class User(models.Model):
    login = models.CharField(max_length=50)
    passw = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    regdate = models.DateTimeField()
    status = models.CharField(max_length=50)
