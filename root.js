let exit = false;
let a;
let b;
let c;
while(!exit){
    try {
        exit = true;

        a = prompt("a=", "");
        if(String(parseFloat(a)) != a){
            throw new Error("Not a number");
        }
        
        b = prompt("b=", "");
        if(String(parseFloat(b)) != b){
            throw new Error("Not a number");
        }
        
        c = prompt("c=", "");
        if(String(parseFloat(c)) != c){
            throw new Error("Not a number");
        }

        a = parseFloat(a); console.log("a=" + a);
        b = parseFloat(b); console.log("b=" + b);
        c = parseFloat(c); console.log("c=" + c);
    } catch (err) {
        exit = false;
        alert(err);
        alert("Try again");
    }
}

if(a == 0 && b == 0) {
    if(c == 0) {
        alert("The equation has infinitely many solutions");
    } else {
        alert("Wrong equation");
    }

} else {
    let d = b*b - 4*a*c;

    if(a == 0){
        alert(-c / b);
    } else {
        if(d > 0){
            Math.sqrt(d);
            let x1 = (-b - d) / (2 * a);
            let x2 = (-b + d) / (2 * a);
            alert(x1); console.log(x1);
            alert(x2); console.log(x2);
        } else if(d == 0) {
            let x1 = -b / (2 * a);
            alert(x1); console.log(x1);
        } else if(d < 0){
            alert("no real roots");
        }
    }
}