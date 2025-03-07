from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    tech_stack =models.CharField(max_length=255)
    repo_link = models.URLField(blank=True, null=True)
    live_link = models.URLField(blank=True, null=True)
    image= models.ImageField(upload_to="porjects/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    image= models.ImageField(upload_to="blog/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class testimonials(models.Model):
    name = models.CharField(max_length=100)
    feedback = models.TextField()
    role = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
