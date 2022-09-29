import Course from "../entity/Course";

export default interface CourseRepository{
    getAll():Promise<Course[]>
    getCourse(code:string):Promise<Course>
    save(course:Course):Promise<void>
}