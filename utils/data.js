const cities = [
  {
    id: 'tokyo',
    name: '东京',
    englishName: 'TOKYO',
    coordinates: "35°41'N 139°41'E",
    slogan: '霓虹、古书与深夜食堂并置的呼吸节奏',
    coverImage: '',
    heroImage: '',
    intro:
      '东京的迷人之处，不在于一处地标，而在于秩序与失控、孤独与热闹，总能在同一条街上同时出现。',
    story: {
      id: 'story-tokyo',
      title: '时间缝隙里的旧书店',
      subtitle: '神保町的纸页，替城市记住安静',
      image: '',
      excerpt: '旧书店的木架间，纸张氧化后的气味像东京最温柔的底噪。',
      content: [
        '沿着神保町的旧书店街慢慢走，风把书页翻出极轻的声响，像有人在很远的地方低声读诗。东京的速度在这里被悄悄调慢，玻璃门后泛黄的封面，把昭和时代的灰尘与体温一并留下。',
        '店主不急于推销，顾客也不急于离开。有人蹲在地上翻摄影集，有人抱着一册旧杂志靠在书架旁发呆。城市最锋利的现代感，在这一刻突然松开了边缘，让人看见它柔软而旧式的一面。',
        '傍晚下起细雨时，街口的暖灯亮起来。纸、木头、潮湿空气和一杯便利店热咖啡组成了东京最朴素的安慰。你会明白，所谓城市故事，从来不只写在地标上，也藏在愿意慢下来的角落里。'
      ]
    },
    food: [
      {
        id: 'food-tokyo-yakitori',
        name: '极上烧鸟',
        image: '',
        desc: '炭火与油脂在极短时间里达成默契，焦香克制，烟气却把深夜的食欲点得很亮。',
        tags: ['深夜', '炭烤', '小巷']
      },
      {
        id: 'food-tokyo-kissa',
        name: '昭和喫茶布丁',
        image: '',
        desc: '苦甜边界分明，像东京人的礼貌距离感，入口却意外柔软，带着老派喫茶店的耐心。',
        tags: ['咖啡馆', '复古', '甜点']
      }
    ],
    scenery: [
      {
        id: 'scene-tokyo-alley',
        group: '清晨的巷',
        theme: '神乐坂',
        image: '',
        caption: '石板路刚被清晨洗过，安静到能听见自行车链条轻轻转动。'
      },
      {
        id: 'scene-tokyo-rain',
        group: '雨后的街',
        theme: '涩谷',
        image: '',
        caption: '信号灯一亮，人群像被剪辑好的镜头，穿过倒映着霓虹的柏油路。'
      },
      {
        id: 'scene-tokyo-skyline',
        group: '夜色天际',
        theme: '六本木',
        image: '',
        caption: '塔尖的红色像一根缝衣针，把夜空与城市缝得更紧。'
      }
    ]
  },
  {
    id: 'shanghai',
    name: '上海',
    englishName: 'SHANGHAI',
    coordinates: "31°13'N 121°28'E",
    slogan: '石库门、霓虹与黄浦江风一起定义精致',
    coverImage: '',
    heroImage: '',
    intro:
      '上海擅长把摩登和旧时体面放在同一张桌子上，它从不大声，却始终知道怎样留下余韵。',
    story: {
      id: 'story-shanghai',
      title: '弄堂深处的晚风',
      subtitle: '一座城市真正的气质，常常藏在晾衣杆下面',
      image: '',
      excerpt: '当游客散去，上海最动人的时刻属于弄堂里那阵刚刚好的晚风。',
      content: [
        '傍晚的上海，不一定在外滩。真正让人记住的，可能是穿过一条石库门弄堂时，头顶交错的电线与晾晒床单投下的影子。空气里有饭菜香、有自行车铃声，也有楼上传来的电视机对白。',
        '这种日常感把上海的精致重新拉回地面。它不再是遥远的天际线，而是一只搪瓷杯、一方木窗、一句邻里之间自然发生的寒暄。城市的锋芒在此处褪去，留下的是格外细腻的生活纹理。',
        '夜里沿着苏州河散步，风从水面吹来，光影落在岸边建筑的边角。上海并不急着展示自己，它更像一本装帧讲究的杂志，需要你翻慢一点，才会发现每一页都留了余白。'
      ]
    },
    food: [
      {
        id: 'food-shanghai-noodle',
        name: '葱油拌面',
        image: '',
        desc: '香气并不喧闹，却层层展开，像这座城一贯的克制表达，最后在舌尖留下很长的尾音。',
        tags: ['家常', '油润', '温热']
      },
      {
        id: 'food-shanghai-dessert',
        name: '鲜肉月饼',
        image: '',
        desc: '酥皮掉落的瞬间最动人，带着热气的咸香让秋天忽然有了具体形状。',
        tags: ['现烤', '酥香', '街头']
      }
    ],
    scenery: [
      {
        id: 'scene-shanghai-lane',
        group: '清晨的巷',
        theme: '武康路',
        image: '',
        caption: '法桐把光筛成碎片，落在老洋房门口，像没说出口的旧情书。'
      },
      {
        id: 'scene-shanghai-river',
        group: '午后的河',
        theme: '苏州河',
        image: '',
        caption: '玻璃幕墙的倒影被河水打散，留下城市最柔和的一面。'
      },
      {
        id: 'scene-shanghai-bund',
        group: '夜色天际',
        theme: '外滩',
        image: '',
        caption: '江风一吹，摩登与复古都显得理直气壮。'
      }
    ]
  },
  {
    id: 'bangkok',
    name: '曼谷',
    englishName: 'BANGKOK',
    coordinates: "13°45'N 100°30'E",
    slogan: '热带湿度、寺庙金光和街头烟火混成一首快歌',
    coverImage: '',
    heroImage: '',
    intro:
      '曼谷不讲究循序渐进，它把香料、拥堵、金色塔尖与夜色同时推到你面前，让感官迅速过载。',
    story: {
      id: 'story-bangkok',
      title: '湄南河边的慢镜头',
      subtitle: '在最喧闹的城市里，也能找到潮湿而安静的停顿',
      image: '',
      excerpt: '曼谷的安静，总是在最不经意的折返里出现。',
      content: [
        '白天的曼谷像一首节拍过密的歌，街头摩托、冰块碰撞杯壁的声响、餐车锅铲的节奏，全都在往前赶。可一到黄昏，湄南河边的风吹起来，城市忽然松了口气。',
        '河对岸的寺庙在光线里慢慢变金，游船拖着细长的水纹经过。你坐在码头的木椅上，闻见潮湿空气和甜甜的椰奶味，终于意识到，曼谷最迷人的并不是热闹本身，而是热闹过后那一点温柔的余震。',
        '夜晚再回到街头，霓虹依旧，油锅依旧，人群依旧。只是当你心里留住了河边那阵风之后，整个城市都显得更立体了。它不再只是感官冲击，而是带着呼吸的日常。'
      ]
    },
    food: [
      {
        id: 'food-bangkok-skewer',
        name: '街头烤串',
        image: '',
        desc: '甜、辣、烟熏味一层叠一层，像把整条街的热闹都收进一支竹签。',
        tags: ['夜市', '香料', '炭火']
      },
      {
        id: 'food-bangkok-mango',
        name: '芒果糯米饭',
        image: '',
        desc: '椰浆让甜味更圆润，热带果香则把这座城市的明亮性格表达得直截了当。',
        tags: ['甜品', '热带', '清新']
      }
    ],
    scenery: [
      {
        id: 'scene-bangkok-morning',
        group: '清晨的巷',
        theme: '老城区',
        image: '',
        caption: '寺庙钟声刚落，路边摊已经把第一锅热气送进晨光里。'
      },
      {
        id: 'scene-bangkok-river',
        group: '午后的河',
        theme: '湄南河',
        image: '',
        caption: '河风把城市的温度吹散一点，也把节奏调慢一点。'
      },
      {
        id: 'scene-bangkok-night',
        group: '夜色天际',
        theme: '暹罗商圈',
        image: '',
        caption: '霓虹在潮湿空气里发光，整座城市像刚刚被洗亮。'
      }
    ]
  },
  {
    id: 'bali',
    name: '巴厘岛',
    englishName: 'BALI',
    coordinates: "8°20'S 115°05'E",
    slogan: '海风、寺庙与稻田把度假写成一篇散文',
    coverImage: '',
    heroImage: '',
    intro:
      '巴厘岛最迷人的不是“度假感”三个字，而是它总能让人把动作放慢，把视线交还给风景和身体。',
    story: {
      id: 'story-bali',
      title: '稻田之间，风替人说话',
      subtitle: '乌布的绿色不是背景，而是一种节奏',
      image: '',
      excerpt: '在乌布，最珍贵的安排不是行程，而是空下来听风。',
      content: [
        '很多人来到巴厘岛，是为了海与日落；真正让人放松下来的，却常常是乌布稻田边那条没什么目的的小路。风从田埂上吹来，带着湿润的草木气味，时间在这里显得比城市里更宽。',
        '你会看到有人在露台写字，有人在午后练瑜伽，也有人只是静静坐着，看云在山边慢慢散开。没有谁要求你必须完成什么，连风景都像在提醒人，生活可以暂时不那么用力。',
        '傍晚去看海时，浪声替代了通知提醒，金色光线落在肩膀上，整个人像被重新校准。巴厘岛最珍贵的不是逃离，而是让你重新学会如何停留。'
      ]
    },
    food: [
      {
        id: 'food-bali-brunch',
        name: '热带早午餐',
        image: '',
        desc: '水果、酸奶和面包的色彩明亮得像清晨本身，轻盈但不单薄。',
        tags: ['早午餐', '果香', '阳光']
      },
      {
        id: 'food-bali-seafood',
        name: '海边炭烤海鲜',
        image: '',
        desc: '海盐与炭火配合得极自然，风一吹，所有味觉都像被重新打开。',
        tags: ['海边', '炭烤', '鲜味']
      }
    ],
    scenery: [
      {
        id: 'scene-bali-rice',
        group: '清晨的巷',
        theme: '乌布稻田',
        image: '',
        caption: '绿色层层推远，连呼吸也跟着变慢。'
      },
      {
        id: 'scene-bali-temple',
        group: '午后的光',
        theme: '海神庙',
        image: '',
        caption: '海浪和石阶相互磨合，留下带着盐分的庄严。'
      },
      {
        id: 'scene-bali-sunset',
        group: '夜色天际',
        theme: '金巴兰',
        image: '',
        caption: '落日把海面铺成一张慢慢熄火的金箔。'
      }
    ]
  },
  {
    id: 'paris',
    name: '巴黎',
    englishName: 'PARIS',
    coordinates: "48°51'N 2°21'E",
    slogan: '石桥、咖啡馆和阴天一起完成浪漫的留白',
    coverImage: '',
    heroImage: '',
    intro:
      '巴黎的魅力并不只是“浪漫”，它真正擅长的是把光线、建筑与停顿组织成一种可被阅读的情绪。',
    story: {
      id: 'story-paris',
      title: '在左岸，把时间交给咖啡',
      subtitle: '窗边的一杯黑咖啡，足够构成一整个下午',
      image: '',
      excerpt: '巴黎教人一种缓慢的观看方式，像读一本句子很长的小说。',
      content: [
        '坐在左岸的咖啡馆里，看窗外行人从石板路上走过，连阴天都显得有层次。巴黎的光从不刺眼，它更像一层柔雾，把建筑的边线、树影和人的轮廓都处理得恰到好处。',
        '你会发现这里的人擅长停顿。有人只是看报纸，有人写字，有人把一杯咖啡喝得很慢。效率在巴黎似乎不是最高准则，感受才是。于是城市也因此更像一件经过打磨的器物，处处有细节可看。',
        '黄昏沿着塞纳河走，桥洞下有乐手，旧书摊刚准备收起。巴黎并不需要拼命解释自己，它只要在正确的光线里出现，就足以让人明白何谓风格。'
      ]
    },
    food: [
      {
        id: 'food-paris-croissant',
        name: '黄油可颂',
        image: '',
        desc: '外层酥得像一碰就碎的纸页，内里却温柔，黄油香在空气里停留得很久。',
        tags: ['烘焙', '黄油', '清晨']
      },
      {
        id: 'food-paris-onion',
        name: '洋葱汤',
        image: '',
        desc: '看似朴素，却在热气里慢慢释放深度，像巴黎人说话时总保留的那一点余味。',
        tags: ['经典', '温热', '冬日']
      }
    ],
    scenery: [
      {
        id: 'scene-paris-leftbank',
        group: '清晨的巷',
        theme: '左岸',
        image: '',
        caption: '卷帘门半开，咖啡香先一步醒来。'
      },
      {
        id: 'scene-paris-river',
        group: '午后的河',
        theme: '塞纳河',
        image: '',
        caption: '桥面上的脚步很轻，水面却把整座城的倒影都接住了。'
      },
      {
        id: 'scene-paris-night',
        group: '夜色天际',
        theme: '铁塔附近',
        image: '',
        caption: '灯光亮起时，浪漫终于有了可见的轮廓。'
      }
    ]
  },
  {
    id: 'sanfrancisco',
    name: '旧金山',
    englishName: 'SAN FRANCISCO',
    coordinates: "37°46'N 122°25'W",
    slogan: '海雾、坡道与湾区冷风勾勒自由感',
    coverImage: '',
    heroImage: '',
    intro:
      '旧金山的城市气质是松弛的，但它的地形与天气又让每一次转角都带着一点戏剧性。',
    story: {
      id: 'story-sanfrancisco',
      title: '雾从海湾慢慢走来',
      subtitle: '这里的天气，比许多城市更像一种情绪',
      image: '',
      excerpt: '当海雾爬上山坡，旧金山的轮廓会突然柔软下来。',
      content: [
        '旧金山最动人的时刻，常常发生在风里。上午还能看见清晰的海湾与桥梁，下午海雾就从远处慢慢涌来，把视野一层层擦淡。城市像被重新裱糊过，边缘柔和却更有故事感。',
        '顺着坡道向下走，电车经过，街角咖啡馆把门开着，冷风带着海水味拂过脸。旧金山并不喧闹，却有一种持续在流动的自由感，像随时准备出发，又并不真的着急。',
        '黄昏时站在高处看天色变蓝灰，灯光次第亮起。你会觉得这里的生活方式和天气一样，都不追求完全可控，而是允许意外、允许弯路、允许一阵风改变一天的走向。'
      ]
    },
    food: [
      {
        id: 'food-sanfrancisco-brunch',
        name: '酸面包蛤蜊浓汤',
        image: '',
        desc: '海边城市的代表性安慰食物，浓郁却不过分厚重，带着很鲜明的湾区记忆点。',
        tags: ['海风', '浓汤', '码头']
      },
      {
        id: 'food-sanfrancisco-coffee',
        name: '手冲咖啡',
        image: '',
        desc: '酸度清亮，像这里的天光与空气一样干净，喝下去会让人更想继续散步。',
        tags: ['咖啡', '清爽', '街区']
      }
    ],
    scenery: [
      {
        id: 'scene-sanfrancisco-hill',
        group: '清晨的巷',
        theme: '坡道住宅',
        image: '',
        caption: '彩色房子顺着坡一路排下去，像被海风轻轻摆好的积木。'
      },
      {
        id: 'scene-sanfrancisco-pier',
        group: '午后的河',
        theme: '海湾码头',
        image: '',
        caption: '风很凉，海鸥很吵，远处桥梁把视线稳稳托住。'
      },
      {
        id: 'scene-sanfrancisco-bridge',
        group: '夜色天际',
        theme: '金门大桥',
        image: '',
        caption: '当雾与灯一起落下，桥就像一笔没写完的红色长线。'
      }
    ]
  },
  {
    id: 'rio',
    name: '里约热内卢',
    englishName: 'RIO',
    coordinates: "22°54'S 43°12'W",
    slogan: '山海之间，热烈与松弛在同一片阳光里',
    coverImage: '',
    heroImage: '',
    intro:
      '里约总带着一种近乎天然的舞台感，山线、海岸和人群共同把日常过得像节庆。',
    story: {
      id: 'story-rio',
      title: '海风经过山与城',
      subtitle: '在里约，地形本身就在参与叙事',
      image: '',
      excerpt: '这里的风景不是背景板，而是直接参与生活的主角。',
      content: [
        '清晨的里约带着一层金色薄雾，山体和海岸线先于街道醒来。无论你站在高处俯瞰，还是沿着海边散步，都会感觉风景和城市之间几乎没有边界，生活就发生在海浪和山影旁边。',
        '街头音乐总是突如其来，球场上已经有人奔跑，海滩边有人卖椰子水。里约的热烈并不造作，它像天气一样自然地铺开，让身体先于语言感受到放松。',
        '等到夕阳把整片海岸染成橘色，城市的轮廓会显得格外轻盈。那种松弛不是无所事事，而是一种很坚定的知道: 生活应该与风景保持联系。'
      ]
    },
    food: [
      {
        id: 'food-rio-barbecue',
        name: '巴西烤肉',
        image: '',
        desc: '肉香直接、节奏明快，像里约本身的性格，不兜圈子，却足够热情。',
        tags: ['热烈', '炭烤', '分享']
      },
      {
        id: 'food-rio-acai',
        name: '巴西莓碗',
        image: '',
        desc: '冰凉果香在高温里尤其动人，把海边城市的轻快感一口吞下。',
        tags: ['果香', '清凉', '海边']
      }
    ],
    scenery: [
      {
        id: 'scene-rio-beach',
        group: '清晨的巷',
        theme: '科帕卡巴纳',
        image: '',
        caption: '海边跑步的人群，把一天的活力提前写进沙滩。'
      },
      {
        id: 'scene-rio-hill',
        group: '午后的光',
        theme: '面包山',
        image: '',
        caption: '山海紧贴着城市，让每一个视角都像取景框。'
      },
      {
        id: 'scene-rio-sunset',
        group: '夜色天际',
        theme: '伊帕内玛',
        image: '',
        caption: '夕阳落下时，连喧闹都像在发光。'
      }
    ]
  }
];

