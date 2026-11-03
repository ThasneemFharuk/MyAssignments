/* Create an interface Payment with payment method
pay(amount: number): void
create 3 classes with UPI,CreditCard and NetBanking
each class should implement payment method and provide its own implementation */

interface Payment{
    pay(amount: number): void
}

class UPI implements Payment{
    pay(amount: number): void{
        console.log("UPI Payment", amount);
        
    }
}

class CreditCard implements Payment{
    pay(amount: number): void{
        console.log("CreditCard Payment", amount);
        
    }
}

class NetBanking implements Payment{
    pay(amount: number): void{
        console.log("NetBanking Payment", amount);
        
    }
}

const up = new UPI()
up.pay(500)

const cc = new CreditCard()
cc.pay(1000)

const nb = new NetBanking()
nb.pay(5000)
