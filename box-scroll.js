(() => {
  const allbox = document.body.querySelectorAll('.box');
  allbox.forEach(async (box) => {
    const toRight = box.parentNode.querySelector('.toRight');
    const toLeft = box.parentNode.querySelector('.toLeft');

    let firstNonVisible = null;
    for (let i = 0; i < box.children.length; i++) {
      const elem = box.children[i];

      if (!(elem instanceof Element))
        throw Error('DomUtil: elem is not an element.');

      const style = getComputedStyle(elem);

      await new Promise((resolve) =>
        setTimeout(() => {
          let elemCenter;

          box.className.includes('rtl')
            ? (() => {
                elemCenter = {
                  x: elem.getBoundingClientRect().left - elem.offsetWidth / 2,
                };
              })()
            : (() => {
                elemCenter = {
                  x:
                    window.innerWidth -
                    elem.getBoundingClientRect().left -
                    elem.offsetWidth / 2,
                };
              })();
          if (elemCenter.x < 0) {
            firstNonVisible = {
              index: i,
              x: elemCenter.x,
              offsetWidth: elem.offsetWidth,
              width: style.width,
            };
          }

          resolve();
        }, 200)
      );

      if (firstNonVisible) {
        const { index, x, offsetWidth } = firstNonVisible;
        toRight.addEventListener('click', () => {
          box.scrollLeft += offsetWidth * index;
        });

        toLeft.addEventListener('click', () => {
          box.scrollLeft += -offsetWidth * index;
        });

        break;
      }
    }
  });
})();
