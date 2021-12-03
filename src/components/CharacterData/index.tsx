import { Input, Picker, Text, View } from '@tarojs/components'
import "./index.css"

export default function CharacterData(props) {

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
                        onInput={props.handleHPDefaultInput}
                        maxlength={6}
                        value={props.HPDefault ? props.HPDefault : ''}
                    />
                </View>
                <View className="box box22">
                    <Input
                        className="inputDetail"
                        placeholder="攻击力白字"
                        type="digit"
                        onInput={props.handleATKDefaultInput}
                        maxlength={6}
                        value={props.ATKDefault ? props.ATKDefault : ''}
                    />
                </View>
                <View className="box box33">
                    <Input
                        className="inputDetail"
                        placeholder="防御力白字"
                        type="digit"
                        onInput={props.handleDEFDefaultInput}
                        maxlength={6}
                        value={props.DEFDefault ? props.DEFDefault : ''}
                    />
                </View>
            </View>

            <View className="row">
                <View className="containerInData container1">
                    <View className="tips">-时之沙属性-</View>
                    <Picker 
                        onChange={props.SandsPickerChange}
                        value={props.SandsIndex > -1 ? props.SandsIndex : 0}
                        range={SandsArray}
                    >
                        <View className="picker">
                            {
                                props.SandsIndex > -1 ? 
                                <Text>当前选择:{SandsArray[props.SandsIndex]}</Text> :
                                <Text>点击选择</Text>
                            }
                        </View>
                    </Picker>
                </View>
                <View className="containerInData container2">
                    <View className="tips">-空之杯属性-</View>
                    <Picker 
                        onChange={props.GobletPickerChange}
                        value={props.GobletIndex > -1 ? props.GobletIndex : 0}
                        range={GobletArray}
                    >
                        <View className="picker">
                            {
                                props.GobletIndex > -1 ? 
                                <Text>当前选择:{GobletArray[props.GobletIndex]}</Text> :
                                <Text>点击选择</Text>
                            }
                        </View>
                    </Picker>
                </View>
                <View className="containerInData container3">
                    <View className="tips">-理之冠属性-</View>
                    <Picker 
                        onChange={props.CircletPickerChange}
                        value={props.CircletIndex > -1 ? props.CircletIndex : 0}
                        range={CircletArray}
                    >
                        <View className="picker">
                            {
                                props.CircletIndex > -1 ? 
                                <Text>当前选择:{CircletArray[props.CircletIndex]}</Text> :
                                <Text>点击选择</Text>
                            }
                        </View>
                    </Picker>
                </View>
            </View>
        </View>
    )
}