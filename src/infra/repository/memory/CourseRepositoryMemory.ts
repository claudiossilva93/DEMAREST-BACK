import Course from "../../../domain/entity/Course";
import CourseRepository from "../../../domain/repository/CourseRepository";

export default class CourseRepositoryMemory implements CourseRepository{

    courses: Course[];

    constructor(){
        this.courses = []
    }
    async getAll(): Promise<Course[]> {
        return await this.courses;
    }

    async getCourse(code: string): Promise<Course> {
        const course = this.courses.find(course => course.code === code)
        if(!course) throw new Error("Course not found");
        return course;
    }

    async save(course: Course): Promise<void> {
        this.courses.push(course);
    }

}