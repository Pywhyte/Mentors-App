from django.contrib import admin

from .models import Mentor, Organization, Student, User

admin.site.register(Organization)
admin.site.register(User)
admin.site.register(Student)
admin.site.register(Mentor)
