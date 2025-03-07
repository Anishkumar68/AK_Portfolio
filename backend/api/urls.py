from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("testimonials", views.testimonialView, basename="testimonials")
router.register("projects", views.projectView, basename="projects")
router.register("blog", views.blogView, basename="blog")


urlpatterns = [
    path("", include(router.urls)),
]
