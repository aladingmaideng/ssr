const fs = require('fs');
const path = require('path');

module.exports = (url, output) => {
    fs.writeFileSync(path.resolve(url), JSON.stringify(output));
};
