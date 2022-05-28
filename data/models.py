from django.db import models

# Create your models here.

class TextData(models.Model):
    title = models.CharField(max_length=30, default="Please write something!")
    body = models.CharField(max_length=300, default="Please write something!")
    
   
    