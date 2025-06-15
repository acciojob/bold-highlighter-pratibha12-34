function highlight() {
  const strongElements = document.querySelectorAll('strong');
  strongElements.forEach(el => {
    el.style.color = 'rgb(0, 128, 0)';
  });
}

function return_normal() {
  const strongElements = document.querySelectorAll('strong');
  strongElements.forEach(el => {
    el.style.color = 'rgb(0, 0, 0)';
  });
}
