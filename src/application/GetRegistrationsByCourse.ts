import Registration from "../domain/entity/Registration";
import RegistrationRepository from "../domain/repository/RegistrationRepository";
import RegistrationDto from "./dto/RegistrationDto";

export default class GetRegistrationsByCourse {

    constructor(readonly registrationRepository: RegistrationRepository){
    }

    async execute(codeCourse: string): Promise<RegistrationDto[]>{
        const registrationsDto: RegistrationDto[] = [];
        const registrations = await this.registrationRepository.getRegistrationsByCourse(codeCourse);
        for(const registration of registrations){
            registrationsDto.push({
                student: registration.student,
                course: registration.course,
                averagePoints: registration.getAveragePoints(),
                faults: registration.getFaults(), 
                status: registration.getStatusRegistration(), 
                testPoints: registration.getTests(), 
                presencePercent: registration.getPresencePercentage()
            })
        }
        return registrationsDto;
    }

}