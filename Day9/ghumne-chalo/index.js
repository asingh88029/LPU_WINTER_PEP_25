const http = require("http");

let PORT = 4000;

let DATABASE = [
    {
        id: 100001,
        name: "Mumbai",
        description: "The financial capital of India, known for Bollywood and the Gateway of India.",
        state: "Maharashtra"
    },
    {
        id: 100002,
        name: "Delhi",
        description: "The capital city of India, famous for its historic monuments like the Red Fort and India Gate.",
        state: "Delhi"
    },
    {
        id: 100003,
        name: "Bangalore",
        description: "Known as the Silicon Valley of India, it is a hub for IT and startups.",
        state: "Karnataka"
    },
    {
        id: 100004,
        name: "Kolkata",
        description: "A cultural and historical city, known for its colonial architecture and Durga Puja celebrations.",
        state: "West Bengal"
    },
    {
        id: 100005,
        name: "Chennai",
        description: "A coastal city known for its temples, classical music, and Marina Beach.",
        state: "Tamil Nadu"
    },
    {
        id: 100006,
        name: "Hyderabad",
        description: "Famous for its biryani, Charminar, and its emerging IT industry.",
        state: "Telangana"
    },
    {
        id: 100007,
        name: "Jaipur",
        description: "The Pink City, known for its palaces, forts, and rich cultural heritage.",
        state: "Rajasthan"
    },
    {
        id: 100008,
        name: "Ahmedabad",
        description: "A major city in Gujarat, known for its textile industry and the Sabarmati Ashram.",
        state: "Gujarat"
    },
    {
        id: 100009,
        name: "Pune",
        description: "An educational and cultural hub, often called the Oxford of the East.",
        state: "Maharashtra"
    },
    {
        id: 100010,
        name: "Lucknow",
        description: "The City of Nawabs, famous for its Tehzeeb (etiquette), cuisine, and Chikan embroidery.",
        state: "Uttar Pradesh"
    }
];

  

const server = http.createServer(serverHandler)

function serverHandler(request, response){
    
    const {url : route, method} = request

    console.log(`Request Received at ${route}, method : ${method}, timestamp : ${new Date()}`)

    if(route==='/api/v1/cities/all' && method==="GET"){
        const result = {
            success : true,
            data : DATABASE
        }
        response.end(JSON.stringify(result))
    }else if(route==="/api/v1/cities/add" && method==="POST"){

        let body = ""

        request.on("data", (chunk)=>{
            body+=chunk.toString()
        })

        request.on("end",()=>{

            const data = JSON.parse(body)

            for(const city of data){

                const {name, description, state} = city

                if(!name){

                    const result = {
                        success : false,
                        message : "Name is required"
                    }

                    response.end(JSON.stringify(result))
                    return

                }

                if(!description){

                    const result = {
                        success : false,
                        message : "Description is required"
                    }

                    response.end(JSON.stringify(result))
                    return

                }

                if(!state){

                    const result = {
                        success : false,
                        message : "State is required"
                    }

                    response.end(JSON.stringify(result))
                    return

                }

                city.id = generateId()


                DATABASE.push(city)

            }

            const result = {
                success : true,
                message : `${DATABASE.length} cities available`,
                data : DATABASE
            }

            response.end(JSON.stringify(result))


        })

    }else{
        const result = {
            success : false,
            message : "API ENDPOINT is not defined"
        }
        response.end(JSON.stringify(result))
    }
}

server.listen(PORT, ()=>{
    console.log("HTTP Server is started on port : ", PORT)
})


function generateId(){
    return  100000 + parseInt(Math.random()*899999)
}
