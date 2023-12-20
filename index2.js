let userName = JSON.parse(localStorage.getItem("name"));
let userAge = JSON.parse(localStorage.getItem("age"));
let root = document.getElementById("root");
// table head creation
let table = document.createElement("table");
let thead = document.createElement("thead");
let tRow = document.createElement("tr");
let tData = document.createElement("td");
tData.textContent = "Name";
let tData1 = document.createElement("td");
tData1.textContent = "Age";
tRow.append(tData, tData1);
thead.append(tRow);

// table body creation

let tBody = document.createElement("tbody");
let tRow1 = document.createElement("tr");
let tbData2 = document.createElement("td");
tbData2.textContent = userName;
let tbData3 = document.createElement("td");
tbData3.textContent = userAge;
tRow1.append(tbData2, tbData3);
tBody.append(tRow1);

table.append(thead, tBody);
root.append(table);
