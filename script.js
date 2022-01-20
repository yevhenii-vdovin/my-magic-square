// let a = Math.floor(Math.random() * 100);
// setTimeout(function(){ alert("Hello"); }, 3000);

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");

// let todo = [];
let numberA = 4;
let numberD = 500;
let numberN = 0;
myFunction();
function myFunction() {
  setTimeout(function () {
    //  let kwadratNumberA = Math.floor(Math.random() * 100) + 1;
    //  let numberA = kwadratNumberA * kwadratNumberA;
    //  // let numberA = 25;
    //  let numberD = Math.floor(Math.random() * 10000) + 1;
    //  // let numberD = 0;
    //  // let numberN = numberD;
    // let numberN = Math.floor(Math.random() * 10000) + 1;
    numberN++;
    if (numberN > 1000) {
      numberN = 0;
      numberD++;
      if (numberD > 1000) {
        numberD = 0;
        numberA++;
      }
    }
    //-----------------------------------------------
    // var a =0;
    // var d = 0;
    // var n = 0;

    // function startTimer(){
    //   timex = setTimeout(function(){
    //       n++;
    //     if(n >59){n=0;d++;
    //        if(d>59) {
    //        d=0;hours++;
    //          }}

    //                    }

    //       startTimer();
    //   },1000);
    // }

    //------------------------------------------

    //let a = Math.floor(Math.random() * 99) + 1;
    let ax = numberA + numberD + 2 * numberN;
    one.innerHTML = ax;
    //let b = Math.floor(Math.random() * 99) + 1;
    let bx = numberA;
    two.innerHTML = bx;
    //let c = Math.floor(Math.random() * 99) + 1;
    let cx = numberA + 2 * numberD + numberN;
    three.innerHTML = cx;

    // let d = Math.floor(Math.random() * 99) + 1;
    // four.innerHTML = d;

    let dx = numberA + 2 * numberD;
    four.innerHTML = dx;

    // let e = Math.floor(Math.random() * 99) + 1;
    let ex = numberA + numberD + numberN;
    five.innerHTML = ex;
    //let f = Math.floor(Math.random() * 99) + 1;
    let fx = numberA + 2 * numberN;
    six.innerHTML = fx;
    //let g = Math.floor(Math.random() * 99) + 1;
    let gx = numberA + numberN;
    seven.innerHTML = gx;
    //let h = Math.floor(Math.random() * 99) + 1;
    let hx = numberA + 2 * numberD + 2 * numberN;
    eight.innerHTML = hx;
    //let i = Math.floor(Math.random() * 99) + 1;
    let ix = numberA + numberD;
    nine.innerHTML = ix;
    console.log(numberA, numberD, numberN);
    // let array = [ a, b, c,
    //              d, e, f,
    //              g, h, i];
    // x11 = a*a + b*b + c*c;
    // x12 = d*d + e*e + f*f;
    // x13 = g*g + h*h + i*i;
    // x21 = a*a + d*d + g*g;
    // x22 = b*b + e*e + h*h;
    // x23 = c*c + f*f + i*i;
    // x31 = a*a + e*e + i*i;
    // x32 = g*g + e*e + c*c;

    // if (Number.isInteger(Math.sqrt(ax)) && Number.isInteger(Math.sqrt(bx)) && Number.isInteger(Math.sqrt(cx)))
    //  if (numberA = 1 && numberD = 0 && numberN = 0) {
    //    continue;
    // }

    if (
      Number.isInteger(Math.sqrt(gx)) &&
      Number.isInteger(Math.sqrt(hx)) &&
      Number.isInteger(Math.sqrt(ix)) &&
      Number.isInteger(Math.sqrt(dx)) &&
      Number.isInteger(Math.sqrt(ex)) &&
      Number.isInteger(Math.sqrt(fx)) &&
      Number.isInteger(Math.sqrt(ax)) &&
      Number.isInteger(Math.sqrt(bx)) &&
      Number.isInteger(Math.sqrt(cx))
    ) {
      // if (Number.isInteger(Math.sqrt(ax)) && Number.isInteger(Math.sqrt(bx)) && Number.isInteger(Math.sqrt(cx)) && Number.isInteger(Math.sqrt(dx)) && Number.isInteger(Math.sqrt(ex)) && Number.isInteger(Math.sqrt(fx)) && Number.isInteger(Math.sqrt(gx)) && Number.isInteger(Math.sqrt(hx)) && Number.isInteger(Math.sqrt(ix)))
      console.log(numberA, numberD, numberN);
      function func() {
        //alert(getRandomColor());
        document.bgColor = getRandomColor();
      }

      function getRandomColor() {
        var letters = "0123456789ABCDEF".split("");
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      func();

      var audio = new Audio(
        "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
      );
      audio.play();

      // console.log(x11);
      // console.log(x12);
      // console.log(x13);
      // console.log(x21);
      // console.log(x22);
      // console.log(x23);
      // console.log(x31);
      // console.log(x32);

      return;
    }

    myFunction();
  }, 0.1);
}
