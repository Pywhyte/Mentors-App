from rest_framework import viewsets

from .models import Mentor, Organization, Student
from .serializers import MentorSerializer, OrgSerializer, StudentSerializer


class MentorViewSet(viewsets.ModelViewSet):
    queryset = Mentor.objects.all().order_by("first_name")
    serializer_class = MentorSerializer


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by("first_name")
    serializer_class = StudentSerializer


class OrgViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all().order_by("company_name")
    serializer_class = OrgSerializer
