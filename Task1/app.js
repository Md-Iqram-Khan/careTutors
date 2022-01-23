function changeImage() {
  let image = document.getElementById("myImage");
  //   if (image.src.match("bulbon")) {
  //     image.src = "pic_bulboff.gif";
  //   } else {
  //     image.src = "pic_bulbon.gif";
  //   }

  image.src.match("bulbon")
    ? (image.src = "./images/pic_bulboff.gif")
    : (image.src = "./images/pic_bulbon.gif");
}
