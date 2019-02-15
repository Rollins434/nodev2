console.log("starting app.js");

const fs =  require('fs');

const _ = require('lodash');

const yargs = require('yargs'); 
const notes = require('./notes.js');

//to make process of parsing much easier we are going to use a third party module called yargs.
 //npm module yargs


//switch type thing below here

const argv = yargs.argv;

var command = process.argv[2];
console.log('command:', command);
console.log('yargs',argv);
 
if(command === 'add') {
	console.log('adding new note');
} 
else if(command === 'list'){
	console.log('list added'); 
} else if(command === 'read'){
	   console.log('reading notes');
} else if(command === 'remove'){
	console.log('removing note');
}



else{
	console.log('command not recognized');
}











































 
// const notes = require('./notes.js')
// var user = os.userInfo();

// var res = notes.addNote();
// console.log(res);


// console.log('Result',notes.add(2,4));  
// console.log('sub',notes.subtract(4,3));
// console.log('sub',notes.subtract(4,5));










//console.log(user);

// fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.age}`, (err) =>{
// 	if(err) throw err;
// 	console.log('it works');
// });


/*
fs.appendFile('greetings.txt', `hello ${user.username}`, (err) => {
  if (err) throw err;
  console.log('');
});
*/