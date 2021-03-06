# Generated by Django 3.2.8 on 2021-10-10 15:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Organization",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("company_name", models.CharField(max_length=50)),
                ("url", models.CharField(max_length=50)),
                ("contact_number", models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("last_name", models.CharField(max_length=50)),
                ("first_name", models.CharField(max_length=50)),
                ("e_mail", models.EmailField(max_length=254)),
                ("phone_number", models.CharField(max_length=50)),
                (
                    "organization_id",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="mentor_selection.organization",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Mentor",
            fields=[
                (
                    "user_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="mentor_selection.user",
                    ),
                ),
                (
                    "main_skill",
                    models.CharField(
                        choices=[
                            ("JAVA_SCRIPT", "java script"),
                            ("DATA_SCIENCE", "data science"),
                            ("PYTHON", "python"),
                            ("AUTOMATIC_TESTING", "automatic testing"),
                        ],
                        default="PYTHON",
                        max_length=50,
                    ),
                ),
                (
                    "skill_level",
                    models.CharField(
                        choices=[
                            ("LOW", "low"),
                            ("MIDDLE", "middle"),
                            ("HIGH", "high"),
                        ],
                        default="PYTHON",
                        max_length=50,
                    ),
                ),
            ],
            bases=("mentor_selection.user",),
        ),
        migrations.CreateModel(
            name="Student",
            fields=[
                (
                    "user_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="mentor_selection.user",
                    ),
                ),
                (
                    "desire_skill",
                    models.CharField(
                        choices=[
                            ("JAVA_SCRIPT", "java script"),
                            ("DATA_SCIENCE", "data science"),
                            ("PYTHON", "python"),
                            ("AUTOMATIC_TESTING", "automatic testing"),
                        ],
                        default="PYTHON",
                        max_length=50,
                    ),
                ),
                (
                    "skill_level",
                    models.CharField(
                        choices=[
                            ("LOW", "low"),
                            ("MIDDLE", "middle"),
                            ("HIGH", "high"),
                        ],
                        default="PYTHON",
                        max_length=50,
                    ),
                ),
            ],
            bases=("mentor_selection.user",),
        ),
    ]
