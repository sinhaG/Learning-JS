Number.method('integer', function () {
 return Math[this < 0 ? 'ceil' : 'floor'](this);
});
console.log((-10 / 3).integer( )); // -3