import readline from 'node:readline';
import {stdin,stdout} from 'node:process';

const rl = readline.createInterface(stdin, stdout);
rl.question('Input size: ', 
(Inputsize) => {
    const size = parseInt(Inputsize);
    for(let j = 1; j <= size; j++){
        if(j == 1 || j == size){
            for(let i = 1; i<= size; i++){
                rl.write(`*`);
            }
        }else{
                rl.write(`*`);
                for(let s = 1; s<=size-2; s++){
                    rl.write(` `);
                }
                rl.write(`*`);
        }
    rl.write('\n');
   }
   rl.close();
});