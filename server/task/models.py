from django.db import models

# Create your models here.

class Task(models.Model):
    task_name    = models.CharField(max_length = 100)
    description  = models.CharField(max_length=500)
    client_name  = models.CharField(max_length=100)
    action_ower  = models.CharField(max_length=100)
    status       = models.CharField(max_length=100)
    created_date = models.DateField(null=False, blank=False)
    due_date     = models.DateField(null=False, blank=False)
    close_date   = models.DateField(null=False, blank=False)

    def __str__(self):
        return self.task_name

