// Tour de France 2025 timetable data (extracted from official timetable image)
const timetableData = [
    { stage: 1, date: '2025-07-05', startTime: '13:40', fiftyKm: '16:30', finishTime: '17:36', type: 'flat' },
    { stage: 2, date: '2025-07-06', startTime: '12:35', fiftyKm: '16:10', finishTime: '17:20', type: 'hilly' },
    { stage: 3, date: '2025-07-07', startTime: '13:25', fiftyKm: '16:11', finishTime: '17:18', type: 'flat' },
    { stage: 4, date: '2025-07-08', startTime: '13:35', fiftyKm: '16:15', finishTime: '17:22', type: 'hilly' },
    { stage: 5, date: '2025-07-09', startTime: '13:10', fiftyKm: 'Time Trial', finishTime: '17:42', type: 'time-trial' },
    { stage: 6, date: '2025-07-10', startTime: '12:45', fiftyKm: '16:17', finishTime: '17:14', type: 'hilly' },
    { stage: 7, date: '2025-07-11', startTime: '12:25', fiftyKm: '15:37', finishTime: '16:39', type: 'hilly' },
    { stage: 8, date: '2025-07-12', startTime: '13:25', fiftyKm: '16:00', finishTime: '17:04', type: 'flat' },
    { stage: 9, date: '2025-07-13', startTime: '13:25', fiftyKm: '16:03', finishTime: '17:07', type: 'flat' },
    { stage: 10, date: '2025-07-14', startTime: '13:25', fiftyKm: '16:12', finishTime: '17:25', type: 'mountain' },
    { stage: 11, date: '2025-07-16', startTime: '13:15', fiftyKm: '16:01', finishTime: '17:05', type: 'flat' },
    { stage: 12, date: '2025-07-17', startTime: '13:25', fiftyKm: '16:20', finishTime: '17:32', type: 'mountain' },
    { stage: 13, date: '2025-07-18', startTime: '13:10', fiftyKm: 'Time Trial', finishTime: '17:31', type: 'time-trial' },
    { stage: 14, date: '2025-07-19', startTime: '12:15', fiftyKm: '15:34', finishTime: '17:07', type: 'mountain' },
    { stage: 15, date: '2025-07-20', startTime: '13:30', fiftyKm: '16:08', finishTime: '17:08', type: 'hilly' },
    { stage: 16, date: '2025-07-22', startTime: '12:40', fiftyKm: '15:17', finishTime: '16:44', type: 'mountain' },
    { stage: 17, date: '2025-07-23', startTime: '13:50', fiftyKm: '16:07', finishTime: '17:10', type: 'flat' },
    { stage: 18, date: '2025-07-24', startTime: '12:20', fiftyKm: '15:36', finishTime: '17:12', type: 'mountain' },
    { stage: 19, date: '2025-07-25', startTime: '13:40', fiftyKm: '15:58', finishTime: '17:18', type: 'mountain' },
    { stage: 20, date: '2025-07-26', startTime: '12:15', fiftyKm: '15:10', finishTime: '16:12', type: 'hilly' },
    { stage: 21, date: '2025-07-27', startTime: '16:25', fiftyKm: '18:19', finishTime: '19:26', type: 'flat' }
];

