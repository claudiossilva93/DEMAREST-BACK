import Registration from "../entity/Registration";

export default interface RegistrationRepository{
    getRegistrationsByCpf(cpf:string):Promise<Registration[]>
    getRegistrationsByCourse(codeCourse:string):Promise<Registration[]>
    getRegistrationByCpfAndCourse(cpf:string, codeCourse:string):Promise<Registration>
    save(registration:Registration):Promise<void>
}