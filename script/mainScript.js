// live date add
document.getElementById("dayDate").innerText = liveDate;

// card Itmes date
document.getElementById("taskDate1").innerText = liveDate;
document.getElementById("taskDate2").innerText = liveDate;
document.getElementById("taskDate3").innerText = liveDate;
document.getElementById("taskDate4").innerText = liveDate;
document.getElementById("taskDate5").innerText = liveDate;
document.getElementById("taskDate6").innerText = liveDate;

const btn = document
  .getElementById("cardBTN1")
  .addEventListener("click", function () {
    alert("ShopEase btn click");
    const taskMinersNun = getIdToInnerTextValue("tasksNum");
    const clickBtnTask = taskMinersNun - 1;
    document.getElementById("tasksNum").innerText = clickBtnTask;
    const taskTotal = getIdToInnerTextValue("taskTotal");
    const tasktoatlResult = taskTotal + 1;
    document.getElementById("taskTotal").innerText = tasktoatlResult;

    // aikhane ses korsilam kintu aj kono kaj korte pari nai osusto

    const section = document.createElement("section");
    const div = document.getElementById("logsHistory");
    section.innerHTML = `
    <section class="rounded-e-lg bg-slate-300 p-2 my-4">
          <p>You Completed the Task Fix Mobile Button At</p>
        </section>
    `;
    div.appendChild(section);

    const disabeBtn = document.getElementById("cardBTN1");
    disabeBtn.disabled = true;
  });

const btn2 = document
  .getElementById("cardBTN2")
  .addEventListener("click", function () {
    alert("ShopEase btn click");
    const taskMinersNun = getIdToInnerTextValue("tasksNum");
    const clickBtnTask = taskMinersNun - 1;
    document.getElementById("tasksNum").innerText = clickBtnTask;
    const taskTotal = getIdToInnerTextValue("taskTotal");
    const tasktoatlResult = taskTotal + 1;
    document.getElementById("taskTotal").innerText = tasktoatlResult;

    const section = document.createElement("section");
    const div = document.getElementById("logsHistory");
    section.innerHTML = `
    <section class="rounded-e-lg bg-slate-300 p-2 my-4">
          <p>You Completed the Task Add Dark Mode At</p>
        </section>
    `;
    div.appendChild(section);
    const disabeBtn = document.getElementById("cardBTN2");
    disabeBtn.disabled = true;
  });

const btn3 = document
  .getElementById("cardBTN3")
  .addEventListener("click", function () {
    alert("ShopEase btn click");
    const taskMinersNun = getIdToInnerTextValue("tasksNum");
    const clickBtnTask = taskMinersNun - 1;
    document.getElementById("tasksNum").innerText = clickBtnTask;
    const taskTotal = getIdToInnerTextValue("taskTotal");
    const tasktoatlResult = taskTotal + 1;
    document.getElementById("taskTotal").innerText = tasktoatlResult;

    const section = document.createElement("section");
    const div = document.getElementById("logsHistory");
    section.innerHTML = `
    <section class="rounded-e-lg bg-slate-300 p-2 my-4">
          <p>You Completed the Task Optimize Page At</p>
        </section>
    `;
    div.appendChild(section);
    const disabeBtn = document.getElementById("cardBTN3");
    disabeBtn.disabled = true;
  });

const btn4 = document
  .getElementById("cardBTN4")
  .addEventListener("click", function () {
    alert("ShopEase btn click");
    const taskMinersNun = getIdToInnerTextValue("tasksNum");
    const clickBtnTask = taskMinersNun - 1;
    document.getElementById("tasksNum").innerText = clickBtnTask;
    const taskTotal = getIdToInnerTextValue("taskTotal");
    const tasktoatlResult = taskTotal + 1;
    document.getElementById("taskTotal").innerText = tasktoatlResult;

    const section = document.createElement("section");
    const div = document.getElementById("logsHistory");
    section.innerHTML = `
    <section class="rounded-e-lg bg-slate-300 p-2 my-4">
          <p>You Completed the Task Add new emoji At</p>
        </section>
    `;
    div.appendChild(section);

    const disabeBtn = document.getElementById("cardBTN4");
    disabeBtn.disabled = true;
  });

const btn5 = document
  .getElementById("cardBTN5")
  .addEventListener("click", function () {
    alert("ShopEase btn click");
    const taskMinersNun = getIdToInnerTextValue("tasksNum");
    const clickBtnTask = taskMinersNun - 1;
    document.getElementById("tasksNum").innerText = clickBtnTask;
    const taskTotal = getIdToInnerTextValue("taskTotal");
    const tasktoatlResult = taskTotal + 1;
    document.getElementById("taskTotal").innerText = tasktoatlResult;

    const section = document.createElement("section");
    const div = document.getElementById("logsHistory");
    section.innerHTML = `
    <section class="rounded-e-lg bg-slate-300 p-2 my-4">
          <p>You Completed the Task Integrate OpenAI API At</p>
        </section>
    `;
    div.appendChild(section);

    const disabeBtn = document.getElementById("cardBTN5");
    disabeBtn.disabled = true;
  });

const btn6 = document
  .getElementById("cardBTN6")
  .addEventListener("click", function () {
    alert("ShopEase btn click");
    const taskMinersNun = getIdToInnerTextValue("tasksNum");
    const clickBtnTask = taskMinersNun - 1;
    document.getElementById("tasksNum").innerText = clickBtnTask;
    const taskTotal = getIdToInnerTextValue("taskTotal");
    const tasktoatlResult = taskTotal + 1;
    document.getElementById("taskTotal").innerText = tasktoatlResult;
    const section = document.createElement("section");
    const div = document.getElementById("logsHistory");
    section.innerHTML = `
    <section class="rounded-e-lg bg-slate-300 p-6 my-4">
          <p>You Completed the Task Integrate Glassdoar At</p>
        </section>
    `;
    div.appendChild(section);
    const disabeBtn = document.getElementById("cardBTN6");
    disabeBtn.disabled = true;
  });

// next page button er javaScript

document.getElementById("newDayBTN").addEventListener("click", function () {
  window.location.href = "newDay.html";
});

// clear act er btn

document.getElementById("clearBTN").addEventListener("click", function () {
  const div = document.getElementById("logsHistory");
  div.innerHTML = ``;
});

document.getElementById("bgBTN").addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = randomColor;
});
