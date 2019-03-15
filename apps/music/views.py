from django.http import JsonResponse
from apps.music.models import *
import random, json, os
from django.db import models

def createtag(request,sid):
    if request.method=='POST':
        try:
            s=Song.objects.get(id=sid)
            taginfo=json.loads(request.body)
            tag=Tag.objects.create(name=taginfo['name'])
            s.tags.add(x)
            return JsonResponse(s.songdict(), safe=False)
        except:
            pass
    return JsonResponse({}, safe=False)

def addtag(request,sid,tgid):
    try:
        tag=Tag.objects.get(id=tgid)
        s=Song.objects.get(id=sid)
        tag.songs.add(s)
    except:
        s=Song.objects.first()
    return JsonResponse(s.songdict(), safe=False)


def removetag(request,sid,tgid):
    try:
        tag=Tag.objects.get(id=tgid)
        s=Song.objects.get(id=sid)
        tag.songs.remove(s)
    except:
        s=Song.objects.first()
    return JsonResponse(s.songdict(), safe=False)

def randomsong(request):
    rn=Song.objects.last().id
    sid=random.randint(1,rn)
    song=Song.objects.get(id=sid)
    return JsonResponse(song.songdict(), safe=False)

def showsong(request,sid):
    if request.method=='POST':
        return editsong(request,sid)
    song=Song.objects.get(id=sid)
    return JsonResponse(song.songdict(), safe=False)

def genreindex(request):
    g=Song.objects.values('genre').annotate(models.Count('genre'))
    gi=[]
    for genre in g:
        gi.append(genre)
    return JsonResponse(gi, safe=False)

def playlistshow(request,pid):
    pl=Playlist.objects.get(id=pid)
    return JsonResponse(pl.pldict(), safe=False)

def stationshow(request,tid):
    t=Station.objects.get(id=tid)
    return JsonResponse(t.tdict(), safe=False)

def likesong(request,sid,tid):
    try:
        s=Song.objects.get(id=sid)
        t=Station.objects.get(id=tid)
        t.dislikedsongs.remove(s)
        Stationlisting.objects.create(song=s,station=t)
        sd=s.songdict()
    except:
        sd={'msg':'could not like song'}
    return JsonResponse(sd, safe=False)

def dislikesong(request,sid,tid):
    s=Song.objects.get(id=sid)
    t=Station.objects.get(id=tid)
    try:
        tl=Stationlisting.objects.get(song=sid,station=tid)
        tl.delete()
    except:
        pass
    try:
        Station.objects.get(id=tid).dislikedsongs.add(Song.objects.get(id=sid))
    except:
        return JsonResponse({}, safe=False)
    return JsonResponse(s.songdict(), safe=False)

def editsong(request,sid):
    try:
        s=Song.objects.get(id=sid)
        edits=json.loads(request.body)
        s.rating=edits['rating']
        s.save()
    except:
        return JsonResponse({}, safe=False)
    return JsonResponse(s.songdict(), safe=False)

def playlistindex(request):
    p=Playlist.objects.all().values('id','name')
    pls=[]
    for playlist in p:
        pls.append(playlist)
    return JsonResponse(pls, safe=False)

def tagindex(request):
    t=Tag.objects.all()
    ts=[]
    for i in t:
        ts.append(i.tagdict())
    return JsonResponse(ts, safe=False)

def playlistcreate(request):
    pass

def stationcreate(request):
    pass

def stationnextsong(request, tid):
    rn=Song.objects.last().id
    stationscore=Station.objects.get(id=tid).tscore()
    matcharray= [0,0,0,1,1,1,1,1,1,2]
    matchvalue=matcharray[random.randint(0,9)]
    songscore=-999
    tries=0
    while (songscore < matchvalue) and (tries<100):
        sn=random.randint(1,rn)
        try:
            song=Song.objects.get(id=sn)
            songscore=song.sscore(stationscore)
            print (f"Mathing value:{matchvalue}  tries:{tries}  songscore:{songscore}")
            tries +=1
        except:
            tries +=1
    return JsonResponse(song.songdict(), safe=False)