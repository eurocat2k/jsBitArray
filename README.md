# jsBitArray
bit manipulation module in javascript - written to support Asterix Radar data processing module, and other aviation related data processing tools.
## Usage
First of all put the *bitarr.js* into the working PATH, where your app can reach it.
Then call **require** to import the code into your application as usual - *see **bitarray_test.js** how it works* :
```javascript
...
var BitArray = require('<path_to_module>/bitarr.js');
...
```
Then instantiate **BitArray** object:
```javascript
var ba = new BitArray();
```
You can then work with the new instance in various ways:
- get binary data as a binary number converted to string contains '**0**'s and '**1**'s as required
```javascript
ba.fromString('1010011001010010');
console.log(bb.octets);
bb.printArray();

// will produce
//[ 166, 82 ]
//{
//  BIN: '10100110 01010010',
//  OCT: '246 122',
//  HEX: 'a6 52',
//  DEC: '166 82'
//}
//Binary string representation: 1010011001010010
```
- or use array of **UInt8** octets:
```javascript
ba.fromArr([255,103,45,20]);
console.log(ba.octets);
ba.printArray();

// will produce
//[ 255, 103, 45, 20 ]
//{
//  BIN: '11111111 01100111 00101101 00010100',
//  OCT: '377 147 055 024',
//  HEX: 'ff 67 2d 14',
//  DEC: '255 103 45 20'
//}
//Binary string representation: 11111111011001110010110100010100
```
Of course you can modify existing bit array bitwise using **setBit** and **clearBit** and **xorBit** methods. These methods are ready to manipulate bit arrays either Little Endian or Big Endian fashion as required.
