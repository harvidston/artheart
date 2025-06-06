from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from artists.views import artist_views as views

urlpatterns = [
        path('', views.getUsers, name='all_users'),
        path('name/', views.getUserUsername, name='username'),
        path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
        path('login/', views.LoginAPIView.as_view(), name='token_obtain_pair'),
        path('settings/', views.getUserSettings, name='users_settings'),
        path('isfollow/<int:pk>/', views.getIsAlreadyFollowArtist, name='is_follow'),
        path('artist/settings/update/', views.updateArtistSettings, name='user_settings_update'),
        path('artist/upload/', views.uploadArtistImage, name='artist_image_upload'),
        path('register/', views.RegistrationAPIView.as_view(), name = 'register_user'),
        path('artist/publications/<int:pk>/', views.getArtistPublications, name = 'artist_publications'),
        path('artist/products/<int:pk>/', views.getArtistProducts, name = 'artist_products'),
        path('publicationsamount/<str:pk>/', views.getUserPublicationsAmount, name = 'user_profile_info'),
        path('artists/', views.getArtists, name = 'artists'),
        path('artist/follow/<int:pk>/', views.followArtist, name = 'artist_follow'),
        path('artist/unfollow/<int:pk>/', views.unfollowArtist, name = 'artist_unfollow'),
        path('artist/followers/<int:pk>/', views.getFollowersArtist, name = 'artist_followers'),
        path('artist/following/<int:pk>/', views.getFollowingArtist, name = 'artist_following'),
        path('artist/<int:pk>/', views.getArtist, name = 'artist_image'),
        path('artist/update/', views.updateArtistDetails, name='artist_details_update'),
        path('newartist/', views.ArtistRetrieveUpdateAPIView.as_view(), name='artist_details_update'),
]
