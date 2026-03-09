// ============================================
// SURE TRAVEL AGENCY — AI Assistant v4
// Fixed close button, typing indicator, chips
// ============================================

const AI_KB = {
  greetings:    ["hello","hi","hey","bonjour","salut","muraho","mwaramutse","good morning","good evening","bonsoir"],
  booking:      ["book","flight","ticket","réserver","billet","andika","indege","reserve","vol","fly"],
  price:        ["price","cost","how much","combien","ibiciro","cher","afford","tarif","fare","expensive"],
  hotel:        ["hotel","accommodation","stay","hébergement","oteri","lodging","room","chambre","sleep"],
  car:          ["car","vehicle","rental","location de voiture","imodoka","automobile","drive"],
  payment:      ["pay","payment","lumicash","bank","visa","mastercard","apple","kwishura","payer","paiement","card","debit","credit","transfer","money"],
  support:      ["support","help","contact","assistance","twunganire","aide","whatsapp","phone","email","call"],
  hours:        ["hours","available","24","when","ouvert","igihe","open","weekend","holiday","always"],
  visa:         ["visa","document","passport","travel document","papier","entry"],
  cancel:       ["cancel","refund","change","annuler","modification","rembours","modify"],
  time:         ["how long","ticket time","when receive","quand recevoir","receive ticket","how fast","vite","quickly","soon"],
  languages:    ["language","langue","kirundi","french","english","français","translate"],
  about:        ["about","who","founder","nadia","eric","started","founded","2025","company","agency"],
  destinations: ["destination","where","paris","dubai","london","nairobi","africa","europe","country","countries","city","cities","travel to"],
};

