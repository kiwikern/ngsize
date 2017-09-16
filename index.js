#!/usr/bin/env node
const figlet = require('figlet');
const chalk = require('chalk');
const readline = require('readline');

console.log(chalk.cyan(figlet.textSync('ngsize')));
console.log(chalk.gray('Enter ngsize --help for more information.\n'));

const args = process.argv.slice(2)
if (args.length > 0) {
    if (args.includes('-h') || args.includes('--help')) {
        console.warn(`${chalk.red('Warn:')} You have to enter the angular build message:
        Either pipe it in:
        > ng build | ngsize
        or pass it manually:
        > ngsize "chunk {${chalk.yellow('main')}} ${chalk.green('main.bundle.js')} (main) 353 kB {${chalk.yellow('vendor')}}..."`);
    } else {
        processBundleOutput(args.join(' '));
    }
    return;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
let input = '';
rl.on('line', line => input = input + line + '\n');
rl.on('close', () => processBundleOutput(input));


function processBundleOutput(buildMessage) {
    console.log(buildMessage);
    console.log(`Your bundle has a total size of ${chalk.cyan(getSize(buildMessage) + ' MB')}.`);
}

function getSize(input) {
    const regexBuilder = (unit) => new RegExp(`[\\d\\.]+(?= ${unit})`, 'g');
    const units = [{ unit: 'kB', factor: 1024 }, { unit: 'MB', factor: 1 }, { unit: 'bytes', factor: 1048576 }];
    let size = 0;
    for (let unit of units) {
        const regex = regexBuilder(unit.unit);
        let matches;
        while (matches = regex.exec(input)) {
            size += parseInt(matches[0]) / unit.factor;
        }
    }
    const roundedSize = Math.round(size * 100) / 100;
    return roundedSize;
}
