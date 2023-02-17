import "./style.css";
import { darkMode } from "./darkmode.js";
import { animate, scroll } from "motion";

darkMode();

scroll(animate("#progress-bar", { scaleX: [0, 1] }));
