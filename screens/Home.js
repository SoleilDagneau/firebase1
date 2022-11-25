import { View, Text, Button } from "react-native";

export default function Home() {

    const GetData = async ()=>{

    }
    return (
        <View>
            <Button title='GetData' onPress={()=>GetData()}></Button>
        </View>

    )
}