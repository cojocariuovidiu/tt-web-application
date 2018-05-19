import { Course } from "./course.model";
import { Course2 } from "./course2.model";
import { User } from "./user.model";
import { Comment } from "./comment.model";

export class ServerResponse{
    course?: Course[];
    coursedetail?: Course;
    success?: boolean;
    msg?: string;
    error?: string;
    user?: User;
    token?: string;
    mobile?: string;
    comment?: Comment[];
    commentdetail?: Comment;
    constructor(token?: string, mobile?: string ,user?: User,  comment?: Comment[], commentdetail?: Comment, coursedetail?: Course,course?:Course[], success?:boolean, msg?:string, error?: string){
        this.course = course;
        this.success = success;
        this.msg = msg;
        this.error = error;
        this.user = user;
        this.token = token;
        this.mobile = mobile;
        this.coursedetail = coursedetail;
        this.comment = comment;
        this.commentdetail = commentdetail;
    }

    
}