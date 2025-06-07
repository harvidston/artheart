from django.urls import path

from publications.views import category_views as views

urlpatterns = [
        path('', views.getCategories, name='categories'),
        path('<str:pk>/', views.getCategory, name='category'),
]
