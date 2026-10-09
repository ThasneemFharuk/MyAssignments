function launchBrowser(){
    let browserName = "chrome"
    if (browserName === "chrome") {
        console.log("chrome");
        
    } else {
        console.log("otherwise");
        
    }

}

function runTests(){
    let testType = "regression"
    switch (testType) {

        case "sanity":
            console.log("sanity testing");
            break;

        case "regression":
            console.log("regression testing");
            break;
    
        default:
            console.log("smoke");
            break;
    }

}

launchBrowser();
runTests();