// const { Client } = require('pg')

// const client = new Client({
//     user: 'ingestion_test_user',
//     password: 'ingestion_test_user',
//     host: 'localhost',
//     database: 'ingestion_test',
//     port: 5432,
//   })
//   client.connect((err) => {
//     if(err)
//       console.log(err);
      
//   })
//   client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
//   })
// const moment = require('moment-timezone'),
//     _ = require('lodash');

// var now = moment(),
//     all_meter = 1720405,
//     mismatches_count = 100000,
//     tab = [],
//     i = 12,
//     j = 0,
//     fixed = 0;
// for(i; i > 0; i--) {
//     console.log('\n\nFor run : ' + i);
//     cur_fixed = calcFixed()
//     tab.push(
//         [
//             moment(now).subtract(i, 'months').format("YYYY-MM-DD HH:mm:SSZZ"),
//             all_meter = calcAnazyled(all_meter),
//             mismatches_count -= cur_fixed,
//             fixed += cur_fixed
//         ]
//     )
// }
// console.log(tab);

// console.log('Total meter fixed : '+ fixed+" Total meter added : "+ (tab[tab.length-1][1] - tab[0][1]));

// for(var i = 0,  j = 0; i < 12; i++, j++) {
//     // tab.push([moment(now).subtract(i, 'months').format("YYYY-MM-DD HH:mm:SSZZ")]);
//     // console.log(j);
//     console.log(delta(1));
    
// }

// function calcAnazyled(a) {
//     // Return +/- 0.000150/0.000500 % of the given value
//     console.log("*** Start Step : Analyzed Meter *** \nInitial count : "+ a);
    
//     // var bool = Math.random() >= 0.05 // 95 % of the time we will add meter
//     var percentage = Math.round(Math.random() * (500 - 50) + 50) / 1000000;
//     console.log("Perc : "+ percentage);
    
//     // if(bool) {
//         console.log("+ "+ percentage+ " adding : "+ Math.round(a * percentage)+ " meter")
//         a += Math.round(a * percentage)
//     // } else {
//     //     console.log("- "+ percentage+ " removing : "+ Math.round(a * percentage)+ " meter");
//     //     a -= Math.round(a * percentage)
//     // }
//     console.log("Final Count : "+ a+"\n*** End Step : Analyzed Meter ***");
    
//     return a;
// }

// function calcFixed(a) {
//     var a = Math.round(Math.random() * (7000 - 4000) + 4000);
//     console.log('Fixed meters : '+ a);
    
//     return a;
// }
