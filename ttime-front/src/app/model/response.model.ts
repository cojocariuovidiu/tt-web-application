import { Course } from "./course.model";
import { User } from "./user.model";
import { Comment } from "./comment.model";
import { Score } from "./score.model";

export class ServerResponse{
    course?: Course[];
    coursedetail?: Course;
    success?: boolean;
    msg?: string;
    error?: string;
    user?: User;
    token?: string;
    mobile?: string;
    signedUrl?: string;
    comment?: Comment[];
    score?: Score;
    commentdetail?: Comment;
    constructor(token?: string, mobile?: string, score?: Score, signedUrl?: string, user?: User,  comment?: Comment[], commentdetail?: Comment, coursedetail?: Course,course?:Course[], success?:boolean, msg?:string, error?: string){
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
        this.signedUrl = signedUrl;
        this.score = score;
    }

    
}