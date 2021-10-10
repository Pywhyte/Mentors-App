from rest_framework import viewsets

from .models import Mentor, Student
from .serializers import MentorSerializer, StudentSerializer


class MentorViewSet(viewsets.ModelViewSet):
    queryset = Mentor.objects.all().order_by("first_name")
    serializer_class = MentorSerializer


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by("first_name")
    serializer_class = StudentSerializer
