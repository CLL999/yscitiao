var app = getApp();
// components/chooseCharacter/chooseCharacter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  observers: {
    "nowCharacter": function () {
      console.log("角色变化，现在是", this.data.nowCharacter);
      getApp().globalData.character = this.data.nowCharacter;
      wx.getStorage({
        key: app.globalData.character
      }).then(res => {
        console.log("成功获取", res);
        getApp().globalData.CharacterData = res.data.CharacterData;
        getApp().globalData.DataInDetail = res.data.DataInDetail;
        // 发送信号更新
        this.triggerEvent("ChangeCharacter", {
          CharacterData: res.data.CharacterData,
          DataInDetail: res.data.DataInDetail
        });
      }).catch(err => {
        console.log(err);
        getApp().globalData.CharacterData = {
          CircletIndex: "",
          GobletIndex: "",
          SandsIndex: ""

        };
        getApp().globalData.DataInDetail = {};
        // 发送信号更新
        this.triggerEvent("ChangeCharacter", {
          CharacterData: {},
          DataInDetail: {}
        });
      });

    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    characterIndex: 4,
    elementIndex: 0,

    // nowElementSrc: "../../assets/icons/pyro.png",
    // nowCharacterSrc: "../../assets/icons/pyro/klee.png",

    nowCharacter: "klee",
    nowElement: "pyro",

    elementList: ["pyro", "hydro", "anemo", "electro", "cryo", "geo"],
    ElementList: ["火", "水", "风", "雷", "冰", "岩"],

    CharacterList: ["安柏", "班尼特", "迪卢克", "胡桃", "可莉", "托马", "香菱", "辛焱", "烟绯", "宵宫"],
    characterList: ["amber", "bennett", "diluc", "hu_tao", "klee", "thoma", "xiangling", "xinyan", "yanfei", "yoimiya"],

    PyroList: ["安柏", "班尼特", "迪卢克", "胡桃", "可莉", "托马", "香菱", "辛焱", "烟绯", "宵宫"],
    pyroList: ["amber", "bennett", "diluc", "hu_tao", "klee", "thoma", "xiangling", "xinyan", "yanfei", "yoimiya"],

    HydroList: ["芭芭拉", "莫娜", "心海", "达达利亚", "行秋"],
    hydroList: ["barbara", "mona", "sangonomiya_kokomi", "tartaglia", "xingqiu"],


    AnemoList: ["琴", "万叶", "早柚", "砂糖", "温迪", "魈"],
    anemoList: ["jean", "kaedehara_kazuha", "sayu", "sucrose", "venti", "xiao"],

    ElectroList: ["北斗", "菲谢尔", "刻晴", "九条裟罗", "丽莎", "雷电将军", "雷泽"],
    electroList: ["beidou", "fischl", "keqing", "kujou_sara", "lisa", "raiden_shogun", "razor"],


    CyroList: ["埃洛伊", "重云", "迪奥娜", "优菈", "甘雨", "凯亚", "神里绫华", "七七", "罗莎莉亚"],
    cyroList: ["aloy", "chongyun", "diona", "eula", "ganyu", "kaeya", "kamisato_ayaka", "qiqi", "rosaria"],


    GeoList: ["阿贝多", "凝光", "诺艾尔", "钟离"],
    geoList: ["albedo", "ningguang", "noelle", "zhongli"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ElementPickerChange: function (e) {
      let nowElement = this.data.elementList[e.detail.value];
      switch (nowElement) {
        case "pyro":
          this.setData({
            characterList: this.data.pyroList,
            CharacterList: this.data.PyroList
          });
          break;
        case "hydro":
          this.setData({
            characterList: this.data.hydroList,
            CharacterList: this.data.HydroList
          });
          break;
        case "anemo":
          this.setData({
            characterList: this.data.anemoList,
            CharacterList: this.data.AnemoList
          });
          break;
        case "electro":
          this.setData({
            characterList: this.data.electroList,
            CharacterList: this.data.ElectroList
          });
          break;
        case "cryo":
          this.setData({
            characterList: this.data.cyroList,
            CharacterList: this.data.CyroList
          });
          break;
        case "geo":
          this.setData({
            characterList: this.data.geoList,
            CharacterList: this.data.GeoList
          })
          break;
      }
      let characterIndex = this.data.characterIndex;
      if (this.data.nowElement !== nowElement) characterIndex = 0;
      let nowCharacter = this.data.characterList[characterIndex];
      this.setData({
        elementIndex: e.detail.value,
        nowElement,
        nowElementSrc: "../../assets/icons/" + nowElement + ".png",
        characterIndex,
        nowCharacterSrc: "../../assets/icons/" + nowElement + "/" + nowCharacter + ".png",
        nowCharacter
      })
    },

    CharacterPickerChange: function (e) {
      let nowCharacter = this.data.characterList[e.detail.value];
      this.setData({
        characterIndex: e.detail.value,
        nowCharacter,
        nowCharacterSrc: "../../assets/icons/" + this.data.nowElement + "/" + nowCharacter + ".png",
      })
    },

  },

  attached() {
    let nowElement = this.data.elementList[this.data.elementIndex];
    let nowCharacter = this.data.characterList[this.data.characterIndex];
    // console.log(nowCharacter);
    this.setData({
      nowElementSrc: "../../assets/icons/" + nowElement + ".png",
      nowCharacterSrc: "../../assets/icons/" + nowElement + "/" + nowCharacter + ".png",
      nowElement,
      nowCharacter
    })
    // console.log(this.data.nowCharacterSrc);
  }
})