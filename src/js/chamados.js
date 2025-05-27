// Load existing chamados from localStorage or start with an empty array
let chArray = localStorage.getItem('chamados') ? JSON.parse(localStorage.getItem('chamados')) : [];

// Get the form
const formCh = document.getElementById('chForm');
const listCh = document.getElementById('chamadoList');

// Function to update the displayed chamados list
function renderChamados() {
    listCh.innerHTML = ''; // Clear the current list

    // Add the elements saved in "chamados"
    chArray.forEach((chamados, index) => {
        const itemChBox = document.createElement('div');

        const itemProbDateBox = document.createElement('div');

        const itemProb = document.createElement('p');
        itemProb.textContent = `\n${chamados.problema}`;

        const itemDate = document.createElement('p');
        itemDate.textContent = `${chamados.data}`;

        const itemDescLocal = document.createElement('p');
        itemDescLocal.textContent = `${chamados.local}. ${chamados.descricao}`;

        const itemStatus = document.createElement('p');
        itemStatus.textContent = `${chamados.status}`;

        listCh.appendChild(itemChBox);
        itemChBox.appendChild(itemProbDateBox);
        itemProbDateBox.appendChild(itemProb);
        itemProbDateBox.appendChild(itemDate);
        itemChBox.appendChild(itemDescLocal);
        itemChBox.appendChild(itemStatus);
        itemChBox.classList.add('box_ch');
        itemProbDateBox.classList.add('probDateBox');
        itemProb.classList.add('problem_Ch');
        itemDate.classList.add('date_Ch');
        itemDescLocal.classList.add('desc_Ch');
        if (itemStatus.textContent === "EM ABERTO") {
            itemStatus.textContent = "REPORTADO";
            itemStatus.classList.add("statusRepOpen");
        } else if (itemStatus.textContent === "EM ANDAMENTO") {
            itemStatus.textContent = "EM ANDAMENTO";
            itemStatus.classList.add("statusRepProgress");
        } else if (itemStatus.textContent === "REALIZADO") {
            itemStatus.textContent = "REALIZADO";
            itemStatus.classList.add("statusRepClosed");
        }
    });
}

