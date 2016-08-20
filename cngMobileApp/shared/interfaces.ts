export interface ContactForm {
    firstName: string; // First Name from form
    lastName: string; // Last Name from form
    emailAddress: string; // Email Address from form
    subject: string; // Subject from form
    content: string; // Questions/Comments from form
}

export class LocalPost {
    dateTimePosted: string;
    title: string;
    content: string;
    live: string;
    username: string;
}