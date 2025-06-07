from rest_framework import serializers

from .models import *
from product.models import Product
from artists.serializers import ArtistSerializer

class ListPostSerializer(serializers.ModelSerializer):
    artist_id = serializers.CharField(source="artist.id", read_only=True)
    artist = serializers.ReadOnlyField(source='artist.username')
    artist_first_name = serializers.ReadOnlyField(source='artist.first_name')
    artist_last_name = serializers.ReadOnlyField(source='artist.last_name')
    artist_image = serializers.ImageField(source='artist.image')

    class Meta:
        model = Product
        fields = ("id", "artist", "artist_id", "artist_image", "price", "artist_first_name", "artist_last_name", "image", "name", "category", "description")


class OrderAddressSerializer(serializers.ModelSerializer):
    artist = serializers.CharField(source="artist.username", read_only=True)
    artist_id = serializers.CharField(source="artist.id", read_only=True)
    artist_image = serializers.ImageField(source="artist.image", read_only=True)
    category_name = serializers.CharField(source="category.name", read_only=True)

    class Meta:
        model = OrderAddress
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    artist = serializers.CharField(source="artist.username", read_only=True)
    artist_id = serializers.CharField(source="artist.id", read_only=True)
    artist_image = serializers.ImageField(source="artist.image", read_only=True)
    category_name = serializers.CharField(source="category.name", read_only=True)

    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    orderItems = serializers.SerializerMethodField(read_only = True)
    shipping_address = serializers.SerializerMethodField(read_only = True)
    artist = serializers.SerializerMethodField(read_only = True)

    def get_orderItems(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemSerializer(items, many= True)
        return serializer.data

    def get_shipping_address(self, obj):
        try: 
            address = OrderAddressSerializer(obj.shipping_address, many = False)
        except: 
            address = False
        return address

    def get_artist(self, obj):
        artist = obj.artist
        serializer = ArtistSerializer(artist, many= False)
        return serializer.data

    class Meta:
        model = Order
        fields = '__all__'
