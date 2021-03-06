# Generated by Django 2.1.3 on 2019-03-12 16:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Playlist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('relatedplaylists', models.ManyToManyField(related_name='_playlist_relatedplaylists_+', to='music.Playlist')),
            ],
        ),
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=255)),
                ('album', models.CharField(max_length=100)),
                ('compilation', models.CharField(max_length=100)),
                ('rating', models.IntegerField(default=0)),
                ('composer', models.CharField(max_length=100)),
                ('copyrightdate', models.CharField(max_length=100)),
                ('encodedby', models.CharField(max_length=100)),
                ('lyricist', models.CharField(max_length=100)),
                ('length', models.CharField(max_length=100)),
                ('media', models.CharField(max_length=100)),
                ('mood', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('version', models.CharField(max_length=100)),
                ('artist', models.CharField(max_length=100)),
                ('albumartist', models.CharField(max_length=100)),
                ('conductor', models.CharField(max_length=100)),
                ('arranger', models.CharField(max_length=100)),
                ('discnumber', models.CharField(max_length=100)),
                ('tracknumber', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('isrc', models.CharField(max_length=100)),
                ('discsubtitle', models.CharField(max_length=100)),
                ('language', models.CharField(max_length=100)),
                ('genre', models.CharField(max_length=100)),
                ('date', models.CharField(max_length=100)),
                ('originaldate', models.CharField(max_length=100)),
                ('performer', models.CharField(max_length=100)),
                ('organization', models.CharField(max_length=100)),
                ('musicbrainz_trackid', models.CharField(max_length=100)),
                ('website', models.CharField(max_length=100)),
                ('replaygain', models.CharField(max_length=100)),
                ('replaygainpeak', models.CharField(max_length=100)),
                ('musicbrainz_artistid', models.CharField(max_length=100)),
                ('musicbrainz_albumid', models.CharField(max_length=100)),
                ('musicbrainz_albumartistid', models.CharField(max_length=100)),
                ('musicbrainz_trmid', models.CharField(max_length=100)),
                ('musicip_puid', models.CharField(max_length=100)),
                ('musicip_fingerprint', models.CharField(max_length=100)),
                ('musicbrainz_albumstatus', models.CharField(max_length=100)),
                ('musicbrainz_albumtype', models.CharField(max_length=100)),
                ('releasecountry', models.CharField(max_length=100)),
                ('musicbrainz_discid', models.CharField(max_length=100)),
                ('asin', models.CharField(max_length=100)),
                ('barcode', models.CharField(max_length=100)),
                ('catalognumber', models.CharField(max_length=100)),
                ('musicbrainz_releasetrackid', models.CharField(max_length=100)),
                ('musicbrainz_releasegroupid', models.CharField(max_length=100)),
                ('performer2', models.CharField(max_length=100)),
                ('musicbrainz_workid', models.CharField(max_length=100)),
                ('acoustid_fingerprint', models.CharField(max_length=100)),
                ('acoustid_id', models.CharField(max_length=100)),
                ('playbackgap', models.CharField(max_length=100)),
                ('comment', models.CharField(max_length=255)),
                ('work', models.CharField(max_length=100)),
                ('movement', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Station',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('dislikedsongs', models.ManyToManyField(related_name='forbiddenstations', to='music.Song')),
            ],
        ),
        migrations.CreateModel(
            name='Stationlisting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('song', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='music.Song')),
                ('station', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='music.Station')),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('relatives', models.ManyToManyField(related_name='_tag_relatives_+', to='music.Tag')),
                ('songs', models.ManyToManyField(related_name='tags', to='music.Song')),
            ],
        ),
        migrations.AddField(
            model_name='station',
            name='songs',
            field=models.ManyToManyField(related_name='stations', through='music.Stationlisting', to='music.Song'),
        ),
        migrations.AddField(
            model_name='playlist',
            name='songs',
            field=models.ManyToManyField(related_name='playlists', through='music.Listing', to='music.Song'),
        ),
        migrations.AddField(
            model_name='listing',
            name='playlist',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='music.Playlist'),
        ),
        migrations.AddField(
            model_name='listing',
            name='song',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='music.Song'),
        ),
    ]
