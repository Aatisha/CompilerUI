import { Cases } from "./cases";

export class Question{
    questionId:string;
    questionHead:string;
    question:string;
    programmingLang:string;
    sampleCase:Cases[];
    testCase:Cases[];
    labId:string;
}