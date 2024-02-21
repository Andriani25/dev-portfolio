import Rect, {FC} from "react"
import { View, Text, StyleSheet } from "react-native"

const ResumeCard: FC = function(){
    return(
        <View style={{flex: 1}} >
            <View style={styles.textContainer} >
        <Text style={styles.title} >Hi, i'm Leandro</Text>
        <Text style={styles.text} >{<Text style={[styles.text, {color: "yellow"}]} >With +1 year programming</Text>} and i'm right now interested in {<Text style={[styles.text, {color: "yellow"}]} >React Native + Expo + Expo Web</Text>}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
    flexDirection: "column",
    marginTop: 50,
    backgroundColor: "red",
    width: "100%",
    height:"auto"
    },
    title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white"
    },
    text: {
        fontSize: 16,
        fontWeight:"600",
        color: "white"
    }
})

export default ResumeCard