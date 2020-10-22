import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Button
} from 'react-native';
import download from './download.jpg';

const HalamanAwal = () => {
    return ( 
        <View style={{flex:1}}>
            <View style={{
                flex:1,
                justifyContent:"flex-end",
                alignItems:"center"
            }}>
                <Image
                    source={download}
                    style={{height:150}}
                />
                <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 8 }}>Login</Text>
            </View>
            <View
                style={{
                 flex: 1,
                marginHorizontal: 8
            }}>
                <TextInput
                    placeholder="Username"
                    style={{
                        borderBottomWidth: 1,
                        marginBottom: 8
                    }}
                />
                <TextInput
                    placeholder="Password"
                    style={{
                        borderBottomWidth: 1,
                        marginBottom: 8
                    }}
                />
                <Button 
                    title="LOGIN"
                />
                <Text style={{
                    textAlign: "center", marginTop: 8
                }}>Telkom Digital Talent 2020</Text>
            </View>
        </View>
    )
}

export default HalamanAwal;