const AI_RESPONSES = {
  en: {
    greeting:     "👋 Hello! I'm Sure Travel AI — your 24/7 travel assistant.\n\nI can help with ✈️ flights, 🏨 hotels, 🚗 car rentals, 💳 payments, 📋 visas, and more!\n\nWhat do you need today?",
    booking:      "✈️ **How to Book:**\n1. Go to our Booking page\n2. Enter departure & destination airports\n3. Pick date, passengers & class\n4. Fill your name, email & phone\n5. Submit — we reply within 30 minutes!\n\nOr WhatsApp us directly:\n📱 **+257 79 639 803**",
    price:        "💰 **Prices vary by route and season.**\n\nWe search hundreds of airlines for the lowest fares. Submit the booking form and we'll send you the best price within 30 minutes.\n\n✅ **200+ satisfied clients** since 2025!",
    hotel:        "🏨 **Hotel Booking:** Yes!\n\nWhen booking, check *Add Hotel* and type your city. We'll find options matching your budget and dates in any city worldwide.",
    car:          "🚗 **Car Rental:** Yes!\n\nCheck *Add Car Rental* in the booking form. Your car will be ready at the airport when you land.",
    payment:      "💳 **Payment Methods:**\n• 📱 **Lumicash** — Send to +257 79 639 803\n• 🏦 **Bank Transfer** — Bancobu / BCB\n• 💳 **Visa / Mastercard** — Card form\n• 🍎 **Apple Pay** — Direct on iPhone/Mac\n\nAfter paying, send proof via WhatsApp. Ticket arrives in **1–2 hours**!",
    support:      "📞 **Contact Us:**\n• WhatsApp: **+257 79 639 803**\n• Phone: **+257 69 314 640**\n• Email: suretravelagency9@gmail.com\n• Office: Excellence House, Bureau 3.17, Bujumbura\n\n🕐 Available **24/7** every day!",
    hours:        "🕐 **We are open 24/7** — including weekends and public holidays.\n\nWe respond within **30 minutes**. Your ticket arrives within **1–2 hours** after payment confirmation!",
    visa:         "📋 **Visa Assistance:** Yes!\n\nWe guide you on requirements for your destination and help with documentation.\n\nContact us: 📱 **+257 79 639 803**",
    cancel:       "🔄 **To cancel or change a booking:**\n\nContact us immediately:\n• WhatsApp: **+257 79 639 803**\n• Email: suretravelagency9@gmail.com\n\nWe'll assist you as fast as possible.",
    time:         "⚡ **Speed:**\n• Response to your booking: **30 minutes**\n• Ticket after payment: **1–2 hours**\n\n200+ happy clients served since 2025!",
    languages:    "🌍 **3 Languages supported:**\n• 🇬🇧 English\n• 🇫🇷 French\n• 🇧🇮 Kirundi\n\nUse the language switcher in the navigation bar to switch.",
    about:        "🏢 **Sure Travel Agency** — founded **2025**\n\n👩‍💼 **Keza Nadia** — Co-Founder & CEO\n👨‍💼 **Mr. Eric** — Co-Founder & Director\n\n📍 Excellence House, Bureau 3.17, Bujumbura\n\n✅ **200+ clients** helped safely!",
    destinations: "🌍 **We book flights to all 195 countries!**\n\nPopular destinations:\n🇫🇷 Paris · 🇦🇪 Dubai · 🇬🇧 London\n🇹🇷 Istanbul · 🇰🇪 Nairobi · 🇺🇸 New York\n🇿🇦 Johannesburg · 🇷🇼 Kigali\n\nSearch any airport or city in the booking form.",
    default:      "🤔 Great question! Our team can help:\n• WhatsApp: **+257 79 639 803**\n• Email: suretravelagency9@gmail.com\n\nWe respond within 30 minutes, always!",
  },
  fr: {
    greeting:     "👋 Bonjour! Je suis l'IA Sure Travel — votre assistant voyage 24h/24.\n\nJe peux vous aider avec ✈️ vols, 🏨 hôtels, 🚗 location de voiture, 💳 paiements, 📋 visas et plus!\n\nDe quoi avez-vous besoin?",
    booking:      "✈️ **Comment réserver:**\n1. Allez sur la page Réservation\n2. Entrez aéroport de départ et destination\n3. Choisissez date, passagers et classe\n4. Remplissez nom, email et téléphone\n5. Envoyez — réponse en 30 minutes!\n\nOu WhatsApp direct:\n📱 **+257 79 639 803**",
    price:        "💰 **Les prix varient selon la route.**\n\nNous cherchons parmi des centaines de compagnies pour les tarifs les plus bas. Soumettez le formulaire et recevez le meilleur prix en 30 minutes.\n\n✅ **200+ clients satisfaits** depuis 2025!",
    hotel:        "🏨 **Réservation hôtel:** Oui!\n\nLors de la réservation, cochez *Ajouter un hôtel* et saisissez votre ville. Nous trouvons des options dans n'importe quelle ville du monde.",
    car:          "🚗 **Location de voiture:** Oui!\n\nCochez *Location de voiture* dans le formulaire. Votre voiture sera prête à l'aéroport à votre arrivée.",
    payment:      "💳 **Méthodes de paiement:**\n• 📱 **Lumicash** — Envoyez au +257 79 639 803\n• 🏦 **Virement bancaire** — Bancobu / BCB\n• 💳 **Visa / Mastercard** — Formulaire carte\n• 🍎 **Apple Pay** — Direct sur iPhone/Mac\n\nEnvoyez la preuve via WhatsApp. Billet en **1–2 heures**!",
    support:      "📞 **Contactez-nous:**\n• WhatsApp: **+257 79 639 803**\n• Téléphone: **+257 69 314 640**\n• Email: suretravelagency9@gmail.com\n• Bureau: Excellence House, Bureau 3.17, Bujumbura\n\n🕐 Disponibles **24h/24**!",
    hours:        "🕐 **Nous sommes ouverts 24h/24** — weekends et jours fériés inclus.\n\nRéponse en **30 minutes**. Billet en **1–2 heures** après confirmation du paiement!",
    visa:         "📋 **Aide au visa:** Oui!\n\nNous vous guidons sur les exigences de votre destination.\n\nContactez-nous: 📱 **+257 79 639 803**",
    cancel:       "🔄 **Pour annuler ou modifier:**\n\nContactez-nous immédiatement:\n• WhatsApp: **+257 79 639 803**\n• Email: suretravelagency9@gmail.com",
    time:         "⚡ **Rapidité:**\n• Réponse à votre demande: **30 minutes**\n• Billet après paiement: **1–2 heures**\n\n200+ clients satisfaits depuis 2025!",
    languages:    "🌍 **3 langues disponibles:**\n• 🇬🇧 Anglais\n• 🇫🇷 Français\n• 🇧🇮 Kirundi\n\nUtilisez le sélecteur de langue dans la barre de navigation.",
    about:        "🏢 **Sure Travel Agency** — fondée **2025**\n\n👩‍💼 **Keza Nadia** — Co-Fondatrice & PDG\n👨‍💼 **M. Eric** — Co-Fondateur & Directeur\n\n📍 Excellence House, Bureau 3.17, Bujumbura\n\n✅ **200+ clients** aidés!",
    destinations: "🌍 **Nous réservons vers les 195 pays du monde!**\n\nDestinations populaires:\n🇫🇷 Paris · 🇦🇪 Dubaï · 🇬🇧 Londres\n🇹🇷 Istanbul · 🇰🇪 Nairobi · 🇺🇸 New York\n\nRecherchez n'importe quel aéroport dans le formulaire.",
    default:      "🤔 Bonne question! Notre équipe peut vous aider:\n• WhatsApp: **+257 79 639 803**\n• Email: suretravelagency9@gmail.com\n\nRéponse en 30 minutes!",
  },
  ki: {
    greeting:     "👋 Muraho! Ndi AI ya Sure Travel — umufasha wawe w'urugendo 24/7.\n\nNshobora gufasha na ✈️ indege, 🏨 amahoteli, 🚗 imodoka, 💳 kwishura, 📋 viza no vyinshi!\n\nNi iki ukeneye?",
    booking:      "✈️ **Ingene wandika:**\n1. Jya ku rupapuro rwa Iyandikwa\n2. Shira indege zo gutukiraho na ntumbero\n3. Hitamwo itariki, abaganga na classe\n4. Uzuza izina, email na telefone\n5. Rungika — tushura mu minota 30!\n\nCanke udutumanahuje kuri WhatsApp:\n📱 **+257 79 639 803**",
    price:        "💰 **Ibiciro bigenda bisanzuka.**\n\nDurondera mu ndege zirenga ijana. Rungika ifishi tukurungikire igiciro ciza mu minota 30.\n\n✅ **Abantu barenga 200** bashimye kuva 2025!",
    hotel:        "🏨 **Iyandikwa ry'Oteri:** Ego!\n\nIgihe wandika, garagaza *Ongera Oteri* kandi uvuge umujyi wawe. Turondera amahitamo mu migi yose y'isi.",
    car:          "🚗 **Gufata Imodoka:** Ego!\n\nGaragaza *Gufata Imodoka* mu ifishi. Imodoka izoba iri hafi ku ndege ufikira.",
    payment:      "💳 **Uburyo bwo Kwishura:**\n• 📱 **Lumicash** — Rungika kuri +257 79 639 803\n• 🏦 **Kohereza kwa Banki** — Bancobu / BCB\n• 💳 **Visa / Mastercard** — Ifishi y'ikarita\n• 🍎 **Apple Pay** — Kuri iPhone/Mac\n\nRungika inyandiko kuri WhatsApp. Ubileti buza mu **masaha 1–2**!",
    support:      "📞 **Twunganire:**\n• WhatsApp: **+257 79 639 803**\n• Telefone: **+257 69 314 640**\n• Email: suretravelagency9@gmail.com\n• Aho dukorera: Excellence House, Bureau 3.17, Bujumbura\n\n🕐 Turi hafi **igihe cose 24/7**!",
    hours:        "🕐 **Turi hafi amasaha 24** — harimo n'impera z'indwi na diyeri.\n\nTushura mu **minota 30**. Ubileti buza mu **masaha 1–2** amafaranga amaze kwemezwa!",
    visa:         "📋 **Inkunga y'Iviza:** Ego!\n\nTurahugura ku bivugwa ku gihugu uzoja.\n\nTwunganire: 📱 **+257 79 639 803**",
    cancel:       "🔄 **Guhagarika canke guhindura:**\n\nTwunganire vuba:\n• WhatsApp: **+257 79 639 803**\n• Email: suretravelagency9@gmail.com",
    time:         "⚡ **Igihe:**\n• Gushura iyandikwa: **Minota 30**\n• Ubileti nyuma y'ugucira: **Masaha 1–2**\n\nAbantu barenga 200 bashimye kuva 2025!",
    languages:    "🌍 **Indimi 3 ziraboneka:**\n• 🇬🇧 Icongereza\n• 🇫🇷 Igifaransa\n• 🇧🇮 Ikirundi\n\nKoresha indorerwamo y'indimi mu gufatanya.",
    about:        "🏢 **Sure Travel Agency** — yashinzwe **2025**\n\n👩‍💼 **Keza Nadia** — Umushinzi & Umuyobozi\n👨‍💼 **Bwana Eric** — Umushinzi & Umuyobozi w'Ibikorwa\n\n📍 Excellence House, Bureau 3.17, Bujumbura\n\n✅ **Abantu barenga 200** twafashije!",
    destinations: "🌍 **Turandika indege mu bihugu 195 vyo mu isi!**\n\nIbicaro bikunze:\n🇫🇷 Paris · 🇦🇪 Dubai · 🇬🇧 Londre\n🇹🇷 Istanbul · 🇰🇪 Nairobi · 🇺🇸 New York\n\nRondera ikibuga cose mu ifishi y'iyandikwa.",
    default:      "🤔 Ikibazo ciza! Itsinda ryacu riri hafi:\n• WhatsApp: **+257 79 639 803**\n• Email: suretravelagency9@gmail.com\n\nTushura mu minota 30 igihe cose!",
  }
};

