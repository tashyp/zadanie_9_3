//scripts.js
/*
var str = "test";
var newStr = (new String("test"));

var result1 = str.toUpperCase();
var result2 = newStr.toUpperCase();

{
  0:"t",
  1:"e",
  2:"s",
  3:"t",
  length:4
}
console.log( newStr[3] );

//length
var txt = 'Lorem ipsum dolor sit amet';
console.log(txt.length);  // It will display 26

//charAt()
var txt ='Example';
console.log( txt.charAt(4) ); //It will display 'p'

//indexOf()
var txt = 'Lorem ipsum dolor sit amet';
var indexDolor = txt.indexOf('dolor');

if (indexDolor == -1) {
  console.log('Dolor does not appear in the txt');
} else {
  console.log(txt[indexDolor]);
}

//slice()
var motto = 'Good friends are loyal people';
var partOfMotto = motto.slice(5,11);

console.log(partOfMotto);
[5] f
[6] r
[7] i
[8] e
[9] n
[10] d

var motto = 'Good friends are loyal people';
partOfMotto = motto.slice(-12,-7);

console.log(partOfMotto);

//substr()
var motto = 'The rest is silence';
var mottoCharsAfter = motto.substr(12, 7);

console.log(mottoCharsAfter);

//replace()
var motto = 'Never give up on what you really want to do';
var mottoCharsAfter = motto.replace('do', 'have');

console.log(mottoCharsAfter);

//toUpperCase()
var name = 'John Doe';
var nameUpperCased = name.toUpperCase();

console.log(nameUpperCased);

//toLowerCase()
var text = 'BeTTer lATe THAN neveR';

if ( text.toLowerCase().indexOf('late') != -1 ) {
    console.log('Sentence contains word - late')
}

//split()
var keywords = 'red, green, blue, yellow, pink, orange, white';

var keywordsArray = keywords.split(', ');

keywordsArray.map( function(element) {

console.log('#tag-' + element);

} );
*/

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

//var textWithTriceratops = text.replace('Velociraptor', 'Triceratops');
//console.log(textWithTriceratops);

var dinosaur = 'triceratops';
var upperDinosaur = dinosaur.toUpperCase();
console.log(upperDinosaur);

var textWithTriceratops = text.replace('Velociraptor', upperDinosaur);
console.log(textWithTriceratops);

var halfOfaText = textWithTriceratops.substr(0, textWithTriceratops.length/2);
console.log(halfOfaText);