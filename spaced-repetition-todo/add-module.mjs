import chalk from 'chalk';
import fs from 'fs';
import { open } from 'node:fs/promises'
import { type } from 'os';
export const addFunction = (task, file_path) =>{
//    console.log(`THis is from add functions: ${task}, ${file_path}`)

    const data = task + ',' + new Date().getDate() + '-' + new Date().getMonth() + '-'+new Date().getFullYear() + '\r\n';
    fs.appendFileSync(file_path, data)
    
}

export const readTasks = async(file_path)=>{
    const file = await open(file_path)
    for await (const line of file.readLines()){
        const row = line.toString().split(/[,-]/)
        console.log("Task: " + chalk.bgRedBright(row[0]) + " Date: " + chalk.green(row[1]) + "-" + chalk.green(row[2]) + "-" + chalk.blueBright(row[3]))
    }

}

export const deleteTasks = async(task, file_path) => {

    const fileContents = fs.readFileSync(file_path, 'utf8')
    const lines = fileContents.split('\n')
    console.log("lines")
    console.log(lines)
    const updatedLines = lines.filter((word)=> !word.startsWith(task)) // removing line that starts with the task name
    // Join the updated lines.
    console.log(updatedLines)
    const updatedContent = updatedLines.join('\n')
    
    // Writing the updated content to the file in sync mode.
    fs.writeFileSync(file_path, updatedContent, 'utf-8')
    
//    fs.writeFile(file_path,'', function(err){
//        if(err){
//            console.log("Try again deleting the task: ", err)
//        }else{
//            console.log("Task has been deleted!")
//        }
//    })
}
