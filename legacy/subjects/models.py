from django.db import models

class Subject(models.Model):
    IS_OPTIONAL = [('Y', 'Yes'),('N', 'No'),
]
    name = models.CharField(max_length=50, help_text="Subject Name")
    subject_code = models.CharField(max_length=10, help_text = "Subject Code")
    short_name = models.CharField(max_length=10,blank=True, null=True)
    is_optional = models.CharField(max_length=1, 
                                   choices=IS_OPTIONAL,
                                   default='N',
                                   help_text="Is the subject optional, Yes or No"
                                   )
    class Meta:
        verbose_name_plural = 'Subjects'
    
    def __str__(self):
        return self.name
