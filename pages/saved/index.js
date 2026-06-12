const { buildSavedSections } = require('../../utils/data');
const { ensureAuthorized, getSavedItems, isAuthorized, getUserProfile, logout } = require('../../utils/store');

Page({
  data: {
    isAuthorized: false,
    userProfile: null,
    sections: [],
    totalSaved: 0
  },

  onShow() {
    this.loadSavedSections();
  },

  loadSavedSections() {
    const authorized = isAuthorized();
    const savedItems = getSavedItems();
    const sections = authorized
      ? buildSavedSections(savedItems).filter((section) => section.items.length)
      : [];

    this.setData({
      isAuthorized: authorized,
      userProfile: authorized ? getUserProfile() : null,
      sections,
      totalSaved: authorized ? savedItems.length : 0
    });
  },

  handleLogin() {
    ensureAuthorized().then((allowed) => {
      if (!allowed) {
        return;
      }

      this.loadSavedSections();
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });
    });
  },

  handleLogout() {
    const that = this;
    wx.showModal({
      title: '退出登录',
      content: '退出后书签数据将被清除，确定退出？',
      confirmText: '退出',
      success(res) {
        if (!res.confirm) {
          return;
        }
        logout();
        that.loadSavedSections();
      }
    });
  },

  openEntry(event) {
    const { url } = event.currentTarget.dataset;
    if (!url) {
      return;
    }

    wx.navigateTo({
      url
    });
  }
});
