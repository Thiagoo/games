/* function */
let list = document.querySelectorAll('li');

function getValue(val) {
  //console.log(val.length);

  for (let i = 0; i < list.length; i++) {
    list[i].style.visibility = 'hidden';
  }
  for (let i = 0; i < val; i++) {
    list[i].style.visibility = 'visible';
  }
}
