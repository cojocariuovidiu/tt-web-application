export class Comment{
    commentID?: string;
    commentBody: string;
    commentCourse: string;
    commentUserID: string;
    commentUser: string;
    commentDate?: string;
    constructor(commentBody: string, commentCourse: string, commentUser: string, commentUserID: string, commentDate?: string, commentID?: string){
        this.commentBody = commentBody;
        this.commentCourse = commentCourse;
        this.commentDate = commentDate;
        this.commentUser = commentUser;
        this.commentUserID = commentUserID;
        this.commentID = commentID;
    }
}