const QUICK_CHIPS = {
  en: ["✈️ Book a flight","💳 Payment methods","🏨 Hotel booking","🕐 Our hours","📞 Contact us"],
  fr: ["✈️ Réserver un vol","💳 Comment payer","🏨 Réservation hôtel","🕐 Nos horaires","📞 Nous contacter"],
  ki: ["✈️ Andika indege","💳 Kwishura gute","🏨 Iyandikwa ry'oteri","🕐 Amasaha yacu","📞 Twunganire"],
};

function getAIResponse(msg, lang) {
  const m = msg.toLowerCase();
  const r = AI_RESPONSES[lang] || AI_RESPONSES.en;
  if (AI_KB.greetings.some(k=>m.includes(k)))    return r.greeting;
  if (AI_KB.about.some(k=>m.includes(k)))        return r.about;
  if (AI_KB.languages.some(k=>m.includes(k)))    return r.languages;
  if (AI_KB.hours.some(k=>m.includes(k)))        return r.hours;
  if (AI_KB.time.some(k=>m.includes(k)))         return r.time;
  if (AI_KB.cancel.some(k=>m.includes(k)))       return r.cancel;
  if (AI_KB.visa.some(k=>m.includes(k)))         return r.visa;
  if (AI_KB.payment.some(k=>m.includes(k)))      return r.payment;
  if (AI_KB.hotel.some(k=>m.includes(k)))        return r.hotel;
  if (AI_KB.car.some(k=>m.includes(k)))          return r.car;
  if (AI_KB.price.some(k=>m.includes(k)))        return r.price;
  if (AI_KB.booking.some(k=>m.includes(k)))      return r.booking;
  if (AI_KB.support.some(k=>m.includes(k)))      return r.support;
  if (AI_KB.destinations.some(k=>m.includes(k))) return r.destinations;
  return r.default;
}

