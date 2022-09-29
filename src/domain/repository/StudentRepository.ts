import Student from "../entity/Student";

export default interface StudentRepository{
    getStudentByCpf(cpf:string):Promise<Student>
    save(student:Student):Promise<void>
}