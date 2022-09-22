const fs = require('fs-extra')
let tree = {
    firstDirectory: {
        directoryPath:'./first-dir/',
        fileName:'file.txt'
    },
    secondDirectory: {
        directoryPath:'./second-dir/',
        fileName:'file.txt'
    },
    thirdDirectory: {
        directoryPath:'./third-dir/',
        fileName:'file.txt'
    }
}

fs.emptyDirSync(tree.firstDirectory.directoryPath) // 3. Создать папку;
fs.ensureFileSync(tree.firstDirectory.directoryPath.toString() + tree.firstDirectory.fileName.toString()) // 4. Создать текстовый файл в созданной папке;
fs.emptyDirSync(tree.secondDirectory.directoryPath) // 5. создать вторую папку;

fs.copySync(tree.firstDirectory.directoryPath, tree.secondDirectory.directoryPath) // 6. переместить файл из первой папки во вторую;
fs.removeSync(tree.firstDirectory.directoryPath.toString() + tree.firstDirectory.fileName.toString())

fs.emptyDirSync(tree.thirdDirectory.directoryPath) // 7. создать третью папку;

fs.copySync(tree.secondDirectory.directoryPath, tree.thirdDirectory.directoryPath) // 8. скопировать файл из второй в третью папку;

fs.removeSync(tree.firstDirectory.directoryPath)   
fs.removeSync(tree.secondDirectory.directoryPath)   // 10. удалить все папки и файлы
fs.removeSync(tree.thirdDirectory.directoryPath)