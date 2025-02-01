
function hideDistractions() {
    // Hide comments section
    const comments = document.getElementById('comments');
    if (comments) {
      comments.style.display = 'none';
    }
  
    // Hide related videos sidebar
    const relatedVideos = document.getElementById('related');
    if (relatedVideos) {
      relatedVideos.style.display = 'none';
    }
  
    // Hide end screen video suggestions
    const endScreens = document.getElementsByClassName('ytp-ce-element');
    for (let i = 0; i < endScreens.length; i++) {
      endScreens[i].style.display = 'none';
    }
  
    // Hide homepage recommendations
    const homeFeed = document.querySelector('ytd-two-column-browse-results-renderer');
    if (homeFeed) {
      homeFeed.style.display = 'none';
    }
  }

  
  // Re-run the function when the page content changes (due to YouTube's dynamic loading)
  const observer = new MutationObserver(hideDistractions);
  observer.observe(document.body, { childList: true, subtree: true });
  