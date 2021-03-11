fetch('https://www.omdbapi.com/?s=harry potter&apikey=521e08d7')
    .then(response => response.json())
    .then( data => {
        console.log(data)
            data.Search.forEach(function(item) {   
            var body = document.querySelector("body")
            var p = document.createElement("div")
            var p1 = document.createElement("p")
            var p2 = document.createElement("p")
            var image = document.createElement("img")
            p1.innerHTML = item.Title
            p2.innerHTML = item.Year
            image.setAttribute("src", item.Poster)
            body.appendChild(p)
            p.appendChild(p1)
            p.appendChild(p2)
            p.appendChild(image)
         })
    
    })