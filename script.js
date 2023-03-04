function changeBackground() {
    var colors = ["#FF5733", "#F7DC6F", "#9B59B6", "#85C1E9", "#48C9B0", "#F1948A", "#D35400"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }