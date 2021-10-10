from django.db import models

SKILLS_CHOICES = (
    ("JAVA_SCRIPT", "java script"),
    ("DATA_SCIENCE", "data science"),
    ("PYTHON", "python"),
    ("AUTOMATIC_TESTING", "automatic testing"),
)


SKILL_LEVEL = (
    ("LOW", "low"),
    ("MIDDLE", "middle"),
    ("HIGH", "high"),
)


class Organization(models.Model):
    company_name = models.CharField(max_length=50)
    url = models.CharField(max_length=50)
    contact_number = models.CharField(max_length=50)


class User(models.Model):
    last_name = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    organization_id = models.ForeignKey(
        Organization, on_delete=models.SET_NULL, null=True
    )
    e_mail = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f"{self.last_name} {self.first_name}"


class Student(User):
    desire_skill = models.CharField(
        max_length=50, choices=SKILLS_CHOICES, default="PYTHON"
    )
    skill_level = models.CharField(max_length=50, choices=SKILL_LEVEL, default="PYTHON")


class Mentor(User):
    main_skill = models.CharField(
        max_length=50, choices=SKILLS_CHOICES, default="PYTHON"
    )
    skill_level = models.CharField(max_length=50, choices=SKILL_LEVEL, default="PYTHON")


# class Request(User):
#     student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
#     mentor_id = models.ForeignKey(Mentor, on_delete=models.CASCADE)
#     created = models.DateTimeField(auto_now_add=True)
#     start_date = models.DateTimeField()
#     period_days = models.DurationField()
#
#     desired_skill = models.CharField(
#         max_length=50, choices=SKILLS_CHOICES, default="PYTHON"
#     )
#
#     desired_skill_level = models.CharField(
#         max_length=50, choices=SKILL_LEVEL, default="PYTHON"
#     )
#
#     accepted = models.BooleanField()
