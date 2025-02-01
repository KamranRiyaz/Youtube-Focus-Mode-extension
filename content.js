function hideDistractions() { 
  // Hide Shorts link in the left sidebar
  const shortsLink = document.querySelector('a[title="Shorts"]');
  if (shortsLink) {
    shortsLink.style.display = 'none';
  }

  //hide the comment section below the player
  const comments = document.getElementById('comments');
    if (comments) {
      comments.style.display = 'none';
    }

  //hide related videos sidebar
  const relatedVideos = document.getElementById('related');
    if (relatedVideos) {
      relatedVideos.style.display = 'none';
    }

  //hide the end screen suggestions after completing a vid
  const endScreens = document.getElementsByClassName('ytp-ce-element');
    for (let i = 0; i < endScreens.length; i++) {
      endScreens[i].style.display = 'none';
    }

  //hide home page recommended feed
  const homeFeed = document.querySelector('ytd-two-column-browse-results-renderer');
    if (homeFeed) {
      homeFeed.style.display = 'none';
    }
}

hideDistractions();
  
  // Re-run the function when the page content changes (due to YouTube's dynamic loading)
  const observer = new MutationObserver(hideDistractions);
  observer.observe(document.body, { childList: true, subtree: true });
  