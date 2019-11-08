/**
 * @param {HTMLElement} el
 */
export default (el) => {
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
