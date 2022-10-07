let contain = document.getElementById("container")



fetch("https://api.themoviedb.org/3/discover/movie?api_key=a648e8e7ea4db9c717c838225afd0372&sort_by=popularity.desc&page=1")
.then(function(Response) {
    return Response.json()
})
.then((data) => {
    let html = " "
    console.log(data);
    data.results.forEach(e => {
        
            let htmlSegment = `<div class="row  justify-content-md-center g-6 mb-3">
            <div class="col-2">
              <div class="card">
                <img src="https://image.tmdb.org/t/p/original//${e.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${e.title}</h5>
                </div>
              </div>
            </div>
            
          </div>`;

            console.log(htmlSegment);
      
        html += htmlSegment
        contain.innerHTML = html

        console.log(e.title);
       
        
    })
       
    });

    //https://image.tmdb.org/t/p/original//wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg

    
    
