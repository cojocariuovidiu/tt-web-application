export class Score {
    _id?: string;
    sessionID?: string;
    userID?: string;
    lectureID?: string;
    courseID?: string;
    score?: string;
    constructor(_id?: string, sessionID?: string, userID?: string, lectureID?: string, courseID?: string, score?: string){
        this._id = _id;
        this.sessionID = sessionID;
        this.userID = userID;
        this.lectureID = lectureID;
        this.courseID = courseID;
        this.score = score;
    }
}