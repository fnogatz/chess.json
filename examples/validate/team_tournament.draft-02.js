var fs = require('fs');
var util = require('util');

var JSV = require('JSV').JSV;
var env = JSV.createEnvironment('json-schema-draft-02');

var tnmt = JSON.parse(fs.readFileSync('../draft-02/team_tournament.json', 'utf8'));
var schema = JSON.parse(fs.readFileSync('../../schemas/draft-02/team_tournament.json', 'utf8'));

var report = env.validate(tnmt, schema);
util.puts(util.inspect(report.errors, null, false));
