document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
 
  event.preventDefault();

  const input = form.querySelector("input[type='text']");
  const task = input.value;

  console.log("New Task:", task);

  input.value = "";
});