// Comprehensive timezone data with GMT offsets
const timezoneData = {
    // UTC and nearby
    'UTC': { name: 'UTC', offset: '+0' },
    
    // Europe
    'Europe/London': { name: 'BST', offset: '+1' },
    'Europe/Paris': { name: 'CEST', offset: '+2' },
    'Europe/Berlin': { name: 'CEST', offset: '+2' },
    'Europe/Rome': { name: 'CEST', offset: '+2' },
    'Europe/Madrid': { name: 'CEST', offset: '+2' },
    'Europe/Amsterdam': { name: 'CEST', offset: '+2' },
    'Europe/Moscow': { name: 'MSK', offset: '+3' },
    
    // North America
    'America/Los_Angeles': { name: 'PDT', offset: '-7' },
    'America/Denver': { name: 'MDT', offset: '-6' },
    'America/Chicago': { name: 'CDT', offset: '-5' },
    'America/New_York': { name: 'EDT', offset: '-4' },
    'America/Halifax': { name: 'ADT', offset: '-3' },
    'America/St_Johns': { name: 'NDT', offset: '-2.5' },
    
    // South America
    'America/Sao_Paulo': { name: 'BRT', offset: '-3' },
    'America/Argentina/Buenos_Aires': { name: 'ART', offset: '-3' },
    'America/Santiago': { name: 'CLT', offset: '-3' },
    
    // Asia-Pacific
    'Asia/Seoul': { name: 'KST', offset: '+9' },
    'Asia/Tokyo': { name: 'JST', offset: '+9' },
    'Asia/Shanghai': { name: 'CST', offset: '+8' },
    'Asia/Hong_Kong': { name: 'HKT', offset: '+8' },
    'Asia/Singapore': { name: 'SGT', offset: '+8' },
    'Asia/Bangkok': { name: 'ICT', offset: '+7' },
    'Asia/Jakarta': { name: 'WIB', offset: '+7' },
    'Asia/Dhaka': { name: 'BST', offset: '+6' },
    'Asia/Kolkata': { name: 'IST', offset: '+5.5' },
    'Asia/Karachi': { name: 'PKT', offset: '+5' },
    'Asia/Dubai': { name: 'GST', offset: '+4' },
    'Asia/Tehran': { name: 'IRST', offset: '+3.5' },
    
    // Australia & Oceania
    'Australia/Sydney': { name: 'AEST', offset: '+10' },
    'Australia/Melbourne': { name: 'AEST', offset: '+10' },
    'Australia/Brisbane': { name: 'AEST', offset: '+10' },
    'Australia/Perth': { name: 'AWST', offset: '+8' },
    'Australia/Adelaide': { name: 'ACST', offset: '+9.5' },
    'Pacific/Auckland': { name: 'NZST', offset: '+12' },
    'Pacific/Fiji': { name: 'FJT', offset: '+12' },
    'Pacific/Honolulu': { name: 'HST', offset: '-10' },
    
    // Africa & Middle East
    'Africa/Cairo': { name: 'EET', offset: '+2' },
    'Africa/Johannesburg': { name: 'SAST', offset: '+2' },
    'Africa/Lagos': { name: 'WAT', offset: '+1' },
    'Africa/Casablanca': { name: 'WET', offset: '+0' },
    
    // Additional major cities
    'America/Mexico_City': { name: 'CST', offset: '-6' },
    'America/Toronto': { name: 'EDT', offset: '-4' },
    'America/Vancouver': { name: 'PDT', offset: '-7' },
    'Europe/Istanbul': { name: 'TRT', offset: '+3' },
    'Asia/Riyadh': { name: 'AST', offset: '+3' }
};

let currentTimezone = 'Europe/Paris';
let currentDateFormat = 'wmd';

// DOM elements
const timezoneSelect = document.getElementById('timezone-select');
const dateFormatSelect = document.getElementById('date-format-select');
const localTimeBtn = document.getElementById('local-time-btn');
const resetCestBtn = document.getElementById('reset-cest-btn');
const tableBody = document.getElementById('table-body');
const timezoneToggle = document.getElementById('timezone-toggle');
const timezoneControls = document.getElementById('timezone-controls');
const timezoneCurrent = document.getElementById('timezone-current');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadSavedSettings();
    renderTable();
    setupEventListeners();
    updateCurrentTimezoneDisplay();
});

function loadSavedSettings() {
    const savedTimezone = localStorage.getItem('tdf-timezone');
    if (savedTimezone && timezoneData[savedTimezone]) {
        currentTimezone = savedTimezone;
        timezoneSelect.value = savedTimezone;
    }

    const savedDateFormat = localStorage.getItem('tdf-dateformat');
    if (savedDateFormat) {
        currentDateFormat = savedDateFormat;
        dateFormatSelect.value = savedDateFormat;
    }
}

function saveSetting(key, value) {
    localStorage.setItem(key, value);
}

function updateCurrentTimezoneDisplay() {
    const data = timezoneData[currentTimezone];
    if (data) {
        timezoneCurrent.textContent = `${data.name} (UTC${data.offset})`;
    }
}

