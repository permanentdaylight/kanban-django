from django.contrib.auth.models import User
from django.db import models

class Task(models.Model):
    STATUS_LEVEL = ((1, "To Do"), (2, "In Progress"), (3, "Finished"))
    PRIORITY_LEVEL = ((1, "Low"), (2, "Normal"), (3, "Urgent"))

    title = models.CharField(max_length=150)
    notes = models.TextField(max_length=400, blank=True)
    status = models.IntegerField(choices=STATUS_LEVEL, blank=True)
    priority = models.IntegerField(choices=PRIORITY_LEVEL, blank=True)
    last_edited = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.title)
