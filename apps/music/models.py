from django.db import models
from django.db.models.fields.related import ManyToManyField
import random

class Song(models.Model):
    filetype=models.CharField(max_length=20)
    location=models.CharField(max_length=255)
    album=models.CharField(max_length=100)
    compilation=models.CharField(max_length=100)
    rating=models.IntegerField(null=True)
    composer=models.CharField(max_length=100)
    encodedby=models.CharField(max_length=100)
    length=models.CharField(max_length=100)
    title=models.CharField(max_length=100)
    artist=models.CharField(max_length=100)
    albumartist=models.CharField(max_length=100)
    discnumber=models.CharField(max_length=100)
    tracknumber=models.CharField(max_length=100)
    genre=models.CharField(max_length=100)
    date=models.CharField(max_length=100)
    originaldate=models.CharField(max_length=100)
    performer=models.CharField(max_length=100)
    organization=models.CharField(max_length=100)
    performer2=models.CharField(max_length=100)
    playbackgap=models.CharField(max_length=100)
    comment=models.CharField(max_length=255)
    work=models.CharField(max_length=100)
    movement=models.CharField(max_length=100)
    def __repr__(self):
        return (f"Song #{self.id}: {self.title} by {self.artist}")
    def songdict(self):
        s={'id':self.id,'location':self.location,'album':self.album,'rating':self.rating,'length':self.length,
        'title':self.title,'artist':self.artist, 'albumartist':self.albumartist, 
        'tracknumber':self.tracknumber,'genre':self.genre,'date':self.date,
        'originaldate':self.originaldate,'performer':self.performer,'comment':self.comment}
        tagsarr=[]
        for i in self.tags.all():
            tagsarr.append(i.id)
        s['tags']=tagsarr
        return s

class Tag(models.Model):
    name=models.CharField(max_length=100)
    songs = models.ManyToManyField(Song, related_name="tags")
    decade= 'decade'
    genre='genre'
    mood='mood'
    misc='misc'
    style='style'
    kind_choices= (
        (decade,'decade'),
        (genre,'genre'),
        (mood,'mood'),
        (style,'style'),
        (misc,'miscellaneous'),
    )
    kind = models.CharField(max_length=50,choices=kind_choices)
    relatives= models.ManyToManyField('self', related_name="relatedtags")

    def tagdict(self):
        return {'name':self.name,'id':self.id,'kind':self.kind}
    def __repr__(self):
        return (f"Tag #{self.id}: {self.name}")

class Playlist(models.Model):
    name=models.CharField(max_length=100)
    relatedplaylists= models.ManyToManyField('self', related_name="companionplaylists")
    songs=models.ManyToManyField(Song, through='Listing',related_name='playlists')
    description=models.TextField()
    def __repr__(self):
        return (f"Playlist #{self.id}: {self.name}")
    
    def pldict(self):
        pl={'id':self.id,'name':self.name,'description':self.description}
        songids={}
        songlist=[]
        relatedplaylists=[]
        for i in self.songs.all().values('id'):
            songlist.append(i['id'])
            songids[i['id']]=0
        for h in self.relatedplaylists.all().values('id'):
            relatedplaylists.append(h['id'])
        return {'playlist':pl,'songs':songids,'songlist':songlist,'relatedplaylists':relatedplaylists}

class Station(models.Model):
    name=models.CharField(max_length=100)
    songs=models.ManyToManyField(Song, through='Stationlisting',related_name='stations')
    dislikedsongs=models.ManyToManyField(Song, related_name='forbiddenstations')
    description=models.TextField()
    def __repr__(self):
        return (f"Station #{self.id}: {self.name}")

    def tdict(self):
        t={'name':self.name,'description':self.description,'id':self.id}
        s=random.choice(self.songs.all())
        return {'station':t,'song':s.songdict()}

class Listing(models.Model):
    song=models.ForeignKey(Song, on_delete=models.CASCADE)
    playlist=models.ForeignKey(Playlist, on_delete=models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)
    def __repr__(self):
        return (f"Playlist Listing #{self.id}: {self.song.title}, on {self.playlist.name}")

class Stationlisting(models.Model):
    song=models.ForeignKey(Song, on_delete=models.CASCADE)
    station=models.ForeignKey(Station, on_delete=models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)
    def __repr__(self):
        return (f"Station Listing #{self.id}: {self.song.title}, on {self.station.name}")