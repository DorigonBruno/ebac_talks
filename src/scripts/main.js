AOS.init();

const dateEvent = new Date("May 10, 2024 19:00:00");

const timeStampEvent = dateEvent.getTime();

const countHours = setInterval(() => {
  const dateNow = new Date();

  const timeStampNow = dateNow.getTime();

  const eventDistance = timeStampEvent - timeStampNow;

  const dayMS = 1000 * 60 * 60 * 24;
  const hoursMS = 1000 * 60 * 60;
  const minutesMS = 1000 * 60;

  const dayToEvent = Math.floor(eventDistance / dayMS);
  const hoursToEvent = Math.floor((eventDistance % dayMS) / hoursMS);
  const minutesToEvent = Math.floor((eventDistance % hoursMS) / minutesMS);
  const secondsToEvent = Math.floor((eventDistance % minutesMS) / 1000);

  const span = document.querySelector("#contador");

  span.innerHTML = `${dayToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

  if (eventDistance < 0) {
    clearInterval(countHours);
    span.innerHTML = "Evento Expirado"
  }
}, 1000);
