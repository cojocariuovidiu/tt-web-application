export class Course{
    courseID: string;
    courseTitle: string;
    courseDetail: string;
    courseScope: string;
    coursePrice: string;
    courseLectures?: Array<string>;
    constructor(courseID: string, courseTitle: string, courseDetail: string, courseScope: string, coursePrice: string, courseLectures?: Array<string>){
        this.courseID = courseID;
        this.courseTitle = courseTitle;
        this.courseDetail = courseDetail;
        this.courseScope = courseScope;
        this.coursePrice = coursePrice;
        this.courseLectures = courseLectures;
    }
}