from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TaskSerializers
from .models import Task

class Taskview(viewsets.ModelViewSet):
    serializer_class = TaskSerializers
    queryset = Task.objects.all()