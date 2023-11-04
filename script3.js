//dream.html의 javascript

//nav 요소 빛나게
document.addEventListener('DOMContentLoaded', function () {
  var dre = document.getElementById('dre');

  dre.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
  dre.style.transition = 'text-shadow 0.5s ease';

  dre.addEventListener('click', function () {
    dre.style.textShadow = '0 0 20px rgba(255, 255, 255, 1)';
  });
});

/* 나타나는 효과 */
document.addEventListener('DOMContentLoaded', function () {
  var icon0Container = document.getElementById('icon0Container');
  var icon1Container = document.getElementById('icon1Container');
  var icon2Container = document.getElementById('icon2Container');

  setTimeout(function () {
    icon0Container.style.display = 'block';
    icon0Container.style.transition = 'opacity 0.5s ease';
    icon0Container.style.opacity = '1';
  }, 500);

  setTimeout(function () {
    icon1Container.style.display = 'block';
    icon1Container.style.transition = 'opacity 0.5s ease';
    icon1Container.style.opacity = '1';
  }, 500);

  setTimeout(function () {
    icon2Container.style.display = 'block';
    icon2Container.style.transition = 'opacity 0.5s ease';
    icon2Container.style.opacity = '1';
  }, 500);
});
