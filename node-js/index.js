//Assignment - 1
//Create your own cli that takes a file path as and input and counts the number of lines/words in that given file


const fs = require('fs');

const {Command} = require('commander');
const program = new Command;

program
    .name('print-words-of-file')
    .description('count-no-of-words-in-file')
    .version('13.1.0');

program.command('count')
    .description('counts the number of words in a given file')
    .argument('<filepath>', 'Path to the given file')
    .action((filepath) => {
        fs.readFile(filepath, 'utf-8', (err,data) => {
            if(err){
                console.log(err);
            } else {
                const count = data.split('\n').length;
                if(count <= 1){
                    console.log(`There is ${count} line in ${filepath}`);
                } else {
                    console.log(`There are ${count} lines in ${filepath}`);
                }
            }
        });
    });

program.parse();