import {Router} from "express";
const router = Router({ mergeParams: true });
import { NextFunction, Request, Response } from "express";
import GetStudentByCpf from "../application/GetStudentByCpf";
import SaveStudent from "../application/SaveStudent";
import Student from "../domain/entity/Student";
import StudentRepositoryMemory from "../infra/repository/memory/StudentRepositoryMemory";
import GetAllCourse from "../application/GetAllCourse";
import GetCourseByCode from "../application/GetCourseByCode";
import SaveCourse from "../application/SaveCourse";
import Course from "../domain/entity/Course";
import CourseRepositoryMemory from "../infra/repository/memory/CourseRepositoryMemory";
import RegistrationRepositoryMemory from "../infra/repository/memory/RegistrationRepositoryMemory";
import RegistrationStudent from "../application/RegistrationStudent";
import GetRegistrationsByCpf from "../application/GetRegistrationsByCpf";
import GetRegistrationByCpfAndCourse from "../application/GetRegistrationByCpfAndCourse";
import RegistrationTestPoint from "../application/RegistrationTestPoint";
import GetRegistrationsByCourse from "../application/GetRegistrationsByCourse";

const studentRepository = new StudentRepositoryMemory()
studentRepository.save(new Student("31715336186", "Claudio Silva"))
const saveStudent = new SaveStudent(studentRepository)
const getStudentByCpf = new GetStudentByCpf(studentRepository) 

const courseRepository = new CourseRepositoryMemory()
courseRepository.save(new Course("1", "Alemão", false, 45))
courseRepository.save(new Course("2", "Inglês", true, 70))
courseRepository.save(new Course("3", "Espanhol", true, 40))
courseRepository.save(new Course("4", "Italiano", true, 25))
courseRepository.save(new Course("5", "Turco", true, 15))
const saveCourse = new SaveCourse(courseRepository)
const getCourseByCode = new GetCourseByCode(courseRepository) 
const getAllCourse = new GetAllCourse(courseRepository) 

const registrationRepository = new RegistrationRepositoryMemory();
const registrationStudent = new RegistrationStudent(registrationRepository, studentRepository, courseRepository);
const getRegistrationsByCpf = new GetRegistrationsByCpf(registrationRepository);
const getRegistrationsByCourse = new GetRegistrationsByCourse(registrationRepository);
const getRegistrationByCpfAndCourse = new GetRegistrationByCpfAndCourse(registrationRepository);
const registrationTestPoint = new RegistrationTestPoint(registrationRepository);

router.post('/student/', async (req: Request, res: Response, next: NextFunction) => {
    await saveStudent.execute(req.body)
    res.sendStatus(200)
})

router.get('/student/:cpf', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const student = await getStudentByCpf.execute(req.params.cpf)
        res.send(student)
    }catch(e){
        next(e)
    }    
})

router.post('/course/', async (req: Request, res: Response, next: NextFunction) => {
    await saveCourse.execute(req.body)
    res.send(200)
})

router.get('/course/:code', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const course = await getCourseByCode.execute(req.params.code)
        res.send(course)
    }catch(e){
        next(e)
    }
})

router.get('/course/', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const courses = await getAllCourse.execute()
        res.send(courses)
    }catch(e){
        next(e)
    }    
})

router.post('/registration/', async (req: Request, res: Response, next: NextFunction) => {
    try{
        await registrationStudent.execute(req.body)
        res.send(200)
    }catch(e){
        next(e)
    }    
})

router.get('/registration/:cpf', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const registration = await getRegistrationsByCpf.execute(req.params.cpf)
        res.send(registration)
    }catch(e){
        next(e)
    }    
})

router.get('/registration/course/:codeCourse', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const registration = await getRegistrationsByCourse.execute(req.params.codeCourse)
        res.send(registration)
    }catch(e){
        next(e)
    }    
})

router.get('/registration/:cpf/:codeCourse', async (req: Request, res: Response, next: NextFunction) => {
    const {cpf, codeCourse} = req.params
    try{
        const registration = await getRegistrationByCpfAndCourse.execute({cpf, codeCourse})
        res.send(registration)
    }catch(e){
        next(e)
    }    
})

router.post('/registration/points', async (req: Request, res: Response, next: NextFunction) => {
    try{
        await registrationTestPoint.execute(req.body)
        res.send(200)
    }catch(e){
        next(e)
    }    
})

export default router;