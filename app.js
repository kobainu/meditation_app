{
  const $container = document.querySelector(".container");
  const $text = document.getElementById("text");

  let totalTime = 7500;
  let breathTime = (totalTime / 5) * 2;
  let holdTime = totalTime / 5;

  const meditateAnimation = () => {
    $container.className = "container grow";
    $text.innerHTML = "吸って!";
    setTimeout(() => {
      $text.innerHTML = "止めて!";
      setTimeout(() => {
        $text.innerHTML = "吐いて!";
        $container.className = "container shrink";
      }, holdTime);
    }, breathTime);
  };
  meditateAnimation();
  // setInterval([呼びたい関数], [周期])
  setInterval(meditateAnimation, totalTime);
}
