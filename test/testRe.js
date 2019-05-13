const aa1 = require("./test");
const aa2 = require("./test");
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
var event2 = new EventEmitter(); 
// const aa1 = require("./test");

event.on("eee", function(data){
    console.log(data);
})

function aaa(name){
    switch(name){
        case "wanghuaiyao" :
            console.log("wanghuaiyao");
            BroadcastChannel;
        default:
            console.log("weichuli");
    }
}

// event.emit("eee","wanghuaiyao");

// console.log(event === event2); 
aaa("wanghuaiyao");