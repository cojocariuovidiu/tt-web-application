export class Course2{
    _id?: string;
    title: string;
    preview?: string;
    image?: string;
    freevideo?: string;
    details: string;
    scope: string;
    price?: string;
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
                title: string, 
                preview: string, 
                details: string, 
                scope: string, 
                freevideo?: string, 
                image?: string, 
                _id?: string, 
                price?: string, 
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
        this.title = title;
        this.details = details;
        this.preview = preview;
        this.image = image;
        this.scope = scope;
        this.price = price;
        this.courseSessions = courseSessions;
        this.freevideo = freevideo;
    }
}