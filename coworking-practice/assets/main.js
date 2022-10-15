const init = () => {
  window.addEventListener("DOMContentLoaded", setDateIntervals);
};

init();

console.log("getCheckedOptions:", getCheckedOptions(checkboxInputs));
console.log(formatDate(getTomorrowDate()));
