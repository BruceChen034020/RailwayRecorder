/* events
版本: 1.0.0.0
2019/4/9
*/

/* Timed Events */
function sendOnline(){ // send a message to show you are online to the server

}

/* Click Events */
function button1_Clicked(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // m = checkTime(m);
  // s = checkTime(s);
  text1 += h + ":" + m + ":" + s + " 停 " + textBox1.value() + ' ' + textBox2.value() + '\r\n';
}

function button2_Clicked(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  text1 += h + ":" + m + ":" + s + " 開 " + textBox1.value() + ' ' + textBox2.value() + '\r\n';
}

function button3_Clicked(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  text1 += h + ":" + m + ":" + s + " 過 " + textBox1.value() + ' ' + textBox2.value() + '\r\n';
}

function button4_Clicked(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  text1 += h + ":" + m + ":" + s + " miss " + textBox1.value() + ' ' + textBox2.value() + '\r\n';
}

function button5_Clicked(){

}

function button6_Clicked(){
  createP('');
  t = createElement('textarea', text1);
  text1 = '';
  t.size(280, 280);
}
