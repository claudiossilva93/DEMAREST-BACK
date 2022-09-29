import Student from "../domain/entity/Student";
import StudentRepository from "../domain/repository/StudentRepository";

export default class GetStudentByCpf {

    constructor(readonly studentRepository: StudentRepository){
    }

    async execute(cpf: string): Promise<Student>{
        return await this.studentRepository.getStudentByCpf(cpf);
    }

}