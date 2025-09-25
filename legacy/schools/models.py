from django.db import models

class School(models.Model):
    name = models.CharField('School name',max_length=50, help_text="School name is also the Center name")
    center_number = models.CharField('Center Number',max_length=7, help_text='Center number')
    short_name = models.CharField(max_length=20, blank=True, null=True)
    school_type = models.ForeignKey('SchoolType', on_delete=models.PROTECT, null=True, blank=True)
    
    
    
    def __str__(self):
        return self.name

    
class SchoolType(models.Model):
    type_name = models.CharField(max_length=20)
    
    def __str__(self):
        return self.type_name