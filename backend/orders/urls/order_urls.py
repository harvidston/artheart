from django.urls import path

from orders.views import order_views as views

urlpatterns = [
        path('add/<int:pk>', views.addOrderItem, name='add_order'),
]

