from django_filters import rest_framework as rest_filters
from rest_framework import generics, filters
from rest_framework.decorators import api_view
from rest_framework.response import Response

from artists.models import Artist
from product.service import ProductFilter, feed_service
from product.models import *
from product.serializers import *
from publications.models import PublicationCategory

@api_view(['GET'])
def getFeed(request, pk):
    artist = Artist.objects.get(id=pk)
    queryset = feed_service.get_post_list(artist)
    serializer = ListPostSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createProduct(request, pk):
    artist = Artist.objects.get(id=pk)
    category = PublicationCategory.objects.get(id=9)
    product = Product.objects.create(
                artist = artist,
                name = 'Product Name',
                category = category,
                description = '',
                price = 0,
            )
    serializer = ProductSerializer(product, many= False)
    return Response(serializer.data)

@api_view(['POST'])
def uploadImage(request):
    data = request.data
    product_id = data['product_id']
    product = Product.objects.get(id=product_id)
    product.image = request.FILES.get('image')
    product.save()
    return Response('Image was uploaded')

@api_view(['PUT'])
def updateProduct(request, pk):
    data = request.data
    product = Product.objects.get(id=pk)
    category = PublicationCategory.objects.get(id=data['category'])
    product.name = data['name']
    product.category = category
    product.description = data['description']
    product.price = data['price']
    product.save()
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    data = request.data
    product = Product.objects.get(id = pk)
    serializer = ProductSerializer(product, many = False)
    return Response(serializer.data)

class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer
    filter_backends = (rest_filters.DjangoFilterBackend, filters.SearchFilter)
    filterset_class = ProductFilter
    search_fields = ['name']

    def get_queryset(self):
        products = Product.objects.all().order_by('-created_at')
        return products
