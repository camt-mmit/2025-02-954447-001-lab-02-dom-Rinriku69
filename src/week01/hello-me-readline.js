import readline from 'node:readline';
import {stdin,stdout} from 'node:process';

const rl = readline.createInterface(stdin, stdout);
rl.question('Input your name: ', 
(name) => {
rl.write(`Hello ${name}\n`);
rl.close();

});