// const request = require('request');
//   request('http://stackabuse.com', function(err, res, body) {  
//     //   console.log(body);
//         console.log(typeof body)

//         const jsdom = require("jsdom");
//         const dom = new jsdom.JSDOM(body);
//       let citeData = dom.querySelectorAll('cite')
// let cnt = 0
// for(let i=0; i<citeData.length; i++) {
//     if(i != 0 && citeData[i].outerText != citeData[i-1].outerText) {
//         cnt += 1
//     console.log(citeData[i])
//     }
// }
// console.log(cnt)
//   });