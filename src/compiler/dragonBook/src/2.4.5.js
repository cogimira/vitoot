var str = "9+4-9";
var index = 0;
var lookHead = str[index];

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

/** 
 *  expr > term rest
    rest > + term {print("+")} rest
    rest > - term {print("+")} rest
    rest > e
    term > 0 | 1 | 2 | 3 | ... | 9   
*/

var res = "";

function expr() {
    rest(); term();rest();
}

function term() {
    var numAry = [1+"",2+"",3+"",4+"",5+"",6+"",7+"",8+"",9+"",0+""];
    if(numAry.indexOf(lookHead) !== -1) {
        var lookHeadCopy = lookHead;
        match(lookHead);
        res += lookHeadCopy;
    }
}

function rest(){
    switch(lookHead){
        case "+":
            match("+");
            term();
            res += "+";
            rest();
            break;
        case "-":
            match("-");
            term();
            res += "-";
            rest();
            break;
        default:

    }
}

expr()
console.log(res);