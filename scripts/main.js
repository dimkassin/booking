document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const tower = document.getElementById("tower");
  const floor = document.getElementById("floor");
  const room = document.getElementById("room");
  const startTime = document.getElementById("start-time");
  const endTime = document.getElementById("end-time");
  const comment = document.getElementById("comment");
  const submitBtn = form.querySelector(".submit-btn");
  const clearBtn = form.querySelector(".clear-btn");

  // Спискок этажей
  for (let i = 3; i <= 27; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    floor.add(option);
  }

  // Спискок переговорок
  for (let i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    room.add(option);
  }

  // Дата
  const startPicker = flatpickr(startTime, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
  });
  const endPicker = flatpickr(endTime, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
  });

  // Отправка формы
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      tower: tower.value,
      floor: floor.value,
      room: room.value,
      startTime: startTime.value,
      endTime: endTime.value,
      comment: comment.value,
    };

    console.log(JSON.stringify(formData));
  });

  // Очистка формы
  clearBtn.addEventListener("click", () => {
    tower.value = "";
    floor.value = "";
    room.value = "";
    startPicker.clear();
    endPicker.clear();
    comment.value = "";
  });
});