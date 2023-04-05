#!/usr/bin/env node

// import open from 'open'
// import fetch from 'node-fetch'
import fs from "fs";
import chalk from "chalk";
import { program } from "commander";
import { infoFunction } from "./info-module.mjs";
import { addFunction, deleteTasks, readTasks } from "./add-module.mjs"

//const file_name = process.cwd() + "/todo.txt";
const file_name = new URL("todo.txt", import.meta.url)
const file_exists = fs.existsSync(file_name);
if (file_exists === false) {
  fs.writeFileSync(file_name, "");
}

program
  .version("0.0.1")
  .name("TODO Spaced Repetition")
  .description("CLI for todo tasks in spaced repetition manner")

  .option("-l, --ls [value]", "list all tasks")
  .option("-a, --add [value]", "add a task")
  .option("-d, --done [value]", "mark a task as done")
  .option("-r, --repeat [value]", "mark a task as spaced|repeat")
  .option("-i, --info [value]", "how to use commands")
  // .option('h, --help', 'print all available commands')
  .parse(process.argv);

const options = program.opts();
//console.log(Object.keys(options).length)
if (Object.keys(options).length === 0 || options.info) {
  infoFunction();
}
if (options.add){
  addFunction(options.add, file_name)
}
if (options.ls){
  readTasks(file_name)
}
if(options.done){
  console.log(options.done)
  deleteTasks(options.done, file_name)
}
