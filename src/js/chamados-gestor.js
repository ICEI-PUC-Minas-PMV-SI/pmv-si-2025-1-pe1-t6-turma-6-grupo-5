// Load existing chamados from localStorage or start with an empty array
let chArray = localStorage.getItem('chamados') ? JSON.parse(localStorage.getItem('chamados')) : [];
let users = JSON.parse(localStorage.getItem('users')) || []

const managerName = document.getElementById('gestor-nome')

managerName.innerHTML = `${getCurrentUser().name.split(" ")[0]}`

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

        const itemTelCheck = document.createElement('p');
        itemTelCheck.textContent = `${chamados.tel}`

        const boxStatusForm = document.createElement('div');

        const itemStatus = document.createElement('p');
        itemStatus.textContent = `${chamados.status}`;

        const itemForm = document.createElement('form');

        const itemFormBox = document.createElement('div');

        const itemFormLabel = document.createElement('label');
        itemFormLabel.textContent = "ALTERAR STATUS";

        const itemFormSel = document.createElement('select');

        const itemFormOpD = document.createElement('option');
        itemFormOpD.textContent = "Selecione";

        const itemFormOp1 = document.createElement('option');
        itemFormOp1.textContent = "EM ABERTO";

        const itemFormOp2 = document.createElement('option');
        itemFormOp2.textContent = "EM ANDAMENTO";

        const itemFormOp3 = document.createElement('option');
        itemFormOp3.textContent = "REALIZADO";

        const itemFormSubmit = document.createElement('button');
        itemFormSubmit.textContent = "CONFIRMAR";

        listCh.appendChild(itemChBox);
        itemChBox.appendChild(itemProbDateBox);
        itemProbDateBox.appendChild(itemProb);
        itemProbDateBox.appendChild(itemDate);
        itemChBox.appendChild(itemDescLocal);
        if (itemTelCheck.textContent !== "") {
            const itemTel = document.createElement('p');
            itemTel.textContent = `Número para contato: ${chamados.tel}`;
            itemChBox.appendChild(itemTel);
            itemTel.classList.add('tel_Ch')
        }
        itemChBox.appendChild(boxStatusForm);
        boxStatusForm.appendChild(itemStatus);
        boxStatusForm.appendChild(itemForm);
        itemForm.appendChild(itemFormBox);
        itemFormBox.appendChild(itemFormLabel);
        itemFormBox.appendChild(itemFormSel);
        itemFormSel.appendChild(itemFormOpD);
        itemFormSel.appendChild(itemFormOp1);
        itemFormSel.appendChild(itemFormOp2);
        itemFormSel.appendChild(itemFormOp3);
        itemFormBox.appendChild(itemFormSubmit);

        itemFormSubmit.classList.add('btn-new-account');
        itemFormSubmit.type = 'submit';
        itemForm.id = `${index}`;
        itemFormSel.name = "status";
        itemFormSel.classList.add('formSelector')
        itemFormOpD.setAttribute('disabled', '');
        itemFormOpD.setAttribute('selected', '');
        itemFormOpD.setAttribute('hidden', '');
        itemDescLocal.classList.add('desc_Ch');
        itemForm.classList.add('statusForm');
        itemChBox.classList.add('box_ch');
        itemFormLabel.classList.add('formLabel')
        itemProbDateBox.classList.add('probDateBox');
        boxStatusForm.classList.add('boxStatusForm');
        itemProb.classList.add('problem_Ch');
        itemDate.classList.add('date_Ch');

        if (itemStatus.textContent === "REPORTADO" || itemStatus.textContent === "EM ABERTO") {
            itemStatus.classList.add("statusRepOpen");
        } else if (itemStatus.textContent === "EM ANDAMENTO") {
            itemStatus.classList.add("statusRepProgress");
        } else if (itemStatus.textContent === "REALIZADO") {
            itemStatus.classList.add("statusRepClosed");
        }

    });
    const forms = document.querySelectorAll('.statusForm');

    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            const chId = event.target.id;
            console.log(chId);
            // Get the selected value from this form's <select>
            const selectedStatus = this.querySelector('select[name="status"]').value;

            chArray[chId].status = selectedStatus;
            localStorage.setItem('chamados', JSON.stringify(chArray));

            console.log(chArray);
            renderChamados();
        });
    });
}

function getCurrentUser(){
    const [user] = users.filter((user) => {
        return user.session === true
    })

    return user
}

console.log(chArray);