function getPexelsImage(photoId, width) {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}




const PEXELS_CITY_IMAGES = {
  tokyo: {
    cover: getPexelsImage(35072454, 1200),
    hero: getPexelsImage(15275312, 1200),
    story: getPexelsImage(35324791, 1000),
    scenery: [
      getPexelsImage(15275312, 1000),
      getPexelsImage(35072454, 1000),
      getPexelsImage(35324791, 1000)
    ]
  },
  shanghai: {
    cover: getPexelsImage(37011820, 1200),
    hero: getPexelsImage(417289, 1200),
    story: getPexelsImage(16460876, 1000),
    scenery: [
      getPexelsImage(16460876, 1000),
      getPexelsImage(417289, 1000),
      getPexelsImage(37011820, 1000)
    ]
  },
  bangkok: {
    cover: getPexelsImage(4566810, 1200),
    hero: getPexelsImage(12768829, 1200),
    story: getPexelsImage(11104819, 1000),
    scenery: [
      getPexelsImage(11104819, 1000),
      getPexelsImage(11262197, 1000),
      getPexelsImage(4566810, 1000)
    ]
  },
  bali: {
    cover: getPexelsImage(34925295, 1200),
    hero: getPexelsImage(19160408, 1200),
    story: getPexelsImage(37025703, 1000),
    scenery: [
      getPexelsImage(37025703, 1000),
      getPexelsImage(19160408, 1000),
      getPexelsImage(34925295, 1000)
    ]
  },
  paris: {
    cover: getPexelsImage(5822697, 1200),
    hero: getPexelsImage(16923144, 1200),
    story: getPexelsImage(29731403, 1000),
    scenery: [
      getPexelsImage(5822697, 1000),
      getPexelsImage(16923144, 1000),
      getPexelsImage(29731403, 1000)
    ]
  },
  sanfrancisco: {
    cover: getPexelsImage(196642, 1200),
    hero: getPexelsImage(29536601, 1200),
    story: getPexelsImage(13313992, 1000),
    scenery: [
      getPexelsImage(13313992, 1000),
      getPexelsImage(27400467, 1000),
      getPexelsImage(196642, 1000)
    ]
  },
  rio: {
    cover: getPexelsImage(12039485, 1200),
    hero: getPexelsImage(11051182, 1200),
    story: getPexelsImage(30540840, 1000),
    scenery: [
      getPexelsImage(30540840, 1000),
      getPexelsImage(25096432, 1000),
      getPexelsImage(11051182, 1000)
    ]
  }
};

