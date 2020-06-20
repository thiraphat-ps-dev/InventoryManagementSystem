from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from api.serializers import ItemSerializer
from api.models import Item
from api.pagination import CustomPagination
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope

from django.http import HttpResponse


class ItemViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Item.objects.all().order_by('created_at', '-id')
    serializer_class = ItemSerializer
    pagination_class = CustomPagination


class ItemListView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Item.objects.all().order_by('created_at', '-id')
    serializer_class = ItemSerializer
    pagination_class = CustomPagination


class AddItemView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Item.objects.all().order_by('created_at', '-id')
    serializer_class = ItemSerializer
    pagination_class = CustomPagination
