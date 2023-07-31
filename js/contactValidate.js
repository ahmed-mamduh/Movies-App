'use strict';

export class ContactValidate {
    constructor(){
        
        this.email = document.getElementById("email-Input");
        this.phone = document.getElementById("phone-Input");
        this.age = document.getElementById("age-Input");
        this.password = document.getElementById("password-Input");
        this.repassword = document.getElementById("repassword-Input");
        
        this.name = this.validateName();
        this.email = this.validateEmail();
        this.phone = this.validatePhone();
        this.age = this.validateAge();
        this.password = this.validatePassword();
        this.repassword = this.validateRePassword();
    }
     validateName(){
        let name = document.getElementById("name-Input");
        name.addEventListener("input", function(){
            let regex = /^[A-Za-z0-9]+$/
            
            if(regex.test(name.value) == true){
             
                $("#name-validate").addClass("d-none");
                $("#name-validate").removeClass("d-block");
            } else {
                $("#name-validate").addClass("d-block");
                $("#name-validate").removeClass("d-none");
            }
        }
        
     )}
     validateEmail(){
        let email = document.getElementById("email-Input");
        email.addEventListener("input", function(){
            let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
            
            if(regex.test(email.value) == true){
                $("#email-validate").addClass("d-none");
                $("#email-validate").removeClass("d-block");
             
            } else {
                $("#email-validate").addClass("d-block");
                $("#email-validate").removeClass("d-none");
            }
        }
        
     )}
     validatePhone(){
        let phone = document.getElementById("phone-Input");
        phone.addEventListener("input", function(){
            let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
            
            if(regex.test(phone.value) == true){
                $("#phone-validate").addClass("d-none");
                $("#phone-validate").removeClass("d-block");
             
            } else {
                $("#phone-validate").addClass("d-block");
                $("#phone-validate").removeClass("d-none");
            }
        }
        
     )}
     
     validateAge(){
        let age = document.getElementById("age-Input");
        age.addEventListener("input", function(){
            let regex = /^[1-9][0-9]?$|^100$/
            
            if(regex.test(age.value) == true){
                $("#age-validate").addClass("d-none");
                $("#age-validate").removeClass("d-block");
             
            } else {
                $("#age-validate").addClass("d-block");
                $("#age-validate").removeClass("d-none");
            }
        }
        
     )}
     validatePassword(){
        let password = document.getElementById("password-Input");
        password.addEventListener("input", function(){
            let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            
            if(regex.test(password.value) == true){
                $("#password-validate").addClass("d-none");
                $("#password-validate").removeClass("d-block");
             
            } else {
                $("#password-validate").addClass("d-block");
                $("#password-validate").removeClass("d-none");
            }
        }
        
     )}
     validateRePassword(){
         let repassword = document.getElementById("repassword-Input");
         repassword.addEventListener("input", function(){
             let password = document.getElementById("password-Input");
             if(repassword.value == password.value){
                $("#repassword-validate").addClass("d-none");
                $("#repassword-validate").removeClass("d-block");
             } else {
                $("#repassword-validate").addClass("d-block");
                $("#repassword-validate").removeClass("d-none");
             }
         })
     }
}