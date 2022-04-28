/* eslint-disable no-unused-vars */
import * as fs from 'fs';
import {spawn} from 'child_process';

export class Watching {
  private path : string;
  constructor(file : string) {
    this.path = `src/ejercicioPe/txt/${file}`;
    fs.watch(this.path, function(event, file) {
      console.log(file, 'se ha modificado');
      console.log('El tipo del cambio fue: ', event);
      const add = spawn('node',
          [`dist/ejercicioPe/suma.js`, `src/ejercicioPe/txt/${file}`]);
      console.log(add);
    });
  }
}

const watcher = new Watching(process.argv[2]);
