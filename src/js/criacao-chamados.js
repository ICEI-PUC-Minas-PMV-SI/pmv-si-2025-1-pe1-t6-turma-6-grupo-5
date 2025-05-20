// Load existing chamados from localStorage or start with an empty array
let chArray = localStorage.getItem('chamados') ? JSON.parse(localStorage.getItem('chamados')) : [];

// Get the form
const formCh = document.getElementById('chForm');
const listCh = document.getElementById('chamadoList');

// Listen for form submission
formCh.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Store the date in "DD de Mês de YYYY" format
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('pt-BR', { month: 'long' });
    const year = today.getFullYear();
    const formattedDate = `${day} de ${month} de ${year}`;

    // Create a new chamado object with form input values
    const newChamado = {
        "problema": formCh.chProblem.value,
        "local": formCh.chLocal.value,
        "descricao": formCh.chDesc.value,
        "tel": formCh.chTel.value,
        "data": formattedDate,
        "status": "REPORTADO"
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
