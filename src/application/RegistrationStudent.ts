import Registration from "../domain/entity/Registration";
import CourseRepository from "../domain/repository/CourseRepository";
import RegistrationRepository from "../domain/repository/RegistrationRepository";
import StudentRepository from "../domain/repository/StudentRepository";

export default class RegistrationStudent {

    constructor(readonly registrationRepository: RegistrationRepository, 
                readonly studentRepository: StudentRepository,
                readonly courseRepository: CourseRepository){
    }

    async execute(input: Input): Promise<void>{
        const student = await this.studentRepository.getStudentByCpf(input.cpf);
        const course = await this.courseRepository.getCourse(input.codeCourse);
        const registration = new Registration(student, course);
        await this.registrationRepository.save(registration);
    }

}

type Input = {
    cpf: string,
    codeCourse: string
}