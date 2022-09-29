Utilizei um repositório em memória para o teste mas caso fosse utilizar um database iria optar pelo mongo db.


Criaria 3 schemas

Student{
    nome,
    cpf
}

Course{
    code,
    description,
}

Test{
    description,
    point
}

Registers{
    Student,
    Course,
    faults,
    average,
    Test[],
    status,
    presencePercent
}