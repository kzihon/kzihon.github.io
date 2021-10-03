

         function myFunctionTest(expected, found) {
            if (expected === found) {
              return "TEST SUCCEEDED";
            } else {
              return "TEST FAILED.  Expected " + expected + " found " + found;
            }
          }
          
         function max(a, b) {
            if (a > b) {
              return a;
            } else {
              return b;
            }
        }
        console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
    
        function maxOfThree(a, b, c){
            if (a>c&&a>b) {
                return a;
                
            } else if(b>c&& b>a) {
                return b;
                
            } else return c;
        }
          console.log("Expected out put of maxOfThree(1,2,3) is 3" + myFunctionTest(3, maxOfThree(1,2,3)));
           
        
        function isVowel(b){
              if(b=='a'||b=='i'||b=='u'||b=='o'||b=='e'){
                  return true;
              }
              else return false;
          }
          console.log("Expected output of isVolwel(e) is true  " + myFunctionTest(true, isVowel('e')));
          

          function sum(num=[]){
              let sum=0;
              let i=0;
            while(i!=(num.length)){
                sum +=num[i];
                i++;
            }
            return sum;
          }
          console.log("Expected output of sum([20,10,20) is 50  " + myFunctionTest(50, sum([20, 10,20])));
          
         
          function multiply(num=[]){
              let product=1;
              let i=0;
            while(i!=(num.length)){
                product *=num[i];
                i++;
            }
            return product;
          }
          console.log("Expected output of multiply([20,10,20]) is 4000  " + myFunctionTest(4000, multiply([20, 10,20])));
          


          function reverse(str){
              let strResult="";
              for(let i=str.length;i>=0;i--){
                strResult +=str.charAt(i)
              }
              return strResult;
          }

          console.log("Expected output of reverse('word') is drow  " + myFunctionTest('drow', reverse('word')));


          function findLongestWord(strArray=[]){
              let long=strArray[0];
              for(let i=1; i<strArray.length;i++){
                 if(max(long.length,strArray[i].length) !=long.length){
                    long=strArray[i]
                 }
              }
              return long;
          }
        console.log("Expected output of findLongestWord(['hi','all','people']) is people  " 
        + myFunctionTest('people', findLongestWord(['hi','all','people'])));
 
        function filterLongWords(strArray=[],b){
              let strResult=[];
            for(let i=0; i<strArray.length;i++){
                if(strArray[i].length>b){
                    strResult.push(strArray[i]);
                }
            }
            return strResult;
          }
          
          console.log("Expected output of filterLongWords(['hi','all','people'],3) is ['people']  " 
        + myFunctionTest(expectedArr.toString, filterLongWords(['hi','all','people'],3).toString));



          function mapping(arr=[]){
            const a= arr.map(function(elem, i,arr){
                return elem * 10;})
            return a;
          }
          console.log("Expected output of map([1,3,5,3,3]) is 10,30,50,30,30  " +
           myFunctionTest(mapexp.toString, mapping([1,3,5,3,3]).toString));

           function filtering(arr=[]){
            const c = arr.filter(function(elem, i, array){
            return elem === 3;});
            return c;
        }
      
        console.log("Expected output of filter([1,3,5,3,3]) is 3,3,3  " + myFunctionTest(filterexp.toString, filtering([1,3,5,3,3]).toString));

        
        function reducing(arr=[]){
             const d = arr.reduce(function(prevValue, elem, i, array){
            return prevValue * elem;
            });
            return d;
        }
        console.log("Expected output of reduce([1,3,5,3,3]) is 135  " + myFunctionTest(135, reducing([1,3,5,3,3])));


    