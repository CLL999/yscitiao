import Taro from '@tarojs/taro';
import { Input, View } from '@tarojs/components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './index.css'

import { SET_HP,
         SET_ATK,
         SET_DEF,
         SET_ELEMENTALMASTERY,
         SET_CRITRATE,
         SET_CRITDMG,
         SET_ENERGYRECHARGE } from '../../constants'



export default function DataInDetail() {
    const dispatch = useDispatch()
    const [ dataInDetail, setDataInDetail ] = useState(useSelector(state => state.dataInDetail))
    const [ isFirstTime, setFirstTime ] = useState(true)

    const chooseCharacter = useSelector(state => state.chooseCharacter)
    const nowCharacter = chooseCharacter.nowCharacter

    console.log("现在是", nowCharacter)

    useEffect(() => {
        Taro.getStorage({
            key: `${nowCharacter}'s dataInDetail`
        }).then(res => 
            {
                setDataInDetail(res.data)
                dispatch({type: SET_HP, payload: { HP: res.data.HP}})
                dispatch({type: SET_ATK, payload: { ATK: res.data.ATK}})
                dispatch({type: SET_DEF, payload: { DEF: res.data.DEF}})
                dispatch({type: SET_ELEMENTALMASTERY, payload: { ElementalMastery: res.data.ElementalMastery}})
                dispatch({type: SET_CRITRATE, payload: { CritRate : res.data.CritRate}})
                dispatch({type: SET_CRITDMG, payload: { CritDMG : res.data.CritDMG}})
                dispatch({type: SET_ENERGYRECHARGE, payload: { EnergyRecharge : res.data.EnergyRecharge}})

            })
          .catch(err => {   console.log("该角色无数据", err)
                            setDataInDetail({   HP: 0,
                                                ATK: 0,
                                                DEF: 0,
                                                ElementalMastery: 0,
                                                CritRate: 0,
                                                CritDMG: 0,
                                                EnergyRecharge: 0 })
                            dispatch({type: SET_HP, payload: { HP: 0 }})
                            dispatch({type: SET_ATK, payload: { ATK: 0 }})
                            dispatch({type: SET_DEF, payload: { DEF: 0 }})
                            dispatch({type: SET_ELEMENTALMASTERY, payload: { ElementalMastery: 0 }})
                            dispatch({type: SET_CRITRATE, payload: { CritRate : 0 }})
                            dispatch({type: SET_CRITDMG, payload: { CritDMG : 0 }})
                            dispatch({type: SET_ENERGYRECHARGE, payload: { EnergyRecharge : 0 }})
    })}, [nowCharacter])

    useEffect(() => {
        if (isFirstTime) 
            {
                setFirstTime(false)
                return
            }
        Taro.setStorage({
            key: `${nowCharacter}'s dataInDetail`,
            data: dataInDetail
        })
    }, [ dataInDetail ])



    return (
        <View>
            <View className="rowItem">
                <View className="box box1">
                    <Input
                        className="inputDetail"
                        placeholder="生命值"
                        type="digit"
                        onBlur={(e) => 
                            {
                                setDataInDetail({...dataInDetail, HP: parseFloat(e.detail.value)})
                                dispatch({type: SET_HP, payload: { HP: parseFloat(e.detail.value)}})}
                            }
                        maxlength={6}
                        value={dataInDetail.HP ? dataInDetail.HP : ''}
                    />
                </View>
                <View className="box box2">
                    <Input
                        className="inputDetail"
                        placeholder="攻击力"
                        type="digit"
                        onBlur={(e) => 
                            {
                                setDataInDetail({...dataInDetail, ATK: parseFloat(e.detail.value)})  
                                dispatch({type: SET_ATK, payload: { ATK: parseFloat(e.detail.value)}})}
                            }
                        maxlength={6}
                        value={dataInDetail.ATK ? dataInDetail.ATK : ''}
                    />
                </View>
                <View className="box box3">
                    <Input
                        className="inputDetail"
                        placeholder="防御力"
                        type="digit"
                        onBlur={
                            (e) => 
                            {
                                setDataInDetail({...dataInDetail, DEF: parseFloat(e.detail.value)})  
                                dispatch({type: SET_DEF, payload: { DEF: parseFloat(e.detail.value)}})
                            }
                        }
                        maxlength={6}
                        value={dataInDetail.DEF ? dataInDetail.DEF : ''}
                    />
                </View>
            </View>
            <View className="rowItem">
                <View className="Box box4">
                    <Input 
                        className="inputDetail"
                        placeholder="元素精通"
                        type="digit"
                        onBlur={
                            (e) => 
                            {
                                setDataInDetail({...dataInDetail, ElementalMastery: parseFloat(e.detail.value)})  
                                dispatch({type: SET_ELEMENTALMASTERY, payload: { ElementalMastery: parseFloat(e.detail.value)}})
                            }
                        }
                        maxlength={6}
                        value={dataInDetail.ElementalMastery ? dataInDetail.ElementalMastery : ''}
                    />
                </View>
                <View className="Box box5">
                    <Input 
                        className="inputDetail"
                        placeholder="暴击率/%"
                        type="digit"
                        onBlur={
                            (e) => 
                            {
                                setDataInDetail({...dataInDetail, CritRate : parseFloat(e.detail.value)})  
                                dispatch({type: SET_CRITRATE, payload: { CritRate : parseFloat(e.detail.value)}})
                            }
                        }
                        maxlength={6}
                        value={dataInDetail.CritRate ? dataInDetail.CritRate : ''}
                    />
                </View>
                <View className="Box box6">
                    <Input 
                        className="inputDetail"
                        placeholder="暴击伤害/%"
                        type="digit"
                        onBlur={(e) => 
                            {
                                setDataInDetail({...dataInDetail, CritDMG : parseFloat(e.detail.value)})      
                                dispatch({type: SET_CRITDMG, payload: { CritDMG : parseFloat(e.detail.value)}})}
                            }
                        maxlength={6}
                        value={dataInDetail.CritDMG ? dataInDetail.CritDMG : ''}
                    />
                </View>
                <View className="Box box7">
                    <Input 
                        className="inputDetail"
                        placeholder="充能效率/%"
                        type="digit"
                        onBlur={
                            (e) => 
                            {
                                setDataInDetail({...dataInDetail, EnergyRecharge : parseFloat(e.detail.value)})        
                                dispatch({type: SET_ENERGYRECHARGE, payload: { EnergyRecharge : parseFloat(e.detail.value)}})
                            }
                        }
                        maxlength={6}
                        value={dataInDetail.EnergyRecharge ? dataInDetail.EnergyRecharge : ''}
                    />
                </View>
            </View>
        </View>
    )
}