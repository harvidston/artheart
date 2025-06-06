from django.shortcuts import render
from django.contrib.auth import login
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status, response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.generics import RetrieveUpdateAPIView

#from artists.serializers import RegistrationSerializer,LoginSerializer, NewArtistSerializer
#from artists.serializers import UserSerializer, UserSerializerWithToken, ArtistSerializer, ArtistSerializerWithToken, UserSerializerName, ListFollowersSerializer, ListFollowingSerializer
from artist.serializers import *
from artists.renderers import UserJSONRenderer
from artists.forms import SignUpForm
from product.serializers import ProductSerializer
from product.models import Product
from publications.models import Publication, Artist, Follower
from publications.serializers import PublicationSerializer


class ArtistRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    permission_classes = (AllowAny,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = NewArtistSerializer


    def update(self, request, *args, **kwargs):
        serializer_data = request.data.get('user', {})

        serializer = self.serializer_class(
            request.user, data=serializer_data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)

class LoginAPIView(APIView):
    permission_classes = (AllowAny,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = LoginSerializer

    def post(self, request):
        user = request.data.get('user', {})

        # Notice here that we do not call `serializer.save()` like we did for
        # the registration endpoint. This is because we don't  have
        # anything to save. Instead, the `validate` method on our serializer
        # handles everything we need.
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

class RegistrationAPIView(APIView):
    # Allow any user (authenticated or not) to hit this endpoint.
    permission_classes = (AllowAny,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = RegistrationSerializer

    def post(self, request):
        user = request.data.get('user', {})

        # The create serializer, validate serializer, save serializer pattern
        # below is common and you will see it a lot throughout this course and
        # your own work later on. Get familiar with it.
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def getIsAlreadyFollowArtist(request, pk):
    data = request.data
    subscriber = data['subscriber_id']
    try:
        user = Artist.objects.get(id=pk)
        subscriber = Artist.objects.get(id=subscriber)
    except Follower.DoesNotExist:
        return response.Response(status=404)
    if Follower.objects.filter(subscriber=subscriber, user=user).exists():
        is_follow = True
    else: 
        is_follow = False

    return Response(is_follow)

@api_view(['POST'])
def followArtist(request, pk):
    data = request.data
    subscriber = data['subscriber_id']
    try:
        user = Artist.objects.get(id=pk)
        subscriber = Artist.objects.get(id=subscriber)
    except Follower.DoesNotExist:
        return response.Response(status=404)
    Follower.objects.create(subscriber=subscriber, user=user)
    return response.Response(status=201)

@api_view(['PUT'])
def unfollowArtist(request, pk):
    data = request.data
    subscriber = data['subscriber_id']
    try:
        subscriber = Artist.objects.get(id=subscriber)
        subscription = Follower.objects.get(subscriber=subscriber, user_id=pk)
    except Follower.DoesNotExist:
        return response.Response(status=404)
    subscription.delete()
    return response.Response(status=204)

@api_view(['GET'])
def getFollowersArtist(request,pk):
    user = Artist.objects.get(id=pk)
    followers = Follower.objects.filter(user=user)

    serializer = ListFollowersSerializer(followers, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getFollowingArtist(request,pk):
    user = Artist.objects.get(id=pk)
    following = Follower.objects.filter(subscriber=user)

    serializer = ListFollowingSerializer(following, many = True)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateArtistDetails(request):
    artist = request.artist
    
    data = request.data
    artist.description = data['description']

    artist.save()

    return Response('Description was uploaded')



@api_view(['GET'])
def getArtist(request, pk):
    artist = Artist.objects.filter(id=pk)
    serializer = ArtistSerializer(artist, many= True)
    return Response(serializer.data)

@api_view(['GET'])
def getArtists(request):
    user = request.user
    artists = Artist.objects.all()
    serializer = ArtistSerializer(artists, many= True)
    return Response(serializer.data)

@api_view(['GET'])
def getUsers(request):
    user = Artist.objects.all()
    serializer = ArtistSerializer(user, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getUserUsername(request):
    user_id = request.user_id
    user = User.objects.get(id = user_id)
    username = user.username
    serializer = UserSerializerName(user, many = False)
    return Response(serializer.data)

@api_view(['GET'])
def getArtistPublications(request, pk):
    artist_publications = Publication.objects.filter(artist=pk).order_by('-created_at')

    user_publications_amount = len(artist_publications)
    serializer = PublicationSerializer(artist_publications, many= True)

    return Response(serializer.data)

@api_view(['GET'])
def getArtistProducts(request, pk):
    artist_products = Product.objects.filter(artist=pk).order_by('-created_at')

    serializer = ProductSerializer(artist_products, many= True)

    return Response(serializer.data)

@api_view(['GET'])
def getUserPublicationsAmount(request, pk):
    user_publications = Publication.objects.filter(user=pk)
    user_publications_amount = len(user_publications)
    
    data ={
        'amount': user_publications_amount,
    }

    return Response(data)

@api_view(['GET'])
def getUserSettings(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def uploadArtistImage(request):
    data = request.data

    artist_id = data['artist_id']
    artist = Artist.objects.get(id=artist_id)

    artist.image = request.FILES.get('image')
    artist.save()

    return Response('Image was uploaded')

@api_view(['POST'])
def updateArtistSettings(request):
    data = request.data

    artist_id = data['artist_id']
    artist = Artist.objects.get(id=artist_id)

    artist.first_name = request.FILES.get('first_name')
    artist.last_name = request.FILES.get('last_name')
    artist.username = request.FILES.get('username')
    artist.email = request.FILES.get('email')
    artist.description = request.FILES.get('description')
    artist.save()

    serializer = ArtistSerializer(artist, many=False)

    return Response(serializer.data)



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username
        token['email'] = user.email

        return token

    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer




@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        artist = Artist.objects.create(
            email = data['email'],
            password = make_password(data['password'])
        )
        artist.save()

        serializer = ArtistSerializerWithToken(artist, many= False)
        return Response(serializer.data)
    except: 
        message = {'detail': 'User with this email already exists'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signup(request):
    form = SignUpForm(request.POST)
    if form.is_valid():
        user = form.save()
        login(request, user)
        message = {'detail': 'Welcome!'}
        return Response(message)
    return render(request, 'users/signup.html', {'form': form})


