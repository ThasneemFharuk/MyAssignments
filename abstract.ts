/* create abstract class 
fill() -> implement
clear()->implement
locator()-> unimplement
frame() -> unimplement


create another concrete class 
-> implement methods
-> create object and call the methods */

abstract class activity {
    fill() {
        console.log("Fill details");

    }
    clear() {
        console.log("clear the details");

    }
    abstract locator(): void
    abstract frame(): void
}

class demo extends activity{
    locator(): void{
        console.log("Locator Method");
        
    }
    frame(): void {
        console.log("Frame Method");
        
    }
}

const dm = new demo();
dm.fill()
dm.clear()
dm.locator()
dm.frame()