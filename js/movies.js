'use strict';

export class Movies {
    constructor(response){
        this.response = response;
        this.searchInput = document.getElementById("search-by-word")
        this.searchInput.addEventListener("input", this.updateUI(this))
        
    }
  
     
    
    async updateUI(){

        let moviesCards = document.getElementById("movies");
        moviesCards.innerHTML = ``
            if(this.response != undefined){
              let searchArray = Array.from(this.response)
              let searchCurrent = document.getElementById("search-current");
              let list = [];
              
              searchCurrent.addEventListener("input",function(){
                
                if(list.length > 0){
                  for(let i = 0; i <= list.length; i++){
                    list.pop() 
                  }
                }
                let filteredArray = searchArray.map(title => title)
                function returnElement(){
                  for (let i = 0; i < filteredArray.length; i++) {
                   
                    let element = filteredArray[i].original_title;
                    if(element == undefined){
                      continue;
                    }
                    if(element.includes(searchCurrent.value) == true){
                    
                      list.push(filteredArray[i])
                      function removeRepeated(arr){
                        let unique = arr.reduce(function (acc, curr) {
                          if (!acc.includes(curr))
                              acc.push(curr);
                          return acc;
                      }, []);
                      return unique;
                      }
                      list = removeRepeated(list);
                      updateSearchedUi()
                    }
                    
                    
                  }
                }
               
                returnElement()
                function updateSearchedUi(){
                let searchedMovies = document.getElementById("searchedMovies");
                searchedMovies.innerHTML = ""
                for(let i = 0; i < list.length; i++){
                  searchedMovies.innerHTML += `<div class="col-md-6 col-lg-4 my-3 shadow">
                  <div class="movie shadow rounded position-relative">
                    <div class="post">
                      <img src="https://image.tmdb.org/t/p/w500/${list[i].poster_path}" alt="" />
                    </div>
                    <div
                      class="layer position-absolute top-0 w-100 h-100 text-lg-center align-items-center d-flex"
                    >
                      <div>
                        <h2>${list[i].original_title}</h2>
                        <p>
                          ${list[i].overview}
                        </p>
                        <p>rate: ${list[i].vote_average}</p>
                        <p>${list[i].release_date}</p>
                      </div>
                    </div>
                  </div>
                </div>`
                }
                }
              })
              
              
                    for(let i = 0; i < this.response.length; i++){
            
                        moviesCards.innerHTML += `<div class="col-md-6 col-lg-4 my-3 shadow">
                        <div class="movie shadow rounded position-relative">
                          <div class="post">
                            <img src="https://image.tmdb.org/t/p/w500/${this.response[i].poster_path}" alt="" />
                          </div>
                          <div
                            class="layer position-absolute top-0 w-100 h-100 text-lg-center align-items-center d-flex"
                          >
                            <div>
                              <h2>${this.response[i].original_title}</h2>
                              <p>
                                ${this.response[i].overview}
                              </p>
                              <p>rate: ${this.response[i].vote_average}</p>
                              <p>${this.response[i].release_date}</p>
                            </div>
                          </div>
                        </div>
                      </div>`
                        }
               
                
            }
                
            
           
    }
    
}