let sayHello = () => {
    console.log("Hello world!");
}
// sayHello = "Hi, world!";

let funcReturnString = (): string => {
    return "Hello world!";
}

let multiplyByTwo = (num:number) => {
    return num * 2;
}
let multiplyByTwo2 = (num:number):number => {
    return num * 2;
}
let multiply = (num:number):void => {
    // return num * 2;
    // do something but don't return anything
}

let sum = (a:number, b:number, anotherNo?:number):number => {
    return a + b;
}

sum(2,4)