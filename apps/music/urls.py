from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'musicapp'
urlpatterns = [
    path('',views.index, name='index'),
    path('addtag',views.addtag,name='addtag'),
    path('radio',views.radio, name='radio'),
    path('randomsong',views.randomsong, name='randomsong'),
    path('playlist/<pid>',views.playlist,name='showpl')
]
