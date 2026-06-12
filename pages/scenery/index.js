const { getCityById } = require('../../utils/data');
const {
  ensureAuthorized,
  isItemSaved,
  toggleSavedItem
} = require('../../utils/store');

function decorateSceneItem(item, cityId, pulseId) {
  const saved = isItemSaved({
    type: 'scenery',
    cityId,
    itemId: item.id
  });

  return {
    ...item,
    saved,
    buttonClass: [
      'bookmark-button',
      'scene-card__bookmark',
      saved ? 'bookmark-button--saved' : '',
      pulseId === item.id ? 'is-pulse' : ''
    ]
      .filter(Boolean)
      .join(' ')
  };
}

function buildGroups(city, pulseId) {
  const groups = [];
  const groupMap = {};

  city.scenery.forEach((item) => {
    if (!groupMap[item.group]) {
      groupMap[item.group] = {
        title: item.group,
        items: []
      };
      groups.push(groupMap[item.group]);
    }

    groupMap[item.group].items.push(decorateSceneItem(item, city.id, pulseId));
  });

  return groups;
}

Page({
  data: {
    city: null,
    groups: [],
    pulseId: ''
  },

  onLoad(options) {
    this.cityId = options.cityId;
    this.loadScenery();
  },

  onShow() {
    this.syncSavedState();
  },

  loadScenery() {
    const city = getCityById(this.cityId);
    if (!city) {
      return;
    }

    this.setData({
      city,
      groups: buildGroups(city, this.data.pulseId)
    });
  },

  syncSavedState() {
    const { city, groups } = this.data;
    if (!city || !groups.length) {
      return;
    }

    this.setData({
      groups: groups.map((group) => ({
        ...group,
        items: group.items.map((item) => decorateSceneItem(item, city.id, this.data.pulseId))
      }))
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
        type: 'scenery',
        cityId: city.id,
        itemId
      });

      this.setData({
        pulseId: itemId,
        groups: this.data.groups.map((group) => ({
          ...group,
          items: group.items.map((item) =>
            decorateSceneItem(
              {
                ...item,
                saved: item.id === itemId ? result.saved : item.saved
              },
              city.id,
              itemId
            )
          )
        }))
      });

      setTimeout(() => {
        this.setData({
          pulseId: '',
          groups: this.data.groups.map((group) => ({
            ...group,
            items: group.items.map((item) => decorateSceneItem(item, city.id, ''))
          }))
        });
      }, 240);

      wx.showToast({
        title: result.saved ? '已加入书签' : '已移出书签',
        icon: 'none'
      });
    });
  }
});
