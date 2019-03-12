import os
from apps.music.models import *
from mutagen.easyid3 import EasyID3
from mutagen.mp4 import MP4
import logging

# alleasyid3keys = ['album', 'bpm', 'compilation', 'composer', 'copyright', 'encodedby', 'lyricist', 'length', 'media', 'mood', 'title', 'version', 'artist', 'albumartist', 'conductor', 'arranger', 'discnumber', 'organization', 'tracknumber', 'author', 'albumartistsort', 'albumsort', 'composersort', 'artistsort', 'titlesort', 'isrc', 'discsubtitle', 'language', 'genre', 'date', 'originaldate', 'performer:*', 'musicbrainz_trackid', 'website', 'replaygain_*_gain', 'replaygain_*_peak', 'musicbrainz_artistid', 'musicbrainz_albumid', 'musicbrainz_albumartistid', 'musicbrainz_trmid', 'musicip_puid', 'musicip_fingerprint', 'musicbrainz_albumstatus', 'musicbrainz_albumtype', 'releasecountry', 'musicbrainz_discid', 'asin', 'performer', 'barcode', 'catalognumber', 'musicbrainz_releasetrackid', 'musicbrainz_releasegroupid', 'musicbrainz_workid', 'acoustid_fingerprint', 'acoustid_id']
# probably don't want to use 'covr' as it has crazy byte image data
# make sure to include m4a & m4p
# my path: "../../music/"
#unwanted folders: ../../Music/iTunes/iTunes Media/Music/Unknown Artist/Conducting 5850 CD 1
# allm4akeys = ['----:com.apple.iTunes:iTunSMPB', '----:com.apple.iTunes:iTunNORM', '©nam', '©ART', 'aART', '©wrt', '©alb', '©gen', 'trkn', 'disk', 'cpil', 'pgap', '©day', 'apID', 'cprt', 'cnID', 'rtng', 'atID', 'cmID', 'plID', 'geID', 'sfID', 'akID', 'stik', 'purd', 'soar', 'xid ', '----:com.apple.iTunes:iTunMOVI', 'covr']
logging.basicConfig(filename='./pythonreview/createdbscript.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')
unwantedstuff = [
    '../../Music/iTunes/iTunes Media/Music/Unknown Artist/Conducting 5850 CD 1',
    '../../Music/iTunes/iTunes Media/Music/Unknown Artist/DSO Audition Tape',
    '../../Music/iTunes/iTunes Media/Music/Rise Up Singing',
    '../../Music/iTunes/iTunes Media/Music/Zachary Kazarinoff',
]
def importsongs(mymusicfolderpath, *unwantedfolderpaths):
    for root, dirs, files in os.walk(mymusicfolderpath):
        for name in files:
            for i in unwantedfolderpaths:
                if root==i:
                    pass
                else:
                    if os.path.splitext(name)[1] == '.mp3':
                        try:
                            x=Song.objects.create()
                            x.location=(os.path.join(root, name))
                            s=EasyID3(os.path.join(root, name))
                            for k,v in s.items():
                                setattr(x,k,v[0])
                            if 'copyright' in s.keys(): x.copyrightdate=s['copyright'][0]
                            if 'performer:*' in s.keys(): x.performer2=x['performer:*'][0]
                            if 'replaygain_*_gain' in s.keys(): x.replaygain=s['replaygain_*_gain'][0]
                            if 'replaygain_*_peak' in s.keys(): x.replaygainpeak=s['replaygain_*_peak'][0]
                            x.save()
                        except:
                            logging.error("didn't work for this file:"+(os.path.join(root,name)))
                            print("didn't work for this file:",(os.path.join(root,name)))
                    if os.path.splitext(name)[1] == ('.m4a' or '.m4p'):
                        try:
                            x=Song.objects.create()
                            x.location=(os.path.join(root, name))
                            s=MP4(os.path.join(root, name))
                            if '©nam' in s.keys(): x.title=s['©nam'][0]
                            if '©ART' in s.keys(): x.artist=s['©ART'][0]
                            if 'aART' in s.keys(): x.albumartist=s['aART'][0]
                            if '©wrt' in s.keys(): x.composer=s['©wrt'][0]
                            if '©alb' in s.keys(): x.album=s['©alb'][0]
                            if '©gen' in s.keys(): x.genre=s['©gen'][0]
                            if 'trkn' in s.keys(): x.track=str(s['trkn'][0][1])+'/'+str(s['trkn'][0][1])
                            if 'disk' in s.keys(): x.discnumber=str(s['disk'][0][1])+'/'+str(s['disk'][0][1])
                            if 'cpil' in s.keys(): x.compilation=s['cpil'][0]
                            if '©day' in s.keys(): x.originaldate=s['©day'][0]
                            if 'pgag' in s.keys(): x.playbackgap=s['pgap'][0]
                            if 'rtng' in s.keys(): x.rating=s['rtng'][0]
                            x.save()
                        except:
                            print("didn't work for this file:",(os.path.join(root,name)))
                            logging.error("didn't work for this file:"+(os.path.join(root,name)))
