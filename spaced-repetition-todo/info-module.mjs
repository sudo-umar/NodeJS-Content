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
    ${chalk.bgGreen('todo')} --add taskname    # It will add task1 in todo list
    ${chalk.bgGreen('todo')} --ls              # It will show all tasks
    ${chalk.bgGreen('todo')} --done taskname   # Complete a todo
    ${chalk.bgGreen('todo')} --repeat taskname # That task will be remined in a spaced repetion manner 
    ${chalk.bgGreen('todo')} --help            # Display help for command 
    `
    console.log(text)
    //await sleep()
}
