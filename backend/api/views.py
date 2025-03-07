from django.shortcuts import render
from rest_framework import viewsets
from .models import testimonials, Project, BlogPost
from .serializers import testimonialSerializer, ProjectSerializer, BlogPostSerializer


# Create your views here.

class testimonialView(viewsets.ModelViewSet):
    queryset = testimonials.objects.all().order_by('-created_at')
    serializer_class = testimonialSerializer

class projectView(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

class blogView(viewsets.ModelViewSet):    
    queryset = BlogPost.objects.all().order_by('-created_at')
    serializer_class = BlogPostSerializer