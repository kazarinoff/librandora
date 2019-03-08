from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'musicapp'
urlpatterns = [
    path('',views.index, name='index'),
    path('addtag',views.addtag,name='addtag'),
    path('randomsong',views.randomsong, name='randomsong'),
    path('playlist/new',views.playlistcreate,name='createpl'),
    path('playlist/all',views.playlistindex,name='indexpl'),
    path('playlist/<pid>/song',views.getplaylistsong,name='playlistsong'),    
    path('playlist/<pid>',views.playlistshow,name='showpl'),
    path('<sid>',views.editsong, name='editsong'),
    path('genre/all',views.genreindex,name='indexgenre')
]
