from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import Artist

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = Artist
        fields = '__all__'

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = Artist
        fields = '__all__'

class SignUpForm(UserCreationForm):
    class Meta:
        model = Artist
        fields = ("username", "email")

class LogInForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)
