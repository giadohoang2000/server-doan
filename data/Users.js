import bcript from "bcryptjs";

const Users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcript.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@gmail.com",
    password: bcript.hashSync("123456", 10),
  },
];

export default Users;
