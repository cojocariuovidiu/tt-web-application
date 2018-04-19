export class Course{
    courseID: string;
    courseTitle: string;
    courseDetail: string;
    courseScope: string;
    coursePrice: string;
    constructor(courseID: string, courseTitle: string, courseDetail: string, courseScope: string, coursePrice: string){
        this.courseID = courseID;
        this.courseTitle = courseTitle;
        this.courseDetail = courseDetail;
        this.courseScope = courseScope;
        this.coursePrice = coursePrice;
    }
}