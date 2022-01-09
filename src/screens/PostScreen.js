import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, FlatList } from "react-native";
import DcardDetail from "../components/DcardDetail";
// import dcardData from "../json/data/api.json";

const PostScreen = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [dcardData, setData] = useState([]);

    const getDcards = async () => {
        try {
            const response = await fetch('https://dcardanalysislaravel-sedok4caqq-de.a.run.app/api/getAllDcard', {
                method: 'GET',
                credentials: 'omit',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                }
            });
            const jsonRawData = await response.json();
            setData(jsonRawData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDcards();
    }, []);

    return (
        <ScrollView style={{ flex: 1 }}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={dcardData}
                    renderItem={({ item }) =>
                        <DcardDetail
                            dcard={item}
                            navigation={navigation}
                        />}
                    keyExtractor={item => item.Id}
                />
            )}
        </ScrollView>
    );
};

export default PostScreen;