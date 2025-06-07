from django_filters import rest_framework as rest_filters, CharFilter

from .models import Publication
from artists.models import Artist

class CharFilterInFilter(rest_filters.BaseInFilter, rest_filters.CharFilter):
    pass


class PublicationFilter(rest_filters.FilterSet):
    category = CharFilter(field_name = 'category__name', lookup_expr='icontains')

    class Meta: 
        model = Publication
        fields = ['category']


class Feed:
    def get_post_list(self, artist: Artist):
        return Publication.objects.filter(artist__owner__subscriber=artist).order_by('-created_at').select_related('artist')

    def get_single_post(self, pk: int):
        return Publication.objects.select_related('artist').prefetch_related('description').get(id=pk)

feed_service = Feed()

