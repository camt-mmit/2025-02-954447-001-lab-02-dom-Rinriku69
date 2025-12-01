import readline from "node:readline";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface(stdin, stdout);
rl.question("Input Score: ", (Inputscore) => {
  const score = parseFloat(Inputscore);
  if (score >= 80) {
    rl.write(`Your grade is A.\n`);
    rl.close();
  } else if (score >= 70) {
    rl.write("Your grade is B.\n");
    rl.close();
  } else if (score >= 60) {
    rl.write("Your grade is C.\n");
    rl.close();
  } else if (score >= 50) {
    rl.write("Your grade is D.\n");
    rl.close();
  } else {
    rl.write("Your grade is F.\n");
    rl.close();
  }
});
