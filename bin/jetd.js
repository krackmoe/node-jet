#!/usr/bin/env node

var jet = require('../lib/jet');
jet.createDaemon().listen(33326);
