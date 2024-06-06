const slider = document.getElementById('slider');
const lengthValue = document.getElementById("characterLength");

slider.addEventListener('input', function()
{
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    characterLength.innerHTML = Math.floor(value/5);//Se asegura de redondearlo hacia abajo, ya que en el 11 desplega un número decimal
    slider.style.background = `linear-gradient(to right, #00ff00 ${value}%, #000000 ${value}%)`;
});
