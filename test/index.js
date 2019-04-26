const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const plugins = require('../index');

describe('Ditto Plugins', () => {
    _.each(plugins, function (plugin, pluginName) {
        const plugintTestPath = path.join(__dirname, `./plugins/${pluginName}.js`);
        if (!fs.existsSync(plugintTestPath)) {
            console.error(`\x1b[31m No valid test is found for ditto Plugin: ${pluginName}`);
        } else {
            require(plugintTestPath);
        }
    });
});