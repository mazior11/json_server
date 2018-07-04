'use strict';

var _jsonSchemaFaker = require('json-schema-faker');

var _jsonSchemaFaker2 = _interopRequireDefault(_jsonSchemaFaker);

var _mockDataSchema = require('./mock-data-schema');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jsonSchemaFaker2.default.extend('faker', function () {
    return require('faker');
});

var json = JSON.stringify((0, _jsonSchemaFaker2.default)(_mockDataSchema.schema));

_fs2.default.writeFile("./build/api/db.json", json, { flag: 'w' }, function (err) {
    if (err) {
        return console.log(_chalk2.default.red(err));
    } else {
        console.log(_chalk2.default.green("Mock data generated"));
    }
});