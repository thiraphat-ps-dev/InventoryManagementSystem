from django.db import models


class Location(models.Model):
    title = models.CharField(max_length=120)
    image = models.ImageField(upload_to='locations/%Y/%m/%d/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Floor(models.Model):
    title = models.CharField(max_length=120)
    image = models.ImageField(upload_to='floors/%Y/%m/%d/')
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Position(models.Model):
    title = models.CharField(max_length=120)
    image = models.ImageField(upload_to='positions/%Y/%m/%d/')
    floor = models.ForeignKey(Floor, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
