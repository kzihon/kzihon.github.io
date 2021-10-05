/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array*/
function sum(a=[]){
    let sum= a.reduce((accumulator,elem)=>(accumulator+elem));
    return sum;
    }
    
    // multiplication
    function multiply(a=[]){
    let product=a.reduce(function(accumulator,currentvalue){
        return accumulator*currentvalue;},1);
        return product;
    }
    
    /* 5 Define a function reverse() that computes the reversal of a string.*/
    function reverse(str){
    let strArray=str.split("");
    let reverse = strArray.reduce(function(accumulator, currentletter){
    return currentletter + accumulator;},"");
    return reverse;
    }
    
    /* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
    function filterLongWords(strArray=[], i){
    let filter = strArray.filter(word=>word.length>i);
    return filter;
    }
    
    describe("sum", function () {
        it("returns the sum of numbers in a given array",
            function () {
                assert.equal(sum([1,2,3,4,5]), 15);
            });
    });
    
    describe("multiply", function () {
        it("returns the product of numbers in a given array",
            function () {
                assert.equal(multiply([1,2,3,4,5]), 120);
            });
    });
    
    describe("reverse", function () {
        it("returns the reverse of a given string",
            function () {
                assert.equal(reverse("hello"),"olleh");
            });
    });
    
    describe("filterLongWords", function () {
        it("filters an array to return another array of words whose length is greater than a given length",
            function () {
                assert.equal(filterLongWords(["hello","Manju","Habibah","Eden","Yoseph"],5).toString(), ["Habibah","Yoseph"].toString());
            });
    });