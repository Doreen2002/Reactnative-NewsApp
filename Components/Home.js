import { useEffect, useState } from 'react';
import { services } from '../Services/services';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner}  from 'native-base';
function Home()
{
    const [newsData, setNewsData] = useState([]);
    useEffect (()=>
    {
        services('general').then(data=>{
            
            setNewsData(data)
        }).catch( error => {
            alert(error)
        })
    }, [])
    return(
        <>
        </>

    //     <NativeBaseProvider>
    //       <ScrollView height={850}>
    //         {/* <FlatList data={newsData} renderItem = {
    //             ({item})=>(
    //                 <View>
    //              <Text>{item.title}</Text>
    //                 </View>
    //             )
    //         } keyExtractor={(item)=>item.id}/> */}
    //       </ScrollView>
    //     </NativeBaseProvider>
    // )
    )
}

export default Home