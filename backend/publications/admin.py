from django.contrib import admin

from .models import *

admin.site.register(Publication)
admin.site.register(Review)
admin.site.register(Notification)
admin.site.register(PublicationCategory)
admin.site.register(Follower)
