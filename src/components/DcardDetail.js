import React from "react";
import { StyleSheet, Text, View} from "react-native";
import dcardData from "../json/data/api.json";

const DcardDetail = ({ dcard }) => {
    return (
        <View style={styles.cardContainerStyle}>
            <View style={styles.box1}>
                <Text style={styles.title}>
                    {dcardData.dcardList[0].Title}
                </Text>
                <Text style={styles.content}>
                    {dcardData.dcardList[0].Excerpt}
                </Text>
            </View>
            <View style={styles.box1}>
                <Text style={styles.title}>
                    {dcardData.dcardList[0].ID}
                </Text>
                <Text style={styles.content}>
                    {dcardData.dcardList[0].CreatedAt}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        justifyContent: "space-between",
        padding: 10
    },
    box1: {
        flexDirection: "column",
    },
    title: {
        fontSize: 20
    },
    content: {
        fontSize: 6,
        numberOfLines: 20
    }
});

export default DcardDetail;