import { View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

interface Props {
  getSymtom: (symptom: string) => void;
}

const SymtomsSinhala: React.FC<Props> = ({ getSymtom }) => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => {
          setValue(itemValue);
          getSymtom(itemValue);
        }}>
        <Picker.Item label="රෝග ලක්ෂණය තෝරන්න" value="" />
        <Picker.Item label="කැසීම" value="itching" />
        <Picker.Item label= "සමේ කුෂ්ඨ" value="skin_rash" />
        <Picker.Item label="අඛණ්ඩ කිවිසුම් යාම" value="continuous_sneezing" />
        <Picker.Item label="වෙව්ලීම" value="shivering" />
        <Picker.Item label="සීතල බව" value="chills" />
        <Picker.Item label="බඩේ අමාරුව" value="stomach_pain" />
        <Picker.Item label="ආම්ලිකතාවය" value="acidity" />
        <Picker.Item label="වමනය" value="vomiting" />
        <Picker.Item label="මුත්රා කිරීමේදී දැවෙන සංවේදනය" value="burning_micturition" />
        <Picker.Item label="මුත්රා කිරීමේදී පැල්ලම්" value="spotting_ urination" />
        <Picker.Item label= "තෙහෙට්ටුව" value="fatigue" />
        <Picker.Item label="කැස්ස" value="cough" />
        <Picker.Item label="අධික උණ" value="high_fever" />
        <Picker.Item label="ගිලුණු ඇස්" value="sunken_eyes" />
        <Picker.Item label="හුස්ම හිරවීම" value="breathlessness" />
        <Picker.Item label="දහඩිය දැමීම" value="sweating" />
        <Picker.Item label="විජලනය" value="dehydration" />
        <Picker.Item label="අජීර්ණය" value="indigestion" />
        
        <Picker.Item label="හිසරදය" value="headache" />
        <Picker.Item label= "ආහාර රුචිය නැති වීම" value="loss_of_appetite" />
        <Picker.Item label="උදරයේ වේදනාව" value="abdominal_pain" />
        <Picker.Item label="පාචනය" value="diarrhoea" />
        <Picker.Item label="ඉදිමුණු වසා ගැටිති" value="swelled_lymph_nodes" />
        <Picker.Item label="අසනීප හැඟීම" value="malaise" />
        <Picker.Item label="නොපැහැදිලි_සහ_විකෘති_දැක්ම" value="blurred_and_distorted_vision" />
        <Picker.Item label="සෙම" value="phlegm" />
        <Picker.Item label="උගුරේ උද්දීපනය" value="throat_irritation" />
        <Picker.Item label="ඇස් රතු පැහැය" value="redness_of_eyes" />
        <Picker.Item label= "සයිනස් ඇතුළත පීඩනය" value="sinus_pressure" />
        <Picker.Item label="දියර නාසය" value="runny_nose" />
        <Picker.Item label="නාසය සිරවීම" value="congestion" />
        <Picker.Item label="පපුවේ වේදනාව" value="chest_pain" />
        <Picker.Item label="වේගවත් හෘද ස්පන්දනය" value="fast_heart_rate" />
        <Picker.Item label="අධික කුසගින්න" value="excessive_hunger" />
        <Picker.Item label="බෙල්ලේ තද ගතිය" value="stiff_neck" />
        <Picker.Item label="සුවඳ නැති වීම" value="loss_of_smell" />

        <Picker.Item label="මුත්රාශයේ අපහසුතා" value="bladder_discomfort" />
        <Picker.Item label= "මුත්රා වල අපිරිසිදු සුවඳ" value="foul_smell_of urine" />
        <Picker.Item label="මුත්රා පිළිබඳ අඛණ්ඩ හැඟීම" value="continuous_feel_of_urine" />
        <Picker.Item label="උගුරේ ආම්ලික වායූන් ගමන් කිරීම" value="passage_of_gases" />
        <Picker.Item label="අභ්යන්තර_කැසීම" value="internal_itching" />
        <Picker.Item label="මානසික අවපීඩනය" value="depression" />
        <Picker.Item label="නුරුස්නා බව" value="irritability" />
        <Picker.Item label="මාංශ පේශි වේදනාව" value="muscle_pain" />
        <Picker.Item label="කඳුළු සහිත ඇස්" value="watering_from_eyes" />
        <Picker.Item label="පවුලේ ඉතිහාසය" value="family_history" />
        <Picker.Item label= "පැහැදිලි, සුදු හෝ අළු පැහැති කෙල" value="mucoid_sputum" />
        <Picker.Item label="මලකඩ රස කෙළ" value="rusty_sputum" />
        <Picker.Item label="දෘශ්ය බාධා" value="visual_disturbances" />
       
      </Picker>
    </View>
  );
};

export default SymtomsSinhala;
