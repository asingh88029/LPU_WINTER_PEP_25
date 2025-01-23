// function outer(){
//     let name = "Ankit"
//     function inner(){
//         console.log(name)
//     }
//     inner()
// }

// outer()

// function outer(){
//     let name = "Ankit"
//     return function inner(){
//         console.log(name)
//     }
// }

// const inner = outer()
// inner()

// function outer(){
//     let name = "Ankit"
//     return function inner(){
//         console.log(name)
//     }
// }

// outer()()


// function outer(){
//     let count =0;
//     return function inner(){
//         count++
//         console.log(count)
//     }
// }

// const inner1 =outer()

// const inner2 = outer()

// inner1()
// inner1()
// inner2()
// inner1()
// inner1()


// for(var i =0; i<3; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

for(let i =0; i<3; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}

// function makeMultiplier(multiplier){
//     return function(x){
//         return function(y){
//             return x*y*multiplier
//         }
//     }
// }

// const multiplyBy2 = makeMultiplier(2)

// const multiplyBy2and3 = multiplyBy2(3)

// console.log(multiplyBy2and3(4))