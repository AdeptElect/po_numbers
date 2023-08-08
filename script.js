let startingNumber = 4880001;
let poList = [];

function generatePO() {
    const dropdown = document.getElementById("dropdownMenu");
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;
    const resultElement = document.getElementById("result");

    const newPO = `${selectedOption}-${startingNumber}`;
    resultElement.textContent = newPO;

    addToCSV(newPO);
    startingNumber++;

    showModal();
}

function addToCSV(newPO) {
    poList.push(newPO);
}

function downloadCSV() {
    const csvContent = "data:text/csv;charset=utf-8," + poList.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "po_list.csv");
    document.body.appendChild(link);
    link.click();
}

function showModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
