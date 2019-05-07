var util = require('util');
var BitArr = require('./bitarr');
console.log(BitArr);

/* TEST */
var bb = new BitArr();
bb.fromString('0000000000000000');
console.log(bb.octets);
bb.printArray();
console.log('Binary string representation: %s', bb.toString());
bb.setBit(1);
bb.printArray();
console.log('Binary string representation: %s', bb.toString());

var bc = new BitArr();
bc.fromString('110101100110');
console.log(bc.octets);
bc.printArray();
console.log('Binary string representation: %s', bc.toString());

var bd = new BitArr();
bd.fromString('01101011');
console.log(bd.octets);
bd.printArray();
console.log('Binary string representation: %s', bd.toString());

var be = new BitArr();
be.fromArr([255,103,45,20]);
console.log(be.octets);
be.printArray();
console.log('Binary string representation: %s', be.toString());
console.log('Get bit %d endianness: "%s" of %d: %d', 0, be.endianness, be.bit_count, be.getBit(0));
console.log('Get bit %d endianness: "%s" of %d: %d', 31, be.endianness, be.bit_count, be.getBit(31));
console.log('');
for (let i = 31; i >= 0; i -= 1) {
    console.log('Get bit %d endianness: "%s" of %d: %d', i, be.endianness, be.bit_count, be.getBit(i));
}
be.printArray();
console.log('');
be.setBit(11);
for (let i = 31; i >= 0; i -= 1) {
    console.log('Get bit %d endianness: "%s" of %d: %d', i, be.endianness, be.bit_count, be.getBit(i));
}
be.printArray();
console.log('');
be.clearBit(11);
for (let i = 31; i >= 0; i -= 1) {
    console.log('Get bit %d endianness: "%s" of %d: %d', i, be.endianness, be.bit_count, be.getBit(i));
}
be.printArray();
