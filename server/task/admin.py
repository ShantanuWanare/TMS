from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ('task_name','description','client_name','action_ower','status','created_date','due_date','close_date')

admin.site.register(Task, TaskAdmin)    