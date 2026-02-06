/// well hello welcome to 2026

type person = {
    name: "sadik";
    age: 24;
    language: 'arabic , bangla, urdu, hindi, english';
    job: 'non';
    skill: 'jack of all trader'
}

interface target {
    course: 'dars a nazami';
    subject: 'quran , hadith, fiqh, arabic grammar, arabic language, usool a quran, usool a hadith, aqeedah, seerah, history, locgic, ect';
    duration: 'life time';
    
}



function greet (name: string): string{
    return`hello, ${name}`
}

console.log(greet("sadik"));


// let message: string = 'Hello World from TypeScript!';
// console.log(message);
