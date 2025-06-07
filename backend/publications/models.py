from django.db import models

from artists.models import Artist

class Follower(models.Model):
    user =  models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='owner', null = False, blank = True) 
    subscriber =  models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='subscribers', null = False, blank = True)

    def __str__(self):
        return self.user.username


class PublicationCategory(models.Model):
    name = models.CharField(max_length = 200, null = False)
    description = models.TextField(null = True)

    def __str__(self):
        return self.name


class Publication(models.Model):
    name = models.CharField(max_length = 200, null = False)
    artist = models.ForeignKey(Artist, on_delete = models.SET_NULL, null = True)
    image = models.ImageField(null = False, blank = True)
    category = models.ForeignKey(PublicationCategory, on_delete = models.CASCADE, default=True, null = False)
    description = models.TextField(null = True)
    reviews_amount = models.IntegerField(null = True, default = 0)
    likes_amount = models.IntegerField(null = True, default = 0)
    created_at = models.DateTimeField(auto_now_add = True) 

    def __str__(self):
        return self.name


class Notification(models.Model):
    message = models.TextField(null = True)
    artist = models.ForeignKey(Artist, on_delete = models.SET_NULL, null = True)
    created_at = models.DateTimeField(auto_now_add = True)


class Review(models.Model):
    artist = models.ForeignKey(Artist, on_delete = models.SET_NULL, null = True)
    publication = models.ForeignKey(Publication, on_delete = models.SET_NULL, null = True)
    likes_amount = models.IntegerField(null = True, default = 0)
    comment = models.TextField(null = True, blank = True)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.comment
