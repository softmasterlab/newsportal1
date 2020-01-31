from django.db import models
from django.utils import timezone
from time import strftime


class Post(models.Model):
    title = models.CharField(max_length=100)
    about = models.TextField(max_length=256)
    content = models.TextField(max_length=1024)
    author = models.CharField(max_length=100)
    picture = models.FileField(upload_to='pictures/')
    publish = models.DateTimeField(default=strftime('%Y-%m-%d %H:%M:%S'))
    source = models.URLField()
