from django.conf.urls import url, include
from api.views import *
from rest_framework import routers, serializers, viewsets
from django.urls import path
router = routers.DefaultRouter()
router.register(r'items', ItemViewSet, basename='items')
router.register(r'employees', EmployeeViewSet, basename='employees')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^user/(?P<user__username>\w+)$',
        EmployeeDataView.as_view(), name='user'),
    url(r'^additem$', AddItemView.as_view(), name='additem'),


]
