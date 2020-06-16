import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { globalStyles } from '../components/global';

export default function RecipeTypes({ navigation }) {
    const [page, setPage] = useState({
        page: "mains"
    });

    function changePage(page){
        setPage(page);
        navigation.navigate ("RecipeLists", {page});
    }

    return (
        <View style={styles.page}>

            <TouchableOpacity style={styles.container} onPress={() => changePage("mains")}>
                <View style={styles.container}>
                    <Image
                        style={globalStyles.imageButton}
                        source={{
                            uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/16/7/5/16759562/1000x933.jpg?1540401340',
                        }} />

                </View>
                
            </TouchableOpacity>
            <Text style={globalStyles.anchorText}>MAINS</Text>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate ("RecipeLists")}>
                <View style={styles.container}>
                    <Image
                        style={globalStyles.imageButton}
                        source={{
                            uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/16/7/1/16718350/1000x667.JPG?1537273481',
                        }} />
                </View>
            </TouchableOpacity>
            <Text style={globalStyles.anchorText}>SWEET TREATS</Text>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate ("RecipeLists")}>
                <View style={styles.container}>
                    <Image
                        style={globalStyles.imageButton}
                        source={{
                            uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/16/6/7/16678943/642x340.jpg?1535810268',
                        }} cropTop={100000}/>
                </View>
            </TouchableOpacity>
            <Text style={globalStyles.anchorText}>SNACKS & SIDES</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 20,

    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});