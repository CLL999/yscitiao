// components/CharacterData/CharacterData.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    HPDefault: Number,
    ATKDefault: Number,
    DEFDefault: Number,
    Sands: String,
    Goblet: String,
    Circlet: String,
  },

  observers: {
    "**": function () {
      var CharacterData = this.data;
      this.triggerEvent("input", {
        CharacterData
      });
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // SandsArray: ["ATK%","HP%","DEF%","ElementalMastery","EnergyRecharge"],
    // GobletArray: ["ElementDMGBonus","ElementalMastery","HP%","ATK%","DEF%"],
    // CircletArray: ["CritDMG","CritRate","Healing Bonus","ElementalMastery","HP%","ATK%","DEF%"],
    SandsArray: ["攻击力%","生命值%","防御力%","元素精通","充能效率%"],
    GobletArray: ["属性伤害","元素精通","生命值%","攻击力%","防御力%"],
    CircletArray: ["暴击伤害","暴击率","治疗加成","元素精通","生命值%","攻击力%","防御力%"],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindGobletPickerChange: function(e) {
      this.setData({GobletIndex: e.detail.value, Goblet: this.data.GobletArray[e.detail.value]});
    },
    bindSandsPickerChange: function(e) {
      this.setData({SandsIndex: e.detail.value, Sands: this.data.SandsArray[e.detail.value]});
    },
    bindCircletPickerChange: function(e) {
      this.setData({CircletIndex: e.detail.value, Circlet: this.data.CircletArray[e.detail.value]});
    },

    inputATK: function (e) {
      this.setData({
        ATKDefault: e.detail.value
      })
    },
    inputHP: function (e) {
      this.setData({
        HPDefault: e.detail.value
      })
    },
    inputDEF: function (e) {
      this.setData({
        DEFDefault: e.detail.value
      })
    },
  }
})
