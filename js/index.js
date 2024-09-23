document.getElementById('Create').addEventListener('click', (e) => {
    e.preventDefault()
    const inputwidth = document.getElementById('width').value;
    const inputheight = document.getElementById('height').value;
    const inputbg = document.getElementById('bg').value;
    const inputborder = document.getElementById('num').value;
    
    const box = document.querySelector('.card');

   
    box.innerHTML = `
        <div style="width: ${inputwidth}px; height: ${inputheight}px; background-color: ${inputbg}; border: ${inputborder}px solid black;">
        </div>
    `;  
});



