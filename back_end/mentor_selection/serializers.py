from rest_framework import serializers

from .models import Mentor, Organization, Student, User


class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = "__all__"
        depth = 1


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"
        depth = 1


class OrgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
