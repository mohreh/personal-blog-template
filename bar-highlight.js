// لعنت بر گشادی جای اینکه چهار تا دیو از سایدبار کپی کنم فقط جای کلاس‌هارو عوض کنم این کارو کردم
// اینو حذف نکن اگه کردی یادت نره خودت این کلاس‌ها رو بدی به اون انکری که لازمه

(async () => {
  const sidebar = document.getElementById('sidebar');

  await new Promise((res) => {
    setTimeout(() => {
      const menu = sidebar.querySelector('.menu');

      for (let a in menu.children) {
        let elm = menu.children[a];
        if (elm instanceof HTMLAnchorElement) {
          const elmHref = elm.getAttribute('href');

          if (window.location.pathname.includes(elmHref)) {
            if (elmHref !== '/') {
              elm.classList.add('text-shin-stout', 'text-primary', 'underline');
            }
          }
        }
      }
    }, 200);
  });
})();
