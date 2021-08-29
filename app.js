const userArray = [];

function createUser(name) {
  return {
    name,
    id: "",
    userName: "",
  };
}

function saveUser(user, array) {
  array.push(user);
}

function generateId(user) {
  let id = "";
  for (let i = 0; i < 5; i++) {
    id += getRandom(5);
  }
  if (!checkUniqueId(userArray, id)) user.id = id;
}

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

function checkUniqueId(array, value) {
  array.forEach((user) => user.id.indexOf(value) === -1);
}

function createUserName(user) {
  const userName = `user${user.id}`;
  user.userName = userName;
}

function createNewUser(name) {
  const newUser = createUser(name);
  generateId(newUser);
  createUserName(newUser);
  saveUser(newUser, userArray);

  console.log(`${newUser.name} is saved!`);
}

createNewUser("anna");
createNewUser("vlad");
createNewUser("daniel");

console.log(userArray);
