import ExpandableList from "./ExpandableList.js"
import { Image, ScrollView, SafeAreaView } from 'react-native';
import styles from "./styles.js";

const CONTENT = [
    {
        "title": "Doses/Details",
        "description": `Atropine IV dose: 
First dose: 1 mg bolus. 
Repeat every 3-5 minutes. 
Maximum: 3 mg. 
Dopamine IV infusion: 
Usual infusion rate is 5-20 mcg/kg per minute. 
Titrate to patient response; taper slowly. 
Epinephrine IV infusion: 
2-10 mcg per minute infusion. 
Titrate to patient response. 
Causes: 
- Myocardial ischemia/infarction 
- Drugs/toxicologic (eg, calcium-channel blockers, beta blockers, digoxin) 
- Hypoxia 
- Electrolyte abnormality (eg, hyperkalemia) `
    }
]


const Bradycardia = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                    style={{ ...styles.image, "aspectRatio": 0.64 }}
                    source={require('./img/bradycardia.png')} />
                {ExpandableList(CONTENT)}
            </ScrollView>
        </SafeAreaView>
    )
};


export default Bradycardia;