const PEXELS_FOOD_IMAGES = [
  getPexelsImage(533325, 800),
  getPexelsImage(5374014, 800),
  getPexelsImage(6896514, 800),
  getPexelsImage(5840514, 800),
  getPexelsImage(4869328, 800),
  getPexelsImage(6426095, 800),
  getPexelsImage(20204675, 800),
  getPexelsImage(1191426, 800),
  getPexelsImage(37275110, 800),
  getPexelsImage(13198768, 800),
  getPexelsImage(33691784, 800),
  getPexelsImage(9867831, 800),
  getPexelsImage(36050720, 800),
  getPexelsImage(4223924, 800),
  getPexelsImage(958545, 800),
  getPexelsImage(262978, 800),
  getPexelsImage(1307698, 800),
  getPexelsImage(674574, 800),
  getPexelsImage(1437267, 800),
  getPexelsImage(769969, 800),
  getPexelsImage(941869, 800),
  getPexelsImage(1566837, 800),
  getPexelsImage(1279330, 800),
  getPexelsImage(2474661, 800)
];


const INTRO_DETAILS = {
  tokyo: {
    title: '在秩序里留一点夜色',
    paragraphs: [
      '东京的层次感来自它对节奏的精准控制。白天的电车、夜里的便利店、街角自助贩卖机的微光，都像被城市默默编排过，却又给人足够多的偶然与停顿。',
      '如果愿意离开最拥挤的十字路口，东京会显出更迷人的纹理: 老书店、昭和喫茶店、居民区里静得近乎克制的巷子，以及把人引向深夜的暖色招牌。'
    ]
  },
  shanghai: {
    title: '摩登背后，是细腻的日常',
    paragraphs: [
      '上海最擅长的不是张扬，而是把摩登和旧式体面并置。天际线固然耀眼，但真正让人记住的，往往是弄堂窗台、石库门门洞和法桐投下的影子。',
      '它的气质像一本文字排版极讲究的杂志，表面克制，细看却处处留痕。走得慢一些，黄浦江边的风、武康路的光和街角点心铺的热气会把这座城重新介绍给你。'
    ]
  },
  bangkok: {
    title: '潮湿、热烈，也有柔软缓冲',
    paragraphs: [
      '曼谷的第一印象总是密度极高: 热度、车流、香料、霓虹、金色屋檐，一切都在同时发生。但正因如此，湄南河边的一阵风、老城区的树影，反而会显得格外珍贵。',
      '它不是只属于夜市和购物中心的城市。寺庙阶梯、渡口码头、清晨刚刚开张的街边摊，都在提醒人: 曼谷真正动人之处，是热闹之中的呼吸感。'
    ]
  },
  bali: {
    title: '把速度慢下来，风景才会靠近',
    paragraphs: [
      '巴厘岛的魅力并不只是海与落日，它更像一种重新校准生活节奏的方式。稻田、寺庙、悬崖和海风，让视线始终有地方可以安放。',
      '在这里，风景不是背景板，而是一种会影响身体状态的存在。你会不自觉地走慢一点、坐久一点，也更容易注意到光线、潮汐和空气湿度带来的细小变化。'
    ]
  },
  paris: {
    title: '光线与停顿，共同构成风格',
    paragraphs: [
      '巴黎并不急于把自己解释清楚。它更像一座靠光线完成叙事的城市: 清晨的石桥、午后的咖啡馆、傍晚的河岸，每个时段都在替建筑和人群重新上色。',
      '这座城市最迷人的地方，是它允许停顿。沿街书摊、窗边座位、街角面包店的热气，都在告诉你，风格从来不是装饰，而是一种对日常的处理方式。'
    ]
  },
  sanfrancisco: {
    title: '风、坡道与海雾构成自由感',
    paragraphs: [
      '旧金山总给人一种不完全稳定却很轻盈的感觉。坡道把街景切出戏剧性，海雾又把这种戏剧性轻轻模糊，让整个城市既清晰又松弛。',
      '从住宅街区走到海湾码头，再到能够俯瞰桥梁的高处，你会不断被风重新安排步伐。这里的魅力不在宏大，而在地形、天气和生活方式恰好彼此成全。'
    ]
  },
  rio: {
    title: '山海之间，所有热烈都很自然',
    paragraphs: [
      '里约热内卢拥有一种天然的舞台感。山体、海岸线和城市肌理彼此紧贴，使得任何日常动作都带上一点景观性的张力。',
      '可它的迷人并不只在于壮阔。海边跑步的人群、街角卖椰子水的小摊、黄昏时海面上的橙色反光，都让这座城的热烈显得非常具体、非常生活。'
    ]
  }
};

