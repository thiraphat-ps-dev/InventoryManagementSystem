from rest_framework import serializers
from api.models import Employee
from .user import UserSerializer


class EmployeeSerializer(serializers.ModelSerializer):
    # user = UserSerializer
    username = serializers.CharField(source='user.username', read_only=True)
    email = serializers.CharField(source='user.email', read_only=True)
    name = serializers.CharField(source='user.first_name', read_only=True)
    department = serializers.CharField(
        source='jobposition.department', read_only=True)
    jobposition = serializers.CharField(
        source='jobposition.title', read_only=True)
    position = serializers.CharField(
        source='position.title', read_only=True)

    class Meta:
        model = Employee
        fields = ('id', 'user', 'username', 'name', 'email', 'department', 'jobposition', 'position',
                  'mapuser', 'image', 'created_at', 'updated_at')
