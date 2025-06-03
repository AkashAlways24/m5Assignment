const liveDate = new Date().toDateString();




function getIdToInnerTextValue(ID) {
  const value = document.getElementById(ID).innerText;
  const ConvatedTextValue = parseFloat(value);
  return ConvatedTextValue;
}
