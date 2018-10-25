export const scrollToID = (anchor) => {
  const el = document.getElementById(anchor);
  window.scrollTo({ top: el.offsetTop, behavior: "smooth" })
}
