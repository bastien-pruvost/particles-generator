const init = function () {
  // Variables for settings inputs
  const quantity1 = document.getElementById('quantity-1');
  const opacity1 = document.getElementById('opacity-1');
  const speed1 = document.getElementById('speed-1');
  const size1 = document.getElementById('size-1');
  const color1 = document.getElementById('color-1');
  const quantity2 = document.getElementById('quantity-2');
  const opacity2 = document.getElementById('opacity-2');
  const speed2 = document.getElementById('speed-2');
  const size2 = document.getElementById('size-2');
  const color2 = document.getElementById('color-2');
  const quantity3 = document.getElementById('quantity-3');
  const opacity3 = document.getElementById('opacity-3');
  const speed3 = document.getElementById('speed-3');
  const size3 = document.getElementById('size-3');
  const color3 = document.getElementById('color-3');
  const quantity4 = document.getElementById('quantity-4');
  const opacity4 = document.getElementById('opacity-4');
  const speed4 = document.getElementById('speed-4');
  const size4 = document.getElementById('size-4');
  const color4 = document.getElementById('color-4');

  const getRandomBetween = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  const createBubble = function (
    size,
    opacity,
    color,
    speed,
    toTopPos,
    zIndex
  ) {
    const bubble = document.createElement('span');
    const leftPos = getRandomBetween(0, 100);
    const newSize = getRandomBetween(
      parseInt(size) - 15,
      parseInt(size) + 15
    );
    bubble.classList.add('bubble');

    bubble.style.zIndex = zIndex;

    bubble.style.backgroundColor = color;

    bubble.style.opacity = opacity / 100;

    bubble.style.height = newSize + 'px';
    bubble.style.width = newSize + 'px';

    bubble.style.top = getRandomBetween(100, 105) + '%';
    bubble.style.left = leftPos + '%';

    bubble.style.setProperty('--topPos', toTopPos + '%');

    bubble.style.setProperty(
      '--leftPos',
      leftPos + getRandomBetween(-10, 10) + '%'
    );

    bubble.style.setProperty(
      '--animationTime',
      getRandomBetween(parseInt(speed - 500), parseInt(speed + 500)) +
        'ms'
    );

    bubble.style.setProperty(
      '--hueRotate',
      getRandomBetween(-13, 13) + 'deg'
    );

    document.getElementById('wrapper').appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, speed);
  };

  // Layer 1
  setInterval(() => {
    for (let i = 0; i < quantity1.value / 8; i++) {
      setTimeout(() => {
        createBubble(
          size1.value,
          opacity1.value,
          color1.value,
          speed1.value * 50,
          getRandomBetween(60, 80),
          40
        );
      }, 500);
    }
  }, 200);

  // Layer 2
  setInterval(() => {
    for (let i = 0; i < quantity2.value / 8; i++) {
      setTimeout(() => {
        createBubble(
          size2.value,
          opacity2.value,
          color2.value,
          speed2.value * 50,
          getRandomBetween(40, 60),
          30
        );
      }, 500);
    }
  }, 200);

  // Layer 3
  setInterval(() => {
    for (let i = 0; i < quantity3.value / 8; i++) {
      setTimeout(() => {
        createBubble(
          size3.value,
          opacity3.value,
          color3.value,
          speed3.value * 50,
          getRandomBetween(20, 40),
          20
        );
      }, 500);
    }
  }, 200);

  // Layer 4
  setInterval(() => {
    for (let i = 0; i < quantity4.value / 8; i++) {
      setTimeout(() => {
        createBubble(
          size4.value,
          opacity4.value,
          color4.value,
          speed4.value * 50,
          getRandomBetween(-10, 20),
          10
        );
      }, 500);
    }
  }, 200);

  const btn = document.querySelector('.settings-btn');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document
      .getElementById('settings-sidebar')
      .classList.toggle('active');
  });
};

init();
