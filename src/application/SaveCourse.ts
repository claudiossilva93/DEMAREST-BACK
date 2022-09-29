import Course from "../domain/entity/Course";
import CourseRepository from "../domain/repository/CourseRepository";

export default class SaveCourse {

    constructor(readonly courseRepository: CourseRepository){
    }

    async execute(input: Input): Promise<void>{
        const course = new Course(input.code, input.description, input.registrationEnabled, input.totalClasses);
        await this.courseRepository.save(course);
    }

}

type Input = {
    code: string,
    description: string,
    registrationEnabled: boolean,
    totalClasses: number
}