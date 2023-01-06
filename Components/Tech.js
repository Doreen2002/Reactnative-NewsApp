import { useEffect, useState } from 'react';
import { services } from '../Services/services';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner}  from 'native-base';
import { color, padding, textAlign } from 'styled-system';
function Tech()
{
    const [newsData, setNewsData] = useState([]);
    useEffect (()=>
    {
        services('technology').then(data=>{
            
            setNewsData(data)
        }).catch( error => {
            alert(error)
        })
    }, [])
    return(
      

        <NativeBaseProvider>
          <ScrollView height={850}>
            <FlatList data={newsData} renderItem = {
                ({item})=>(
                    <View>
                         <Text style={styles.date}>
                                    {new Date(item.publishedAt).toDateString()}
                                </Text>
                         <Image
                                    width={550}
                                    height={250}
                                    resizeMode={"cover"}
                                    source={{
                                        uri: item.urlToImage,
                                    }}
                                    alt="Alternate Text"
                                />
                 <Text style={styles.title}>{item.title}</Text>
                
                                <Text style={styles.newsDescription}>
                                    {item.description}
                                </Text>
                    </View>
                )
            } keyExtractor={(item)=>item.id}/>
          </ScrollView>
        </NativeBaseProvider>
    // )
    )
}


const styles = StyleSheet.create({
    newsContainer: {
        padding: 10
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: "600",
        color: "#b860f7",
        marginHorizontal: 10
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10,
        lineHeight: 30,
        color: "#d6b7ed",
        marginHorizontal: 10
    },
    date: {
        fontSize: 14,
        color:"#2c0945",
        textAlign: 'right',
        padding: 10
    },
});

export default Tech