// components/Count/Count.js
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

    HP: Number,
    ATK: Number,
    DEF: Number,
    CritRate: Number,
    CritDMG: Number,
    ElementalMastery: Number,
    EnergyRecharge: Number
  },
  // observers: {
  //   "**": function () {
  //     this.setData({
  //       FinalHP: (this.data.HP - 4780) / (this.data.HPDefault-0.466*((this.data.Sands == "生命值%" ? 1:0) + (this.data.Goblet == "生命值%"? 1: 0) + (this.data.Circlet == "生命值%"? 1: 0))) / this.data.ForEachHP,
  //     })
  //   }    
  // },
  /**
   * 组件的初始数据
   */
  data: {
    ForEachHP: 0.04975,
    ForEachATK: 0.04975,
    ForEachDEF: 0.062,
    ForEachElementalMastery: 19.75,
    ForEachCritRate: 3.3,
    ForEachCritDMG: 6.6,
    ForEachEnergyRecharge: 5.5,

    FinalHP: 0,
    FinalATK: 0,
    FinalDEF: 0,
    FinalElementalMastery: 0,
    FinalCritRate: 0,
    FinalCritDMG: 0,
    FinalEnergyRecharge: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
