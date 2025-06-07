from django.urls import path

from publications.views import publication_views as views

urlpatterns = [
        path('', views.PublicationListView.as_view(), name='publications'),
        path('create/<int:pk>/', views.createPublication, name='publication_create'),
        path('create/review/<int:pk>/', views.createPublicationReview, name='publication_review_create'),
        path('upload/', views.uploadImage, name='image_upload'),
        path('update/<str:pk>/', views.updatePublication, name='publication_update'),
        path('<str:pk>/', views.getPublication, name='publication'),
        path('feed/<int:pk>/', views.getFeed, name = 'feed'),
]

