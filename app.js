import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const todo = [];
const showMenu = () => {
  console.log('1. Add a task');
  console.log('2. View a task');
  console.log('3. Exit');
  rl.question('Choose an option : ', handleInput);
};

const handleInput = (option) => {
  if (option == 1) {
    rl.question('Enter the task : ', (task) => {
      todo.push(task);
      console.log('Task added...', task);
      showMenu();
    });
  } else if (option == 2) {
    console.log('\n Your todo list');
    todo.forEach((task, index) => {
      console.log(`${index + 1}.${task}`);
    });
    showMenu();
  } else if (option == 3) {
    console.log('\n Good Bye!!!');
    rl.close();
  } else {
    console.log('Invalid Option, Please try again');
    showMenu();
  }
};
showMenu();
