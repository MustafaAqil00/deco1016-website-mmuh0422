
// Javascript used to load bodymovin animation
// code used was referenced from here: https://www.youtube.com/watch?v=5XMUJdjI0L8
var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './img/data.json'
  })