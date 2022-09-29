import Course from "../../domain/entity/Course";
import Student from "../../domain/entity/Student";
import Test from "../../domain/entity/Test";

export default interface RegistrationDto{
    student: Student,
    course: Course,
    faults: number,
    testPoints: Test[],
    status: string,
    averagePoints: number,
    presencePercent: number,
}