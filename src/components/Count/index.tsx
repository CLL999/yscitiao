import { Checkbox, CheckboxGroup, Image, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import copySrc from "../../assets/icons/copy.png"

import "./index.css"

export default function Count() {

    const data = useSelector(state => state)
    console.log("Count捕捉到变化", data)
    const { HPDefault, ATKDefault, DEFDefault,
            SandsIndex, GobletIndex, CircletIndex, ...rest } = data.characterData  
    console.log("characterData的rest", rest)
    const { HP, ATK, DEF, ElementalMastery,
            CritRate, CritDMG, EnergyRecharge, ...Rest } = data.dataInDetail
    console.log("dataInDetail的rest", Rest)

    const [ count, setCount] = useState(0)
    const [ showItem, setShowItem] = useState('')

    const ForEachHP = 0.04975
    const ForEachATK = 0.04975
    const ForEachDEF = 0.062
    const ForEachElementalMastery = 19.75
    const ForEachCritRate = 3.3
    const ForEachCritDMG = 6.6
    const ForEachEnergyRecharge = 5.5

    let checkboxHP: boolean =  false
    let checkboxATK: boolean =  false
    let checkboxHutao: boolean =  false
    let checkboxCritDMG: boolean =  false
    let checkboxCritRate: boolean =  false
    let checkboxEnergyRecharge: boolean =  false
    let checkboxElementalMastery: boolean =  false
    let checkboxDEF: boolean =  false

    let FinalHP:number = (HPDefault ? 
                            parseFloat(((HP - 4780) 
                            / (HPDefault - 0.466 
                            * ((SandsIndex === 1 ? 1 : 0) 
                            + (GobletIndex === 2 ? 1 : 0) 
                            + (CircletIndex === 4 ? 1 : 0))) 
                            / ForEachHP).toFixed(2)):0)
    let FinalATK:number = (ATKDefault ?
                            parseFloat(((((ATK - 311) 
                            / (ATKDefault)) 
                            - 0.466 * ((SandsIndex === 0 ? 1 : 0) 
                            + (GobletIndex === 3 ? 1 : 0) 
                            + (CircletIndex === 5 ? 1 : 0))) 
                            / ForEachATK).toFixed(2)):0)
    let FinalDEF:number = (DEFDefault ?
                            parseFloat((((DEF / DEFDefault) 
                            - 0.583 * ((SandsIndex === 2 ? 1 : 0) 
                            + (CircletIndex === 4 ? 1 : 0) 
                            + (GobletIndex === 6 ? 1 : 0))) 
                            / ForEachDEF).toFixed(2)):0)
    let FinalElementalMastery:number = 
                            parseFloat(((ElementalMastery 
                            - 187 * ((SandsIndex === 3 ? 1 : 0) 
                            + (GobletIndex === 1 ? 1 : 0) 
                            + (CircletIndex === 3 ? 1 : 0))) 
                            / ForEachElementalMastery).toFixed(2))
    let FinalCritRate:number = 
                            parseFloat(((CritRate 
                            - 31.1 * (CircletIndex === 1 ? 1 : 0)) 
                            / ForEachCritRate).toFixed(2))
    let FinalCritDMG:number = 
                            parseFloat(((CritDMG 
                            - 62.2 * (CircletIndex === 0 ? 1 : 0)) 
                            / ForEachCritDMG).toFixed(2))
    let FinalEnergyRecharge:number = 
                            parseFloat(((EnergyRecharge 
                            - 51.8 * (SandsIndex === 4 ? 1 : 0)) 
                            / ForEachEnergyRecharge).toFixed(2))

    let SUM : number = 0
    let VisualItem: string = ''

    function copy() {
        let cpy = `${data.chooseCharacter.nowCharacter},${VisualItem}=${SUM.toFixed(2)}`
        Taro.setClipboardData({data: cpy})
    }

    function checkboxChange(e) {
        console.log(e.detail.value)
        SUM = 0
        VisualItem = ''
        e.detail.value.forEach(element => {
            switch (element) {
                case "攻击":
                    SUM += FinalATK;
                    VisualItem += "攻击+";
                    break;
                case "暴击":
                    SUM += FinalCritRate;
                    VisualItem += "暴击+";
                    break;
                case "爆伤":
                    SUM += FinalCritDMG;
                    VisualItem += "爆伤+";
                    break;
                case "精通":
                    SUM += FinalElementalMastery;
                    VisualItem += "精通+";
                    break;
                case "充能":
                    SUM += FinalEnergyRecharge;
                    VisualItem += "充能+";
                    break;
                case "生命":
                    SUM += FinalHP;
                    VisualItem += "生命+";
                    break;
                case "防御":
                    SUM += FinalDEF;
                    VisualItem += "防御+";
                    break;
                case "胡桃攻击":
                    SUM += FinalATK * 0.6;
                    VisualItem += "攻击(0.6)+";
                    break;
            }
        })
        VisualItem = VisualItem.substr(0, VisualItem.length - 1)
        SUM = parseFloat(SUM.toFixed(2))
        setCount(SUM)
        setShowItem(VisualItem)
    }


    return (
        <View>
            <View className="Container">
                <Text className="Tips">--总结--</Text>
                <Image 
                    src={copySrc} 
                    className="copy"
                    onTouchEnd={copy}
                />
                <Text className="copytips">复制结果</Text>
            </View>
            <View className="Container">
                <View className="kind">
                    <View className="layeredCard">
                        <View className="item">生命:{FinalHP}</View>
                        <View className="item">攻击:{FinalATK}</View>
                        <View className="item">防御:{FinalDEF}</View>
                        <View className="item">精通:{FinalElementalMastery}</View>
                        <View className="item">暴击:{FinalCritRate}</View>
                        <View className="item">爆伤:{FinalCritDMG}</View>
                        <View className="item">充能:{FinalEnergyRecharge}</View>
                    </View>
                </View>
                <CheckboxGroup 
                    onChange={checkboxChange}
                    className="checkbox"
                >
                    <Checkbox value="攻击" checked={checkboxATK}>攻击</Checkbox>
                    <Checkbox value="暴击" checked={checkboxCritRate}>暴击</Checkbox>
                    <Checkbox value="爆伤" checked={checkboxCritDMG}>爆伤</Checkbox>
                    <Checkbox value="精通" checked={checkboxElementalMastery}>精通</Checkbox>
                    <Checkbox value="充能" checked={checkboxEnergyRecharge}>充能</Checkbox>
                    <Checkbox value="生命" checked={checkboxHP}>生命</Checkbox>
                    <Checkbox value="防御" checked={checkboxDEF}>防御</Checkbox>
                    <Checkbox value="胡桃攻击" checked={checkboxHutao}>胡桃攻击</Checkbox>
                </CheckboxGroup>
            </View>
            <View className="FinalSum">
                { (count > 0) ? 
                  <View className="Final">{showItem}:{count}</View> :''}
                {   ((count > 0) && (count <25)) ? 
                        <View className="FinalExplain">再接再历哦</View> : 
                    (count >= 25 && count < 30) ?
                        <View className="FinalExplain">小毕业！</View> :
                    (count >= 30 && count < 36) ?
                        <View className="FinalExplain">毕业咯~</View> :
                    (count >=36) ?
                        <View className="FinalExplain">建议穿到关服</View> : ''
                }
            </View>
        </View>
    )
}