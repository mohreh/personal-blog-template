// این فایل رو ول کن
// تو php
// میشه یه فایل اچ‌تی‌ام‌ال داشت و اون رو انکلود کرد داخل یه فایل اچ‌تی‌ام‌ال دیگه
// پس تو دات نت هم باید باشه
// خلاصه این فایل برای خلاصه بودن هست
// فقط برای فایل ساید بار
// اون فایل رو به طریق دات نت ایپپورت کن تو صفحاتی که لازمه
// جایی که ایمپورت میشه یه اتریبیوت داره به اسم:
// include-html
// نهایتا به این شکل
// <div id="sidebar" include-html="sidebar.html"></div>
// <div id="topbar" include-html="topbar.html"></div>
// تو این اتربیوت رو سرچ کن ممکنه یه صفحاتی رو ایمپورت کرده باشم که ذکر نکرده باشم.

function includeHTML() {
  let z, i, elm, file, xhttp;

  z = document.getElementsByTagName('*');
  for (i = 0; i < z.length; i++) {
    elm = z[i];

    file = elm.getAttribute('include-html');
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elm.innerHTML = this.responseText;
          }

          if (this.status == 404) {
            elm.innerHTML = 'Page not found.';
          }

          elm.removeAttribute('include-html');
          includeHTML();
        }
      };
      xhttp.open('GET', file, true);
      xhttp.send();

      return;
    }
  }
}
