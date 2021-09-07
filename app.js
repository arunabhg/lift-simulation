let floor1_pos = 426;
let floor2_pos = 296;
let floor3_pos = 169;
let floor4_pos = 42;

let currPosition = floor1_pos;
const lift = document.getElementById('lift-simulator');

function clickedFloorOne() {
  let move = setInterval(moveLift, 3);

  function moveLift() {
    if (currPosition == floor1_pos) {
      clearInterval(move);
    } else {
      currPosition++;
      lift.style.top = currPosition + 'px';
    }
  }
}

function clickedFloorTwo() {
  let move = setInterval(moveLift, 3);

  function moveLift() {
    let top = lift.style.top;

    if (currPosition == floor2_pos) {
      clearInterval(move);
    } else {
      if (Number(top.slice(0, top.indexOf('px'))) < floor2_pos) {
        currPosition++;
      } else {
        currPosition--;
      }
      lift.style.top = currPosition + 'px';
    }
  }
}

function clickedFloorThree() {
  let move = setInterval(moveLift, 3);

  function moveLift() {
    let top = lift.style.top;

    if (currPosition == floor3_pos) {
      clearInterval(move);
    } else {
      if (Number(top.slice(0, top.indexOf('px'))) < floor3_pos) {
        currPosition++;
      } else {
        currPosition--;
      }
      lift.style.top = currPosition + 'px';
    }
  }
}

function clickedFloorFour() {
  let move = setInterval(moveLift, 3);

  function moveLift() {
    if (currPosition == floor4_pos) {
      clearInterval(move);
    } else {
      currPosition--;
      lift.style.top = currPosition + 'px';
    }
  }
}
