from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .serializers import TextSerializer
from .models import TextData

class TextViewSet(viewsets.ModelViewSet):
    queryset = TextData.objects.all()
    serializer_class = TextSerializer

    
