window.onload = function () {
    const startingNumber = 4880001;

    // Create dropdown
    let dropdown = document.createElement('select');
    dropdown.style.width = "300px";
    dropdown.style.height = "50px";
    dropdown.style.fontSize = "20px";
    dropdown.style.position = "absolute";
    dropdown.style.bottom = "100px";
    dropdown.style.left = "50%";
    dropdown.style.transform = "translateX(-50%)";

    // Adding options to the dropdown
    const options = ["Option1", "Option2", "Option3", "Option4"]; // Add or remove options as required
    options.forEach(option => {
        let optElement = document.createElement('option');
        optElement.value = option;
        optElement.textContent = option;
        dropdown.appendChild(optElement);
    });
    document.body.appendChild(dropdown);

    // Create button
    let button = document.createElement('button');
    button.textContent = "ADD PO";
    button.style.background = "blue";
    button.style.color = "white";
    button.style.padding = "15px 30px";
    button.style.fontSize = "20px";
    button.style.cursor = "pointer";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.marginTop = "20px";
    button.style.position = "absolute";
    button.style.bottom = "40px";
    button.style.left = "50%";
    button.style.transform = "translateX(-50%)";

    button.onmouseover = function () {
        button.style.background = "#0056b3";  // Slightly darker blue on hover
    }
    button.onmouseout = function () {
        button.style.background = "blue";  // Return to original blue color
    }

    document.body.appendChild(button);

    let currentNumber = startingNumber;

    button.onclick = function () {
        const selectedOption = dropdown.options[dropdown.selectedIndex].value;
        const newPO = `${selectedOption}-${currentNumber}`;

        // Display the newPO in a large popup
        alert(newPO);

        // Increase the current number for next PO
        currentNumber += 1;

        // Add the newPO to a local CSV (you can enhance this to save to a file or upload elsewhere)
        const csvContent = `data:text/csv;charset=utf-8,${newPO}\r\n`;
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "po_data.csv");
        document.body.appendChild(link); // Required for Firefox
        link.click();
    }
}
