fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=61fed820eca6eb7d2451e0f0d2011f93&units=metric')
    .then(response => response.json())
    .then( data => {
        var body = document.querySelector("body")
        var p = document.createElement("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
        console.log(data)
        console.log(data.main)
        console.log(data.weather[2])
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Kampala&appid=61fed820eca6eb7d2451e0f0d2011f93')
    .then(response => response.json())
    .then( data => {
        var body = document.querySelector("body")
        var p = document.querySelector ("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
        });

        fetch('https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=61fed820eca6eb7d2451e0f0d2011f93')
    .then(response => response.json())
    .then( data => {
        var body = document.querySelector("body")
        var p = document.querySelector ("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
        });