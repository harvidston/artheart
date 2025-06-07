from django.db import models

from artists.models import Artist
from publications.models import PublicationCategory

class Product(models.Model):
    name = models.CharField(max_length = 200, null = False)
    artist = models.ForeignKey(Artist, on_delete = models.SET_NULL, null = True)
    image = models.ImageField(upload_to='products', null = False, blank = True)
    category = models.ForeignKey(PublicationCategory, on_delete = models.CASCADE, default=True, null = False)
    description = models.TextField(null = True)
    reviews_amount = models.IntegerField(null = True, default = 0)
    likes_amount = models.IntegerField(null = True, default = 0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=False, blank=True)
    created_at = models.DateTimeField(auto_now_add = True) 

    def __str__(self):
        return self.name