const FOOD_INTROS = {
  tokyo: '从居酒屋炭火到昭和甜点，东京的味道总在克制中保留精确与余韵。',
  shanghai: '上海的风味讲究层次与分寸，既有街头热气，也有旧式餐桌上的体面。',
  bangkok: '在曼谷，甜、辣、酸、香并不排队出现，而是一起把感官推到最前面。',
  bali: '巴厘岛的食物像它的风景一样明亮，果香、炭火与海风总能互相衬托。',
  paris: '巴黎的食物不急于炫技，它更在乎质地、黄油香与一顿饭的气氛是否成立。',
  sanfrancisco: '旧金山的餐桌带着湾区式的清爽感，海味、面包与咖啡都很有辨识度。',
  rio: '里约的味道直接、热烈，适合在阳光和海风里被大口分享。'
};

const SCENERY_INTROS = {
  tokyo: '从巷口、桥面到天际线，东京的风景总把现代感与安静并置。',
  shanghai: '河岸、街区与老建筑共同构成上海最耐看的表情。',
  bangkok: '曼谷的风景不只属于金顶寺庙，也属于渡口、夜色与热带空气。',
  bali: '这里的风景层层递进: 稻田、海岸、寺庙和日落都很懂得留白。',
  paris: '巴黎的景观从不喧哗，却总能在桥、街角和立面细节里留下记忆。',
  sanfrancisco: '坡道、海湾和雾气把旧金山切成许多清爽又立体的镜头。',
  rio: '在里约，山线和海岸线几乎定义了所有风景的出场方式。'
};

const STORY_APPENDICES = {
  tokyo: '夜深之后走出书店，街道依旧整洁安静，只有自动售货机亮着。那种被控制得很好的孤独感，是东京最难复制的气味之一。',
  shanghai: '如果说外滩展示的是上海的轮廓，那么弄堂、河岸和树影展示的，就是它真正的呼吸方式。两者叠在一起，才是完整的上海。',
  bangkok: '当晚风把白天的热度稍稍吹散，你会理解曼谷为何总能让人一边疲惫，一边仍然想继续停留。',
  bali: '于是你渐渐明白，巴厘岛最珍贵的不是“逃开”，而是它让人重新察觉到身体和环境之间的联系。',
  paris: '于是即便只是走过一座桥、坐进一家小咖啡馆，巴黎也总能把简单的瞬间处理得像一页经过编排的版面。',
  sanfrancisco: '风景与天气在旧金山从不只是背景，它们会改变人的情绪和步行路线，也因此让这座城显得格外生动。',
  rio: '当山与海都近在眼前时，人会更自然地把注意力交还给当下，这大概也是里约最动人的礼物。'
};

