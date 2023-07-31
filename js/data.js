'use strict';

import { Movies } from "./movies.js";

export class Data{
    constructor(){
        this.SearchByWord = document.getElementById("search-by-word");
        this.SearchByWord.addEventListener("input", this.renderSearchedData.bind(this));
        this.navLinks = document.querySelectorAll(".nav-anchors li");
        window.addEventListener("load", this.renderData.bind(this));
        window.addEventListener("load", this.navMenuData.bind(this));
        
    }
    async renderData(){
        let defaultAPI = "https://api.themoviedb.org/3/trending/all/day?api_key=e77740c0ec6bfc20275ac8bfa3b1fd08"
        let response = await this.fetchAPI(defaultAPI);
        let results = response.results
        let movies = new Movies(results)
    }
    async navMenuData(){
        let navLinksArray = Array.from(this.navLinks)
        let api;
        for(let i = 0; i < navLinksArray.length; i++){ 
            navLinksArray[i].addEventListener("click", function(e){
                if(this.id != "contact-us"){
                    if(this.id == "now-playing"){
                     api = "https://api.themoviedb.org/3/movie/now_playing?api_key=e77740c0ec6bfc20275ac8bfa3b1fd08&language=en-US&page=1"
                } else if(this.id == "popular"){
                     api = "https://api.themoviedb.org/3/movie/popular?api_key=e77740c0ec6bfc20275ac8bfa3b1fd08&language=en-US&page=1"
                } else if(this.id == "top-rated"){
                     api = "https://api.themoviedb.org/3/movie/top_rated?api_key=e77740c0ec6bfc20275ac8bfa3b1fd08&language=en-US&page=1"
                }
                else if(this.id == "trending"){
                 api = "https://api.themoviedb.org/3/trending/movie/day?api_key=e77740c0ec6bfc20275ac8bfa3b1fd08"
                } else if(this.id == "upcoming"){
                     api = "https://api.themoviedb.org/3/movie/upcoming?api_key=e77740c0ec6bfc20275ac8bfa3b1fd08&language=en-US&page=1"
                }
                async function getData(){
                             let response = await fetchAPI(api);
                let results = response.results
                let movies = new Movies(results)
                }
                async function fetchAPI(url){
                    let response = await fetch(url);
                    return await response.json();
                }
                getData()
            }
        })
        
    }
           
    }






    async renderSearchedData(){
        let searchedWord = this.SearchByWord.value
        let searchapi = `https://api.themoviedb.org/3/search/movie?api_key=e77740c0ec6bfc20275ac8bfa3b1fd08&query=${searchedWord}`
        
        let response = await this.fetchAPI(searchapi);
        
        let results = response.results
        if(results != undefined){
        let movies = new Movies(results)
        }
    }

    async fetchAPI(url){
        let response = await fetch(url);
        return await response.json();
    }
}
