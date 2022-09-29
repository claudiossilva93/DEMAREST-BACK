import Registration from "../domain/entity/Registration";
import RegistrationRepository from "../domain/repository/RegistrationRepository";

export default class GetRegistrationByCpfAndCourse {

    constructor(readonly registrationRepository: RegistrationRepository){
    }

    async execute(input: Input): Promise<Registration>{
        return await this.registrationRepository.getRegistrationByCpfAndCourse(input.cpf, input.codeCourse);
    }

}

type Input = {
    cpf: string,
    codeCourse: string
}