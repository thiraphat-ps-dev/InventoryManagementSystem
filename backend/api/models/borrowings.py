from django.db import models
from api.models import Item , Employee 

class Borrowing(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=50,default="wait approve")
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class History(models.Model):
    status = models.CharField(max_length=50,default="wait approve")
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

