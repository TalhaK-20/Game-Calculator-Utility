    
    function login(){
        const prompt = require("prompt-sync")({ sigint: true })

        var a="Talha20"
        let b= prompt("Welcome to my Program\nYou are in a very hurry to enter MR.\nFirst enter the Password :) ");

        while(b!=a){
            let b= prompt("OOPS :(\nYou entered a wrong password. TRY AGAIN");
        } 
        console.log("WELCOME :) :) :)")
    }    

    
    function game(){
        const prompt = require("prompt-sync")({ sigint: true })

        var a = parseInt(prompt("Guess the number between 10 to 20 :) "))
        var b = 20
        let i = 10
        
        while(b!=a){
            console.log("You didn't guess right one ! oops. ");
            console.log("CHANCES remains -> " + (i-1)); 
            i--;
            
            var a = parseInt(prompt("Try again ! Enter the Number = "));
      
            if(b==a){
                console.log("Right guess " +(a)+ " at the turn " +(11-i)); 
            }   
      
            if(i<2){
                console.log("You have been lost the game :)");
                break;
            }
        } 
    }
    
    
    // If we don't use (parseInt), than it will concatenate;
    // by default, it will consider the numbers (STRING). 

    
    function calculator(){
        const prompt = require("prompt-sync")({ sigint: true })

        var a = parseInt(prompt("Enter FIRST number = "));
        var b = parseInt(prompt("Enter SECOND number = "));
        var c = prompt("Enter the operation +,-,*,/ = ");
        var result;
        
        console.log("You have selected "+c+" Operator");
        
        if(c === "+"){
            result = a + b;
            console.log(`Answer is = ${result}`);   // String Literal       
        } 
          
        if(c==="-"){
            console.log("Answer is = "+(a-b));          
        }    
         
        if(c==="*"){
            console.log("Answer is = "+(a*b));          
        }        
    
        if(c==="/"){
            console.log("Answer is = "+(a/b));          
        }
    }
    
    
    function homepage(){
        
        login();

        const prompt = require("prompt-sync")({ sigint: true })
        
        var c = parseInt(prompt("Enter the number you want to use...\n\n1. Play Guess Game\n\n2. Calculator \n"))
        
        if(c==1){
            game();      
        }
    
        else if(c==2){
            calculator();     
        }
    }

homepage();


