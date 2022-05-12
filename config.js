let fs = require('fs')

global.owner = ['919389379221'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  melcanz: 'httpa://melcanz.com',
  lol: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apivproject',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': 'pkebgk8248jskrkfm',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.stiker_wait = '💜please wait🐥'
global.packname = '👋🐥Darling its me zero two'
global.author = '𝙆𝙖𝙠𝙖𝙨𝙝𝙞 𝙠𝙪𝙣💜✨'
global.email = 'wakabahiiro5@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = '© 𝙆𝙖𝙠𝙖𝙨𝙝𝙞 𝙗𝙤𝙩𝙯. 𝙞𝙣𝙘'
global.media = 'https://telegra.ph/file/5d45a3d1e12726d98c5e4.jpg'

global.wait = '𝙬𝙖𝙞𝙩 𝙙𝙖𝙧𝙡𝙞𝙣𝙜 𝙡𝙬𝙩 𝙢𝙚 𝙙𝙤 𝙞𝙩🐥🌟'
global.eror = '_*Server Error*_'

global.dtu = '𝙠𝙖𝙠𝙖𝙨𝙝𝙞'
global.urlnya = "https://www.instagram.com/kakashi_botz_inc"

//============= callButtons =============//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '919389379221'

//============= Games ================//
global.benar = '𝙍𝙞𝙜𝙝𝙩'
global.salah = '𝙬𝙧𝙤𝙣𝙜'
global.dikit = "𝙚𝙧𝙧𝙤𝙧 :')"


global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
