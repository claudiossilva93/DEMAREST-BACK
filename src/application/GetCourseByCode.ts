import Course from "../domain/entity/Course";
import CourseRepository from "../domain/repository/CourseRepository";

export default class GetCourseByCode {

    constructor(readonly courseRepository: CourseRepository){
    }

    async execute(code: string): Promise<Course>{
        return await this.courseRepository.getCourse(code);
    }

}