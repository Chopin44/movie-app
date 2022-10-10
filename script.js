let contain = document.getElementById("container")
let inputSearch = document.querySelector("input")
let search = document.querySelector("form")





let getDataSearch = async () => {
  search.addEventListener("submit", e => {
    e.preventDefault()
  
    a = inputSearch.value
    return a
  })
  let getSearch = await fetch("https://api.themoviedb.org/3/search/movie?api_key=a648e8e7ea4db9c717c838225afd0372&query=lou&page=1")
  let dataSearch = await getSearch.json()
  console.log(dataSearch);
}

getDataSearch()

fetch("https://api.themoviedb.org/3/discover/movie?api_key=a648e8e7ea4db9c717c838225afd0372&sort_by=popularity.desc&page=1")
.then((Response) => {
    return Response.json()
})
.then((data) => {
    let html = " "
    console.log(data);
    data.results.forEach(e => {
        
            let htmlSegment = 
          `<div class="col">
          <div class="card h-100">
          <img src="https://image.tmdb.org/t/p/original//${e.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${e.title}</h5>
              <h5>Rate: ${e.vote_average}</h5>
            </div>
          </div>
        </div>`
      
      
        html += htmlSegment
        contain.innerHTML = html   
        
    })
       
});

  
    
    
