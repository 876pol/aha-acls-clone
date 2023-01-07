import ExpandableList from "./ExpandableList.js"
import { Image, ScrollView, SafeAreaView } from 'react-native';
import styles from "./styles.js";

const CONTENT = [
    {
        "title": "Doses/Details",
        "description": `Synchronized cardioversion: 
Refer to your specific device's recommended energy level to maximize first shock success. 
Adenosine IV dose: 
First dose: 6 mg rapid IV push; follow with NS flush. 
Second dose: 12 mg if required. 
Antiarrhythmic Infusions for Stable Wide QRS Tachycardia 
Procainamide IV dose: 
20-50 mg/min until arrhythmia suppressed, hypotension ensues, QRS duration increases >50%, or maximum dose 17 mg/kg given. 
Maintenance infusion: 1-4 mg/min. 
Avoid if prolonged QT or CHF. 
Amiodarone IV dose: 
First dose: 150 mg over 10 minutes. 
Repeat as needed if VT recurs. 
Follow by maintenance infusion of 1 mg/min for first 6 hours. 
Sotalol IV dose: 
100 mg (1.5 mg/kg) over 5 minutes. Avoid if prolonged QT.`
    }
]

const Tachycardia = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Image
                    style={{ ...styles.image, "aspectRatio": 0.56 }}
                    source={require('./img/tachycardia.png')} />
                {ExpandableList(CONTENT)}
            </ScrollView>
        </SafeAreaView>
    )
};


export default Tachycardia;