const EXPANDED_STORY_CONTENT = {
  tokyo: [
    {
      heading: '江户的底色，昭和的余温',
      body: '东京的历史感从不刻意摆给你看。明治神宫外苑的银杏并木、根津神社的鸟居阶梯、谷中银座的昭和商店街——这些地方并不出现在最热门的旅游路线上，却恰恰构成了东京人理解自己城市的私密坐标。江户时代的下町文化至今仍在浅草与神田流动：钱汤的暖帘、和菓子老铺的手拭巾、祭典时抬着神轿穿过窄巷的吆喝声——它们像是城市肌理中最细的经络，不显眼，却输送着东京不会说破的温度。银座资生堂Parlour的银质茶壶与日本桥暖帘老铺的木柜台在同一条时间线上安静共存，商业与生活在这里从未真正割裂。'
    },
    {
      heading: '孤独的美学，秩序里的留白',
      body: '东京是一座允许人独处的城市。一人焼肉、一人カラオケ、胶囊旅馆的蜂巢式睡眠仓——这些不是无奈的妥协，而是一种被认真对待的生活方式。在这座拥有三千七百万人口的巨型都市里，"一个人"恰恰是最舒服的半径。深夜便利店的白光、自动贩卖机在住宅区角落的微亮、终电过后站台上只剩风声的片刻安静——东京的魅力藏在公共秩序留出的私人缝隙里。它不催促你跟任何人说话，也不逼你融入任何群体，只是安静地提供灯光、温度和一张可以被独自占有的吧台座位。'
    }
  ],
  shanghai: [
    {
      heading: '梧桐、租界与时间刻度',
      body: '法租界的梧桐不仅是行道树，更是上海特有的时间度量单位。树干越粗，这条街的故事越厚。衡山路的酒吧换了几轮，但武康路的弧线、永嘉路的转角、安福路小菜场的喧闹，都还保持着旧时租界那种既洋气又市井的奇妙双重性。外滩的万国建筑群是西风东渐的正面写照，而石库门则是中西合璧的里弄智慧——前者代表这座城市面向世界的姿态，后者代表它把外来影响内化为日常生活的能力。'
    },
    {
      heading: '市井的体面，精致里的松弛',
      body: '上海人有一种把日常过出仪式感的本领。不是炫耀式的讲究，而是自己认可的体面：买完菜顺路带一盒鲜肉月饼回家、在弄堂口的理发店刮脸、穿睡衣下楼取快递也要配一双干净的拖鞋。这座城市在摩天楼与老弄堂之间找到了一种奇异的平衡——既容得下全球最密集的咖啡馆，也容得下阳台上晾着的床单在风里慢慢晃。精致与松弛在上海并不是对立面，它们像黄浦江与苏州河一样，最终汇进同一种生活流速。'
    }
  ],
  bangkok: [
    {
      heading: '王朝与市井，一张折叠的曼谷地图',
      body: '曼谷的空间叙事像一张反复折叠的纸：大皇宫的金色尖顶与隔壁巷子里一元一串的烤猪肉可以只隔二十米；卧佛寺的庄严沉默与考山路的背包客喧闹在同一片热带天空下并行不悖。却克里王朝的辉煌并未被锁进展厅，它在运河两岸的日常中继续呼吸——清晨僧侣赤脚托钵走过水面栈道，橘色袈裟倒映在浑浊却亲切的河水里。曼谷不需要在古迹与日常之间做选择，它把二者同时端上桌，让游客和居民在同一张凳子上各取所需。'
    },
    {
      heading: '热带的韧性，水边的柔软',
      body: '曼谷是一座和水反复谈判的城市。雨季时运河漫过路面，摊贩把椅子垫高两寸继续做生意；旱季时寺庙的金顶在烈日下几乎融化，摩托司机在树荫下打盹，头盔反扣在地上像一只等待投币的碗。热带气候教给曼谷人的不是急躁，而是一种在高温与湿度里找到的从容——什么事都可以等一等，等风来、等雨停、等夜市亮起第一盏灯。桥下的泰拳训练场、渡口边卖花环的老妇人、运河尾梢收网起鱼的人——这些不是背景板上的装饰，而是曼谷韧性最诚实的表达。'
    }
  ],
  bali: [
    {
      heading: '众神之岛，仪式即是日常',
      body: '巴厘岛被称为"众神之岛"并非夸张修辞。每天清晨，妇女们在家门口摆放蕉叶编成的小方盒，里面盛着鲜花、饼干和一支点燃的线香——这些名为canang sari的供品是巴厘印度教与日常生活不可分割的一部分。不是去寺庙才算信仰，信仰就发生在门前的台阶上、路边神龛旁、稻田水渠边。三步一寺、五步一庙的密度让整座岛像一个巨大的露天祭祀空间，但仪式感并不沉重——它像呼吸一样自然，像每天都要刷牙一样平常。'
    },
    {
      heading: '三重景观：山、海、稻田之间',
      body: '巴厘岛的风景不是平面的，它沿着垂直轴打开：阿贡火山在高处俯瞰，梯田在中段层层铺展，海岸线在低处收束。这种地形结构让一小时车程内可以从火山灰覆盖的庙宇穿行到海风里的悬崖酒吧。乌布的雨水落进稻田后沿着古老的水利系统subak流向下游——这套被列入世界遗产的灌溉体系，既是工程也是哲学，它让水从不会成为私产，而是沿着公平的比例流经每一块田地。在巴厘，风景与伦理常常是同一回事。'
    }
  ],
  paris: [
    {
      heading: '石头的记忆，光的博物馆',
      body: '巴黎是一座用石头写日记的城市。那些蜂蜜色的石灰岩立面不只是装饰，而是层层叠叠的时间印记：中世纪的地基、十七世纪的拱廊、十九世纪奥斯曼改造留下的标准线条、二战后细心修补的弹痕——这些都写在墙上，只要你愿意抬头看。巴黎不急着拆除什么，也不急着新建什么，它对老去的事物抱有一种审慎的敬意，仿佛老去本身就是一种重要的审美价值。圣母院的玫瑰窗、圣礼拜堂的彩绘玻璃、蒙马特石阶上被无数鞋底磨圆了的棱角——这些不是古迹，而是城市这座巨大露天博物馆里仍在被使用的展品。'
    },
    {
      heading: '从拱廊到左岸：巴黎人的室内街',
      body: '巴黎的拱廊街是最早的"现代商业空间"——有顶棚、有煤气灯、有玻璃天窗，让人们在雨天也能从容逛街购物。本雅明把它称为"资本论的梦境"，但对普通巴黎人来说，拱廊街更像城市的室内客厅。维罗多廊街的古书店、茹弗鲁瓦廊街的旧玩具店、全景廊街的邮票商——这些空间把商业变得缓慢而有人情味。沿塞纳河往南到了左岸，拱廊的逻辑被延伸到整个街区：露天但同样缓慢，商业但同样有人情味。旧书摊、小画廊、独立出版社——巴黎的文化密度并不集中在某座建筑里，而是像毛细血管一样分布在城市的步行距离中。'
    }
  ],
  sanfrancisco: [
    {
      heading: '淘金、地震与反主流：一层一层叠上去的自由',
      body: '旧金山的城市史像一本翻得很快的书：1849年淘金潮让一座小渔村变成港口城市，1906年大地震把一切推平后又迅速重建，1950年代"垮掉的一代"在北海滩的地下室写诗，1967年"爱之夏"在海特-阿什伯里区把鲜花插进枪管。这座城市从不缺乏自我重塑的勇气，甚至对毁灭本身都不太恐惧——每一次地震和火灾之后，旧金山的反应都是就地重建，甚至建得比之前更好。电报山的陡峭台阶、卡斯特罗区的彩虹旗、米慎区的拉丁壁画——每一层文化都叠在前一层之上，形成了一种不稳定但极具创造力的城市生态。'
    },
    {
      heading: '从码头到硅谷：一片海湾，多种面孔',
      body: '旧金山湾区的范围比旧金山市大得多，但这种"大"并不抽象。从渔人码头的海狮吼叫到奥克兰的港口集装箱，从帕洛阿尔托的车库创业传说到伯克利电报大道的街头书摊——这片湾区持续生产着看似彼此矛盾却共存无碍的生活版本。轮渡从码头出发，把在金融区上班的人送回家，途经恶魔岛和金门大桥，通勤本身就像一次微型海湾旅行。这里的人并不执着于把不同版本的生活统一起来，他们更擅长的是接受每一种版本同时存在的事实。'
    }
  ],
  rio: [
    {
      heading: '从殖民港口到狂欢之都',
      body: '里约热内卢的建城史始于1565年葡萄牙人在瓜纳巴拉湾入口处建起的一座要塞。接下来的四个多世纪里，它先后成为殖民地的首府、巴西帝国的都城、共和国的首都，直到1960年才把政治中心的地位让给巴西利亚。但政治权力的转移并未削弱里约的影响力——它用一种更难以量化的方式继续定义着巴西：桑巴、狂欢节、博萨诺瓦、科帕卡巴纳的石板波浪纹人行道——这些都是里约发明并输出给整个世界的。佩德罗一世在伊皮兰加河畔宣布独立的那声呼喊早已成为历史课本上的铅字，但里约人血液里那种把政治与节庆、庄严与狂欢揉在一起的冲动，至今没有消退。'
    },
    {
      heading: '上帝的视角与人间的尺度',
      body: '基督像张开双臂站在科尔科瓦多山顶，俯瞰着下方不完美的城市：依山而建的贫民窟、海岸线上林立的豪华公寓、市中心殖民时期教堂与玻璃幕墙写字楼的混杂排列。里约从不试图隐藏它的矛盾，它把富与贫、山与海、秩序与混乱同时放在一个取景框里，让每个角度都带着一种戏剧性的张力。当你从面包山顶缆车上往下看时，会意识到这座城市根本不需要美化——它的矛盾本身，就是它最不可替代的风景。里约教会人的不是如何解决问题，而是如何在问题中间找到一段沙滩、一杯冰椰汁、一个不需要理由的下午。'
    }
  ]
};

const EXTRA_STORY_IMAGES = {
  tokyo: [
    getPexelsImage(35324791, 800),
    getPexelsImage(15275312, 800)
  ],
  shanghai: [
    getPexelsImage(16460876, 800),
    getPexelsImage(37011820, 800)
  ],
  bangkok: [
    getPexelsImage(11262197, 800),
    getPexelsImage(11104819, 800)
  ],
  bali: [
    getPexelsImage(19160408, 800),
    getPexelsImage(37025703, 800)
  ],
  paris: [
    getPexelsImage(16923144, 800),
    getPexelsImage(29731403, 800)
  ],
  sanfrancisco: [
    getPexelsImage(27400467, 800),
    getPexelsImage(13313992, 800)
  ],
  rio: [
    getPexelsImage(25096432, 800),
    getPexelsImage(30540840, 800)
  ]
};

