# Generated by Django 2.1.3 on 2019-03-23 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0003_auto_20190319_1453'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='song',
            name='acoustid_fingerprint',
        ),
        migrations.RemoveField(
            model_name='song',
            name='acoustid_id',
        ),
        migrations.RemoveField(
            model_name='song',
            name='asin',
        ),
        migrations.RemoveField(
            model_name='song',
            name='barcode',
        ),
        migrations.RemoveField(
            model_name='song',
            name='catalognumber',
        ),
        migrations.RemoveField(
            model_name='song',
            name='copyrightdate',
        ),
        migrations.RemoveField(
            model_name='song',
            name='musicbrainz_discid',
        ),
        migrations.RemoveField(
            model_name='song',
            name='musicbrainz_releasegroupid',
        ),
        migrations.RemoveField(
            model_name='song',
            name='musicbrainz_releasetrackid',
        ),
        migrations.RemoveField(
            model_name='song',
            name='musicbrainz_workid',
        ),
        migrations.RemoveField(
            model_name='song',
            name='releasecountry',
        ),
        migrations.AddField(
            model_name='tag',
            name='kind',
            field=models.CharField(choices=[('decade', 'decade'), ('genre', 'genre'), ('mood', 'mood'), ('style', 'style'), ('misc', 'miscellaneous')], default='genre', max_length=50),
            preserve_default=False,
        ),
    ]
