document.addEventListener('DOMContentLoaded', ()=> {
    const masterToggle = document.getElementById('masterToggle');
    const commentsToggle = document.getElementById('commentsToggle');
    const homeFeedToggle = document.getElementById('homeFeedToggle');
    const relatedVideosToggle = document.getElementById('relatedVideosToggle');

    //load saved preferences
    chrome.storage.sync.get({
        isEnabled: true,
        hideComments: true,
        hideHomeFeed: true,
        hideRelatedVideos: true
    },(data) => {
        masterToggle.checked = data.isEnabled;
        commentsToggle.checked = data.hideComments;
        homeFeedToggle.checked = data.hideHomeFeed;
        relatedVideosToggle.checked = data.hideRelatedVideos;
    });

    //Save preferences when toggle change
    masterToggle.addEventListener('change', () => {
        chrome.storage.sync.set({isEnabled: masterToggle.checked});
    });
    commentsToggle.addEventListener('change', () => {
        chrome.storage.sync.set({hideComments: commentsToggle.checked});
    });
    homeFeedToggle.addEventListener('checked', () => {
        chrome.storage.sync.set({hideHomeFeed: homeFeedToggle.checked});
    });
    relatedVideosToggle.addEventListener('checked', () => {
        chrome.storage.sync.set({hideRelatedVideos: relatedVideosToggle.checked});
    });
});