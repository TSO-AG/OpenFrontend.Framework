export default els => {
  for (const el of els) {
    const video = el.querySelector('video')

    if (!video) {
      return
    }

    video.addEventListener('click', () => {
      if (video.paused) {
        video.play()
        el.classList.add('video-is-played')
      } else {
        video.pause()
        el.classList.remove('video-is-played')
      }
    })

    video.addEventListener('ended', () => {
      el.classList.remove('video-is-played')
    })
  }
}
