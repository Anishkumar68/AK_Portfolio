from django.contrib import admin

from .models import testimonials, Project, BlogPost

# Register your models here.
admin.site.register(testimonials)
admin.site.register(Project)
admin.site.register(BlogPost)