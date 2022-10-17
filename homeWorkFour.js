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

// Создать папку, cоздать текстовый файл в созданной папке, создать вторую папку
fs.emptyDirSync(tree.firstDirectory.directoryPath)
fs.ensureFileSync(tree.firstDirectory.directoryPath.toString() + tree.firstDirectory.fileName.toString()) 
fs.emptyDirSync(tree.secondDirectory.directoryPath) 

//  Переместить файл из первой папки во вторую
fs.copySync(tree.firstDirectory.directoryPath, tree.secondDirectory.directoryPath)
fs.removeSync(tree.firstDirectory.directoryPath.toString() + tree.firstDirectory.fileName.toString())

// Создать третью папку, скопировать файл из второй в третью папку;
fs.emptyDirSync(tree.thirdDirectory.directoryPath) 
fs.copySync(tree.secondDirectory.directoryPath, tree.thirdDirectory.directoryPath)

//удалить все папки и файлы
fs.removeSync(tree.firstDirectory.directoryPath)   
fs.removeSync(tree.secondDirectory.directoryPath)
fs.removeSync(tree.thirdDirectory.directoryPath)