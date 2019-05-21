// S -> + S S | - S S | a
var str = "9+3-9+3+7";
var index = 0;
var lookHead = str[index];

function S() {
    switch(lookHead) {
        case "+":
            match("+");S();S();
            break;
        case "-":
            match("-");S();S();
            break;
        case "a":
            match("a");
            break;
        default:
            throw new Error("not match");
    }
}

function next() {
    index++;
    if(index >= str.length) {
        console.log("success");
    } else {
        lookHead = str[index];
    }
}

function match(token) {
    if(str[index] == token) {
        next();
    } else {
        throw new Error("not match");
    }
}

S();