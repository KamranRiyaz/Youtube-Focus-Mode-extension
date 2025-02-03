function hideDistractions(preferences) {
  //when extension is disabled, just return
  if(!preferences.isEnabled) {
    return;
  }

  // Hide Shorts link in the left sidebar
  const shortsLink = document.querySelector('a[title="Shorts"]');
  if (shortsLink) {
    shortsLink.style.display = 'none';
  }

  //hide the comment section below the player
  if(preferences.hideComments) {
    const comments = document.getElementById('comments');
    if (comments) {
      comments.style.display = 'none';
    }
  }

  //hide related videos sidebar
  if(preferences.hideRelatedVideos){
    const relatedVideos = document.getElementById('related');
    if (relatedVideos) {
      relatedVideos.style.display = 'none';
    }
  }

  //hide home page recommended feed
  if(preferences.hideHomeFeed){
    const homeFeed = document.querySelector('ytd-two-column-browse-results-renderer');
    if (homeFeed) {
      homeFeed.style.display = 'none';
    }
  }


  //hide sidebar ads
  const sidebarAds = document.getElementById('secondary');
    if (sidebarAds) {
      sidebarAds.style.display = 'none';
    }

  //hide merch ads below the video description

  //hide the end screen suggestions after completing a vid
  const endScreens = document.getElementsByClassName('ytp-ce-element');
    for (let i = 0; i < endScreens.length; i++) {
      endScreens[i].style.display = 'none';
    }
}

//load default preferences and apply
chrome.storage.sync.get({
  isEnabled: true,
  hideComments: true,
  hideHomeFeed: true,
  hideRelatedVideos: true
}, (preferences) => {
  observeAndHide(preferences);

  //Listen for preference changes
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync') {
      //Update preferences with any changes
      for(let key in changes) {
        preferences[key] = changes[key].values;
      }
      //reapply changes
      observeAndHide(preferences);
    }
  });
});

function observeAndHide(preferences){
  hideDistractions(preferences);

  //observe changes to the page
  const observer = new MutationObserver(() => hideDistractions(preferences));
  observer.observe(document.body, {childList:true, subtree:true});
}