const FOOD_NOTES = {
  'food-tokyo-yakitori': '站在吧台前看火候推进，味觉之外，还有一种被职人节奏带着走的安定感。',
  'food-tokyo-kissa': '银色叉勺、深色木桌与缓慢播放的爵士乐，让甜味也带上了老派情绪。',
  'food-shanghai-noodle': '最好的葱油拌面往往不靠夸张配料，只凭香味、油润度和弹牙面体建立说服力。',
  'food-shanghai-dessert': '刚出炉时最值得等，酥皮碎落在纸袋里，连手指都会沾上一点热气。',
  'food-bangkok-skewer': '油脂滴落时腾起的烟气，是整条夜市街最直接的招牌。',
  'food-bangkok-mango': '糯米的绵密感与果肉的清甜碰在一起，热带气候忽然变得很容易理解。',
  'food-bali-brunch': '水果切面、冰块和明亮陶盘本身就像一张巴厘岛的晨间海报。',
  'food-bali-seafood': '入夜后的海边餐桌并不复杂，真正重要的是海风、火候和刚刚好的咸鲜度。',
  'food-paris-croissant': '咬下去的第一层脆响，几乎就是巴黎清晨最经典的声音之一。',
  'food-paris-onion': '热汤把人慢慢安顿下来，朴素食材在时间里被炖出很深的层次。',
  'food-sanfrancisco-brunch': '配着码头风景一起吃时，浓汤和酸面包会显得格外有归属感。',
  'food-sanfrancisco-coffee': '清亮酸度和湾区空气一样利落，适合在长坡与海风之间慢慢喝。',
  'food-rio-barbecue': '围桌分享的气氛和火烤香味一样重要，热情常常先于味道到场。',
  'food-rio-acai': '在高温和阳光里吃下第一口冰凉果泥，整个人会迅速被拉回轻快的节奏。',
  'restaurant-tokyo-yakitori': '炭火前穿着白T的师傅边翻串边和熟客聊天，这种随意本身就是深夜最对味的配菜。',
  'restaurant-tokyo-sushi': '每一贯寿司放下时师傅都会轻轻按一下，力道轻重本身就是职人几十年的减法。',
  'restaurant-tokyo-kissa': '深焙咖啡的苦味和布丁的甜刚好互补，窗外是东京入夜前最后一道灰蓝色天光。',
  'restaurant-shanghai-vegetarian': '菜单上没有肉，却能让最坚定的肉食者吃完后陷入沉思。',
  'restaurant-shanghai-bangbang': '点菜不必看菜单，报几道你听过的本帮菜名字，服务员点头的才是对的。',
  'restaurant-shanghai-guangming': '楼下外卖窗口永远有人排着，楼上的熟菜窗口另有一群老食客在等。',
  'restaurant-bangkok-jayfai': '等位两小时起步，但第一口蟹肉蛋卷会把所有等待都变成合理。',
  'restaurant-bangkok-nahm': '辣味不会冲上来就占领口腔，而是像一条缓慢的波浪，从舌根向前推。',
  'restaurant-bangkok-err': '炭烤猪肉颈肉蘸上罗望子酱，配一口糯米，旧城区的慢节奏全在这一口里。',
  'restaurant-bali-locavore': '从开胃到甜品，每道菜都有人过来轻声解释食材和灵感，故事比摆盘更让人记住。',
  'restaurant-bali-ricefield': '青蛙叫声是唯一背景音，筷子碰到陶盘的声音都显得有点大。',
  'restaurant-bali-beachclub': '最好点一整条炭烤鱼，用手撕着吃，酱汁滴在沙上也没关系。',
  'restaurant-paris-falafel': '酱料给得很慷慨，吃到一半口袋饼底部会被浸透，那正是最好吃的一口。',
  'restaurant-paris-comptoir': '菜单写在一块小黑板上，和当天的光线一样，每次看都略有不同。',
  'restaurant-paris-bakery': '可颂的香味会飘出店门，沿着街走了二十米还在鼻腔里。',
  'restaurant-sanfrancisco-ferry': '在生蚝吧前站着吃几颗，然后端着咖啡走到码头边，看海鸥和渡轮。',
  'restaurant-sanfrancisco-tartine': '开放式三明治的面包足够厚实，咬下去需要一点力气，但值得。',
  'restaurant-sanfrancisco-statebird': '小推车接近时全桌人会同时转头，像在等一列一定会带来好消息的火车。',
  'restaurant-rio-colombo': '点一杯经典巴西咖啡配葡式蛋挞，抬头看天花板的镜子，像一次迷你时光旅行。',
  'restaurant-rio-aprazivel': '山上比市区凉快几度，坐在树下吃炖鱼，偶尔会有花瓣落在桌上。',
  'restaurant-rio-barurca': '炸虾的酥脆和冰啤酒的凉度刚好相反，这种对立让每一口都很过瘾。'
};

const EXTRA_FOOD_ITEMS = {
  tokyo: [
    {
      id: 'food-tokyo-ramen',
      name: '豚骨拉面',
      desc: '浓汤、蒜香与弹面在小店里迅速完成一场热烈的夜间安慰，像东京深夜最直接的拥抱。',
      tags: ['浓厚', '热汤', '深夜'],
      note: '推开拉门坐下的瞬间，寒意和疲惫几乎会一起被蒸汽带走。'
    }
  ],
  shanghai: [
    {
      id: 'food-shanghai-crab',
      name: '蟹粉小笼',
      desc: '薄皮里裹着细密汤汁与蟹香，入口温度与鲜味都需要被认真对待。',
      tags: ['鲜味', '点心', '细腻'],
      note: '上海式精致感，常常就藏在这种必须慢一点吃的食物里。'
    }
  ],
  bangkok: [
    {
      id: 'food-bangkok-noodle',
      name: '冬阴功汤面',
      desc: '酸辣和香茅味同时冲上来，热度与清爽感奇妙并存，是曼谷极具辨识度的一碗。',
      tags: ['酸辣', '香茅', '街头'],
      note: '每家小店的配方都不完全一样，差异本身就是街头饮食的魅力。'
    }
  ],
  bali: [
    {
      id: 'food-bali-pork',
      name: '巴厘香料烤猪',
      desc: '香料层次复杂却不沉重，肉汁与炭香把热带饮食的直接感表达得很完整。',
      tags: ['香料', '炭烤', '节庆'],
      note: '它像巴厘岛版的庆典食物，味道比摆盘更会让人留下记忆。'
    }
  ],
  paris: [
    {
      id: 'food-paris-bistro',
      name: '法式小酒馆牛排',
      desc: '奶油、胡椒与肉汁都不喧闹，却把“经典”这件事解释得很清楚。',
      tags: ['小酒馆', '经典', '晚餐'],
      note: '配一杯红酒后，整顿饭会像巴黎夜色一样慢慢展开。'
    }
  ],
  sanfrancisco: [
    {
      id: 'food-sanfrancisco-oyster',
      name: '海湾生蚝',
      desc: '冷冽、清亮、带一点海水味，几乎把湾区空气本身端上了桌。',
      tags: ['海鲜', '清爽', '海湾'],
      note: '不需要复杂调味，几滴柠檬就足够让它成立。'
    }
  ],
  rio: [
    {
      id: 'food-rio-stew',
      name: '黑豆炖肉',
      desc: '厚实、温热、带着家庭餐桌般的力量感，是热烈城市背后最踏实的一面。',
      tags: ['家常', '浓郁', '传统'],
      note: '和海边食物相比，它更像里约把人真正留下来的那部分日常。'
    }
  ]
};

