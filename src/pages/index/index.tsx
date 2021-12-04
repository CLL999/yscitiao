import { View, Image } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { CharacterData, ChooseCharacter, Count, DataInDetail } from '../../components'
import './index.css'

export default function Index() {

    const [ nowCharacter, setCharacter ] = useState('klee')
    const [ elementIndex, setelementIndex ] = useState(0)
    const [ characterIndex, setcharacterIndex ] = useState(4)

    const imageSrc: string = `https://qianchen.ink/sourse/characters/${nowCharacter}.png`



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

            <CharacterData />

            <View className="head">点开人物→圣遗物→圣遗物详情，填入对应的数值</View>

            <DataInDetail />

            <Count />

            <View className="tips foot">由@万民堂主厨/Cirno339制作~欢迎反馈意见</View>

        </View>
    )
}
