let func = (user: { name: string; age: number; phone?: string }) => {
  console.log(user.name);
};

// TYPE ALIASES

type UserType = {
  name: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.name);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(`${num} times ${str}`);
};

type UserType2 = {
  name: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  name: "John",
  age: 30,
  theme: "dark",
};
