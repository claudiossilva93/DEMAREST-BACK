import Course from "../../../domain/entity/Course";
import Registration from "../../../domain/entity/Registration";
import Student from "../../../domain/entity/Student";
import RegistrationRepository from "../../../domain/repository/RegistrationRepository";

export default class RegistrationRepositoryMemory implements RegistrationRepository{

    registrations:Registration[];

    constructor(){
        this.registrations = [];
    }
    async getRegistrationsByCourse(codeCourse: string): Promise<Registration[]> {
        const registrations = this.registrations.filter(registration => registration.course.code === codeCourse);
        return registrations;
    }

    async getRegistrationsByCpf(cpf: string): Promise<Registration[]> {
        const registrations = this.registrations.filter(registration => registration.student.cpf === cpf);
        return registrations;
    }

    async getRegistrationByCpfAndCourse(cpf: string, codeCourse: string): Promise<Registration> {
        const registration = this.registrations.find(registration => registration.student.cpf === cpf && registration.course.code === codeCourse);
        if(!registration) throw new Error("Registration not found")
        return registration;
    }

    async save(registration:Registration): Promise<void> {
        let register = this.registrations.find(register => register.student.cpf === registration.student.cpf && register.course.code === registration.course.code)
        if(!register){
            this.registrations.push(registration)
        }else{
            register = registration;
        }
    }

}