function setupEventListeners() {
    // Timezone toggle button
    timezoneToggle.addEventListener('click', function() {
        const isExpanded = timezoneControls.classList.contains('expanded');
        if (isExpanded) {
            timezoneControls.classList.remove('expanded');
            timezoneToggle.textContent = 'Change Timezone';
        } else {
            timezoneControls.classList.add('expanded');
            timezoneToggle.textContent = 'Hide Controls';
        }
    });

    // Timezone selection
    timezoneSelect.addEventListener('change', function() {
        currentTimezone = this.value;
        saveSetting('tdf-timezone', currentTimezone);
        updateCurrentTimezoneDisplay();
        renderTable();
    });

    // Date format selection
    dateFormatSelect.addEventListener('change', function() {
        currentDateFormat = this.value;
        saveSetting('tdf-dateformat', currentDateFormat);
        renderTable();
    });

    // Local time button
    localTimeBtn.addEventListener('click', function() {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        // Try to find a matching timezone in our list
        let matchedTimezone = null;
        
        // Direct match first
        if (timezoneData[userTimezone]) {
            matchedTimezone = userTimezone;
        } else {
            // Try to find a similar timezone based on offset
            const now = new Date();
            const userOffset = -now.getTimezoneOffset() / 60;
            
            // Look for exact offset match, prioritizing major cities
            const priorityTimezones = [
                'Asia/Seoul', 'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Hong_Kong',
                'Australia/Sydney', 'Europe/Paris', 'Europe/London', 'America/New_York',
                'America/Los_Angeles', 'America/Chicago', 'America/Denver'
            ];
            
            // First check priority timezones
            for (const tz of priorityTimezones) {
                const tzOffset = parseFloat(timezoneData[tz].offset);
                if (Math.abs(tzOffset - userOffset) < 0.1) { // Allow small floating point differences
                    matchedTimezone = tz;
                    break;
                }
            }
            
            // If no priority match, check all timezones
            if (!matchedTimezone) {
                for (const [tz, data] of Object.entries(timezoneData)) {
                    const tzOffset = parseFloat(data.offset);
                    if (Math.abs(tzOffset - userOffset) < 0.1) {
                        matchedTimezone = tz;
                        break;
                    }
                }
            }
        }
        
        if (matchedTimezone) {
            currentTimezone = matchedTimezone;
            timezoneSelect.value = matchedTimezone;
            saveSetting('tdf-timezone', currentTimezone);
            updateCurrentTimezoneDisplay();
            renderTable();
        } else {
            alert('Your local timezone is not available in the dropdown. Please select manually.');
        }
    });

    // Reset button
    resetCestBtn.addEventListener('click', function() {
        currentTimezone = 'Europe/Paris';
        timezoneSelect.value = 'Europe/Paris';
        saveSetting('tdf-timezone', currentTimezone);
        updateCurrentTimezoneDisplay();
        renderTable();
    });
}

function convertTime(timeString, fromTimezone, toTimezone, baseDate) {
    if (!timeString || timeString === 'Time Trial') return { time: timeString, date: null };
    
    // If converting to the same timezone, no conversion needed
    if (fromTimezone === toTimezone) {
        return { time: timeString, date: null };
    }
    
    // Create a date object for the time conversion
    const dateTimeString = `${baseDate}T${timeString}:00`;
    
    try {
        // Create date in the source timezone
        const sourceDate = new Date(dateTimeString);
        
        // Get the offset difference
        const sourceOffset = getTimezoneOffset(fromTimezone);
        const targetOffset = getTimezoneOffset(toTimezone);
        const offsetDiff = targetOffset - sourceOffset;
        
        // Apply the offset difference
        const convertedDate = new Date(sourceDate.getTime() + (offsetDiff * 60 * 60 * 1000));
        
        // Check if date changed from the original base date
        const originalDate = new Date(baseDate);
        const dateChanged = (
            originalDate.getDate() !== convertedDate.getDate() ||
            originalDate.getMonth() !== convertedDate.getMonth() ||
            originalDate.getFullYear() !== convertedDate.getFullYear()
        );
        
        // Format as HH:MM
        const timeFormatted = convertedDate.toTimeString().slice(0, 5);
        
        return {
            time: timeFormatted,
            date: dateChanged ? formatDate(convertedDate.toLocaleDateString('en-CA')) : null
        };
    } catch (error) {
        console.error('Time conversion error:', error);
        return { time: timeString, date: null };
    }
}

