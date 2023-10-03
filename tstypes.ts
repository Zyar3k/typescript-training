let variable = 'hello';
// variable = 54
variable = "world";

let age = 18;
// age="eighteen"

let ageWithType: number = 22;
// ageWithType ="eighteen";
ageWithType = 18;

let testTypeString: string;
testTypeString = "hello";

let testTypeBool: boolean
testTypeBool = true;

let testTypeStringOrNumber: string | number;
testTypeStringOrNumber = "hello";
testTypeStringOrNumber = 54;

// testTypeStringOrNumber = true;

// ARRAYS

let names = ["John", "Mary", "Peter"];
// names.push(3)
names.push("Tina")

let numbers = [3,5,7];

// numbers.push(true);
numbers.push(11)

let testTypeStringArray: string[];
// testTypeStringArray = [1,2,3,4,5,]
testTypeStringArray = ["hello", "world"];

let testTypeNumberArray: number[];
// testTypeNumberArray = ["hello","world"];
testTypeNumberArray = [1,2,3,4,5,]

let testTypeStringOrNumberArray: (string | number)[];

testTypeStringOrNumberArray = [1,"two",3,4,5,];

// OBJECTS

let user={
    name: "John",
    age: 22,
    isAdmin: false
}

user.name = "Jane";
// user.age = "eighteen";
user.age = 18;
// user.isAdmin = "not admin";
user.isAdmin = true;

// user.phone = "123-456-7890";

let userObj: {
    name: string
    age: number
    isAdmin: boolean
}

userObj = {
    name: "John",
    age: 22,
    isAdmin: false,
    // phone: "123-456-7890"
}

let userObj2: {
    name: string
    age: number
    isAdmin: boolean
    phone?: string
}
userObj2 = {
    name: "Jane",
    age: 33,
    isAdmin: true,
    phone: "123-456-7890"
}

let testAny;

testAny = "hello";
testAny = 54;
testAny = true;
testAny = [1,2,3];
testAny = {
    name: "John",
    age: 22,
    isAdmin: false}