export class User {
     userID?: string;
     socialID?: string;
     name: string;
     mobile?: string;
     email: string;
     password?: string;
     type?: string;
     tag: string;
     verified?: string;
    constructor(
      name: string,
      email: string,
      tag: string,
      mobile?: string,
      password?: string,
      type?: string,
      userID?: string,
      socialID?: string,
      verified?: string
    ) {
      this.userID = userID;
      this.socialID = socialID;
      this.name = name;
      this.mobile = mobile;
      this.email = email;
      this.password = password;
      this.type = type;
      this.tag = tag;
      this.verified = verified;
    }
}
