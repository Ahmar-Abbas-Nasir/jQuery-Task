let container = $("#container");
let step = $(".step");
let count = $(".count");
let dateText = $(".datePara");
let trackSteps = 1;
let trackCount = 0;

const URL = "https://api.adviceslip.com/advice";

function displayDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateText.text(now.toLocaleDateString("en-US", options));
  fetchData();
}

displayDate();

function stepPlus() {
  trackSteps++;
  step.text(`Step ${trackSteps}`);
}

function stepMinus() {
  if (trackSteps > 1) {
    trackSteps--;
    step.text(`Step ${trackSteps}`);
  }
}

function countPlus() {
  if (trackSteps > 1) {
    trackCount += trackSteps;
  } else {
    trackCount++;
  }

  count.text(`Count ${trackCount}`);

  const currentDate = new Date(dateText.text());
  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + trackSteps);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateText.text(nextDay.toLocaleDateString("en-US", options));
  fetchData();
}

function countMinus() {
  if (trackSteps > 1) {
    trackCount -= trackSteps;
  } else {
    trackCount--;
  }

  count.text(`Count ${trackCount}`);

  const currentDate = new Date(dateText.text());
  const prevDay = new Date(currentDate);
  prevDay.setDate(currentDate.getDate() - trackSteps);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateText.text(prevDay.toLocaleDateString("en-US", options));
  fetchData();
}

function reset() {
  step.text("Step 1");
  trackSteps = 1;

  count.text("Count 0");
  trackCount = 0;

  displayDate();
  fetchData();
}

async function fetchData() {
  try {
    let response = await fetch(URL);
    let request = await response.json();
    $("#advice").text(request.slip.advice);
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
}