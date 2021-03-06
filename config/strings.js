module.exports.message = {
    loginSuccess: 'Login Successful',
    logoutSuccess: 'Logout Successful',
    userExists: 'A User Already Exists under this Mobile Number',
    registerFailed: 'Failed to register user',
    registerSuccess: 'User registered',
    userNotFound: 'User not found',
    authSuccess: 'Authenticated',
    wrongPassword: 'Incorrect Password Entered',
    passwordEmailSuccess: 'An email was sent you with password change link',
    passwordEditFailed: 'Password Change Failed',
    passwordEditSuccess: 'Password Changed Successfully. Please Login again',
    mobileEditFailed: 'Mobile Number Change Failed',
    mobileEditSuccess: 'Mobile Number Changed Successfully. Please Login again',
    passwordEmailFailed: 'An Error Occurred cannot send Email',
    courseInsertSuccess: 'Course Inserted Successfully',
    courseInsertFailed: 'Failed to Insert Course',
    courseNotFound: 'Failed to find Course',
    courseDeleteFailed: 'Failed to Delete Course',
    courseDeleteSuccess: 'Successfully Deleted Course',
    courseGetFailed: 'Failed to Retrieve Courses',
    lectureInsertSuccess: 'Successfully Inserted Course',
    lectureInsertFailed: 'Failed to Insert Course',
    lectureGetFailed: 'Failed to Retrieve Lectures',
    questionInsertFailed: 'Failed to Insert Question to Lecture Evaluation',
    questionInsertSuccess: 'Successfully Inserted Question to Lecture Evaluation',
    questionDeleteFailed: 'Failed to Delete Evaluation Question',
    questionDeleteSuccess: 'Successfully Deleted Evaluation Question',
    questionNotFound: 'Evaluation Question Not Found',
    evaluationGetFailed: 'Failed to get Evaluation Question',
    courseEnrollSuccess: 'Course Enrolled',
    courseEnrollFailed: 'Course already Enrolled',
    enrolledListGetFailed: 'Failed to Retrieve Courses',
    commentGetFailed: 'Failed to Retrieve Comments',
    commentInsertFailed: 'Failed to Post Comments',
    commentInsertSuccess: 'Successfully Posted Comment',
    commentEditFailed: 'Failed to Edit Comment',
    commentEditSuccess: 'Successfully Edited Comment',
    commentDeleteFailed: 'Failed to Deleted Comment',
    commentDeleteSuccess: 'Successfully Deleted Comment',
    courseNotEnrolled: 'Please Enroll to this course to view Lecture',
    emailVerifyFailed: 'Failed to Verify Email',
    emailVerifySuccess: 'Successfully Verified Email',
    emailVerifySendSuccess: 'A verification mail was sent to your email address',
    emailVerifySendFailed: 'Sending of verification mail Failed',
    emailAddressFound: 'User Exists Under this Email',
    emailAddressNotFound: 'User Not Found Under this Email',
    somethingWentWrong: 'Something Went Wrong',
    mobileNumberAvailable: 'Mobile Number is Available',
    profileEditSuccess: 'Profile was Changed Successfully',
    profileEditFailed: 'Profile Change Failed',
    contactEmailSendFailed: 'Something went wrong, message was not delivered',
    contactEmailSendSuccess: 'Message Delivered Successfully'
}

module.exports.strategy = {
    localStrategy: 'jwt.local',
    socialStrategy: 'jwt.social',
    adminStrategy: 'jwt.admin',
    uploaderStrategy: 'jwt.uploader',
    tokenValue: 'none'
}

module.exports.values = {
    loginExpiration: 86400, // 1 day
    emailLinkExpiration: 600 // 10 minutes
}

module.exports.errors = {
    notFound: 'Not Found',
    serverError: 'Server Error',
    notAuthorized: 'Unauthorized',
    duplicateUser: 'Duplicate User'
}