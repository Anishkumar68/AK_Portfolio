from rest_framework import serializers
from .models import testimonials, Project, BlogPost

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields='__all__'

class testimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model=testimonials
        fields='__all__'
    
class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
    