# Generated by Django 4.2.7 on 2024-04-09 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subjects', '0003_alter_subject_short_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='subject',
            name='is_optional',
            field=models.CharField(choices=[('Y', 'Yes'), ('N', 'No')], default='N', max_length=1),
        ),
    ]
