# Tour de France 2025 - Interactive Timetable

An interactive web application displaying the Tour de France 2025 timetable with timezone conversion functionality.
Courtesy of @Cyclingyazz https://www.reddit.com/r/tourdefrance/comments/1lq3byu/tour_de_france_timetable/

## Features

- **Complete Timetable**: All 21 stages from July 5th to 27th, 2025
- **Stage Type Color Coding**: 
  - 🟢 Green: Flat stages
  - 🔵 Blue: Time trial stages  
  - 🟠 Orange: Mountain stages
  - 🟣 Pink: Hilly stages
- **Timezone Conversion**: Convert times from CEST to various timezones
- **Local Time Detection**: Automatically detect and use your local timezone
- **Persistent Settings**: Your timezone preference is saved between visits
- **Responsive Design**: Works on desktop and mobile devices

## Comprehensive Timezone Support

The application supports **40+ timezones** organized by region, covering all major UTC offsets including half-hour zones:

### **Europe**
- **London** (BST - UTC+1)
- **Paris** (CEST - UTC+2) - *Default*
- **Berlin, Rome, Madrid, Amsterdam** (CEST - UTC+2)
- **Moscow** (MSK - UTC+3)
- **Istanbul** (TRT - UTC+3)

### **North America**
- **Los Angeles** (PDT - UTC-7)
- **Denver** (MDT - UTC-6)
- **Chicago** (CDT - UTC-5)
- **New York, Toronto** (EDT - UTC-4)
- **Vancouver** (PDT - UTC-7)
- **Mexico City** (CST - UTC-6)
- **Halifax** (ADT - UTC-3)
- **St. John's** (NDT - UTC-2.5) *Half-hour offset*

### **South America**
- **São Paulo** (BRT - UTC-3)
- **Buenos Aires** (ART - UTC-3)
- **Santiago** (CLT - UTC-3)

### **Asia**
- **Seoul** (KST - UTC+9)
- **Tokyo** (JST - UTC+9)
- **Shanghai** (CST - UTC+8)
- **Hong Kong** (HKT - UTC+8)
- **Singapore** (SGT - UTC+8)
- **Bangkok** (ICT - UTC+7)
- **Jakarta** (WIB - UTC+7)
- **Dhaka** (BST - UTC+6)
- **Mumbai** (IST - UTC+5.5) *Half-hour offset*
- **Karachi** (PKT - UTC+5)
- **Dubai** (GST - UTC+4)
- **Tehran** (IRST - UTC+3.5) *Half-hour offset*
- **Riyadh** (AST - UTC+3)

### **Australia & Oceania**
- **Sydney, Melbourne, Brisbane** (AEST - UTC+10)
- **Adelaide** (ACST - UTC+9.5) *Half-hour offset*
- **Perth** (AWST - UTC+8)
- **Auckland** (NZST - UTC+12)
- **Fiji** (FJT - UTC+12)
- **Honolulu** (HST - UTC-10)

### **Africa & Middle East**
- **Cairo** (EET - UTC+2)
- **Johannesburg** (SAST - UTC+2)
- **Lagos** (WAT - UTC+1)
- **Casablanca** (WET - UTC+0)

### **UTC**
- **Coordinated Universal Time** (UTC+0)

## How to Use

1. **View Default Times**: The timetable loads with times in CEST (Paris local time)
2. **Change Timezone**: Use the dropdown to select your preferred timezone
3. **Use Local Time**: Click "Use My Local Time" to automatically detect your timezone
4. **Reset**: Click "Reset to CEST" to return to the original Paris times

## Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks required)
- Uses browser's `localStorage` to remember timezone preferences
- Responsive design with mobile-friendly layout
- Color-coded stage types matching the original Tour de France design

## GitHub Pages Deployment

This project is ready for GitHub Pages deployment. Simply:

1. Push the files to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the main branch as the source
4. Your timetable will be available at `https://yourusername.github.io/repository-name`

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and responsive design
- `script.js` - JavaScript functionality for timezone conversion
- `README.md` - This documentation

## Data Source

The timetable data is based on the official Tour de France 2025 schedule. Times are estimates and actual stage completion times may vary.

---

**Note**: The times provided are based on the fastest estimates from the TDF timetable. Riders may go slower and it also would not be surprising if some stages are completed even faster.
