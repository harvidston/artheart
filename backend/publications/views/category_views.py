from rest_framework.decorators import api_view
from rest_framework.response import Response

from publications.models import PublicationCategory
from publications.serializers import PublicationCategorySerializer

@api_view(['GET'])
def getCategories(request):
    categories = PublicationCategory.objects.all()
    serializer = PublicationCategorySerializer(categories, many= True)
    return Response(serializer.data)

@api_view(['GET'])
def getCategory(request, pk):
    category = None
    pass 


