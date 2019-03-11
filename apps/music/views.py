from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from apps.music.models import *
import random
import json
from django.db.models import Count

def createtag(request,sid):
    if request.method=='POST':
        try:
            s=Song.objects.get(id=sid)
            taginfo=json.loads(request.body)
            tag=Tag.objects.create(name=taginfo['name'])
            s.tags.add(x)
            print (s.tags)
            return JsonResponse(songdict(s), safe=False)
        except:
            pass
    return JsonResponse({}, safe=False)

def randomsong(request):
    rn=Song.objects.last().id
    sn=random.randint(1,rn)
    song=songdict(sn)
    return JsonResponse(song, safe=False)

def showsong(request,sid):
    song=songdict(sid)
    return JsonResponse(song, safe=False)

def genreindex(request):
    g=Song.objects.values('genre').annotate(Count('genre'))
    gi=[]
    for genre in g:
        gi.append(genre)
    return JsonResponse(gi, safe=False)

# def getplaylistsong(request,pid):
#     if request.method=='POST':
#         songrequest=json.loads(request.body)
#         sid=songrequest['id']
#         s=Listing.objects.get(playlist=pid,song=sid).iterator().id
#         return JsonResponse(songdict(s), safe=False)
#     else:
#         s=Playlist.objects.get(id=pid).songs.first().id
#         return JsonResponse(songdict(s), safe=False)

def playlistshow(request,pid):
        return JsonResponse(playlistdict(pid), safe=False)

def stationshow(request,tid):
    t=Station.objects.filter(id=tid).values()[0]
    s=Station.objects.get(id=tid).songs.first().id
    return JsonResponse({'station':t,'song':songdict(s)}, safe=False)

def likesong(request,sid,tid):
    s=Song.objects.get(id=sid)
    t=Station.objects.get(id=tid)
    t.dislikedsongs.remove(s)
    Stationlisting.objects.create(song=s,station=t)
    print ('songliked')
    return JsonResponse(songdict(sid), safe=False)

def dislikesong(request,sid,tid):
    s=Song.objects.get(id=sid)
    t=Station.objects.get(id=tid)
    try:
        tl=Stationlisting.objects.get(song=sid,station=tid)
        tl.delete()
    except:
        pass
    Station.objects.get(id=tid).dislikedsongs.add(Song.objects.get(id=sid))
    print ('DISLLIKE')
    return JsonResponse(songdict(sid), safe=False)

def songdict(sid):
    x=Song.objects.filter(id=sid).values()[0]
    # x['tags']=list(Song.objects.get(id=sid).tags.all().values())
    return x

def playlistdict(pid):
    p=Playlist.objects.get(id=pid)
    pl=Playlist.objects.filter(id=pid).values()[0]
    songs=p.songs.all().values('id')
    songiddict={}
    songlist=[]
    for i in songs:
        songlist.append(i['id'])
        songiddict[i['id']]=0
    return {'playlist':pl,'songs':songiddict,'songlist':songlist}

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

def tscore(tid):
    scoredict={'points':{'genres':{},'albums':{},'artist':{}},'minuses':{'genres':{},'albums':{},'artist':{}},'range':{'max':3,'min':-3}}
    t=Station.objects.get(id=tid)
    songs=t.songs.all()
    dislikedsongs=t.dislikedsongs.all()
    gs=t.songs.all().values('genre').annotate(Count('genre'))
    for i in gs:
        scoredict['points']['genres'][i['genre']]=i['genre__count']
    dgs=t.dislikedsongs.all().values('genre').annotate(Count('genre'))
    for h in dgs:
        scoredict['minuses']['genres'][i['genre']]=i['genre__count']
    albums=t.songs.all().values('album').annotate(Count('album'))
    for i in albums:
        scoredict['points']['albums'][i['album']]=i['album__count']
    dalbums=t.dislikedsongs.all().values('genre').annotate(Count('album'))
    for h in dalbums:
        scoredict['minuses']['albums'][i['album']]=i['album__count']
    artists=t.songs.all().values('artist').annotate(Count('artist'))
    for i in artists:
        scoredict['points']['artist'][i['artist']]=i['artist__count']
    dartists=t.dislikedsongs.all().values('artist').annotate(Count('artist'))
    for h in dalbums:
        scoredict['minuses']['artist'][i['artist']]=i['artist__count']
    # scoredict['range']['max']=max(scoredict['points']['genres'].values()) + max(scoredict['points']['albums'].values())
    # scoredict['range']['min']=-1*(max(scoredict['minuses']['genres'].values()) + max(scoredict['minuses']['albums'].values()))
    return scoredict

def sscore(sid,tscore):
    score=0
    song=Song.objects.get(id=sid)
    if song.genre in tscore['points']['genres']:
        # score+=tscore['points']['genres'][song.genre]
        score += 1
    if song.genre in tscore['minuses']['genres']:
        score -=1
    if song.album in tscore['points']['albums']:
        score += 1
    if song.artist in tscore['points']['artist']:
        score +=1
    if song.artist in tscore['minuses']['artist']:
        score -=1
    return score

def stationnextsong(request, tid):
    rn=Song.objects.last().id
    stationscore=tscore(tid)
    matcharray= [0,0,0,1,1,1,1,1,1,2]
    matchvalue=matcharray[random.randint(0,9)]
    songscore=-999
    tries=0
    while (songscore < matchvalue) and (tries<100):
        sn=random.randint(1,rn)
        try:
            songscore=sscore(sn,stationscore)
            print (f"Mathing value:{matchvalue}  tries:{tries}  songscore:{songscore}")
            tries +=1
        except:
            tries +=1
    return JsonResponse(songdict(sn), safe=False)
