# Google Ads Campaign Setup Guide

## ✅ Booking System Implemented

### New Pages Created

1. **Booking Page**: `https://bvpke.com/book-site-visit`
   - Full contact form with fields for:
     - Name, Email, Phone
     - Preferred Location (Thika, Nakuru, Mombasa, Malindi, Naivasha, Nanyuki, Kasarani)
     - Preferred Date
     - Additional message/requirements
   - When user clicks "Send", it opens Gmail with pre-filled booking request
   - Shows contact info (phone numbers & email) as backup
   - Form validation included

2. **Confirmation Page**: `https://bvpke.com/booking-confirmation`
   - Shows after booking submission
   - Explains the 4-step process:
     1. Confirmation call within 24 hours
     2. Site visit preparation
     3. Guided tour
     4. Documentation & purchase
   - Displays contact information
   - Has "Back to Home" and "View Properties" buttons

## 📱 For Google Ads Setup

### Campaign Goal: "Customers schedule an appointment"

**Confirmation Page URL to use:**
```
https://bvpke.com/booking-confirmation
```

### How It Works:
1. User clicks "Book Site Visit" button anywhere on the website
2. Gets redirected to `/book-site-visit` page
3. Fills out the booking form
4. Clicks "Send Booking Request"
5. Gmail/email opens with pre-filled content
6. User is automatically redirected to `/booking-confirmation` page
7. Google Ads tracks this as a conversion

## 🎯 All "Book Site Visit" Buttons Updated

The following buttons now link to the booking page:
- ✅ Navbar "Book Site Visit" button (desktop & mobile)
- ✅ Hero section "Book a Site Visit" button
- ✅ Property cards "Book Visit" buttons
- ✅ Mobile navigation "Book Site Visit" button

## 📞 Contact Information Available

Both booking and confirmation pages show:
- Phone: +254 721 660 966
- Phone: +254 704 308 435
- Email: info@bvpke.com
- Office: Nairobi, Kenya

## 🔗 SEO Updates

- Sitemap updated with new pages
- Both pages are mobile-responsive
- Fast loading times
- Clear call-to-actions

## 🚀 What to Paste in Google Ads

When Google Ads asks for the confirmation page URL, paste:
```
https://bvpke.com/booking-confirmation
```

This is the page customers see after they schedule an appointment/booking.

## ✨ Features

- **No backend required**: Uses Gmail/email client directly
- **Pre-filled email**: All form data is automatically formatted
- **Fallback contact**: Phone numbers and email always visible
- **Mobile-friendly**: Works perfectly on all devices
- **Professional design**: Matches your brand colors (green & gold)

## 📝 Testing

To test the booking flow:
1. Visit https://bvpke.com
2. Click any "Book Site Visit" button
3. Fill out the form on `/book-site-visit`
4. Click "Send Booking Request"
5. Your email client will open with the pre-filled message
6. You'll be redirected to the confirmation page

The confirmation page is what Google Ads will track as a successful conversion!