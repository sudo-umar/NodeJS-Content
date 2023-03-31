#!/usr/bin/env node

import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'
import fs from 'fs'
import chalk from 'chalk'
import { info } from 'console'
import { program } from 'commander'

// const {argv} = yargs(process.argv) 
// const res = await fetch('https://reddit.com/.json')
// let data = await res.json()

// const children = data.data.children 
// const random_post = children[Math.floor(Math.random()*children.length)]
// const link = `https://reddit.com${random_post.data.permalink}`
// if(argv.print){
//    console.log(`
//    data: ${random_post}
//    title: ${random_post.data.title}
//    link: ${link}
//    `) 
// }else{
//     open(link)
// }
const file_name = process.cwd()+"/todo.txt" 
const file_exists = fs.existsSync(file_name)
if( file_exists === false){
    fs.writeFileSync(file_name,"")
}
//const sleep = (ms = 2000)=> new Promise((r)=> setTimeout(r,ms))
const infoFunction = async()=>{
    const text = `
    ${chalk.yellow('Commands :-')} 
    ${chalk.bgGreen('todo')} add task1     # It will add task1 in todo list
    ${chalk.bgGreen('todo')} list          # It will show all tasks
    ${chalk.bgGreen('todo')} done NUMBER   # Complete a todo
    ${chalk.bgGreen('todo')} spaced NUMBER # That task will be remined in a spaced repetion manner 
    `
    console.log(text)
    //await sleep()
}
program
    .name('todo in spaced repetition manner')
    .description("CLI for todo tasks")
    .version('0.0.1')
program
    .command('info')
    .description('Print all available commands')
    .action(infoFunction())
program.parse()


const addTask = async()=>{

}
//const num = 10
//const warning = chalk.red()
//infoFunction()

console.log(`

RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
