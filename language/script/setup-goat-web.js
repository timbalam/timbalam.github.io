function setup(cb) {
  document.querySelectorAll('textarea.codebox').forEach(function (tb) {
    var o = tb.insertAdjacentElement('afterend',document.createElement('pre'));
    o.className = 'codebox-output';
    tb.onblur = function () {
      cb(o, tb.value);
    };
  });
};
/*setup(function(o, str) {
  console.log(str);
  o.textContent = str;
});*/