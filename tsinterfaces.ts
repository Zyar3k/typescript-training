interface IUser {
  name: string;
  age: number;
  email: string;
}

interface IEmployee extends IUser {
  department: string;
  employeeId: number;
}

const employee: IEmployee = {
  name: "John",
  age: 30,
  email: "<EMAIL>",
  department: "Engineering",
  employeeId: 12345678,
};

const client: IUser = {
  name: "John",
  age: 30,
  email: "<EMAIL>",
};
