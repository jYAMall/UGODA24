from django.db import models

class ServiceProvider(models.Model):
    user = models.OneToOneField('users.User', on_delete=models.CASCADE)
    services_offered = models.TextField()
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    reviews_count = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username
