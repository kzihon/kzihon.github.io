class Bank {
    constructor(){
        this._accounts = new Array(0);
    }

    getAccounts(){
        return this._accounts;
    }

    static getAccountNumber(a){
        let number=a.length+1;
        return number;
      
    }

    addAccount(){
        let _acc = new Account(Bank.getAccountNumber(this._accounts));
        this._accounts.push(_acc);
        return _acc.getNumber();
    } 

    addSavingsAccount(interest){
        let _acc= new SavingsAccount(Bank.getAccountNumber(this._accounts),interest);
        this._accounts.push(_acc);
        return _acc.getNumber();
    }

    addCheckingAccount(overdraft){
        let _acc= new CheckingAccount(Bank.getAccountNumber(this._accounts),overdraft);
        this._accounts.push(_acc);
        return _acc.getNumber()
    }

    closeAccount(number){
            if(this._accounts[number]){
                this._accounts.splice(number,1);
                return "account closed";
            }
        else{
        return "account not found";
        }
    }

    getAccount(number){
        return this._accounts.find(acc => acc.getNumber() === number);
        }

    accountReport(){
        let output="";
        for(let i=0;i<this._accounts.length;i++){
            output +=this._accounts[i].toString();
        }
        return output;
    }

    endOfMonth(){
        let eom;
        for (let i=0;i<this._accounts;i++){
           eom+= this._accounts[i].endOfMonth();
        }
        return eom;
    }

}