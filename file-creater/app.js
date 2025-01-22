import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question('Enter the file name : ', handleFileName);
};

const handleFileName = (fileName) => {
  rl.question('Enter the content for your file: ', (content) => {
    handleContent(fileName, content);
  });
};

const handleContent = (fileName, content) => {
  fs.writeFile(`${fileName}.txt`, content, (err) => {
    if (err) {
      console.error('Error while writing the file:', err.message);
    } else {
      console.log(`${fileName}.txt created successfully!`);
    }
    rl.close();
  });
};

fileCreation();
