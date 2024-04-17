#! /usr/bin/env node
import inquirer from "inquirer";

const words = await inquirer.prompt([{
    name:"sentence",
    type:"input",
    message:"Please Enter your Sentence or Paragraph " 
}])

let line = words.sentence;
let wordsCount = line.split(" ") ;
let character = line.replace(/\s/g, "").length;
console.log(`You Entered text is :\n\n${line}.\n\nThe text contain ${wordsCount.length} words.\n\nThe text has ${character} characters`);






