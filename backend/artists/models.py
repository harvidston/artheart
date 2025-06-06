import jwt
from datetime import datetime, timedelta

from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser

from .managers import CustomUserManager

class Artist(AbstractUser):
    username = models.CharField(max_length = 20, null = False, unique = True)
    first_name = models.CharField(max_length = 20, null = False)
    last_name = models.CharField(max_length = 20, null = False)
    email = models.EmailField(_("email address"), max_length = 20, null = False, unique = True)
    image = models.ImageField(upload_to='profile_images', default='default_avatar.jpg')
    description = models.TextField(null = True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    @property
    def token(self):
        return self._generate_jwt_token()

    def get_full_name(self):
        return self.username

    def get_short_name(self):
        return self.username

    def _generate_jwt_token(self):
        dt = datetime.now() + timedelta(days=60)
        token = jwt.encode({
            'id': self.pk,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')
        return token
