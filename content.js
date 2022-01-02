
window.addEventListener('keyup', function (e) {
  if (e.ctrlKey && e.key === 'Enter') {
    const buttons = [...document.querySelectorAll('button[type=submit]:not([disabled])')].filter(el => el.getClientRects()[0].top >= 0)
    if (buttons.length > 0) {
      buttons[0].click()
    }
  }
})
