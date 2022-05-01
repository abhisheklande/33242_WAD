const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    const data = JSON.parse(this.responseText);
    const element = document.getElementById("table");
    console.log(data);
    let html = "";
    data.forEach((ele, index) => {
      html += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${ele.email}</td>
        <td>${ele.password}</td>
        <td>${ele.name}</td>
      </tr>`;
    });
    element.innerHTML = html;
  }
};

xhttp.open("GET", "https://622855af9fd6174ca820a2b8.mockapi.io/users", true);
xhttp.send();
