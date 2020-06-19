from django.db import models
from api.models import Position ,Category


class Item(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(max_length=120)
    number =  models.IntegerField(default=1) 
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    position = models.ForeignKey(Position, on_delete=models.CASCADE)
    mapitem = models.CharField(max_length=50)
    active = models.BooleanField(default=True)
    serial = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Itemimage(models.Model):
    item = models.ForeignKey(Item, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='items/%Y/%m/%d/')
