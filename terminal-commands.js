//Questions
//1. Module inports are by using filenames and a require method. 
//2. You can use export statement
 
//Online Research Questions
//1.  You can use module.exports or the exports object. 
//2. Modules is just a chunk of JavaScript code written in a file. ES6 primarily use import/export commands to pull in modules from files like when used in react. 



const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file}`;
        }, '');

        console.log(filesToString);
    });
};

module.exports.touch = () => {
    fs.writeFile('new_file.txt', '', (err) => {
        if(err) return err;
        console.log('Saved!');
    }); 
  };
  
  module.exports.mkdir = () => {
    fs.mkdir('/', {recursive: true}, (err) => {
        if(err) return err;
    });
  };