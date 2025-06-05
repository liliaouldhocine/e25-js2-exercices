document.getElementById("myBtn").addEventListener(
  "click",
  (function () {
    let count = 0;
    return function () {
      count++;
      console.log(`Clic ${count}`);
    };
  })()
);
