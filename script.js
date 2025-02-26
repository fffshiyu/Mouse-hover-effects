

const squares = document.querySelectorAll('.square');
const resetDuration = 300;

squares.forEach((square) => {
  let timeoutId;
  
  square.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    square.classList.add('active');
    timeoutId = setTimeout(() => {
      square.classList.remove('active');
    }, resetDuration);
  });
});
