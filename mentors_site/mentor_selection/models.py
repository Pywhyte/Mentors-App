import datetime
from datetime import timedelta
from typing import Union

from django.db import models
from django.utils import timezone


class DeadlineError(Exception):
    pass


class Users(models.Model):
    last_name = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f"{self.last_name} {self.first_name}"

