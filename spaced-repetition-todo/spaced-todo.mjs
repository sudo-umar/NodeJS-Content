#!/usr/bin/env node

import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

const {argv} = yargs(process.argv) 
const res = await fetch('https://reddit.com/.json')
let data = await res.json()

const children = data.data.children 
const random_post = children[Math.floor(Math.random()*children.length)]
const link = `https://reddit.com${random_post.data.permalink}`
if(argv.print){
   console.log(`
   data: ${random_post}
   title: ${random_post.data.title}
   link: ${link}
   `) 
}else{
    open(link)
}
