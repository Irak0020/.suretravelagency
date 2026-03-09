# ✅ Sure Travel Agency — EmailJS Setup Guide

Follow these steps so booking form submissions arrive in your Gmail inbox.

---

## Step 1: Create a free EmailJS account
1. Go to https://www.emailjs.com
2. Click **Sign Up Free**
3. Sign up using your Gmail: **suretravelagency9@gmail.com**

---

## Step 2: Add an Email Service
1. In your dashboard click **Email Services → Add New Service**
2. Choose **Gmail**
3. Click **Connect Account** and allow access to suretravelagency9@gmail.com
4. Name the service: `sure_travel_service`
5. Copy your **Service ID** (looks like: `service_xxxxxxx`)

---

## Step 3: Create an Email Template
1. Click **Email Templates → Create New Template**
2. Use this template content:

**Subject:**
```
New Booking Request: {{airport_from}} → {{airport_to}}
```

**Body:**
```
New Booking Request from Sure Travel Agency website

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Flight Details:
From: {{airport_from}}
To: {{airport_to}}
Departure: {{dep_date}}
Passengers: {{passengers}}
Class: {{flight_class}}
Hotel: {{hotel}}
Car Rental: {{car_rental}}

Please respond within 24 hours.
— Sure Travel Agency Website
```

3. Set **To Email** to: `suretravelagency9@gmail.com`
4. Save the template and copy your **Template ID** (looks like: `template_xxxxxxx`)

---

## Step 4: Get Your Public Key
1. Go to **Account → API Keys**
2. Copy your **Public Key**

---

## Step 5: Add IDs to the Website
Open the file: `pages/booking.html`

Find this line near the bottom:
```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
```
Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual Public Key.

Find:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params)
```
Replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID` with your actual IDs.

---

## That's it! 🎉
Now every time a client submits the booking form, you will receive an email at suretravelagency9@gmail.com with all their details.

**Free plan allows 200 emails/month.**
For unlimited emails, upgrade at emailjs.com.

---

## Contacts Reference
- Phone 1: +257 79 639 803
- Phone 2: +257 69 314 640
- Email: suretravelagency9@gmail.com
- Office: Excellence House, Bureau 3.17, Bujumbura
