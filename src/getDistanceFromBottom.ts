export default (el: HTMLElement) => {
  if (!el) {
    return
  }

  const {
    scrollTop,
    offsetHeight,
    scrollHeight,
  } = el

  return scrollHeight - offsetHeight - scrollTop
}
