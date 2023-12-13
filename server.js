var axios = require("axios")
const path = require("path")
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log( path.join(__dirname,'public'))
    return res.sendFile('public/index.html',{root: __dirname});

})
app.get('/searchword', async(req, res) => {
//   res.send('Hello World!')
console.log(req.params)

var options = {
  method: 'GET',
  url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/definition/',
  params: {entry: 'mask'},
  headers: {
    'X-RapidAPI-Key': '4896e80498msh78f124a9478d37dp15984cjsnf5762109d15d',
    'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });
let response={}
response.data = {
    entry: 'mask',
    request: 'mask',
    response: 'mask',
    meaning: {
      noun: '(nou) a covering to disguise or conceal the face\n' +
        '(nou) activity that tries to conceal something\n' +
        '(nou) a party of guests wearing costumes and masks\n' +
        '(nou) a protective covering worn over the face',
      verb: '(vrb) hide under a false appearance\n' +
        '(vrb) put a mask on or cover with a mask\n' +
        '(vrb) make unrecognizable\n' +
        '(vrb) cover with a sauce\n' +
        '(vrb) shield from light',
      adverb: '',
      adjective: ''
    },
    ipa: 'mɑːsk',
    version: '7.5.7',
    author: 'twinword inc.',
    email: 'help@twinword.com',
    result_code: '200',
    result_msg: 'Scess'
  }
//   console.log(response.data);
  res.json(response.data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
})