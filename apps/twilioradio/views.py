from django.shortcuts import render, HttpResponse
from twilio import twiml
from twilio.twiml.voice_response import VoiceResponse, Play, Gather
from apps.music.models import *
import os, random

def incomingcall(request):
    resp = VoiceResponse()
    resp.say("Welcome to Zaks library radio." , voice='woman',language='en-gb')
    gather = Gather(action='/twilio/playstation', method='GET')
    gather.say("Choose a station followed by the pound key. For the Hip Hop station, press 2, for the Rock station press 3, or press 6 for totally random?", voice='woman',language='en-gb')
    resp.append(gather)
    return HttpResponse(resp)

def playstation(request):
    dig=request.GET['Digits']
    skipintro=False
    if 'played' in request.GET: skipintro=True
    try:
        song=stationnextsonginternal(t.id)
        sid=song.id
    except: 
        rn=Song.objects.last().id
        x=True
        while x:
            sid=random.randint(9000,rn)
            if Song.objects.get(id=sid).filetype == 'mp3': x=False
    resp = VoiceResponse()
    if not skipintro:
        resp.say(f"Thank you for chosing station number {dig}. At any point you can press 1 followed by the pound key to dislike and skip this song. Please be kind. The algorithm is still in development.", voice='woman',language='en-gb')
    gather = Gather(action='/twilio/twiliodislike/'+str(dig)+'/'+str(sid), method='GET', numDigits='1')
    resp.append(gather)
    gather.play('http://5f1c429e.ngrok.io/twilio/playsong/'+str(sid))
    resp.redirect(f'/twilio/playstation?Digits={dig}&played=yes', method='GET')
    return HttpResponse(resp)

def dislikesong(request,tid,sid):
    resp = VoiceResponse()
    try:
        t=Station.objects.get(id=tid)
        s=Song.objects.get(id=sid)
        t.dislikedsongs.add(s)
    except:
        pass
    resp.say("Sorry you didn't like it. Back to the music", voice='woman',language='en-gb')
    resp.redirect(f'/twilio/playstation?Digits={tid}&played=yes', method='GET')
    return HttpResponse(resp)

def playsong(request,sid):
    song=Song.objects.get(id=sid)
    fname=song.location
    f = open(fname,"rb") 
    response = HttpResponse()
    response.write(f.read())
    response['Content-Type'] ='audio/mp3'
    response['Content-Length'] = os.path.getsize(fname )
    return response

