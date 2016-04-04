
genbank = require('./genbank');

var sample = require('fs').readFileSync('sample.gbf') + '';

var gbf = genbank.parseGBF(sample);

console.log(JSON.stringify(gbf, null, 2));




