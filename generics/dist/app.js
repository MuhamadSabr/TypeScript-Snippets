"use strict";
function createCourseGoal(title, description, deadline) {
    if (title.length < 4) {
        return "Wrong title";
    }
    if (description.length < 100) {
        return "Description must be at least 100 characters";
    }
    if (deadline.getDay < new Date().getDay) {
        return "Date must be present date";
    }
    let courseGoal = {};
    courseGoal.completeUntil = deadline;
    courseGoal.descritpion = description;
    courseGoal.title = title;
    return courseGoal;
}
const readOnlyNames = ["Mohammed", "Karim"];
