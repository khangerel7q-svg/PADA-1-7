function append(value) {
  if (value === "%") {
    display.innerText = eval(display.innerText) / 100;
    return;
  }

  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}
