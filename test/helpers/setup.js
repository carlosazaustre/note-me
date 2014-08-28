// Assertions and testing utilities
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

GLOBAL.AssertionError = chai.AssertionError;
GLOBAL.expect = chai.expect;
