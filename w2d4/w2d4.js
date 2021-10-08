    //Exercise 1: 
    if(!String.prototype.filterStr){
        String.prototype.filterStr =function (...bannedWords){
            let strArray=this.split(" ");
            return strArray.filter(str=>(!bannedWords.includes(str))).join(" ");
            }
        };
        console.log("This house is not nice!".filterStr('not'))
    
        
        //Exercise 2:
        if(!Array.prototype.bubbleSort){
            Array.prototype.bubbleSort = function(){
                let arr=this;
                let len=this.length;
            for (let i=0;i<len-1;i++){
                for(let j=0;j<len-i-1;j++){
                if(arr[j]>arr[j+1]){
                    let temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
            }
            return arr;
            }
        }
    
        console.log([6,4,0,3,-1,1].bubbleSort());
    
        //Exercise 3
    var Person = function() {};
    Person.prototype.initialize = function(name, age)
    {
     this.name = name;
     this.age = age;
    }
    Person.prototype.describe = function()
    {
     return this.name + ", " + this.age + " years old.";
    }
    var Student = function() {};
    Student.prototype = new Person();
    Student.prototype.learn = function(subject)
    {
     console.log(this.name + " just learned " + subject);
    }
    var me = new Student();
    me.initialize("John", 25);
    me.learn("Inheritance");
    
    var Teacher = function(){};
    Teacher.prototype=new Person();
    Teacher.prototype.teach=function(subject){
        return (this.name + " is now teaching " + subject); 
    }
    
    var teacher=new Teacher();
    teacher.initialize("Michael",30);
    teacher.teach("WAP");
    
    describe("filterStr",function(){
     it("accepts an array of strings that specifies a list of banned words and returns the string after removing all the banned words.",
          function(){
              assert.equal("this house is not nice".filterStr('not'),"this house is nice");
          });
    });
    
    describe("bubbleSort",function(){
        it("sorts an array ",
        function(){
            assert.equal([6,4,0,3,-1,1].bubbleSort(),[-1,0,1,3,4,6].toString());
        }
        )
    })
    
    describe("teach",function(){
        it("describes a teacher and the subject they teach",
        function(){
            assert.equal(teacher.teach("WAP"),"Michael is now teaching WAP");
        }
        )
    })