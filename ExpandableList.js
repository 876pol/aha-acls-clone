import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const ExpandableList = (content) => {
    const [expanded, setExpanded] = useState(Array(content.length).fill(false));
    const components = [];
    for (let i = 0; i < content.length; i++) {
        components.push((
            <TouchableOpacity 
                style={styles.expandable_list_group}
                activeOpacity={0.7}
                onPress={() => {
                    setExpanded(expanded.map((value, index) => {
                        return (index == i) ? !value : value;
                    }));
                }}>
                <View>
                    <Text style={styles.expandable_list_title}>{content[i]["title"]}</Text>
                </View>
                {
                    expanded[i] ? (
                        <View>
                            <Text style={styles.expandable_list_text}>{content[i]["description"]}</Text>
                        </View>
                    ) : (<></>)
                }
            </TouchableOpacity>
        ));
    }
    return <View style={styles.expandable_list_container}>{components}</View>
};

export default ExpandableList;