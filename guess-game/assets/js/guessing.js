let count = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkRandonNumber() {
  let inputValue = document.getElementById('domElement').value;
  console.log('Random Number', randomNumber);
  // console.log(
  //   'Input Value ' +
  //     (document.getElementById('valueInput').innerHTML = inputValue)
  // );

  // debugger;
  if (inputValue == randomNumber) {
    feedback.textContent = 'Correct, you took ' + count++ + ' attemnpts';
  } else if (inputValue > randomNumber) {
    // console.count('attemps' + 'valueInput');
    count++;
    feedback.textContent = 'Too high ';
  } else if (inputValue < randomNumber) {
    count++;
    feedback.textContent = 'Too low ';
  }
}
