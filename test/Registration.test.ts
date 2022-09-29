import Course from "../src/domain/entity/Course"
import Registration from "../src/domain/entity/Registration";
import Student from "../src/domain/entity/Student"

test("Não deve matricular um aluno no curso sem está habilitado a inscrição", function(){
    const student = new Student("317.153.361-86", "Claudio Silva");
    const course = new Course("1", "Alemão", false, 100);
    expect(() => new Registration(student, course)).toThrow(new Error("Course not available for registration"))
})

test("Deve matricular um aluno no curso com a inscrição habilitada", function(){
    const student = new Student("317.153.361-86", "Claudio Silva");
    const course = new Course("1", "Inglês", true, 50);
    const registration = new Registration(student, course)
    expect(registration.student.cpf).toBe("317.153.361-86")
})

test("Deve matricular um aluno, adicionar duas notas e validar média", function(){
    const student = new Student("317.153.361-86", "Claudio Silva");
    const course = new Course("1", "Inglês", true, 100);
    const registration = new Registration(student, course)
    registration.addTestPoint(10)
    registration.addTestPoint(5)
    expect(registration.getAveragePoints()).toBe(7.5)
})

test("Deve matricular um aluno e adicionar faltas", function(){
    const student = new Student("317.153.361-86", "Claudio Silva");
    const course = new Course("1", "Inglês", true, 100);
    const registration = new Registration(student, course);
    registration.addFault();
    registration.addFault();
    expect(registration.getPresencePercentage()).toBe(98);
})

test("Verifica se aluno está reprovado pela quantidade de faltas ", function(){
    const student = new Student("317.153.361-86", "Claudio Silva");
    const course = new Course("1", "Inglês", true, 10);
    const registration = new Registration(student, course);
    registration.addFault();
    registration.addFault();
    registration.addFault();
    registration.addFault();
    registration.addFault();
    expect(registration.getStatusRegistration()).toBe("REPROVADO");
})

test("Verifica se aluno está aprovado ", function(){
    const student = new Student("317.153.361-86", "Claudio Silva");
    const course = new Course("1", "Inglês", true, 10);
    const registration = new Registration(student, course);
    registration.addTestPoint(9)
    registration.addTestPoint(8)
    registration.addTestPoint(9.9)
    expect(registration.getStatusRegistration()).toBe("APROVADO");
})

test("Verifica se aluno está no conselho", function(){
    const student = new Student("317.153.361-86", "Claudio Silva");
    const course = new Course("1", "Inglês", true, 10);
    const registration = new Registration(student, course);
    registration.addTestPoint(7)
    registration.addTestPoint(7)
    registration.addTestPoint(6)
    expect(registration.getStatusRegistration()).toBe("CONSELHO");
})