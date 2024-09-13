document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', () => {
        alert('Wishing you the happiest birthday!');
    });
});

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }
  