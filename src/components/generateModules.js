const fs = require('fs');
const path = require('path');

const folderPath = '../icons'; // Replace with your folder path
fs.writeFileSync('./iconPaths.js','')
const moduleFilePath = './iconPaths.js';


fs.readdirSync(folderPath).forEach((file) => {
  const filePath = path.join(folderPath, file);
//   const moduleName = path.parse(file).name;
  const module = path.parse(file).name;

  fs.appendFileSync(moduleFilePath,`import ${module.split(' ').join('')}BR from '${folderPath}/${module}.png'\n`)
  fs.appendFileSync(moduleFilePath,`export const ${module.split(' ').join('')}WK = ${module.split(' ').join('')}BR\n`)
//   const moduleContent = fs.readFileSync(filePath, 'utf8');
//   const moduleCode = `export default ${moduleContent}`; 



//   const moduleFilePath = path.join(folderPath, `${moduleName}.js`);
//   fs.writeFileSync(moduleFilePath, moduleCode);

  console.log(`Created module: ${moduleFilePath}`);
});
