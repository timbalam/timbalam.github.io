function setup(cb) {
  document.querySelectorAll(".codebox")
    .forEach(function (el) {
    var o = el.nextElementSibling;
    while (o != null) {
      if (o.classList.contains("codebox-output")) {
        if (el.tagName == "TEXTAREA") {
          el.onblur = function () {
            cb(o, el.id, el.value);
            o.removeAttribute("hidden");
          }
        } else if (el.tagName == "PRE") {
          cb(o, el.id, el.textContent);
        }
        break
      }
      o = o.nextElementSibling;
    }
  });
};
/*setup(function(o, str) {
  console.log(str);
  o.textContent = str;
});*/