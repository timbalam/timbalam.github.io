function setup(cb) {
  document.querySelectorAll('textarea.codebox').forEach(function (tb) {
    var o = document.createElement('pre');
    o.className = 'codebox-output';
    o.setAttribute("hidden", "")
    tb.insertAdjacentElement('afterend',o);
    tb.onblur = function () {
      cb(o, tb.value);
      o.removeAttribute("hidden");
    };
  });
};
/*setup(function(o, str) {
  console.log(str);
  o.textContent = str;
});*/