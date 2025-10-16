import { Text, Touchable, View } from "react-native";

export default function MightNeed(){
    return(
        <View>
            <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:20, backgroundColor:"yellow", height:"100%"}}>You might need</Text>
                {/* <Touchable >See more</Touchable> */}
            </View>
        </View>
    )
}