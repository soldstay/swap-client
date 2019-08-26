import { tweened } from "svelte/motion";
import { cubicOut } from "svelte/easing";

export const askTwn = tweened(0, {
  duration: 400,
  easing: cubicOut
});

export const bidTwn = tweened(0, {
  duration: 400,
  easing: cubicOut
});
