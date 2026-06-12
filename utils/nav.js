function getNavLayout() {
  const systemInfo = wx.getSystemInfoSync();
  const statusBarHeight = systemInfo.statusBarHeight || 20;
  const menuButton = wx.getMenuButtonBoundingClientRect
    ? wx.getMenuButtonBoundingClientRect()
    : null;

  if (!menuButton) {
    return {
      statusBarHeight,
      capsuleWidth: 96,
      contentHeight: 32,
      bottomGap: 8
    };
  }

  return {
    statusBarHeight,
    capsuleWidth: menuButton.width,
    contentHeight: menuButton.height,
    bottomGap: menuButton.top - statusBarHeight
  };
}

module.exports = {
  getNavLayout
};
