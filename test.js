
genbank = require('./genbank');

var sample = require('fs').readFileSync('18500.gbk') + '';

var gbf = genbank.parseGBF(sample);

console.log(JSON.stringify(gbf, null, 2));




