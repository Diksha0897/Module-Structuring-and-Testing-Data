function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Answer: pad will be called 3 times.
// Reason: Once for hours, once for minutes, and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// Answer: num = 0
// Reason: totalHours = 0 because 61 seconds is less than 1 hour.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// Answer: "00"
// Reason: pad(0) converts 0 to string "0" and padStart(2, "0") makes it "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer: num = 1
// Reason: The last call to pad is for remainingSeconds. 61 seconds has 1 second remaining (61 % 60 = 1).

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer: "01"
// Reason: pad(1) converts 1 to "1" and padStart(2, "0") makes it "01".
