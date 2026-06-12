const { getCitySummaries } = require('../../utils/data');
const { getNavLayout } = require('../../utils/nav');

function getDailySeedIndex(length) {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const day = Math.floor((now - start) / 86400000);
  return length ? day % length : 0;
}

function getDailyCities() {
  const cities = getCitySummaries();
  const seedIndex = getDailySeedIndex(cities.length);

  if (!cities.length) {
    return [];
  }

  return [cities[seedIndex], ...cities.filter((_, index) => index !== seedIndex)];
}

Page({
  data: {
    cities: [],
    currentIndex: 0,
    drawerVisible: false,
    drawerClass: 'drawer-overlay',
    nav: {
      statusBarHeight: 20,
      contentHeight: 32,
      bottomGap: 8,
      capsuleWidth: 96
    }
  },

  onLoad() {
    this.setData({
      cities: getDailyCities(),
      nav: getNavLayout()
    });
  },

  handleSwiperChange(event) {
    this.setData({
      currentIndex: event.detail.current
    });
  },

  openDrawer() {
    this.setData({
      drawerVisible: true,
      drawerClass: 'drawer-overlay drawer-overlay--open'
    });
  },

  closeDrawer() {
    this.setData({
      drawerVisible: false,
      drawerClass: 'drawer-overlay'
    });
  },

  preventDrawerClose() {},

  handleExplore() {
    const city = this.data.cities[this.data.currentIndex];
    if (!city) {
      return;
    }

    wx.navigateTo({
      url: `/pages/city/index?cityId=${city.id}`
    });
  },

  handleCoverError(event) {
    const { index } = event.currentTarget.dataset;
    const cities = this.data.cities.slice();
    const target = cities[index];

    if (!target || !target.heroImage || target.coverImage === target.heroImage) {
      return;
    }

    target.coverImage = target.heroImage;
    this.setData({
      cities
    });
  },

  handleDrawerTouchStart(event) {
    this.drawerTouchStart = event.touches[0];
  },

  handleDrawerTouchEnd(event) {
    if (!this.drawerTouchStart) {
      return;
    }

    const current = event.changedTouches[0];
    const deltaX = current.clientX - this.drawerTouchStart.clientX;
    const deltaY = current.clientY - this.drawerTouchStart.clientY;

    if (deltaX < -80 && Math.abs(deltaY) < 60) {
      this.closeDrawer();
    }

    this.drawerTouchStart = null;
  },

  goToCity(event) {
    const { cityId } = event.currentTarget.dataset;
    this.closeDrawer();
    wx.navigateTo({
      url: `/pages/city/index?cityId=${cityId}`
    });
  },

  goToSaved() {
    this.closeDrawer();
    wx.navigateTo({
      url: '/pages/saved/index'
    });
  }
});
