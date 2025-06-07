from rest_framework import serializers

from .models import PublicationCategory, Publication, Review

class ListPostSerializer(serializers.ModelSerializer):
    artist_id = serializers.CharField(source="artist.id", read_only=True)
    artist = serializers.ReadOnlyField(source='artist.username')
    artist_first_name = serializers.ReadOnlyField(source='artist.first_name')
    artist_last_name = serializers.ReadOnlyField(source='artist.last_name')
    artist_image = serializers.ImageField(source='artist.image')

    class Meta:
        model = Publication
        fields = ("id", "artist", "artist_id", "artist_image", "artist_first_name", "artist_last_name", "image", "name", "category", "description", "reviews_amount", "likes_amount")


class PublicationCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = PublicationCategory
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    artist_image = serializers.ImageField(source="artist.image", read_only=True)
    artist_username = serializers.CharField(source="artist.username", read_only=True)
    artist_first_name = serializers.ReadOnlyField(source='artist.first_name')
    artist_last_name = serializers.ReadOnlyField(source='artist.last_name')

    class Meta: 
        model = Review
        fields = ['id', 'likes_amount', 'comment', 'created_at', 'artist', 'artist_image', 'artist_username', 'artist_first_name', 'artist_last_name', 'publication']


class PublicationSerializer(serializers.ModelSerializer):
    artist = serializers.CharField(source="artist.username", read_only=True)
    artist_id = serializers.CharField(source="artist.id", read_only=True)
    artist_image = serializers.ImageField(source="artist.image", read_only=True)
    category_name = serializers.CharField(source="category.name", read_only=True)
    reviews = serializers.SerializerMethodField(read_only=True)

    def get_reviews(self, obj):
        reviews = obj.review_set.all().order_by('-created_at')
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data

    class Meta:
        model = Publication
        fields = ['id', 'name', 'image', 'category', 'category_name', 'description', 'reviews_amount', 'likes_amount', 'created_at', 'artist_id', 'artist', 'artist_image', 'reviews']








