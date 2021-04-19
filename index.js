// const http = require('http')
// const Mymodules =require ('./modules')
// const {addString,data, users}=Mymodules
// const server = http.createServer((req,res) => {
//     // res.writeHead(200,{"content-type":"text/html"})
//     // res.end(`<h1>${addString("dedi")}</h1>`)
//     // console.log(req.url)
//     if(req.url === "/") {
//         res.writeHead(200, {"Content-type": "text/html"})
//         res.end('<h1>halo broo</h1>')
//     }else{
//         res.writeHead(200,{ "content-Type": "application/json"})
//         res.end(JSON.stringify(users))
//     }
    
// })

// server.listen(5000, () => console.log("server on port 5000"))

// const {nama, isStudent} = require('./app')

// const nama= require('./app')[0]

// const {kalimat} = require('./app')

// const kata2= require('./students')
// console.log(kalimat())
// console.log(isStudent)

const fs = require("fs")
// const { mkdirSync } = require("node:fs")

// const file = fs.readFileSync('./content/nama.txt', 'utf-8')
// console.log(file)
// const stream = fs.createReadStream("./content/nama.txt")

// stream.on('data', (result) => {
//     console.log(result)
// })
// stream.on ("error", (err)=> console.log(err))

// const stream = fs.writeFileSync('./content/ini.txt', "ini aja coy") //cara buat file
// fs.mkdirSync('./content/foto') // cara buat folder

// console.log('success')
// fs.unlinkSync('./content/iniaja.txt') // untuk hapus file
// console.log(fs.existsSync("./content/ini.txt")) // untuk ngecek ada atau ngga pada sync
fs.renameSync('./content/ini.txt', './content/foto/catetan.txt') // untuk ganti nama dan pindah file
console.log('berhasil')