var validator = require('validator');

console.log(validator.isEmail('foo@bar.com'));
console.log(validator.isISBN('978-0-596-52068-7'));
console.log(validator.isMobilePhone('5264953028'));
console.log(validator.isURL('http://www.baidu.com'));