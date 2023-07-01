import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285771724948', 'Celia', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285771714948'
global.packname = 'AYUCHAN - MD by'
global.author = '© CELIA'
global.namebot = '​AYUCHAN - MD'
global.wm = '© AYUCHAN By CELIA'
global.stickpack = 'AYUCHAB - MD by'
global.stickauth = '© CELIA'
// Link Sosmed
global.sig = 'https://urlis.net/94gtrj6n'
global.sgh = 'https://urlis.net/94gtrj6n'
global.sgc = 'https://chat.whatsapp.com/EC84f0UBHid61HO4AI2Dlx'
// Donasi
global.psaweria = 'https://urlis.net/94gtrj6n'
global.ptrakterr = 'https://urlis.net/94gtrj6n'
global.povo = '085-771-724-948'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'xCOpP5f36W'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "xCOpP5f36W",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})