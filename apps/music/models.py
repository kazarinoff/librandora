from django.db import models
from django.db.models.fields.related import ManyToManyField

class Song(models.Model):
    filetype=models.CharField(max_length=20)
    location=models.CharField(max_length=255)
    album=models.CharField(max_length=100)
    compilation=models.CharField(max_length=100)
    rating=models.IntegerField(default=0)
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
    def sscore(self,tscore):
        score=0
        if self.genre in tscore['points']['genres']:
            # score+=tscore['points']['genres'][song.genre]
            score += 1
        if self.genre in tscore['minuses']['genres']:
            score -=1
        if self.album in tscore['points']['albums']:
            score += 1
        if self.artist in tscore['points']['artist']:
            score +=1
        if self.artist in tscore['minuses']['artist']:
            score -=1
        return score
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
        s=self.songs.first()        
        return {'station':t,'song':s.songdict()}

    # def tscore(self):
    #     scoredict={'points':{'genres':{},'albums':{},'artist':{},'tags':''},'minuses':{'genres':{},'albums':{},'artist':{}},'range':{'max':3,'min':-3}}
    #     # tags=Tag.objects.filter(songs__stations__id=self.id)
    #     songs=self.songs.all()
    #     dislikedsongs=self.dislikedsongs.all()
    #     gs=self.songs.all().values('genre').annotate(models.Count('genre'))
    #     for i in gs:
    #         scoredict['points']['genres'][i['genre']]=i['genre__count']
    #     dgs=self.dislikedsongs.all().values('genre').annotate(models.Count('genre'))
    #     for h in dgs:
    #         scoredict['minuses']['genres'][i['genre']]=i['genre__count']
    #     albums=self.songs.all().values('album').annotate(models.Count('album'))
    #     for i in albums:
    #         scoredict['points']['albums'][i['album']]=i['album__count']
    #     songtags=Tag.objects.filter(songs__stations__id=self.id).values('name','id')
    #     dalbums=self.dislikedsongs.all().values('genre').annotate(models.Count('album'))
    #     for h in dalbums:
    #         scoredict['minuses']['albums'][i['album']]=i['album__count']
    #     artists=self.songs.all().values('artist').annotate(models.Count('artist'))
    #     for i in artists:
    #         scoredict['points']['artist'][i['artist']]=i['artist__count']
    #     dartists=self.dislikedsongs.all().values('artist').annotate(models.Count('artist'))
    #     for h in dalbums:
    #         scoredict['minuses']['artist'][i['artist']]=i['artist__count']
    #     # scoredict['range']['max']=max(scoredict['points']['genres'].values()) + max(scoredict['points']['albums'].values())
    #     # scoredict['range']['min']=-1*(max(scoredict['minuses']['genres'].values()) + max(scoredict['minuses']['albums'].values()))
    #     return scoredict

    def tscore(self):
        tagsfor=Tag.objects.filter(songs__stations__id=self.id).values('id')
        tagsagainst=Tag.objects.filter(songs__forbiddenstations__id=self.id).values('id')
        scoredict={'points':[],'minuses':[],'range':{'tagnumber':0}}
        for tag in tagsfor:
            scoredict['points'].append(tag['id'])
        for tag in tagsagainst:
            scoredict['minuses'].append(tag['id'])
        scoredict['range']['tagnumber']=len(scoredict['points'])
        return scoredict
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

# def to_dict(self):
#     opts = self._meta
#     data = {}
#     for f in opts.concrete_fields + opts.many_to_many:
#         if isinstance(f, ManyToManyField):
#             if self.pk is None:
#                 data[f.name] = []
#             else:
#                 data[f.name] = list(f.value_from_object(self).values_list('pk', flat=True))
#         elif isinstance(f, models.DateTimeField):
#             if f.value_from_object(self) is not None:
#                 data[f.name] = f.value_from_object(self).timestamp()
#             else:
#                 data[f.name] = None
#         else:
#             data[f.name] = f.value_from_object(self)
#     return data