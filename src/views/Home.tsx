import React, {FC} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Header from "../components/Header";
import ResumeCard from "../components/ResumeCard";

const Home: FC = function(){
    return(
        <View style={{flex: 1}} >
            <Header/>
        <ScrollView style={styles.container} >
            <ResumeCard/>
            <Text style={styles.text} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nemo totam provident dolorum alias incidunt perspiciatis earum dolor tempora suscipit? Itaque quos ipsum nisi aperiam assumenda voluptatibus beatae ad! Repellat!</Text>
            <Text style={styles.text} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nemo totam provident dolorum alias incidunt perspiciatis earum dolor tempora suscipit? Itaque quos ipsum nisi aperiam assumenda voluptatibus beatae ad! Repellat!</Text>
        
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 50,
        backgroundColor: "black"
    },
    text:{
        fontSize:16,
        height: 900,
        color: "white"
    }
})

export default Home;