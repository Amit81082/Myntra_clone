  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Set the countdown time (e.g. 1 hour from now)
  let countdownTime = 12*60 * 60; // 12 hour in seconds

  const timerElement = document.getElementById("timer");

  function updateTimer() {
    const hours = String(Math.floor(countdownTime / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((countdownTime % 3600) / 60)).padStart(2, "0");
    const seconds = String(countdownTime % 60).padStart(2, "0");

    timerElement.textContent = `${hours}h : ${minutes}m : ${seconds}s`;

    if (countdownTime > 0) {
      countdownTime--;
    } else {
      clearInterval(timerInterval);
      timerElement.textContent = "00h : 00m : 00s";
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer(); // initial call