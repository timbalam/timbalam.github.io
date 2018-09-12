var codeboxes = document.querySelectorAll('textarea.codebox');
function appendOutput(res) {
  output.textContent += res + '\n';
  scrollToBottom(output)
};
function setup(cb) {
  document.querySelectorAll('textarea.codebox').forEach(function (tb) {
    var o = tb.insertAdjacentElement('afterend',document.createElement('pre'));
    o.className = 'codebox-output';
    tb.onblur = function () {
      cb(tb.value, o);
    };
  });
};
/*setup(function(str1, str2) {
  console.log(str1);
  appendResult(str2);
});*/