var nameList = [
  'Ayaan', 'Zayan', 'Rayyan', 'Arham', 'Faizan',
  'Rehan', 'Sufyan', 'Zubair', 'Saif', 'Hassan',
  'Hussain', 'Ibrahim', 'Imran', 'Aamir', 'Tariq',
  'Sameer', 'Naeem', 'Wasim', 'Khalid', 'Owais',
  'Yaseen', 'Hamza', 'Bilal', 'Usman', 'Adnan',
  'Farhan', 'Shayan', 'Zeeshan', 'Arsalan', 'Danish',
  'Talha', 'Azlan', 'Rizwan', 'Noman', 'Shahzaib',
  'Zain', 'Aadil', 'Fahad', 'Junaid', 'Sami',
  'Anas', 'Aqib', 'Basit', 'Hadi', 'Idrees',
  'Kabir', 'Luqman', 'Musa', 'Nashit', 'Qasim',
  'Rafi', 'Saad', 'Taha', 'Umair', 'Zaki',
  'Areeb', 'Haroon', 'Yahya', 'Zarar', 'Zuhair'
];

export function generateName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
  
}

var messages = [
  "Stay strong, Allah is with you.",
  "Everything happens by the will of Allah.",
  "Sabr brings ease.",
  "Allah knows what your heart feels.",
  "Trust the timing of Allah.",
  "Dua can change everything.",
  "Be patient, your time will come.",
  "Allah never forgets your efforts.",
  "Keep your heart connected to Allah.",
  "What is meant for you will reach you."
];

export function generateMessage() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}