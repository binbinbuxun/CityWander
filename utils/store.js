const STORAGE_KEY = 'saved_items';
const AUTH_KEY = 'city_wander_authorized';
const USER_KEY = 'city_wander_user';

function getSavedItems() {
  const items = wx.getStorageSync(STORAGE_KEY);
  return Array.isArray(items) ? items : [];
}

function getUserProfile() {
  return wx.getStorageSync(USER_KEY) || null;
}

function isAuthorized() {
  return !!(wx.getStorageSync(AUTH_KEY) && wx.getStorageSync(USER_KEY));
}

function ensureAuthorized() {
  return new Promise((resolve) => {
    if (isAuthorized()) {
      resolve(true);
      return;
    }

    wx.showModal({
      title: '登录后收藏',
      content: '需要获取你的微信头像和昵称，用于将书签与你的账号关联。',
      confirmText: '微信登录',
      success(res) {
        if (!res.confirm) {
          resolve(false);
          return;
        }

        // 使用 wx.getUserProfile 获取真实用户信息
        wx.getUserProfile({
          desc: '用于保存您的城市书签',
          success(profileRes) {
            const userInfo = profileRes.userInfo;
            wx.setStorageSync(AUTH_KEY, true);
            wx.setStorageSync(USER_KEY, userInfo);
            resolve(true);
          },
          fail() {
            wx.showToast({
              title: '需要授权才能使用书签功能',
              icon: 'none'
            });
            resolve(false);
          }
        });
      },
      fail() {
        resolve(false);
      }
    });
  });
}

function logout() {
  wx.removeStorageSync(AUTH_KEY);
  wx.removeStorageSync(USER_KEY);
}

function isItemSaved(payload) {
  return getSavedItems().some(
    (item) =>
      item.type === payload.type &&
      item.cityId === payload.cityId &&
      item.itemId === payload.itemId
  );
}

function toggleSavedItem(payload) {
  const current = getSavedItems();
  const index = current.findIndex(
    (item) =>
      item.type === payload.type &&
      item.cityId === payload.cityId &&
      item.itemId === payload.itemId
  );

  let next = current.slice();
  let saved = false;

  if (index > -1) {
    next.splice(index, 1);
  } else {
    next.unshift({
      ...payload,
      savedAt: Date.now()
    });
    saved = true;
  }

  wx.setStorageSync(STORAGE_KEY, next);
  return {
    saved,
    items: next
  };
}

module.exports = {
  getSavedItems,
  getUserProfile,
  isAuthorized,
  ensureAuthorized,
  logout,
  isItemSaved,
  toggleSavedItem
};
