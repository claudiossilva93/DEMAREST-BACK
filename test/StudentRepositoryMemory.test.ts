import Student from "../src/domain/entity/Student";
import StudentRepositoryMemory from "../src/infra/repository/memory/StudentRepositoryMemory";

test("DEVE CADASTRAR UM ALUNO", function(){
    const student = new Student("317.153.361-86", "Claudio Silva");
    const studentRepository = new StudentRepositoryMemory();
    studentRepository.save(student);
    expect(studentRepository.students.length).toBe(1)
})