const EXTRA_RESTAURANT_ITEMS = {
  tokyo: [
    {
      id: 'restaurant-tokyo-yakitori',
      name: '深夜鸟贵族',
      desc: '炭火与喧闹声同样热烈，烧鸟配生啤是东京上班族卸下领带后的固定仪式。',
      tags: ['居酒屋', '烧鸟', '大众'],
      note: '烟雾和笑声混在一起，是东京夜晚最有温度的那一面。'
    },
    {
      id: 'restaurant-tokyo-sushi',
      name: '銀座 鮨青木',
      desc: '在克制中完成对食材最精确的敬意，每一贯寿司都像一句简短而完整的俳句。',
      tags: ['寿司', '银座', '板前'],
      note: '安静到能听见醋饭被轻轻捏合的声音，职人的手和眼神同样专注。'
    },
    {
      id: 'restaurant-tokyo-kissa',
      name: '喫茶フジ',
      desc: '昭和老铺的深色木桌、天鹅绒椅面和缓慢爵士乐，让一杯咖啡变成一段可以坐很久的时光。',
      tags: ['喫茶店', '复古', '昭和'],
      note: '时间在这里被咖啡香拉得很长，窗外的新宿像另一个时代。'
    }
  ],
  shanghai: [
    {
      id: 'restaurant-shanghai-vegetarian',
      name: '福和慧',
      desc: '素食做到诗一样层次分明，摆盘与味道同样克制而深远，是上海精致餐饮的另一种可能。',
      tags: ['素食', '精致', '禅意'],
      note: '每一道菜都像一幅小画，吃完之后会让人安静几秒。'
    },
    {
      id: 'restaurant-shanghai-bangbang',
      name: '老吉士酒家',
      desc: '本帮菜老店，浓油赤酱里的家常温度，红烧肉上桌时整个房间都安静了。',
      tags: ['本帮菜', '老店', '浓油赤酱'],
      note: '天平路那家小小的店面，藏着上海人最认的糖与酱油比例。'
    },
    {
      id: 'restaurant-shanghai-guangming',
      name: '光明邨大酒家',
      desc: '排队是日常，鲜肉月饼从这里出发，是淮海路上几十年不断档的人间烟火。',
      tags: ['老字号', '点心', '排队'],
      note: '一锅月饼出炉的香气，足够让整条街的人放慢脚步。'
    }
  ],
  bangkok: [
    {
      id: 'restaurant-bangkok-jayfai',
      name: 'Jay Fai',
      desc: '街头米其林，蟹肉煎蛋卷是曼谷最贵的烟火，老板娘戴着护目镜在烈火前翻炒的姿态已成传奇。',
      tags: ['米其林', '街头', '蟹肉'],
      note: '一口咬下去，金黄蛋皮里满满蟹肉，贵得有道理。'
    },
    {
      id: 'restaurant-bangkok-nahm',
      name: 'Nahm',
      desc: '把宫廷食谱翻译成现代语言，香料不堆砌而是精确地彼此呼应，辣得有层次。',
      tags: ['泰式宫廷', '精致', '香料'],
      note: '没有张扬的门面，但味道会让你重新定义对泰餐的认知。'
    },
    {
      id: 'restaurant-bangkok-err',
      name: 'Err',
      desc: '在旧城区里用炭火重新定义泰式下酒菜，旧木桌、昏暗灯光和微醺气氛刚好凑成曼谷的另一面。',
      tags: ['下酒菜', '炭火', '复古'],
      note: '适合下午从大皇宫出来之后拐进来，点一瓶啤酒慢慢恢复能量。'
    }
  ],
  bali: [
    {
      id: 'restaurant-bali-locavore',
      name: 'Locavore',
      desc: '用本地食材写出一份热带创意菜单，每道菜都像一场关于巴厘岛的味觉旅行。',
      tags: ['创意', '本地食材', '精致'],
      note: '菜单会随季节和农夫收成变化，每次来都可能遇见不同的巴厘。'
    },
    {
      id: 'restaurant-bali-ricefield',
      name: '稻田餐桌',
      desc: '餐桌对着乌布稻田的绿色，吃饭变成一件很慢的事，连咀嚼的节奏都会不自觉地放轻。',
      tags: ['稻田', '乌布', '景观'],
      note: '午后阳光穿过椰树叶洒在桌上，风景本身就已经是一道前菜。'
    },
    {
      id: 'restaurant-bali-beachclub',
      name: '海滩烧烤俱乐部',
      desc: '沙子、日落与海鲜拼成最轻松的晚宴，脚踩在沙里，手拿冰啤酒，海风替所有对话留了空间。',
      tags: ['海滩', '烧烤', '日落'],
      note: '不需要穿鞋，不需要看表，只需要在日落前找到一张靠近海边的桌子。'
    }
  ],
  paris: [
    {
      id: 'restaurant-paris-falafel',
      name: "L'As du Fallafel",
      desc: '玛黑区的口袋传奇，排队是巴黎另一种社交，炸鹰嘴豆丸子裹着茄子与酱料塞满一整只口袋饼。',
      tags: ['中东', '玛黑', '排队'],
      note: '不用找座位，拿了就在街边吃，身边是法语、英语和各国游客的交错。'
    },
    {
      id: 'restaurant-paris-comptoir',
      name: 'Le Comptoir du Relais',
      desc: '左岸小酒馆，菜单随季节流动，靠窗座位能看到圣日耳曼的巴黎人流与光影缓慢变换。',
      tags: ['小酒馆', '左岸', '季节'],
      note: '不急不慢的上菜节奏，反而让人有更多时间观察邻桌的表情。'
    },
    {
      id: 'restaurant-paris-bakery',
      name: 'Du Pain et des Idées',
      desc: '面包店里的可颂被巴黎人称作"必须绕路"，外层脆响和内层蜂巢结构都近乎偏执地讲究。',
      tags: ['面包店', '可颂', '手工'],
      note: '上午十点前到才能抢到刚出炉的那一批，晚了就剩下空的藤篮。'
    }
  ],
  sanfrancisco: [
    {
      id: 'restaurant-sanfrancisco-ferry',
      name: 'Ferry Building Marketplace',
      desc: '码头边的美食集合，生蚝与海风一起开场，从农场奶酪到手工巧克力都是一场味觉散步。',
      tags: ['市集', '码头', '生蚝'],
      note: '周末早上农贸市场最热闹，空腹来是最正确的策略。'
    },
    {
      id: 'restaurant-sanfrancisco-tartine',
      name: 'Tartine Bakery',
      desc: '晨光里的面包香气，排队时跟陌生人聊几句是旧金山式仪式，酸面包外皮脆得像湾区清晨。',
      tags: ['面包店', '早餐', '排队'],
      note: '不要只买面包走，坐下来点一份开放式三明治才算完整。'
    },
    {
      id: 'restaurant-sanfrancisco-statebird',
      name: 'State Bird Provisions',
      desc: '用小推车送菜的方式打破了正经餐厅的距离感，每一道小盘菜都像一份可以吃的惊喜。',
      tags: ['美式创意', '小盘', '轻松'],
      note: '看到小推车过来就赶紧选，热门菜往往走不到餐厅另一头。'
    }
  ],
  rio: [
    {
      id: 'restaurant-rio-colombo',
      name: 'Confeitaria Colombo',
      desc: '百年老店，镜子与水晶灯下喝一杯巴西咖啡，甜点的甜度和建筑的华丽程度一样毫不克制。',
      tags: ['百年', '咖啡', '华丽'],
      note: '抬头看天花板的同时别忘了低头看甜点柜，葡式蛋挞是低调的惊喜。'
    },
    {
      id: 'restaurant-rio-aprazivel',
      name: 'Aprazível',
      desc: '藏在山坡上的热带花园餐厅，雨林树冠间用餐，巴西炖鱼和风景一样温暖而有层次。',
      tags: ['花园', '热带', '山景'],
      note: '记得在日落前到达，夕阳穿过树叶的样子会让整顿饭变得更难忘。'
    },
    {
      id: 'restaurant-rio-barurca',
      name: 'Bar Urca',
      desc: '海边围墙下站着吃炸虾，里约最松弛的傍晚从这里开始，冰啤酒和咸海风是唯一需要的调料。',
      tags: ['海边', '小食', '轻松'],
      note: '没有真正意义上的座位，但这一小段围墙边，是里约人心中最好的餐桌。'
    }
  ]
};

const SCENERY_DETAILS = {
  'scene-tokyo-alley': '坡道、石墙和门前植物把这片街区处理得非常安静，像东京把音量调低后的样子。',
  'scene-tokyo-rain': '雨水让反光变得更明显，也让高速运转的涩谷显出一点电影式的停顿。',
  'scene-tokyo-skyline': '高处俯瞰时，东京的复杂结构会被夜色整理成一张层次分明的光网。',
  'scene-shanghai-lane': '法桐与老建筑一起决定了这条街区的气质，步行是理解它的最好方式。',
  'scene-shanghai-river': '慢慢更新的河岸把工业痕迹与新式生活方式接在了一起。',
  'scene-shanghai-bund': '面向黄浦江站一会儿，就能看见上海如何把过去与当下同时安放。',
  'scene-bangkok-morning': '热带晨光落在老城区立面上，连看似平常的巷子都带着湿热而柔和的光泽。',
  'scene-bangkok-river': '曼谷真正的风景感，往往不是最热闹的街，而是这条让城市慢下来的河。',
  'scene-bangkok-night': '商业区的密度、广告牌的亮度和潮湿空气交织在一起，形成曼谷独有的夜景表情。',
  'scene-bali-rice': '稻田最动人的不是“广阔”，而是那种近看也处处成立的秩序感。',
  'scene-bali-temple': '潮汐、岩石和宗教空间叠在一起，让这片海岸带着一种天然庄重。',
  'scene-bali-sunset': '金巴兰的落日不是独自存在的，它总和海浪、风声和人群并排到场。',
  'scene-paris-leftbank': '左岸真正迷人的不是某一间店，而是书店、咖啡馆和街道尺度之间的平衡。',
  'scene-paris-river': '桥梁、石岸与缓慢流动的水面，让巴黎最经典的风景始终保持节制。',
  'scene-paris-night': '铁塔周边并不需要太多说明，恰到好处的灯光就能完成大部分情绪。',
  'scene-sanfrancisco-hill': '坡度带来的视野起伏，让普通住宅街也拥有了天然的镜头感。',
  'scene-sanfrancisco-pier': '码头区的风、海鸟和远处桥梁，让湾区景观显得非常轻快。',
  'scene-sanfrancisco-bridge': '雾气一来，桥的轮廓反而更清晰，像被留白重新强调了一遍。',
  'scene-rio-beach': '海滩不是里约的背景，而是整座城市的公共客厅与日常舞台。',
  'scene-rio-hill': '高处能看见海湾、山线和城区彼此咬合，这是里约最有辨识度的轮廓。',
  'scene-rio-sunset': '当海面被夕阳点亮，整座城市会从热烈转向柔和，却仍然保持能量。'
};

