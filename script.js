const CHECKMARK = '<svg viewBox="0 0 22 22" aria-label="Verified account" role="img" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>';
const LOCK_DARK = '<svg viewBox="0 0 24 24" aria-label="Protected account" role="img" class="r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr" data-testid="icon-lock"><g><path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path></g></svg>';
const LOCK_LIGHT = '<svg viewBox="0 0 24 24" aria-label="Protected account" role="img" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr" data-testid="icon-lock"><g><path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path></g></svg>';

console.log('1234TEST')
console.log('REPLACED');
var intervalId = window.setInterval(() => {
  //In timeline
  document.querySelectorAll("[data-testId='User-Name']").forEach(node => {
    try {
      checkmarkSpot = node.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0];
      if (checkmarkSpot.innerHTML === '') {
        checkmarkSpot.innerHTML = CHECKMARK;
      } else if (checkmarkSpot.innerHTML === LOCK_LIGHT) {
        checkmarkSpot.innerHTML = `${LOCK_LIGHT} ${CHECKMARK}`
      } else if (checkmarkSpot.innerHTML === LOCK_DARK) {
        checkmarkSpot.innerHTML = `${LOCK_DARK} ${CHECKMARK}`
      } 
    } catch (error) {}
  })

  //Top of profile
  document.querySelectorAll("[data-testId='UserName']").forEach(node => {
    try {
      checkmarkSpot = node.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0];
      if (checkmarkSpot.innerHTML === '') {
        checkmarkSpot.innerHTML = CHECKMARK;
      } else if (checkmarkSpot.innerHTML === LOCK_LIGHT) {
        checkmarkSpot.innerHTML = `${LOCK_LIGHT} ${CHECKMARK}`
      } else if (checkmarkSpot.innerHTML === LOCK_DARK) {
        checkmarkSpot.innerHTML = `${LOCK_DARK} ${CHECKMARK}`
      }
    } catch (error) {}
  })

  //In hover card
  document.querySelectorAll("[data-testId='HoverCard']").forEach(node => {
    try {
      checkmarkSpot = node.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0];
      if (checkmarkSpot.innerHTML === '') {
        checkmarkSpot.innerHTML = CHECKMARK;
      } else if (checkmarkSpot.innerHTML === LOCK_LIGHT) {
        checkmarkSpot.innerHTML = `${LOCK_LIGHT} ${CHECKMARK}`
      } else if (checkmarkSpot.innerHTML === LOCK_DARK) {
        checkmarkSpot.innerHTML = `${LOCK_DARK} ${CHECKMARK}`
      }
    } catch (error) {}
  })

  //User Cells (suggestion boxes)
  document.querySelectorAll("[data-testId='UserCell']").forEach(node => {
    try {
      node.childNodes.forEach(child=>{
        if (child.childNodes.length>0) {
          checkmarkSpot = child.childNodes[1]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[1].childNodes[0];
          if (checkmarkSpot && checkmarkSpot.innerHTML === '' && checkmarkSpot) {
            checkmarkSpot.innerHTML = CHECKMARK;
          } else if (checkmarkSpot && checkmarkSpot.innerHTML === LOCK_LIGHT) {
            checkmarkSpot.innerHTML = `${LOCK_LIGHT} ${CHECKMARK}`
          } else if (checkmarkSpot && checkmarkSpot.innerHTML === LOCK_DARK) {
            checkmarkSpot.innerHTML = `${LOCK_DARK} ${CHECKMARK}`
          }
        }
      })
    } catch (error) {}
  })
}, 500);