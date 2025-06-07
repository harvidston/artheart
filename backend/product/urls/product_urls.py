from django.urls import path

from product.views import product_views as views

urlpatterns = [
        path('', views.ProductListView.as_view(), name='publications'),
        path('create/<int:pk>/', views.createProduct, name='publication_create'),
        path('upload/', views.uploadImage, name='image_upload'),
        path('update/<int:pk>/', views.updateProduct, name='publication_update'),
        path('<str:pk>/', views.getProduct, name='publication'),
        path('feed/<int:pk>/', views.getFeed, name = 'feed'),
]


