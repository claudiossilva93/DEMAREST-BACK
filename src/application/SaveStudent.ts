import Student from "../domain/entity/Student";
import StudentRepository from "../domain/repository/StudentRepository";

export default class SaveStudent {

    constructor(readonly studentRepository: StudentRepository){
    }

    async execute(input: Input): Promise<void>{
        const student = new Student(input.cpf, input.nome);
        await this.studentRepository.save(student);
    }

}

type Input = {
    cpf: string,
    nome: string
}