const EXTRA_SCENERY_ITEMS = {
  tokyo: [
    {
      id: 'scene-tokyo-bridge',
      group: '桥与水面',
      theme: '隅田川沿岸',
      caption: '河面把高楼和夜色都拉长，东京在这里显得比想象中更松弛。',
      detail: '沿岸步道、低风速和城市光影共同组成一种很适合慢走的节奏。'
    }
  ],
  shanghai: [
    {
      id: 'scene-shanghai-tower',
      group: '河岸与天际线',
      theme: '陆家嘴',
      caption: '从对岸望过去，摩登感被江面和夜风处理得更有距离感。',
      detail: '上海的现代轮廓在这里最集中，却并不显得生硬。'
    }
  ],
  bangkok: [
    {
      id: 'scene-bangkok-temple',
      group: '寺庙与金顶',
      theme: '郑王庙附近',
      caption: '金顶在不同光线里反复改变质地，是曼谷最具辨识度的视觉符号之一。',
      detail: '从河对岸看过去，寺庙的轮廓与城市密度形成很强的对比。'
    }
  ],
  bali: [
    {
      id: 'scene-bali-cliff',
      group: '海岸与悬崖',
      theme: '乌鲁瓦图',
      caption: '海浪不断撞上悬崖边缘，风景在这里带着一种非常直接的力量感。',
      detail: '从高处看海，会意识到巴厘岛并不只是温柔，它也很有地貌张力。'
    }
  ],
  paris: [
    {
      id: 'scene-paris-street',
      group: '街角与立面',
      theme: '玛黑区',
      caption: '石墙、窗台和转角尺度一起决定了巴黎为何总显得很会构图。',
      detail: '真正的巴黎气质，常常不是宏大地标，而是这种日常街景里的秩序感。'
    }
  ],
  sanfrancisco: [
    {
      id: 'scene-sanfrancisco-neighborhood',
      group: '街区与坡道',
      theme: 'Pacific Heights',
      caption: '住宅、树影与海湾视线同时出现，让人很容易理解这座城市的宜居魅力。',
      detail: '坡道不是阻碍，而是旧金山风景感最重要的制造者之一。'
    }
  ],
  rio: [
    {
      id: 'scene-rio-lagoon',
      group: '湖岸与山线',
      theme: '罗德里戈湖',
      caption: '湖面平静时，城市和山体的倒影会让里约显出少见的安静面。',
      detail: '它把海边的热烈暂时收起，换成一种更舒缓的风景节奏。'
    }
  ]
};



cities.forEach((city, cityIndex) => {
  const images = PEXELS_CITY_IMAGES[city.id];
  if (!images) {
    return;
  }

  const extraFoods = EXTRA_FOOD_ITEMS[city.id] || [];
  const extraScenery = EXTRA_SCENERY_ITEMS[city.id] || [];
  const expandedStory = EXPANDED_STORY_CONTENT[city.id] || [];
  const extraStoryImgs = EXTRA_STORY_IMAGES[city.id] || [];
  const scenicImagePool = [images.hero, images.cover, ...images.scenery];
  city.coverImage = images.cover;
  city.heroImage = images.hero;
  city.heroImages = [images.hero, images.cover, ...images.scenery, ...extraStoryImgs];
  city.introTitle = INTRO_DETAILS[city.id].title;
  city.introParagraphs = [city.intro, ...INTRO_DETAILS[city.id].paragraphs];
  city.foodIntro = FOOD_INTROS[city.id];
  city.sceneryIntro = SCENERY_INTROS[city.id];
  city.story.image = images.story;
  city.story.gallery = [images.cover, images.scenery[0], images.scenery[1], ...extraStoryImgs];
  city.story.content = [...city.story.content, STORY_APPENDICES[city.id]];
  city.story.expanded = expandedStory;

  const extraRestaurants = EXTRA_RESTAURANT_ITEMS[city.id] || [];

  city.food = [
    ...city.food.map((item) => ({ ...item, category: '美食' })),
    ...extraFoods.map((item) => ({ ...item, category: '美食' })),
    ...extraRestaurants.map((item) => ({ ...item, category: '餐厅' }))
  ].map((item, index) => ({
    ...item,
    note: item.note || FOOD_NOTES[item.id] || '',
    image: PEXELS_FOOD_IMAGES[(index + cityIndex * 6) % PEXELS_FOOD_IMAGES.length]
  }));

  city.scenery = [...city.scenery, ...extraScenery].map((item, index) => ({
    ...item,
    detail: item.detail || SCENERY_DETAILS[item.id] || '',
    image: scenicImagePool[index % scenicImagePool.length]
  }));


});

function getCities() {
  return cities;
}

function getCitySummaries() {
  return cities.map((city) => ({
    id: city.id,
    name: city.name,
    englishName: city.englishName,
    coordinates: city.coordinates,
    slogan: city.slogan,
    coverImage: city.coverImage,
    heroImage: city.heroImage
  }));
}

function getCityById(cityId) {
  return cities.find((city) => city.id === cityId);
}

function buildSavedSections(savedItems) {
  const sections = {
    story: [],
    food: [],
    scenery: [],

  };

  savedItems.forEach((savedItem) => {
    const city = getCityById(savedItem.cityId);
    if (!city) {
      return;
    }

    if (savedItem.type === 'story') {
      sections.story.push({
        id: savedItem.itemId,
        cityId: city.id,
        title: city.story.title,
        image: city.story.image,
        summary: city.story.excerpt,
        cityName: city.name,
        englishName: city.englishName,
        url: `/pages/story/index?cityId=${city.id}`
      });
      return;
    }

    if (savedItem.type === 'food') {
      const item = city.food.find((food) => food.id === savedItem.itemId);
      if (!item) {
        return;
      }

      sections.food.push({
        id: item.id,
        cityId: city.id,
        title: item.name,
        image: item.image,
        summary: item.desc,
        cityName: city.name,
        englishName: city.englishName,
        url: `/pages/food/index?cityId=${city.id}`
      });
      return;
    }

    if (savedItem.type === 'scenery') {
      const item = city.scenery.find((scene) => scene.id === savedItem.itemId);
      if (!item) {
        return;
      }

      sections.scenery.push({
        id: item.id,
        cityId: city.id,
        title: item.theme,
        image: item.image,
        summary: item.caption,
        cityName: city.name,
        englishName: city.englishName,
        url: `/pages/scenery/index?cityId=${city.id}`
      });
    }
  });

  return [
    {
      key: 'story',
      label: '故事',
      items: sections.story
    },
    {
      key: 'food',
      label: '风味',
      items: sections.food
    },
    {
      key: 'scenery',
      label: '风景',
      items: sections.scenery
    }
  ];
}

module.exports = {
  getCities,
  getCitySummaries,
  getCityById,
  buildSavedSections
};


