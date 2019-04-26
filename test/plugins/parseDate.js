'use strict';

const _                = require('lodash');
const assert           = require('assert');

const plugins          = require('../../index');


const isValidDate = (input) => !isNaN(Date.parse(input));

describe('parseDate plugin', function(){

    it('should return null for not date strings', function(){
        assert.equal(plugins.parseDate('notKnown'), null);
    });

    it('should return a valid date for ISO date strings', function(){
        assert.ok(isValidDate(plugins.parseDate('2017-01-30T11:04:04.277Z')));
    });

    it('should return a valid date for "full contact" date format', function(){

        const result = plugins.parseDate('2014-10');

        assert.ok(isValidDate(result));
        assert.equal(result.getMonth() + 1, 10);
        assert.equal(result.getFullYear(), 2014);

    });

    it('should parse the provided "month" argument', function(){

        const result = plugins.parseDate(2016, 6);

        assert.ok(isValidDate(result));
        assert.equal(result.getMonth() + 1, 6)
    });

    it('should parse the provided "day" argument', function(){

        const result = plugins.parseDate(2018, 10, 16);

        assert.ok(isValidDate(result));
        assert.equal(result.getMonth() + 1, 10);
        assert.equal(result.getFullYear(), 2018);
        assert.equal(result.getDate(), 16);
    });

    it('should default the month if not provided as an argument', function(){

        const result = plugins.parseDate(2016);

        assert.ok(isValidDate(result));
        assert.equal(result.getMonth() + 1, 1);
    });

});
