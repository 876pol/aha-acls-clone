import ExpandableList from "./ExpandableList.js"
import { Image, ScrollView, SafeAreaView, Text, Button, Modal, View, Pressable, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import styles from "./styles.js";


const CONTENT = [
    {
        "title": "CPR Quality",
        "description": `- Push hard (at least 2 inches [5 cm]) and fast (100-120/min) and allow complete chest recoil. 
- Minimize interruptions in compressions. 
- Avoid excessive ventilation. 
- Change compressor every 2 minutes, or sooner if fatigued. 
- If no advanced airway, 30:2 compression-ventilation ratio, or 1 breath every 6 seconds. 
- Quantitative waveform capnography 
- If PETCO_2 is low or decreasing, reassess CPR quality.`
    },
    {
        "title": "Shock Energy for Defibrillation",
        "description": `Biphasic: Manufacturer recommendation (eg, initial dose of 120-200 J); if unknown, use maximum available. Second and subsequent doses should be equivalent, and higher doses may be considered. 
Monophasic: 360 J`
    },
    {
        "title": "Drug Therapy",
        "description": `Epinephrine IV/IO dose: 
1 mg every 3-5 minutes 
Amiodarone IV/IO dose: 
First dose: 300 mg bolus. 
Second dose: 150 mg. 
or 
Lidocaine IV/IO dose: 
First dose: 1-1.5 mg/kg. 
Second dose: 0.5-0.75 mg/kg.`
    },
    {
        "title": "Advanced Airway",
        "description": `- Endotracheal intubation or supraglottic advanced airway 
- Waveform capnography or capnometry to confirm and monitor ET tube placement 
- Once advanced airway in place, give 1 breath every 6 seconds (10 breaths/min) with continuous chest compressions`
    }
    ,
    {
        "title": "Return of Spontaneous Circulation (ROSC)",
        "description": `- Pulse and blood pressure 
- Abrupt sustained increase in PETCO_2 (typically 240 mm Hg) 
- Spontaneous arterial pressure waves with intra-arterial monitoring`
    }
    ,
    {
        "title": "Reversible Causes",
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

const roundSeconds = (date) => {
    date.setMilliseconds(0);
    return date;
};

const CardiacArrest = ({ navigation, route }) => {
    const [tmp, setTmp] = useState(new Date());

    const refreshState = () => {
        setTmp(new Date());
    };

    useEffect(() => {
        const interval = setInterval(() => { route.params.currentTime = roundSeconds(new Date()); refreshState(); }, 200);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const addLeadingZero = (x) => {
        return (x.toString().length == 1 ? "0" : "") + x.toString();
    };

    const elapsedTime = (startTime, isActive) => {
        if (!isActive) return "0:00";
        const milliseconds = Math.max(0, route.params.currentTime - startTime);
        const seconds = Math.floor(milliseconds / 1000) % 60;
        const minutes = Math.floor(milliseconds / 60000);
        return `${minutes}:${addLeadingZero(seconds)}`
    };

    return (
        <SafeAreaView style={{ ...styles.container, flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={route.params.modalVisible}
                onRequestClose={() => {
                    route.params.modalVisible = !route.params.modalVisible;
                }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.row_button}>
                        <Button
                            title="Reset"
                            onPress={() => { route.params.log = []; route.params.modalVisible = !route.params.modalVisible; }}
                        />
                        <Text style={{ fontSize: 18, paddingTop: 8 }}>Code Logs</Text>
                        <Button
                            title="Close"
                            onPress={() => route.params.modalVisible = !route.params.modalVisible}
                        />
                    </View>
                    <ScrollView style={styles.log_container}>
                        <Text style={styles.log_text}>{route.params.log.join("\n")}</Text>
                    </ScrollView>
                </SafeAreaView>
            </Modal>
            <View style={styles.row_button}>
                <TouchableOpacity
                    style={styles.row_button_button}
                    onPress={() => {
                        route.params.CPR++;
                        route.params.CPRTime = roundSeconds(new Date());
                        if (!route.params.totalTimeActive) {
                            route.params.totalTimeActive = true;
                            route.params.totalTime = roundSeconds(new Date());
                            route.params.log.push(`${elapsedTime(route.params.totalTime, route.params.totalTimeActive)} - Code Start`);
                        }
                        route.params.log.push(`${elapsedTime(route.params.totalTime, route.params.totalTimeActive)} - CPR #${route.params.CPR}`);
                        refreshState();
                    }
                    }
                >
                    <Text style={styles.row_button_text}>{`CPR ${addLeadingZero(route.params.CPR)}`}</Text>
                </TouchableOpacity>
                <Text style={styles.row_button_text}>{elapsedTime(route.params.CPRTime, route.params.CPR)}</Text>
                <TouchableOpacity
                    style={styles.row_button_button}
                    onPress={() => {
                        route.params.EPI++;
                        route.params.EPITime = roundSeconds(new Date());
                        if (!route.params.totalTimeActive) {
                            route.params.totalTimeActive = true;
                            route.params.totalTime = roundSeconds(new Date());
                            route.params.log.push(`${elapsedTime(route.params.totalTime, route.params.totalTimeActive)} - Code Start`);
                        }
                        route.params.log.push(`${elapsedTime(route.params.totalTime, route.params.totalTimeActive)} - EPI #${route.params.EPI}`);
                        refreshState();
                    }
                    }
                >
                    <Text style={styles.row_button_text}>{`EPI ${addLeadingZero(route.params.EPI)}`}</Text>
                </TouchableOpacity>
                <Text style={styles.row_button_text}>{elapsedTime(route.params.EPITime, route.params.EPI)}</Text>
                <TouchableOpacity
                    style={styles.row_button_button}
                    onPress={() => {
                        route.params.shock++;
                        if (!route.params.totalTimeActive) {
                            route.params.totalTimeActive = true;
                            route.params.totalTime = roundSeconds(new Date());
                            route.params.log.push(`${elapsedTime(route.params.totalTime, route.params.totalTimeActive)} - Code Start`);
                        }
                        route.params.log.push(`${elapsedTime(route.params.totalTime, route.params.totalTimeActive)} - ⚡ #${route.params.shock}`);
                        refreshState();
                    }
                    }
                >
                    <Text style={styles.row_button_text}>{` ⚡ ${addLeadingZero(route.params.shock)} `}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Image
                    style={{ ...styles.image, "aspectRatio": 0.54 }}
                    source={require('./img/cardiac_arrest.png')} />
                {ExpandableList(CONTENT)}
            </ScrollView>
            <View style={styles.row_button}>
                <Text style={styles.row_button_text}>Total Time - {elapsedTime(route.params.totalTime, route.params.totalTimeActive)}</Text>
                <TouchableOpacity
                    style={styles.row_button_button}
                    onPress={() => {
                        if (!route.params.totalTimeActive) {
                            route.params.totalTimeActive = true;
                            route.params.totalTime = roundSeconds(new Date());
                            route.params.log.push(`${elapsedTime(route.params.totalTime, route.params.totalTimeActive)} - Code Start`);
                        } else {
                            route.params.totalTimeActive = false;
                            route.params.CPR = 0;
                            route.params.EPI = 0;
                            route.params.shock = 0;
                            route.params.log.push(`${elapsedTime(route.params.totalTime, true)} - Code Stop`);
                        }
                        refreshState();
                    }
                    }
                >
                    <Text style={styles.row_button_text}>{(route.params.totalTimeActive) ? "Reset All" : "Start"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


export default CardiacArrest;
