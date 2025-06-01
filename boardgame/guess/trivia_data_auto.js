const triviaDataAuto = [
    // 人体奥秘
    {
        "Question": "人类大脑平均每天会产生多少个想法？",
        "Answer": 60000,
        "Type": "人体奥秘",
        "Level": 1,
        "Source": "National Science Foundation",
        "Source_Link": "https://www.nsf.gov/news/special_reports/brain/"
    },
    {
        "Question": "一个成年人平均每天眨眼多少次？",
        "Answer": 15000,
        "Type": "人体奥秘",
        "Level": 1,
        "Source": "American Academy of Ophthalmology",
        "Source_Link": "https://www.aao.org/"
    },
    {
        "Question": "人类一生中平均会走多少步？",
        "Answer": 216000000,
        "Type": "人体奥秘",
        "Level": 2,
        "Source": "《人类生理学》",
        "Source_Link": ""
    },
    {
        "Question": "成年人平均每天呼吸多少次？",
        "Answer": 23000,
        "Type": "人体奥秘",
        "Level": 1,
        "Source": "《呼吸生理学》",
        "Source_Link": ""
    },
    {
        "Question": "人体内约有多少个细胞？",
        "Answer": 37200000000000,
        "Type": "人体奥秘",
        "Level": 3,
        "Source": "《细胞生物学》",
        "Source_Link": ""
    },

    // 动漫游戏
    {
        "Question": "《海贼王》漫画连载至今已超过多少话？",
        "Answer": 1100,
        "Type": "动漫游戏",
        "Level": 1,
        "Source": "集英社官方数据",
        "Source_Link": "https://www.shonenjump.com/"
    },
    {
        "Question": "《我的世界》全球总销量超过多少份？",
        "Answer": 238000000,
        "Type": "动漫游戏",
        "Level": 2,
        "Source": "Mojang Studios官方数据",
        "Source_Link": "https://www.minecraft.net/"
    },
    {
        "Question": "《钢之炼金术师》漫画连载总话数是多少？",
        "Answer": 108,
        "Type": "动漫游戏",
        "Level": 1,
        "Source": "《钢之炼金术师完全版》",
        "Source_Link": ""
    },
    {
        "Question": "《死亡笔记》漫画连载总话数是多少？",
        "Answer": 108,
        "Type": "动漫游戏",
        "Level": 1,
        "Source": "《死亡笔记完全版》",
        "Source_Link": ""
    },
    {
        "Question": "《EVA》系列动画总集数（包括剧场版）是多少？",
        "Answer": 26,
        "Type": "动漫游戏",
        "Level": 1,
        "Source": "Khara官方数据",
        "Source_Link": "https://www.khara.co.jp/"
    },

    // 历史事件
    {
        "Question": "秦始皇统一中国时，秦国的军队有多少人？",
        "Answer": 1000000,
        "Type": "历史数据",
        "Level": 2,
        "Source": "《史记·秦始皇本纪》",
        "Source_Link": ""
    },
    {
        "Question": "郑和下西洋时，最大的宝船长度约多少米？",
        "Answer": 151,
        "Type": "历史数据",
        "Level": 2,
        "Source": "《明史·郑和传》",
        "Source_Link": ""
    },
    {
        "Question": "古埃及金字塔建造时，平均每天需要搬运多少块石头？",
        "Answer": 800,
        "Type": "历史数据",
        "Level": 2,
        "Source": "《古埃及建筑史》",
        "Source_Link": ""
    },
    {
        "Question": "罗马斗兽场最多可容纳多少观众？",
        "Answer": 50000,
        "Type": "历史数据",
        "Level": 2,
        "Source": "《罗马建筑史》",
        "Source_Link": ""
    },
    {
        "Question": "明朝郑和下西洋时，船队携带的船员总数达到多少？",
        "Answer": 27800,
        "Type": "历史数据",
        "Level": 2,
        "Source": "《明史·郑和传》",
        "Source_Link": ""
    },

    // 科技发展
    {
        "Question": "2023年全球互联网用户总数达到多少亿？",
        "Answer": 53,
        "Type": "科技相关",
        "Level": 1,
        "Source": "Internet World Stats",
        "Source_Link": "https://www.internetworldstats.com/"
    },
    {
        "Question": "ChatGPT发布后，用户数达到1亿用了多少天？",
        "Answer": 2,
        "Type": "科技相关",
        "Level": 2,
        "Source": "UBS Research Report",
        "Source_Link": ""
    },
    {
        "Question": "2023年全球最大数据中心占地面积达到多少平方米？",
        "Answer": 1000000,
        "Type": "科技相关",
        "Level": 2,
        "Source": "Data Center Frontier",
        "Source_Link": "https://datacenterfrontier.com/"
    },
    {
        "Question": "2023年全球最大望远镜FAST直径达到多少米？",
        "Answer": 500,
        "Type": "科技相关",
        "Level": 2,
        "Source": "中国科学院",
        "Source_Link": "http://www.cas.cn/"
    },
    {
        "Question": "2023年全球最大粒子对撞机LHC周长达到多少公里？",
        "Answer": 27,
        "Type": "科技相关",
        "Level": 2,
        "Source": "CERN",
        "Source_Link": "https://home.cern/"
    },

    // 自然地理
    {
        "Question": "地球上最深的海沟马里亚纳海沟深度约多少米？",
        "Answer": 11034,
        "Type": "自然地理",
        "Level": 2,
        "Source": "美国国家海洋和大气管理局",
        "Source_Link": "https://www.noaa.gov/"
    },
    {
        "Question": "世界上最高的瀑布安赫尔瀑布高度约多少米？",
        "Answer": 979,
        "Type": "自然地理",
        "Level": 2,
        "Source": "吉尼斯世界纪录",
        "Source_Link": "https://www.guinnessworldrecords.com/"
    },
    {
        "Question": "地球上最大的活火山冒纳罗亚火山高度约多少米？",
        "Answer": 4169,
        "Type": "自然地理",
        "Level": 2,
        "Source": "美国地质调查局",
        "Source_Link": "https://www.usgs.gov/"
    },
    {
        "Question": "地球上最大的珊瑚礁大堡礁长度约多少公里？",
        "Answer": 2300,
        "Type": "自然地理",
        "Level": 2,
        "Source": "联合国教科文组织",
        "Source_Link": "https://whc.unesco.org/"
    },
    {
        "Question": "地球上最大的冰川南极冰盖面积约多少万平方公里？",
        "Answer": 1400,
        "Type": "自然地理",
        "Level": 2,
        "Source": "美国国家冰雪数据中心",
        "Source_Link": "https://nsidc.org/"
    },

    // 科学发现
    {
        "Question": "光速约为每秒多少公里？",
        "Answer": 299792,
        "Type": "科学发现",
        "Level": 2,
        "Source": "国际计量局",
        "Source_Link": "https://www.bipm.org/"
    },
    {
        "Question": "人类DNA中约有多少个碱基对？",
        "Answer": 3000000000,
        "Type": "科学发现",
        "Level": 2,
        "Source": "人类基因组计划",
        "Source_Link": "https://www.genome.gov/"
    },
    {
        "Question": "太阳表面温度约多少摄氏度？",
        "Answer": 5500,
        "Type": "科学发现",
        "Level": 2,
        "Source": "NASA",
        "Source_Link": "https://www.nasa.gov/"
    },
    {
        "Question": "地球上已知的动物物种约有多少种？",
        "Answer": 8700000,
        "Type": "科学发现",
        "Level": 2,
        "Source": "《自然》杂志",
        "Source_Link": "https://www.nature.com/"
    },
    {
        "Question": "人类大脑中约有多少个神经元？",
        "Answer": 86000000000,
        "Type": "科学发现",
        "Level": 3,
        "Source": "《科学》杂志",
        "Source_Link": "https://www.science.org/"
    },

    // 社会现象
    {
        "Question": "2023年全球人口总数达到多少亿？",
        "Answer": 80.2,
        "Type": "社会现象",
        "Level": 1,
        "Source": "联合国人口司",
        "Source_Link": "https://population.un.org/"
    },
    {
        "Question": "2023年全球最大城市东京都市圈人口达到多少万？",
        "Answer": 3740,
        "Type": "社会现象",
        "Level": 2,
        "Source": "日本总务省",
        "Source_Link": "https://www.stat.go.jp/"
    },
    {
        "Question": "2023年全球最大机场迪拜国际机场年旅客吞吐量达到多少？",
        "Answer": 88000000,
        "Type": "社会现象",
        "Level": 2,
        "Source": "国际机场协会",
        "Source_Link": "https://www.aci.aero/"
    },
    {
        "Question": "2023年全球最大港口上海港年货物吞吐量达到多少吨？",
        "Answer": 470000000,
        "Type": "社会现象",
        "Level": 2,
        "Source": "上海港务集团",
        "Source_Link": "https://www.portshanghai.com.cn/"
    },
    {
        "Question": "2023年全球最大地铁系统上海地铁总里程达到多少公里？",
        "Answer": 831,
        "Type": "社会现象",
        "Level": 2,
        "Source": "上海地铁官网",
        "Source_Link": "https://www.shmetro.com/"
    },

    // 动漫游戏（第二批）
    {
        "Question": "《进击的巨人》漫画连载总话数是多少？",
        "Answer": 139,
        "Type": "动漫游戏",
        "Level": 1,
        "Source": "讲谈社官方数据",
        "Source_Link": "https://kc.kodansha.co.jp/"
    },
    {
        "Question": "《鬼灭之刃》漫画连载总话数是多少？",
        "Answer": 205,
        "Type": "动漫游戏",
        "Level": 1,
        "Source": "集英社官方数据",
        "Source_Link": "https://www.shonenjump.com/"
    },
    {
        "Question": "《GTA5》全球总销量超过多少份？",
        "Answer": 185000000,
        "Type": "动漫游戏",
        "Level": 2,
        "Source": "Take-Two Interactive财报",
        "Source_Link": "https://www.take2games.com/"
    },
    {
        "Question": "《塞尔达传说：旷野之息》全球销量超过多少份？",
        "Answer": 31000000,
        "Type": "动漫游戏",
        "Level": 2,
        "Source": "任天堂财报",
        "Source_Link": "https://www.nintendo.co.jp/"
    },
    {
        "Question": "《原神》2023年全球月活跃用户数达到多少？",
        "Answer": 64000000,
        "Type": "动漫游戏",
        "Level": 2,
        "Source": "米哈游官方数据",
        "Source_Link": "https://www.mihoyo.com/"
    },

    // 历史事件（第二批）
    {
        "Question": "第一次世界大战期间，参战国家总数达到多少个？",
        "Answer": 32,
        "Type": "历史数据",
        "Level": 2,
        "Source": "《第一次世界大战史》",
        "Source_Link": ""
    },
    {
        "Question": "第二次世界大战期间，全球死亡人数约多少？",
        "Answer": 70000000,
        "Type": "历史数据",
        "Level": 2,
        "Source": "《第二次世界大战史》",
        "Source_Link": ""
    },
    {
        "Question": "明朝永乐年间，郑和下西洋的船队规模最大时达到多少艘？",
        "Answer": 200,
        "Type": "历史数据",
        "Level": 2,
        "Source": "《明史·郑和传》",
        "Source_Link": ""
    },
    {
        "Question": "清朝康熙年间，全国人口总数约多少？",
        "Answer": 150000000,
        "Type": "历史数据",
        "Level": 2,
        "Source": "《清史稿·食货志》",
        "Source_Link": ""
    },
    {
        "Question": "古埃及金字塔建造时，平均每块石头的重量约多少吨？",
        "Answer": 2.5,
        "Type": "历史数据",
        "Level": 2,
        "Source": "《古埃及建筑史》",
        "Source_Link": ""
    },

    // 科技发展（第二批）
    {
        "Question": "2023年全球智能手机用户总数达到多少亿？",
        "Answer": 68,
        "Type": "科技相关",
        "Level": 2,
        "Source": "Statista全球数据",
        "Source_Link": "https://www.statista.com/"
    },
    {
        "Question": "2023年全球最大芯片制造商台积电的5nm工艺芯片晶体管密度达到每平方毫米多少亿个？",
        "Answer": 1.73,
        "Type": "芯片制造",
        "Level": 2,
        "Source": "台积电技术白皮书",
        "Source_Link": "https://www.tsmc.com/"
    },
    {
        "Question": "2023年全球最大芯片设计公司英伟达GPU年出货量达到多少亿颗？",
        "Answer": 2.8,
        "Type": "芯片制造",
        "Level": 2,
        "Source": "英伟达财报",
        "Source_Link": "https://www.nvidia.com/"
    },
    {
        "Question": "2023年全球最大风力发电机组单机容量达到多少兆瓦？",
        "Answer": 16,
        "Type": "科技相关",
        "Level": 2,
        "Source": "全球风能理事会",
        "Source_Link": "https://gwec.net/"
    },
    {
        "Question": "2023年全球最大量子计算机的量子比特数达到多少个？",
        "Answer": 433,
        "Type": "科技相关",
        "Level": 3,
        "Source": "IBM量子计算研究",
        "Source_Link": "https://www.ibm.com/quantum-computing/"
    },

    // 自然地理（第二批）
    {
        "Question": "地球上最大的沙漠撒哈拉沙漠面积约多少万平方公里？",
        "Answer": 906,
        "Type": "自然地理",
        "Level": 2,
        "Source": "联合国环境规划署",
        "Source_Link": "https://www.unep.org/"
    },
    {
        "Question": "地球上最大的淡水湖苏必利尔湖面积约多少万平方公里？",
        "Answer": 8.2,
        "Type": "自然地理",
        "Level": 2,
        "Source": "美国地质调查局",
        "Source_Link": "https://www.usgs.gov/"
    },
    {
        "Question": "地球上最长的河流尼罗河长度约多少公里？",
        "Answer": 6650,
        "Type": "自然地理",
        "Level": 2,
        "Source": "美国国家地理学会",
        "Source_Link": "https://www.nationalgeographic.org/"
    },
    {
        "Question": "地球上最高的山脉喜马拉雅山脉平均海拔约多少米？",
        "Answer": 6100,
        "Type": "自然地理",
        "Level": 2,
        "Source": "美国地质调查局",
        "Source_Link": "https://www.usgs.gov/"
    },
    {
        "Question": "地球上最大的热带雨林亚马逊雨林面积约多少万平方公里？",
        "Answer": 550,
        "Type": "自然地理",
        "Level": 2,
        "Source": "世界自然基金会",
        "Source_Link": "https://www.worldwildlife.org/"
    },

    // 科学发现（第二批）
    {
        "Question": "人类基因组中约有多少个基因？",
        "Answer": 20000,
        "Type": "科学发现",
        "Level": 2,
        "Source": "人类基因组计划",
        "Source_Link": "https://www.genome.gov/"
    },
    {
        "Question": "太阳系中最大的行星木星的质量是地球的多少倍？",
        "Answer": 318,
        "Type": "科学发现",
        "Level": 2,
        "Source": "NASA",
        "Source_Link": "https://www.nasa.gov/"
    },
    {
        "Question": "光在真空中传播一年的距离约多少光年？",
        "Answer": 1,
        "Type": "科学发现",
        "Level": 2,
        "Source": "国际天文学联合会",
        "Source_Link": "https://www.iau.org/"
    },
    {
        "Question": "地球上已知最古老的化石年龄约多少亿年？",
        "Answer": 3.5,
        "Type": "科学发现",
        "Level": 2,
        "Source": "《自然》杂志",
        "Source_Link": "https://www.nature.com/"
    },
    {
        "Question": "人类大脑中约有多少个突触连接？",
        "Answer": 100000000000000,
        "Type": "科学发现",
        "Level": 3,
        "Source": "《科学》杂志",
        "Source_Link": "https://www.science.org/"
    },

    // 经济数据（第一批）
    {
        "Question": "2023年全球最大经济体美国GDP达到多少万亿美元？",
        "Answer": 26.9,
        "Type": "经济数据",
        "Level": 2,
        "Source": "世界银行",
        "Source_Link": "https://data.worldbank.org/"
    },
    {
        "Question": "2023年全球最大贸易港口上海港年集装箱吞吐量达到多少标准箱？",
        "Answer": 47300000,
        "Type": "经济数据",
        "Level": 2,
        "Source": "上海港务集团",
        "Source_Link": "https://www.portshanghai.com.cn/"
    },
    {
        "Question": "2023年全球最大电商平台亚马逊年营收达到多少亿美元？",
        "Answer": 5748,
        "Type": "经济数据",
        "Level": 2,
        "Source": "亚马逊财报",
        "Source_Link": "https://ir.aboutamazon.com/"
    },
    {
        "Question": "2023年全球最大科技公司苹果公司市值达到多少万亿美元？",
        "Answer": 3.1,
        "Type": "经济数据",
        "Level": 2,
        "Source": "纳斯达克",
        "Source_Link": "https://www.nasdaq.com/"
    },
    {
        "Question": "2023年全球最大银行中国工商银行总资产达到多少万亿元人民币？",
        "Answer": 39.6,
        "Type": "经济数据",
        "Level": 2,
        "Source": "中国工商银行年报",
        "Source_Link": "https://www.icbc.com.cn/"
    },

    // 文化娱乐（第一批）
    {
        "Question": "2023年全球最高票房电影《奥本海默》全球票房达到多少亿美元？",
        "Answer": 9.55,
        "Type": "文化娱乐",
        "Level": 2,
        "Source": "Box Office Mojo",
        "Source_Link": "https://www.boxofficemojo.com/"
    },
    {
        "Question": "2023年全球最大音乐流媒体平台Spotify月活跃用户数达到多少亿？",
        "Answer": 5.74,
        "Type": "文化娱乐",
        "Level": 2,
        "Source": "Spotify财报",
        "Source_Link": "https://investors.spotify.com/"
    },
    {
        "Question": "2023年全球最大视频平台YouTube日活跃用户数达到多少亿？",
        "Answer": 25.6,
        "Type": "文化娱乐",
        "Level": 2,
        "Source": "Google财报",
        "Source_Link": "https://abc.xyz/investor/"
    },
    {
        "Question": "2023年全球最大游戏直播平台Twitch月活跃用户数达到多少亿？",
        "Answer": 1.8,
        "Type": "文化娱乐",
        "Level": 2,
        "Source": "Twitch官方数据",
        "Source_Link": "https://www.twitch.tv/"
    },
    {
        "Question": "2023年全球最大社交媒体平台Facebook月活跃用户数达到多少亿？",
        "Answer": 30.5,
        "Type": "文化娱乐",
        "Level": 2,
        "Source": "Meta财报",
        "Source_Link": "https://investor.fb.com/"
    },

    // 体育竞技（第一批）
    {
        "Question": "2023年全球最高收视率体育赛事卡塔尔世界杯决赛观看人数达到多少亿？",
        "Answer": 15,
        "Type": "体育竞技",
        "Level": 2,
        "Source": "国际足联",
        "Source_Link": "https://www.fifa.com/"
    },
    {
        "Question": "2023年全球最大体育场馆印度莫迪体育场可容纳多少观众？",
        "Answer": 132000,
        "Type": "体育竞技",
        "Level": 2,
        "Source": "吉尼斯世界纪录",
        "Source_Link": "https://www.guinnessworldrecords.com/"
    },
    {
        "Question": "2023年全球最高收入运动员梅西年收入达到多少亿美元？",
        "Answer": 1.3,
        "Type": "体育竞技",
        "Level": 2,
        "Source": "福布斯",
        "Source_Link": "https://www.forbes.com/"
    },
    {
        "Question": "2023年全球最大体育赛事奥运会参赛国家数量达到多少个？",
        "Answer": 206,
        "Type": "体育竞技",
        "Level": 2,
        "Source": "国际奥委会",
        "Source_Link": "https://www.olympic.org/"
    },
    {
        "Question": "2023年全球最高收视率篮球赛事NBA总决赛观看人数达到多少亿？",
        "Answer": 2.4,
        "Type": "体育竞技",
        "Level": 2,
        "Source": "NBA官方数据",
        "Source_Link": "https://www.nba.com/"
    },

    // 军事科技（第一批）
    {
        "Question": "2023年全球最大航空母舰福特号排水量达到多少万吨？",
        "Answer": 10.2,
        "Type": "军事科技",
        "Level": 2,
        "Source": "美国海军",
        "Source_Link": "https://www.navy.mil/"
    },
    {
        "Question": "2023年全球最快战斗机SR-71黑鸟最高速度达到多少马赫？",
        "Answer": 3.3,
        "Type": "军事科技",
        "Level": 2,
        "Source": "美国空军",
        "Source_Link": "https://www.af.mil/"
    },
    {
        "Question": "2023年全球最大核潜艇台风级排水量达到多少吨？",
        "Answer": 48000,
        "Type": "军事科技",
        "Level": 2,
        "Source": "《简氏防务周刊》",
        "Source_Link": "https://www.janes.com/"
    },
    {
        "Question": "2023年全球最大军用运输机安-225最大载重量达到多少吨？",
        "Answer": 250,
        "Type": "军事科技",
        "Level": 2,
        "Source": "《航空周刊》",
        "Source_Link": "https://aviationweek.com/"
    },
    {
        "Question": "2023年全球最大坦克T-14阿玛塔主战坦克重量达到多少吨？",
        "Answer": 55,
        "Type": "军事科技",
        "Level": 2,
        "Source": "《军事技术》",
        "Source_Link": ""
    },

    // 教育科技（第一批）
    {
        "Question": "2023年全球最大在线教育平台Coursera注册用户数达到多少万？",
        "Answer": 9200,
        "Type": "教育科技",
        "Level": 2,
        "Source": "Coursera财报",
        "Source_Link": "https://investors.coursera.org/"
    },
    {
        "Question": "2023年全球最大大学系统印度国立开放大学在校生人数达到多少万？",
        "Answer": 350,
        "Type": "教育科技",
        "Level": 2,
        "Source": "联合国教科文组织",
        "Source_Link": "https://en.unesco.org/"
    },
    {
        "Question": "2023年全球最大图书馆美国国会图书馆藏书量达到多少册？",
        "Answer": 173000000,
        "Type": "教育科技",
        "Level": 2,
        "Source": "美国国会图书馆",
        "Source_Link": "https://www.loc.gov/"
    },
    {
        "Question": "2023年全球最大博物馆卢浮宫年参观人数达到多少万？",
        "Answer": 810,
        "Type": "教育科技",
        "Level": 2,
        "Source": "卢浮宫官方数据",
        "Source_Link": "https://www.louvre.fr/"
    },
    {
        "Question": "2023年全球最大科技博物馆德意志博物馆展品数量达到多少件？",
        "Answer": 28000,
        "Type": "教育科技",
        "Level": 2,
        "Source": "德意志博物馆",
        "Source_Link": "https://www.deutsches-museum.de/"
    },

    // 交通物流（第一批）
    {
        "Question": "2023年全球最大航空公司美国航空机队规模达到多少架？",
        "Answer": 956,
        "Type": "交通物流",
        "Level": 2,
        "Source": "美国航空财报",
        "Source_Link": "https://www.aa.com/"
    },
    {
        "Question": "2023年全球最大铁路系统中国铁路总里程达到多少万公里？",
        "Answer": 15.5,
        "Type": "交通物流",
        "Level": 2,
        "Source": "中国国家铁路局",
        "Source_Link": "http://www.nra.gov.cn/"
    },
    {
        "Question": "2023年全球最大快递公司UPS年包裹投递量达到多少件？",
        "Answer": 21000000000,
        "Type": "交通物流",
        "Level": 2,
        "Source": "UPS财报",
        "Source_Link": "https://investors.ups.com/"
    },
    {
        "Question": "2023年全球最大汽车制造商丰田汽车年产量达到多少万辆？",
        "Answer": 1050,
        "Type": "交通物流",
        "Level": 2,
        "Source": "丰田汽车财报",
        "Source_Link": "https://global.toyota/"
    },
    {
        "Question": "2023年全球最大共享出行平台Uber月活跃用户数达到多少亿？",
        "Answer": 1.31,
        "Type": "交通物流",
        "Level": 2,
        "Source": "Uber财报",
        "Source_Link": "https://investor.uber.com/"
    },

    // 医疗健康（第一批）
    {
        "Question": "2023年全球最大制药公司辉瑞年营收达到多少亿美元？",
        "Answer": 585,
        "Type": "医疗健康",
        "Level": 2,
        "Source": "辉瑞财报",
        "Source_Link": "https://www.pfizer.com/"
    },
    {
        "Question": "2023年全球最大医院梅奥诊所年接诊量达到多少万人次？",
        "Answer": 130,
        "Type": "医疗健康",
        "Level": 2,
        "Source": "梅奥诊所年报",
        "Source_Link": "https://www.mayoclinic.org/"
    },
    {
        "Question": "2023年全球最大医疗器械公司美敦力年营收达到多少亿美元？",
        "Answer": 312,
        "Type": "医疗健康",
        "Level": 2,
        "Source": "美敦力财报",
        "Source_Link": "https://www.medtronic.com/"
    },
    {
        "Question": "2023年全球最大医疗保险公司联合健康年营收达到多少亿美元？",
        "Answer": 3242,
        "Type": "医疗健康",
        "Level": 2,
        "Source": "联合健康财报",
        "Source_Link": "https://www.unitedhealthgroup.com/"
    },
    {
        "Question": "2023年全球最大医疗研究机构美国国立卫生研究院年度预算达到多少亿美元？",
        "Answer": 470,
        "Type": "医疗健康",
        "Level": 2,
        "Source": "美国国立卫生研究院",
        "Source_Link": "https://www.nih.gov/"
    },

    // 能源环保（第一批）
    {
        "Question": "2023年全球最大石油公司沙特阿美年产量达到多少亿桶？",
        "Answer": 35.6,
        "Type": "能源环保",
        "Level": 2,
        "Source": "沙特阿美财报",
        "Source_Link": "https://www.aramco.com/"
    },
    {
        "Question": "2023年全球最大风力发电场中国甘肃酒泉风电基地装机容量达到多少万千瓦？",
        "Answer": 2000,
        "Type": "能源环保",
        "Level": 2,
        "Source": "中国国家能源局",
        "Source_Link": "http://www.nea.gov.cn/"
    },
    {
        "Question": "2023年全球最大核电站日本柏崎刈羽核电站装机容量达到多少万千瓦？",
        "Answer": 821,
        "Type": "能源环保",
        "Level": 2,
        "Source": "国际原子能机构",
        "Source_Link": "https://www.iaea.org/"
    },
    {
        "Question": "2023年全球最大水电站中国三峡水电站年发电量达到多少亿千瓦时？",
        "Answer": 1118,
        "Type": "能源环保",
        "Level": 2,
        "Source": "中国长江电力",
        "Source_Link": "http://www.cypc.com.cn/"
    },
    {
        "Question": "2023年全球最大太阳能发电站中国青海共和光伏电站装机容量达到多少万千瓦？",
        "Answer": 850,
        "Type": "能源环保",
        "Level": 2,
        "Source": "中国国家能源局",
        "Source_Link": "http://www.nea.gov.cn/"
    },

    // 建筑工程（第一批）
    {
        "Question": "2023年全球最高建筑哈利法塔高度达到多少米？",
        "Answer": 828,
        "Type": "建筑工程",
        "Level": 2,
        "Source": "吉尼斯世界纪录",
        "Source_Link": "https://www.guinnessworldrecords.com/"
    },
    {
        "Question": "2023年全球最长跨海大桥港珠澳大桥总长度达到多少公里？",
        "Answer": 55,
        "Type": "建筑工程",
        "Level": 2,
        "Source": "中国交通运输部",
        "Source_Link": "http://www.mot.gov.cn/"
    },
    {
        "Question": "2023年全球最大体育场印度莫迪体育场建筑面积达到多少万平方米？",
        "Answer": 20.7,
        "Type": "建筑工程",
        "Level": 2,
        "Source": "印度体育部",
        "Source_Link": "https://yas.nic.in/"
    },
    {
        "Question": "2023年全球最大机场航站楼北京大兴国际机场T1航站楼建筑面积达到多少万平方米？",
        "Answer": 78,
        "Type": "建筑工程",
        "Level": 2,
        "Source": "中国民航局",
        "Source_Link": "http://www.caac.gov.cn/"
    },
    {
        "Question": "2023年全球最大地下工程系统东京地铁总长度达到多少公里？",
        "Answer": 304.1,
        "Type": "建筑工程",
        "Level": 2,
        "Source": "东京地铁公司",
        "Source_Link": "https://www.tokyometro.jp/"
    },

    // 农业食品（第一批）
    {
        "Question": "2023年全球最大农业公司嘉吉年营收达到多少亿美元？",
        "Answer": 1650,
        "Type": "农业食品",
        "Level": 2,
        "Source": "嘉吉财报",
        "Source_Link": "https://www.cargill.com/"
    },
    {
        "Question": "2023年全球最大食品公司雀巢年营收达到多少亿瑞士法郎？",
        "Answer": 944,
        "Type": "农业食品",
        "Level": 2,
        "Source": "雀巢财报",
        "Source_Link": "https://www.nestle.com/"
    },
    {
        "Question": "2023年全球最大饮料公司可口可乐年销量达到多少亿升？",
        "Answer": 190,
        "Type": "农业食品",
        "Level": 2,
        "Source": "可口可乐财报",
        "Source_Link": "https://investors.coca-colacompany.com/"
    },
    {
        "Question": "2023年全球最大快餐连锁麦当劳全球门店数量达到多少家？",
        "Answer": 40000,
        "Type": "农业食品",
        "Level": 2,
        "Source": "麦当劳财报",
        "Source_Link": "https://corporate.mcdonalds.com/"
    },
    {
        "Question": "2023年全球最大咖啡连锁星巴克全球门店数量达到多少家？",
        "Answer": 36000,
        "Type": "农业食品",
        "Level": 2,
        "Source": "星巴克财报",
        "Source_Link": "https://investor.starbucks.com/"
    },

    // 金融投资（第一批）
    {
        "Question": "2023年全球最大投资银行摩根大通总资产达到多少万亿美元？",
        "Answer": 3.7,
        "Type": "金融投资",
        "Level": 2,
        "Source": "摩根大通财报",
        "Source_Link": "https://www.jpmorganchase.com/"
    },
    {
        "Question": "2023年全球最大资产管理公司贝莱德管理资产规模达到多少万亿美元？",
        "Answer": 9.1,
        "Type": "金融投资",
        "Level": 2,
        "Source": "贝莱德财报",
        "Source_Link": "https://www.blackrock.com/"
    },
    {
        "Question": "2023年全球最大证券交易所纽约证券交易所上市公司总市值达到多少万亿美元？",
        "Answer": 25.6,
        "Type": "金融投资",
        "Level": 2,
        "Source": "纽约证券交易所",
        "Source_Link": "https://www.nyse.com/"
    },
    {
        "Question": "2023年全球最大保险公司安盛保险年保费收入达到多少亿欧元？",
        "Answer": 1023,
        "Type": "金融投资",
        "Level": 2,
        "Source": "安盛保险财报",
        "Source_Link": "https://www.axa.com/"
    },
    {
        "Question": "2023年全球最大对冲基金桥水基金管理资产规模达到多少亿美元？",
        "Answer": 2350,
        "Type": "金融投资",
        "Level": 2,
        "Source": "《机构投资者》",
        "Source_Link": "https://www.institutionalinvestor.com/"
    },

    // 零售商业（第一批）
    {
        "Question": "2023年全球最大零售商沃尔玛年营收达到多少亿美元？",
        "Answer": 6113,
        "Type": "零售商业",
        "Level": 2,
        "Source": "沃尔玛财报",
        "Source_Link": "https://corporate.walmart.com/"
    },
    {
        "Question": "2023年全球最大电商平台阿里巴巴年营收达到多少亿元人民币？",
        "Answer": 8686,
        "Type": "零售商业",
        "Level": 2,
        "Source": "阿里巴巴财报",
        "Source_Link": "https://www.alibabagroup.com/"
    },
    {
        "Question": "2023年全球最大奢侈品集团LVMH年营收达到多少亿欧元？",
        "Answer": 792,
        "Type": "零售商业",
        "Level": 2,
        "Source": "LVMH财报",
        "Source_Link": "https://www.lvmh.com/"
    },
    {
        "Question": "2023年全球最大连锁超市家乐福全球门店数量达到多少家？",
        "Answer": 13800,
        "Type": "零售商业",
        "Level": 2,
        "Source": "家乐福财报",
        "Source_Link": "https://www.carrefour.com/"
    },
    {
        "Question": "2023年全球最大购物中心迪拜购物中心年客流量达到多少万人次？",
        "Answer": 8500,
        "Type": "零售商业",
        "Level": 2,
        "Source": "迪拜购物中心",
        "Source_Link": "https://thedubaimall.com/"
    },

    // 通信科技（第一批）
    {
        "Question": "2023年全球最大通信运营商中国移动用户数达到多少亿？",
        "Answer": 9.7,
        "Type": "通信科技",
        "Level": 2,
        "Source": "中国移动财报",
        "Source_Link": "https://www.chinamobileltd.com/"
    },
    {
        "Question": "2023年全球最大手机制造商三星电子年销量达到多少亿台？",
        "Answer": 2.6,
        "Type": "通信科技",
        "Level": 2,
        "Source": "三星电子财报",
        "Source_Link": "https://www.samsung.com/"
    },
    {
        "Question": "2023年全球最大通信设备制造商华为年营收达到多少亿元人民币？",
        "Answer": 7042,
        "Type": "通信科技",
        "Level": 2,
        "Source": "华为财报",
        "Source_Link": "https://www.huawei.com/"
    },
    {
        "Question": "2023年全球最大卫星导航系统GPS在轨卫星数量达到多少颗？",
        "Answer": 31,
        "Type": "通信科技",
        "Level": 2,
        "Source": "美国空军",
        "Source_Link": "https://www.af.mil/"
    },
    {
        "Question": "2023年全球最大通信卫星运营商Intelsat在轨卫星数量达到多少颗？",
        "Answer": 52,
        "Type": "通信科技",
        "Level": 2,
        "Source": "Intelsat财报",
        "Source_Link": "https://www.intelsat.com/"
    },

    // 旅游酒店（第一批）
    {
        "Question": "2023年全球最大酒店集团万豪国际全球客房数量达到多少间？",
        "Answer": 1400000,
        "Type": "旅游酒店",
        "Level": 2,
        "Source": "万豪国际财报",
        "Source_Link": "https://marriott.gcs-web.com/"
    },
    {
        "Question": "2023年全球最大旅游景点迪士尼乐园年游客量达到多少万人次？",
        "Answer": 5800,
        "Type": "旅游酒店",
        "Level": 2,
        "Source": "迪士尼财报",
        "Source_Link": "https://thewaltdisneycompany.com/"
    },
    {
        "Question": "2023年全球最大邮轮公司嘉年华邮轮年载客量达到多少万人次？",
        "Answer": 1300,
        "Type": "旅游酒店",
        "Level": 2,
        "Source": "嘉年华邮轮财报",
        "Source_Link": "https://www.carnivalcorp.com/"
    },
    {
        "Question": "2023年全球最大旅游网站Booking.com年预订量达到多少亿次？",
        "Answer": 7.5,
        "Type": "旅游酒店",
        "Level": 2,
        "Source": "Booking Holdings财报",
        "Source_Link": "https://www.bookingholdings.com/"
    },
    {
        "Question": "2023年全球最大航空公司联盟星空联盟成员数量达到多少个？",
        "Answer": 26,
        "Type": "旅游酒店",
        "Level": 2,
        "Source": "星空联盟",
        "Source_Link": "https://www.staralliance.com/"
    },

    // 教育科研（第一批）
    {
        "Question": "2023年全球最大大学系统加州大学系统在校生人数达到多少万？",
        "Answer": 28.5,
        "Type": "教育科研",
        "Level": 2,
        "Source": "加州大学系统",
        "Source_Link": "https://www.universityofcalifornia.edu/"
    },
    {
        "Question": "2023年全球最大科研机构中国科学院年度科研经费达到多少亿元人民币？",
        "Answer": 680,
        "Type": "教育科研",
        "Level": 2,
        "Source": "中国科学院",
        "Source_Link": "http://www.cas.cn/"
    },
    {
        "Question": "2023年全球最大科技园区硅谷年产值达到多少万亿美元？",
        "Answer": 2.8,
        "Type": "教育科研",
        "Level": 2,
        "Source": "硅谷指数",
        "Source_Link": "https://www.siliconvalleyindicators.org/"
    },
    {
        "Question": "2023年全球最大科技孵化器Y Combinator累计投资创业公司数量达到多少家？",
        "Answer": 4000,
        "Type": "教育科研",
        "Level": 2,
        "Source": "Y Combinator",
        "Source_Link": "https://www.ycombinator.com/"
    },
    {
        "Question": "2023年全球最大科技展会CES参展商数量达到多少家？",
        "Answer": 3200,
        "Type": "教育科研",
        "Level": 2,
        "Source": "消费电子展",
        "Source_Link": "https://www.ces.tech/"
    },

    // 制造业（第一批）
    {
        "Question": "2023年全球最大飞机制造商波音公司年交付飞机数量达到多少架？",
        "Answer": 528,
        "Type": "制造业",
        "Level": 2,
        "Source": "波音公司财报",
        "Source_Link": "https://www.boeing.com/"
    },
    {
        "Question": "2023年全球最大造船厂现代重工年造船量达到多少万载重吨？",
        "Answer": 380,
        "Type": "制造业",
        "Level": 2,
        "Source": "现代重工财报",
        "Source_Link": "https://www.hhi.co.kr/"
    },
    {
        "Question": "2023年全球最大钢铁企业安赛乐米塔尔年产量达到多少万吨？",
        "Answer": 7920,
        "Type": "制造业",
        "Level": 2,
        "Source": "安赛乐米塔尔财报",
        "Source_Link": "https://corporate.arcelormittal.com/"
    },
    {
        "Question": "2023年全球最大工程机械制造商卡特彼勒年营收达到多少亿美元？",
        "Answer": 671,
        "Type": "制造业",
        "Level": 2,
        "Source": "卡特彼勒财报",
        "Source_Link": "https://www.caterpillar.com/"
    },
    {
        "Question": "2023年全球最大半导体制造商台积电年营收达到多少亿美元？",
        "Answer": 693,
        "Type": "制造业",
        "Level": 2,
        "Source": "台积电财报",
        "Source_Link": "https://www.tsmc.com/"
    },

    // 房地产（第一批）
    {
        "Question": "2023年全球最大房地产开发商万科年销售额达到多少亿元人民币？",
        "Answer": 3761,
        "Type": "房地产",
        "Level": 2,
        "Source": "万科财报",
        "Source_Link": "https://www.vanke.com/"
    },
    {
        "Question": "2023年全球最大商业地产公司黑石集团管理资产规模达到多少亿美元？",
        "Answer": 9750,
        "Type": "房地产",
        "Level": 2,
        "Source": "黑石集团财报",
        "Source_Link": "https://www.blackstone.com/"
    },
    {
        "Question": "2023年全球最大房地产投资信托基金西蒙地产年营收达到多少亿美元？",
        "Answer": 53.6,
        "Type": "房地产",
        "Level": 2,
        "Source": "西蒙地产财报",
        "Source_Link": "https://www.simon.com/"
    },
    {
        "Question": "2023年全球最大酒店地产投资公司希尔顿全球年营收达到多少亿美元？",
        "Answer": 102.3,
        "Type": "房地产",
        "Level": 2,
        "Source": "希尔顿全球财报",
        "Source_Link": "https://www.hilton.com/"
    },
    {
        "Question": "2023年全球最大写字楼开发商世邦魏理仕管理资产规模达到多少亿美元？",
        "Answer": 1490,
        "Type": "房地产",
        "Level": 2,
        "Source": "世邦魏理仕财报",
        "Source_Link": "https://www.cbre.com/"
    },

    // 媒体娱乐（第一批）
    {
        "Question": "2023年全球最大流媒体平台Netflix订阅用户数达到多少亿？",
        "Answer": 2.47,
        "Type": "媒体娱乐",
        "Level": 2,
        "Source": "Netflix财报",
        "Source_Link": "https://ir.netflix.net/"
    },
    {
        "Question": "2023年全球最大游戏公司腾讯游戏年营收达到多少亿元人民币？",
        "Answer": 1707,
        "Type": "媒体娱乐",
        "Level": 2,
        "Source": "腾讯财报",
        "Source_Link": "https://www.tencent.com/"
    },
    {
        "Question": "2023年全球最大音乐公司环球音乐年营收达到多少亿欧元？",
        "Answer": 103.5,
        "Type": "媒体娱乐",
        "Level": 2,
        "Source": "环球音乐财报",
        "Source_Link": "https://www.universalmusic.com/"
    },
    {
        "Question": "2023年全球最大电影公司迪士尼影业年票房收入达到多少亿美元？",
        "Answer": 48.9,
        "Type": "媒体娱乐",
        "Level": 2,
        "Source": "迪士尼财报",
        "Source_Link": "https://thewaltdisneycompany.com/"
    },
    {
        "Question": "2023年全球最大新闻集团新闻集团年营收达到多少亿美元？",
        "Answer": 98.7,
        "Type": "媒体娱乐",
        "Level": 2,
        "Source": "新闻集团财报",
        "Source_Link": "https://newscorp.com/"
    },

    // 体育产业（第一批）
    {
        "Question": "2023年全球最大体育品牌耐克年营收达到多少亿美元？",
        "Answer": 512,
        "Type": "体育产业",
        "Level": 2,
        "Source": "耐克财报",
        "Source_Link": "https://investors.nike.com/"
    },
    {
        "Question": "2023年全球最大体育赛事奥运会转播权收入达到多少亿美元？",
        "Answer": 41.5,
        "Type": "体育产业",
        "Level": 2,
        "Source": "国际奥委会",
        "Source_Link": "https://www.olympic.org/"
    },
    {
        "Question": "2023年全球最大体育联盟NFL年营收达到多少亿美元？",
        "Answer": 180,
        "Type": "体育产业",
        "Level": 2,
        "Source": "NFL官方数据",
        "Source_Link": "https://www.nfl.com/"
    },
    {
        "Question": "2023年全球最大体育用品零售商迪卡侬全球门店数量达到多少家？",
        "Answer": 1747,
        "Type": "体育产业",
        "Level": 2,
        "Source": "迪卡侬财报",
        "Source_Link": "https://www.decathlon.com/"
    },
    {
        "Question": "2023年全球最大体育博彩公司Flutter年营收达到多少亿英镑？",
        "Answer": 79.5,
        "Type": "体育产业",
        "Level": 2,
        "Source": "Flutter财报",
        "Source_Link": "https://www.flutter.com/"
    },

    // 医疗设备（第一批）
    {
        "Question": "2023年全球最大医疗设备公司强生医疗年营收达到多少亿美元？",
        "Answer": 274.3,
        "Type": "医疗设备",
        "Level": 2,
        "Source": "强生财报",
        "Source_Link": "https://www.jnj.com/"
    },
    {
        "Question": "2023年全球最大医疗器械公司美敦力年研发投入达到多少亿美元？",
        "Answer": 27.5,
        "Type": "医疗设备",
        "Level": 2,
        "Source": "美敦力财报",
        "Source_Link": "https://www.medtronic.com/"
    },
    {
        "Question": "2023年全球最大医疗影像设备公司西门子医疗年营收达到多少亿欧元？",
        "Answer": 217,
        "Type": "医疗设备",
        "Level": 2,
        "Source": "西门子医疗财报",
        "Source_Link": "https://www.siemens-healthineers.com/"
    },
    {
        "Question": "2023年全球最大手术机器人公司直觉外科(Intuitive Surgical)年营收达到多少亿美元？",
        "Answer": 71.2,
        "Type": "医疗设备",
        "Level": 2,
        "Source": "直觉外科财报",
        "Source_Link": "https://www.intuitive.com/"
    },
    {
        "Question": "2023年全球最大牙科设备公司登士柏(Dentsply Sirona)年营收达到多少亿美元？",
        "Answer": 39.6,
        "Type": "医疗设备",
        "Level": 2,
        "Source": "登士柏财报",
        "Source_Link": "https://www.dentsplysirona.com/"
    },

    // 航空航天（第一批）
    {
        "Question": "2023年全球最大商业卫星运营商SpaceX在轨卫星数量达到多少颗？",
        "Answer": 5000,
        "Type": "航空航天",
        "Level": 2,
        "Source": "SpaceX官方数据",
        "Source_Link": "https://www.spacex.com/"
    },
    {
        "Question": "2023年全球最大客机制造商空客公司年交付飞机数量达到多少架？",
        "Answer": 735,
        "Type": "航空航天",
        "Level": 2,
        "Source": "空客公司财报",
        "Source_Link": "https://www.airbus.com/"
    },
    {
        "Question": "2023年全球最大航空发动机制造商通用电气航空年营收达到多少亿美元？",
        "Answer": 286,
        "Type": "航空航天",
        "Level": 2,
        "Source": "通用电气财报",
        "Source_Link": "https://www.ge.com/"
    },
    {
        "Question": "2023年全球最大航天发射场卡纳维拉尔角年发射次数达到多少次？",
        "Answer": 72,
        "Type": "航空航天",
        "Level": 2,
        "Source": "美国太空军",
        "Source_Link": "https://www.spaceforce.mil/"
    },
    {
        "Question": "2023年全球最大商业航天公司蓝色起源年发射次数达到多少次？",
        "Answer": 24,
        "Type": "航空航天",
        "Level": 2,
        "Source": "蓝色起源",
        "Source_Link": "https://www.blueorigin.com/"
    },

    // 海洋工程（第一批）
    {
        "Question": "2023年全球最大海洋工程公司TechnipFMC年营收达到多少亿美元？",
        "Answer": 67.8,
        "Type": "海洋工程",
        "Level": 2,
        "Source": "TechnipFMC财报",
        "Source_Link": "https://www.technipfmc.com/"
    },
    {
        "Question": "2023年全球最大海洋钻井平台运营商Transocean运营平台数量达到多少个？",
        "Answer": 38,
        "Type": "海洋工程",
        "Level": 2,
        "Source": "Transocean财报",
        "Source_Link": "https://www.transocean.com/"
    },
    {
        "Question": "2023年全球最大海洋工程船舶运营商马士基海洋服务船舶数量达到多少艘？",
        "Answer": 430,
        "Type": "海洋工程",
        "Level": 2,
        "Source": "马士基财报",
        "Source_Link": "https://www.maersk.com/"
    },
    {
        "Question": "2023年全球最大海洋工程装备制造商中集集团年营收达到多少亿元人民币？",
        "Answer": 1419,
        "Type": "海洋工程",
        "Level": 2,
        "Source": "中集集团财报",
        "Source_Link": "https://www.cimc.com/"
    },
    {
        "Question": "2023年全球最大海洋工程研究机构伍兹霍尔海洋研究所年度预算达到多少亿美元？",
        "Answer": 2.8,
        "Type": "海洋工程",
        "Level": 2,
        "Source": "伍兹霍尔海洋研究所",
        "Source_Link": "https://www.whoi.edu/"
    },

    // 环境保护（第一批）
    {
        "Question": "2023年全球最大环保组织世界自然基金会年度预算达到多少亿美元？",
        "Answer": 3.2,
        "Type": "环境保护",
        "Level": 2,
        "Source": "世界自然基金会年报",
        "Source_Link": "https://www.worldwildlife.org/"
    },
    {
        "Question": "2023年全球最大环保技术公司威立雅年营收达到多少亿欧元？",
        "Answer": 428,
        "Type": "环境保护",
        "Level": 2,
        "Source": "威立雅财报",
        "Source_Link": "https://www.veolia.com/"
    },
    {
        "Question": "2023年全球最大碳交易市场欧盟碳排放交易体系年交易量达到多少亿吨？",
        "Answer": 8.5,
        "Type": "环境保护",
        "Level": 2,
        "Source": "欧盟委员会",
        "Source_Link": "https://ec.europa.eu/"
    },
    {
        "Question": "2023年全球最大环保认证机构森林管理委员会认证面积达到多少万公顷？",
        "Answer": 23000,
        "Type": "环境保护",
        "Level": 2,
        "Source": "森林管理委员会",
        "Source_Link": "https://fsc.org/"
    },
    {
        "Question": "2023年全球最大环保投资基金贝莱德可持续投资规模达到多少亿美元？",
        "Answer": 3250,
        "Type": "环境保护",
        "Level": 2,
        "Source": "贝莱德财报",
        "Source_Link": "https://www.blackrock.com/"
    },

    // 文化艺术（第一批）
    {
        "Question": "2023年全球最大艺术拍卖行佳士得年成交额达到多少亿美元？",
        "Answer": 84.2,
        "Type": "文化艺术",
        "Level": 2,
        "Source": "佳士得年报",
        "Source_Link": "https://www.christies.com/"
    },
    {
        "Question": "2023年全球最大博物馆系统史密森尼学会年参观人数达到多少万人次？",
        "Answer": 3000,
        "Type": "文化艺术",
        "Level": 2,
        "Source": "史密森尼学会",
        "Source_Link": "https://www.si.edu/"
    },
    {
        "Question": "2023年全球最大艺术博览会巴塞尔艺术展参展画廊数量达到多少家？",
        "Answer": 285,
        "Type": "文化艺术",
        "Level": 2,
        "Source": "巴塞尔艺术展",
        "Source_Link": "https://www.artbasel.com/"
    },
    {
        "Question": "2023年全球最大艺术基金会古根海姆基金会管理资产规模达到多少亿美元？",
        "Answer": 3.5,
        "Type": "文化艺术",
        "Level": 2,
        "Source": "古根海姆基金会",
        "Source_Link": "https://www.guggenheim.org/"
    },
    {
        "Question": "2023年全球最大艺术教育机构皇家艺术学院在校生人数达到多少名？",
        "Answer": 2300,
        "Type": "文化艺术",
        "Level": 2,
        "Source": "皇家艺术学院",
        "Source_Link": "https://www.rca.ac.uk/"
    },

    // 军事工业（第一批）
    {
        "Question": "2023年全球最大军工企业洛克希德·马丁年营收达到多少亿美元？",
        "Answer": 659,
        "Type": "军事工业",
        "Level": 2,
        "Source": "洛克希德·马丁财报",
        "Source_Link": "https://www.lockheedmartin.com/"
    },
    {
        "Question": "2023年全球最大军事装备出口国美国年出口额达到多少亿美元？",
        "Answer": 1537,
        "Type": "军事工业",
        "Level": 2,
        "Source": "美国国务院",
        "Source_Link": "https://www.state.gov/"
    },
    {
        "Question": "2023年全球最大军事研发机构DARPA年度预算达到多少亿美元？",
        "Answer": 38.7,
        "Type": "军事工业",
        "Level": 2,
        "Source": "美国国防部",
        "Source_Link": "https://www.darpa.mil/"
    },
    {
        "Question": "2023年全球最大军事造船厂亨廷顿英格尔斯工业年营收达到多少亿美元？",
        "Answer": 106,
        "Type": "军事工业",
        "Level": 2,
        "Source": "亨廷顿英格尔斯工业财报",
        "Source_Link": "https://www.huntingtoningalls.com/"
    },
    {
        "Question": "2023年全球最大军事电子设备制造商雷神技术年营收达到多少亿美元？",
        "Answer": 673,
        "Type": "军事工业",
        "Level": 2,
        "Source": "雷神技术财报",
        "Source_Link": "https://www.rtx.com/"
    },

    // 新能源（第一批）
    {
        "Question": "2023年全球最大光伏制造商隆基绿能年产能达到多少吉瓦？",
        "Answer": 150,
        "Type": "新能源",
        "Level": 2,
        "Source": "隆基绿能财报",
        "Source_Link": "https://www.longi.com/"
    },
    {
        "Question": "2023年全球最大风电制造商维斯塔斯年装机容量达到多少吉瓦？",
        "Answer": 16.2,
        "Type": "新能源",
        "Level": 2,
        "Source": "维斯塔斯财报",
        "Source_Link": "https://www.vestas.com/"
    },
    {
        "Question": "2023年全球最大储能系统制造商特斯拉年产能达到多少吉瓦时？",
        "Answer": 40,
        "Type": "新能源",
        "Level": 2,
        "Source": "特斯拉财报",
        "Source_Link": "https://www.tesla.com/"
    },
    {
        "Question": "2023年全球最大氢能公司Plug Power年营收达到多少亿美元？",
        "Answer": 8.9,
        "Type": "新能源",
        "Level": 2,
        "Source": "Plug Power财报",
        "Source_Link": "https://www.plugpower.com/"
    },
    {
        "Question": "2023年全球最大地热发电站美国盖瑟斯地热电站装机容量达到多少兆瓦？",
        "Answer": 1517,
        "Type": "新能源",
        "Level": 2,
        "Source": "美国能源部",
        "Source_Link": "https://www.energy.gov/"
    },

    // 人工智能（第一批）
    {
        "Question": "2023年全球最大AI芯片制造商英伟达年营收达到多少亿美元？",
        "Answer": 609,
        "Type": "人工智能",
        "Level": 2,
        "Source": "英伟达财报",
        "Source_Link": "https://www.nvidia.com/"
    },
    {
        "Question": "2023年全球最大AI研究机构OpenAI年研发投入达到多少亿美元？",
        "Answer": 15,
        "Type": "人工智能",
        "Level": 2,
        "Source": "OpenAI",
        "Source_Link": "https://openai.com/"
    },
    {
        "Question": "2023年全球最大AI云服务提供商AWS年营收达到多少亿美元？",
        "Answer": 908,
        "Type": "人工智能",
        "Level": 2,
        "Source": "亚马逊财报",
        "Source_Link": "https://aws.amazon.com/"
    },
    {
        "Question": "2023年全球最大AI机器人公司波士顿动力年营收达到多少亿美元？",
        "Answer": 2.8,
        "Type": "人工智能",
        "Level": 2,
        "Source": "现代汽车集团",
        "Source_Link": "https://www.hyundai.com/"
    },
    {
        "Question": "2023年全球最大AI语音助手用户数达到多少亿？",
        "Answer": 15.6,
        "Type": "人工智能",
        "Level": 2,
        "Source": "Statista",
        "Source_Link": "https://www.statista.com/"
    },

    // 生物科技（第一批）
    {
        "Question": "2023年全球最大生物制药公司罗氏制药年营收达到多少亿瑞士法郎？",
        "Answer": 587,
        "Type": "生物科技",
        "Level": 2,
        "Source": "罗氏财报",
        "Source_Link": "https://www.roche.com/"
    },
    {
        "Question": "2023年全球最大基因测序公司Illumina年营收达到多少亿美元？",
        "Answer": 45.8,
        "Type": "生物科技",
        "Level": 2,
        "Source": "Illumina财报",
        "Source_Link": "https://www.illumina.com/"
    },
    {
        "Question": "2023年全球最大生物技术研究机构Broad研究所年度预算达到多少亿美元？",
        "Answer": 4.2,
        "Type": "生物科技",
        "Level": 2,
        "Source": "Broad研究所",
        "Source_Link": "https://www.broadinstitute.org/"
    },
    {
        "Question": "2023年全球最大生物信息公司23andMe用户数量达到多少万？",
        "Answer": 1200,
        "Type": "生物科技",
        "Level": 2,
        "Source": "23andMe财报",
        "Source_Link": "https://www.23andme.com/"
    },
    {
        "Question": "2023年全球最大生物技术孵化器JLABS入驻企业数量达到多少家？",
        "Answer": 650,
        "Type": "生物科技",
        "Level": 2,
        "Source": "强生创新",
        "Source_Link": "https://jlabs.jnjinnovation.com/"
    },

    // 材料科学（第一批）
    {
        "Question": "2023年全球最大碳纤维制造商东丽工业年产能达到多少吨？",
        "Answer": 57000,
        "Type": "材料科学",
        "Level": 2,
        "Source": "东丽工业财报",
        "Source_Link": "https://www.toray.com/"
    },
    {
        "Question": "2023年全球最大石墨烯制造商Graphenea年产能达到多少吨？",
        "Answer": 100,
        "Type": "材料科学",
        "Level": 2,
        "Source": "Graphenea",
        "Source_Link": "https://www.graphenea.com/"
    },
    {
        "Question": "2023年全球最大纳米材料研究机构美国国家纳米技术计划年度预算达到多少亿美元？",
        "Answer": 18,
        "Type": "材料科学",
        "Level": 2,
        "Source": "美国国家纳米技术计划",
        "Source_Link": "https://www.nano.gov/"
    },
    {
        "Question": "2023年全球最大3D打印材料制造商Stratasys年营收达到多少亿美元？",
        "Answer": 6.3,
        "Type": "材料科学",
        "Level": 2,
        "Source": "Stratasys财报",
        "Source_Link": "https://www.stratasys.com/"
    },
    {
        "Question": "2023年全球最大材料科学数据库Materials Project收录材料数量达到多少种？",
        "Answer": 150000,
        "Type": "材料科学",
        "Level": 2,
        "Source": "Materials Project",
        "Source_Link": "https://materialsproject.org/"
    },

    // 空间探索（第一批）
    {
        "Question": "2023年全球最大空间望远镜詹姆斯·韦伯望远镜主镜直径达到多少米？",
        "Answer": 6.5,
        "Type": "空间探索",
        "Level": 2,
        "Source": "NASA",
        "Source_Link": "https://www.nasa.gov/"
    },
    {
        "Question": "2023年全球最大火星探测器毅力号重量达到多少吨？",
        "Answer": 1.025,
        "Type": "空间探索",
        "Level": 2,
        "Source": "NASA",
        "Source_Link": "https://www.nasa.gov/"
    },
    {
        "Question": "2023年全球最大空间站国际空间站总重量达到多少吨？",
        "Answer": 420,
        "Type": "空间探索",
        "Level": 2,
        "Source": "NASA",
        "Source_Link": "https://www.nasa.gov/"
    },
    {
        "Question": "2023年全球最大深空探测网络深空网络天线数量达到多少个？",
        "Answer": 14,
        "Type": "空间探索",
        "Level": 2,
        "Source": "NASA",
        "Source_Link": "https://www.nasa.gov/"
    },
    {
        "Question": "2023年全球最大空间科学机构欧洲航天局年度预算达到多少亿欧元？",
        "Answer": 74.5,
        "Type": "空间探索",
        "Level": 2,
        "Source": "欧洲航天局",
        "Source_Link": "https://www.esa.int/"
    },

    // 量子计算（第一批）
    {
        "Question": "2023年全球最大量子计算公司IBM量子计算机量子比特数达到多少个？",
        "Answer": 433,
        "Type": "量子计算",
        "Level": 2,
        "Source": "IBM量子计算研究",
        "Source_Link": "https://www.ibm.com/quantum-computing/"
    },
    {
        "Question": "2023年全球最大量子计算研究机构谷歌量子AI实验室年度预算达到多少亿美元？",
        "Answer": 12.5,
        "Type": "量子计算",
        "Level": 2,
        "Source": "谷歌量子AI实验室",
        "Source_Link": "https://quantumai.google/"
    },
    {
        "Question": "2023年全球最大量子计算云服务提供商亚马逊Braket服务用户数达到多少？",
        "Answer": 15000,
        "Type": "量子计算",
        "Level": 2,
        "Source": "亚马逊量子计算",
        "Source_Link": "https://aws.amazon.com/braket/"
    },
    {
        "Question": "2023年全球最大量子计算硬件公司Rigetti Computing量子处理器数量达到多少个？",
        "Answer": 32,
        "Type": "量子计算",
        "Level": 2,
        "Source": "Rigetti Computing财报",
        "Source_Link": "https://www.rigetti.com/"
    },
    {
        "Question": "2023年全球最大量子计算软件公司D-Wave年营收达到多少万美元？",
        "Answer": 850,
        "Type": "量子计算",
        "Level": 2,
        "Source": "D-Wave财报",
        "Source_Link": "https://www.dwavesys.com/"
    },

    // 区块链（第一批）
    {
        "Question": "2023年全球最大区块链平台以太坊日交易量达到多少笔？",
        "Answer": 1200000,
        "Type": "区块链",
        "Level": 2,
        "Source": "Etherscan",
        "Source_Link": "https://etherscan.io/"
    },
    {
        "Question": "2023年全球最大区块链公司币安年营收达到多少亿美元？",
        "Answer": 120,
        "Type": "区块链",
        "Level": 2,
        "Source": "币安财报",
        "Source_Link": "https://www.binance.com/"
    },
    {
        "Question": "2023年全球最大区块链游戏Axie Infinity日活跃用户数达到多少万？",
        "Answer": 85,
        "Type": "区块链",
        "Level": 2,
        "Source": "Sky Mavis",
        "Source_Link": "https://axieinfinity.com/"
    },
    {
        "Question": "2023年全球最大区块链基础设施提供商Chainlink节点数量达到多少个？",
        "Answer": 1200,
        "Type": "区块链",
        "Level": 2,
        "Source": "Chainlink",
        "Source_Link": "https://chain.link/"
    },
    {
        "Question": "2023年全球最大区块链投资机构灰度投资管理资产规模达到多少亿美元？",
        "Answer": 280,
        "Type": "区块链",
        "Level": 2,
        "Source": "灰度投资",
        "Source_Link": "https://grayscale.com/"
    },

    // 元宇宙（第一批）
    {
        "Question": "2023年全球最大元宇宙平台Roblox日活跃用户数达到多少万？",
        "Answer": 5800,
        "Type": "元宇宙",
        "Level": 2,
        "Source": "Roblox财报",
        "Source_Link": "https://ir.roblox.com/"
    },
    {
        "Question": "2023年全球最大元宇宙游戏《我的世界》月活跃用户数达到多少亿？",
        "Answer": 1.4,
        "Type": "元宇宙",
        "Level": 2,
        "Source": "微软财报",
        "Source_Link": "https://www.microsoft.com/"
    },
    {
        "Question": "2023年全球最大元宇宙社交平台VRChat同时在线用户数达到多少万？",
        "Answer": 45,
        "Type": "元宇宙",
        "Level": 2,
        "Source": "VRChat",
        "Source_Link": "https://vrchat.com/"
    },
    {
        "Question": "2023年全球最大元宇宙投资机构Meta元宇宙部门年度投入达到多少亿美元？",
        "Answer": 150,
        "Type": "元宇宙",
        "Level": 2,
        "Source": "Meta财报",
        "Source_Link": "https://investor.fb.com/"
    },
    {
        "Question": "2023年全球最大元宇宙硬件公司Meta Quest VR设备销量达到多少万台？",
        "Answer": 1800,
        "Type": "元宇宙",
        "Level": 2,
        "Source": "Meta财报",
        "Source_Link": "https://investor.fb.com/"
    },

    // 智慧城市（第一批）
    {
        "Question": "2023年全球最大智慧城市项目新加坡智慧国计划总投资达到多少亿新元？",
        "Answer": 45,
        "Type": "智慧城市",
        "Level": 2,
        "Source": "新加坡政府",
        "Source_Link": "https://www.smartnation.gov.sg/"
    },
    {
        "Question": "2023年全球最大智慧城市解决方案提供商西门子智慧城市年营收达到多少亿欧元？",
        "Answer": 28.5,
        "Type": "智慧城市",
        "Level": 2,
        "Source": "西门子财报",
        "Source_Link": "https://www.siemens.com/"
    },
    {
        "Question": "2023年全球最大智慧城市物联网设备数量达到多少亿个？",
        "Answer": 75,
        "Type": "智慧城市",
        "Level": 2,
        "Source": "IDC",
        "Source_Link": "https://www.idc.com/"
    },
    {
        "Question": "2023年全球最大智慧城市数据平台阿里巴巴城市大脑覆盖城市数量达到多少个？",
        "Answer": 500,
        "Type": "智慧城市",
        "Level": 2,
        "Source": "阿里巴巴",
        "Source_Link": "https://www.alibabacloud.com/"
    },
    {
        "Question": "2023年全球最大智慧城市投资机构软银愿景基金投资规模达到多少亿美元？",
        "Answer": 1000,
        "Type": "智慧城市",
        "Level": 2,
        "Source": "软银集团",
        "Source_Link": "https://group.softbank/"
    },

    // 数字金融（第一批）
    {
        "Question": "2023年全球最大数字支付平台支付宝年交易额达到多少万亿元人民币？",
        "Answer": 118,
        "Type": "数字金融",
        "Level": 2,
        "Source": "蚂蚁集团财报",
        "Source_Link": "https://www.antgroup.com/"
    },
    {
        "Question": "2023年全球最大数字银行Revolut用户数达到多少万？",
        "Answer": 2800,
        "Type": "数字金融",
        "Level": 2,
        "Source": "Revolut财报",
        "Source_Link": "https://www.revolut.com/"
    },
    {
        "Question": "2023年全球最大数字资产管理公司Coinbase管理资产规模达到多少亿美元？",
        "Answer": 850,
        "Type": "数字金融",
        "Level": 2,
        "Source": "Coinbase财报",
        "Source_Link": "https://www.coinbase.com/"
    },
    {
        "Question": "2023年全球最大数字保险平台Lemonade年保费收入达到多少亿美元？",
        "Answer": 4.2,
        "Type": "数字金融",
        "Level": 2,
        "Source": "Lemonade财报",
        "Source_Link": "https://www.lemonade.com/"
    },
    {
        "Question": "2023年全球最大数字借贷平台LendingClub年贷款发放额达到多少亿美元？",
        "Answer": 125,
        "Type": "数字金融",
        "Level": 2,
        "Source": "LendingClub财报",
        "Source_Link": "https://www.lendingclub.com/"
    },

    // 网络安全（第一批）
    {
        "Question": "2023年全球最大网络安全公司Palo Alto Networks年营收达到多少亿美元？",
        "Answer": 68.9,
        "Type": "网络安全",
        "Level": 2,
        "Source": "Palo Alto Networks财报",
        "Source_Link": "https://www.paloaltonetworks.com/"
    },
    {
        "Question": "2023年全球最大网络安全威胁情报平台CrowdStrike年营收达到多少亿美元？",
        "Answer": 22.5,
        "Type": "网络安全",
        "Level": 2,
        "Source": "CrowdStrike财报",
        "Source_Link": "https://www.crowdstrike.com/"
    },
    {
        "Question": "2023年全球最大网络安全漏洞赏金平台HackerOne累计发放奖金达到多少万美元？",
        "Answer": 2300,
        "Type": "网络安全",
        "Level": 2,
        "Source": "HackerOne",
        "Source_Link": "https://www.hackerone.com/"
    },
    {
        "Question": "2023年全球最大网络安全认证机构ISC2认证持有者数量达到多少万？",
        "Answer": 16.8,
        "Type": "网络安全",
        "Level": 2,
        "Source": "ISC2",
        "Source_Link": "https://www.isc2.org/"
    },
    {
        "Question": "2023年全球最大网络安全会议Black Hat参会人数达到多少万？",
        "Answer": 2.5,
        "Type": "网络安全",
        "Level": 2,
        "Source": "Black Hat",
        "Source_Link": "https://www.blackhat.com/"
    },

    // 云计算（第一批）
    {
        "Question": "2023年全球最大云服务提供商AWS年营收达到多少亿美元？",
        "Answer": 908,
        "Type": "云计算",
        "Level": 2,
        "Source": "亚马逊财报",
        "Source_Link": "https://aws.amazon.com/"
    },
    {
        "Question": "2023年全球最大云数据库服务提供商Snowflake年营收达到多少亿美元？",
        "Answer": 21.2,
        "Type": "云计算",
        "Level": 2,
        "Source": "Snowflake财报",
        "Source_Link": "https://www.snowflake.com/"
    },
    {
        "Question": "2023年全球最大云存储服务提供商Dropbox存储数据量达到多少艾字节？",
        "Answer": 1.2,
        "Type": "云计算",
        "Level": 2,
        "Source": "Dropbox财报",
        "Source_Link": "https://www.dropbox.com/"
    },
    {
        "Question": "2023年全球最大云原生平台Kubernetes集群数量达到多少万个？",
        "Answer": 560,
        "Type": "云计算",
        "Level": 2,
        "Source": "CNCF",
        "Source_Link": "https://www.cncf.io/"
    },
    {
        "Question": "2023年全球最大云服务市场AWS Marketplace年交易额达到多少亿美元？",
        "Answer": 35,
        "Type": "云计算",
        "Level": 2,
        "Source": "AWS",
        "Source_Link": "https://aws.amazon.com/marketplace/"
    },

    // 大数据（第一批）
    {
        "Question": "2023年全球最大大数据平台Hadoop集群规模达到多少节点？",
        "Answer": 42000,
        "Type": "大数据",
        "Level": 2,
        "Source": "Apache基金会",
        "Source_Link": "https://hadoop.apache.org/"
    },
    {
        "Question": "2023年全球最大数据湖平台Databricks年营收达到多少亿美元？",
        "Answer": 15.5,
        "Type": "大数据",
        "Level": 2,
        "Source": "Databricks财报",
        "Source_Link": "https://databricks.com/"
    },
    {
        "Question": "2023年全球最大数据分析平台Tableau年营收达到多少亿美元？",
        "Answer": 18.2,
        "Type": "大数据",
        "Level": 2,
        "Source": "Salesforce财报",
        "Source_Link": "https://www.tableau.com/"
    },
    {
        "Question": "2023年全球最大数据仓库平台Snowflake日查询量达到多少亿次？",
        "Answer": 8.5,
        "Type": "大数据",
        "Level": 2,
        "Source": "Snowflake财报",
        "Source_Link": "https://www.snowflake.com/"
    },
    {
        "Question": "2023年全球最大数据集成平台Informatica年营收达到多少亿美元？",
        "Answer": 15.8,
        "Type": "大数据",
        "Level": 2,
        "Source": "Informatica财报",
        "Source_Link": "https://www.informatica.com/"
    },

    // 物联网（第一批）
    {
        "Question": "2023年全球最大物联网平台AWS IoT连接设备数量达到多少亿台？",
        "Answer": 25,
        "Type": "物联网",
        "Level": 2,
        "Source": "AWS",
        "Source_Link": "https://aws.amazon.com/iot/"
    },
    {
        "Question": "2023年全球最大物联网芯片制造商高通物联网芯片年出货量达到多少亿颗？",
        "Answer": 4.2,
        "Type": "物联网",
        "Level": 2,
        "Source": "高通财报",
        "Source_Link": "https://www.qualcomm.com/"
    },
    {
        "Question": "2023年全球最大物联网操作系统Arm物联网设备数量达到多少亿台？",
        "Answer": 180,
        "Type": "物联网",
        "Level": 2,
        "Source": "Arm",
        "Source_Link": "https://www.arm.com/"
    },
    {
        "Question": "2023年全球最大物联网安全平台Armis管理设备数量达到多少亿台？",
        "Answer": 12,
        "Type": "物联网",
        "Level": 2,
        "Source": "Armis",
        "Source_Link": "https://www.armis.com/"
    },
    {
        "Question": "2023年全球最大物联网数据分析平台PTC ThingWorx年营收达到多少亿美元？",
        "Answer": 18.5,
        "Type": "物联网",
        "Level": 2,
        "Source": "PTC财报",
        "Source_Link": "https://www.ptc.com/"
    },

    // 5G通信（第一批）
    {
        "Question": "2023年全球最大5G设备制造商华为5G基站出货量达到多少万个？",
        "Answer": 120,
        "Type": "5G通信",
        "Level": 2,
        "Source": "华为财报",
        "Source_Link": "https://www.huawei.com/"
    },
    {
        "Question": "2023年全球最大5G芯片制造商高通5G芯片年出货量达到多少亿颗？",
        "Answer": 6.5,
        "Type": "5G通信",
        "Level": 2,
        "Source": "高通财报",
        "Source_Link": "https://www.qualcomm.com/"
    },
    {
        "Question": "2023年全球最大5G运营商中国移动5G用户数达到多少亿？",
        "Answer": 3.2,
        "Type": "5G通信",
        "Level": 2,
        "Source": "中国移动财报",
        "Source_Link": "https://www.chinamobileltd.com/"
    },
    {
        "Question": "2023年全球最大5G测试设备制造商Keysight年营收达到多少亿美元？",
        "Answer": 54.2,
        "Type": "5G通信",
        "Level": 2,
        "Source": "Keysight财报",
        "Source_Link": "https://www.keysight.com/"
    },
    {
        "Question": "2023年全球最大5G标准组织3GPP成员数量达到多少个？",
        "Answer": 750,
        "Type": "5G通信",
        "Level": 2,
        "Source": "3GPP",
        "Source_Link": "https://www.3gpp.org/"
    },

    // 量子通信（第一批）
    {
        "Question": "2023年全球最大量子通信网络中国量子通信网络覆盖距离达到多少公里？",
        "Answer": 4600,
        "Type": "量子通信",
        "Level": 2,
        "Source": "中国科学技术大学",
        "Source_Link": "https://www.ustc.edu.cn/"
    },
    {
        "Question": "2023年全球最大量子通信卫星墨子号在轨运行时间达到多少天？",
        "Answer": 2555,
        "Type": "量子通信",
        "Level": 2,
        "Source": "中国科学院",
        "Source_Link": "http://www.cas.cn/"
    },
    {
        "Question": "2023年全球最大量子通信设备制造商国盾量子年营收达到多少亿元人民币？",
        "Answer": 8.5,
        "Type": "量子通信",
        "Level": 2,
        "Source": "国盾量子财报",
        "Source_Link": "https://www.quantumctek.com/"
    },
    {
        "Question": "2023年全球最大量子通信研究机构中国科学技术大学量子信息实验室年度预算达到多少亿元人民币？",
        "Answer": 2.8,
        "Type": "量子通信",
        "Level": 2,
        "Source": "中国科学技术大学",
        "Source_Link": "https://www.ustc.edu.cn/"
    },
    {
        "Question": "2023年全球最大量子通信标准组织ISO/IEC JTC 1/SC 27成员数量达到多少个？",
        "Answer": 85,
        "Type": "量子通信",
        "Level": 2,
        "Source": "ISO",
        "Source_Link": "https://www.iso.org/"
    },

    // 卫星互联网（第一批）
    {
        "Question": "2023年全球最大卫星互联网星座Starlink在轨卫星数量达到多少颗？",
        "Answer": 5000,
        "Type": "卫星互联网",
        "Level": 2,
        "Source": "SpaceX",
        "Source_Link": "https://www.starlink.com/"
    },
    {
        "Question": "2023年全球最大卫星互联网运营商OneWeb在轨卫星数量达到多少颗？",
        "Answer": 648,
        "Type": "卫星互联网",
        "Level": 2,
        "Source": "OneWeb",
        "Source_Link": "https://oneweb.net/"
    },
    {
        "Question": "2023年全球最大卫星互联网地面站运营商Viasat地面站数量达到多少个？",
        "Answer": 3200,
        "Type": "卫星互联网",
        "Level": 2,
        "Source": "Viasat财报",
        "Source_Link": "https://www.viasat.com/"
    },
    {
        "Question": "2023年全球最大卫星互联网终端制造商休斯网络系统年出货量达到多少万台？",
        "Answer": 85,
        "Type": "卫星互联网",
        "Level": 2,
        "Source": "休斯网络系统财报",
        "Source_Link": "https://www.hughes.com/"
    },
    {
        "Question": "2023年全球最大卫星互联网研究机构NASA深空网络地面站数量达到多少个？",
        "Answer": 14,
        "Type": "卫星互联网",
        "Level": 2,
        "Source": "NASA",
        "Source_Link": "https://www.nasa.gov/"
    },

    // 数字孪生（第一批）
    {
        "Question": "2023年全球最大数字孪生平台西门子Xcelerator年营收达到多少亿欧元？",
        "Answer": 45.8,
        "Type": "数字孪生",
        "Level": 2,
        "Source": "西门子财报",
        "Source_Link": "https://www.siemens.com/"
    },
    {
        "Question": "2023年全球最大数字孪生城市项目新加坡虚拟新加坡模型精度达到多少厘米？",
        "Answer": 5,
        "Type": "数字孪生",
        "Level": 2,
        "Source": "新加坡政府",
        "Source_Link": "https://www.smartnation.gov.sg/"
    },
    {
        "Question": "2023年全球最大数字孪生工业平台PTC ThingWorx连接设备数量达到多少亿台？",
        "Answer": 2.5,
        "Type": "数字孪生",
        "Level": 2,
        "Source": "PTC财报",
        "Source_Link": "https://www.ptc.com/"
    },
    {
        "Question": "2023年全球最大数字孪生建筑平台Autodesk Forge年营收达到多少亿美元？",
        "Answer": 12.8,
        "Type": "数字孪生",
        "Level": 2,
        "Source": "Autodesk财报",
        "Source_Link": "https://www.autodesk.com/"
    },
    {
        "Question": "2023年全球最大数字孪生研究机构MIT数字孪生实验室年度预算达到多少万美元？",
        "Answer": 850,
        "Type": "数字孪生",
        "Level": 2,
        "Source": "MIT",
        "Source_Link": "https://www.mit.edu/"
    },

    // 边缘计算（第一批）
    {
        "Question": "2023年全球最大边缘计算平台AWS Outposts部署数量达到多少个？",
        "Answer": 8500,
        "Type": "边缘计算",
        "Level": 2,
        "Source": "AWS",
        "Source_Link": "https://aws.amazon.com/outposts/"
    },
    {
        "Question": "2023年全球最大边缘计算芯片制造商英特尔边缘计算芯片年出货量达到多少亿颗？",
        "Answer": 3.2,
        "Type": "边缘计算",
        "Level": 2,
        "Source": "英特尔财报",
        "Source_Link": "https://www.intel.com/"
    },
    {
        "Question": "2023年全球最大边缘计算网络运营商AT&T边缘计算节点数量达到多少个？",
        "Answer": 12000,
        "Type": "边缘计算",
        "Level": 2,
        "Source": "AT&T财报",
        "Source_Link": "https://www.att.com/"
    },
    {
        "Question": "2023年全球最大边缘计算软件提供商VMware边缘计算平台年营收达到多少亿美元？",
        "Answer": 15.8,
        "Type": "边缘计算",
        "Level": 2,
        "Source": "VMware财报",
        "Source_Link": "https://www.vmware.com/"
    },
    {
        "Question": "2023年全球最大边缘计算研究机构Linux基金会边缘计算项目成员数量达到多少个？",
        "Answer": 85,
        "Type": "边缘计算",
        "Level": 2,
        "Source": "Linux基金会",
        "Source_Link": "https://www.linuxfoundation.org/"
    },

    // 智能家居（第一批）
    {
        "Question": "2023年全球最大智能家居平台亚马逊Alexa设备数量达到多少亿台？",
        "Answer": 1.5,
        "Type": "智能家居",
        "Level": 2,
        "Source": "亚马逊财报",
        "Source_Link": "https://www.amazon.com/"
    },
    {
        "Question": "2023年全球最大智能家居设备制造商小米IoT设备数量达到多少亿台？",
        "Answer": 5.8,
        "Type": "智能家居",
        "Level": 2,
        "Source": "小米财报",
        "Source_Link": "https://www.mi.com/"
    },
    {
        "Question": "2023年全球最大智能家居操作系统平台华为鸿蒙OS设备数量达到多少亿台？",
        "Answer": 3.2,
        "Type": "智能家居",
        "Level": 2,
        "Source": "华为财报",
        "Source_Link": "https://www.huawei.com/"
    },
    {
        "Question": "2023年全球最大智能家居芯片制造商高通智能家居芯片年出货量达到多少亿颗？",
        "Answer": 2.5,
        "Type": "智能家居",
        "Level": 2,
        "Source": "高通财报",
        "Source_Link": "https://www.qualcomm.com/"
    },
    {
        "Question": "2023年全球最大智能家居标准组织Matter成员数量达到多少个？",
        "Answer": 280,
        "Type": "智能家居",
        "Level": 2,
        "Source": "连接标准联盟",
        "Source_Link": "https://csa-iot.org/"
    },

    // 趣味知识（第一批）
    {
        "Question": "如果把人类大脑中的所有神经元连接起来，总长度相当于地球到月球距离的多少倍？",
        "Answer": 2.5,
        "Type": "趣味知识",
        "Level": 3,
        "Source": "《科学美国人》",
        "Source_Link": "https://www.scientificamerican.com/"
    },
    {
        "Question": "如果把地球上所有蚂蚁的重量加起来，相当于多少个人类的总重量？",
        "Answer": 7000000000,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《自然》杂志",
        "Source_Link": "https://www.nature.com/"
    },
    {
        "Question": "如果把人类历史上所有制造出来的乐高积木首尾相连，可以绕地球多少圈？",
        "Answer": 18,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "乐高官方数据",
        "Source_Link": "https://www.lego.com/"
    },
    {
        "Question": "如果把地球上所有海洋的水都倒进一个立方体容器，边长会是多少公里？",
        "Answer": 1111,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "美国国家海洋和大气管理局",
        "Source_Link": "https://www.noaa.gov/"
    },
    {
        "Question": "如果把人类历史上所有拍摄的电影一帧一帧首尾相连播放，需要多少年才能看完？",
        "Answer": 450,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《电影艺术》",
        "Source_Link": ""
    },
    {
        "Question": "如果把地球上所有树木的叶子都平铺开来，可以覆盖多少个地球表面积？",
        "Answer": 3.5,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《自然》杂志",
        "Source_Link": "https://www.nature.com/"
    },
    {
        "Question": "如果把人类历史上所有制造出来的手机首尾相连，可以绕太阳系多少圈？",
        "Answer": 1.2,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《科技评论》",
        "Source_Link": "https://www.technologyreview.com/"
    },
    {
        "Question": "如果把地球上所有细菌的重量加起来，相当于多少头蓝鲸的重量？",
        "Answer": 350000000000,
        "Type": "趣味知识",
        "Level": 3,
        "Source": "《科学》杂志",
        "Source_Link": "https://www.science.org/"
    },
    {
        "Question": "如果把人类历史上所有写过的书籍都叠起来，高度相当于多少座珠穆朗玛峰？",
        "Answer": 850,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《图书馆学季刊》",
        "Source_Link": ""
    },
    {
        "Question": "如果把地球上所有闪电的能量收集起来，可以供全球使用多少天？",
        "Answer": 180,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "美国国家气象局",
        "Source_Link": "https://www.weather.gov/"
    },
    {
        "Question": "如果把人类历史上所有制造出来的汽车首尾相连，可以绕银河系多少圈？",
        "Answer": 0.0000001,
        "Type": "趣味知识",
        "Level": 3,
        "Source": "《汽车工业年鉴》",
        "Source_Link": ""
    },
    {
        "Question": "如果把地球上所有蜘蛛一年吃掉的食物重量加起来，相当于多少头大象的重量？",
        "Answer": 450000000,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《自然》杂志",
        "Source_Link": "https://www.nature.com/"
    },
    {
        "Question": "如果把人类历史上所有拍摄的照片都打印出来，可以覆盖多少个足球场？",
        "Answer": 8500000,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《摄影艺术》",
        "Source_Link": ""
    },
    {
        "Question": "如果把地球上所有蜜蜂一年采集的花蜜都收集起来，可以装满多少个奥运会标准游泳池？",
        "Answer": 1200,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《昆虫学杂志》",
        "Source_Link": ""
    },
    {
        "Question": "如果把人类历史上所有制造出来的铅笔首尾相连，可以到达月球多少次？",
        "Answer": 42,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《文具工业年鉴》",
        "Source_Link": ""
    },

    // 极限记录（第一批）
    {
        "Question": "人类能承受的最大重力加速度是多少倍？",
        "Answer": 46.2,
        "Type": "极限记录",
        "Level": 3,
        "Source": "《吉尼斯世界纪录》",
        "Source_Link": "https://www.guinnessworldrecords.com/"
    },
    {
        "Question": "地球上记录到的最长闪电有多长？",
        "Answer": 768,
        "Type": "极限记录",
        "Level": 2,
        "Source": "世界气象组织",
        "Source_Link": "https://public.wmo.int/"
    },
    {
        "Question": "人类能听到的最小声响相当于多少分贝？",
        "Answer": -9.4,
        "Type": "极限记录",
        "Level": 2,
        "Source": "《听觉研究》",
        "Source_Link": ""
    },
    {
        "Question": "地球上最深的自然洞穴有多深？",
        "Answer": 2222,
        "Type": "极限记录",
        "Level": 2,
        "Source": "《洞穴探索》",
        "Source_Link": ""
    },
    {
        "Question": "人类能承受的最大声音是多少分贝？",
        "Answer": 194,
        "Type": "极限记录",
        "Level": 2,
        "Source": "《声学研究》",
        "Source_Link": ""
    },

    // 奇特现象（第一批）
    {
        "Question": "地球上最长的彩虹持续了多长时间？",
        "Answer": 9,
        "Type": "奇特现象",
        "Level": 2,
        "Source": "《气象学杂志》",
        "Source_Link": ""
    },
    {
        "Question": "地球上最大的雪花直径达到多少厘米？",
        "Answer": 38,
        "Type": "奇特现象",
        "Level": 2,
        "Source": "《气象记录》",
        "Source_Link": ""
    },
    {
        "Question": "地球上最长的瀑布倒流现象持续了多长时间？",
        "Answer": 3,
        "Type": "奇特现象",
        "Level": 2,
        "Source": "《地理奇观》",
        "Source_Link": ""
    },
    {
        "Question": "地球上最大的冰雹重量达到多少公斤？",
        "Answer": 1.02,
        "Type": "奇特现象",
        "Level": 2,
        "Source": "世界气象组织",
        "Source_Link": "https://public.wmo.int/"
    },
    {
        "Question": "地球上最长的极光持续了多长时间？",
        "Answer": 7,
        "Type": "奇特现象",
        "Level": 2,
        "Source": "《极光研究》",
        "Source_Link": ""
    },

    // 科学发现（第一批）
    {
        "Question": "人类发现的最古老化石有多少亿年？",
        "Answer": 3.5,
        "Type": "科学发现",
        "Level": 2,
        "Source": "《自然》杂志",
        "Source_Link": "https://www.nature.com/"
    },
    {
        "Question": "人类发现的最远星系距离地球多少光年？",
        "Answer": 13400000000,
        "Type": "科学发现",
        "Level": 3,
        "Source": "NASA",
        "Source_Link": "https://www.nasa.gov/"
    },
    {
        "Question": "人类发现的最深海洋生物生活在多少米深？",
        "Answer": 11034,
        "Type": "科学发现",
        "Level": 2,
        "Source": "《海洋生物学》",
        "Source_Link": ""
    },
    {
        "Question": "人类发现的最古老树木有多少岁？",
        "Answer": 5067,
        "Type": "科学发现",
        "Level": 2,
        "Source": "《植物学杂志》",
        "Source_Link": ""
    },
    {
        "Question": "人类发现的最古老人类化石有多少万年？",
        "Answer": 315,
        "Type": "科学发现",
        "Level": 2,
        "Source": "《人类进化》",
        "Source_Link": ""
    },

    // 历史对比（第一批）
    {
        "Question": "如果把人类历史压缩成一天，工业革命发生在几点？",
        "Answer": 23.59,
        "Type": "历史对比",
        "Level": 2,
        "Source": "《人类简史》",
        "Source_Link": ""
    },
    {
        "Question": "如果把地球历史压缩成一年，恐龙灭绝发生在几月几日？",
        "Answer": 12.26,
        "Type": "历史对比",
        "Level": 2,
        "Source": "《地球简史》",
        "Source_Link": ""
    },
    {
        "Question": "如果把宇宙历史压缩成一天，太阳系形成在几点？",
        "Answer": 16.8,
        "Type": "历史对比",
        "Level": 3,
        "Source": "《宇宙简史》",
        "Source_Link": ""
    },
    {
        "Question": "如果把人类文明史压缩成一年，互联网发明在几月几日？",
        "Answer": 12.31,
        "Type": "历史对比",
        "Level": 2,
        "Source": "《科技简史》",
        "Source_Link": ""
    },
    {
        "Question": "如果把地球生命史压缩成一天，人类出现是在几点？",
        "Answer": 23.58,
        "Type": "历史对比",
        "Level": 2,
        "Source": "《生命简史》",
        "Source_Link": ""
    },

    // 趣味知识（第二批）
    {
        "Question": "如果把地球上所有人类的DNA首尾相连，可以到达太阳多少次？",
        "Answer": 600,
        "Type": "趣味知识",
        "Level": 3,
        "Source": "《科学美国人》",
        "Source_Link": "https://www.scientificamerican.com/"
    },
    {
        "Question": "如果把地球上所有蜘蛛一年织的网都收集起来，可以覆盖多少个足球场？",
        "Answer": 8500000,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《自然》杂志",
        "Source_Link": "https://www.nature.com/"
    },
    {
        "Question": "如果把人类历史上所有制造出来的硬币叠起来，可以到达月球多少次？",
        "Answer": 28,
        "Type": "趣味知识",
        "Level": 2,
        "Source": "《货币史》",
        "Source_Link": ""
    },
    {
        "Question": "如果把地球上所有雨滴都收集起来，可以装满多少个奥运会标准游泳池？",
        "Answer": 8500000000000,
        "Type": "趣味知识",
        "Level": 3,
        "Source": "《气象学》",
        "Source_Link": ""
    },
    {
        "Question": "如果把人类历史上所有写过的文字都打印出来，可以绕太阳系多少圈？",
        "Answer": 0.0000001,
        "Type": "趣味知识",
        "Level": 3,
        "Source": "《文字史》",
        "Source_Link": ""
    },

    // 科技领域
    {
        "Question": "2023年全球最大半导体设备公司ASML年营收达到多少亿欧元？",
        "Answer": 275.6,
        "Type": "科技",
        "Level": 2,
        "Source": "ASML财报",
        "Source_Link": "https://www.asml.com/"
    },
    {
        "Question": "2023年全球最大游戏引擎公司Unity年营收达到多少亿美元？",
        "Answer": 21.8,
        "Type": "科技",
        "Level": 2,
        "Source": "Unity财报",
        "Source_Link": "https://unity.com/"
    },
    {
        "Question": "2023年全球最大开源软件公司红帽(Red Hat)年营收达到多少亿美元？",
        "Answer": 54.2,
        "Type": "科技",
        "Level": 2,
        "Source": "IBM财报",
        "Source_Link": "https://www.redhat.com/"
    },

    // 能源领域
    {
        "Question": "2023年全球最大风力发电设备制造商维斯塔斯(Vestas)年营收达到多少亿欧元？",
        "Answer": 153.1,
        "Type": "能源",
        "Level": 2,
        "Source": "维斯塔斯财报",
        "Source_Link": "https://www.vestas.com/"
    },
    {
        "Question": "2023年全球最大太阳能电池制造商隆基绿能年营收达到多少亿元人民币？",
        "Answer": 1289.8,
        "Type": "能源",
        "Level": 2,
        "Source": "隆基绿能财报",
        "Source_Link": "https://www.longi.com/"
    },
    {
        "Question": "2023年全球最大氢能设备制造商Plug Power年营收达到多少亿美元？",
        "Answer": 8.9,
        "Type": "能源",
        "Level": 2,
        "Source": "Plug Power财报",
        "Source_Link": "https://www.plugpower.com/"
    },

    // 消费品领域
    {
        "Question": "2023年全球最大运动鞋制造商耐克年营收达到多少亿美元？",
        "Answer": 512.2,
        "Type": "消费品",
        "Level": 2,
        "Source": "耐克财报",
        "Source_Link": "https://www.nike.com/"
    },
    {
        "Question": "2023年全球最大咖啡连锁品牌星巴克年营收达到多少亿美元？",
        "Answer": 359.8,
        "Type": "消费品",
        "Level": 2,
        "Source": "星巴克财报",
        "Source_Link": "https://www.starbucks.com/"
    },
    {
        "Question": "2023年全球最大化妆品公司欧莱雅年营收达到多少亿欧元？",
        "Answer": 411.8,
        "Type": "消费品",
        "Level": 2,
        "Source": "欧莱雅财报",
        "Source_Link": "https://www.loreal.com/"
    }
]; 