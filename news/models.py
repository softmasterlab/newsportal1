from django.db import models
from django.utils import timezone


class Post(models.Model):
    title = models.CharField(max_length=100)
    about = models.TextField(max_length=256)
    content = models.TextField(max_length=1024)
    author = models.CharField(max_length=100)
    picture = models.FileField(upload_to='pictures/')
    publish = models.DateTimeField(default=timezone.now())
    source = models.URLField()
