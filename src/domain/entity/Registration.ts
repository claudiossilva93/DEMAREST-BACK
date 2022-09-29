import Course from "./Course";
import Student from "./Student";
import Test from "./Test";

export default class Registration{

    private MISSING_PERCENTAGE:number = 75;
    private APPROVED_POINTS:number = 7.5;
    private FAILED_POINTS:number = 6;

    private faults:number;
    private testPoints:Test[];

    constructor(readonly student: Student, readonly course: Course){
        if(!course.registrationEnabled) throw new Error(`Course ${course.description} not available for registration`)
        this.faults = 0;
        this.testPoints = [];
    }

    addFault(){
        this.faults++;
    }

    getFaults(){
        return this.faults;
    }

    addTestPoint(test:Test){
        this.testPoints.push(test);
    }

    addListTestPoint(tests:Test[]){
        this.testPoints = tests;
    }

    getTests(){
        return this.testPoints;
    }

    getAveragePoints(){
        const totalTests = this.testPoints.length;
        const totalPoints = this.testPoints.reduce((acc, cur)=>{
            return acc + cur.point;
        }, 0)
        return totalPoints / totalTests;
    }

    getPresencePercentage(){
        const presence = this.course.totalClasses - this.faults;
        return (100*presence)/this.course.totalClasses;
    }

    getStatusRegistration(){
        if(this.testPoints.length === 0) return "NÃO APURADO";
        if(this.getPresencePercentage() < this.MISSING_PERCENTAGE) return "REPROVADO";
        const averagePoints = this.getAveragePoints();
        if(averagePoints >= this.APPROVED_POINTS) return "APROVADO";
        if(averagePoints < this.FAILED_POINTS) return "REPROVADO";
        return "CONSELHO";
    }

}