export class Task{
    constructor(
        public _id: object,
        public name: string,
        public deadline: string,
        public details: string,
        public isMade: boolean,
    ){}
}