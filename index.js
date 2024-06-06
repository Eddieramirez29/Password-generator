const slider = document.getElementById('slider');
const lengthValue = document.getElementById("characterLength");

slider.addEventListener('input', function()
{
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    characterLength.innerHTML = value/5;
    slider.style.background = `linear-gradient(to right, #00ff00 ${value}%, #000000 ${value}%)`;
});
