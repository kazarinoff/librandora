from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'musicapp'
urlpatterns = [
    path('station/<tid>/nexttrack',views.stationnextsong,name='stationnextsong'),
    path('randomsong',views.randomsong, name='randomsong'),
    path('playlist/new',views.playlistcreate,name='createpl'),
    path('playlist/all',views.playlistindex,name='indexpl'),
    path('playlist/<pid>',views.playlistshow,name='showpl'),
    path('song/<sid>/edit',views.editsong, name='editsong'),
    path('song/<sid>/createtag',views.createtag,name='createtag'),
    path('song/<sid>',views.showsong, name='showsong'),
    path('genre/all',views.genreindex,name='indexgenre'),
    path('station/<tid>/likesong/<sid>',views.likesong,name='likesong'),
    path('station/<tid>/dislikesong/<sid>',views.dislikesong,name='dislikesong'),
    path('station/<tid>',views.stationshow,name='showstation')

]
