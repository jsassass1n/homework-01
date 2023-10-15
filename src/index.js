import rainAudio from "./assets/sounds/rain.mp3";
import winterAudio from "./assets/sounds/winter.mp3";
import summerAudio from "./assets/sounds/summer.mp3";
import "./styles/index.scss";

const body = document.querySelector("body");
const audios = document.querySelector(".audios");
const volume = document.querySelector(".volume");
const audio = document.createElement("audio");

let currentAudio = "";
body.className = "rainy-bg";
audios.addEventListener("click", (e) => {
  const status = e.target.dataset.audio;

  if (!status) return;

  if (currentAudio === status) {
    audio.pause();
    currentAudio = "";
    return;
  }
  currentAudio = status;
  if (status === "rain") {
    audio.setAttribute("src", rainAudio);
    body.className = "rainy-bg";
  } else if (status === "summer") {
    audio.setAttribute("src", summerAudio);
    body.className = "summer-bg";
  } else {
    audio.setAttribute("src", winterAudio);
    body.className = "winter-bg";
  }

  if (status) {
    audio.play();
  }
});

volume.addEventListener("input", (e) => {
  audio.volume = Number(e.target.value) / 100;
});
