from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

from orders.models import *
from orders.serializers import OrderSerializer
from product.models import Product

@api_view(['POST'])
def addOrderItem(request, pk):
    user = Artist.objects.get(id = pk)
    data = request.data
    orderItems = data['orderItems']

    if orderItems and len(orderItems) == 0: 
        return Response({'detail': 'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)
    else: 
        order = Order.objects.create(
            artist = user, 
            payment_method= data['payment_method'],
            tax_price = data['tax_price'],
            shipping_price = data['shipping_price'],
            total_price = data['total_price'],
        )
        shipping = OrderAddress.objects.create(
            order = order, 
            address = data['shipping_address']['address'],
            city = data['shipping_address']['city'],
            postal_code = data['shipping_address']['postalCode'],
            country = data['shipping_address']['country'],
        )
        for i in orderItems:
            product = Product.objects.get(id = i['product'])

            item = OrderItem.objects.create(
                product = product, 
                order = order,
                name = product.name,
                price = i['price'],
                image = product.image.url,
            )
        
            product.delete()

        serializer = OrderSerializer(order, many = False)

        return Response(serializer.data)

