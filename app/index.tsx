import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, } from 'react-native'

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Anota.ai
                </Text>
            </View>

            <View style={styles.body}>
                <Image style={styles.img} source={require('../assets/images/rafiki.png')}></Image>
                <Text style={styles.subtitle}>Crie sua primeira nota !</Text>
            </View>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#252525" 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#252525',
    },
    img: {
        width: 280,
        height: 280,
        marginTop: 125,
    },
    header: {

    },
    title: {
        color: '#FFF',
        fontSize: 35,
    },
    subtitle: {
        color: '#FFF',
        fontSize: 18,
        paddingTop: 8,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default App