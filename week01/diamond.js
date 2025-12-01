import readline from 'node:readline';
import { stdin, stdout} from 'node:process';

const rl = readline.createInterface(stdin, stdout);

function printHollowDiamond(size) {
    if (size === 0) return;

    const boxSize = 2 * size - 1;

    const center = size; 

    for (let i = 1; i <= boxSize; i++) {
        let line = '';

        for (let j = 1; j <= boxSize; j++) {

            const distance = Math.abs(i - center) + Math.abs(j - center);

            if (distance === (center - 1)) {
                line += '*';
            } else if (distance < (center - 1)) {
                line += ' ';
            } else {
                line += ' '; 
            }
        }
        rl.write(line.trimEnd() + '\n');
    }
}


rl.question('Input size: ', (input) => {
    const size = parseInt(input);
        printHollowDiamond(size);
    rl.close();
});