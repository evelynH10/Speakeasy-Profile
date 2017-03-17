var sabio = {
    utilities: {}
    , layout: {}
    , page: {
        handlers: {
        }
        , startUp: null
    }
    , services: {}
    , ui: {}
  
};
sabio.moduleOptions = {
        APPNAME: "SabioApp"
        , extraModuleDependencies: []
        , runners: []
        , page: sabio.page//we need this object here for later use
}


sabio.layout.startUp = function () {

    console.debug("sabio.layout.startUp");

    //this does a null check on sabio.page.startUp
    if (sabio.page.startUp) {
        console.debug("sabio.page.startUp");
        sabio.page.startUp();
    }
};
sabio.APPNAME = "SabioApp";//legacy



$(document).ready(sabio.layout.startUp);