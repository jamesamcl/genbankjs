BSD-licensed JavaScript parser for the GenBank Flat File (GBF) format.


## API

### parseGBF

TODO

### gbfToDisplayList

TODO


## Usage
```
genbank = require('./genbank');

var sample = require('fs').readFileSync('sample.gbf','utf8');
var gbf = genbank.parseGBF(sample);

console.log(JSON.stringify(gbf, null, 2));
console.log(JSON.stringify(genbank.gbfToDisplayList(gbf), null, 2));
```





