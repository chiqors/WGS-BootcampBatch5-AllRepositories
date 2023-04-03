const fs = require('fs')

const dirPath = './data'
const dataPath = './data/contacts.json'

function checkData() {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
        if (!fs.existsSync(dataPath)) {
            fs.writeFileSync(dataPath, '[]', 'utf-8')
        }
    }
}

function loadData() {
    checkData()
    const loadFile = fs.readFileSync(dataPath, 'utf-8')
    const data = JSON.parse(loadFile)
    return data
}

function saveData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data))
    console.log('Data berhasil disimpan')
}

module.exports = {
    loadData,
    saveData
}