// const button = document.createElement("button")
// button.innerText = "Click Me"

// button.addEventListener("click",()=>{
//     const p = document.getElementById("first-p")
//     const p = document.getElementsByClassName("1st-p")[0]
//     const p = document.getElementsByTagName("p")[0]
//     const result = document.querySelectorAll("body > p")

//     for(const p of result){

//         p.innerText = "I am paragraph modified by Javascript"
//         p.style.color="red"
//         p.style.backgroundColor="yellow"

//     }
    
// })

// document.getElementById("body").appendChild(button)

// const button = document.createElement("button")
// button.innerText = "Add City"

// const body = document.querySelector("body")

// button.addEventListener("click", ()=>{
//     const card = createCityCard("https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "Punjab", "100+ Places")
//     document.querySelector("#city-container").appendChild(card)
// })

// body.appendChild(button)

// const clickHandler = ()=>{
//     const imageURL = document.querySelector("#imageURL").value
//     const cityName = document.querySelector("#cityName").value
//     const cityDescription = document.querySelector("#cityDescription").value
    
//     const cityCard = createCityCard(imageURL, cityName, cityDescription)

//     document.querySelector("#city-container").appendChild(cityCard)
// }

// document.querySelector("#addCity").addEventListener("click", clickHandler)

let cityContainer = document.querySelector("#city-container")

let apiData = []

let filteredData = []

const API_BASE_URL= `https://makemytrip-backend-w2d2.onrender.com`

fetch(`${API_BASE_URL}/cities`).then((response)=>{
    return response.json()
}).then((data)=>{

    apiData = data

    for(const city of data){
        const {city : cityName, description, image} = city
        
        const card = createCityCard(image, cityName, description)

        cityContainer.appendChild(card)
    }

}).catch((err)=>{
    console.log(err)
})

document.querySelector("#searchBtn").addEventListener("click",clickHandler)

document.querySelector("#clearBtn").addEventListener("click",()=>{
    cityContainer.innerHTML=""
    for(const city of apiData){
        const {city : cityName, description, image} = city
        
        const card = createCityCard(image, cityName, description)

        cityContainer.appendChild(card)
    }
})

function clickHandler(){
    const searchKeyword = document.querySelector("#searchInput").value
    
    filteredData = apiData.filter((city)=>{
        const {city: cityName, description, id} = city
        return (cityName.toLowerCase().includes(searchKeyword) || description.toLowerCase().includes(searchKeyword) || id.toLowerCase().includes(searchKeyword))
    })

    cityContainer.innerHTML=''

    for(const city of filteredData){
        const {city: cityName, description, id, image} = city
        const card = createCityCard(image, cityName, description)
        cityContainer.appendChild(card)
    }
}

function createCityCard(imageURL, cityName, cityDescription){

    /*
    <div class="card">
        <img src="https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
        <div class="card-text">
            <div>
                <h5>New Delhi</h5>
                <h6>100+ Places</h6>
            </div>
        </div>
    </div>
    */

    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card")

    const img = document.createElement("img")
    img.src = imageURL

    cardDiv.appendChild(img)

    const cardTextDiv = document.createElement("div")
    cardTextDiv.classList.add("card-text")

    const innerDiv = document.createElement("div")

    const h5 = document.createElement("h5")
    h5.innerText = cityName

    const h6 = document.createElement("h6")
    h6.innerText = cityDescription

    innerDiv.appendChild(h5)

    innerDiv.appendChild(h6)

    cardTextDiv.appendChild(innerDiv)

    cardDiv.appendChild(cardTextDiv)


    return cardDiv


}


