from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    CUSTOMER = 'customer'
    PROVIDER = 'provider'
    ROLE_CHOICES = [
        (CUSTOMER, 'Customer'),
        (PROVIDER, 'Provider'),
    ]

    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default=CUSTOMER)
    linkedin_profile = models.URLField(max_length=200, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    reputation = models.IntegerField(default=0)
    language = models.CharField(max_length=10, default='en')