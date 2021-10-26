(async () => {
  await new Promise((res) => {
    setTimeout(() => {
      const form = document.querySelector('.search-form');

      const input = form.querySelector('input');
      const icon = form.querySelector('img');

      form.addEventListener('click', () => {
        form.classList.add('active');
      });

      res();
    }, 300);
  });
})();
