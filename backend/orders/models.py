from django.db import models

from artists.models import Artist
from product.models import Product

class Order(models.Model):
    artist = models.ForeignKey(Artist, on_delete = models.SET_NULL, null = True)
    payment_method = models.CharField(max_length = 200, null = True) 
    tax_price = models.DecimalField(max_digits = 7, decimal_places=2, null=True, blank=True) 
    shipping_price = models.DecimalField(max_digits = 7, decimal_places=2, null=True, blank=True)
    total_price = models.DecimalField(max_digits = 7, decimal_places=2, null=True, blank=True)
    is_paid = models.BooleanField(default=False)
    paid_at = models.DateTimeField(auto_now_add=False, null=True, blank=True) 
    is_delivered = models.BooleanField(default=False)
    delivered_at = models.DateTimeField(auto_now_add=False, null=True, blank=True) 
    created_at = models.DateTimeField(auto_now_add= True) 


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete= models.SET_NULL, null= True)  
    product = models.ForeignKey(Product, on_delete= models.SET_NULL, null = True) 
    name = models.CharField(max_length= 200, null = True) 
    price = models.DecimalField(max_digits = 7, decimal_places=2, null=True, blank=True)
    image = models.ImageField() 

    def __str__(self):
        return self.name


class OrderAddress(models.Model):
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null= True) 
    address = models.CharField(max_length= 200, null = True)
    city = models.CharField(max_length= 40, null = True) 
    country = models.CharField(max_length= 40, null = True) 
    postal_code = models.CharField(max_length=50, null = True) 
    shipping_price = models.DecimalField(max_digits = 7, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.address
