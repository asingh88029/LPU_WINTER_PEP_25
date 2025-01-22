// function greet(fname, lname){
//     console.log(`Hello ${fname} ${lname}`)
// }
// greet("Ankit", "Singh")

// const greet = (fname, lname)=>{
//     console.log(`Hello ${fname} ${lname}`)
// }
// greet("Ankit", "Singh")

// ((fname, lname)=>{
//     console.log(`Hello ${fname} ${lname}`)
// })("Ankit", "Singh")


// function a (){
//     console.log("I am a")
//     return 10
// }

// function b (x){
//    const result = x()
//    console.log(result)
// }

// b(a)

// function x(){
//     return function y(){
//         console.log("I am y")
//     }
// }

// const xResult = x()
// xResult()
// x()()

// const skills = ["HTML", "CSS", "JS", "React"]

// const result = skills.map(x)

// function x(element, index){
//     // console.log("element is ", element)
//     // console.log("index is ", index)
//     // return "react"
//     return `<p>${element}</p>`
// }

// const skills = ["HTML", "CSS", "JS", "React"]

// const result = skills.map((element)=>{return `<p>${element}</p>`})

// const result = skills.map(e=>`<p>${e}</p>`)


// console.log(result)

const students = [
    { name: "Alice Johnson", age: 22, city: "New York", skills: ["JavaScript", "React"] },
    { name: "Bob Smith", age: 24, city: "San Francisco", skills: ["Python", "Data Analysis"] },
    { name: "Charlie Brown", age: 21, city: "Chicago", skills: ["Java", "Spring Boot"] },
    { name: "Daisy Williams", age: 23, city: "Seattle", skills: ["HTML", "CSS"] },
    { name: "Ethan Taylor", age: 25, city: "Austin", skills: ["Ruby", "Rails"] },
    { name: "Fiona Davis", age: 22, city: "Boston", skills: ["C++", "Algorithms"] },
    { name: "George Harris", age: 24, city: "Denver", skills: ["SQL", "Database Design"] },
    { name: "Hannah Martinez", age: 20, city: "Miami", skills: ["PHP", "Laravel"] },
    { name: "Ian Moore", age: 23, city: "Los Angeles", skills: ["JavaScript", "Vue.js"] },
    { name: "Jenna Clark", age: 22, city: "Dallas", skills: ["Python", "Machine Learning"] },
    { name: "Kevin Lewis", age: 21, city: "Houston", skills: ["Go", "Cloud Computing"] },
    { name: "Laura Lee", age: 24, city: "Phoenix", skills: ["Swift", "iOS Development"] },
    { name: "Mason Hall", age: 22, city: "Portland", skills: ["Kotlin", "Android Development"] },
    { name: "Nina Allen", age: 23, city: "Atlanta", skills: ["C#", ".NET"] },
    { name: "Oscar Wright", age: 21, city: "San Diego", skills: ["Python", "Flask"] },
    { name: "Paula King", age: 25, city: "San Jose", skills: ["Java", "Hibernate"] },
    { name: "Quinn Baker", age: 20, city: "Las Vegas", skills: ["HTML", "WordPress"] },
    { name: "Ryan Scott", age: 23, city: "Orlando", skills: ["JavaScript", "Node.js"] },
    { name: "Sophia Adams", age: 22, city: "Charlotte", skills: ["Python", "Data Science"] },
    { name: "Thomas Reed", age: 24, city: "Philadelphia", skills: ["Rust", "System Programming"] },
    { name: "Uma Green", age: 21, city: "Indianapolis", skills: ["JavaScript", "Angular"] },
    { name: "Victor Young", age: 22, city: "San Antonio", skills: ["Python", "API Development"] },
    { name: "Wendy Carter", age: 23, city: "Columbus", skills: ["Java", "Microservices"] },
    { name: "Xander Morris", age: 21, city: "Louisville", skills: ["C", "Embedded Systems"] },
    { name: "Yara Nelson", age: 25, city: "Milwaukee", skills: ["Scala", "Big Data"] },
    { name: "Zane Perez", age: 22, city: "Nashville", skills: ["Python", "Django"] },
    { name: "Abby Ross", age: 23, city: "Oklahoma City", skills: ["JavaScript", "React Native"] },
    { name: "Brian Rivera", age: 24, city: "Kansas City", skills: ["Java", "Kubernetes"] },
    { name: "Clara Brooks", age: 21, city: "Memphis", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Derek Foster", age: 22, city: "New Orleans", skills: ["Ruby", "Sinatra"] },
    { name: "Ella Howard", age: 23, city: "Salt Lake City", skills: ["Python", "TensorFlow"] },
    { name: "Frank Russell", age: 21, city: "Raleigh", skills: ["C++", "Game Development"] },
    { name: "Grace Griffin", age: 24, city: "Richmond", skills: ["JavaScript", "TypeScript"] },
    { name: "Henry Cox", age: 22, city: "Tucson", skills: ["Java", "Maven"] },
    { name: "Isla James", age: 25, city: "El Paso", skills: ["PHP", "Symfony"] },
    { name: "Jack White", age: 23, city: "Birmingham", skills: ["C#", "WPF"] },
    { name: "Kara Walker", age: 21, city: "Baltimore", skills: ["Swift", "UI/UX Design"] },
    { name: "Liam Hughes", age: 22, city: "Albuquerque", skills: ["JavaScript", "Express"] },
    { name: "Mia Evans", age: 24, city: "Fresno", skills: ["Python", "NLP"] }  
];

// filter student with age greater than 22
// const result = students.filter((element, index, array)=>{

//     const {name, age, city, skills} = element

//     return age > 22

// })

// const result = students.filter((element, index, array)=>{

//     const {name, age, city, skills} = element

//     return skills.map(e=>e.toLowerCase()).includes("python")

// })

// console.log(result)

// const result = students.sort((currentElement, nextEelement)=>{
//     return nextEelement.age - currentElement.age
// })
// console.log(result)

// const result = students.reduce((total, element)=>{
//     return total + element.age
// }, 0)/students.length

// console.log(result)

const token = [
    "Mahatma", "Gandhi", "was", "a", "leader", "of", "India's", "independence", "movement",
    "against", "British", "rule.", "He", "is", "known", "for", "his", "principles", "of", 
    "nonviolence", "and", "truth,", "which", "he", "called", "Satyagraha.", "Born", "on", 
    "October", "2,", "1869,", "in", "Porbandar,", "Gujarat,", "he", "studied", "law", 
    "in", "London", "and", "worked", "in", "South", "Africa,", "where", "he", "fought", 
    "against", "discrimination.", "Returning", "to", "India,", "he", "led", "several", 
    "nonviolent", "movements,", "including", "the", "Salt", "March", "and", "Quit", "India", 
    "Movement,", "inspiring", "millions.", "He", "believed", "in", "simple", "living,", 
    "self-reliance,", "and", "harmony", "among", "all", "communities.", "His", "legacy", 
    "as", "a", "symbol", "of", "peace", "and", "justice", "continues", "to", "influence", 
    "the", "world."
];

const result = token.reduce((prevValue, element)=>{
    return prevValue + " " + element
}, "")

console.log(result)
  
  