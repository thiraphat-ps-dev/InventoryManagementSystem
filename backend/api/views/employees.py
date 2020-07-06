from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from api.serializers import EmployeeSerializer
from api.models import Employee
from api.pagination import CustomPagination
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope

from django.http import HttpResponse


class EmployeeViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Employee.objects.all().order_by('created_at', '-id')
    serializer_class = EmployeeSerializer
    pagination_class = CustomPagination


class EmployeeDataView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    # lookup_field = 'user__username'

    def get_queryset(self):
        """Returns Polls that belong to the current user"""
        current_user = self.request.user
        return Employee.objects.filter(id=current_user.id)
    # print current_user.id
    # queryset = Employee.objects.filter(id=current_user.id)
    serializer_class = EmployeeSerializer
    pagination_class = None
