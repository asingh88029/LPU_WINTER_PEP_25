const express = require("express")

const server = express()

const PORT = 4009

server.use(express.json())

const DATABASE = new Map()

server.get("/api/v1/greet",(request, response)=>{
    console.log("Request Received")
    response.send({
        success : true,
        message : "Hello Students"
    })
})

server.post("/api/v1/short-url/new",(request, response)=>{
    
    // extracting the url from the body
    const {url} = request.body

    // we are validating, if the url is present or not
    if(!url){
        response.status(400).json({
            success: false,
            message : "URL is missing inside the request body"
        })
    }

    // generate 6 char unique id
    const keyId = generateUniqueId(6)

    // we will link url -> unique id
    DATABASE.set(keyId, {
        clickedCount : 0,
        url : url,
        createdAt : new Date().getTime()
    })

    // we will close the request
    response.status(201).json({
        success : true,
        redirect_url : `http://localhost:${PORT}/${keyId}`
    })

})

server.get("/:keyid",(req, res)=>{
    const {keyid} = req.params
    
    // i have to look for keyId inside the database, then get the original url mapped
    const iskeyPresent = DATABASE.has(keyid)
    if(!iskeyPresent){
        res.status(400).json({
            success : false,
            message : "Redirect URL is invalid"
        })
    }
    const {clickedCount, url : originalURL, createdAt} = DATABASE.get(keyid)

    if(new Date().getTime()>(createdAt+60000)){
        res.status(400).json({
            success : false,
            message : "Time limit of 1 minute is excedeed, please upgrade to pro plan for more time limit"
        })
    }

    if(clickedCount>=5){
        res.status(400).json({
            success : false,
            message : "Free Limit exceed, please upgrade to pro plan"
        })
    }

    const updatedValue = {
        clickedCount : clickedCount +1,
        url : originalURL,
        createdAt : createdAt
    }

    DATABASE.set(keyid, updatedValue)

    // we will redirect the req to original url
    res.redirect(originalURL)
})

server.listen(PORT,()=>{
    console.log("Server is started on PORT - ", PORT)
})


function generateUniqueId(charCount){
    const possibleCharString = 'ABCDEFGHTFDCXDDFDFCagjsgfjhahjgdjhagdghjagdhdaghj16871361389176361836718'
    let result = ''
    for(let i=0; i<charCount;i++){
        const uniqueIndex = parseInt(Math.random()*(possibleCharString.length-1))
        result+=possibleCharString[uniqueIndex]
    }
    return result
}