const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')
const { domain, mess } = JSON.parse(fs.readFileSync(__dirname + '/app.json'))

async function infoGempa() { 
  let url = await axios({ 
    url: "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json"
  })
  let result;
  var t = { 
    tanggal: (result = url.data.Infogempa.gempa).Tanggal,
    jam: result.Jam,
    lintang: result.Lintang,
    bujur: result.Bujur,
    magnitude: result.Magnitude,
    kedalaman: result.Kedalaman,
    potensi: result.Potensi,
    wilayah: result.Wilayah,
    image: "https://data.bmkg.go.id/DataMKG/TEWS/" + result.Shakemap,
  };
  return { status: 200, author: `Fauzidev`, result: t }
}

async function tiktokdl(url) {
  if(!url) return { status: false, author: `Fauzidev`, result: mess.url }
  var res = await fetch(`${domain}/download/tiktok?url=${url}`)
  var result = await res.json()
  return { status: 200, author: `Fauzidev`, result: result.result }
}

async function ytmp4(url) {
 if(!url) return { status: false, author: `Fauzidev`, result: mess.url }
  var res = await fetch(`${domain}/download/ytmp4?url=${url}`)
  var result = await res.json()
  return { status: 200, author: `Fauzidev`, result: result.result }
}

async function ytmp3(url) {
  if(!url) return { status: false, author: `Fauzidev`, result: mess.url }
  var res = await fetch(`${domain}/download/ytmp3?url=${url}`)
  var result = await res.json()
  return { status: 200, author: `Fauzidev`, result: result.result } 
}

async function pinterest(query) {
  if(!query) return { status: false, author: `Fauzidev`, result: mess.query }
  var url = await fetch(`${domain}/search/pinterest?query=${query}`) 
  var result = await url.json()
  return { status: 200, author: `Fauzidev`, result: result.result } 
}

async function randomAnime() {
  var url = await fetch(`${domain}/anime/randomanime`)  
  var result = await url.json()
  return { status: 200, author: `Fauzidev`, result: result.url } 
}

async function quotesAnime() {
  var url = await fetch(`${domain}/anime/quotesanime`)  
  var result = await url.json()
  return result 
}

async function googleImage(query) {
  if(!query) return { status: false, author: `Fauzidev`, result: mess.query }
  var url = await fetch(`${domain}/search/google-image?query=${query}`)  
  var result = await url.json()
  return result 
} 

async function couple() {
  var url = await fetch(`${domain}/internet/ppcp`)  
  var result = await url.json()
  return result 
} 

async function memeIndo() {
  var url = await fetch(`${domain}/internet/meme`)  
  var result = await url.json()
  return result 
} 

async function jarak(from, to) {
  if(!from && to) return { status: false, author: `Fauzidev`, result: `Example: Cianjur, Jakarta`}
  var url = await fetch(`${domain}/internet/jarak?from=${from}&to=${to}`)  
  var result = await url.json()
  return result 
} 

async function wikipedia(query) {
  if(!query) return { status: false, author: `Fauzidev`, result: mess.query }
  var url = await fetch(`${domain}/internet/wikipedia?query=${query}`)  
  var result = await url.json()
  return result 
} 

module.exports = { 
  infoGempa,
  tiktokdl,
  ytmp4,
  ytmp3,
  pinterest,
  randomAnime,
  quotesAnime,
  googleImage,
  couple,
  memeIndo,
  wikipedia
}