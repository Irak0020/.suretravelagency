// ============================================
// SURE TRAVEL AGENCY — World Data
// Airports & Cities
// ============================================

const WORLD_AIRPORTS = [
  // Africa
  { code: "BJM", name: "Bujumbura International Airport", city: "Bujumbura", country: "Burundi" },
  { code: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya" },
  { code: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa", country: "Ethiopia" },
  { code: "JNB", name: "O.R. Tambo International Airport", city: "Johannesburg", country: "South Africa" },
  { code: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa" },
  { code: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt" },
  { code: "LOS", name: "Murtala Muhammed International Airport", city: "Lagos", country: "Nigeria" },
  { code: "ABJ", name: "Félix-Houphouët-Boigny Airport", city: "Abidjan", country: "Côte d'Ivoire" },
  { code: "ACC", name: "Kotoka International Airport", city: "Accra", country: "Ghana" },
  { code: "DAR", name: "Julius Nyerere International Airport", city: "Dar es Salaam", country: "Tanzania" },
  { code: "EBB", name: "Entebbe International Airport", city: "Kampala", country: "Uganda" },
  { code: "KGL", name: "Kigali International Airport", city: "Kigali", country: "Rwanda" },
  { code: "DKR", name: "Léopold Sédar Senghor International Airport", city: "Dakar", country: "Senegal" },
  { code: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco" },
  { code: "TUN", name: "Tunis-Carthage International Airport", city: "Tunis", country: "Tunisia" },
  { code: "ALG", name: "Houari Boumediene Airport", city: "Algiers", country: "Algeria" },
  { code: "HAR", name: "Robert Gabriel Mugabe International Airport", city: "Harare", country: "Zimbabwe" },
  { code: "LUN", name: "Kenneth Kaunda International Airport", city: "Lusaka", country: "Zambia" },
  { code: "MRU", name: "Sir Seewoosagur Ramgoolam International Airport", city: "Port Louis", country: "Mauritius" },
  { code: "RUN", name: "Roland Garros Airport", city: "Saint-Denis", country: "Réunion" },

  // Europe
  { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France" },
  { code: "ORY", name: "Paris Orly Airport", city: "Paris", country: "France" },
  { code: "LHR", name: "Heathrow Airport", city: "London", country: "United Kingdom" },
  { code: "LGW", name: "Gatwick Airport", city: "London", country: "United Kingdom" },
  { code: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands" },
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany" },
  { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany" },
  { code: "MAD", name: "Adolfo Suárez Madrid–Barajas Airport", city: "Madrid", country: "Spain" },
  { code: "BCN", name: "Barcelona–El Prat Airport", city: "Barcelona", country: "Spain" },
  { code: "FCO", name: "Leonardo da Vinci–Fiumicino Airport", city: "Rome", country: "Italy" },
  { code: "MXP", name: "Milan Malpensa Airport", city: "Milan", country: "Italy" },
  { code: "BRU", name: "Brussels Airport", city: "Brussels", country: "Belgium" },
  { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland" },
  { code: "VIE", name: "Vienna International Airport", city: "Vienna", country: "Austria" },
  { code: "LIS", name: "Humberto Delgado Airport", city: "Lisbon", country: "Portugal" },
  { code: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark" },
  { code: "ARN", name: "Stockholm Arlanda Airport", city: "Stockholm", country: "Sweden" },
  { code: "OSL", name: "Oslo Gardermoen Airport", city: "Oslo", country: "Norway" },
  { code: "HEL", name: "Helsinki Airport", city: "Helsinki", country: "Finland" },
  { code: "WAW", name: "Warsaw Chopin Airport", city: "Warsaw", country: "Poland" },
  { code: "PRG", name: "Václav Havel Airport Prague", city: "Prague", country: "Czech Republic" },
  { code: "BUD", name: "Budapest Ferenc Liszt International Airport", city: "Budapest", country: "Hungary" },
  { code: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece" },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" },
  { code: "SVO", name: "Sheremetyevo International Airport", city: "Moscow", country: "Russia" },
  { code: "LED", name: "Pulkovo Airport", city: "Saint Petersburg", country: "Russia" },
  { code: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland" },
  { code: "GVA", name: "Geneva Airport", city: "Geneva", country: "Switzerland" },

  // Middle East
  { code: "DXB", name: "Dubai International Airport", city: "Dubai", country: "UAE" },
  { code: "AUH", name: "Abu Dhabi International Airport", city: "Abu Dhabi", country: "UAE" },
  { code: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar" },
  { code: "RUH", name: "King Khalid International Airport", city: "Riyadh", country: "Saudi Arabia" },
  { code: "JED", name: "King Abdulaziz International Airport", city: "Jeddah", country: "Saudi Arabia" },
  { code: "KWI", name: "Kuwait International Airport", city: "Kuwait City", country: "Kuwait" },
  { code: "BAH", name: "Bahrain International Airport", city: "Manama", country: "Bahrain" },
  { code: "MCT", name: "Muscat International Airport", city: "Muscat", country: "Oman" },
  { code: "AMM", name: "Queen Alia International Airport", city: "Amman", country: "Jordan" },
  { code: "BEY", name: "Rafic Hariri International Airport", city: "Beirut", country: "Lebanon" },
  { code: "TLV", name: "Ben Gurion International Airport", city: "Tel Aviv", country: "Israel" },

  // Asia
  { code: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China" },
  { code: "PKX", name: "Beijing Daxing International Airport", city: "Beijing", country: "China" },
  { code: "PVG", name: "Shanghai Pudong International Airport", city: "Shanghai", country: "China" },
  { code: "CAN", name: "Guangzhou Baiyun International Airport", city: "Guangzhou", country: "China" },
  { code: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "Hong Kong" },
  { code: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan" },
  { code: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan" },
  { code: "KIX", name: "Kansai International Airport", city: "Osaka", country: "Japan" },
  { code: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea" },
  { code: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore" },
  { code: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia" },
  { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand" },
  { code: "CGK", name: "Soekarno–Hatta International Airport", city: "Jakarta", country: "Indonesia" },
  { code: "MNL", name: "Ninoy Aquino International Airport", city: "Manila", country: "Philippines" },
  { code: "SGN", name: "Tan Son Nhat International Airport", city: "Ho Chi Minh City", country: "Vietnam" },
  { code: "HAN", name: "Noi Bai International Airport", city: "Hanoi", country: "Vietnam" },
  { code: "DEL", name: "Indira Gandhi International Airport", city: "New Delhi", country: "India" },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", country: "India" },
  { code: "MAA", name: "Chennai International Airport", city: "Chennai", country: "India" },
  { code: "CCU", name: "Netaji Subhas Chandra Bose International Airport", city: "Kolkata", country: "India" },
  { code: "BLR", name: "Kempegowda International Airport", city: "Bangalore", country: "India" },
  { code: "CMB", name: "Bandaranaike International Airport", city: "Colombo", country: "Sri Lanka" },
  { code: "DAC", name: "Hazrat Shahjalal International Airport", city: "Dhaka", country: "Bangladesh" },
  { code: "KHI", name: "Jinnah International Airport", city: "Karachi", country: "Pakistan" },
  { code: "ISB", name: "Islamabad International Airport", city: "Islamabad", country: "Pakistan" },

  // North America
  { code: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "USA" },
  { code: "EWR", name: "Newark Liberty International Airport", city: "New York", country: "USA" },
  { code: "LGA", name: "LaGuardia Airport", city: "New York", country: "USA" },
  { code: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "USA" },
  { code: "ORD", name: "O'Hare International Airport", city: "Chicago", country: "USA" },
  { code: "ATL", name: "Hartsfield-Jackson Atlanta International Airport", city: "Atlanta", country: "USA" },
  { code: "DFW", name: "Dallas/Fort Worth International Airport", city: "Dallas", country: "USA" },
  { code: "DEN", name: "Denver International Airport", city: "Denver", country: "USA" },
  { code: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "USA" },
  { code: "MIA", name: "Miami International Airport", city: "Miami", country: "USA" },
  { code: "SEA", name: "Seattle-Tacoma International Airport", city: "Seattle", country: "USA" },
  { code: "BOS", name: "Boston Logan International Airport", city: "Boston", country: "USA" },
  { code: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada" },
  { code: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada" },
  { code: "YUL", name: "Montréal-Trudeau International Airport", city: "Montreal", country: "Canada" },
  { code: "MEX", name: "Mexico City International Airport", city: "Mexico City", country: "Mexico" },

  // South America
  { code: "GRU", name: "São Paulo/Guarulhos International Airport", city: "São Paulo", country: "Brazil" },
  { code: "GIG", name: "Rio de Janeiro/Galeão International Airport", city: "Rio de Janeiro", country: "Brazil" },
  { code: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina" },
  { code: "BOG", name: "El Dorado International Airport", city: "Bogotá", country: "Colombia" },
  { code: "LIM", name: "Jorge Chávez International Airport", city: "Lima", country: "Peru" },
  { code: "SCL", name: "Arturo Merino Benítez International Airport", city: "Santiago", country: "Chile" },

  // Oceania
  { code: "SYD", name: "Sydney Kingsford Smith Airport", city: "Sydney", country: "Australia" },
  { code: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia" },
  { code: "BNE", name: "Brisbane Airport", city: "Brisbane", country: "Australia" },
  { code: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand" },
];

const WORLD_CITIES = [
  // Burundi & East Africa first
  "Bujumbura, Burundi", "Gitega, Burundi", "Muyinga, Burundi", "Ngozi, Burundi",
  "Nairobi, Kenya", "Mombasa, Kenya", "Kisumu, Kenya",
  "Kigali, Rwanda", "Kampala, Uganda", "Dar es Salaam, Tanzania", "Arusha, Tanzania",
  "Addis Ababa, Ethiopia", "Djibouti City, Djibouti",
  // Rest of Africa
  "Cairo, Egypt", "Alexandria, Egypt", "Lagos, Nigeria", "Abuja, Nigeria", "Accra, Ghana",
  "Dakar, Senegal", "Abidjan, Côte d'Ivoire", "Casablanca, Morocco", "Tunis, Tunisia",
  "Algiers, Algeria", "Johannesburg, South Africa", "Cape Town, South Africa", "Durban, South Africa",
  "Harare, Zimbabwe", "Lusaka, Zambia", "Maputo, Mozambique", "Antananarivo, Madagascar",
  "Port Louis, Mauritius", "Kinshasa, DR Congo", "Douala, Cameroon", "Yaoundé, Cameroon",
  // Europe
  "Paris, France", "Lyon, France", "Marseille, France", "Nice, France",
  "London, United Kingdom", "Manchester, UK", "Edinburgh, UK", "Birmingham, UK",
  "Berlin, Germany", "Munich, Germany", "Hamburg, Germany", "Frankfurt, Germany",
  "Madrid, Spain", "Barcelona, Spain", "Seville, Spain", "Valencia, Spain",
  "Rome, Italy", "Milan, Italy", "Venice, Italy", "Florence, Italy", "Naples, Italy",
  "Amsterdam, Netherlands", "Brussels, Belgium", "Zurich, Switzerland", "Geneva, Switzerland",
  "Vienna, Austria", "Prague, Czech Republic", "Budapest, Hungary", "Warsaw, Poland",
  "Lisbon, Portugal", "Porto, Portugal", "Athens, Greece", "Istanbul, Turkey",
  "Stockholm, Sweden", "Oslo, Norway", "Copenhagen, Denmark", "Helsinki, Finland",
  "Moscow, Russia", "Saint Petersburg, Russia", "Dublin, Ireland",
  // Middle East
  "Dubai, UAE", "Abu Dhabi, UAE", "Doha, Qatar", "Riyadh, Saudi Arabia",
  "Jeddah, Saudi Arabia", "Kuwait City, Kuwait", "Muscat, Oman", "Manama, Bahrain",
  "Amman, Jordan", "Beirut, Lebanon", "Tel Aviv, Israel",
  // Asia
  "Beijing, China", "Shanghai, China", "Guangzhou, China", "Shenzhen, China", "Hong Kong",
  "Tokyo, Japan", "Osaka, Japan", "Kyoto, Japan",
  "Seoul, South Korea", "Busan, South Korea",
  "Singapore", "Kuala Lumpur, Malaysia", "Bangkok, Thailand", "Phuket, Thailand",
  "Jakarta, Indonesia", "Bali, Indonesia", "Manila, Philippines",
  "Ho Chi Minh City, Vietnam", "Hanoi, Vietnam", "Yangon, Myanmar",
  "New Delhi, India", "Mumbai, India", "Bangalore, India", "Chennai, India", "Kolkata, India",
  "Colombo, Sri Lanka", "Dhaka, Bangladesh", "Karachi, Pakistan", "Islamabad, Pakistan",
  // Americas
  "New York, USA", "Los Angeles, USA", "Chicago, USA", "Miami, USA", "Houston, USA",
  "San Francisco, USA", "Las Vegas, USA", "Boston, USA", "Atlanta, USA", "Seattle, USA",
  "Washington D.C., USA", "Orlando, USA",
  "Toronto, Canada", "Vancouver, Canada", "Montreal, Canada", "Calgary, Canada",
  "Mexico City, Mexico", "Cancún, Mexico",
  "São Paulo, Brazil", "Rio de Janeiro, Brazil", "Brasília, Brazil",
  "Buenos Aires, Argentina", "Bogotá, Colombia", "Lima, Peru", "Santiago, Chile",
  // Oceania
  "Sydney, Australia", "Melbourne, Australia", "Brisbane, Australia", "Perth, Australia",
  "Auckland, New Zealand", "Queenstown, New Zealand",
];

// Make searchable autocomplete
function makeAutocomplete(inputEl, list, displayFn) {
  let dropdown = document.createElement('ul');
  dropdown.className = 'autocomplete-dropdown';
  inputEl.parentNode.style.position = 'relative';
  inputEl.parentNode.appendChild(dropdown);

  inputEl.addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    dropdown.innerHTML = '';
    if (q.length < 2) { dropdown.style.display = 'none'; return; }

    const matches = list.filter(item => {
      const str = displayFn ? displayFn(item) : item;
      return str.toLowerCase().includes(q);
    }).slice(0, 8);

    if (!matches.length) { dropdown.style.display = 'none'; return; }

    matches.forEach(item => {
      const li = document.createElement('li');
      li.textContent = displayFn ? displayFn(item) : item;
      li.addEventListener('mousedown', function(e) {
        e.preventDefault();
        inputEl.value = li.textContent;
        dropdown.style.display = 'none';
      });
      dropdown.appendChild(li);
    });
    dropdown.style.display = 'block';
  });

  document.addEventListener('click', function(e) {
    if (!inputEl.contains(e.target)) dropdown.style.display = 'none';
  });
}

// ===== EXPANDED WORLD CITIES — All 195 Countries =====
// Appending additional cities to WORLD_CITIES
WORLD_CITIES.push(
  // Central & West Africa
  "Libreville, Gabon","Brazzaville, Republic of Congo","Kinshasa, DR Congo","Bangui, CAR",
  "N'Djamena, Chad","Niamey, Niger","Ouagadougou, Burkina Faso","Bamako, Mali",
  "Conakry, Guinea","Bissau, Guinea-Bissau","Monrovia, Liberia","Freetown, Sierra Leone",
  "Yamoussoukro, Côte d'Ivoire","Lomé, Togo","Cotonou, Benin","Porto-Novo, Benin",
  "Malabo, Equatorial Guinea","São Tomé, São Tomé and Príncipe",
  // East & Horn of Africa
  "Mogadishu, Somalia","Hargeisa, Somaliland","Asmara, Eritrea","Djibouti, Djibouti",
  "Juba, South Sudan","Khartoum, Sudan","Wau, South Sudan",
  // Southern Africa
  "Gaborone, Botswana","Windhoek, Namibia","Maseru, Lesotho","Mbabane, Eswatini",
  "Lilongwe, Malawi","Blantyre, Malawi","Lubumbashi, DR Congo",
  // Indian Ocean Islands
  "Victoria, Seychelles","Moroni, Comoros","Mamoudzou, Mayotte",
  // North Africa
  "Tripoli, Libya","Benghazi, Libya","Khartoum, Sudan","Nouakchott, Mauritania",
  // Europe — more cities
  "Valletta, Malta","Nicosia, Cyprus","Reykjavik, Iceland","Tirana, Albania",
  "Skopje, North Macedonia","Sarajevo, Bosnia","Belgrade, Serbia","Zagreb, Croatia",
  "Ljubljana, Slovenia","Bratislava, Slovakia","Vilnius, Lithuania","Riga, Latvia",
  "Tallinn, Estonia","Minsk, Belarus","Chisinau, Moldova","Tbilisi, Georgia",
  "Yerevan, Armenia","Baku, Azerbaijan","Podgorica, Montenegro",
  "Pristina, Kosovo","Andorra la Vella, Andorra","Monaco, Monaco","Vaduz, Liechtenstein",
  "San Marino, San Marino","Luxembourg, Luxembourg","Bern, Switzerland",
  // Central Asia
  "Nur-Sultan, Kazakhstan","Almaty, Kazakhstan","Tashkent, Uzbekistan",
  "Bishkek, Kyrgyzstan","Dushanbe, Tajikistan","Ashgabat, Turkmenistan",
  "Kabul, Afghanistan",
  // South Asia
  "Kathmandu, Nepal","Thimphu, Bhutan","Male, Maldives","Dhaka, Bangladesh",
  // Southeast Asia
  "Vientiane, Laos","Phnom Penh, Cambodia","Naypyidaw, Myanmar","Yangon, Myanmar",
  "Bandar Seri Begawan, Brunei","Dili, Timor-Leste",
  "Honiara, Solomon Islands","Port Vila, Vanuatu","Suva, Fiji",
  "Nuku'alofa, Tonga","Apia, Samoa","Funafuti, Tuvalu","Tarawa, Kiribati",
  "Majuro, Marshall Islands","Palikir, Micronesia","Melekeok, Palau",
  // East Asia
  "Ulaanbaatar, Mongolia","Pyongyang, North Korea","Taipei, Taiwan",
  "Macau, China","Chengdu, China","Xi'an, China","Chongqing, China",
  "Wuhan, China","Tianjin, China","Nanjing, China","Hangzhou, China",
  "Sapporo, Japan","Nagoya, Japan","Fukuoka, Japan","Hiroshima, Japan",
  "Incheon, South Korea","Daegu, South Korea",
  // Middle East — more
  "Sanaa, Yemen","Aden, Yemen","Baghdad, Iraq","Erbil, Iraq","Basra, Iraq",
  "Tehran, Iran","Mashhad, Iran","Isfahan, Iran","Damascus, Syria",
  "Aleppo, Syria","Gaza, Palestine","Ramallah, Palestine",
  // Americas — more
  "Havana, Cuba","Kingston, Jamaica","Port-au-Prince, Haiti",
  "Santo Domingo, Dominican Republic","San Juan, Puerto Rico",
  "Nassau, Bahamas","Bridgetown, Barbados","Port of Spain, Trinidad and Tobago",
  "Georgetown, Guyana","Paramaribo, Suriname","Cayenne, French Guiana",
  "Belize City, Belize","Guatemala City, Guatemala","San Salvador, El Salvador",
  "Tegucigalpa, Honduras","Managua, Nicaragua","San José, Costa Rica","Panama City, Panama",
  "Caracas, Venezuela","Quito, Ecuador","La Paz, Bolivia","Asunción, Paraguay",
  "Montevideo, Uruguay","Medellín, Colombia","Cali, Colombia","Cartagena, Colombia",
  "Guadalajara, Mexico","Monterrey, Mexico","Tijuana, Mexico",
  "Ottawa, Canada","Quebec City, Canada","Winnipeg, Canada","Edmonton, Canada",
  "Philadelphia, USA","Detroit, USA","Minneapolis, USA","Phoenix, USA",
  "Dallas, USA","San Diego, USA","Denver, USA","Portland, USA",
  // Pacific
  "Port Moresby, Papua New Guinea","Ngerulmud, Palau",
  "Nukualofa, Tonga","Pago Pago, American Samoa",
  "Noumea, New Caledonia","Papeete, French Polynesia",
  "Hobart, Australia","Adelaide, Australia","Darwin, Australia",
  "Wellington, New Zealand","Christchurch, New Zealand",
  // Caribbean
  "Fort-de-France, Martinique","Pointe-à-Pitre, Guadeloupe",
  "Castries, Saint Lucia","Kingstown, Saint Vincent","Roseau, Dominica",
  "St. George's, Grenada","Basseterre, Saint Kitts","St. John's, Antigua"
);

// ============================================================
// EXTENDED — All 195 countries' major cities
// ============================================================
const EXTRA_CITIES = [
  // Caribbean & Central America
  "Havana, Cuba","Kingston, Jamaica","Port-au-Prince, Haiti","Santo Domingo, Dominican Republic",
  "San José, Costa Rica","Panama City, Panama","Guatemala City, Guatemala","Tegucigalpa, Honduras",
  "Managua, Nicaragua","San Salvador, El Salvador","Belmopan, Belize",
  // South America extras
  "Quito, Ecuador","Guayaquil, Ecuador","Asunción, Paraguay","Montevideo, Uruguay",
  "La Paz, Bolivia","Sucre, Bolivia","Georgetown, Guyana","Paramaribo, Suriname","Cayenne, French Guiana",
  // Pacific Islands
  "Suva, Fiji","Nuku'alofa, Tonga","Apia, Samoa","Port Vila, Vanuatu","Honiara, Solomon Islands",
  "Port Moresby, Papua New Guinea","Tarawa, Kiribati","Funafuti, Tuvalu","Yaren, Nauru",
  "Palikir, Micronesia","Majuro, Marshall Islands","Ngerulmud, Palau","South Tarawa, Kiribati",
  // Indian Ocean
  "Victoria, Seychelles","Moroni, Comoros","Mamoudzou, Mayotte",
  // Central Asia
  "Astana, Kazakhstan","Tashkent, Uzbekistan","Bishkek, Kyrgyzstan","Dushanbe, Tajikistan",
  "Ashgabat, Turkmenistan","Kabul, Afghanistan",
  // South Asia extras
  "Kathmandu, Nepal","Thimphu, Bhutan","Male, Maldives",
  // Southeast Asia extras
  "Vientiane, Laos","Phnom Penh, Cambodia","Naypyidaw, Myanmar","Dili, Timor-Leste","Bandar Seri Begawan, Brunei",
  // East Asia extras
  "Ulaanbaatar, Mongolia","Taipei, Taiwan","Pyongyang, North Korea",
  // Middle East extras
  "Sanaa, Yemen","Baghdad, Iraq","Tehran, Iran","Kabul, Afghanistan",
  "Nicosia, Cyprus","Tbilisi, Georgia","Yerevan, Armenia","Baku, Azerbaijan",
  // Europe extras
  "Minsk, Belarus","Kyiv, Ukraine","Chisinau, Moldova","Tirana, Albania","Skopje, North Macedonia",
  "Sarajevo, Bosnia and Herzegovina","Podgorica, Montenegro","Pristina, Kosovo","Valletta, Malta",
  "Reykjavik, Iceland","Andorra la Vella, Andorra","Monaco","San Marino","Vaduz, Liechtenstein",
  "Ljubljana, Slovenia","Zagreb, Croatia","Bratislava, Slovakia","Riga, Latvia","Tallinn, Estonia","Vilnius, Lithuania",
  "Nicosia, Cyprus","Bern, Switzerland","Luxembourg City, Luxembourg",
  // Africa extras
  "Ouagadougou, Burkina Faso","Bamako, Mali","Niamey, Niger","N'Djamena, Chad",
  "Bangui, Central African Republic","Libreville, Gabon","Brazzaville, Republic of Congo",
  "Malabo, Equatorial Guinea","São Tomé, São Tomé and Príncipe","Praia, Cape Verde",
  "Bissau, Guinea-Bissau","Conakry, Guinea","Freetown, Sierra Leone","Monrovia, Liberia",
  "Yamoussoukro, Côte d'Ivoire","Porto-Novo, Benin","Lomé, Togo","Cotonou, Benin",
  "Banjul, Gambia","Nouakchott, Mauritania","Laayoune, Western Sahara",
  "Asmara, Eritrea","Mogadishu, Somalia","Juba, South Sudan","Khartoum, Sudan",
  "Lilongwe, Malawi","Gaborone, Botswana","Mbabane, Eswatini","Maseru, Lesotho",
  "Windhoek, Namibia","Luanda, Angola","Blantyre, Malawi",
  // North Africa extras
  "Tripoli, Libya","Benghazi, Libya","Marrakech, Morocco","Fez, Morocco",
  // North America extras
  "Ottawa, Canada","Winnipeg, Canada","Edmonton, Canada","Quebec City, Canada",
  "Nassau, Bahamas","Bridgetown, Barbados","Port of Spain, Trinidad and Tobago",
  "Castries, Saint Lucia","Kingstown, Saint Vincent","Roseau, Dominica",
  "Saint John's, Antigua","Basseterre, Saint Kitts","Basse-Terre, Guadeloupe",
  "Fort-de-France, Martinique","Willemstad, Curaçao",
  // Oceania extras
  "Canberra, Australia","Hobart, Australia","Darwin, Australia","Adelaide, Australia",
  "Wellington, New Zealand","Christchurch, New Zealand",
  "Nuku'alofa, Tonga","Avarua, Cook Islands","Papeete, French Polynesia",
  "Noumea, New Caledonia","Hagåtña, Guam","Saipan, Northern Mariana Islands",
];

// Merge into WORLD_CITIES
EXTRA_CITIES.forEach(c => { if (!WORLD_CITIES.includes(c)) WORLD_CITIES.push(c); });
