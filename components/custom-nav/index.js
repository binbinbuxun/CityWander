const { getNavLayout } = require('../../utils/nav');

Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    subtitle: {
      type: String,
      value: ''
    },
    light: {
      type: Boolean,
      value: false
    },
    showBack: {
      type: Boolean,
      value: true
    },
    transparent: {
      type: Boolean,
      value: false
    },
    fixed: {
      type: Boolean,
      value: true
    }
  },
  data: {
    statusBarHeight: 20,
    capsuleWidth: 96,
    contentHeight: 32,
    bottomGap: 8
  },
  lifetimes: {
    attached() {
      this.setData(getNavLayout());
    }
  },
  methods: {
    handleBack() {
      const pages = getCurrentPages();
      if (pages.length > 1) {
        wx.navigateBack({
          delta: 1
        });
        return;
      }

      wx.reLaunch({
        url: '/pages/home/index'
      });
    }
  }
});
