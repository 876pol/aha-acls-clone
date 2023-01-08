import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
        width: "100%",
        height: undefined,
    },
    home_container: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
    },
    home_screen_button: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "#BB0000"
    },
    home_screen_button_bk: {
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 8,
        backgroundColor: "#FFC5C5",
        borderColor: "#FFB0B0",
        borderWidth: 2
    },
    row_button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#E7E7E7",
        borderColor: "#C0C0C0",
        borderWidth: "1",
    },
    row_button_text: {
        flex: "1 1 0",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 16,
        padding: 8,
    },
    row_button_button: {
        flex: "1 1 0",
        borderRadius: 10,
        backgroundColor: "#007AFF",
    },
    container: {
        height: "100%",
        backgroundColor: "#FFFFFF"
    },
    separator: {
        marginVertical: 4,
    },
    expandable_list_container: {
        marginVertical: 20
    },
    expandable_list_group: {
        padding: 10,
        marginHorizontal: 15,
        margin: 5,
        borderRadius: 8,
        backgroundColor: "#E7E7E7",
        borderColor: "#C0C0C0",
        borderWidth: 1
    },
    expandable_list_title: {
        fontSize: 16,
        fontWeight: "bold",
        paddingVertical: 8,
        paddingHorizontal: 10
    },
    expandable_list_text: {
        paddingHorizontal: 10,
        paddingBottom: 8
    },
    log_container: {
        height: "100%",
    },
    log_text: {
        fontSize: 18,
        lineHeight: 25,
        padding: 10,
    }
});

export default styles;