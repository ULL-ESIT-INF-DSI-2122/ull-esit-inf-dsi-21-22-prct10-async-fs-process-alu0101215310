import * as fs from 'fs';

export function suma() {
  let result = 0;
  if (fs.existsSync(`src/ejercicioPe/txt/${process.argv[2]}`)) {
    const aux = fs.readFileSync(`src/ejercicioPe/txt/${process.argv[2]}`);
    let chain = parseInt(aux.toString());
    while (chain > 0) {
      result += chain % 10;
      chain = Math.trunc(chain/10);
    }
  }
  return result;
}

console.log(suma());
