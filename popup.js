document.addEventListener('DOMContentLoaded', function () {
    const colorInput = document.getElementById('colorInput');
    const pickColorButton = document.getElementById('pickColor');
    const selectedColorElement = document.getElementById('selectedColor');
    const colorValueElement = document.getElementById('colorValue');
  
    pickColorButton.addEventListener('click', async () => {

      const selectedColor = colorInput.value;

      selectedColorElement.style.display = "inline-block";

      selectedColorElement.style.backgroundColor = selectedColor;

      selectedColorElement.style.textAlign = "center"
    
      colorValueElement.innerText = selectedColor;
      
      try {
        await navigator.clipboard.writeText(selectedColor);
        console.log('Color copied to clipboard:', selectedColor);
      } catch (error) {
        console.error('Error copying color to clipboard:', error);
      }
    });

  });
  