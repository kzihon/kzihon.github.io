class CheckingAccount extends Account{
    constructor(number,overdraft){
        super(number);
        this._overdraft=overdraft;
    }

    setOverdraft(overdraft){
        this._overdraft=overdraft;
    }

    getOverdraft(){
        return this._overdraft;
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this._overdraft)) {
            throw Error("Amount goes beyond the overdraft limit");
        }
        this._balance -= amount;
    }

    toString(){
        return "checking Account: " + this._number + " :balance " + this._balance + " :overdraft limit " + this._overdraft;
    }

    endOfMonth(){
        if(this._balance<0){
            return "Warning, low balance " + this.toString();
        }
        else{
            return this.toString();
        }
    }
}