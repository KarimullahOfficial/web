/* counter js*/

// document.addEventListener("DOMContentLoaded ", () => {
//   console.log("hehhe");
//   function counter(id, start, end, duration) {
//     let obj = document.getElementById(id);
//     console.log("Id value is", id);

//     (current = start),
//       (range = end - start),
//       (increment = end > start ? 1 : -1),
//       (step = Math.abs(Math.floor(duration / range)));
//     timer = setInterval(() => {
//       current += increment;
//       obj.textContent = current;
//       if (current == end) {
//         clearInterval(timer);
//       }
//     }, step);
//   }
//   counter("count1", 0, 1287, 3000);
//   counter("count2", 100, 5784, 2500);
//   counter("count3", 0, 1287, 3000);
//   counter("count4", 0, 1287, 3000);
// });

if (document.readyState !== "loading") {
  console.log("document is already ready, just execute code here");
  //   myInitCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("document was not ready, place code here");
    // myInitCode();

    function counter(id, start, end, duration) {
      let obj = document.getElementById(id);

      (current = start),
        (range = end - start),
        (increment = end > start ? 1 : -1),
        (step = Math.abs(Math.floor(duration / range)));
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5784, 2500);
    counter("count3", 0, 1287, 3000);
    counter("count4", 0, 1678, 3000);
  });
}
