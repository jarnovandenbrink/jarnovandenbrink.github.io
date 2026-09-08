// Theme toggle, persisted to localStorage
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// Wrap every rouge code block with the design's header bar + copy button
(function () {
  document.querySelectorAll('div.highlighter-rouge').forEach(function (root) {
    var pre = root.querySelector('pre');
    if (!pre) return;

    var block = document.createElement('div');
    block.className = 'code-block';

    var header = document.createElement('div');
    header.className = 'code-block-header';

    var label = document.createElement('span');
    var lang = (root.className.match(/language-(\w+)/) || [])[1] || 'code';
    label.textContent = lang;

    var copy = document.createElement('button');
    copy.className = 'code-copy';
    copy.type = 'button';
    copy.textContent = 'copy';
    copy.addEventListener('click', function () {
      var done = function () {
        copy.textContent = 'copied';
        setTimeout(function () { copy.textContent = 'copy'; }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pre.textContent).then(done, done);
      } else {
        done();
      }
    });

    // attach the outer block where the rouge div currently sits
    root.parentNode.insertBefore(block, root);
    block.appendChild(header);
    header.appendChild(label);

    var buttons = document.createElement('div');
    buttons.className = 'code-block-buttons';

    var lineCount = pre.textContent.split('\n').length;
    if (lineCount > 15) {
      var wrap = document.createElement('div');
      wrap.className = 'code-collapse';

      var fade = document.createElement('div');
      fade.className = 'code-fade';
      fade.innerHTML = '<span>click to expand</span>';

      var toggle = document.createElement('button');
      toggle.className = 'code-copy';
      toggle.type = 'button';
      toggle.textContent = 'expand';

      var setOpen = function (open) {
        wrap.classList.toggle('open', open);
        fade.style.display = open ? 'none' : 'flex';
        toggle.textContent = open ? 'collapse' : 'expand';
      };
      toggle.addEventListener('click', function () {
        setOpen(!wrap.classList.contains('open'));
      });
      fade.addEventListener('click', function () { setOpen(true); });

      wrap.appendChild(root);
      wrap.appendChild(fade);
      block.appendChild(wrap);
      buttons.appendChild(toggle);
      setOpen(false);
    } else {
      block.appendChild(root);
    }

    buttons.appendChild(copy);
    header.appendChild(buttons);
    root.style.margin = '0';
  });
})();
