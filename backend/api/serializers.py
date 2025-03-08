from rest_framework import serializers
from .models import Testimonials, Project, BlogPost


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class Testimonialserializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonials
        fields = "__all__"


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = "__all__"
