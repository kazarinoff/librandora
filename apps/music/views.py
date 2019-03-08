from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from apps.music.models import *
from mutagen.mp3 import MP3
import os
import random
import json
from django.db.models import Count

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

def getsong(request,sid):
    song=songdict(sid)
    return JsonResponse(song, safe=False)

def genreindex(request):
    g=Song.objects.values('genre').annotate(Count('genre'))
    gi=[]
    for genre in g:
        gi.append(genre)
    return JsonResponse(gi, safe=False)

def getplaylistsong(request,pid):
    if request.method=='POST':
        songrequest=json.loads(request.body)
        sid=songrequest['id']
        s=Listing.objects.get(playlist=pid,song=sid).iterator().id
        return JsonResponse(songdict(s), safe=False)
    else:
        s=Playlist.objects.get(id=pid).songs.first().id
        return JsonResponse(songdict(s), safe=False)

def playlistshow(request,pid):
        return JsonResponse(playlistdict(pid), safe=False)

def songdict(sid):
    return (Song.objects.filter(id=sid).values()[0])

def playlistdict(pid):
    return (Playlist.objects.filter(id=pid).values()[0])

def editsong(request,sid):
    try:
        s=Song.objects.get(id=sid)
        edits=json.loads(request.body)
        s.rating=edits['rating']
        s.save()
        song=songdict(sid)
    except:
        print('didnt get the song')
        return JsonResponse({}, safe=False)
    
    return JsonResponse(song, safe=False)

def playlistindex(request):
    p=Playlist.objects.all().values('id','name')
    pls=[]
    for playlist in p:
        pls.append(playlist)
    return JsonResponse(pls, safe=False)

def playlistcreate(request):
    pass