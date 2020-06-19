from django.contrib import admin
from api.models import Department, Location, Floor, Position, Jobposition, Employee, Category, Item, Itemimage, Borrowing, History

# Register your models here.


class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'updated_at')


class JobpositionAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'updated_at')


class LocationAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'updated_at')


class FloorAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'updated_at')


class PositionAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'updated_at')


class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_at', 'updated_at')


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'updated_at')


class ItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'updated_at')


class ItemimageAdmin(admin.ModelAdmin):
    list_display = ('id', 'item', 'image')


class BorrowingAdmin(admin.ModelAdmin):
    list_display = ('id', 'item', 'created_at', 'updated_at')


class HistoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'item', 'created_at', 'updated_at')


admin.site.register(Department, DepartmentAdmin)
admin.site.register(Jobposition, JobpositionAdmin)
admin.site.register(Employee, EmployeeAdmin)
admin.site.register(Location, LocationAdmin)
admin.site.register(Floor, FloorAdmin)
admin.site.register(Position, PositionAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Itemimage, ItemimageAdmin)
admin.site.register(Borrowing, BorrowingAdmin)
admin.site.register(History, HistoryAdmin)
