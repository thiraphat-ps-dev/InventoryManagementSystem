from django.db import models
from api.models import Department, Position, Jobposition
from django.contrib.auth.models import User


class Employee(models.Model):
    user = models.ForeignKey(User, unique=True, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    jobposition = models.ForeignKey(Jobposition, on_delete=models.CASCADE)
    position = models.ForeignKey(Position, on_delete=models.CASCADE)
    mapuser = models.CharField(max_length=50)
    image = models.ImageField(upload_to='employees/%Y/%m/%d/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