function getTimezoneOffset(timezone) {
    const data = timezoneData[timezone];
    return data ? parseFloat(data.offset) : 0;
}

function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00'); // Ensure correct date parsing
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    switch (currentDateFormat) {
        case 'wmd':
            return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        case 'wd':
            return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });
        case 'md':
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        case 'iso':
            return `${year}-${month}-${day}`;
        case 'dmy':
            return `${day}/${month}/${year}`;
        case 'mdy':
            return `${month}/${day}/${year}`;
        default:
            return date.toLocaleDateString('en-US');
    }
}

function renderTable() {
    tableBody.innerHTML = '';
    const now = new Date();

    // Get today's date in the event's local timezone (CEST) directly
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Europe/Paris'
    };
    // Using 'en-CA' locale to ensure YYYY-MM-DD format
    const todayInCest = new Intl.DateTimeFormat('en-CA', options).format(now);

    timetableData.forEach(stage => {
        const row = document.createElement('tr');

        // Highlight today's row based on CEST local date
        if (stage.date === todayInCest) {
            row.classList.add('today-row');
        }

        // Row click listener for selection
        row.addEventListener('click', () => {
            const currentSelected = document.querySelector('.selected-row');
            if (currentSelected) {
                currentSelected.classList.remove('selected-row');
            }
            if (currentSelected !== row) {
                row.classList.add('selected-row');
            }
        });
        
        // Stage cell with color coding
        const stageCell = document.createElement('td');
        const stageDiv = document.createElement('div');
        stageDiv.className = `stage-cell stage-${stage.type}`;
        let typeChar = '';
        switch(stage.type) {
            case 'flat': typeChar = 'F'; break;
            case 'time-trial': typeChar = 'T'; break;
            case 'mountain': typeChar = 'M'; break;
            case 'hilly': typeChar = 'H'; break;
        }
        stageDiv.innerHTML = `${stage.stage}<span class="stage-type-indicator">${typeChar}</span>`;
        stageCell.appendChild(stageDiv);
        
        // Date cell
        const dateCell = document.createElement('td');
        dateCell.className = 'date-cell';
        dateCell.textContent = formatDate(stage.date);
        
        // Convert times to selected timezone
        const startTimeResult = convertTime(stage.startTime, 'Europe/Paris', currentTimezone, stage.date);
        const fiftyKmResult = convertTime(stage.fiftyKm, 'Europe/Paris', currentTimezone, stage.date);
        const finishTimeResult = convertTime(stage.finishTime, 'Europe/Paris', currentTimezone, stage.date);
        
        // Time cells with date indicators if changed
        const startCell = document.createElement('td');
        startCell.className = 'time-cell';
        if (startTimeResult.date) {
            startCell.innerHTML = `${startTimeResult.time} <span class="date-indicator">${startTimeResult.date}</span>`;
        } else {
            startCell.textContent = startTimeResult.time;
        }
        
        const fiftyKmCell = document.createElement('td');
        fiftyKmCell.className = 'time-cell';
        if (fiftyKmResult.time === 'Time Trial') {
            fiftyKmCell.innerHTML = '<span class="time-trial-indicator">Time Trial</span>';
        } else if (fiftyKmResult.date) {
            fiftyKmCell.innerHTML = `${fiftyKmResult.time} <span class="date-indicator">${fiftyKmResult.date}</span>`;
        } else {
            fiftyKmCell.textContent = fiftyKmResult.time;
        }
        
        const finishCell = document.createElement('td');
        finishCell.className = 'time-cell';
        if (finishTimeResult.date) {
            finishCell.innerHTML = `${finishTimeResult.time} <span class="date-indicator">${finishTimeResult.date}</span>`;
        } else {
            finishCell.textContent = finishTimeResult.time;
        }
        
        // Append all cells to row
        row.appendChild(stageCell);
        row.appendChild(dateCell);
        row.appendChild(startCell);
        row.appendChild(fiftyKmCell);
        row.appendChild(finishCell);
        
        tableBody.appendChild(row);
    });
}
