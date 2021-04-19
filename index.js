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

// const fs = require("fs")
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
// fs.renameSync('./content/ini.txt', './content/foto/catetan.txt') // untuk ganti nama dan pindah file dan untuk selebihnya bisa di lihat di fs node.js

// console.log('berhasil')



// sesi siang 1

const http = require("http");
const Mymodules = require("./modules");
const { addString, data, users } = Mymodules;
const fs = require("fs");
// ! function return promise
const tampilkan = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, datas) => {
      if (err) {
        reject("ini error");
      } else {
        resolve(datas);
      }
    });
  });
};

const server = http.createServer(async (req, res) => {
    //   console.log(req.url);
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/html" });
      // with promise async await
      try {
        const html = await tampilkan("./content/index.html");
        console.log(typeof html);
        console.log(html);
        res.end(html.replace("{{name}}", data.nama));
      } catch (error) {
        console.log(error);
      }
      // promise original
    // tampilkan("./content/index.html")
    //   .then((res1) => {
    //     console.log(typeof res1);
    //     console.log(res1);
    //     res.end(res1.replace("{{name}}", data.nama));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //   !without promis
    //  fs.readFile("./content/index.html", "utf-8", (err, datas) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    //   console.log(typeof datas);

    //   res.end(datas.replace("{{name}}", data.nama));
    // });
    } else {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(users));
      }
    });
    
    server.listen(5000, () => console.log("server on port 5000"));