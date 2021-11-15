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
  observers: {
    "HP,HPDefault": function () {
      // if (!this.data.HPDefault) return;
      this.setData({
        FinalHP: ((this.data.HP - 4780) / (this.data.HPDefault - 0.466 * ((this.data.Sands === "生命值%" ? 1 : 0) + (this.data.Goblet === "生命值%" ? 1 : 0) + (this.data.Circlet === "生命值%" ? 1 : 0))) / this.data.ForEachHP).toFixed(2),
      })
    },
    "ATK,ATKDefault": function () {
      if (!this.data.ATKDefault) return;
      this.setData({
        FinalATK: ((((this.data.ATK - 311) / (this.data.ATKDefault)) - 0.466 * ((this.data.Sands === "攻击力%" ? 1 : 0) + (this.data.Goblet === "攻击力%" ? 1 : 0) + (this.data.Circlet === "攻击力%" ? 1 : 0))) / this.data.ForEachATK).toFixed(2),
      })
    },
    "DEF,DEFDefault": function () {
      if (!this.data.DEFDefault) return;
      this.setData({
        FinalDEF: (((this.data.DEF / this.data.DEFDefault) - 0.583 * ((this.data.Sands === "防御力%" ? 1 : 0) + (this.data.Circlet === "防御力%" ? 1 : 0) + (this.data.Goblet === "防御力%" ? 1 : 0))) / this.data.ForEachDEF).toFixed(2),
      })
    },
    "ElementalMastery": function () {
      this.setData({
        FinalElementalMastery: ((this.data.ElementalMastery - 187 * ((this.data.Sands === "元素精通" ? 1 : 0) + (this.data.Goblet === "元素精通" ? 1 : 0) + (this.data.Circlet === "元素精通" ? 1 : 0))) / this.data.ForEachElementalMastery).toFixed(2),
      })
    },
    "CritRate": function () {
      this.setData({
        FinalCritRate: ((this.data.CritRate - 31.1 * (this.data.Circlet === "暴击率%" ? 1 : 0)) / this.data.ForEachCritRate).toFixed(2),
      })
    },
    "CritDMG": function () {
      this.setData({
        FinalCritDMG: ((this.data.CritDMG - 62.2 * (this.data.Circlet === "暴击伤害%" ? 1 : 0)) / this.data.ForEachCritDMG).toFixed(2),
      })
    },
    "EnergyRecharge": function () {
      this.setData({
        FinalEnergyRecharge: ((this.data.EnergyRecharge - 51.8 * (this.data.Sands === "充能效率%" ? 1 : 0)) / this.data.ForEachEnergyRecharge).toFixed(2),
      })
    }
  },
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

    SUM: 0,
    VisualItem: "",

    checkboxATK: false,
    checkboxHutao: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkboxChange: function (e) {
      console.log(e);
      var SUM = 0,
        VisualItem = "";
      e.detail.value.forEach(element => {
        switch (element) {
          case "攻击":
            // if (this.data.checkboxHutao) break;
            SUM += parseFloat(this.data.FinalATK);
            VisualItem += "攻击+";
            break;
          case "暴击":
            SUM += parseFloat(this.data.FinalCritRate);
            VisualItem += "暴击+";
            break;
          case "爆伤":
            SUM += parseFloat(this.data.FinalCritDMG);
            VisualItem += "爆伤+";
            break;
          case "精通":
            SUM += parseFloat(this.data.FinalElementalMastery);
            VisualItem += "精通+";
            break;
          case "充能":
            SUM += parseFloat(this.data.FinalEnergyRecharge);
            VisualItem += "充能+";
            break;
          case "生命":
            SUM += parseFloat(this.data.FinalHP);
            VisualItem += "生命+";
            break;
          case "防御":
            SUM += parseFloat(this.data.FinalDEF);
            VisualItem += "防御+";
            break;
          case "胡桃攻击":
            SUM += parseFloat(this.data.FinalATK * 0.6);
            VisualItem += "攻击(0.6)+";
            // this.setData({
            //   checkboxATK: false
            // });
            break;
        }
      });
      VisualItem = VisualItem.substr(0, VisualItem.length - 1);
      SUM = parseFloat(SUM.toFixed(2));
      this.setData({
        SUM,
        VisualItem
      });
      console.log("SUM ", this.data.SUM);
      console.log(this.data.VisualItem);
    }
  }
})