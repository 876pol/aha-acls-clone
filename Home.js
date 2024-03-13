import { View, Button, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Separator = () => (
    <View style={styles.separator} />
);

const Home = ({ navigation }) => {
    const cardiacArrestData = {
        "CPR": 0,
        "CPRTime": new Date(),
        "EPI": 0,
        "EPITime": new Date(),
        "shock": 0,
        "totalTimeActive": false,
        "totalTime": new Date(),
        "currentTime": new Date(),
        "log": [],
        "modalVisible": false,
    }
    return (
        <SafeAreaView style={styles.home_container}>
            <TouchableOpacity
                style={styles.home_screen_button_bk}
                onPress={() =>
                    navigation.navigate('Cardiac Arrest', cardiacArrestData)
                } >
                <Text style={styles.home_screen_button}>Cardiac Arrest</Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity
                style={styles.home_screen_button_bk}
                onPress={() =>
                    navigation.navigate('Tachycardia')
                } >
                <Text style={styles.home_screen_button}>Tachycardia</Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity
                style={styles.home_screen_button_bk}
                onPress={() =>
                    navigation.navigate('Bradycardia')
                } >
                <Text style={styles.home_screen_button}>Bradycardia</Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity
                style={styles.home_screen_button_bk}
                onPress={() =>
                    navigation.navigate('Post Cardiac Arrest Care')
                } >
                <Text style={styles.home_screen_button}>Post Cardiac Arrest Care</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Home;
