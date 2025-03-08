from django.shortcuts import render
from rest_framework import viewsets
from .models import Testimonials, Project, BlogPost
from .serializers import Testimonialserializer, ProjectSerializer, BlogPostSerializer


# Create your views here.


class testimonialView(viewsets.ModelViewSet):
    queryset = Testimonials.objects.all().order_by("-created_at")
    serializer_class = Testimonialserializer


class projectView(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer


class blogView(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all().order_by("-created_at")
    serializer_class = BlogPostSerializer
