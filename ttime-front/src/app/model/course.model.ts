export class Course{
    courseID?: string;
    courseTitle: string;
    coursePreview?: string;
    courseImage?: string;
    courseFreeVideo?: string;
    courseDetail: string;
    courseScope: string;
    coursePrice?: string;
    courseLectures?: Array<string>;
    constructor(courseTitle: string, coursePreview: string, courseDetail: string, courseScope: string, courseFreeVideo?: string, courseImage?: string, courseID?: string, coursePrice?: string, courseLectures?: Array<string>){
        this.courseID = courseID;
        this.courseTitle = courseTitle;
        this.courseDetail = courseDetail;
        this.coursePreview = coursePreview;
        this.courseImage = courseImage;
        this.courseScope = courseScope;
        this.coursePrice = coursePrice;
        this.courseLectures = courseLectures;
        this.courseFreeVideo = courseFreeVideo;
    }
}