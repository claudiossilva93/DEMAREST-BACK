import Course from "../domain/entity/Course";
import CourseRepository from "../domain/repository/CourseRepository";

export default class GetAllCourse {

    constructor(readonly courseRepository: CourseRepository){
    }

    async execute(): Promise<Course[]>{
        return await this.courseRepository.getAll();
    }

}