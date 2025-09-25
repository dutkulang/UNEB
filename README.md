# Uganda National Examination Board - UNEB

This is a UNEB test system. Trying to simulate the actual working system used in Uganda. 

`Note: This a work in progress no output intended at the end.
`


The aims of this such system are

    - Register Schools
    - Ban / inactivate School
    - School has a centre number
    - Reister a school admin (head master, deputy)

    - School can register a student
    - student has a unique index year unique for that year
    - 
    - Super admin create a subject
    - student can sit for that subject only onec per year


## Endpoints

    /register
    
    /login

    /

    /students/register
    /students/<uuid>
    /students/<id>/delete

    /schools/uuid
    /schools