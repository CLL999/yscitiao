import { Input, View } from '@tarojs/components';
import './index.css'

export default function DataInDetail(props) {
    return (
        <View>
            <View className="rowItem">
                <View className="box box1">
                    <Input
                        className="inputDetail"
                        placeholder="生命值"
                        type="digit"
                        onInput={props.handleHPInput}
                        maxlength={6}
                        value={props.HP ? props.HP : ''}
                    />
                </View>
                <View className="box box2">
                    <Input
                        className="inputDetail"
                        placeholder="攻击力"
                        type="digit"
                        onInput={props.handleATKInput}
                        maxlength={6}
                        value={props.ATK ? props.ATK : ''}
                    />
                </View>
                <View className="box box3">
                    <Input
                        className="inputDetail"
                        placeholder="防御力"
                        type="digit"
                        onInput={props.handleDEFInput}
                        maxlength={6}
                        value={props.DEF ? props.DEF : ''}
                    />
                </View>
            </View>
            <View className="rowItem">
                <View className="Box box4">
                    <Input 
                        className="inputDetail"
                        placeholder="元素精通"
                        type="digit"
                        onInput={props.handleElementalMasteryInput}
                        maxlength={6}
                        value={props.ElementalMastery ? props.ElementalMastery : ''}
                    />
                </View>
                <View className="Box box5">
                    <Input 
                        className="inputDetail"
                        placeholder="暴击率/%"
                        type="digit"
                        onInput={props.handleCritRateInput}
                        maxlength={6}
                        value={props.CritRate ? props.CritRate : ''}
                    />
                </View>
                <View className="Box box6">
                    <Input 
                        className="inputDetail"
                        placeholder="暴击伤害/%"
                        type="digit"
                        onInput={props.handleCritDMGInput}
                        maxlength={6}
                        value={props.CritDMG ? props.CritDMG : ''}
                    />
                </View>
                <View className="Box box7">
                    <Input 
                        className="inputDetail"
                        placeholder="暴击伤害/%"
                        type="digit"
                        onInput={props.handleEnergyRechargeInput}
                        maxlength={6}
                        value={props.EnergyRecharge ? props.EnergyRecharge : ''}
                    />
                </View>
            </View>
        </View>
    )
}