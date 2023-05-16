import { View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

interface Props {
  getSymtom: (symptom: string) => void;
}

const Symtoms: React.FC<Props> = ({ getSymtom }) => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => {
          setValue(itemValue);
          getSymtom(itemValue);
        }}>
        <Picker.Item label="Select Symptom" value="" />
        <Picker.Item label="Itching" value="itching" />
        <Picker.Item label= "Skin Rash" value="skin_rash" />
        <Picker.Item label="Continuous Sneezing" value="continuous_sneezing" />
        <Picker.Item label="Shivering" value="shivering" />
        <Picker.Item label="chills" value="chills" />
        <Picker.Item label="stomach_pain" value="stomach_pain" />
        <Picker.Item label="acidity" value="acidity" />
        <Picker.Item label="vomiting" value="vomiting" />
        <Picker.Item label="burning_micturition" value="burning_micturition" />
        <Picker.Item label="spotting_ urination" value="spotting_ urination" />
        <Picker.Item label= "fatigue" value="fatigue" />
        <Picker.Item label="cough" value="cough" />
        <Picker.Item label="high_fever" value="high_fever" />
        <Picker.Item label="sunken_eyes" value="sunken_eyes" />
        <Picker.Item label="breathlessness" value="breathlessness" />
        <Picker.Item label="sweating" value="sweating" />
        <Picker.Item label="dehydration" value="dehydration" />
        <Picker.Item label="indigestion" value="indigestion" />
        
        <Picker.Item label="headache" value="headache" />
        <Picker.Item label= "loss_of_appetite" value="loss_of_appetite" />
        <Picker.Item label="abdominal_pain" value="abdominal_pain" />
        <Picker.Item label="diarrhoea" value="diarrhoea" />
        <Picker.Item label="swelled_lymph_nodes" value="swelled_lymph_nodes" />
        <Picker.Item label="malaise" value="malaise" />
        <Picker.Item label="blurred_and_distorted_vision" value="blurred_and_distorted_vision" />
        <Picker.Item label="phlegm" value="phlegm" />
        <Picker.Item label="throat_irritation" value="throat_irritation" />
        <Picker.Item label="redness_of_eyes" value="redness_of_eyes" />
        <Picker.Item label= "sinus_pressure" value="sinus_pressure" />
        <Picker.Item label="runny_nose" value="runny_nose" />
        <Picker.Item label="congestion" value="congestion" />
        <Picker.Item label="chest_pain" value="chest_pain" />
        <Picker.Item label="fast_heart_rate" value="fast_heart_rate" />
        <Picker.Item label="excessive_hunger" value="excessive_hunger" />
        <Picker.Item label="stiff_neck" value="stiff_neck" />
        <Picker.Item label="loss_of_smell" value="loss_of_smell" />

        <Picker.Item label="bladder_discomfort" value="bladder_discomfort" />
        <Picker.Item label= "foul_smell_of urine" value="foul_smell_of urine" />
        <Picker.Item label="continuous_feel_of_urine" value="continuous_feel_of_urine" />
        <Picker.Item label="passage_of_gases" value="passage_of_gases" />
        <Picker.Item label="internal_itching" value="internal_itching" />
        <Picker.Item label="depression" value="depression" />
        <Picker.Item label="irritability" value="irritability" />
        <Picker.Item label="muscle_pain" value="muscle_pain" />
        <Picker.Item label="watering_from_eyes" value="watering_from_eyes" />
        <Picker.Item label="family_history" value="family_history" />
        <Picker.Item label= "mucoid_sputum" value="mucoid_sputum" />
        <Picker.Item label="rusty_sputum" value="rusty_sputum" />
        <Picker.Item label="visual_disturbances" value="visual_disturbances" />
       
      </Picker>
    </View>
  );
};

export default Symtoms;

            
           
        