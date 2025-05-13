// Load existing chamados from localStorage or start with an empty array
let chArray = localStorage.getItem('chamados') ? JSON.parse(localStorage.getItem('chamados')) : [];

// Get the form
const formCh = document.getElementById('chForm');
const listCh = document.getElementById('chamadoList');

// Function to update the displayed chamados list
function renderChamados() {
    listCh.innerHTML = ''; // Clear the current list

    chArray.forEach((chamados, index) => {
        const itemChBox = document.createElement('div');

        const itemProb = document.createElement('p');
        itemProb.textContent = `\n${chamados.problema}`;

        const itemDescLocal = document.createElement('p');
        itemDescLocal.textContent = `${chamados.local}. ${chamados.descricao}`;
       
        listCh.appendChild(itemChBox);
        itemChBox.appendChild(itemProb);
        itemChBox.appendChild(itemDescLocal);
        itemProb.classList.add('problem_Ch');
        itemChBox.classList.add('box_ch');
    });
}

// Listen for form submission
formCh.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Create a new chamado object with form input values
    const newChamado = {
        "problema": formCh.chProblem.value,
        "local": formCh.chLocal.value,
        "descricao": formCh.chDesc.value,
        /* "tel":formCh.chTel.value */
    };

    // Add to the array
    chArray.push(newChamado);

    // Save updated array to localStorage
    localStorage.setItem('chamados', JSON.stringify(chArray));

    // Reset the form
    formCh.reset();

    // Log or display confirmation
    console.log('Chamado saved:', newChamado);
    
});
