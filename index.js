const slider = document.getElementById('slider');

slider.addEventListener('input', function() {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, #00ff00 ${value}%, #000000 ${value}%)`;
});
