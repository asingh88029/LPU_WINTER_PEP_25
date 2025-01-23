// EX1
// console.log("I am a")


// setTimeout(()=>{
//     console.log("I am in setTimeout")
// }, 5000)

// console.log("I am b")

// EX2
// console.log("I am a")

// setTimeout(()=>{
//     console.log("I am in setTimeout")
// }, 0)

// console.log("I am b")

// EX3
// console.log("I am a")

// setTimeout(()=>{
//     console.log("I am in setTimeout")
// }, 1000)

// console.log("I am b")

// while(true){
// }

const startTime = new Date().getTime()
console.log("i am a")

setTimeout(()=>{
    console.log("I am in setTimeout")
    const currentTime = new Date().getTime()-startTime
    console.log(currentTime, "cbT")
}, 0)

console.log("I am b")

document.querySelector("#btn").addEventListener("click",()=>{
    console.log("I am clicked")
    const currentTime = new Date().getTime()-startTime
    console.log(currentTime, "cbEL")
})

fetch("https://makemytrip-backend-w2d2.onrender.com/cities").then(response=>response.json).then(()=>{
    console.log("I am in fetch")
    const currentTime = new Date().getTime()-startTime
    console.log(currentTime, "cbP")
})

console.log("I am c")

function timeTakingFunc(time){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                data : {"name":"Ankit"},
                success : true
            })
        }, time)
        // reject("Network error")
    })
    return promise
}

// timeTakingFunc(1000).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

async function x() {

    try{
        const result = await timeTakingFunc(1000)
        console.log(result)
    }catch(err){
        console.log(err)
    }


    
}
x()