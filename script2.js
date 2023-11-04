//about.html의 javascript

//nav 요소 빛나게
document.addEventListener('DOMContentLoaded', function () {
  var abo = document.getElementById('abo');

  abo.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
  abo.style.transition = 'text-shadow 0.5s ease';

  abo.addEventListener('click', function () {
    abo.style.textShadow = '0 0 20px rgba(255, 255, 255, 1)';
  });
});

/* 나타나는 효과 */
document.addEventListener('DOMContentLoaded', function () {
  var img = document.getElementById('youhyun');
  var about_contents = document.getElementById('about_contents');

  img.style.opacity = '0';
  about_contents.style.opacity = '0';

  setTimeout(function () {
    img.style.transition = 'opacity 0.5s ease';
    img.style.opacity = '1';
  }, 500);

  setTimeout(function () {
    about_contents.style.transition = 'opacity 0.5s ease';
    about_contents.style.opacity = '1';
  }, 1000);
});
