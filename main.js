var string ='Lorem ipsum dolor sit amet.';
console.log(string);

var browser = {
  name:'Google Hrome',
  position:'First',
  founded:2008,
  engine:'WebKit'
};
  browser.engine = 'Blink';
console.log(browser);

var i;
for(i = 2; i < 20; i = i + 2){
  console.log(i);
}

  var BrowserName = 'Opera',
  Status;
 switch (BrowserName) {
   case 'Google Hrome': Status = 'First'; break;
   case 'Opera': Status = 'Second'; break;
   case 'Firefox': Status = 'Third'; break;
   default: 'Other';
 }
 console.log(BrowserName +' '+ Status);

var BrowserName = 'Internet Explorer',
 Status;
switch (BrowserName) {
  case 'Google Hrome': Status = 'First'; break;
  case 'Opera': Status = 'Second'; break;
  case 'Firefox': Status = 'Third'; break;
  default: Status = 'Other';
}
console.log(BrowserName +' '+ Status);

var x = 120;
var text = x > 100 ? 'x больше 100' : x < 100 ? 'x меньше 100' : 'x равен 100';
console.log(text);

var i = 0;
while (i < 7) {
  console.log(i);
  i++;
};

function myFunction (arg1, arg2, callback) {
  alert('"Число арг1 в степени арг2".');
  
  var arg3 = Math.pow(arg1, arg2) ;
  callback(arg3);
  
}
myFunction(2, 4, function(arg3) {
  alert('"Результат арг3".' + arg3);
  console.log(arg3);
});


  


