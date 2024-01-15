interface CourseGoal{
    title : string;
    descritpion : string;
    completeUntil:Date;
}
function createCourseGoal(title:string, description: string, deadline:Date):string|CourseGoal{
    if(title.length<4){
        return "Wrong title"
    }
    if(description.length<100){
        return "Description must be at least 100 characters"
    }
    if(deadline.getDay<new Date().getDay){
        return "Date must be present date"
    }

    // let courseGoal: CourseGoal; //This will be considered an assigned, and u can not just add the properties to it.
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.completeUntil = deadline;
    courseGoal.descritpion = description;
    courseGoal.title = title;

    return courseGoal as CourseGoal;
}


const readOnlyNames :Readonly<string[]> = ["Mohammed", "Karim"];//U cannot push or pop from it then.






