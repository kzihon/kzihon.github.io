const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   let sum=0;
   (function getNumber(){
  
        readline.question('Enter a number or stop to exit',n=>{
            if(n!='stop'){
                sum+=parseInt(n);
             
            }else{
                console.log(sum);
                readline.close();
            }
            getNumber();
        
        });
    
   })();