# Fauzidev-Api
<p align="center">
<a target="_blank" href="https://github.com/oziispedzz"><img src="https://avatars.githubusercontent.com/oziispedzz?s=400&u=ce99f02d685d58b2bc8b381afa7868481515dbe7&v=4" alt="" width="169" /></a>
</p>
<p align="center">
<a target="_blank" href="https://github.com/oziispedzz"><img title="Author" src="https://img.shields.io/badge/Author-Fauzidev-red.svg?style=for-the-badge&logo=github" /></a>
<br>
<a target="_blank" href="//npmjs.com/api-fauzidev"><img src="https://img.shields.io/npm/dw/api-fauzidev?color=yellow&label=Downloads&logo=npm&style=flat"></a>
<br>
<a target="_blank" href="https://www.npmjs.com/package/api-fauzidev?activeTab=versions"><img src="https://img.shields.io/npm/v/api-fauzidev?color=green&label=version&logo=npm&style=social"></a>
</p>

# Note

ID<br>
Jika Ada Bug,<br>
Silahkan Buat [Issues](https://github.com/oziispedzz/api-fauzidev/issues/new)

EN<br>
If there are bugs,<br>
please create [Issues](https://github.com/oziispedzz/api-fauzidev/issues/new)

# Installation

## Latest

`npm i github:oziispedzz/api-fauzidev`

## Npm

`npm i api-fauzidev`

# required

```js
const api = require("api-fauzidev");
```

# Docs

## Information

```js
// Info Gempa Terbaru
api.infoGempa()
.then(console.log);
```

## Other

```js
// RandomAnime
const result = api.randomAnime();
console.log(result);

// QuotesAnime
const result = api.quotesAnime();
console.log(result);

// PP couple
const result = api.ppcp()
console.log(result)

// Meme Indo 
const result = api.memeIndo()
console.log(result)

// Jarak 
const result = api.jarak(from, to)
console.log(result)
```

## Downloader

```js
// YouTube Music
api.ytmp3(url)
.then(console.log);

// Youtube Video
api.ytmp4(url)
.then(console.log);

// Tiktok
api.tiktok(url)
.then(console.log);

// Pinterest Downloader
api.pinterest(URL)
.then(console.log)
```

## Search

```js
// Pinterest Search 
api.pinterest(Query)
.then(console.log);

// Wikipedia
api.wikipedia(Query)
.then(console.log);

// Google-Image
api.googleImage(Query)
.then(console.log);
```

# api-fauzidev
# api-fauzidev
