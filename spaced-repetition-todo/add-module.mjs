import chalk from 'chalk';
import fs from 'fs';
import { open } from 'node:fs/promises'
export const addFunction = (task, file_path) =>{
//    console.log(`THis is from add functions: ${task}, ${file_path}`)

    const data = task + ',' + new Date().getDate() + '-' + new Date().getMonth() + '\r\n';
    fs.appendFileSync(file_path, data)
    
}

export const readTasks = async(task, file_path)=>{
//    const data = fs.readFile(file_path, 'utf8', function(err, data){
//        if(err) throw err;
////        console.log(data)
//    })
    const file = await open(file_path)
    for await (const line of file.readLines()){
        await new Promise(resolve => setTimeout(resolve, 5000))
        console.log(`Line by line: ${line}`)
    }

}

export const deleteTasks = async(task, file_path) => {
    fs.writeFile(file_path,'', function(err){
        if(err){
            console.log("Try again deleting the task: ", err)
        }else{
            console.log("Task has been deleted!")
        }
    })
}
