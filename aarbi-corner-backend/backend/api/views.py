from django.contrib.auth.models import User

from api.serializers import CollectionSerializer, UserSerializer, CollectionItemSerializer, UserSignUpSerializer

from rest_framework import viewsets
from rest_framework.viewsets import generics
from shop.models import Collection, CollectionItem


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class SignUpViewSet(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignUpSerializer


class CollectionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer
