from django_filters import rest_framework as rest_filters, CharFilter

from .models import Product
from artists.models import Artist

class CharFilterInFilter(rest_filters.BaseInFilter, rest_filters.CharFilter):
    pass


class ProductFilter(rest_filters.FilterSet):
    category = CharFilter(field_name = 'category__name', lookup_expr='icontains')

    class Meta: 
        model = Product
        fields = ['category']


class Feed:
    def get_post_list(self, artist: Artist):
        return Product.objects.filter(artist__owner__subscriber=artist).order_by('-created_at').select_related('artist')

    def get_single_post(self, pk: int):
        return Product.objects.select_related('artist').prefetch_related('description').get(id=pk)

feed_service = Feed()

