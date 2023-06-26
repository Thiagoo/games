let element1 = document.getElementById('box1');
let element2 = document.getElementById('box2');

element1.addEventListener('click', (event) => {
  // debugger;
  console.log('box1');
  this.moveBox1();
});

element2.addEventListener('click', (event) => {
  console.log('box2');
  this.moveBox2();
});

function moveBox1() {
  document.getElementById('Box1Container').style.justifyContent = 'flex-end';
  document.getElementById('box1').style.width = '100px';
  document.getElementById('box1').style.height = '18px';
}

function moveBox2() {
  document.getElementById('box2').style.left = '200px';
  document.getElementById('box2').style.width = '100px';
  document.getElementById('box2').style.height = '80px';
  document.getElementById('box2').style.backgroundColor = '#cc8f8f';
  document.getElementById('box2').style.justifyContent = 'center';
  document.getElementById('box2').style.alignItems = 'center';
  document.getElementById('box3').style.display = 'block';
}
