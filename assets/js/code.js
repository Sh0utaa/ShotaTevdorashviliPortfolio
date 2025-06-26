document.querySelector('a[href="#four"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#four').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelectorAll('a[href="#three"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#three').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});