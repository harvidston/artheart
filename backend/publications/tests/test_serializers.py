import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
import django
django.setup()
import unittest

from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
from datetime import datetime
from rest_framework.exceptions import ValidationError

from publications.serializers import (
    ListPostSerializer,
    PublicationCategorySerializer,
    ReviewSerializer,
    PublicationSerializer
)
from publications.models import Publication, PublicationCategory, Review

User = get_user_model()

class TestPublicationSerializers(unittest.TestCase):

    def setUp(self):
        self.artist, _ = User.objects.get_or_create(
            username='testartist',
            defaults={
                'first_name': 'Test',
                'last_name': 'Artist',
                'email': 'artist@test.com',
            }
        )
        self.category = PublicationCategory.objects.create(
            name="Test Category"
        )
        self.publication = Publication.objects.create(
            artist=self.artist,
            name="Test Publication",
            category=self.category,
            description="Description for test publication",
            image=SimpleUploadedFile(name='test_image.jpg', content=b'', content_type='image/jpeg'),
            reviews_amount=0,
            likes_amount=0
        )
        self.review = Review.objects.create(
            artist=self.artist,
            publication=self.publication,
            comment="Great publication!",
            likes_amount=5,
            created_at=datetime.now()
        )

    def test_list_post_serializer(self):
        serializer = ListPostSerializer(instance=self.publication)
        data = serializer.data
        self.assertEqual(data['artist'], self.artist.username)
        self.assertEqual(data['name'], self.publication.name)
        self.assertIn('artist_image', data)

    def test_publication_category_serializer(self):
        serializer = PublicationCategorySerializer(instance=self.category)
        data = serializer.data
        self.assertEqual(data['name'], self.category.name)

    def test_review_serializer(self):
        serializer = ReviewSerializer(instance=self.review)
        data = serializer.data
        self.assertEqual(data['comment'], self.review.comment)
        self.assertEqual(data['artist_username'], self.artist.username)
        self.assertEqual(data['likes_amount'], self.review.likes_amount)

    def test_publication_serializer(self):
        serializer = PublicationSerializer(instance=self.publication)
        data = serializer.data
        self.assertEqual(data['name'], self.publication.name)
        self.assertEqual(data['category_name'], self.category.name)
        self.assertEqual(data['artist'], self.artist.username)
        self.assertIn('reviews', data)
        self.assertIsInstance(data['reviews'], list)
        # Проверяем что в reviews содержится хотя бы один отзыв с ожидаемым комментарием
        self.assertTrue(any(r['comment'] == "Great publication!" for r in data['reviews']))

if __name__ == '__main__':
    unittest.main()

