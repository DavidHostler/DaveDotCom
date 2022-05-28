from rest_framework import serializers
from .models import TextData


class TextSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TextData
        fields = '__all__'