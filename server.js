const express = require("express");
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hey am online :)'))

app.listen(port, () =>
console.log('Your app is listening athttps://localhost:${port}'))
console.log('beep beep')
//dbd.js discord
const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "TOKEN",
 prefix: "!" 
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code
})
} 
}
