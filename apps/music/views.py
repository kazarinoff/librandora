from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from apps.music.models import *
from mutagen.mp3 import MP3
import os
import random

def index(request):
    # songs=Song.objects.values('title','tags__name','id')
    # for x in songs:
    #     song=MP3("./static/"+x.title+".mp3")
        # print (song.info.length)
    # files = [ fi for fi in files if not fi.endswith(".dat") ]

    return render (request,'index.html')

def addtag(request):
    if request.method=='POST':
        s=Song.objects.get(id=request.POST['songid'])
        x=Tag.objects.create(name=request.POST['tagname'])
        x.save()
        s.tags.add(x)
        print (s.tags)
    return redirect ('musicapp:index')

def radio(request):
    return render(request,'radio.html') 

def randomsong(request):
    rn=Song.objects.last().id
    sn=random.randint(1,rn)
    song=songdict(sn)
    return JsonResponse(song, safe=False)

def nextsong(request,sid):
    s=Song.objects.get(id=sid)

def playlist(request,rid):
    playlist=Playlist.objects.get(id=rid)
    return render(request,'playlistshow.html',{'playlist':playlist,'songs':playlist.songs})

def songdict(sid):
    return (Song.objects.filter(id=sid).values()[0])


