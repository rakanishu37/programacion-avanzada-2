const baseUrl = "https://utn-avanzanda2-tp5.herokuapp.com/api";

function httpRequest(method, url, data = "") {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.responseType = "json";
    if (data) {
      request.setRequestHeader("Content-Type", "application/json");
    }
    request.onload = function () {
      if (request.status == 200 || request.status == 201) {
        resolve(request.response);
      } else {
        reject(
          Error(
            "No se pudo comunicar con el servicio: " +
              request.status +
              " " +
              request.statusText
          )
        );
      }
    };
    request.onerror = function () {
      reject(Error("Problemas de internet"));
    };
    request.send(JSON.stringify(data));
  });
}

function renderTable(emplyees) {
	const tableBody = document.querySelector("#employees tbody");

  emplyees.forEach((emplyee) => {
    const row = tableBody.insertRow();
    const firstNameTd = document.createElement("td");
    row.append(firstNameTd);
    firstNameTd.innerText = emplyee.firstName;

    const lastNameTd = document.createElement("td");
    row.append(lastNameTd);
    lastNameTd.innerText = emplyee.lastName;

    const emailTd = document.createElement("td");
    row.append(emailTd);
    emailTd.innerText = emplyee.email;

    const genderTd = document.createElement("td");
    row.append(genderTd);
    genderTd.innerText = emplyee.gender;

    const lastConnectedAddressTd = document.createElement("td");
    row.append(lastConnectedAddressTd);
    lastConnectedAddressTd.innerText = emplyee.lastConnectedAddress;
  });
}

function getEmployees() {
  const request = httpRequest("GET", baseUrl + "/user");
  request.then(renderTable);
}

getEmployees();
