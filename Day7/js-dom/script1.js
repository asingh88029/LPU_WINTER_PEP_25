const root = document.getElementById("root")

// const h1 = document.createElement("h1")

// h1.innerText = "I am H1 using JS"

// root.appendChild(h1)

// const h1 = React.createElement("h1", null, "I am H1 using React")

// const ReactROOT = ReactDOM.createRoot(root)

// ReactROOT.render(h1)

// Create a city card using React & ReactDOM

// function CreateCityCard (cityName, cityDescription, cityImg){
    
//     const img = React.createElement("img",{src : cityImg}, null)
//     const h5 = React.createElement("h5", null, cityName)
//     const h6 = React.createElement("h6", null, cityDescription)
//     const innerDiv = React.createElement("div", null, [h5, h6])
//     const textDiv = React.createElement("div", {className : "card-text"}, innerDiv)
//     const cardDiv = React.createElement("div", {className : "card"}, [img, textDiv])

//     return cardDiv
// }

function CreateCityCard (cityName, cityDescription, cityImg){
    return (
        <div className="card">
            <img src={cityImg}/>
            <div className="card-text">
                <div>
                    <h5>{cityName}</h5>
                    <h6>{cityDescription}</h6>
                </div>
            </div>
        </div>
    )
}

const cityCard = CreateCityCard("Kolkata", "100+ Places", "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")

const ReactROOT = ReactDOM.createRoot(root)

ReactROOT.render(cityCard)


