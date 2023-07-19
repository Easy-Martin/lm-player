export default function nextTick(fn: () => void) {
  setTimeout(fn, 10);
}
