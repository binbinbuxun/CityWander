const { getCityById } = require('../../utils/data');

Page({
  data: {
    city: null,
    topicCards: [],
    heroImages: []
  },

  onLoad(options) {
    const city = getCityById(options.cityId);

    if (!city) {
      wx.showToast({
        title: '未找到城市',
        icon: 'none'
      });
      wx.reLaunch({
        url: '/pages/home/index'
      });
      return;
    }

    this.setData({
      city,
      heroImages: city.heroImages || [city.heroImage, city.coverImage],
      topicCards: [
        {
          key: 'story',
          serial: '01',
          english: 'Story',
          title: '城市故事',
          blurb: city.story.excerpt,
          image: city.story.image,
          url: `/pages/story/index?cityId=${city.id}`
        },
        {
          key: 'food',
          serial: '02',
          english: 'Food',
          title: '城市风味',
          blurb: city.foodIntro,
          image: city.food[0].image,
          url: `/pages/food/index?cityId=${city.id}`
        },
        {
          key: 'scenery',
          serial: '03',
          english: 'Landscape',
          title: '城市风景',
          blurb: city.sceneryIntro,
          image: city.scenery[0].image,
          url: `/pages/scenery/index?cityId=${city.id}`
        }
      ]
    });
  },

  openTopic(event) {
    const { url } = event.currentTarget.dataset;
    wx.navigateTo({
      url
    });
  }
});
