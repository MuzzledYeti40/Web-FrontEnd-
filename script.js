function getData() {
  return JSON.parse(localStorage.getItem("data")) || [];
}

function saveData(data) {
  localStorage.setItem("data", JSON.stringify(data));
}

document.addEventListener("DOMContentLoaded", () => {

  // ADD
  const form = document.getElementById("addForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const value = document.getElementById("value").value;

      const data = getData();
      data.push({ name, value });

      saveData(data);
      alert("Added!");

      form.reset();
    });
  }

  // VIEW
  const list = document.getElementById("dataList");
  if (list) {
    const data = getData();
    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name}: ${item.value}`;
      list.appendChild(li);
    });
  }

  // EDIT
  const editList = document.getElementById("editList");
  if (editList) {
    const data = getData();

    data.forEach((item, index) => {
      const li = document.createElement("li");

      const input = document.createElement("input");
      input.value = item.value;

      const btn = document.createElement("button");
      btn.textContent = "Save";

      btn.onclick = () => {
        data[index].value = input.value;
        saveData(data);
        alert("Updated!");
      };

      li.textContent = item.name + ": ";
      li.appendChild(input);
      li.appendChild(btn);

      editList.appendChild(li);
    });
  }

});     