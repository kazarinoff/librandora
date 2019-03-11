# Generated by Django 2.1.3 on 2019-03-08 18:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0003_playlist_kind'),
    ]

    operations = [
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
        migrations.RemoveField(
            model_name='playlist',
            name='dislikesongs',
        ),
        migrations.RemoveField(
            model_name='playlist',
            name='kind',
        ),
        migrations.AddField(
            model_name='station',
            name='songs',
            field=models.ManyToManyField(related_name='stations', through='music.Stationlisting', to='music.Song'),
        ),
    ]