import { Checkbox, CheckboxGroup, Image, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';

import copySrc from "../../assets/icons/copy.png"

import "./index.css"

export default function Count(props) {

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

    let FinalHP:number = (props.HPDefault ? 
                            parseFloat(((props.HP - 4780) 
                            / (props.HPDefault - 0.466 
                            * ((props.SandsIndex === 1 ? 1 : 0) 
                            + (props.GobletIndex === 2 ? 1 : 0) 
                            + (props.Circlet === 4 ? 1 : 0))) 
                            / ForEachHP).toFixed(2)):0)
    let FinalATK:number = (props.ATKDefault ?
                            parseFloat(((((props.ATK - 311) 
                            / (props.ATKDefault)) 
                            - 0.466 * ((props.SandsIndex === 0 ? 1 : 0) 
                            + (props.GobletIndex === 3 ? 1 : 0) 
                            + (props.CircletIndex === 5 ? 1 : 0))) 
                            / ForEachATK).toFixed(2)):0)
    let FinalDEF:number = (props.DEFDefault ?
                            parseFloat((((props.DEF / props.DEFDefault) 
                            - 0.583 * ((props.SandsIndex === 2 ? 1 : 0) 
                            + (props.CircletIndex === 4 ? 1 : 0) 
                            + (props.GobletIndex === 6 ? 1 : 0))) 
                            / ForEachDEF).toFixed(2)):0)
    let FinalElementalMastery:number = 
                            parseFloat(((props.ElementalMastery 
                            - 187 * ((props.SandsIndex === 3 ? 1 : 0) 
                            + (props.GobletIndex === 1 ? 1 : 0) 
                            + (props.CircletIndex === 3 ? 1 : 0))) 
                            / ForEachElementalMastery).toFixed(2))
    let FinalCritRate:number = 
                            parseFloat(((props.CritRate 
                            - 31.1 * (props.CircletIndex === 1 ? 1 : 0)) 
                            / ForEachCritRate).toFixed(2))
    let FinalCritDMG:number = 
                            parseFloat(((props.CritDMG 
                            - 62.2 * (props.CircletIndex === 0 ? 1 : 0)) 
                            / ForEachCritDMG).toFixed(2))
    let FinalEnergyRecharge:number = 
                            parseFloat(((props.EnergyRecharge 
                            - 51.8 * (props.SandsIndex === 4 ? 1 : 0)) 
                            / ForEachEnergyRecharge).toFixed(2))

    let SUM : number = 0
    let VisualItem: string = ''

    function copy() {
        let cpy = `${props.nowCharacter},${VisualItem}=${SUM.toFixed(2)}`
        Taro.setClipboardData({data: cpy})
    }

    function checkboxChange(e) {
        console.log(e.detail.value)
        SUM = 0
        VisualItem = ''
        e.detail.value.forEach(element => {
            switch (element) {
                case "??????":
                    SUM += FinalATK;
                    VisualItem += "??????+";
                    break;
                case "??????":
                    SUM += FinalCritRate;
                    VisualItem += "??????+";
                    break;
                case "??????":
                    SUM += FinalCritDMG;
                    VisualItem += "??????+";
                    break;
                case "??????":
                    SUM += FinalElementalMastery;
                    VisualItem += "??????+";
                    break;
                case "??????":
                    SUM += FinalEnergyRecharge;
                    VisualItem += "??????+";
                    break;
                case "??????":
                    SUM += FinalHP;
                    VisualItem += "??????+";
                    break;
                case "??????":
                    SUM += FinalDEF;
                    VisualItem += "??????+";
                    break;
                case "????????????":
                    SUM += FinalATK * 0.6;
                    VisualItem += "??????(0.6)+";
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
                <Text className="Tips">--??????--</Text>
                <Image 
                    src={copySrc} 
                    className="copy"
                    onTouchEnd={copy}
                />
                <Text className="copytips">????????????</Text>
            </View>
            <View className="Container">
                <View className="kind">
                    <View className="layeredCard">
                        <View className="item">??????:{FinalHP}</View>
                        <View className="item">??????:{FinalATK}</View>
                        <View className="item">??????:{FinalDEF}</View>
                        <View className="item">??????:{FinalElementalMastery}</View>
                        <View className="item">??????:{FinalCritRate}</View>
                        <View className="item">??????:{FinalCritDMG}</View>
                        <View className="item">??????:{FinalEnergyRecharge}</View>
                    </View>
                </View>
                <CheckboxGroup 
                    onChange={checkboxChange}
                    className="checkbox"
                >
                    <Checkbox value="??????" checked={checkboxATK}>??????</Checkbox>
                    <Checkbox value="??????" checked={checkboxCritRate}>??????</Checkbox>
                    <Checkbox value="??????" checked={checkboxCritDMG}>??????</Checkbox>
                    <Checkbox value="??????" checked={checkboxElementalMastery}>??????</Checkbox>
                    <Checkbox value="??????" checked={checkboxEnergyRecharge}>??????</Checkbox>
                    <Checkbox value="??????" checked={checkboxHP}>??????</Checkbox>
                    <Checkbox value="??????" checked={checkboxDEF}>??????</Checkbox>
                    <Checkbox value="????????????" checked={checkboxHutao}>????????????</Checkbox>
                </CheckboxGroup>
            </View>
            <View className="FinalSum">
                { (count > 0) ? 
                  <View className="Final">{showItem}:{count}</View> :''}
                {   ((count > 0) && (count <25)) ? 
                        <View className="FinalExplain">???????????????</View> : 
                    (count >= 25 && count < 30) ?
                        <View className="FinalExplain">????????????</View> :
                    (count >= 30 && count < 36) ?
                        <View className="FinalExplain">?????????~</View> :
                    (count >=36) ?
                        <View className="FinalExplain">??????????????????</View> : ''
                }
            </View>
        </View>
    )
}