const getImages = {
  '/"Allergy/"': require('../assets/Disease/Allergy.jpg'),
  'Gastroenteritis': require('../assets/Disease/Gastroenteritis.jpg'),
  'Migraine': require('../assets//Disease/Migraine.jpg'),
  'Common Cold': require('../assets/Disease/CommonCold.jpg'),
  'Urinary tract infection': require('../assets/Disease/Urinarytractinfection.jpg'),
};

export function GetImage(name) {
  return getImages[name];
}