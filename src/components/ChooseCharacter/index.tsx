import { Image, Picker, View } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import { SET_NOWCHARACTER } from '../../constants'

import "./index.css"

export default function ChooseCharacter(props) {

    const dispatch = useDispatch()

    const ElementList: Array<string> = ["火", "水", "风", "雷", "冰", "岩"]
    const elementList: Array<string> = ["pyro", "hydro", "anemo", "electro", "cryo", "geo"]

    const PyroList: Array<string> = ["安柏", "班尼特", "迪卢克", "胡桃", "可莉", "托马", "香菱", "辛焱", "烟绯", "宵宫"]
    const pyroList: Array<string> = ["amber", "bennett", "diluc", "hu_tao", "klee", "thoma", "xiangling", "xinyan", "yanfei", "yoimiya"]

    const HydroList: Array<string> = ["芭芭拉", "莫娜", "心海", "达达利亚", "行秋"]
    const hydroList: Array<string> = ["barbara", "mona", "sangonomiya_kokomi", "tartaglia", "xingqiu"]

    const AnemoList: Array<string> = ["琴", "万叶", "早柚", "砂糖", "温迪", "魈"]
    const anemoList: Array<string> = ["jean", "kaedehara_kazuha", "sayu", "sucrose", "venti", "xiao"]

    const ElectroList: Array<string> = ["北斗", "菲谢尔", "刻晴", "九条裟罗", "丽莎", "雷电将军", "雷泽"]
    const electroList: Array<string> = ["beidou", "fischl", "keqing", "kujou_sara", "lisa", "raiden_shogun", "razor"]

    const CyroList: Array<string> = ["埃洛伊", "重云", "迪奥娜", "优菈", "甘雨", "凯亚", "神里绫华", "七七", "罗莎莉亚"]
    const cyroList: Array<string> = ["aloy", "chongyun", "diona", "eula", "ganyu", "kaeya", "kamisato_ayaka", "qiqi", "rosaria"]


    const GeoList: Array<string> = ["阿贝多", "凝光", "诺艾尔", "钟离"]
    const geoList: Array<string> = ["albedo", "ningguang", "noelle", "zhongli"] 

    const nowElement: string = elementList[props.elementIndex]
    const nowElementSrc: string = require(`../../assets/icons/${nowElement}.png`)

    let CharacterList: Array<string> = []
    let characterList: Array<string> = []

    switch (nowElement) {
        case 'pyro':
            CharacterList = PyroList
            characterList = pyroList
            break;
        case 'hydro':
            CharacterList = HydroList
            characterList = hydroList
            break;
        case 'anemo':
            CharacterList = AnemoList
            characterList = anemoList
            break;            
        case 'electro':
            CharacterList = ElectroList
            characterList = electroList
            break;
        case 'cryo':
            CharacterList = CyroList
            characterList = cyroList
            break;
        case 'geo':
            CharacterList = GeoList
            characterList = geoList
            break;
    }

    const nowCharacter: string = characterList[props.characterIndex]
    dispatch({ type: SET_NOWCHARACTER, payload: { nowCharacter }})
    const nowCharacterSrc: string = require(`../../assets/icons/${nowElement}/${nowCharacter}.png`)
    props.signName(nowCharacter)

    return (
        <View className="container">
            <Picker 
                className="ElementPicker" 
                range={ElementList}
                value={props.elementIndex}
                onChange={props.elementChange}
            >
                <Image 
                    src={nowElementSrc}
                    className="element"
                />
            </Picker>
            <Picker
                className="CharacterPicker"
                range={CharacterList}
                value={props.characterIndex}
                onChange={props.characterChange}
            >
                <Image
                    src={nowCharacterSrc}
                    className="avatar"
                />
            </Picker>
        </View>
    )
}