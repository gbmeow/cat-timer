

var cpm = require('child_process');

const intervalObj = setInterval(() => {
    cpm.exec('open "" "cat.png"');
}, 1500000);