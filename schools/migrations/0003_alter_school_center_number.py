# Generated by Django 4.2.7 on 2024-04-09 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schools', '0002_alter_school_center_number_alter_school_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='school',
            name='center_number',
            field=models.CharField(help_text='Center number', max_length=7, verbose_name='Center Number'),
        ),
    ]
