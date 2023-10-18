let screen = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let equal = document.querySelector("button[value='=']");
let body = document.querySelector("body");

screen.addEventListener("input", function () {
  screen.setAttribute("value", `${screen.value}`);
});

body.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    equal.click();
  }
});

buttons.forEach((button) => {
  button.onclick = () => {
    if (button.getAttribute("value") === "C") {
      screen.setAttribute("value", "");
      screen.value = screen.getAttribute("value");
    } else if (button.getAttribute("value") !== "=") {
      screen.setAttribute(
        "value",
        `${screen.getAttribute("value") + button.getAttribute("value")}`
      );
      screen.value = screen.getAttribute("value");
    } else {
      screen.setAttribute("value", `${eval(screen.getAttribute("value"))}`);
      screen.value = screen.getAttribute("value");
    }
  };
});
