const tbody = document.querySelector('#studentTableBody');

fetch('studentData.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            tbody.innerHTML +=
                `<tr>
                    <td>${data[i]["rno"]}</td>
                    <td>${data[i]["sname"]}</td>
                    <td>${data[i]["percentage"]}</td>
                </tr>`;
        }
    })
    .catch(error => {
        console.error('Error reading JSON file:', error);
    });