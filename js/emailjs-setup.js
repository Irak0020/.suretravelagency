// ============================================
// SURE TRAVEL AGENCY — EmailJS Configuration
// ============================================
// SETUP INSTRUCTIONS (one-time, 5 minutes):
// 1. Go to https://www.emailjs.com and create a FREE account
// 2. Click "Add New Service" → choose Gmail → connect suretravelagency9@gmail.com
// 3. Note your SERVICE ID (looks like: service_xxxxxxx)
// 4. Click "Email Templates" → "Create New Template"
//    Paste this template body:
//    ---
//    New message from: {{from_name}}
//    Email: {{from_email}}
//    Phone: {{phone}}
//    Subject: {{subject}}
//    Message: {{message}}
//    ---
// 5. Note your TEMPLATE ID (looks like: template_xxxxxxx)
// 6. Go to "Account" → note your PUBLIC KEY
// 7. Replace the three values below with your real IDs

const EMAILJS_CONFIG = {
  publicKey:   "YOUR_PUBLIC_KEY",       // e.g. "aBcDeFgHiJkLmNoP"
  serviceId:   "YOUR_SERVICE_ID",       // e.g. "service_abc123"
  templateId:  "YOUR_TEMPLATE_ID",      // e.g. "template_xyz789"
};

// Agency contact info
const AGENCY = {
  phone1: "+257 79 639 803",
  phone2: "+257 69 314 640",
  email: "suretravelagency9@gmail.com",
  address: "Excellence House, Bureau 3.17",
  whatsapp: "25779639803",
  // Payment numbers
  lumicash: "79 639 803",
  airtel: "69 314 640",
  bank: "Contact us for bank details",
};

// Initialize EmailJS
(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
})();

// ---- Universal form handler with EmailJS ----
function setupEmailForms() {
  document.querySelectorAll("form[data-emailjs]").forEach((form) => {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const btn = form.querySelector("button[type=submit]");
      const originalText = btn ? btn.textContent : "";

      if (btn) {
        btn.textContent = "Sending...";
        btn.disabled = true;
      }

      // Build params from all inputs
      const params = { to_email: AGENCY.email };
      form.querySelectorAll("input, textarea, select").forEach((el) => {
        if (el.name) params[el.name] = el.value;
      });
      // Fallbacks
      params.from_name = params.name || params.full_name || "Website Visitor";
      params.from_email = params.email || "Not provided";
      params.phone = params.phone || "Not provided";
      params.subject = params.subject || form.getAttribute("data-subject") || "New Message";
      params.message = params.message || JSON.stringify(params, null, 2);

      try {
        if (EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY") {
          throw new Error("EmailJS not configured yet");
        }
        await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, params);
        showFormSuccess(btn, form, originalText, "✓ Sent! We'll reply within 30 minutes.");
      } catch (err) {
        console.warn("EmailJS:", err.message);
        // Fallback: open mailto
        const mailBody = encodeURIComponent(
          `Name: ${params.from_name}\nEmail: ${params.from_email}\nPhone: ${params.phone}\n\n${params.message}`
        );
        window.location.href = `mailto:${AGENCY.email}?subject=${encodeURIComponent(params.subject)}&body=${mailBody}`;
        showFormSuccess(btn, form, originalText, "✓ Opening your email app...");
      }
    });
  });
}

function showFormSuccess(btn, form, originalText, msg) {
  if (btn) {
    btn.textContent = msg;
    btn.style.background = "#10b981";
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
      btn.disabled = false;
      form.reset();
    }, 5000);
  }
}

document.addEventListener("DOMContentLoaded", setupEmailForms);