function getLang() {
  return (typeof currentLang !== 'undefined' && currentLang) ? currentLang : 'en';
}

function initAIChat() {
  const toggle   = document.getElementById('ai-chat-toggle');
  const widget   = document.getElementById('ai-chat-widget');
  const closeBtn = document.getElementById('ai-chat-close');
  const input    = document.getElementById('ai-chat-input');
  const sendBtn  = document.getElementById('ai-chat-send');
  const messages = document.getElementById('ai-chat-messages');
  const chipsEl  = document.getElementById('ai-quick-chips');

  if (!toggle || !widget) return;

  let isOpen = false;
  let greeted = false;

  // ---- TOGGLE OPEN/CLOSE ----
  function openChat() {
    isOpen = true;
    widget.style.display = 'flex';
    toggle.setAttribute('aria-expanded', 'true');
    if (!greeted) {
      greeted = true;
      setTimeout(() => {
        addMessage('bot', AI_RESPONSES[getLang()].greeting);
        renderChips();
      }, 250);
    }
    setTimeout(() => input && input.focus(), 300);
  }

  function closeChat() {
    isOpen = false;
    widget.style.display = 'none';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    isOpen ? closeChat() : openChat();
  });

  // Close button — make absolutely sure it works
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeChat();
    });
  }

  // Click outside to close
  document.addEventListener('click', function(e) {
    if (isOpen && !widget.contains(e.target) && !toggle.contains(e.target)) {
      closeChat();
    }
  });

  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) closeChat();
  });

  // ---- MESSAGES ----
  function addMessage(role, text) {
    const div = document.createElement('div');
    div.className = 'chat-msg chat-msg--' + role;
    div.innerHTML = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    removeTyping();
    const el = document.createElement('div');
    el.className = 'typing-indicator';
    el.id = 'typing-el';
    el.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const el = document.getElementById('typing-el');
    if (el) el.remove();
  }

  function renderChips() {
    if (!chipsEl) return;
    const chips = QUICK_CHIPS[getLang()] || QUICK_CHIPS.en;
    chipsEl.innerHTML = '';
    chips.forEach(chip => {
      const btn = document.createElement('button');
      btn.className = 'quick-chip';
      btn.textContent = chip;
      btn.addEventListener('click', () => handleSend(chip));
      chipsEl.appendChild(btn);
    });
  }

  function handleSend(text) {
    if (!text || !text.trim()) return;
    addMessage('user', text);
    if (input) input.value = '';
    showTyping();
    setTimeout(() => {
      removeTyping();
      addMessage('bot', getAIResponse(text, getLang()));
      renderChips();
    }, 750);
  }

  if (sendBtn) sendBtn.addEventListener('click', () => handleSend(input ? input.value : ''));
  if (input)   input.addEventListener('keypress', e => { if (e.key === 'Enter') handleSend(input.value); });

  // Update chips when language switches
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => { if (isOpen) setTimeout(renderChips, 80); });
  });
}

document.addEventListener('DOMContentLoaded', initAIChat);
