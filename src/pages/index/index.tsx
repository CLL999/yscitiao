import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { CharacterData, ChooseCharacter, Count, DataInDetail } from '../../components'
import './index.css'

export default function Index() {

    const [ nowCharacter, setCharacter ] = useState('klee')

    const [ elementIndex, setelementIndex ] = useState(0)
    const [ characterIndex, setcharacterIndex] = useState(4)    
    
    const [ HPDefault, setHPDefault ] = useState(0)
    const [ ATKDefault, setATKDefault ] = useState(0)
    const [ DEFDefault, setDEFDefault ] = useState(0)

    const [ SandsIndex, setSandsIndex ] = useState(-1)
    const [ GobletIndex, setGobletIndex ] = useState(-1)
    const [ CircletIndex, setCircletIndex ] = useState(-1)


    const [ HP, setHP ] = useState(0)
    const [ ATK, setATK ] = useState(0)
    const [ DEF, setDEF ] = useState(0)
    const [ ElementalMastery, setElementalMastery ] = useState(0)
    const [ CritRate, setCritRate ] = useState(0)
    const [ CritDMG, setCritDMG ] = useState(0)
    const [ EnergyRecharge, setEnergyRecharge ] = useState(0)

    const imageSrc: string = `https://qianchen.ink/sourse/characters/${nowCharacter}.png`

    function clearAll() {
        setHPDefault(0)
        setATKDefault(0)
        setDEFDefault(0)
        setSandsIndex(-1)
        setGobletIndex(-1)
        setCircletIndex(-1)
        setHP(0)
        setATK(0)
        setDEF(0)
        setElementalMastery(0)
        setCritRate(0)
        setCritDMG(0)
        setEnergyRecharge(0)
    }

    function initAll(data) {
        setHPDefault(data.characterData.HPDefault)
        setATKDefault(data.characterData.ATKDefault)
        setDEFDefault(data.characterData.DEFDefault)
        setSandsIndex(data.characterData.SandsIndex)
        setGobletIndex(data.characterData.GobletIndex)
        setCircletIndex(data.characterData.CircletIndex)

        setHP(data.dataInDetail.HP)
        setATK(data.dataInDetail.ATK)
        setDEF(data.dataInDetail.DEF)
        setElementalMastery(data.dataInDetail.ElementalMastery)
        setCritRate(data.dataInDetail.CritRate)
        setCritDMG(data.dataInDetail.CritDMG)
        setEnergyRecharge(data.dataInDetail.EnergyRecharge)
    }

    useEffect(() => {
        Taro.getStorage({key: nowCharacter})
            .then(res => initAll(res.data))
            .catch(() => clearAll())
    }, [nowCharacter])
    
    
    useEffect(() => {
        const characterData = { HPDefault, ATKDefault, DEFDefault, SandsIndex, GobletIndex, CircletIndex }
        const dataInDetail = { HP, ATK, DEF, ElementalMastery, CritRate, CritDMG, EnergyRecharge }
        Taro.setStorage({
            key: nowCharacter,
            data: { characterData, dataInDetail } 
        })
    })

    function elementChange(e) {
        setcharacterIndex(0)
        setelementIndex(e.target.value * 1)
    }

    return (
        <View>
            <View className="imageContainer">
                <Image 
                    src={imageSrc} 
                    mode="widthFix" 
                    className="backgroundImage" 
                />
            </View>
            <View className="tips">基于@NGA-pressure_pressure的帖子制作</View>
            <View className="head tips">选择角色</View>
            
            <ChooseCharacter 
                elementIndex={elementIndex}
                characterIndex={characterIndex}
                elementChange={elementChange}
                characterChange={e => setcharacterIndex(e.target.value * 1)}
                signName={setCharacter}
            /> 

            <View className="head">点开人物→属性→详细信息，填入角色的生命值、攻击力和防御力白字，并选择圣遗物属性</View>

            <CharacterData 
                HPDefault={HPDefault}
                ATKDefault={ATKDefault}
                DEFDefault={DEFDefault}
                SandsIndex={SandsIndex}
                GobletIndex={GobletIndex}
                CircletIndex={CircletIndex}
                handleHPDefaultInput={e => setHPDefault(e.target.value * 1)}
                handleATKDefaultInput={e => setATKDefault(e.target.value * 1)}
                handleDEFDefaultInput={e => setDEFDefault(e.target.value * 1)}
                SandsPickerChange={e => setSandsIndex(e.target.value * 1)}
                GobletPickerChange={e => setGobletIndex(e.target.value * 1)}
                CircletPickerChange={e => setCircletIndex(e.target.value * 1)}
            />

            <View className="head">点开人物→圣遗物→圣遗物详情，填入对应的数值</View>

            <DataInDetail 
                HP={HP}
                ATK={ATK}
                DEF={DEF}
                ElementalMastery={ElementalMastery}
                CritRate={CritRate}
                CritDMG={CritDMG}
                EnergyRecharge={EnergyRecharge}
                handleHPInput={e => setHP(e.target.value * 1)}
                handleATKInput={e => setATK(e.target.value * 1)}
                handleDEFInput={e => setDEF(e.target.value * 1)}
                handleElementalMasteryInput={e => setElementalMastery(e.target.value * 1)}
                handleCritRateInput={e => setCritRate(e.target.value * 1)}
                handleCritDMGInput={e => setCritDMG(e.target.value * 1)}
                handleEnergyRechargeInput={e => setEnergyRecharge(e.target.value * 1)}
            />

            <Count 
                nowCharacter={nowCharacter}
                HPDefault={HPDefault}
                ATKDefault={ATKDefault}
                DEFDefault={DEFDefault}
                SandsIndex={SandsIndex}
                GobletIndex={GobletIndex}
                CircletIndex={CircletIndex}

                HP={HP}
                ATK={ATK}
                DEF={DEF}
                ElementalMastery={ElementalMastery}
                CritRate={CritRate}
                CritDMG={CritDMG}
                EnergyRecharge={EnergyRecharge}
            />

            <View className="tips foot">由@万民堂主厨/Cirno339制作~欢迎反馈意见</View>

        </View>
    )
}
