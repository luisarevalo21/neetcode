//create this type but didn't want to hardcode the types
//so changed it to T instead to infer all the types inside of the array of objects
// then i can allow K to extend all the types of T
type Users = {
  id: number;
  name: string;
  age: number;
};
function pluck<T, K extends keyof T>(users: T[], filter: K): T[K][] {
  const res: T[K][] = [];
  for (let i = 0; i < users.length; i++) {
    const userObject = users[i];
    res.push(userObject[filter]);
  }

  return res;
}

const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
];

const ids = pluck(users, "name");
