import loadData from "./data";

let intervalId;
let tableElement;

document.addEventListener("DOMContentLoaded", () => {
  tableElement = document.querySelector("table");
  if (!tableElement) {
    alert("Не найден элемент table. Работа программы будет завершена!");
    return;
  }
  rendererData(getData());
});

function getData() {
  try {
    return loadData();
  } catch (e) {
    alert("Ошибка загрузки данных " + e);
  }
}

function rendererData(data) {
  const json = JSON.parse(data);
  for (const trData of json) {
    const trElement = createTrElement(trData);
    tableElement.appendChild(trElement);
    trElement.appendChild(createTdElement("#" + trData.id));
    trElement.appendChild(createTdElement(trData.title));
    trElement.appendChild(createTdElement("(" + trData.year + ")"));
    trElement.appendChild(createTdElement("imdb: " + trData.imdb));
  }
}

function createTrElement(rowData) {
  const trElement = document.createElement("tr");

  trElement.dataset.id = rowData.id;
  trElement.dataset.imdb = rowData.imdb;
  trElement.dataset.title = rowData.title;
  trElement.dataset.year = rowData.year;

  return trElement;
}

function createTdElement(str) {
  const tdElement = document.createElement("td");
  tdElement.textContent = str;
  return tdElement;
}