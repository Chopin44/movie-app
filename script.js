let contain = document.getElementById("container")
let inputSearch = document.querySelector("input")
let search = document.querySelector("form")

// Data pertama akan ditimpa data baru hasil search
search.addEventListener("submit", e => {
  e.preventDefault()
  query = inputSearch.value
  if (query == "") {
    Swal.fire({
      title: "Silahkan masukkan judul",
      confirmButtonText: 'Oke'
    })
  } else {
    let getDataSearch = async () => {
      let html = ""
      let getSearch = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a648e8e7ea4db9c717c838225afd0372&query=${query}&page=`)
      let dataSearch = await getSearch.json()
      dataSearch.results.forEach(el => {
        let htmlSegment = 
          `<div class="col">
          <div class="card h-100">
          <img src="https://image.tmdb.org/t/p/original//${el.poster_path}" class="card-img-top" alt="unknown-image">
            <div class="card-body">
              <h5 class="card-title">${el.title}</h5>
              <h6>Rate: ${el.vote_average}</h6>
            </div>
          </div>
        </div>`
        html += htmlSegment
        contain.innerHTML = html   
      });
      console.log(dataSearch);
    }
    getDataSearch()
  }
  
  
  
})

// Data pertama tampil
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
          <img src="https://image.tmdb.org/t/p/original//${e.poster_path}" class="card-img-top" alt="unknown-image">
            <div class="card-body">
              <h5 class="card-title">${e.title}</h5>
              <h6>Rate: ${e.vote_average}</h6>
            </div>
          </div>
        </div>`
      
      
        html += htmlSegment
        contain.innerHTML = html   
        
    })
       
}).catch(err =>{
  alert(err)
});

  
    
    
