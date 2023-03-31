#!/usr/bin/env node

// import open from 'open'
// import fetch from 'node-fetch'
import fs from 'fs'
import chalk from 'chalk'
import { program } from 'commander'
import { infoFunction } from './info-module.mjs'

const file_name = process.cwd()+"/todo.txt" 
const file_exists = fs.existsSync(file_name)
if( file_exists === false){
    fs.writeFileSync(file_name,"")
}

program
    .version("0.0.1")
    .name("TODO Spaced Repetition")
    .description("CLI for todo tasks in spaced repetition manner")
    .option('-l, --ls [value]', 'list all tasks')
    .option('-a, --add [value]', 'add a task')
    .option('-d, --done [value]', 'mark a task as done')
    // .option('h, --help', 'print all available commands')
    .parse(process.argv)

const options = program.opts()

if(Object.keys(options).length === 0){
    infoFunction()
}
if(options.ls){
    console.log(options)
}
