from django.http import JsonResponse
from apps.music.models import *
import random, json, os
from django.db.models import Count

def tagindex(request):
    t=Tag.objects.all().values('name','id','kind').order_by('kind','name')
    ts={'genre':[],'mood':[],'style':[],'decade':[],'misc':[]}
    for i in t:
        if i['kind']=='genre':
            ts['genre'].append(i)
        if i['kind']=='decade':
            ts['decade'].append(i)
        if i['kind']=='mood':
            ts['mood'].append(i)
        if i['kind']=='style':
            ts['style'].append(i)
        if i['kind']=='misc':
            ts['misc'].append(i)
    return JsonResponse(ts, safe=False)

def createtag(request,sid):
    if request.method=='POST':
        try:
            s=Song.objects.get(id=sid)
            taginfo=json.loads(request.body)
            tag=Tag.objects.create(name=taginfo['name'],kind=taginfo['kind'])
            s.tags.add(tag)
        except:
            return JsonResponse({}, safe=False)
    return JsonResponse(s.songdict(), safe=False)

def addtag(request,sid,tgid):
    try:
        tag=Tag.objects.get(id=tgid)
        s=Song.objects.get(id=sid)
        tag.songs.add(s)
    except:
        return JsonResponse({}, safe=False)
    return JsonResponse(s.songdict(), safe=False)

def removetag(request,sid,tgid):
    try:
        tag=Tag.objects.get(id=tgid)
        s=Song.objects.get(id=sid)
        tag.songs.remove(s)
    except:
        return JsonResponse({}, safe=False)
    return JsonResponse(s.songdict(), safe=False)

def randomsong(request):
    try:
        rn=Song.objects.last().id
        n=random.randint(1,rn)
        song=Song.objects.get(id=n)
        return JsonResponse(song.songdict(), safe=False)
    except:
        return JsonResponse({}, safe=False)

def showsong(request,sid):
    if request.method=='POST':
        return editsong(request,sid)
    try:
        song=Song.objects.get(id=sid)
    except:
        return JsonResponse({}, safe=False)
    return JsonResponse(song.songdict(), safe=False)

def editsong(request,sid):
    try:
        s=Song.objects.get(id=sid)
        edits=json.loads(request.body)
        s.rating=edits['rating']
        s.save()
    except:
        return JsonResponse({}, safe=False)
    return JsonResponse(s.songdict(), safe=False)

def genreindex(request):
    g=Song.objects.values('genre').annotate(Count('genre'))
    gi=[]
    for genre in g:
        gi.append(genre)
    return JsonResponse(gi, safe=False)

def playlistshow(request,pid):
    try:
        pl=Playlist.objects.get(id=pid)
    except:
        return JsonResponse(False, safe=False)
    return JsonResponse(pl.pldict(), safe=False)

def stationshow(request,tid):
    try:
        t=Station.objects.get(id=tid)
    except:
        return JsonResponse(False, safe=False)
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
    try:
        s=Song.objects.get(id=sid)
        t=Station.objects.get(id=tid)
        try:
            tl=Stationlisting.objects.get(song=sid,station=tid)
            tl.delete()
        except:
            pass
        try:
            Station.objects.get(id=tid).dislikedsongs.add(Song.objects.get(id=sid))
            if not s.rating:
                s.rating=2
                s.save()
        except:
            return JsonResponse({}, safe=False)
    except:
        return JsonResponse({}, safe=False)
    return JsonResponse(s.songdict(), safe=False)

def removesong(request,sid,pid):
    try:
        p=Playlist.objects.get(id=pid)
        s=Song.objects.get(id=sid)
        Listing.objects.get(playlist=p,song=s).delete()
    except:
        return JsonResponse({}, safe=False)
    return JsonResponse(p.pldict(), safe=False)

def playlistindex(request):
    p=Playlist.objects.all().values('id','name')
    pls=[]
    for playlist in p:
        pls.append(playlist)
    return JsonResponse(pls, safe=False)

def playlistcreate(request):
    edits=json.loads(request.body)
    try:
        pl=Playlist.objects.create(name=edits['name'],description=edits['description'])
    except:
        return JsonResponse({'msg':'could not create playlist'}, safe=False)
    try:
        for g in edits['genres']:
            songs=Song.objects.filter(genre=g)
            for s in songs:
                Listing.objects.create(playlist=pl,song=s)
        for t in edits['tags']:
            songs=Tag.objects.get(id=int(t)).songs.all()
            for s in songs:
                Listing.objects.create(playlist=pl,song=s)
    except:
        pass
    return JsonResponse(pl.pldict(), safe=False)

def stationcreate(request):
    pass

def stationnextsong(request, tid):
    try:
        closevalue= random.choice([0,0,0,1,1,1,1,1,1,2])
        basesongs=Song.objects.exclude(rating__lte=2).exclude(forbiddenstations=tid)
        for tagnum in range(0,closevalue):
            basesongs=basesongs.filter(tags=(random.choice(Tag.objects.filter(songs__stations__id=tid))))
            basesongs=basesongs.exclude(tags=(random.choice(Tag.objects.filter(songs__forbiddenstations__id=tid))))
        if (basesongs.count() == 0):
            song=random.choice(Song.objects.exclude(rating__lte=2).exclude(forbiddenstations=tid))
        else:
            song=random.choice(basesongs)
        return JsonResponse(song.songdict(), safe=False)
    except:
        return randomsong(request)
