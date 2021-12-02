global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/KHVAnCItEvVAInC18iGEZH', 'https://chat.whatsapp.com/FrluVyY5kBRIhY6yKfH4DI']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '6285240646336': { // put your number here
    name: 'Wahyu Anshar/Creator Wahyu Bot',
    isDev: false, // if true this number will send if bot have bug and developer mode true
    isReport: false, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6285240646336': { // put your number here
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false // if true this number will send if user use command /owner or /creator
  },
  '6285240646336': { // put your number here
    name: 'Dave',
    isDev: false, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false // if true this number will send if user use command /owner or /creator
  },
  '6285240646336': {
    name: 'Wahyu Anshar',
    isReport: true, // if true this number will send if user use command /report or /join
  },
  '6285240646336': {
    isReport: true
  },
  '13479805233': {} // ignore if you don't want anything, like name dll
}
global.mods = ['13479805233'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  hardianto: 'http://hardianto-chan.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '0dc275a689910d85',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'http://hardianto-chan.herokuapp.com': 'hardianto'
}

// Sticker WM
global.packname = 'wa.me/6285240646336'
global.author = 'Wahyu Anshar'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
