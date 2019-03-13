from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'twilio'
urlpatterns = [
    path('receivecall',views.incomingcall, name='receivecall'),
    path('playsong/<sid>',views.playsong, name='playsong'),
    path('twiliodislike/<tid>/<sid>',views.dislikesong, name='dislike'),
    path('playstation',views.playstation, name='playstation'),
]
