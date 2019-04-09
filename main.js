/*
感謝您觀看這份程式碼
作品名稱: RailwayRecorder
作者: 陳光穎 Bruce Chen
聯絡方式
  Facebook連結: https://www.facebook.com/bruce.chen.372
  LINE ID: brucechen0
最後修改日期: 2019/4/9
版本: 1.0.0.0
發表於: https://brucechen034020.github.io/
程式碼尺度
  N/A
作者註解:
  1. 如本網頁有 bug 請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  2. 如有任何建議，請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  */

/* Global variables */
var text1 = ''; // the recording (string)
var button1; // 停 (button)
var button2; // 開 (button)
var button3; // 過 (button)
var button4; // miss (button)
var textBox1; // station name (textarea)
var textBox2; // 備註 (textarea)
var label1; // station name (label)
var label2; // 備註 (label)
var button5; // 交會車次 (button)
var button6; // 結束行程 (button)
var textBox3; // Output (textarea)

/* p5 functions */
function setup(){
  createP('');

  label1 = createElement('label', 'Station name: ');
  label1.parent(document.body);
  textBox1 = createInput('');

  createP('');

  button1 = createButton('停');
  button1.size(140, 140);
  button1.style('font-size', '72px');
  button1.mousePressed(button1_Clicked);

  button2 = createButton('開');
  button2.size(140, 140);
  button2.style('font-size', '72px');
  button2.mousePressed(button2_Clicked);

  createP('');

  button3 = createButton('過');
  button3.size(140, 140);
  button3.style('font-size', '72px');
  button3.mousePressed(button3_Clicked);

  button4 = createButton('miss');
  button4.size(140, 140);
  button4.style('font-size', '40px');
  button4.mousePressed(button4_Clicked);

  createP('');

  button5 = createButton('交會車次');
  button5.size(280, 23);
  button5.style('font-size', '14px');
  button5.mousePressed(button5_Clicked);

  createP('');

  button6 = createButton('結束行程');
  button6.size(280, 23);
  button6.style('font-size', '14px');
  button6.mousePressed(button6_Clicked);
}

/* User-defined functions */
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
