from django.conf.urls import url, include
from api.views import *
from rest_framework import routers, serializers, viewsets
from django.urls import path
router = routers.DefaultRouter()
router.register(r'items', ItemViewSet, basename='items')

urlpatterns = [
    url(r'^', include(router.urls)),
    # url(r'^api/', include((router.urls, 'items'), namespace='items')),
    url(r'^additem$', AddItemView.as_view(), name='additem'),
    # url(r'^item/(?P<pk>\d+)$', blog_detail, name='blog'),

]
