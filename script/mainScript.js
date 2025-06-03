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
    const disabeBtn = document.getElementById("cardBTN6");
    disabeBtn.disabled = true;
  });
