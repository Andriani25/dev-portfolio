import React, {FC} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from '@rneui/themed';

const Header: FC = function(){
    return(
        <View style={styles.container} >
        <Button   buttonStyle={{borderLeftWidth: 5, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, paddingVertical: 10}} size="sm" color={"black"}  title="Home" />
        <Button  buttonStyle={{paddingVertical: 10}} size="sm" color={"black"} title="About" />
        <Button  buttonStyle={{borderRadius: 0, paddingVertical: 10}} size="sm" color={"black"} title="Projects" />
        <Button  buttonStyle={{borderRightWidth: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10, paddingVertical: 10}} size="sm" color={"black"} title="Contacts" />
        </View>
    )
}   

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
   
})

export default Header;

