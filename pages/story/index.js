const { getCityById } = require('../../utils/data');
const {
  ensureAuthorized,
  isItemSaved,
  toggleSavedItem
} = require('../../utils/store');

Page({
  data: {
    city: null,
    story: null,
    saved: false,
    pulse: false,
    bookmarkClass: 'bookmark-button'
  },

  onLoad(options) {
    this.cityId = options.cityId;
    this.loadStory();
  },

  onShow() {
    this.syncSavedState();
  },

  loadStory() {
    const city = getCityById(this.cityId);
    if (!city) {
      return;
    }

    this.setData({
      city,
      story: city.story
    });
    this.syncSavedState();
  },

  syncSavedState() {
    const { city, story } = this.data;
    if (!city || !story) {
      return;
    }

    const saved = isItemSaved({
      type: 'story',
      cityId: city.id,
      itemId: story.id
    });

    this.setBookmarkState(saved, this.data.pulse);
  },

  handleToggleSaved() {
    const { city, story } = this.data;
    if (!city || !story) {
      return;
    }

    ensureAuthorized().then((allowed) => {
      if (!allowed) {
        return;
      }

      const result = toggleSavedItem({
        type: 'story',
        cityId: city.id,
        itemId: story.id
      });

      this.setBookmarkState(result.saved, true);

      setTimeout(() => {
        this.setBookmarkState(result.saved, false);
      }, 240);

      wx.showToast({
        title: result.saved ? '已加入书签' : '已移出书签',
        icon: 'none'
      });
    });
  },

  setBookmarkState(saved, pulse) {
    const bookmarkClass = [
      'bookmark-button',
      saved ? 'bookmark-button--saved' : '',
      pulse ? 'is-pulse' : ''
    ]
      .filter(Boolean)
      .join(' ');

    this.setData({
      saved,
      pulse,
      bookmarkClass
    });
  }
});
