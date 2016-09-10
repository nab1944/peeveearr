var xmltv = require('xmltv');
var fs = require('fs');

var input = fs.createReadStream('tvguide.xml');
var parser = new xmltv.Parser();

input.pipe(parser);

parser.on('programme', function (programme) {
    // Do whatever you want with the programme
    console.log(programme);
    halt;
});
