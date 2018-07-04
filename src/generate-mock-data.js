import jsf from 'json-schema-faker';
import {schema} from './mock-data-schema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', function() {
    return require('faker');
  });

const json = JSON.stringify(jsf(schema));

fs.writeFile("./build/api/db.json", json, { flag: 'w' }, function(err){
    if(err) {
        return console.log(chalk.red(err)); 
    }
    else {
        console.log(chalk.green("Mock data generated"))
    }
})