import Test from "../domain/entity/Test";
import RegistrationRepository from "../domain/repository/RegistrationRepository";

export default class RegistrationTestPoint {
    constructor(readonly registrationRepository: RegistrationRepository){
    }

    async execute(input: Input): Promise<void>{
        const registration = await this.registrationRepository.getRegistrationByCpfAndCourse(input.cpf, input.codeCourse);
        registration.addListTestPoint(input.testPoint);
        this.registrationRepository.save(registration);
    }
}

type Input = {
    cpf: string,
    codeCourse: string,
    testPoint: Test[],
}