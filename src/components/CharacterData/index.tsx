import { Input, Picker, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_HPDEFAULT,      
         SET_ATKDEFAULT, 
         SET_DEFDEFAULT,  
         SET_SANDSINDEX,       
         SET_GOBLETINDEX, 
         SET_CIRCLETINDEX } from '../../constants'
import "./index.css"


export default function CharacterData() {
    const dispatch = useDispatch()

    const [ characterData, setCharacterData ] = useState(useSelector(state => state.characterData))    
    const [ isFirstTime, setFirstTime ] = useState(true)

    const chooseCharacter = useSelector(state => state.chooseCharacter)
    const nowCharacter = chooseCharacter.nowCharacter
 
    useEffect(() => {
        Taro.getStorage({
            key: `${nowCharacter}'s characterData`
        }).then(res => 
                {
                    setCharacterData(res.data)
                    dispatch({ type: SET_HPDEFAULT, payload: { HPDefault: res.data.HPDefault}})
                    dispatch({ type: SET_ATKDEFAULT, payload: { ATKDefault: res.data.ATKDefault}})
                    dispatch({ type: SET_DEFDEFAULT, payload: { DEFDefault: res.data.DEFDefault}})
                    dispatch({ type: SET_SANDSINDEX, payload: { SandsIndex: res.data.SandsIndex}})
                    dispatch({ type: SET_GOBLETINDEX, payload: { GobletIndex: res.data.GobletIndex}})
                    dispatch({ type: SET_CIRCLETINDEX, payload: { CircletIndex: res.data.CircletIndex}})

                })
          .catch(err => {   console.log("该角色无数据", err)
                            setCharacterData({ HPDefault: 0,
                                               ATKDefault: 0,
                                               DEFDefault: 0,
                                               SandsIndex: -1,
                                               GobletIndex: -1,
                                               CircletIndex: -1 }) 
                            dispatch({ type: SET_HPDEFAULT, payload: { HPDefault: 0}})
                            dispatch({ type: SET_ATKDEFAULT, payload: { ATKDefault: 0}})
                            dispatch({ type: SET_DEFDEFAULT, payload: { DEFDefault: 0}})
                            dispatch({ type: SET_SANDSINDEX, payload: { SandsIndex: -1}})
                            dispatch({ type: SET_GOBLETINDEX, payload: { GobletIndex: -1}})
                            dispatch({ type: SET_CIRCLETINDEX, payload: { CircletIndex: -1}})
        })}, [nowCharacter])

    useEffect(() => {
        if (isFirstTime) {
            setFirstTime(false)
            return;
        }
        Taro.setStorage({
            key: `${nowCharacter}'s characterData`,
            data: characterData
        })
    }, [ characterData ])


    const SandsArray : Array<string> = ["攻击力%", "生命值%", "防御力%", "元素精通", "充能效率%"]
    const GobletArray : Array<string> = ["属性伤害%", "元素精通", "生命值%", "攻击力%", "防御力%"]
    const CircletArray : Array<string> = ["暴击伤害%", "暴击率%", "治疗加成", "元素精通", "生命值%", "攻击力%", "防御力%"]

    return (
        <View>
            <View className="rowItem">
                <View className="box box11">
                    <Input
                        className="inputDetail"
                        placeholder="生命值白字"
                        type="digit"
                        onBlur={(e) => 
                                {
                                    setCharacterData({ ...characterData, HPDefault: parseFloat(e.detail.value)})
                                    dispatch({ type: SET_HPDEFAULT, payload: { HPDefault: parseFloat(e.detail.value)}})}
                                }
                        maxlength={6}
                        value={characterData.HPDefault ? characterData.HPDefault : ''}
                    />
                </View>
                <View className="box box22">
                    <Input
                        className="inputDetail"
                        placeholder="攻击力白字"
                        type="digit"
                        onBlur={(e) => 
                            {
                                setCharacterData({ ...characterData, ATKDefault: parseFloat(e.detail.value)})
                                dispatch({ type: SET_ATKDEFAULT, payload: { ATKDefault: parseFloat(e.detail.value)}})}
                            }
                        maxlength={6}
                        value={characterData.ATKDefault ? characterData.ATKDefault : ''}
                    />
                </View>
                <View className="box box33">
                    <Input
                        className="inputDetail"
                        placeholder="防御力白字"
                        type="digit"
                        onBlur={(e) => 
                            {
                                setCharacterData({ ...characterData, DEFDefault: parseFloat(e.detail.value)})
                                dispatch({ type: SET_DEFDEFAULT, payload: { DEFDefault: parseFloat(e.detail.value)}})}
                            }
                        maxlength={6}
                        value={characterData.DEFDefault ? characterData.DEFDefault : ''}
                    />
                </View>
            </View>

            <View className="row">
                <View className="containerInData container1">
                    <View className="tips">-时之沙属性-</View>
                    <Picker 
                        onChange={
                        (e) => 
                        {
                            setCharacterData({ ...characterData, SandsIndex: parseInt(e.detail.value.toString())})
                            dispatch({ type: SET_SANDSINDEX, payload: { SandsIndex: parseInt(e.detail.value.toString())}})
                        }
                        }
                        value={characterData.SandsIndex > -1 ? characterData.SandsIndex : 0}
                        range={SandsArray}
                    >
                        <View className="picker">
                            {
                                characterData.SandsIndex > -1 ? 
                                <Text>当前选择:{SandsArray[characterData.SandsIndex]}</Text> :
                                <Text>点击选择</Text>
                            }
                        </View>
                    </Picker>
                </View>
                <View className="containerInData container2">
                    <View className="tips">-空之杯属性-</View>
                    <Picker 
                        onChange={
                        (e) => 
                        {
                            setCharacterData({ ...characterData, GobletIndex: parseInt(e.detail.value.toString())})
                            dispatch({ type: SET_GOBLETINDEX, payload: { GobletIndex: parseInt(e.detail.value.toString())}})
                        }
                        }
                        value={characterData.GobletIndex > -1 ? characterData.GobletIndex : 0}
                        range={GobletArray}
                    >
                        <View className="picker">
                            {
                                characterData.GobletIndex > -1 ? 
                                <Text>当前选择:{ GobletArray[characterData.GobletIndex] }</Text> :
                                <Text>点击选择</Text>
                            }
                        </View>
                    </Picker>
                </View>
                <View className="containerInData container3">
                    <View className="tips">-理之冠属性-</View>
                    <Picker 
                        onChange={
                        (e) => 
                        {
                            setCharacterData({ ...characterData, CircletIndex: parseInt(e.detail.value.toString())})
                            dispatch({ type: SET_CIRCLETINDEX, payload: { CircletIndex: parseInt(e.detail.value.toString())}})
                        }
                        }
                        value={characterData.CircletIndex > -1 ? characterData.CircletIndex : 0}
                        range={CircletArray}
                    >
                        <View className="picker">
                            {
                                characterData.CircletIndex > -1 ? 
                                <Text>当前选择:{ CircletArray[characterData.CircletIndex] }</Text> :
                                <Text>点击选择</Text>
                            }
                        </View>
                    </Picker>
                </View>
            </View>
        </View>
    )
}