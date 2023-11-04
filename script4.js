//contact.index의 javascript

//nav 요소 빛나게
document.addEventListener('DOMContentLoaded', function () {
  var con = document.getElementById('con');

  con.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
  con.style.transition = 'text-shadow 0.5s ease';

  con.addEventListener('click', function () {
    con.style.textShadow = '0 0 20px rgba(255, 255, 255, 1)';
  });
});

/* 나타나는 효과 */
document.addEventListener('DOMContentLoaded', function () {
  const subText = document.querySelector('.sub_text2');
  const contIcons = document.querySelectorAll('.cont_icons li');

  subText.style.opacity = '0';

  contIcons.forEach(function (icon) {
    icon.style.opacity = '0';
  });

  let delay = 1000;

  setTimeout(function () {
    subText.style.transition = 'opacity 0.5s ease';
    subText.style.opacity = '1';
  }, 500);

  setTimeout(function () {
    contIcons.forEach(function (icon) {
      setTimeout(function () {
        icon.style.transition = 'opacity 0.5s ease';
        icon.style.opacity = '1';
      }, delay);
      delay += 600;
    });
  }, 500);
});
