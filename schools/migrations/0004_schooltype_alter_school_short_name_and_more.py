# Generated by Django 4.2.7 on 2024-04-09 16:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('schools', '0003_alter_school_center_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='SchoolType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.CharField(max_length=20)),
            ],
        ),
        migrations.AlterField(
            model_name='school',
            name='short_name',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='school',
            name='school_type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='schools.schooltype'),
        ),
    ]
