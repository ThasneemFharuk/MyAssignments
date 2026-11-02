/*
Parent file
Create class Browser
Create 2 methods browserType(),browserVersion()


1st Child file
Create class Chrome 
Create 1 method launchBrowser
Create object for Chrome


2nd Child file
Create class Edge
Create 1 method launchBrowser
Create object for Edge*/
class Browser {
    browserType(){
        console.log("Browser Type");
        
    }
    browserVersion(){
        console.log("Browser Version");
    }
}

class Chrome extends Browser{
    launchBrowser(){
        console.log("Launched Browser is Chrome");
        
    }
}

class Edge extends Browser{
    launchBrowser(){
        console.log("Launched Browser is Edge");
        
    }
}

const chromeObj = new Chrome()
chromeObj.launchBrowser()
chromeObj.browserType()
chromeObj.browserVersion()


const edjObj = new Edge()
edjObj.launchBrowser()
edjObj.browserType()
edjObj.browserVersion()
