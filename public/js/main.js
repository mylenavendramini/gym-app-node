const deleteBtn = document.querySelectorAll(".del");
const checkedButton = document.querySelectorAll(".fa-check");
const workoutComplete = document.querySelectorAll("span.completed");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteWorkout);
});

Array.from(checkedButton).forEach((el) => {
  el.addEventListener("click", markComplete);
});

Array.from(workoutComplete).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});

async function deleteWorkout() {
  const workoutId = this.parentNode.dataset.id;
  try {
    const response = await fetch("workouts/deleteWorkout", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        workoutIdFromJSFile: workoutId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
async function markComplete() {
  const workoutId = this.parentNode.dataset.id;
  try {
    const response = await fetch("workouts/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        workoutIdFromJSFile: workoutId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const workoutId = this.parentNode.dataset.id;
  try {
    const response = await fetch("workouts/markIncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        workoutIdFromJSFile: workoutId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
