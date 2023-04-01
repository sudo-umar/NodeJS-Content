import chalk from 'chalk'
import figlet from 'figlet'

export const infoFunction = async()=>{
    console.log(figlet.textSync('TODO!', {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
    const text = `
    ${chalk.yellow('Commands :-')} 
    ${chalk.bgGreen('todo')} --add task1     # It will add task1 in todo list
    ${chalk.bgGreen('todo')} --list          # It will show all tasks
    ${chalk.bgGreen('todo')} --done NUMBER   # Complete a todo
    ${chalk.bgGreen('todo')} --repeat NUMBER # That task will be remined in a spaced repetion manner 
    `
    console.log(text)
    //await sleep()
}