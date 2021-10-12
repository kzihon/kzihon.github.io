class SavingsAccount extends Account{
    constructor(number,interest){
        super(number);
        this._interest=interest;
    }

    setInterest(interest){
        this._interest=interest;
    }

    getInterest(){
        return this._interest;
    }

    addInterest(){
        let interestadded = this._balance* this._interest/100;
        this.deposit(interestadded);
    }

    toString(){
        return "the savings Account " + this._number + " :balance " + this._balance +" interest "+this._interest;
    }

    endOfMonth(){
        this.addInterest();
        let result= "the interest added the savings Account " + this._number + " :balance " + this._balance +" interest "+this._interest;
        return result;
        
    }
    
}