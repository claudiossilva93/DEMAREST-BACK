import Student from "../../../domain/entity/Student";
import StudentRepository from "../../../domain/repository/StudentRepository";

export default class StudentRepositoryMemory implements StudentRepository{

    students: Student[];

    constructor(){
        this.students = [];
    }

    async getStudentByCpf(cpf: string): Promise<Student> {
        const student = this.students.find(student => student.cpf === cpf);
        if(!student) throw new Error("Student not found");
        return student;
    }

    async save(student: Student): Promise<void> {
        this.students.push(student);
    }

}