import { Human, Elf, Hobbit } from "./characters.js";
import promptSync from "prompt-sync";
import { engine } from "./engine.js";

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

console.log(`A shrewd monk of indeterminate age approaches you at a tavern.`);

await sleep(2000);

console.log(`Brother Longfoot has lost his favourite pair of loafers to an elf in a game of blackjack; 
he is looking for an adventurer to undertake the arduous task of retrieving his holy shoes.`);

await sleep(3000);

console.log(
  `Barefoot, he escorts you out of the tavern and gives you directions…`
);
await sleep(2000);

engine("mainEvent1", Player);
