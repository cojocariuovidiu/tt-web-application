export class Course{
    _id?: string;
    courseTitle: string;
    coursePreview?: string;
    courseImage?: string;
    courseFreeVideo?: string;
    courseDetail: string;
    courseScope: string;
    coursePrice?: string;
    courseSessions?: Array<{
        lectures: Array<{
            lectureDetails: string,
            lectureID: string,
            lectureLink: string,
            lecturePrice: string,
            lectureQuestions: Array<{
                answer: string,
                option1: string,
                option2: string,
                option3: string,
                option4: string,
                questionlabel: string
            }>,
            lectureTitle: string
        }>,
        sessionID: string,
        sessionNo: string,
        sessionTitle: string
    }>;

            constructor(
                courseTitle: string, 
                coursePreview: string, 
                courseDetail: string, 
                courseScope: string, 
                courseFreeVideo?: string,
                courseImage?: string,
                _id?: string,
                coursePrice?: string,
                courseSessions?: Array<{
                    lectures: Array<{
                        lectureDetails: string,
                        lectureID: string,
                        lectureLink: string,
                        lecturePrice: string,
                        lectureQuestions: Array<{
                            answer: string,
                            option1: string,
                            option2: string,
                            option3: string,
                            option4: string,
                            questionlabel: string
                        }>,
                        lectureTitle: string
                    }>,
                    sessionID: string,
                    sessionNo: string,
                    sessionTitle: string
                }>
            )
    {
        this._id = _id;
        this.courseTitle = courseTitle;
        this.courseDetail = courseDetail;
        this.coursePreview = coursePreview;
        this.courseImage = courseImage;
        this.courseScope = courseScope;
        this.coursePrice = coursePrice;
        this.courseSessions = courseSessions;
        this.courseFreeVideo = courseFreeVideo;
    }
}
