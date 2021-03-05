// const prompt = require('prompt-sync')({sigint: true});
// const name = prompt('Enter your character name');
// console.log(`Hey there ${name}, please choose your class`);

import { Human, Elf, Hobbit } from "./characters.js";
import promptSync from "prompt-sync";
import { engine } from "./altEngine.js";

const prompt = promptSync({ sigint: true });
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let exampleHuman = new Human("exampleHuman");
let exampleElf = new Elf("exampleElf");
let exampleHobbit = new Hobbit("exampleHobbit");

console.log(`
██████╗░██████╗░░█████╗░████████╗██╗░░██╗███████╗██████╗░
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║░░██║██╔════╝██╔══██╗
██████╦╝██████╔╝██║░░██║░░░██║░░░███████║█████╗░░██████╔╝
██╔══██╗██╔══██╗██║░░██║░░░██║░░░██╔══██║██╔══╝░░██╔══██╗
██████╦╝██║░░██║╚█████╔╝░░░██║░░░██║░░██║███████╗██║░░██║
╚═════╝░╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝

██╗░░░░░░█████╗░███╗░░██╗░██████╗░███████╗░█████╗░░█████╗░████████╗
██║░░░░░██╔══██╗████╗░██║██╔════╝░██╔════╝██╔══██╗██╔══██╗╚══██╔══╝
██║░░░░░██║░░██║██╔██╗██║██║░░██╗░█████╗░░██║░░██║██║░░██║░░░██║░░░
██║░░░░░██║░░██║██║╚████║██║░░╚██╗██╔══╝░░██║░░██║██║░░██║░░░██║░░░
███████╗╚█████╔╝██║░╚███║╚██████╔╝██║░░░░░╚█████╔╝╚█████╔╝░░░██║░░░
╚══════╝░╚════╝░╚═╝░░╚══╝░╚═════╝░╚═╝░░░░░░╚════╝░░╚════╝░░░░╚═╝░░░


▄▀█ █▄░█ █▀▄   ▀█▀ █░█ █▀▀   █░░ █▀█ █▀ ▀█▀   █░░ █▀█ ▄▀█ █▀▀ █▀▀ █▀█ ▀
█▀█ █░▀█ █▄▀   ░█░ █▀█ ██▄   █▄▄ █▄█ ▄█ ░█░   █▄▄ █▄█ █▀█ █▀░ ██▄ █▀▄ ▄
             𝕬 𝖋𝖆𝖓𝖙𝖆𝖘𝖞 𝖊𝖕𝖎𝖈`);

await sleep(5000);
console.log(`
    Human:
            health: ${exampleHuman.health}
            strength: ${exampleHuman.strength}
            range: ${exampleHuman.range}
            luck: ${exampleHuman.luck}
            magic: ${exampleHuman.magic}


    Elf:
            health: ${exampleElf.health}
            strength: ${exampleElf.strength}
            range: ${exampleElf.range}
            luck: ${exampleElf.luck}
            magic: ${exampleElf.magic}



    Hobbit:
            health: ${exampleHobbit.health}
            strength: ${exampleHobbit.strength}
            range: ${exampleHobbit.range}
            luck: ${exampleHobbit.luck}
            magic: ${exampleHobbit.magic}
`);

console.log(`
    Pick a Character:
        1.Human
        2.Elf
        3.Hobbit
`);

function createCharacter() {
  try {
    let selection = prompt("Pick a Character: ");
    selection = Number(selection);
    let name = prompt("Name your Character: ");

    if (selection == 1) {
      return new Human(name);
    } else if (selection == 2) {
      return new Elf(name);
    } else if (selection == 3) {
      return new Hobbit(name);
    } else {
      console.log("Bad Input \n Try again \n");
      return createCharacter();
    }
  } catch (error) {
    console.log("Bad Input \n Try again \n");
  }
  return createCharacter();
}

const Player = createCharacter();

console.log(`Hey there ${Player.name}`);
// console.log(Player);

engine("mainEvent1", Player);
