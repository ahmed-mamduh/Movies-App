'use strict';
export class Nav {
    constructor(){
        $(".nav-btn").click(function(e){
            this.navOffSet = $("#nav").offset().left;
            
            this.navWidth = $(".nav-left").innerWidth();
            
            if(this.navOffSet == 0){
                $("#nav").animate({left: `-${this.navWidth}px`});
                   
                $("#open-btn").removeClass("d-none");
                $("#close-btn").addClass("d-none");

               
               
                $("#now-playing").animate({opacity:"0",paddingTop:"500px"},500)
                $("#popular").animate({opacity:"0",paddingTop:"500px"},500)
                $("#top-rated").animate({opacity:"0",paddingTop:"500px"},500)
                $("#trending").animate({opacity:"0",paddingTop:"500px"},500)
                $("#upcoming").animate({opacity:"0",paddingTop:"500px"},500)
                $("#contact-us").animate({opacity:"0",paddingTop:"500px"},500)
             
            } else {
             $("#nav").animate({left: 0});
             $("#close-btn").removeClass("d-none");
             $("#open-btn").addClass("d-none");
             
             $("#now-playing").animate({opacity:"1",paddingTop:"-500px"},1100)
             $("#popular").animate({opacity:"1",paddingTop:"-500px"},1500)
             $("#top-rated").animate({opacity:"1",paddingTop:"-500px"},1900)
             $("#trending").animate({opacity:"1",paddingTop:"-500px"},2300)
             $("#upcoming").animate({opacity:"1",paddingTop:"-500px"},2700)
             $("#contact-us").animate({opacity:"1",paddingTop:"-500px"},3100)
            }
        })
    }
}