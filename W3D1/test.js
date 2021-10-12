let accA = new Account("111111");
let mysavings=new SavingsAccount("12345",12);
let mychecking=new CheckingAccount("10101",100);
let myBank = new Bank();

describe ("getNumber", function(){
    it("returns the account number", function(){
        assert.equal(accA.getNumber(),"111111");
    }
    )
});

accA.deposit(10000);
accA.withdraw(5000);

describe ("getBalance", function(){
    it("returns the account Balance", function(){
        assert.equal(accA.getBalance(),"5000");
    }
    )
});


describe ("toString", function(){
    it("returns the representation of the account", function(){
        assert.equal(accA.toString(),"Account ABCDE: balance 5000");
    }
    )
});
mysavings.deposit(100000);
mysavings.setInterest(10);
mysavings.addInterest();

describe ("savingsgetInterest", function(){
    it("returns the interest of the savings Account", function(){
        assert.equal(mysavings.getInterest(),"10");
    }
    )
});

describe ("savingsgetBalance", function(){
    it("returns the amount on the savings account plus interest", function(){
        assert.equal(mysavings.getBalance(),110000);
    }
    )
});

describe ("savingstoString", function(){
    it("returns the representation of the account", function(){
        assert.equal(mysavings.toString(),"the savings Account 12345 :balance 110000 interest 10");
    }
    )
});

mychecking.deposit(50000);
mychecking.withdraw(50100);

describe ("checkinggetOverdraft", function(){
    it("returns the overdraft limit of the account", function(){
        assert.equal(mychecking.getOverdraft(),"100");
    }
    )
});


describe ("addAccount", function(){
    it("Adds an account", function(){
        assert.equal(myBank.addAccount(),1);
    }
    )
});

describe ("addAccount", function(){
    it("Adds an account", function(){
        assert.equal(myBank.addAccount(),2);
    }
    )
});

describe ("addsavingAccount", function(){
    it("Adds an account", function(){
        assert.equal(myBank.addSavingsAccount(12),3);
    }
    )
});

describe ("addcheckingAccount", function(){
    it("Adds an account", function(){
        assert.equal(myBank.addCheckingAccount(200),4);
    }
    )
});


describe ("closeAccount", function(){
    it("closes an account", function(){
        assert.equal(myBank.closeAccount(1),"account closed");
    }
    )
});

describe ("closeAccount", function(){
    it("closes an account", function(){
        assert.equal(myBank.closeAccount(4),"account not found");
    }
    )
});



let resultstr="Account 1: balance 0the savings Account 3 :balance 0 interest 12checking Account: 4 :balance 0 :overdraft limit 200";

describe ("AccountReport", function(){
    it("gives an account report", function(){
        assert.equal(myBank.accountReport(),resultstr);
    }
    )
});

let returnString = "Account 1: balance 0the interest added the savings Account 3 :balance 0 interest 12Warning, low balance checking Account: 4:balance 0 :overdraft limit 200"
describe("endOfMonth", function(){
    it(" gives status of accounts at the end of the month",function(){
        let myBankarray=myBank.getAccounts();
for (let i=0;i<myBankarray.length;i++){
    let acc=myBank.getAccount(myBankarray[i].getNumber())
    acc.deposit(10000);
    console.log(acc);
}
        assert.equal(myBank.endOfMonth(),returnString)
    })
});
