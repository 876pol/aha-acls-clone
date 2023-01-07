import ExpandableList from "./ExpandableList.js"
import { Image, ScrollView, SafeAreaView } from 'react-native';
import styles from "./styles.js";

const CONTENT = [
    {
        "title": "Initial Stabilization Phase",
        "description": `Resuscitation is ongoing during the post-ROSC phase, and many of these activities can occur concurrently. However, if prioritization is necessary, follow these steps: 
- Airway management: Waveform capnography or capnometry to confirm and monitor endotracheal tube placement 
- Manage respiratory parameters: Titrate F102 for Sp02 92%-98%; start at 10 breaths/min; titrate to PaC02 of 35-45 mm Hg 
- Manage hemodynamic parameters: Administer crystalloid and/or vasopressor or inotrope for goal systolic blood pressure >90 mm Hg or mean arterial pressure >65 mm Hg `
    },
    {
        "title": "Continued Management and Additional Emergent Activities",
        "description": `These evaluations should be done concurrently so that decisions on targeted temperature management (T TM) receive high priority as cardiac interventions. 
- Emergent cardiac intervention: Early evaluation of 12-lead electrocardiogram (ECG); consider hemodynamics for decision on cardiac intervention 
- TTM: If patient is not following commands, start TTM as soon as possible; begin at 32-36 C for 24 hours by using a cooling device with feedback loop 
- Other critical care management 
  - Continuously monitor core temperature (esophageal, rectal, bladder) 
  - Maintain normoxia, normocapnia, euglycemia 
  - Provide continuous or intermittent electroencephalogram (EEG) monitoring 
  - Provide lung-protective ventilation`
    },
    {
        "title": "H's and T's",
        "description": `- Hypovolemia 
- Hypoxia 
- Hydrogen ion (acidosis) 
- Hypokalemia/hyperkalemia 
- Hypothermia 
- Tension pneumothorax 
- Tamponade, cardiac 
- Toxins 
- Thrombosis, pulmonary 
- Thrombosis, coronary`
    }
]
const PostCardiacArrestCare = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                    style={{...styles.image, "aspectRatio": 0.55 }}
                    source={require('./img/post_cardiac_arrest.png')} />
                {ExpandableList(CONTENT)}
            </ScrollView>
        </SafeAreaView>
    )
};


export default PostCardiacArrestCare;
