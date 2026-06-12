const { getCityById } = require('../../utils/data');
const {
  ensureAuthorized,
  isItemSaved,
  toggleSavedItem
} = require('../../utils/store');

function decorateFoodItem(item, cityId, pulseId) {
  const saved = isItemSaved({
    type: 'food',
    cityId,
    itemId: item.id
  });

  return {
    ...item,
    tagLine: item.tags.join('  |  '),
    saved,
    buttonClass: [
      'bookmark-button',
      'food-card__bookmark',
      saved ? 'bookmark-button--saved' : '',
      pulseId === item.id ? 'is-pulse' : ''
    ]
      .filter(Boolean)
      .join(' ')
  };
}

Page({
  data: {
    city: null,
    delicacies: [],
    restaurants: [],
    allFoods: [],
    pulseId: ''
  },

  onLoad(options) {
    this.cityId = options.cityId;
    this.loadFoods();
  },

  onShow() {
    this.syncSavedState();
  },

  loadFoods() {
    const city = getCityById(this.cityId);
    if (!city) {
      return;
    }

    const allFoods = city.food.map((item) => decorateFoodItem(item, city.id, this.data.pulseId));
    this.setData({
      city,
      allFoods,
      delicacies: allFoods.filter((item) => item.category === '美食'),
      restaurants: allFoods.filter((item) => item.category === '餐厅')
    });
  },

  syncSavedState() {
    const { city, allFoods } = this.data;
    if (!city || !allFoods.length) {
      return;
    }

    const updated = allFoods.map((item) => decorateFoodItem(item, city.id, this.data.pulseId));
    this.setData({
      allFoods: updated,
      delicacies: updated.filter((item) => item.category === '美食'),
      restaurants: updated.filter((item) => item.category === '餐厅')
    });
  },

  handleToggleSaved(event) {
    const { itemId } = event.currentTarget.dataset;
    const { city } = this.data;

    ensureAuthorized().then((allowed) => {
      if (!allowed) {
        return;
      }

      const result = toggleSavedItem({
        type: 'food',
        cityId: city.id,
        itemId
      });

      const updated = this.data.allFoods.map((item) =>
        decorateFoodItem(
          {
            ...item,
            saved: item.id === itemId ? result.saved : item.saved
          },
          city.id,
          itemId
        )
      );

      this.setData({
        pulseId: itemId,
        allFoods: updated,
        delicacies: updated.filter((item) => item.category === '美食'),
        restaurants: updated.filter((item) => item.category === '餐厅')
      });

      setTimeout(() => {
        const reset = updated.map((item) => decorateFoodItem(item, city.id, ''));
        this.setData({
          pulseId: '',
          allFoods: reset,
          delicacies: reset.filter((item) => item.category === '美食'),
          restaurants: reset.filter((item) => item.category === '餐厅')
        });
      }, 240);

      wx.showToast({
        title: result.saved ? '已加入书签' : '已移出书签',
        icon: 'none'
      });
    });
  }
});
