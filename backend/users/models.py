from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    linkedin_profile = models.URLField(max_length=200, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    reputation = models.IntegerField(default=0)
    language = models.CharField(max_length=10, default='en')