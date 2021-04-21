import React from "react";
import { ScrollView, FlatList } from "react-native";
import DcardDetail from "../components/DcardDetail";
import dcardData from "../json/data/api.json";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <FlatList
                data={dcardData.dcardList}
                renderItem={({ item }) =>
                    <DcardDetail
                        dcard={item}
                        navigation={navigation}
                    />}
                keyExtractor={item => item.ID}
            />
        </ScrollView>
    );
};

export default HomeScreen;