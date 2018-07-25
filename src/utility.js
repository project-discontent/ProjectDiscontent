export const scrollToID = (anchor) => {
  console.log("WHATUP")
  const el = document.getElementById(anchor);
  window.scrollTo({ top: el.offsetTop, behavior: "smooth" })
}
