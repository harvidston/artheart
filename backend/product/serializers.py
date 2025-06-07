from rest_framework import serializers

from .models import *

class ListPostSerializer(serializers.ModelSerializer):
    artist_id = serializers.CharField(source="artist.id", read_only=True)
    artist = serializers.ReadOnlyField(source='artist.username')
    artist_first_name = serializers.ReadOnlyField(source='artist.first_name')
    artist_last_name = serializers.ReadOnlyField(source='artist.last_name')
    artist_image = serializers.ImageField(source='artist.image')

    class Meta:
        model = Product
        fields = ("id", "artist", "artist_id", "artist_image", "price", "artist_first_name", "artist_last_name", "image", "name", "category", "description")


class ProductSerializer(serializers.ModelSerializer):
    artist = serializers.CharField(source="artist.username", read_only=True)
    artist_id = serializers.CharField(source="artist.id", read_only=True)
    artist_image = serializers.ImageField(source="artist.image", read_only=True)
    category_name = serializers.CharField(source="category.name", read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'image', 'category', 'price', 'category_name', 'description', 'reviews_amount', 'likes_amount', 'created_at', 'artist_id', 'artist', 'artist_image']






