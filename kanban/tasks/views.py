from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from django.views.decorators.csrf import csrf_exempt



@csrf_exempt 
class TasksViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Task.objects.all().order_by('status')
    serializer_class = TaskSerializer

# class UserViewSet(viewsets.ModelViewSet):
#     """
#     A viewset that provides the standard actions
#     """
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
