/* events
版本: 1.0.0.0
2019/4/10
*/

/* Timed Events */
function sendOnline(){ // send a message to show you are online to the server

}

/* Click Events */
function button1_Clicked(){
  alert("You clicked '停'");
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // m = checkTime(m);
  // s = checkTime(s);
  text1 += h + ":" + m + ":" + s + " 停 " + textBox1.value() + ' ' + textBox2.value() + '\r\n';
}

function button2_Clicked(){
  alert("You clicked '開'");
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  text1 += h + ":" + m + ":" + s + " 開 " + textBox1.value() + ' ' + textBox2.value() + '\r\n';
}

function button3_Clicked(){
  alert("你按了'過'");
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  text1 += h + ":" + m + ":" + s + " 過 " + textBox1.value() + ' ' + textBox2.value() + '\r\n';
}

function button4_Clicked(){
  alert("你按了'miss'");
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  text1 += h + ":" + m + ":" + s + " miss " + textBox1.value() + ' ' + textBox2.value() + '\r\n';
}

function button5_Clicked(){
  alert("你按了'交會', 但本功能尚未開通.")
}

function button6_Clicked(){
  alert("你按了'結束行程'");
  createP('');
  t = createElement('textarea', text1);
  text1 = '';
  t.size(280, 280);
}
