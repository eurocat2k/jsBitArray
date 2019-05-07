# jsBitArray
bit manipulation module in javascript
## Usage in server side
First of all put the *bitarr.js* into the working PATH, where your app can reach it.
Then call **require** to import the code into your application as usual - *see **bitarray_test.js** how it works* :
```javascript
...
var BitArray = require('<path_to_module>/bitarr.js');
...
```
Then instantiate BitArray object:
```javascript
var ba = new BitArray();
```
You can then work with the new instance in various ways:
- get binary data as a binary number converted to string contains '0's and '1's as required
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
