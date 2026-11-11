
const DEFAULT_PROGRAMME = [
  { num: 1, name: 'Chest', sub: 'BLS Strength + Shoulder Health', exercises: {
    gym: [
      { name: 'Barbell Bench Press',        sets: 3, reps: '4–6',     rest: 180, category: 'BLS'   },
      { name: 'Incline Barbell Press',       sets: 3, reps: '4–6',     rest: 180, category: 'BLS'   },
      { name: 'Weighted Dips',               sets: 3, reps: '6–8',     rest: 120, category: 'BLS'   },
      { name: 'Cable Fly',                   sets: 2, reps: '8–10',    rest: 60,  category: 'BLS'   },
      { name: 'Band External Rotation',      sets: 2, reps: '15/side', rest: 45,  category: 'SPORT' },
      { name: 'Reverse Wrist Curl',          sets: 2, reps: '15',      rest: 45,  category: 'SPORT' },
      { name: 'Pronation / Supination',      sets: 2, reps: '12/side', rest: 30,  category: 'SPORT' },
    ],
    hotel: [
      { name: 'DB Bench Press',              sets: 4, reps: '6–10',   rest: 120, category: 'BLS'   },
      { name: 'DB Incline Press',            sets: 3, reps: '8–10',   rest: 90,  category: 'BLS'   },
      { name: 'DB Fly (floor or bench)',     sets: 3, reps: '10–12',  rest: 60,  category: 'BLS'   },
      { name: 'DB Overhead Tricep Extension',sets: 3, reps: '10–12',  rest: 60,  category: 'BLS'   },
      { name: 'Close-grip Push-ups',         sets: 2, reps: 'max',    rest: 60,  category: 'BLS'   },
      { name: 'DB External Rotation',        sets: 2, reps: '15',     rest: 45,  category: 'SPORT' },
      { name: 'Reverse Wrist Curl (light)',  sets: 2, reps: '15',     rest: 45,  category: 'SPORT' },
    ],
    bodyweight: [
      { name: 'Wide Push-ups',               sets: 4, reps: 'max',    rest: 90,  category: 'BLS'   },
      { name: 'Decline Push-ups',            sets: 3, reps: '12–15',  rest: 75,  category: 'BLS'   },
      { name: 'Diamond Push-ups',            sets: 3, reps: '8–12',   rest: 60,  category: 'BLS'   },
      { name: 'Archer Push-ups',             sets: 3, reps: '6–8/side',rest: 75, category: 'BLS'   },
      { name: 'Chair Dips',                  sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'Wall External Rotation',      sets: 2, reps: '20s/side',rest: 45, category: 'SPORT' },
      { name: 'Wrist Extension (on floor)',  sets: 2, reps: '15',     rest: 30,  category: 'SPORT' },
    ],
    bands: [
      { name: 'TRX Push-ups',                sets: 4, reps: '8–12',   rest: 90,  category: 'BLS'   },
      { name: 'TRX Chest Press',             sets: 3, reps: '10–12',  rest: 90,  category: 'BLS'   },
      { name: 'Band Chest Fly',              sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'TRX Tricep Extension',        sets: 3, reps: '10–12',  rest: 60,  category: 'BLS'   },
      { name: 'Band Tricep Pushdown',        sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'Band External Rotation',      sets: 2, reps: '15/side',rest: 45,  category: 'SPORT' },
      { name: 'Band Reverse Wrist Curl',     sets: 2, reps: '15',     rest: 30,  category: 'SPORT' },
    ],
  }},
  { num: 2, name: 'Back', sub: 'BLS Strength + Anti-Rotation Core', exercises: {
    gym: [
      { name: 'Deadlift',                    sets: 3, reps: '4–6',    rest: 240, category: 'BLS'   },
      { name: 'Barbell Row',                 sets: 3, reps: '4–6',    rest: 180, category: 'BLS'   },
      { name: 'Weighted Pull-ups',           sets: 3, reps: '4–6',    rest: 150, category: 'BLS'   },
      { name: 'Cable Row',                   sets: 3, reps: '8–10',   rest: 90,  category: 'BLS'   },
      { name: 'Pallof Press',                sets: 3, reps: '10/side',rest: 60,  category: 'SPORT' },
      { name: 'Ab Wheel Rollout',            sets: 3, reps: '8–10',   rest: 60,  category: 'SPORT' },
      { name: 'Dead Bug',                    sets: 2, reps: '8/side', rest: 45,  category: 'SPORT' },
    ],
    hotel: [
      { name: 'DB Romanian Deadlift',        sets: 3, reps: '8–10',   rest: 120, category: 'BLS'   },
      { name: 'Single-arm DB Row',           sets: 4, reps: '8–10/arm',rest: 90, category: 'BLS'   },
      { name: 'DB Pullover',                 sets: 3, reps: '10–12',  rest: 75,  category: 'BLS'   },
      { name: 'DB Rear Delt Fly',            sets: 3, reps: '15',     rest: 60,  category: 'BLS'   },
      { name: 'DB Bicep Curl',               sets: 3, reps: '10–12',  rest: 75,  category: 'BLS'   },
      { name: 'Dead Bug',                    sets: 3, reps: '8/side', rest: 45,  category: 'SPORT' },
      { name: 'Ab Wheel Rollout',            sets: 3, reps: '8–10',   rest: 60,  category: 'SPORT' },
    ],
    bodyweight: [
      { name: 'Pull-ups / Chin-ups',         sets: 4, reps: 'max',    rest: 150, category: 'BLS'   },
      { name: 'Inverted Rows',               sets: 3, reps: '10–12',  rest: 90,  category: 'BLS'   },
      { name: 'Superman Hold',               sets: 3, reps: '30s',    rest: 60,  category: 'BLS'   },
      { name: 'Good Mornings (BW)',          sets: 3, reps: '15',     rest: 60,  category: 'BLS'   },
      { name: 'YTA Raises (prone)',          sets: 2, reps: '12',     rest: 45,  category: 'BLS'   },
      { name: 'Dead Bug',                    sets: 3, reps: '8/side', rest: 45,  category: 'SPORT' },
      { name: 'Anti-Rotation Plank Hold',    sets: 3, reps: '30s/side',rest: 60, category: 'SPORT' },
    ],
    bands: [
      { name: 'TRX Row',                     sets: 4, reps: '8–12',   rest: 120, category: 'BLS'   },
      { name: 'TRX Single-arm Row',          sets: 3, reps: '8–10/arm',rest: 90, category: 'BLS'   },
      { name: 'Band Pull-apart',             sets: 3, reps: '15–20',  rest: 60,  category: 'BLS'   },
      { name: 'Band Straight-arm Pulldown',  sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'Band Bicep Curl',             sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'TRX Pallof Press',            sets: 3, reps: '10/side',rest: 60,  category: 'SPORT' },
      { name: 'Dead Bug',                    sets: 3, reps: '8/side', rest: 45,  category: 'SPORT' },
    ],
  }},
  { num: 3, name: 'Shoulders', sub: 'BLS Strength + Rotational Power', exercises: {
    gym: [
      { name: 'Seated Barbell OHP',          sets: 3, reps: '4–6',    rest: 180, category: 'BLS'   },
      { name: 'DB Lateral Raise',            sets: 3, reps: '8–10',   rest: 90,  category: 'BLS'   },
      { name: 'Bent-over Lateral Raise',     sets: 3, reps: '8–10',   rest: 90,  category: 'BLS'   },
      { name: 'DB Shrugs',                   sets: 3, reps: '8–10',   rest: 75,  category: 'BLS'   },
      { name: 'Cable Woodchop',              sets: 3, reps: '10/side',rest: 60,  category: 'SPORT' },
      { name: 'Landmine Rotation',           sets: 3, reps: '8/side', rest: 60,  category: 'SPORT' },
      { name: 'Single-Leg RDL',             sets: 2, reps: '8/side', rest: 45,  category: 'SPORT' },
    ],
    hotel: [
      { name: 'DB Shoulder Press',           sets: 4, reps: '8–10',   rest: 120, category: 'BLS'   },
      { name: 'DB Lateral Raise',            sets: 4, reps: '12–15',  rest: 90,  category: 'BLS'   },
      { name: 'DB Bent-over Lateral',        sets: 3, reps: '12–15',  rest: 90,  category: 'BLS'   },
      { name: 'DB Shrugs',                   sets: 3, reps: '12–15',  rest: 75,  category: 'BLS'   },
      { name: 'DB Woodchop (light)',         sets: 3, reps: '10/side',rest: 60,  category: 'SPORT' },
      { name: 'DB Single-Leg RDL',          sets: 2, reps: '8/side', rest: 45,  category: 'SPORT' },
    ],
    bodyweight: [
      { name: 'Pike Push-ups',               sets: 4, reps: '8–12',   rest: 90,  category: 'BLS'   },
      { name: 'Wall Handstand Push-up',      sets: 3, reps: '5–8',    rest: 120, category: 'BLS'   },
      { name: 'YTW Raises (prone floor)',    sets: 3, reps: '12',     rest: 60,  category: 'BLS'   },
      { name: 'Lateral Raise (bottles)',     sets: 4, reps: '15–20',  rest: 60,  category: 'BLS'   },
      { name: 'Backpack Shrugs',             sets: 3, reps: '15',     rest: 60,  category: 'BLS'   },
      { name: 'Bodyweight Rotation',         sets: 3, reps: '10/side',rest: 60,  category: 'SPORT' },
      { name: 'Single-Leg RDL (BW)',        sets: 2, reps: '8/side', rest: 45,  category: 'SPORT' },
    ],
    bands: [
      { name: 'Band Shoulder Press',         sets: 4, reps: '10–12',  rest: 90,  category: 'BLS'   },
      { name: 'Band Lateral Raise',          sets: 4, reps: '15',     rest: 75,  category: 'BLS'   },
      { name: 'Band Face Pull',              sets: 3, reps: '15',     rest: 60,  category: 'BLS'   },
      { name: 'Band Upright Row',            sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'Band Shrugs',                 sets: 3, reps: '15',     rest: 60,  category: 'BLS'   },
      { name: 'TRX Woodchop',               sets: 3, reps: '10/side',rest: 60,  category: 'SPORT' },
      { name: 'Band Single-Leg RDL',        sets: 2, reps: '8/side', rest: 45,  category: 'SPORT' },
    ],
  }},
  { num: 4, name: 'Arms', sub: 'BLS Strength + Core & Hip Stability', exercises: {
    gym: [
      { name: 'EZ-Bar Curl',                 sets: 3, reps: '4–6',    rest: 150, category: 'BLS'   },
      { name: 'Incline DB Curl',             sets: 3, reps: '8–10',   rest: 90,  category: 'BLS'   },
      { name: 'Hammer Curl',                 sets: 2, reps: '8–10',   rest: 75,  category: 'BLS'   },
      { name: 'Close-Grip Bench Press',      sets: 3, reps: '4–6',    rest: 150, category: 'BLS'   },
      { name: 'Skull Crushers',              sets: 3, reps: '8–10',   rest: 90,  category: 'BLS'   },
      { name: 'Cable Pushdown',              sets: 2, reps: '8–10',   rest: 60,  category: 'BLS'   },
      { name: 'Copenhagen Plank',            sets: 3, reps: '25s/side',rest: 60, category: 'SPORT' },
      { name: 'Hanging Leg Raise',           sets: 3, reps: '12',     rest: 60,  category: 'SPORT' },
      { name: 'Banded Side Steps',           sets: 2, reps: '15/side',rest: 45,  category: 'SPORT' },
    ],
    hotel: [
      { name: 'DB Curl',                     sets: 3, reps: '8–10',   rest: 90,  category: 'BLS'   },
      { name: 'DB Hammer Curl',              sets: 3, reps: '10–12',  rest: 75,  category: 'BLS'   },
      { name: 'DB Incline Curl',             sets: 2, reps: '10–12',  rest: 75,  category: 'BLS'   },
      { name: 'DB Overhead Tricep Extension',sets: 3, reps: '10–12',  rest: 90,  category: 'BLS'   },
      { name: 'DB Tricep Kickback',          sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'Copenhagen Plank',            sets: 3, reps: '25s/side',rest: 60, category: 'SPORT' },
      { name: 'Hanging Leg Raise',           sets: 3, reps: '12',     rest: 60,  category: 'SPORT' },
    ],
    bodyweight: [
      { name: 'Chin-ups (supinated)',        sets: 4, reps: 'max',    rest: 120, category: 'BLS'   },
      { name: 'Hammer-grip Pull-ups',        sets: 3, reps: 'max',    rest: 90,  category: 'BLS'   },
      { name: 'Close-grip Push-ups',         sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'Tricep Dips (chair)',         sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'Diamond Push-ups',            sets: 2, reps: 'max',    rest: 60,  category: 'BLS'   },
      { name: 'Copenhagen Plank',            sets: 3, reps: '25s/side',rest: 60, category: 'SPORT' },
      { name: 'Hanging Leg Raise (floor)',   sets: 3, reps: '12',     rest: 60,  category: 'SPORT' },
    ],
    bands: [
      { name: 'Band Bicep Curl',             sets: 4, reps: '12–15',  rest: 75,  category: 'BLS'   },
      { name: 'Band Hammer Curl',            sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'TRX Bicep Curl',             sets: 3, reps: '10–12',  rest: 75,  category: 'BLS'   },
      { name: 'TRX Tricep Extension',        sets: 3, reps: '10–12',  rest: 75,  category: 'BLS'   },
      { name: 'Band Tricep Pushdown',        sets: 3, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'Band Overhead Tricep Ext',   sets: 2, reps: '12–15',  rest: 60,  category: 'BLS'   },
      { name: 'Copenhagen Plank',            sets: 3, reps: '25s/side',rest: 60, category: 'SPORT' },
      { name: 'Hanging Leg Raise (floor)',   sets: 3, reps: '12',     rest: 60,  category: 'SPORT' },
    ],
  }},
  { num: 5, name: 'Legs', sub: 'BLS Strength + Running Maintenance', exercises: {
    gym: [
      { name: 'Back Squat',                  sets: 3, reps: '4–6',    rest: 240, category: 'BLS'   },
      { name: 'Front Squat / Leg Press',     sets: 3, reps: '4–6',    rest: 180, category: 'BLS'   },
      { name: 'Romanian Deadlift',           sets: 3, reps: '8–10',   rest: 150, category: 'BLS'   },
      { name: 'Leg Curl',                    sets: 3, reps: '8–10',   rest: 90,  category: 'BLS'   },
      { name: 'Standing Calf Raise',         sets: 4, reps: '8–10',   rest: 75,  category: 'BLS'   },
      { name: 'Single-Leg Calf Raise',       sets: 3, reps: '12/leg', rest: 60,  category: 'SPORT' },
      { name: 'Glute Med Abduction',         sets: 2, reps: '20/side',rest: 45,  category: 'SPORT' },
      { name: 'Hip Flexor March',            sets: 2, reps: '12/side',rest: 45,  category: 'SPORT' },
    ],
    hotel: [
      { name: 'DB Goblet Squat',             sets: 4, reps: '10–12',  rest: 90,  category: 'BLS'   },
      { name: 'DB Romanian Deadlift',        sets: 3, reps: '10–12',  rest: 90,  category: 'BLS'   },
      { name: 'DB Reverse Lunge',            sets: 3, reps: '10/side',rest: 75,  category: 'BLS'   },
      { name: 'DB Leg Curl (lying)',         sets: 3, reps: '12',     rest: 75,  category: 'BLS'   },
      { name: 'Single-leg Calf Raise',       sets: 4, reps: '15',     rest: 60,  category: 'BLS'   },
      { name: 'Single-Leg Calf Raise (slow)',sets: 3, reps: '12/leg', rest: 60,  category: 'SPORT' },
      { name: 'Glute Med Abduction',         sets: 2, reps: '20/side',rest: 45,  category: 'SPORT' },
      { name: 'Hip Flexor March',            sets: 2, reps: '12/side',rest: 45,  category: 'SPORT' },
    ],
    bodyweight: [
      { name: 'Bulgarian Split Squat',       sets: 4, reps: '10/side',rest: 90,  category: 'BLS'   },
      { name: 'Jump Squats',                 sets: 3, reps: '15',     rest: 75,  category: 'BLS'   },
      { name: 'Walking Lunges',              sets: 3, reps: '12/side',rest: 75,  category: 'BLS'   },
      { name: 'Single-leg Hip Thrust',       sets: 3, reps: '12/side',rest: 60,  category: 'BLS'   },
      { name: 'Nordic Curl',                 sets: 3, reps: '5–8',    rest: 90,  category: 'BLS'   },
      { name: 'Single-Leg Calf Raise (slow)',sets: 4, reps: '15/leg', rest: 60,  category: 'SPORT' },
      { name: 'Clamshell (BW)',              sets: 2, reps: '20/side',rest: 45,  category: 'SPORT' },
      { name: 'Standing Hip Flexor March',   sets: 2, reps: '12/side',rest: 45,  category: 'SPORT' },
    ],
    bands: [
      { name: 'TRX Bulgarian Split Squat',   sets: 4, reps: '10/side',rest: 90,  category: 'BLS'   },
      { name: 'Band Romanian Deadlift',      sets: 3, reps: '10–12',  rest: 90,  category: 'BLS'   },
      { name: 'TRX Single-leg Squat',       sets: 3, reps: '8–10/side',rest: 90, category: 'BLS'   },
      { name: 'Band Hip Thrust',             sets: 3, reps: '12–15',  rest: 75,  category: 'BLS'   },
      { name: 'Band Leg Curl (prone)',       sets: 3, reps: '12',     rest: 75,  category: 'BLS'   },
      { name: 'Band Clamshell',             sets: 3, reps: '20/side',rest: 45,  category: 'SPORT' },
      { name: 'Band Side Steps',             sets: 2, reps: '15/side',rest: 45,  category: 'SPORT' },
      { name: 'Single-Leg Calf Raise (slow)',sets: 3, reps: '15/leg', rest: 60,  category: 'SPORT' },
    ],
  }},
];


// ══════════════════════════════════════════════════════════════════════
//  GLUE — slim infra for the standalone gym app
// ══════════════════════════════════════════════════════════════════════
const BUILD_ID = 'gym-app 2026-11-11.calendar1 · GymMH';
let state = {
  today: new Date().toISOString().split('T')[0],
  settings: {},
  selectedWorkoutDay: null,
  selectedEquipment: 'gym',
  syncing: false,
};

function clone(o) { return JSON.parse(JSON.stringify(o)); }

function loadProgramme() {
  try {
    const p = JSON.parse(localStorage.getItem('gym_programme') || 'null');
    if (Array.isArray(p) && p.length && p.every(d => d && typeof d.num === 'number' && d.exercises)) return p;
  } catch (e) {}
  return clone(DEFAULT_PROGRAMME);
}
let WORKOUT_DAYS = loadProgramme();

function isCustomProgramme() { return !!localStorage.getItem('gym_programme'); }
function updateWorkoutSub() {
  const el = document.getElementById('workoutSub');
  if (el) el.textContent = isCustomProgramme()
    ? WORKOUT_DAYS.length + '-day custom programme'
    : WORKOUT_DAYS.length + '-day BLS programme';
}

function refreshToday() {
  const t = new Date().toISOString().split('T')[0];
  if (state.today !== t) { state.today = t; renderDate(); }
}
function renderDate() {
  const d = new Date();
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('topDate').textContent = d.getDate() + ' ' + months[d.getMonth()];
}

function loadSettings() {
  const s = tryParse(localStorage.getItem('hai_settings') || '{}', {});
  state.settings = { scriptUrl: s.scriptUrl || '' };
  const el = document.getElementById('settScriptUrl');
  if (el) el.value = state.settings.scriptUrl;
  const bar = document.getElementById('settBarKg');
  if (bar) bar.value = localStorage.getItem('hai_bar_kg') || '20';
  setSyncStatus(state.settings.scriptUrl ? 'synced' : '',
                state.settings.scriptUrl ? 'Sheet sync configured' : 'Not connected to Google Sheets');
}
function saveSettings() {
  state.settings.scriptUrl = (document.getElementById('settScriptUrl').value || '').trim();
  localStorage.setItem('hai_settings', JSON.stringify(state.settings));
  const bar = parseFloat(document.getElementById('settBarKg').value);
  if (bar > 0) localStorage.setItem('hai_bar_kg', String(bar));
  setSyncStatus(state.settings.scriptUrl ? 'synced' : '',
                state.settings.scriptUrl ? 'Sheet sync configured' : 'Not connected to Google Sheets');
  showToast('✓ Settings saved');
}

// Sync here only flushes the offline write queue (workouts are upserted on save).
async function syncNow() {
  if (!state.settings.scriptUrl) { setSyncStatus('', 'Add Script URL in Settings to enable sync'); return; }
  if (state.syncing) return;
  state.syncing = true;
  setSyncStatus('syncing', 'Syncing…');
  try {
    await flushPostQueue();
    localStorage.setItem('hai_last_sync', Date.now().toString());
    setSyncStatus('synced', 'Queue flushed ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  } catch (e) {
    setSyncStatus('error', 'Sync failed — check Script URL');
  } finally {
    state.syncing = false;
  }
}

function openSettings()  {
  GymCalendar.open();
  document.getElementById('settingsOverlay').classList.add('open');
  const sbu = document.getElementById('sbUrl');
  if (sbu && !sbu.value) sbu.value = GymSharedBackup.url();
  const sbt = document.getElementById('sbTok');
  if (sbt) sbt.value = GymSharedBackup.token();
  sbRefreshLine();
}
function closeSettings() { document.getElementById('settingsOverlay').classList.remove('open'); }
function closeSettingsIfBg(e) { if (e.target === document.getElementById('settingsOverlay')) closeSettings(); }

// ─── BACKUP ───
const GYM_BACKUP_KEYS = ['hai_workout_history', 'hai_prs', 'gym_programme', 'gym_physio', 'hai_settings', 'hai_bar_kg', 'hai_post_queue', 'hai_last_sync', 'gym.calendar.queue'];
function exportBackup() {
  const data = {};
  GYM_BACKUP_KEYS.forEach(k => {
    const v = localStorage.getItem(k);
    if (v === null) return;
    if (k === 'hai_settings') {
      // never export the Apps Script URL — it is a write credential for the Sheet
      const s = tryParse(v, {});
      delete s.scriptUrl;
      data[k] = s;
      return;
    }
    data[k] = tryParse(v, v);
  });
  const payload = { app: 'gym-app', version: 1, exported_at: new Date().toISOString(), data };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'gym-backup-' + new Date().toISOString().split('T')[0] + '.json';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  showToast('✓ Backup exported');
}
const GYM_IMPORT_VALIDATORS = {
  'gym.calendar.queue': v => Array.isArray(v),
  hai_workout_history: v => Array.isArray(v),
  hai_prs:             v => Array.isArray(v),
  gym_programme:       v => Array.isArray(v) && v.length > 0 && v.every(d => d && typeof d.num === 'number' && d.exercises && typeof d.exercises === 'object'),
  gym_physio:          v => Array.isArray(v) && v.every(p => p && typeof p.name === 'string'),
  hai_settings:        v => v !== null && typeof v === 'object' && !Array.isArray(v),
  hai_bar_kg:          v => !isNaN(parseFloat(v)) && parseFloat(v) > 0,
  hai_post_queue:      v => Array.isArray(v),
  hai_last_sync:       v => !isNaN(parseFloat(v)),
};
function importBackup(input) {
  const f = input.files && input.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    // Validate everything before any destructive replace.
    let data;
    try {
      const obj = JSON.parse(r.result);
      data = (obj && obj.data && typeof obj.data === 'object') ? obj.data : obj;
    } catch (e) { showToast('Import failed — invalid JSON'); return; }
    if (!data || typeof data !== 'object') { showToast('Import failed — invalid JSON'); return; }
    const candidates = GYM_BACKUP_KEYS.filter(k => data[k] !== undefined);
    const valid = candidates.filter(k => { try { return GYM_IMPORT_VALIDATORS[k](tryParse(JSON.stringify(data[k]), data[k])); } catch (e) { return false; } });
    const skipped = candidates.filter(k => valid.indexOf(k) === -1);
    if (!valid.length) { showToast('No valid workout data in that file'); return; }
    const names = { hai_workout_history: 'workout history', hai_prs: 'PRs', gym_programme: 'programme', gym_physio: 'physio exercises', hai_settings: 'settings', hai_bar_kg: 'bar weight', hai_post_queue: 'pending sync queue', hai_last_sync: 'last sync time' };
    let msg = 'Import ' + valid.map(k => names[k]).join(', ') + '? This overwrites the matching data in this app.';
    if (skipped.length) msg += ' Skipped (invalid): ' + skipped.map(k => names[k]).join(', ') + '.';
    if (!confirm(msg)) return;
    valid.forEach(k => {
      let v = data[k];
      if (k === 'hai_settings' && v && typeof v === 'object') {
        // never import an Apps Script URL — re-enter it in Settings if wanted
        v = Object.assign({}, v); delete v.scriptUrl;
        const cur = tryParse(localStorage.getItem('hai_settings') || '{}', {});
        v = Object.assign({}, cur, v);
      }
      localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
    });
    WORKOUT_DAYS = loadProgramme();
    EXERCISE_INDEX = null;
    progDraft = null;
    loadSettings();
    renderWorkoutDays();
    renderProgressExerciseList();
    updateWorkoutSub();
    showToast('✓ Backup imported' + (skipped.length ? ' (' + skipped.length + ' section' + (skipped.length > 1 ? 's' : '') + ' skipped)' : ''));
  };
  r.readAsText(f);
  input.value = '';
}

// ─── SHARED BACKUP (Notion, through the Pocket CRM service) ───
// The same client My Day, Racket Rankings and Pocket CRM embed: data goes to the
// "App backups" database in Notion; only this app knows its format. Restore adds
// what is missing on this device and never deletes or overwrites anything.
const GymSharedBackup = (() => {
  const DEFAULT_URL = 'https://contact-capture.matthias-homan.workers.dev';
  const K = { url: 'sb.url', tok: 'sb.token', auto: 'sb.autoAt', last: 'sb.lastOk' };
  const get = (k, d = '') => { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } };
  const set = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* storage off */ } };
  const b64 = (buf) => { let s = ''; const u = new Uint8Array(buf); for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); };
  const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const pipe = async (bytes, stream) => new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer());
  const api = {
    url: () => (get(K.url) || DEFAULT_URL).replace(/\/+$/, ''),
    token: () => get(K.tok),
    configured: () => !!get(K.tok),
    setup(url, token) { set(K.url, (url || '').trim()); set(K.tok, (token || '').trim()); },
    lastOk: () => Number(get(K.last, '0')) || 0,
    device() { const m = /Android[^;)]*;\s*([^;)]+?)(?:\sBuild|\))/.exec(navigator.userAgent); return m && m[1] && m[1] !== 'K' ? m[1] : /Android/.test(navigator.userAgent) ? 'Android phone' : 'Browser'; },
    async pack(obj) {
      const bytes = new TextEncoder().encode(JSON.stringify(obj));
      if (typeof CompressionStream === 'function') return 'gz:' + b64(await pipe(bytes, new CompressionStream('gzip')));
      return 'raw:' + b64(bytes);
    },
    async unpack(str) {
      const raw = unb64(str.slice(str.indexOf(':') + 1));
      const bytes = str.startsWith('gz:') ? await pipe(raw, new DecompressionStream('gzip')) : raw;
      return JSON.parse(new TextDecoder().decode(bytes));
    },
    async call(path, init = {}) {
      let res;
      try { res = await fetch(api.url() + path, Object.assign({}, init, { headers: Object.assign({ Authorization: 'Bearer ' + api.token() }, init.body ? { 'Content-Type': 'application/json' } : {}), signal: AbortSignal.timeout(45000) })); }
      catch (e) { throw new Error('Could not reach the Pocket CRM service. Check the signal and the address.'); }
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(res.status === 401 ? 'The access token is wrong. Use the same token as Pocket CRM.' : (data.error || 'The service said no (' + res.status + ').'));
      return data;
    },
    async save(app, obj) {
      const data = await api.pack(obj);
      const res = await api.call('/backup/save', { method: 'POST', body: JSON.stringify({ app, data, device: api.device() }) });
      set(K.last, String(Date.now()));
      return res.backup;
    },
    async load(app) { const r = await api.call('/backup/load?app=' + app); return Object.assign({}, r, { object: await api.unpack(r.data) }); },
    /** Once a day when the app is opened (and it has something to save). Silent: never throws. */
    async auto(app, makeObject) {
      if (!api.configured() || !navigator.onLine) return false;
      if (Date.now() - (Number(get(K.auto, '0')) || 0) < 20 * 3600 * 1000) return false;
      try { const o = makeObject(); if (!o) return false; set(K.auto, String(Date.now())); await api.save(app, o); return true; } catch (e) { set(K.auto, '0'); return false; }
    },
    ago(iso) { const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000); if (!(m >= 0)) return ''; if (m < 2) return 'just now'; if (m < 90) return m + ' minutes ago'; if (m < 36 * 60) return Math.round(m / 60) + ' hours ago'; return Math.round(m / 1440) + ' days ago'; },
  };
  return api;
})();

/** The same data the JSON export carries (Apps Script URL always excluded). */
function gymBackupPayload() {
  const data = {};
  GYM_BACKUP_KEYS.forEach(k => {
    const v = localStorage.getItem(k);
    if (v === null) return;
    if (k === 'hai_settings') { const s = tryParse(v, {}); delete s.scriptUrl; data[k] = s; return; }
    data[k] = tryParse(v, v);
  });
  return { v: 1, app: 'gym', saved: new Date().toISOString(), data };
}

/** Adds what is missing from a backup's data; nothing here is deleted or overwritten. Returns a summary. */
function gymMergeBackup(data) {
  const parts = [];
  if (Array.isArray(data['gym.calendar.queue'])) {
    const local = tryParse(localStorage.getItem('gym.calendar.queue') || '[]', []), ids = new Set(local.map(w => w.sourceId));
    const add = data['gym.calendar.queue'].filter(w => w && w.source === 'gym' && w.sourceId && w.start && w.end && !ids.has(w.sourceId));
    if (add.length) { localStorage.setItem('gym.calendar.queue', JSON.stringify(local.concat(add))); parts.push(add.length + ' pending calendar workouts'); }
  }
  if (Array.isArray(data.hai_workout_history)) {
    const local = tryParse(localStorage.getItem('hai_workout_history') || '[]', []);
    const have = new Set(local.map(w => w && w.id));
    const add = data.hai_workout_history.filter(w => w && w.id && !have.has(w.id));
    if (add.length) {
      const merged = local.concat(add).sort((a, b) => String(a.date || '').localeCompare(String(b.date || '')) || String(a.id).localeCompare(String(b.id)));
      localStorage.setItem('hai_workout_history', JSON.stringify(merged));
      rebuildPRsFromHistory();
      parts.push(add.length + ' session' + (add.length > 1 ? 's' : ''));
    }
  }
  if (Array.isArray(data.gym_programme) && !localStorage.getItem('gym_programme')) {
    try { if (GYM_IMPORT_VALIDATORS.gym_programme(tryParse(JSON.stringify(data.gym_programme), data.gym_programme))) { localStorage.setItem('gym_programme', JSON.stringify(data.gym_programme)); parts.push('programme'); } } catch (e) {}
  }
  if (Array.isArray(data.gym_physio)) {
    const local = getPhysio();
    let changed = false, added = 0;
    data.gym_physio.forEach(p => {
      if (!p || typeof p.name !== 'string') return;
      const hit = local.find(q => q.name === p.name);
      if (hit) {
        const logs = Array.from(new Set((hit.log || []).concat(Array.isArray(p.log) ? p.log : []))).sort();
        if (logs.length !== (hit.log || []).length) { hit.log = logs; changed = true; }
      } else {
        local.push({ name: p.name, dose: p.dose || '', frequency: p.frequency || '', instructions: p.instructions || '', log: Array.isArray(p.log) ? p.log.slice() : [] });
        changed = true; added++;
      }
    });
    if (changed) savePhysio(local);
    if (added) parts.push(added + ' physio exercise' + (added > 1 ? 's' : ''));
  }
  if (data.hai_settings && typeof data.hai_settings === 'object' && !Array.isArray(data.hai_settings)) {
    const cur = tryParse(localStorage.getItem('hai_settings') || '{}', {});
    let addedKeys = 0;
    Object.keys(data.hai_settings).forEach(k => {
      if (k === 'scriptUrl') return; // write credential: re-enter in Settings
      if (cur[k] === undefined) { cur[k] = data.hai_settings[k]; addedKeys++; }
    });
    if (addedKeys) { localStorage.setItem('hai_settings', JSON.stringify(cur)); parts.push('settings'); }
  }
  if (data.hai_bar_kg !== undefined && !localStorage.getItem('hai_bar_kg')) {
    const b = parseFloat(data.hai_bar_kg);
    if (b > 0) { localStorage.setItem('hai_bar_kg', String(b)); parts.push('bar weight'); }
  }
  if (data.hai_last_sync !== undefined && !localStorage.getItem('hai_last_sync')) {
    const t = parseFloat(data.hai_last_sync);
    if (!isNaN(t)) localStorage.setItem('hai_last_sync', String(t));
  }
  if (Array.isArray(data.hai_post_queue) && data.hai_post_queue.length) {
    const local = tryParse(localStorage.getItem('hai_post_queue') || '[]', []);
    const have = new Set(local.map(x => JSON.stringify(x)));
    const add = data.hai_post_queue.filter(x => !have.has(JSON.stringify(x)));
    if (add.length) { localStorage.setItem('hai_post_queue', JSON.stringify(local.concat(add).slice(-200))); parts.push(add.length + ' queued sync item' + (add.length > 1 ? 's' : '')); }
  }
  WORKOUT_DAYS = loadProgramme();
  EXERCISE_INDEX = null;
  progDraft = null;
  loadSettings();
  renderWorkoutDays();
  renderProgressExerciseList();
  updateWorkoutSub();
  renderPhysio();
  return parts.length ? 'added ' + parts.join(', ') + ' - what was here stayed' : 'everything in the backup was already here';
}

function sbStatus(msg, ok) {
  const el = document.getElementById('sbMsg');
  if (!el) return;
  el.textContent = msg || '';
  el.classList.remove('ok', 'err');
  if (msg) el.classList.add(ok ? 'ok' : 'err');
}
function sbRefreshLine() {
  const el = document.getElementById('sbLast');
  if (!el) return;
  const t = GymSharedBackup.lastOk();
  el.textContent = GymSharedBackup.configured()
    ? (t ? 'Last backup ' + GymSharedBackup.ago(new Date(t).toISOString()) + '.'
         : 'Token saved - no backup made from this device yet.')
    : 'Not connected yet. The token is the same one Pocket CRM uses.';
}
function sbSaveSettings() {
  GymSharedBackup.setup(document.getElementById('sbUrl').value, document.getElementById('sbTok').value);
  sbRefreshLine();
  sbStatus(GymSharedBackup.configured() ? 'Saved. The app now backs itself up once a day.' : 'Enter the Pocket CRM access token first.', GymSharedBackup.configured());
}
async function sbBackupNow() {
  if (!GymSharedBackup.configured()) { sbStatus('Enter the Pocket CRM access token first.', false); return; }
  sbStatus('Backing up...', true);
  try { const r = await GymSharedBackup.save('gym', gymBackupPayload()); sbStatus('Backed up (' + r.size_kb + ' KB).', true); sbRefreshLine(); }
  catch (e) { sbStatus(e.message, false); }
}
async function sbRestore() {
  if (!GymSharedBackup.configured()) { sbStatus('Enter the Pocket CRM access token first.', false); return; }
  sbStatus('Loading...', true);
  let r;
  try { r = await GymSharedBackup.load('gym'); } catch (e) { sbStatus(e.message, false); return; }
  const d = r.object;
  if (!d || !d.data || typeof d.data !== 'object') { sbStatus('That backup does not contain Gym data.', false); return; }
  if (!confirm('Add the latest Gym backup from Notion to this device? What is here stays; the backup only fills in what is missing.')) { sbStatus('', true); return; }
  const summary = gymMergeBackup(d.data);
  sbStatus('Restored from the backup of ' + new Date(r.at).toLocaleString() + ': ' + summary + '.', true);
}

// Backs itself up once a day once the token is saved (silent no-op before that).
GymSharedBackup.auto('gym', () => (localStorage.getItem('hai_workout_history') || localStorage.getItem('gym_programme') || getPhysio().length) ? gymBackupPayload() : null);


function uid(prefix) {
  return (prefix || 'e') + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
}

function esc(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function showToast(msg, dur=2500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

function tryParse(str, fallback) {
  try { return JSON.parse(str); } catch(e) { return fallback; }
}

function slug(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 16); }

function isDel(v) { return v === 1 || v === '1' || v === true; }

function setSyncStatus(status, msg) {
  const dot = document.getElementById('syncDot');
  const txt = document.getElementById('syncText');
  if (dot) dot.className = 'sync-dot ' + status;
  if (txt) txt.textContent = msg;
}

let _jsonpSeq = 0;

function scriptFetch(url) {
  return new Promise((resolve, reject) => {
    const cbName = 'hai_cb_' + Date.now() + '_' + (++_jsonpSeq);
    const script  = document.createElement('script');
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error('JSONP timeout'));
    }, 15000);

    window[cbName] = (data) => {
      cleanup();
      resolve(data);
    };

    function cleanup() {
      clearTimeout(timeout);
      delete window[cbName];
      if (script.parentNode) script.parentNode.removeChild(script);
    }

    const sep = url.includes('?') ? '&' : '?';
    script.src = url + sep + 'callback=' + cbName;
    script.onerror = (e) => {
      cleanup();
      console.error('JSONP script load failed, URL length:', script.src.length);
      reject(new Error(`Script load failed (URL: ${script.src.length} chars) — check Apps Script URL in Settings`));
    };
    document.head.appendChild(script);
  });
}

async function scriptPost(payload) {
  if (!state.settings.scriptUrl) { queuePost(payload); return; }
  try {
    await fetch(state.settings.scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
    });
  } catch(e) {
    console.warn('Sheet post failed — queued for retry', e);
    queuePost(payload);
  }
}

function queuePost(payload) {
  const q = JSON.parse(localStorage.getItem('hai_post_queue') || '[]');
  q.push({ payload, ts: Date.now() });
  localStorage.setItem('hai_post_queue', JSON.stringify(q.slice(-200)));
}

async function flushPostQueue() {
  if (!state.settings.scriptUrl || !navigator.onLine) return;
  const q = JSON.parse(localStorage.getItem('hai_post_queue') || '[]');
  if (!q.length) return;
  localStorage.setItem('hai_post_queue', '[]');
  for (const item of q) {
    try {
      await fetch(state.settings.scriptUrl, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(item.payload),
      });
    } catch(e) { queuePost(item.payload); }
  }
}

const SHEET_COLS_ORDER = {
  nutrition:    ['date','meal','food_name','calories','protein_g','carbs_g','fat_g','serving_size','source'],
  workouts:     null, // object form only
  journal:      ['date','time_of_day','sleep_hours','sleep_quality','energy','mood','supplements','ill','pain','pain_area','notes','steps','resting_hr','hrv','calories_burned','active_minutes','activities','water_ml'],
  body_metrics: ['date','_ts','weight_kg','body_fat_pct','_pad','source'],
  measurements: ['date','chest','shoulders','bicep_l','bicep_r','waist','hips','thigh_l','thigh_r','calf_l','calf_r','notes'],
  activity:     ['date','sport_type','duration_min','distance_km','elevation_m','calories','avg_hr','name','source'],
};

function upsertRows(sheet, rows) {
  rows = Array.isArray(rows) ? rows : [rows];
  const order = SHEET_COLS_ORDER[sheet];
  rows.forEach(row => {
    const payload = { type: 'upsert', sheet, rows: [row] };
    if (order) {
      payload.action = 'appendRow';
      payload.tab = sheet;
      payload.row = order.map(c => {
        if (c === '_ts') return new Date().toISOString();
        if (c === '_pad') return '';
        const v = row[c];
        return (v === undefined || v === null) ? '' : v;
      });
    } else {
      // object-keyed sheets the old backend addressed by name
      const legacyAction = { workouts: 'logWorkout', custom_foods: 'saveCustomFood',
                             saved_meals: 'saveSavedMeal', targets: 'saveTargets' }[sheet];
      if (legacyAction) { payload.action = legacyAction; payload.data = row; }
    }
    scriptPost(payload);
  });
}

function deleteRow(sheet, id) {
  scriptPost({ type: 'upsert', sheet, rows: [{ id, deleted: 1 }],
               action: sheet === 'saved_meals' ? 'deleteSavedMeal' : undefined, id });
}

let EXERCISE_INDEX = null;

function exerciseIndex() {
  if (EXERCISE_INDEX) return EXERCISE_INDEX;
  const idx = {};
  WORKOUT_DAYS.forEach(d => {
    Object.values(d.exercises).forEach(list => list.forEach(ex => {
      const group = ex.category === 'SPORT' ? 'Core & Mobility' : d.name;
      if (!idx[ex.name]) idx[ex.name] = { group, category: ex.category || 'BLS', days: [], targetReps: ex.reps, rest: ex.rest };
      if (idx[ex.name].days.indexOf(d.num) === -1) idx[ex.name].days.push(d.num);
    }));
  });
  EXERCISE_INDEX = idx;
  return idx;
}

function exerciseInfo(name) { return exerciseIndex()[name] || { group: 'Other', category: 'BLS', days: [], targetReps: '8–10', rest: 90 }; }

const MUSCLE_GROUPS = ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core & Mobility'];

function e1rm(weight, reps) {
  weight = parseFloat(weight) || 0; reps = parseInt(reps) || 0;
  if (weight <= 0 || reps <= 0) return 0;
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30) * 10) / 10;
}

function entryE1rm(entry) {
  if (!entry) return 0;
  if (entry.best_e1rm) return entry.best_e1rm;
  const sets = entry.sets || [];
  let best = e1rm(entry.best_weight, entry.best_reps);
  sets.forEach(s => { best = Math.max(best, e1rm(s.weight, s.reps)); });
  return best;
}

function isBodyweightExercise(name) {
  const h = getWorkoutHistory();
  let seen = false;
  for (const w of h) {
    const e = (w.exercises_json || {})[name];
    if (!e) continue;
    seen = true;
    if ((e.best_weight || 0) > 0) return false;
    if ((e.sets || []).some(s => (s.weight || 0) > 0)) return false;
  }
  return seen; // unseen -> false (treat as weighted by default)
}

function exerciseSeries(name) {
  return getWorkoutHistory()
    .filter(w => (w.exercises_json || {})[name])
    .map(w => {
      const e = w.exercises_json[name];
      return {
        date: w.date, equipment: w.equipment_type,
        weight: e.best_weight || 0, reps: e.best_reps || 0,
        e1rm: entryE1rm(e),
        volume: e.volume || (e.sets || []).reduce((a, s) => a + (s.weight || 0) * (s.reps || 0), 0),
        rpe: (e.sets || []).reduce((m, s) => Math.max(m, s.rpe || 0), 0) || null,
      };
    })
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));
}

function getPRs() { return JSON.parse(localStorage.getItem('hai_prs') || '[]'); }

function savePRs(a) { localStorage.setItem('hai_prs', JSON.stringify(a.slice(-300))); }

function detectPRs(dateStr, exercisesJson) {
  const hist = getWorkoutHistory().filter(w => w.date < dateStr || (w.date === dateStr && w.id !== (ws.pendingSave && ws.pendingSave.id)));
  const found = [];
  Object.entries(exercisesJson).forEach(([name, e]) => {
    const bw = (e.best_weight || 0) === 0 && (e.sets || []).every(s => (s.weight || 0) === 0);
    let prevBestE1 = 0, prevBestReps = 0, prevBestWeight = 0;
    hist.forEach(w => {
      const pe = (w.exercises_json || {})[name];
      if (!pe) return;
      prevBestE1     = Math.max(prevBestE1, entryE1rm(pe));
      prevBestReps   = Math.max(prevBestReps, pe.best_reps || 0);
      prevBestWeight = Math.max(prevBestWeight, pe.best_weight || 0);
    });
    if (bw) {
      if ((e.best_reps || 0) > prevBestReps && prevBestReps > 0) {
        found.push({ date: dateStr, exercise: name, type: 'reps', value: e.best_reps, prev: prevBestReps });
      }
    } else {
      const newE1 = entryE1rm(e);
      if (Math.round(newE1) > Math.round(prevBestE1) && prevBestE1 > 0) {
        found.push({ date: dateStr, exercise: name, type: 'e1rm', value: Math.round(newE1), prev: Math.round(prevBestE1) });
      } else if ((e.best_weight || 0) > prevBestWeight && prevBestWeight > 0) {
        found.push({ date: dateStr, exercise: name, type: 'weight', value: e.best_weight, prev: prevBestWeight });
      }
    }
  });
  return found;
}

function renderPRCard() {
  const card = document.getElementById('prCard'); const list = document.getElementById('prList');
  if (!card || !list) return;
  const prs = getPRs().slice().reverse().slice(0, 12);
  if (!prs.length) { card.style.display = 'none'; return; }
  card.style.display = 'block';
  const fmt = p => p.type === 'reps' ? `${p.value} reps (was ${p.prev})`
                 : p.type === 'e1rm' ? `${p.value}kg e1RM (was ${p.prev})`
                 : `${p.value}kg (was ${p.prev})`;
  list.innerHTML = prs.map(p => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="min-width:0"><div style="font-size:13px;color:var(--text)">${esc(p.exercise)}</div>
        <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">${relativeDate(p.date)}</div></div>
      <div style="font-family:var(--font-mono);font-size:12px;color:var(--accent);white-space:nowrap">${fmt(p)}</div>
    </div>`).join('');
}

let volumeWeekMode = 0;

function setVolumeWeek(mode, el) {
  volumeWeekMode = mode;
  document.querySelectorAll('#volumeWeekChips .chip').forEach(c => c.classList.remove('selected'));
  if (el) el.classList.add('selected');
  renderVolumeCard();
}

function weekBounds(weeksAgo) {
  const now = new Date(); now.setHours(12, 0, 0, 0);
  const dow = (now.getDay() + 6) % 7; // Mon=0
  const monday = new Date(now); monday.setDate(now.getDate() - dow - weeksAgo * 7);
  const sunday = new Date(monday); sunday.setDate(monday.getDate() + 6);
  return [monday.toISOString().split('T')[0], sunday.toISOString().split('T')[0]];
}

function setsByMuscle(fromDate, toDate) {
  const g = {}; MUSCLE_GROUPS.forEach(m => g[m] = 0);
  getWorkoutHistory().forEach(w => {
    if (w.date < fromDate || w.date > toDate) return;
    Object.entries(w.exercises_json || {}).forEach(([name, e]) => {
      const grp = exerciseInfo(name).group;
      g[grp] = (g[grp] || 0) + ((e.sets || []).length || 0);
    });
  });
  return g;
}

function renderVolumeCard() {
  const card = document.getElementById('volumeCard'); const list = document.getElementById('volumeList');
  if (!card || !list) return;
  if (!getWorkoutHistory().length) { card.style.display = 'none'; return; }
  card.style.display = 'block';

  let g;
  if (volumeWeekMode === 'avg') {
    const acc = {}; MUSCLE_GROUPS.forEach(m => acc[m] = 0);
    for (let k = 0; k < 4; k++) { const [f, t] = weekBounds(k); const wk = setsByMuscle(f, t); MUSCLE_GROUPS.forEach(m => acc[m] += wk[m] || 0); }
    g = {}; MUSCLE_GROUPS.forEach(m => g[m] = Math.round(acc[m] / 4 * 10) / 10);
  } else {
    const [f, t] = weekBounds(volumeWeekMode); g = setsByMuscle(f, t);
  }
  const max = Math.max(20, ...MUSCLE_GROUPS.map(m => g[m] || 0));
  list.innerHTML = MUSCLE_GROUPS.map(m => {
    const v = g[m] || 0;
    const status = v === 0 ? 'var(--text3)' : v < 10 ? 'var(--amber)' : v > 22 ? 'var(--red)' : 'var(--green)';
    const note = v === 0 ? 'none' : v < 10 ? 'low' : v > 22 ? 'high' : 'on target';
    return `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:7px">
        <div style="font-size:12px;color:var(--text2);width:82px;flex-shrink:0">${m}</div>
        <div style="flex:1;height:6px;background:var(--surface2);border-radius:99px;overflow:hidden">
          <div style="height:100%;width:${Math.min(100, v / max * 100)}%;background:${status};border-radius:99px"></div>
        </div>
        <div style="font-family:var(--font-mono);font-size:11px;color:${status};width:64px;text-align:right">${v} · ${note}</div>
      </div>`;
  }).join('');
}

function deloadStatus(name) {
  const s = exerciseSeries(name);
  if (s.length < 3) return null;
  const last3 = s.slice(-3);
  const bw = last3.every(p => p.weight === 0);
  const metric = p => bw ? p.reps : (p.e1rm || p.weight);
  const improved = metric(last3[2]) > metric(last3[0]);
  // prefer the stored per-session average RPE, else the session's hardest set
  const hist = getWorkoutHistory();
  const rpes = last3.map(p => {
    const w = hist.find(x => x.date === p.date && (x.exercises_json || {})[name]);
    const e = w && w.exercises_json[name];
    return (e && e.avg_rpe) || p.rpe || null;
  }).filter(Boolean);
  const avgRpe = rpes.length >= 2 ? rpes.reduce((a, b) => a + b, 0) / rpes.length : null;
  if (!improved || (avgRpe && avgRpe >= 9)) {
    return {
      name,
      reason: (avgRpe && avgRpe >= 9) ? `RPE ${avgRpe.toFixed(1)} avg — high fatigue` : `no progress in 3 sessions`,
      suggestion: bw ? 'drop a set or add rest' : `try −10% load for one session, then rebuild`,
    };
  }
  return null;
}

function renderDeloadCard() {
  const card = document.getElementById('deloadCard'); const list = document.getElementById('deloadList');
  if (!card || !list) return;
  const names = Object.keys(exerciseIndex());
  const flags = names.map(deloadStatus).filter(Boolean);
  if (!flags.length) { card.style.display = 'none'; return; }
  card.style.display = 'block';
  list.innerHTML = flags.map(f => `
    <div style="padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="font-size:13px;color:var(--text)">${esc(f.name)}</div>
      <div style="font-size:11px;color:var(--text3);margin-top:2px">${f.reason} — <span style="color:var(--amber)">${f.suggestion}</span></div>
    </div>`).join('');
}

function overloadTarget(name) {
  const s = exerciseSeries(name);
  if (!s.length) return null;
  const last = s[s.length - 1];
  const info = exerciseInfo(name);
  const m = String(info.targetReps || '').match(/(\d+)\s*[–-]\s*(\d+)/);
  const lo = m ? parseInt(m[1]) : (parseInt(info.targetReps) || 8);
  const hi = m ? parseInt(m[2]) : lo + 2;
  if (last.weight === 0) {
    return last.reps >= hi ? { text: `add a rep or make it harder`, reps: last.reps + 1, weight: 0 }
                           : { text: `beat ${last.reps} reps`, reps: last.reps + 1, weight: 0 };
  }
  if (last.reps >= hi) {
    const inc = last.weight >= 60 ? 5 : last.weight >= 20 ? 2.5 : 1.25;
    return { text: `${last.weight + inc}kg × ${lo} (up from ${last.weight}×${last.reps})`, weight: last.weight + inc, reps: lo };
  }
  if (last.reps < lo) return { text: `hold ${last.weight}kg, build to ${lo} reps`, weight: last.weight, reps: lo };
  return { text: `${last.weight}kg × ${last.reps + 1}`, weight: last.weight, reps: last.reps + 1 };
}

function setRpe(v) {
  document.getElementById('setRpe').value = v;
  document.querySelectorAll('#rpeRow button').forEach(b => { b.style.background = ''; b.style.color = ''; });
  const map = { 5: 0, 6: 1, 7: 2, 8: 3, 9: 4, 10: 5 };
  const btn = document.querySelectorAll('#rpeRow button')[map[v]];
  if (btn) { btn.style.background = 'var(--accent)'; btn.style.color = '#000'; }
  const hint = { 5: 'easy', 6: '4+ in reserve', 7: '3 in reserve', 8: '2 in reserve', 9: '1 in reserve', 10: 'max effort' }[v];
  document.getElementById('rpeHint').textContent = hint || '';
}

const PLATES = [25, 20, 15, 10, 5, 2.5, 1.25];

function platesFor(target, bar) {
  let perSide = (target - bar) / 2;
  if (perSide <= 0) return null;
  const out = [];
  PLATES.forEach(p => { while (perSide >= p - 0.01) { out.push(p); perSide -= p; } });
  return { plates: out, leftover: Math.round(perSide * 100) / 100 };
}

function openPlateCalc() {
  const bar = parseFloat(localStorage.getItem('hai_bar_kg') || '20') || 20;
  const target = parseFloat(document.getElementById('setWeight').value) || 0;
  const out = document.getElementById('plateCalcOut');
  out.style.display = 'block';
  const r = platesFor(target, bar);
  if (!r) { out.textContent = `${target}kg ≤ bar (${bar}kg)`; return; }
  out.innerHTML = `Bar ${bar}kg + per side: <span style="color:var(--text)">${r.plates.join(' + ') || '—'}</span>`
    + (r.leftover ? ` <span style="color:var(--amber)">(${r.leftover}kg short)</span>` : '');
}

function warmupRamp(workWeight, isBW) {
  if (isBW || !workWeight || workWeight < 20) return [];
  return [
    { pct: 0.4, reps: 8 }, { pct: 0.6, reps: 5 }, { pct: 0.8, reps: 3 },
  ].map(r => ({ warmup: true, weight: Math.round(workWeight * r.pct / 2.5) * 2.5, reps: r.reps, logged: false }));
}

let ws = {
  active: false,
  dayNum: null,
  dayName: '',
  equipment: 'gym',
  startTime: null,
  timerInterval: null,
  restInterval: null,
  restDuration: 90,   // seconds
  restRemaining: 0,
  exercises: [],      // [{ name, sets:[{warmup,weight,reps,logged}] }]
  pendingSet: null,   // { exIdx, setIdx }
  wakeLock: null,
};

function switchWorkoutTab(tab, el) {
  document.querySelectorAll('.food-tab').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('wTabPlan').style.display    = tab==='plan'     ? 'block' : 'none';
  document.getElementById('wTabHistory').style.display = tab==='history'  ? 'block' : 'none';
  document.getElementById('wTabProgress').style.display= tab==='progress' ? 'block' : 'none';
  if (tab === 'history')  renderWorkoutHistory();
  if (tab === 'progress') { renderProgressExerciseList(); renderPRCard(); renderVolumeCard(); renderDeloadCard(); }
}

function overloadSuggestion(ex, prev) {
  const w = parseFloat(prev.best_weight) || 0;
  const r = parseInt(prev.best_reps) || 0;
  if (!r) return null;
  const m = String(ex.reps).match(/(\d+)\s*[–-]\s*(\d+)/);
  const lo = m ? parseInt(m[1]) : (parseInt(ex.reps) || 8);
  const hi = m ? parseInt(m[2]) : lo + 2;
  if (w === 0) {
    return r >= hi ? `→ add reps or load` : `→ aim ${Math.min(hi, r + 1)} reps`;
  }
  if (r >= hi) {
    const inc = w >= 60 ? 5 : w >= 20 ? 2.5 : 1.25;
    return `→ try ${(w + inc)}kg × ${lo}`;
  }
  if (r < lo) return `→ hold ${w}kg, build to ${lo}`;
  return `→ ${w}kg × ${r + 1}`;
}

function renderWorkoutDays() {
  const grid = document.getElementById('workoutDayGrid');
  const history = getWorkoutHistory();
  grid.innerHTML = WORKOUT_DAYS.map(d => {
    const last = history.filter(w => w.day_id === d.num).sort((a,b) => b.date.localeCompare(a.date))[0];
    const lastDate = last ? relativeDate(last.date) : 'Never';
    return `
      <div class="workout-day-card" data-day="${d.num}" onclick="selectWorkoutDay(${d.num})">
        <div class="workout-day-num">Day ${d.num}</div>
        <div class="workout-day-name">${d.name}</div>
        <div class="workout-day-sub">${d.sub}</div>
        <div style="font-family:var(--font-mono);font-size:9px;color:var(--text3);margin-top:5px">Last: ${lastDate}</div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('#equipChips .chip').forEach(c => {
    c.onclick = () => {
      document.querySelectorAll('#equipChips .chip').forEach(x => x.classList.remove('selected'));
      c.classList.add('selected');
      state.selectedEquipment = c.dataset.eq;
      if (state.selectedWorkoutDay) renderExercises();
    };
  });
  renderUpNext();
}

function selectWorkoutDay(num) {
  state.selectedWorkoutDay = num;
  document.querySelectorAll('.workout-day-card').forEach(c => {
    c.classList.toggle('selected', parseInt(c.dataset.day) === num);
  });
  renderExercises();
  const wx = document.getElementById('workoutExercises');
  if (wx) wx.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderExercises() {
  const day = WORKOUT_DAYS.find(d => d.num === state.selectedWorkoutDay);
  if (!day) return;
  const eq  = state.selectedEquipment || 'gym';
  const exs = day.exercises[eq] || day.exercises.gym;
  const el  = document.getElementById('workoutExercises');
  document.getElementById('workoutEmpty').style.display = 'none';

  const history  = getWorkoutHistory();
  const lastSess = history.filter(w => w.day_id === day.num && w.equipment_type === eq)
                          .sort((a,b) => b.date.localeCompare(a.date))[0];
  const lastData = lastSess ? (lastSess.exercises_json || {}) : {};

  // Group by category
  const categories = [];
  exs.forEach(ex => {
    const cat = ex.category || 'BLS';
    let group  = categories.find(g => g.cat === cat);
    if (!group) { group = { cat, exercises: [] }; categories.push(group); }
    group.exercises.push(ex);
  });

  const catLabels = { BLS: 'BLS STRENGTH', SPORT: day.sub.split(' + ')[1] || 'SPORT' };
  const catColors = { BLS: 'var(--accent)', SPORT: 'var(--green)' };

  el.innerHTML = `
    <button class="btn btn-primary" style="width:100%;margin-bottom:10px" onclick="startWorkout(${day.num})">▶ Start Day ${day.num} — ${day.name}</button>
    <div class="card">
      <div class="card-title">Day ${day.num} · ${day.name} · ${eq.charAt(0).toUpperCase()+eq.slice(1)}</div>
      ${categories.map(group => `
        <div style="margin:12px 0 6px">
          <span style="font-size:10px;font-family:var(--font-mono);font-weight:700;color:${catColors[group.cat]||'var(--accent)'};background:${catColors[group.cat]||'var(--accent)'}22;padding:2px 8px;border-radius:4px">${group.cat}</span>
          <span style="font-size:10px;font-family:var(--font-mono);color:var(--text3);margin-left:8px">${catLabels[group.cat]||group.cat}</span>
        </div>
        ${group.exercises.map((ex, i) => {
          const prev    = lastData[ex.name];
          const bw      = prev && (prev.best_weight || 0) === 0;
          const prevStr = prev ? `Last: ${bw ? 'BW' : prev.best_weight + 'kg'} × ${prev.best_reps}${entryE1rm(prev) ? ` · ${Math.round(entryE1rm(prev))}kg e1RM` : ''}` : 'No history';
          const tgt     = overloadTarget(ex.name);
          const dl      = deloadStatus(ex.name);
          return `
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
              <div style="flex:1">
                <div style="font-size:14px;color:var(--text)">${ex.name}</div>
                <div style="font-size:11px;color:var(--text3);margin-top:2px">${prevStr}${tgt ? ` · <span style="color:var(--accent)">→ ${tgt.text}</span>` : ''}${dl ? ` · <span style="color:var(--amber)">! deload</span>` : ''}</div>
              </div>
              <div style="font-size:11px;color:var(--text3);white-space:nowrap">${ex.sets} × ${ex.reps}</div>
            </div>
          `;
        }).join('')}
      `).join('')}
    </div>
    <button class="btn btn-primary" onclick="startWorkout(${day.num})">▶ Start Workout</button>
  `;
}

function updateWakeIndicator() {
  const el = document.getElementById('awWake');
  if (!el) return;
  const summaryOpen = document.getElementById('workoutSummaryModal').classList.contains('open');
  if (!ws.active || summaryOpen) { el.textContent = ''; return; }
  const held = ws.wakeLock && !ws.wakeLock.released;
  el.innerHTML = held
    ? '<span style="color:var(--green)">&#9679;</span> screen stays on'
    : '<span style="color:var(--amber)">&#9679;</span> screen may dim';
}

function startWorkout(dayNum) {
  const day = WORKOUT_DAYS.find(d => d.num === dayNum);
  if (!day) return;
  const eq  = state.selectedEquipment || 'gym';
  const exs = day.exercises[eq] || day.exercises.gym;
  if (!exs || !exs.length) { showToast('No ' + eq + ' exercises on this day — add some in the Programme tab'); return; }
  ws.cardio = null;

  // Get last session for this day+equipment to pre-fill weights
  const history  = getWorkoutHistory();
  const lastSess = history.filter(w => w.day_id === dayNum && w.equipment_type === eq)
                          .sort((a,b) => b.date.localeCompare(a.date))[0];
  const lastData = lastSess ? (lastSess.exercises_json || {}) : {};

  // Build exercises with correct set counts + pre-filled targets.
  ws.exercises = exs.map(ex => {
    const prev    = lastData[ex.name];
    // Bodyweight if: the whole session is bodyweight-equipment, OR history shows
    // no load, OR the plan prescribes reps by "max"/time-hold rather than a number.
    const repsStr = String(ex.reps || '');
    const bw = eq === 'bodyweight'
      || isBodyweightExercise(ex.name)
      || (prev && (prev.best_weight || 0) === 0 && (prev.best_reps || 0) > 0)
      || /max|hold|\bs\b|s\/|sec/i.test(repsStr);
    const numSets = ex.sets || 3;

    // Suggested working weight/reps: progressive-overload target, else last session
    const tgt   = overloadTarget(ex.name);
    const workW = tgt ? tgt.weight : (prev ? prev.best_weight : '');
    const workR = tgt ? tgt.reps   : (prev ? prev.best_reps   : '');

    // Warm-up ramp toward the first working weight (weighted lifts only)
    const warm = warmupRamp(parseFloat(workW) || 0, bw);
    const sets = [
      ...warm,
      ...Array.from({ length: numSets }, () => ({
        warmup: false, weight: bw ? 0 : workW, reps: workR, logged: false
      })),
    ];

    return {
      name: ex.name, sets,
      category: ex.category || exerciseInfo(ex.name).category,
      targetReps: ex.reps, restSeconds: ex.rest || 90,
      isBW: bw, suggestion: tgt ? tgt.text : null,
    };
  });

  ws.active    = true;
  ws.dayNum    = dayNum;
  ws.dayName   = day.name;
  ws.equipment = eq;
  ws.startTime = Date.now();
  const launch = new URL(location.href);ws.mydayActivity = launch.searchParams.get('mydayActivity') || '';
  launch.searchParams.delete('mydayActivity');window.history.replaceState(null,'',launch.toString());

  // Wake lock
  const requestWake = () => {
    if (!navigator.wakeLock) { updateWakeIndicator(); return; }
    navigator.wakeLock.request('screen').then(lock => {
      ws.wakeLock = lock;
      lock.addEventListener('release', updateWakeIndicator);
      updateWakeIndicator();
    }).catch(() => updateWakeIndicator());
  };
  requestWake();
  // Re-acquire wake lock when page becomes visible again (system releases on hide)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && ws.active) requestWake();
  }, { once: false });

  // Show overlay
  document.getElementById('awDayLabel').textContent = `Day ${dayNum} — ${day.name} · ${eq}`;
  document.getElementById('activeWorkoutOverlay').style.display = 'block';
  document.body.style.overflow = 'hidden';

  renderActiveWorkout();
  startWorkoutTimer();
}

function renderActiveWorkout() {
  const total = ws.exercises.reduce((a, ex) => a + ex.sets.length, 0);
  const done  = ws.exercises.reduce((a, ex) => a + ex.sets.filter(s => s.logged).length, 0);
  document.getElementById('awSetsDone').textContent = `${done} / ${total}`;

  document.getElementById('awExerciseList').innerHTML = ws.exercises.map((ex, ei) => {
    const doneCount   = ex.sets.filter(s => s.logged).length;
    const isActive    = doneCount < ex.sets.length;
    const lastWorking = ex.sets.filter(s => s.logged && !s.warmup).pop();
    const restLabel   = formatRestTime(ex.restSeconds || 90);
    const infoLine    = `${ex.targetReps || '?'} reps · rest ${restLabel}${lastWorking ? ` · last: ${lastWorking.weight > 0 ? lastWorking.weight+'kg' : 'BW'}×${lastWorking.reps}` : ''}`;

    return `
      <div class="aw-exercise-card ${isActive && doneCount > 0 ? 'active-ex' : ''}" id="awex-${ei}">
        <div class="aw-exercise-header">
          <div class="aw-ex-num">${ei + 1}</div>
          <div style="flex:1;min-width:0">
            <div class="aw-ex-name">${ex.name}</div>
            <div style="font-size:11px;color:var(--text3);margin-top:2px;font-family:var(--font-mono)">${infoLine}</div>
          </div>
          <button onclick="openSwapModal(${ei});event.stopPropagation()" style="background:none;border:1px solid var(--border);color:var(--text3);border-radius:8px;font-size:10px;padding:3px 8px;margin-right:8px;font-family:var(--font-mono);cursor:pointer;flex:none">swap</button>
          <div class="aw-ex-done" id="awex-done-${ei}">${doneCount}/${ex.sets.length}</div>
        </div>
        <div class="aw-sets" id="awex-sets-${ei}">
          ${ex.sets.map((set, si) => renderSetRowHTML(ei, si, set)).join('')}
        </div>
        <div class="aw-add-set" onclick="addSet(${ei})">
          <span style="color:var(--accent)">+</span> Add set
        </div>
      </div>
    `;
  }).join('') + renderWorkoutExtras();
}

function renderSetRowHTML(ei, si, set) {
  const loggedClass = set.logged ? (set.warmup ? 'warmup-logged' : 'logged') : '';
  const badge  = set.warmup ? '<span class="aw-set-badge warmup">Warm</span>' : '<span class="aw-set-badge working">Work</span>';
  const result = set.logged
    ? `<span class="aw-set-result">${set.weight > 0 ? set.weight + 'kg' : 'BW'} × ${set.reps}</span>`
    : `<span class="aw-set-result" style="color:var(--text3)">${set.weight ? set.weight+'kg · ' : ''}tap to log</span>`;
  const check = set.logged ? '✓' : '○';
  return `
    <div class="aw-set-row ${loggedClass}" id="awset-${ei}-${si}" onclick="openSetModal(${ei},${si})">
      <div class="aw-set-num">${si + 1}</div>
      ${badge}
      ${result}
      <div class="aw-set-check">${check}</div>
    </div>
  `;
}

function patchActiveWorkout(ei, si) {
  const ex  = ws.exercises[ei];
  const set = ex.sets[si];

  // Update the individual set row
  const rowEl = document.getElementById(`awset-${ei}-${si}`);
  if (rowEl) {
    rowEl.outerHTML = renderSetRowHTML(ei, si, set);
  }

  // Update done count for this exercise
  const doneCount  = ex.sets.filter(s => s.logged).length;
  const doneEl     = document.getElementById(`awex-done-${ei}`);
  if (doneEl) doneEl.textContent = `${doneCount}/${ex.sets.length}`;

  // Update the info line (shows "last: Xkg×Y" after first logged set)
  const cardEl = document.getElementById(`awex-${ei}`);
  if (cardEl) {
    const lastWorking = ex.sets.filter(s => s.logged && !s.warmup).pop();
    const restLabel   = formatRestTime(ex.restSeconds || 90);
    const infoLine    = `${ex.targetReps || '?'} reps · rest ${restLabel}${lastWorking ? ` · last: ${lastWorking.weight > 0 ? lastWorking.weight+'kg' : 'BW'}×${lastWorking.reps}` : ''}`;
    const infoEl = cardEl.querySelector('.aw-exercise-header div[style*="font-size:11px"]');
    if (infoEl) infoEl.textContent = infoLine;
    // Update active-ex class
    const isActive = doneCount < ex.sets.length;
    cardEl.classList.toggle('active-ex', isActive && doneCount > 0);
  }

  // Update global sets-done counter
  const total = ws.exercises.reduce((a, ex) => a + ex.sets.length, 0);
  const done  = ws.exercises.reduce((a, ex) => a + ex.sets.filter(s => s.logged).length, 0);
  document.getElementById('awSetsDone').textContent = `${done} / ${total}`;
}

function addSet(ei) {
  const last = ws.exercises[ei].sets.filter(s => s.logged).pop();
  const si   = ws.exercises[ei].sets.length;
  ws.exercises[ei].sets.push({
    warmup: false,
    weight: last ? last.weight : '',
    reps:   last ? last.reps   : '',
    logged: false
  });
  // Append just the new row — never re-renders the whole list
  const setsEl = document.getElementById(`awex-sets-${ei}`);
  if (setsEl) {
    setsEl.insertAdjacentHTML('beforeend', renderSetRowHTML(ei, si, ws.exercises[ei].sets[si]));
  }
  // Update done counter
  const doneCount = ws.exercises[ei].sets.filter(s => s.logged).length;
  const doneEl    = document.getElementById(`awex-done-${ei}`);
  if (doneEl) doneEl.textContent = `${doneCount}/${ws.exercises[ei].sets.length}`;
  const total = ws.exercises.reduce((a, ex) => a + ex.sets.length, 0);
  const done  = ws.exercises.reduce((a, ex) => a + ex.sets.filter(s => s.logged).length, 0);
  document.getElementById('awSetsDone').textContent = `${done} / ${total}`;
}

function startWorkoutTimer() {
  ws.timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - ws.startTime) / 1000);
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    document.getElementById('awTimer').textContent = `${m}:${String(s).padStart(2,'0')}`;
  }, 1000);
}

function startRestTimer(seconds) {
  ws.restDuration  = seconds;
  ws.restRemaining = seconds;
  document.getElementById('awRestBar').style.display = 'block';
  document.getElementById('awRestFill').style.width  = '100%';

  clearInterval(ws.restInterval);
  ws.restInterval = setInterval(() => {
    ws.restRemaining--;
    document.getElementById('awRestTime').textContent = ws.restRemaining + 's';
    const pct = (ws.restRemaining / ws.restDuration) * 100;
    document.getElementById('awRestFill').style.width = pct + '%';
    if (ws.restRemaining <= 0) {
      clearInterval(ws.restInterval);
      document.getElementById('awRestBar').style.display = 'none';
      // Vibrate if supported
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    }
  }, 1000);
}

function skipRest() {
  clearInterval(ws.restInterval);
  document.getElementById('awRestBar').style.display = 'none';
}

let numpadActiveField = 'weight';

let numpadValues      = { weight: '', reps: '' };

function selectNumpadField(field) {
  numpadActiveField = field;
  // Update border highlights
  document.getElementById('numpadWeightBox').style.borderColor = field === 'weight' ? 'var(--accent)' : 'var(--border)';
  document.getElementById('numpadRepsBox').style.borderColor   = field === 'reps'   ? 'var(--accent)' : 'var(--border)';
  // Update step button label
  const stepUp   = document.getElementById('numpadStepUp');
  const stepDown = document.getElementById('numpadStepDown');
  if (stepUp)   stepUp.textContent   = field === 'weight' ? '+2.5' : '+1';
  if (stepDown) stepDown.textContent = field === 'weight' ? '−2.5' : '−1';
}

function numpadPress(key) {
  const field = numpadActiveField;
  let val = numpadValues[field];

  if (key === 'del') {
    val = val.slice(0, -1) || '';
  } else if (key === 'clear') {
    val = '';
  } else if (key === '00') {
    if (field === 'reps') return;
    val = val === '' ? '' : val + '00';
  } else if (key === '.') {
    if (field === 'reps') return; // no decimals for reps
    if (!val.includes('.')) val = (val || '0') + '.';
  } else {
    if (val === '0' && key !== '.') val = key;
    else val = val + key;
  }

  // Enforce max lengths
  if (field === 'weight' && val.replace('.','').length > 5) return;
  if (field === 'reps'   && val.length > 3) return;

  numpadValues[field] = val;
  updateNumpadDisplay();
  document.getElementById('setWeight').value = numpadValues.weight || 0;
  document.getElementById('setReps').value   = numpadValues.reps   || 0;
}

function numpadStep(dir) {
  const field = numpadActiveField;
  if (field === 'weight') {
    const cur = parseFloat(numpadValues.weight) || 0;
    const next = Math.max(0, Math.round((cur + dir * 2.5) * 4) / 4);
    numpadValues.weight = next % 1 === 0 ? String(next) : next.toFixed(1);
  } else {
    const cur = parseInt(numpadValues.reps) || 0;
    numpadValues.reps = String(Math.max(0, cur + dir));
  }
  updateNumpadDisplay();
  document.getElementById('setWeight').value = numpadValues.weight || 0;
  document.getElementById('setReps').value   = numpadValues.reps   || 0;
}

function updateNumpadDisplay() {
  const wEl = document.getElementById('numpadWeightDisplay');
  const rEl = document.getElementById('numpadRepsDisplay');
  if (wEl) wEl.textContent = numpadValues.weight || '0';
  if (rEl) rEl.textContent = numpadValues.reps   || '0';
}

function openSetModal(ei, si) {
  ws.pendingSet = { ei, si };
  const ex       = ws.exercises[ei];
  const set      = ex.sets[si];
  const isWarmup = set.warmup;

  const lastLoggedSet = [...ex.sets].slice(0, si).reverse().find(s => s.logged);
  const defaultWeight = set.weight || (lastLoggedSet ? String(lastLoggedSet.weight) : '');
  const defaultReps   = set.reps   || (lastLoggedSet ? String(lastLoggedSet.reps)   : '');

  const workingSetNum = ex.sets.slice(0,si+1).filter(s=>!s.warmup).length;
  const totalWorking  = ex.sets.filter(s=>!s.warmup).length;

  document.getElementById('setModalTitle').textContent  = ex.name;
  document.getElementById('setModalExName').textContent = isWarmup
    ? `Warmup · target ${ex.targetReps || '8–10'}`
    : `Set ${workingSetNum} of ${totalWorking} · target ${ex.targetReps || '8–10'}`;

  const restEl = document.getElementById('setModalRestLabel');
  if (restEl) restEl.textContent = `Rest: ${formatRestTime(ex.restSeconds || 90)}`;

  const refEl = document.getElementById('setModalLastRef');
  if (refEl) {
    const bw = ex.isBW;
    if (defaultReps && (defaultWeight || bw)) {
      refEl.style.display = 'block';
      refEl.innerHTML = `Last: <strong>${bw ? 'BW' : defaultWeight + 'kg'} × ${defaultReps}</strong>`;
    } else {
      refEl.style.display = 'none';
    }
  }

  // Progressive-overload target for this exercise
  const tgtEl = document.getElementById('setModalTarget');
  if (tgtEl) {
    const t = overloadTarget(ex.name);
    if (t && !isWarmup) { tgtEl.style.display = 'block'; tgtEl.textContent = 'Aim: ' + t.text; }
    else tgtEl.style.display = 'none';
  }

  // Reset RPE selector; show plate calculator for barbell (gym) work
  document.getElementById('setRpe').value = '';
  document.querySelectorAll('#rpeRow button').forEach(b => { b.style.background = ''; b.style.color = ''; });
  document.getElementById('rpeHint').textContent = 'how hard?';
  const showPlate = ws.equipment === 'gym' && !ex.isBW;
  document.getElementById('plateCalcBtn').style.display = showPlate ? 'block' : 'none';
  document.getElementById('plateCalcOut').style.display = 'none';

  // Initialise numpad with defaults
  numpadValues = { weight: defaultWeight, reps: defaultReps };
  numpadActiveField = 'weight';
  updateNumpadDisplay();

  // Sync hidden inputs
  document.getElementById('setWeight').value = defaultWeight || 0;
  document.getElementById('setReps').value   = defaultReps   || 0;

  // Set correct border and step labels
  selectNumpadField('weight');

  // Warmup toggle
  const wb = document.getElementById('warmupBox');
  const wt = document.getElementById('warmupToggle');
  if (isWarmup) {
    wt.classList.add('checked'); wb.innerHTML = '✓';
    wb.style.cssText = 'background:var(--amber);border-color:var(--amber);font-size:12px;color:#000;font-weight:700;display:flex;align-items:center;justify-content:center';
  } else {
    wt.classList.remove('checked'); wb.innerHTML = ''; wb.style.cssText = '';
  }

  document.getElementById('setModal').classList.add('open');
}

function formatRestTime(sec) {
  if (sec >= 60) return Math.floor(sec/60) + (sec%60 ? ':' + String(sec%60).padStart(2,'0') : '') + ' min';
  return sec + 's';
}

function toggleWarmup() {
  const wt = document.getElementById('warmupToggle');
  const wb = document.getElementById('warmupBox');
  const isNowWarmup = !wt.classList.contains('checked');
  if (isNowWarmup) { wt.classList.add('checked'); wb.innerHTML = '✓'; wb.style.cssText = 'background:var(--amber);border-color:var(--amber);font-size:12px;color:#000;font-weight:700;display:flex;align-items:center;justify-content:center'; }
  else             { wt.classList.remove('checked'); wb.innerHTML = ''; wb.style.cssText = ''; }
  if (ws.pendingSet) ws.exercises[ws.pendingSet.ei].sets[ws.pendingSet.si].warmup = isNowWarmup;
}

function closeSetModalIfBg(e) {
  // Only close if tapping the dark overlay itself, not any child element
  if (e.target === document.getElementById('setModal')) {
    if (confirm('Discard this set?')) {
      document.getElementById('setModal').classList.remove('open');
    }
  }
}

function confirmSet() {
  const { ei, si } = ws.pendingSet;
  const weight = parseFloat(document.getElementById('setWeight').value) || 0;
  const reps   = parseInt(document.getElementById('setReps').value)   || 0;
  const warmup = document.getElementById('warmupToggle').classList.contains('checked');
  const rpe    = parseFloat(document.getElementById('setRpe').value) || null;

  if (reps === 0) { showToast('Enter reps'); return; }

  ws.exercises[ei].sets[si] = { warmup, weight, reps, logged: true, rpe };
  document.getElementById('setModal').classList.remove('open');

  const restSec = warmup ? Math.round((ws.exercises[ei].restSeconds || 90) * 0.5) : (ws.exercises[ei].restSeconds || 90);
  startRestTimer(restSec);

  // Patch only the changed row — never touches scroll position
  patchActiveWorkout(ei, si);
}

function confirmAbortWorkout() {
  if (confirm('Abort this workout? Your progress will be lost.')) abortWorkout();
}

function abortWorkout() {
  clearInterval(ws.timerInterval);
  clearInterval(ws.restInterval);
  if (ws.wakeLock) { ws.wakeLock.release(); ws.wakeLock = null; }
  ws.active = false;
  updateWakeIndicator();
  document.getElementById('activeWorkoutOverlay').style.display = 'none';
  document.body.style.overflow = '';
}

function finishWorkout() {
  clearInterval(ws.timerInterval);
  clearInterval(ws.restInterval);
  if (ws.wakeLock) { ws.wakeLock.release(); ws.wakeLock = null; }
  updateWakeIndicator();

  const durationSec = Math.floor((Date.now() - ws.startTime) / 1000);
  const allSets     = ws.exercises.flatMap(ex => ex.sets.filter(s => s.logged));
  const workingSets = allSets.filter(s => !s.warmup);
  const warmupSets  = allSets.filter(s => s.warmup);

  // Top lifts: best set per exercise (highest weight × reps volume)
  const topLifts = ws.exercises.map(ex => {
    const logged = ex.sets.filter(s => s.logged && !s.warmup);
    if (!logged.length) return null;
    const best = logged.reduce((a, b) => (a.weight * a.reps >= b.weight * b.reps ? a : b));
    return { name: ex.name, weight: best.weight, reps: best.reps };
  }).filter(Boolean);

  // exercises_json for history
  const exercisesJson = {};
  ws.exercises.forEach(ex => {
    const logged = ex.sets.filter(s => s.logged && !s.warmup);
    if (!logged.length) return;
    const best = logged.reduce((a, b) => (a.weight * a.reps >= b.weight * b.reps ? a : b));
    exercisesJson[ex.name] = {
      sets: logged.map(s => ({ weight: s.weight, reps: s.reps, rpe: s.rpe || undefined })),
      best_weight: best.weight,
      best_reps:   best.reps,
      best_e1rm:   Math.round(logged.reduce((mx, s) => Math.max(mx, e1rm(s.weight, s.reps)), 0) * 10) / 10,
      volume:      logged.reduce((a, s) => a + s.weight * s.reps, 0),
      avg_rpe:     (() => { const r = logged.map(s => s.rpe).filter(Boolean); return r.length ? Math.round(r.reduce((a, b) => a + b, 0) / r.length * 10) / 10 : undefined; })(),
    };
  });

  const sessionDate = new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(ws.startTime));
  const prs = detectPRs(sessionDate, exercisesJson);

  const m = Math.floor(durationSec / 60);
  const s = durationSec % 60;

  // Build summary HTML
  const summaryHtml = `
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:16px;text-align:center;">
      <div class="metric-card">
        <div class="metric-label">Duration</div>
        <div style="font-family:var(--font-mono);font-size:20px;font-weight:500">${m}:${String(s).padStart(2,'0')}</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Working sets</div>
        <div style="font-family:var(--font-mono);font-size:20px;font-weight:500">${workingSets.length}</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Total volume</div>
        <div style="font-family:var(--font-mono);font-size:14px;font-weight:500">${Math.round(workingSets.reduce((a,s)=>a+s.weight*s.reps,0))}kg</div>
      </div>
    </div>
    ${prs.length ? `
    <div style="background:rgba(127,255,110,0.08);border:1px solid rgba(127,255,110,0.25);border-radius:12px;padding:12px 14px;margin-bottom:14px">
      <div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">${prs.length} personal record${prs.length !== 1 ? 's' : ''}!</div>
      ${prs.map(p => `<div style="font-size:12px;color:var(--text2)">${esc(p.exercise)} — ${p.type === 'reps' ? p.value + ' reps' : p.type === 'e1rm' ? p.value + 'kg e1RM' : p.value + 'kg'} <span style="color:var(--text3)">(was ${p.prev})</span></div>`).join('')}
    </div>` : ''}
    <div class="card-title" style="margin-bottom:10px">Top Lifts</div>
    ${topLifts.map(t => {
      const ej = exercisesJson[t.name] || {};
      return `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
        <span style="font-size:14px;color:var(--text2)">${t.name}</span>
        <span style="font-family:var(--font-mono);font-size:14px;font-weight:500">${t.weight > 0 ? t.weight + 'kg' : 'BW'} × ${t.reps}${ej.best_e1rm ? ` · ${ej.best_e1rm}kg e1RM` : ''}</span>
      </div>`;
    }).join('')}
  `;

  document.getElementById('workoutSummaryContent').innerHTML = summaryHtml;
  ws.pendingPRs = prs;

  // Store pending save data
  ws.pendingSave = {
    id:             'w_' + crypto.randomUUID(),
    date:           new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(ws.startTime)),
    started_at: new Date(ws.startTime).toISOString(),
    myday_activity_id: ws.mydayActivity || undefined,
    ended_at: new Date(ws.startTime + durationSec * 1000).toISOString(),
    day_name:       ws.dayName,
    day_id:         ws.dayNum,
    equipment_type: ws.equipment,
    duration_sec:   durationSec,
    working_sets:   workingSets.length,
    warmup_sets:    warmupSets.length,
    top_lifts:      topLifts.map(t => `${t.name} ${t.weight}kg×${t.reps}`).join(', '),
    exercises_json: exercisesJson,
    notes_json:     {},
    cardio:         ws.cardio || undefined,
    source:         'app',
  };

  document.getElementById('activeWorkoutOverlay').style.display = 'none';
  const notesInit = document.getElementById('workoutNotesInput'); if (notesInit) notesInit.value = '';
  document.getElementById('workoutSummaryModal').classList.add('open');
}

function discardWorkout() {
  ws.active = false;
  document.getElementById('workoutSummaryModal').classList.remove('open');
  document.body.style.overflow = '';
  showToast('Workout discarded');
}

async function saveWorkout() {
  const data = ws.pendingSave;
  if (!data) return;
  const notesEl = document.getElementById('workoutNotesInput');
  data.notes_json = { text: ((notesEl && notesEl.value) || '').trim() };

  // Save to localStorage history
  const history = getWorkoutHistory();
  if (!history.some(w => w.id === data.id)) history.unshift(data);
  localStorage.setItem('hai_workout_history', JSON.stringify(history.slice(0, 300)));

  GymCalendar.enqueue(data);
  GymCalendar.flush();

  // Persist any personal records set this session
  if (ws.pendingPRs && ws.pendingPRs.length) {
    savePRs(getPRs().concat(ws.pendingPRs));
    ws.pendingPRs = null;
  }

  // Save to Google Sheet (id-based upsert, queued + retried if offline)
  if (state.settings.scriptUrl) {
    upsertRows('workouts', [{
      id: data.id, date: data.date, day_name: data.day_name, day_id: data.day_id,
      equipment_type: data.equipment_type, duration_sec: data.duration_sec,
      working_sets: data.working_sets, warmup_sets: data.warmup_sets,
      top_lifts: data.top_lifts, exercises_json: data.exercises_json,
      notes_json: data.notes_json || {}, source: 'app',
    }]);
  }

  ws.active = false;
  ws.pendingSave = null;
  document.getElementById('workoutSummaryModal').classList.remove('open');
  document.body.style.overflow = '';
  showToast('Workout saved. Calendar sync status is in Settings.');
  renderWorkoutDays();

  }

// Calendar receives session title and real timestamps only, never exercises, notes or PRs.
const GymCalendar = (() => {
 const configKey='gym.calendar.config', queueKey='gym.calendar.queue';let busy=false;
 const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)||'null')||fallback}catch{return fallback}};
 const config=()=>read(configKey,{}),queue=()=>read(queueKey,[]);
 function line(text){const el=document.getElementById('gymCalendarStatus');if(el)el.textContent=text;}
 function refresh(){const c=config(),q=queue();line((c.url&&c.key?'Calendar configured. ':'Calendar not connected. ')+q.length+' workout(s) awaiting sync.');review();}
 function enqueue(w){if(!w.started_at||!w.ended_at)return;const q=queue();if(!q.some(x=>x.sourceId===w.id)){q.push({source:'gym',sourceId:w.id,title:w.day_name||'Workout',start:w.started_at,end:w.ended_at,...(w.myday_activity_id?{activityId:w.myday_activity_id}:{})});localStorage.setItem(queueKey,JSON.stringify(q));}refresh();}
 async function flush(){
  if(busy)return;const c=config();if(!c.url||!c.key){refresh();return}busy=true;
  try{for(const item of queue()){
   if(item.candidates?.length)continue;
   const res=await fetch(c.url+'/api/calendar/complete',{method:'POST',headers:{'Content-Type':'application/json','X-App-Key':c.key},body:JSON.stringify(item)});
   const data=await res.json();if(!res.ok)throw Error(data.error||'Calendar save failed');
   if(data.needsReview){localStorage.setItem(queueKey,JSON.stringify(queue().map(x=>x.sourceId===item.sourceId?{...x,candidates:data.candidates}:x)));refresh();continue;}
   if(!data.event?.id&&!data.canceled)throw Error('Calendar did not confirm this workout');
   const history=getWorkoutHistory(),w=history.find(w=>w.id===item.sourceId);if(w){w.calendar=data.canceled?{status:'canceled',eventId:data.eventId}:{status:data.moved?'moved':'synced',eventId:data.event.id,link:data.event.link};localStorage.setItem('hai_workout_history',JSON.stringify(history));}
   localStorage.setItem(queueKey,JSON.stringify(queue().filter(x=>x.sourceId!==item.sourceId)));
  }refresh();}catch(e){line('Calendar pending: '+e.message+'. Saved workouts stay on this device.');}finally{busy=false;}
 }
 function review(){const box=document.getElementById('gymCalendarReview');if(!box)return;box.replaceChildren();for(const item of queue().filter(x=>x.candidates?.length)){const p=document.createElement('p');p.textContent='This workout overlaps an existing Gym entry. Link it, or confirm this is a separate workout.';box.appendChild(p);for(const ev of item.candidates){const b=document.createElement('button');b.className='btn btn-secondary btn-sm';b.textContent='Use '+ev.title+' · '+new Date(ev.start).toLocaleString();b.onclick=()=>choose(item.sourceId,ev.id);box.appendChild(b);}const separate=document.createElement('button');separate.className='btn btn-secondary btn-sm';separate.textContent='This is a separate workout';separate.onclick=()=>choose(item.sourceId,null);box.appendChild(separate);}}
 function choose(id,eventId){localStorage.setItem(queueKey,JSON.stringify(queue().map(x=>{if(x.sourceId!==id)return x;const n={...x};delete n.candidates;if(eventId)n.linkEventId=eventId;else n.allowSeparate=true;return n})));refresh();flush();}
 function showCheck(){let el=document.getElementById('gymCalendarCheck');if(!el){el=document.createElement('div');el.className='settings-status';el.id='gymCalendarCheck';document.getElementById('gymCalendarStatus').after(el)}const saved=read('gym.calendar.check',{});el.textContent=saved.text||'Connection not checked yet. A saved configuration is not a verified Google connection.';}
 function checkLine(text){localStorage.setItem('gym.calendar.check',JSON.stringify({text,at:Date.now()}));showCheck();}
 async function check(){
  const c=config();if(!c.url||!c.key){checkLine('Not connected in this browser. Open the connected MyDay page, then Sports > Connect Gym calendar. Do not clear Gym data.');return}
  checkLine('Checking saved connection with Google Calendar...');
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
  try{const from=new Date().toISOString(),to=new Date(Date.now()+1000).toISOString();
   const res=await fetch(c.url+'/api/calendar?'+new URLSearchParams({from,to}),{headers:{'X-App-Key':c.key},signal:controller.signal});const data=await res.json();
   if(!res.ok)throw Error(data.error||'Calendar check failed ('+res.status+')');
   if(!Array.isArray(data.events)||!Array.isArray(data.calendars)||!data.calendars.length||data.errors?.length)throw Error('Calendar access was incomplete. Check Google Calendar in MyDay Settings.');
   checkLine('Google Calendar read access verified at '+new Date().toLocaleString()+'. No event created. Saving a future completed workout will confirm write access.');
  }catch(e){checkLine('Connection not verified: '+(e.name==='AbortError'?'check timed out. Keep both pages online and try Check connection again':e.message)+'. Your saved workouts and connection details were kept.');}finally{clearTimeout(timer)}
 }
 function open(){const c=config();document.getElementById('gymCalendarUrl').value=c.url||'';document.getElementById('gymCalendarKey').value=c.key||'';refresh();let b=document.getElementById('gymCalendarCheckButton');if(!b){b=document.createElement('button');b.id='gymCalendarCheckButton';b.className='btn btn-secondary btn-sm';b.textContent='Check connection';b.onclick=check;document.getElementById('gymCalendarStatus').before(b)}showCheck();}
 function save(){const url=document.getElementById('gymCalendarUrl').value.trim().replace(/\/+$/,''),key=document.getElementById('gymCalendarKey').value.trim();try{const u=new URL(url);if(u.protocol!=='https:'||u.username||u.password||u.search||u.hash)throw Error();}catch{return line('Use the HTTPS Worker address from MyDay Settings.');}localStorage.setItem(configKey,JSON.stringify({url,key}));checkLine('Configuration saved. Use Check connection to verify Google Calendar access.');refresh();flush();}
 const pairingUrl=new URL(location.href),pairing=pairingUrl.searchParams.get('connectCalendar')==='1',pairingUntil=Date.now()+120000;
 if(pairing){
  pairingUrl.searchParams.delete('connectCalendar');window.history.replaceState(null,'',pairingUrl.toString());
  let received=false;
  const accept=async e=>{
   if(received||Date.now()>pairingUntil||e.origin!=='https://mydayappmh.github.io'||e.source!==window.opener||e.data?.type!=='myday-calendar-connect')return;
   const {url,key}=e.data;
   if(url!=='https://calorie-tracker.matthias-homan.workers.dev'||typeof key!=='string'||!key||key.length>1000)return;
   received=true;window.removeEventListener('message',accept);
   localStorage.setItem(configKey,JSON.stringify({url,key}));
   window.opener.postMessage({type:'gym-calendar-connect-saved'},'https://mydayappmh.github.io');
   checkLine('Connection received from MyDay. Checking Google Calendar access...');
   const note=document.createElement('p');note.className='settings-status';note.textContent='Connection details received from MyDay. Open Gym Settings > Check connection to verify access. Old history is not backfilled.';note.style.cssText='padding:16px;background:var(--surface);position:relative;z-index:2';document.body.prepend(note);refresh();check();flush();
  };
  window.addEventListener('message',accept);
  if(window.opener){window.opener.postMessage({type:'gym-calendar-connect-request'},'https://mydayappmh.github.io');setTimeout(()=>{if(!received)checkLine('Connection not received from MyDay. Use both pages in the same Chrome browser. Open the MyDay page that already shows your meetings, then Sports > Connect Gym calendar. Your Gym data has not changed.')},15000);}
  else setTimeout(()=>{checkLine('No connection received: Gym opened without its MyDay tab. Use both pages in the same Chrome browser. Existing workout data and connection details are unchanged.');const note=document.createElement('p');note.textContent='Open MyDay in Chrome, Sports, then Connect Gym calendar. If the app opens separately, use Calendar in Gym Settings instead.';note.style.padding='16px';document.body.prepend(note)},0);
 }
 window.addEventListener('online',flush);document.addEventListener('visibilitychange',()=>{if(!document.hidden)flush()});setTimeout(flush,0);
 return {enqueue,flush,open,save,refresh,check};
})();

function getWorkoutHistory() {
  return JSON.parse(localStorage.getItem('hai_workout_history') || '[]');
}

function renderWorkoutHistory() {
  const el      = document.getElementById('workoutHistoryList');
  const history = getWorkoutHistory();
  if (!history.length) {
    el.innerHTML = `<div class="empty"><div class="empty-icon">≡</div><div class="empty-text">No workouts logged yet.<br>Complete a session to see it here.</div></div>`;
    return;
  }
  el.innerHTML = history.map((w, i) => {
    const m = Math.floor((w.duration_sec||0) / 60);
      return `
      <div class="workout-hist-card" onclick="openWorkoutDetail(${i})">
        <div class="workout-hist-icon">${esc((w.day_name || 'W').slice(0, 1))}</div>
        <div class="workout-hist-info">
          <div class="workout-hist-name">Day ${w.day_id} — ${w.day_name}</div>
          <div class="workout-hist-meta">${w.date} · ${w.equipment_type}</div>
          <div class="workout-hist-meta" style="margin-top:2px;color:var(--text3);font-size:11px">${(w.top_lifts||'').split(', ').slice(0,2).join(' · ')}</div>
        </div>
        <div class="workout-hist-stats">
          <div class="workout-hist-sets">${w.working_sets} set${w.working_sets === 1 ? '' : 's'}</div>
          <div class="workout-hist-dur">${m}min</div>
        </div>
      </div>
    `;
  }).join('');
}

function openWorkoutDetail(i) {
  const w = getWorkoutHistory()[i];
  if (!w) return;
  const m = Math.floor((w.duration_sec||0) / 60);
  const s = (w.duration_sec||0) % 60;
  const exJson = w.exercises_json || {};

  document.getElementById('workoutDetailContent').innerHTML = `
    <div class="modal-title">Day ${w.day_id} — ${w.day_name}</div>
    <div style="font-size:13px;color:var(--text3);margin-bottom:16px">${w.date} · ${w.equipment_type}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:16px;text-align:center">
      <div class="metric-card"><div class="metric-label">Duration</div><div style="font-family:var(--font-mono);font-size:18px">${m}:${String(s).padStart(2,'0')}</div></div>
      <div class="metric-card"><div class="metric-label">Sets</div><div style="font-family:var(--font-mono);font-size:18px">${w.working_sets}</div></div>
      <div class="metric-card"><div class="metric-label">Warmups</div><div style="font-family:var(--font-mono);font-size:18px">${w.warmup_sets||0}</div></div>
    </div>
    <div class="card-title" style="margin-bottom:10px">Exercises</div>
    ${Object.entries(exJson).map(([name, data]) => `
      <div style="margin-bottom:12px;">
        <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:6px">${name}</div>
        ${(data.sets||[]).map((s,i) => `
          <div style="display:flex;gap:10px;font-family:var(--font-mono);font-size:12px;color:var(--text2);padding:4px 0">
            <span style="color:var(--text3)">Set ${i+1}</span>
            <span>${s.weight > 0 ? s.weight+'kg' : 'BW'} × ${s.reps} reps</span>
            <span style="color:var(--text3);margin-left:auto">${Math.round(s.weight*s.reps)}kg vol</span>
          </div>
        `).join('')}
        <div style="font-size:11px;color:var(--accent);margin-top:4px">Best: ${data.best_weight > 0 ? data.best_weight+'kg' : 'BW'} × ${data.best_reps}</div>
      </div>
    `).join('')}
  `;
  document.getElementById('workoutDetailModal').classList.add('open');
}

function renderProgressExerciseList() {
  const sel   = document.getElementById('progressExerciseSelect');
  const planned = WORKOUT_DAYS.flatMap(d => Object.values(d.exercises).flat().map(ex => ex.name));
  const logged  = getWorkoutHistory().flatMap(w => Object.keys(w.exercises_json || {}));
  const allEx = [...new Set([...planned, ...logged])].sort();
  const cur = sel.value;
  sel.innerHTML = '<option value="">Select an exercise…</option>' +
    allEx.map(name => `<option value="${esc(name)}">${esc(name)}</option>`).join('');
  if (cur) sel.value = cur;
}

function renderExerciseProgress() {
  const name = document.getElementById('progressExerciseSelect').value;
  const el   = document.getElementById('exerciseProgressChart');
  if (!name) { el.innerHTML = '<div class="empty"><div class="empty-text">Select an exercise.</div></div>'; return; }

  const series = exerciseSeries(name).slice(-14);
  if (!series.length) { el.innerHTML = `<div class="empty"><div class="empty-text">No data yet for ${esc(name)}.</div></div>`; return; }

  const bw = series.every(p => p.weight === 0);
  const val = p => bw ? p.reps : (p.e1rm || p.weight);
  const unit = bw ? ' reps' : 'kg';
  const maxV = Math.max(...series.map(val));
  const bestIdx = series.reduce((bi, p, i) => val(p) > val(series[bi]) ? i : bi, 0);
  const best = series[bestIdx];
  const dl = deloadStatus(name);

  el.innerHTML = `
    <div style="font-size:12px;color:var(--text3);margin-bottom:8px">
      ${bw ? 'Best' : 'Best e1RM'}: <span style="color:var(--accent);font-family:var(--font-mono)">${Math.round(val(best))}${unit}</span>
      · ${series.length} sessions${dl ? ` · <span style="color:var(--amber)">! ${dl.reason}</span>` : ''}
    </div>
    <div class="prog-chart-wrap"><div class="prog-chart">
      ${series.map((p, i) => {
        const h = Math.max(8, Math.round((val(p) / maxV) * 80));
        const label = bw ? `${p.reps}` : `${Math.round(val(p))}`;
        const tip = `${p.date}: ${p.weight > 0 ? p.weight + 'kg' : 'BW'} × ${p.reps}${p.rpe ? ' @RPE' + p.rpe : ''}${bw ? '' : ' · e1RM ' + Math.round(p.e1rm)}`;
        return `<div class="prog-bar-col">
          <div class="prog-bar-val">${label}</div>
          <div class="prog-bar ${i === bestIdx ? 'best' : ''}" style="height:${h}px" title="${tip}"></div>
          <div class="prog-bar-label">${p.date.slice(5)}</div>
        </div>`;
      }).join('')}
    </div></div>
    <div style="font-size:10px;color:var(--text3);margin-top:6px;font-family:var(--font-mono)">${bw ? 'bodyweight — tracking best reps' : 'estimated 1-rep max (Epley)'}</div>
  `;
}

function relativeDate(dateStr) {
  const d    = new Date(dateStr);
  const now  = new Date();
  const days = Math.floor((now - d) / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7)  return `${days}d ago`;
  if (days < 30) return `${Math.floor(days/7)}w ago`;
  return `${Math.floor(days/30)}mo ago`;
}


// ══════════════════════════════════════════════════════════════════════
//  PROGRAMME EDITOR
// ══════════════════════════════════════════════════════════════════════
const EQUIP_TYPES  = ['gym', 'bodyweight', 'hotel', 'bands'];
const EQUIP_LABELS = { gym: 'Gym', bodyweight: 'Bodyweight', hotel: 'Hotel', bands: 'Bands / TRX' };
let progDraft = null;
let progDirty = false;

function attr(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

function progBegin() {
  if (!progDraft) { progDraft = clone(WORKOUT_DAYS); progDirty = false; }
}
function progSet(di, field, value) { progDraft[di][field] = value; progDirty = true; }
function progSetEx(di, eq, ei, field, value) {
  const ex = progDraft[di].exercises[eq][ei];
  if (field === 'sets' || field === 'rest') value = parseInt(value) || 0;
  ex[field] = value;
  progDirty = true;
}
function progSetEq(di, eq) { progDraft[di]._editEq = eq; progRender(); }
function progAddDay() {
  const maxNum = progDraft.reduce((m, d) => Math.max(m, d.num), 0);
  progDraft.push({ num: maxNum + 1, name: 'New day', sub: 'Custom',
                   exercises: { gym: [], bodyweight: [], hotel: [], bands: [] } });
  progDirty = true; progRender();
}
function progDeleteDay(di) {
  if (progDraft.length <= 1) { showToast('Keep at least one day'); return; }
  const d = progDraft[di];
  if (!confirm('Delete Day ' + d.num + ' (' + d.name + ')? Logged history stays in History.')) return;
  progDraft.splice(di, 1); progDirty = true; progRender();
}
function progMoveDay(di, dir) {
  const j = di + dir;
  if (j < 0 || j >= progDraft.length) return;
  const t = progDraft[di]; progDraft[di] = progDraft[j]; progDraft[j] = t;
  progDirty = true; progRender();
}
function progAddEx(di, eq) {
  progDraft[di].exercises[eq].push({ name: 'New exercise', sets: 3, reps: '8–10', rest: 90, category: 'BLS' });
  progDirty = true; progRender();
}
function progDeleteEx(di, eq, ei) { progDraft[di].exercises[eq].splice(ei, 1); progDirty = true; progRender(); }
function progMoveEx(di, eq, ei, dir) {
  const arr = progDraft[di].exercises[eq];
  const j = ei + dir;
  if (j < 0 || j >= arr.length) return;
  const t = arr[ei]; arr[ei] = arr[j]; arr[j] = t;
  progDirty = true; progRender();
}
function progSave() {
  for (const d of progDraft) {
    if (!String(d.name || '').trim()) { showToast('Every day needs a name'); return; }
    EQUIP_TYPES.forEach(eq => { if (!Array.isArray(d.exercises[eq])) d.exercises[eq] = []; });
    if (EQUIP_TYPES.every(eq => !d.exercises[eq].length)) { showToast('Day ' + d.num + ' (' + d.name + ') has no exercises'); return; }
    for (const eq of EQUIP_TYPES) for (const ex of d.exercises[eq]) {
      if (!String(ex.name || '').trim()) { showToast('Every exercise needs a name'); return; }
      ex.sets = Math.min(20, Math.max(1, parseInt(ex.sets) || 3));
      ex.rest = Math.min(900, Math.max(0, parseInt(ex.rest) || 0));
      ex.reps = String(ex.reps || '8–10');
      ex.category = ex.category === 'SPORT' ? 'SPORT' : 'BLS';
    }
    delete d._editEq;
  }
  WORKOUT_DAYS = clone(progDraft);
  localStorage.setItem('gym_programme', JSON.stringify(WORKOUT_DAYS));
  EXERCISE_INDEX = null;
  progDraft = null; progDirty = false;
  renderWorkoutDays();
  renderProgressExerciseList();
  updateWorkoutSub();
  showToast('✓ Programme saved');
  switchWorkoutTab('plan', document.querySelector('#sec-workouts .food-tab'));
}
function progResetDefault() {
  if (!confirm('Reset to the default 5-day BLS programme? Your custom programme is removed (history stays).')) return;
  localStorage.removeItem('gym_programme');
  progDraft = clone(DEFAULT_PROGRAMME);
  progDirty = true;
  progRender();
}
function progDiscard() {
  progDraft = null; progDirty = false;
  switchWorkoutTab('plan', document.querySelector('#sec-workouts .food-tab'));
}

function progRender() {
  const el = document.getElementById('progEditor');
  el.innerHTML = `
  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
      <div class="card-title" style="margin:0">Edit programme</div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-secondary btn-sm" onclick="progDiscard()">Cancel</button>
        <button class="btn btn-primary btn-sm" onclick="progSave()">Save</button>
      </div>
    </div>
    <div style="font-size:11px;color:var(--text3);margin-top:6px">Changes apply to the Plan tab and future sessions. History and PRs are untouched. Renaming an exercise starts a new progress line — past entries stay under the old name.</div>
  </div>
  ${progDraft.map((d, di) => {
    const eq = d._editEq || 'gym';
    const exs = d.exercises[eq] || [];
    return `<div class="card">
      <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px">
        <input class="form-input" style="flex:1;font-weight:600" value="${attr(d.name)}" oninput="progSet(${di},'name',this.value)" placeholder="Day name">
        <button class="pe-icon" onclick="progMoveDay(${di},-1)">↑</button>
        <button class="pe-icon" onclick="progMoveDay(${di},1)">↓</button>
        <button class="pe-icon" onclick="progDeleteDay(${di})">✕</button>
      </div>
      <input class="form-input" style="margin-bottom:6px;font-size:12px" value="${attr(d.sub || '')}" oninput="progSet(${di},'sub',this.value)" placeholder="Subtitle (e.g. BLS Strength + Core)">
      <div style="font-family:var(--font-mono);font-size:10px;color:var(--text3);margin-bottom:6px">Day ${d.num} · exercises for:</div>
      <select class="form-select" style="margin-bottom:8px" onchange="progSetEq(${di},this.value)">
        ${EQUIP_TYPES.map(e => `<option value="${e}" ${e === eq ? 'selected' : ''}>${EQUIP_LABELS[e]}</option>`).join('')}
      </select>
      ${exs.map((ex, ei) => `
        <div class="pe-row">
          <div class="pe-line1">
            <button class="pe-icon" onclick="progMoveEx(${di},'${eq}',${ei},-1)">↑</button>
            <button class="pe-icon" onclick="progMoveEx(${di},'${eq}',${ei},1)">↓</button>
            <input class="form-input pe-name" value="${attr(ex.name)}" oninput="progSetEx(${di},'${eq}',${ei},'name',this.value)">
            <button class="pe-icon" onclick="progDeleteEx(${di},'${eq}',${ei})">✕</button>
          </div>
          <div class="pe-grid pe-grid-lab"><span>sets</span><span>reps</span><span>rest s</span><span>type</span></div>
          <div class="pe-grid">
            <input class="form-input" type="number" min="1" max="20" value="${ex.sets}" oninput="progSetEx(${di},'${eq}',${ei},'sets',this.value)">
            <input class="form-input" value="${attr(ex.reps)}" oninput="progSetEx(${di},'${eq}',${ei},'reps',this.value)">
            <input class="form-input" type="number" min="0" max="900" step="15" value="${ex.rest}" oninput="progSetEx(${di},'${eq}',${ei},'rest',this.value)">
            <select class="form-select" onchange="progSetEx(${di},'${eq}',${ei},'category',this.value)">
              <option ${ex.category !== 'SPORT' ? 'selected' : ''}>BLS</option>
              <option ${ex.category === 'SPORT' ? 'selected' : ''}>SPORT</option>
            </select>
          </div>
        </div>`).join('')}
      <button class="btn btn-secondary btn-sm" style="margin-top:6px" onclick="progAddEx(${di},'${eq}')">＋ Add exercise (${EQUIP_LABELS[eq]})</button>
    </div>`;
  }).join('')}
  <button class="btn btn-secondary" onclick="progAddDay()">＋ Add day</button>
  <div style="height:8px"></div>
  <button class="btn btn-secondary" style="color:var(--amber)" onclick="progResetDefault()">Reset to default BLS programme</button>
  `;
}



// ─── OVERRIDES ───
function switchWorkoutTab(tab, el) {
  document.querySelectorAll('#sec-workouts .food-tab').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('wTabPlan').style.display      = tab === 'plan'      ? 'block' : 'none';
  document.getElementById('wTabProgramme').style.display = tab === 'programme' ? 'block' : 'none';
  document.getElementById('wTabPhysio').style.display    = tab === 'physio'    ? 'block' : 'none';
  document.getElementById('wTabHistory').style.display   = tab === 'history'   ? 'block' : 'none';
  document.getElementById('wTabProgress').style.display  = tab === 'progress'  ? 'block' : 'none';
  if (tab === 'programme') { progBegin(); progRender(); }
  if (tab === 'physio')    renderPhysio();
  if (tab === 'history')   renderWorkoutHistory();
  if (tab === 'progress')  { renderProgressExerciseList(); renderPRCard(); renderVolumeCard(); renderDeloadCard(); }
}

function init() {
  loadSettings();
  renderDate();
  renderWorkoutDays();
  updateWorkoutSub();
  const b = document.getElementById('settBuild');
  if (b) b.textContent = BUILD_ID;
  if (state.settings.scriptUrl) syncNow();
  setInterval(refreshToday, 60000);
}
document.addEventListener('DOMContentLoaded', init);



// ══════════════════════════════════════════════════════════════════════
//  FEATURES v2 — history edit/delete, mid-workout swap/add, notes, cardio,
//  up-next, RPE-aware hints, physio list
// ══════════════════════════════════════════════════════════════════════

// ─── generic modal ───
let gymModalCb = null;
function openGymModal(title, bodyHtml, cb) {
  document.getElementById('gymModalTitle').textContent = title;
  document.getElementById('gymModalBody').innerHTML = bodyHtml;
  gymModalCb = cb;
  document.getElementById('gymModal').classList.add('open');
}
function closeGymModal() { document.getElementById('gymModal').classList.remove('open'); gymModalCb = null; }
function confirmGymModal() { const cb = gymModalCb; if (cb) cb(); }
function gmVal(id) { const el = document.getElementById(id); return el ? el.value.trim() : ''; }
function exNameDatalist() {
  return '<datalist id="exNameList">' + Object.keys(exerciseIndex()).sort().map(n => '<option value="' + attr(n) + '">').join('') + '</datalist>';
}

// ─── "Up next" card on the Plan tab ───
function renderUpNext() {
  const el = document.getElementById('upNextCard');
  if (!el) return;
  const history = getWorkoutHistory().slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
  if (!history.length || !WORKOUT_DAYS.length) { el.innerHTML = ''; return; }
  const lastNum = history[0].day_id;
  const idx = WORKOUT_DAYS.findIndex(d => d.num === lastNum);
  const next = idx === -1 ? WORKOUT_DAYS[0] : WORKOUT_DAYS[(idx + 1) % WORKOUT_DAYS.length];
  const last = history[0];
  el.innerHTML = `
    <div class="card" style="border-color:var(--accent)">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
        <div style="min-width:0">
          <div style="font-size:10px;font-family:var(--font-mono);text-transform:uppercase;letter-spacing:1px;color:var(--accent)">Up next</div>
          <div style="font-size:15px;font-weight:600;margin-top:3px">Day ${next.num} — ${esc(next.name)}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:1px">${esc(next.sub || '')} · last: ${esc(last.day_name || '')} ${esc(last.date || '')}</div>
        </div>
        <button class="btn btn-primary btn-sm" style="flex:none" onclick="selectWorkoutDay(${next.num})">Select</button>
      </div>
    </div>`;
}

// ─── mid-workout: swap / add exercise, cardio finisher, physio quick-log ───
function renderWorkoutExtras() {
  const physio = getPhysio();
  const today = physioToday();
  return `
    ${ws.cardio ? `
    <div class="aw-exercise-card">
      <div class="aw-exercise-header">
        <div class="aw-ex-num">C</div>
        <div style="flex:1;min-width:0">
          <div class="aw-ex-name">Cardio — ${esc(ws.cardio.activity)}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px;font-family:var(--font-mono)">${ws.cardio.minutes} min${ws.cardio.km ? ' · ' + ws.cardio.km + ' km' : ''}</div>
        </div>
        <button class="pe-icon" onclick="removeWorkoutCardio()">✕</button>
      </div>
    </div>` : ''}
    ${physio.length ? `
    <div class="aw-exercise-card">
      <div style="font-size:10px;font-family:var(--font-mono);text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin-bottom:6px">Physio</div>
      ${physio.map((p, i) => `
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:6px 0;${i ? 'border-top:1px solid var(--border)' : ''}">
          <div style="min-width:0"><div style="font-size:13px;font-weight:500">${esc(p.name)}</div><div style="font-size:11px;color:var(--text3)">${esc(p.dose || '')}</div></div>
          ${(p.log || []).includes(today) ? '<span style="font-size:11px;color:var(--accent);font-family:var(--font-mono);flex:none">✓ done</span>' : `<button class="btn btn-secondary btn-sm" style="flex:none" onclick="logPhysio(${i})">Log</button>`}
        </div>`).join('')}
    </div>` : ''}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px">
      <button class="btn btn-secondary" onclick="openAddExerciseModal()">+ Add exercise</button>
      <button class="btn btn-secondary" onclick="openCardioModal()">+ Cardio finisher</button>
    </div>`;
}
function openSwapModal(ei) {
  const cur = ws.exercises[ei];
  if (!cur) return;
  openExercisePicker('Swap ' + cur.name, name => {
    ws.exercises[ei].name = name;
    renderActiveWorkout();
    showToast('✓ Swapped to ' + name + ' — this session only');
  });
}
function openAddExerciseModal() {
  openExercisePicker('Add exercise', name => {
    const bw = isBodyweightExercise(name) || ws.equipment === 'bodyweight';
    const info = exerciseInfo(name);
    openGymModal('Add ' + name, `
      <div style="font-size:12px;color:var(--text3);margin-bottom:10px">Adds to this session only.</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div><div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">sets</div><input class="form-input" id="gmAddSets" type="number" value="3" min="1" max="10"></div>
        <div><div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">reps</div><input class="form-input" id="gmAddReps" value="${attr(info.targetReps || '8-10')}"></div>
        <div><div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">rest s</div><input class="form-input" id="gmAddRest" type="number" value="${info.rest || 90}" step="15"></div>
      </div>`, () => {
        const n = Math.min(10, Math.max(1, parseInt(gmVal('gmAddSets')) || 3));
        let prev = null;
        for (const w of getWorkoutHistory()) { const e = (w.exercises_json || {})[name]; if (e) { prev = e; break; } }
        const sets = Array.from({ length: n }, () => ({ warmup: false, weight: bw ? 0 : (prev ? prev.best_weight : ''), reps: prev ? prev.best_reps : '', logged: false }));
        ws.exercises.push({ name, sets, category: info.category || 'BLS', targetReps: gmVal('gmAddReps') || '8-10', restSeconds: parseInt(gmVal('gmAddRest')) || 90, isBW: bw });
        renderActiveWorkout();
        closeGymModal();
        showToast('✓ Exercise added');
      });
  });
}
function openCardioModal() {
  openGymModal('Cardio finisher', `
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
      <div><div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">activity</div><input class="form-input" id="gmCardioAct" value="Run"></div>
      <div><div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">minutes</div><input class="form-input" id="gmCardioMin" type="number" value="10" min="1"></div>
      <div><div style="font-size:10px;color:var(--text3);font-family:var(--font-mono)">km (opt)</div><input class="form-input" id="gmCardioKm" type="number" step="0.1" placeholder="—"></div>
    </div>`, () => {
      const act = gmVal('gmCardioAct') || 'Cardio';
      const min = parseInt(gmVal('gmCardioMin')) || 0;
      if (min <= 0) { showToast('Minutes required'); return; }
      const km = parseFloat(gmVal('gmCardioKm')) || undefined;
      ws.cardio = { activity: act, minutes: min, km };
      renderActiveWorkout();
      closeGymModal();
      showToast('✓ Cardio added');
    });
}
function removeWorkoutCardio() { ws.cardio = null; renderActiveWorkout(); }

// ─── exercise picker (catalog = the app's own programme/index data; no third-party content) ───
let pickerCb = null, pickerMuscle = null, pickerEquip = null;
function exerciseCatalog() {
  const idx = exerciseIndex();
  const equipMap = {};
  WORKOUT_DAYS.forEach(d => {
    ['gym', 'bodyweight', 'hotel', 'bands'].forEach(eq => {
      ((d.exercises || {})[eq] || []).forEach(ex => {
        if (!equipMap[ex.name]) equipMap[ex.name] = {};
        equipMap[ex.name][eq] = true;
      });
    });
  });
  return Object.keys(idx).sort().map(name => ({
    name,
    group: (idx[name] && idx[name].group) || 'Other',
    equip: Object.keys(equipMap[name] || { gym: true }),
  }));
}
function openExercisePicker(title, cb) {
  pickerCb = cb; pickerMuscle = null; pickerEquip = null;
  document.getElementById('pickerTitle').textContent = title;
  document.getElementById('pickerSearch').value = '';
  const cat = exerciseCatalog();
  const groups = ['All'].concat(Array.from(new Set(cat.map(e => e.group))).sort());
  document.getElementById('pickerMuscleChips').innerHTML = groups.map((g, i) =>
    `<div class="chip${i === 0 ? ' selected' : ''}" data-m="${attr(g)}" onclick="pickerSetMuscle(this)">${esc(g)}</div>`).join('');
  document.getElementById('pickerEquipChips').innerHTML = ['All', 'gym', 'bodyweight', 'hotel', 'bands'].map((e, i) =>
    `<div class="chip${i === 0 ? ' selected' : ''}" data-e="${e}" onclick="pickerSetEquip(this)">${e === 'All' ? 'Any equipment' : e}</div>`).join('');
  renderPickerList();
  document.getElementById('pickerModal').classList.add('open');
  setTimeout(() => { const s = document.getElementById('pickerSearch'); if (s) s.focus(); }, 60);
}
function pickerSetMuscle(el) {
  document.querySelectorAll('#pickerMuscleChips .chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  pickerMuscle = el.dataset.m === 'All' ? null : el.dataset.m;
  renderPickerList();
}
function pickerSetEquip(el) {
  document.querySelectorAll('#pickerEquipChips .chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  pickerEquip = el.dataset.e === 'All' ? null : el.dataset.e;
  renderPickerList();
}
function renderPickerList() {
  const q = (document.getElementById('pickerSearch').value || '').trim().toLowerCase();
  const cat = exerciseCatalog().filter(e =>
    (!q || e.name.toLowerCase().includes(q)) &&
    (!pickerMuscle || e.group === pickerMuscle) &&
    (!pickerEquip || e.equip.includes(pickerEquip)));
  const el = document.getElementById('pickerList');
  const customRow = q ? `<div class="pk-row" onclick="pickerCustom()" style="border-style:dashed"><div style="font-size:13px;color:var(--accent)">+ Use custom: ${esc(q)}</div></div>` : '';
  el.innerHTML = customRow + (cat.length ? cat.map((e, i) => `
    <div class="pk-row" onclick="pickerChoose(${i})">
      <div style="font-size:13px;font-weight:500">${esc(e.name)}</div>
      <div style="font-size:10px;color:var(--text3);font-family:var(--font-mono);margin-top:1px">${esc(e.group)} · ${e.equip.join(', ')}</div>
    </div>`).join('')
    : (q ? '' : '<div class="empty"><div class="empty-text">No exercises match.</div></div>'));
  el._cat = cat;
}
function pickerChoose(i) {
  const cat = document.getElementById('pickerList')._cat || [];
  const e = cat[i];
  if (!e) return;
  document.getElementById('pickerModal').classList.remove('open');
  const cb = pickerCb; pickerCb = null;
  if (cb) cb(e.name);
}
function pickerCustom() {
  const q = (document.getElementById('pickerSearch').value || '').trim();
  if (!q) { showToast('Type a name first'); return; }
  document.getElementById('pickerModal').classList.remove('open');
  const cb = pickerCb; pickerCb = null;
  cb(q);
}

// ─── history: detail with notes + cardio, edit sets, delete session ───
function openWorkoutDetail(i) {
  const w = getWorkoutHistory()[i];
  if (!w) return;
  const m = Math.floor((w.duration_sec||0) / 60);
  const s = (w.duration_sec||0) % 60;
  const exJson = w.exercises_json || {};
  document.getElementById('workoutDetailContent').innerHTML = `
    <div class="modal-title">Day ${w.day_id} — ${esc(w.day_name)}</div>
    <div style="font-size:13px;color:var(--text3);margin-bottom:16px">${w.date} · ${esc(w.equipment_type)}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:16px;text-align:center">
      <div class="metric-card"><div class="metric-label">Duration</div><div style="font-family:var(--font-mono);font-size:18px">${m}:${String(s).padStart(2,'0')}</div></div>
      <div class="metric-card"><div class="metric-label">Sets</div><div style="font-family:var(--font-mono);font-size:18px">${w.working_sets}</div></div>
      <div class="metric-card"><div class="metric-label">Warmups</div><div style="font-family:var(--font-mono);font-size:18px">${w.warmup_sets||0}</div></div>
    </div>
    <div class="card-title" style="margin-bottom:10px">Exercises</div>
    ${Object.entries(exJson).map(([name, data]) => `
      <div style="margin-bottom:12px;">
        <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:6px">${esc(name)}</div>
        ${(data.sets||[]).map((s,i) => `
          <div style="display:flex;gap:10px;font-family:var(--font-mono);font-size:12px;color:var(--text2);padding:4px 0">
            <span style="color:var(--text3)">Set ${i+1}</span>
            <span>${s.weight > 0 ? s.weight+'kg' : 'BW'} × ${s.reps} reps</span>
            <span style="color:var(--text3);margin-left:auto">${Math.round(s.weight*s.reps)}kg vol</span>
          </div>
        `).join('')}
        <div style="font-size:11px;color:var(--accent);margin-top:4px">Best: ${data.best_weight > 0 ? data.best_weight+'kg' : 'BW'} × ${data.best_reps}</div>
      </div>
    `).join('')}
    ${w.cardio ? `<div style="margin-top:6px;padding:10px;border:1px solid var(--border);border-radius:10px;font-size:12px;color:var(--text2)">Cardio: ${esc(w.cardio.activity)} — ${w.cardio.minutes} min${w.cardio.km ? ` · ${w.cardio.km} km` : ''}</div>` : ''}
    ${w.notes_json && w.notes_json.text ? `<div style="margin-top:10px;padding:10px;background:var(--surface2);border:1px solid var(--border);border-radius:10px;font-size:12px;color:var(--text2);white-space:pre-wrap;line-height:1.5">${esc(w.notes_json.text)}</div>` : ''}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px">
      <button class="btn btn-secondary" onclick="openSessionEditor(${i})">Edit sets</button>
      <button class="btn btn-secondary" style="color:#ff7b7b" onclick="deleteHistorySession(${i})">Delete session</button>
    </div>`;
  document.getElementById('workoutDetailModal').classList.add('open');
}
function openSessionEditor(i) {
  const w = getWorkoutHistory()[i];
  if (!w) return;
  const exJson = w.exercises_json || {};
  document.getElementById('workoutDetailContent').innerHTML = `
    <div class="modal-title">Edit session</div>
    <div style="font-size:12px;color:var(--text3);margin-bottom:14px;line-height:1.5">${esc(w.day_name)} · ${w.date} — correct weights or reps; PRs and progress update from the saved values.</div>
    ${Object.entries(exJson).map(([name, e], xi) => `
      <div style="margin-bottom:14px">
        <div style="font-size:13px;font-weight:600;margin-bottom:6px">${esc(name)}</div>
        ${(e.sets || []).map((s, si) => `
          <div style="display:flex;gap:8px;align-items:center;padding:3px 0">
            <span style="font-family:var(--font-mono);font-size:11px;color:var(--text3);width:30px">${si + 1}</span>
            <input class="form-input" style="width:82px" type="number" step="0.25" min="0" id="sew-${xi}-${si}" value="${s.weight || 0}">
            <span style="font-size:11px;color:var(--text3)">kg ×</span>
            <input class="form-input" style="width:64px" type="number" min="0" id="ser-${xi}-${si}" value="${s.reps || 0}">
            <span style="font-size:11px;color:var(--text3)">reps</span>
          </div>`).join('')}
      </div>`).join('')}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
      <button class="btn btn-secondary" onclick="openWorkoutDetail(${i})">Cancel</button>
      <button class="btn btn-primary" onclick="saveSessionEdits(${i})">Save</button>
    </div>`;
}
function saveSessionEdits(i) {
  const history = getWorkoutHistory();
  const w = history[i];
  if (!w) return;
  const names = Object.keys(w.exercises_json || {});
  names.forEach((name, xi) => {
    const e = w.exercises_json[name];
    (e.sets || []).forEach((s, si) => {
      const wEl = document.getElementById(`sew-${xi}-${si}`);
      const rEl = document.getElementById(`ser-${xi}-${si}`);
      if (wEl) s.weight = Math.max(0, parseFloat(wEl.value) || 0);
      if (rEl) s.reps = Math.max(0, parseInt(rEl.value) || 0);
    });
    recomputeExerciseStats(e);
  });
  let working = 0;
  const tops = [];
  names.forEach(name => {
    const e = w.exercises_json[name];
    const logged = (e.sets || []).filter(s => s.reps > 0);
    working += logged.length;
    if (logged.length) tops.push(`${name} ${e.best_weight}kg×${e.best_reps}`);
  });
  w.working_sets = working;
  w.top_lifts = tops.join(', ');
  localStorage.setItem('hai_workout_history', JSON.stringify(history));
  rebuildPRsFromHistory();
  renderWorkoutHistory();
  renderWorkoutDays();
  renderProgressExerciseList();
  openWorkoutDetail(i);
  showToast('✓ Session updated');
}
function recomputeExerciseStats(e) {
  const logged = (e.sets || []).filter(s => s.reps > 0);
  if (!logged.length) return;
  const best = logged.reduce((a, b) => (a.weight * a.reps >= b.weight * b.reps ? a : b));
  e.best_weight = best.weight;
  e.best_reps = best.reps;
  e.best_e1rm = Math.round(logged.reduce((mx, s) => Math.max(mx, e1rm(s.weight, s.reps)), 0) * 10) / 10;
  e.volume = logged.reduce((a, s) => a + s.weight * s.reps, 0);
  const rpes = logged.map(s => s.rpe).filter(Boolean);
  e.avg_rpe = rpes.length ? Math.round(rpes.reduce((a, b) => a + b, 0) / rpes.length * 10) / 10 : undefined;
}
function deleteHistorySession(i) {
  const history = getWorkoutHistory();
  const w = history[i];
  if (!w) return;
  if (!confirm('Delete the ' + (w.day_name || '') + ' session from ' + w.date + '? This cannot be undone.')) return;
  history.splice(i, 1);
  localStorage.setItem('hai_workout_history', JSON.stringify(history));
  rebuildPRsFromHistory();
  document.getElementById('workoutDetailModal').classList.remove('open');
  renderWorkoutHistory();
  renderWorkoutDays();
  renderProgressExerciseList();
  showToast('Session deleted');
}
// Rebuild the PR list by replaying history in date order — same rules as detectPRs,
// so edits/deletes and imports converge to the same PRs a fresh log would create.
function rebuildPRsFromHistory() {
  const hist = getWorkoutHistory().map((w, i) => ({ w, i })).sort((a, b) =>
    String(a.w.date).localeCompare(String(b.w.date)) || String(a.w.id || '').localeCompare(String(b.w.id || '')) || (b.i - a.i)
  ).map(x => x.w);
  const best = {};
  const prs = [];
  hist.forEach(w => {
    Object.entries(w.exercises_json || {}).forEach(([name, e]) => {
      const cur = best[name] || { e1: 0, reps: 0, weight: 0 };
      const bw = (e.best_weight || 0) === 0 && (e.sets || []).every(s => (s.weight || 0) === 0);
      if (bw) {
        if ((e.best_reps || 0) > cur.reps && cur.reps > 0) prs.push({ date: w.date, exercise: name, type: 'reps', value: e.best_reps, prev: cur.reps });
        cur.reps = Math.max(cur.reps, e.best_reps || 0);
      } else {
        const newE1 = entryE1rm(e);
        if (Math.round(newE1) > Math.round(cur.e1) && cur.e1 > 0) prs.push({ date: w.date, exercise: name, type: 'e1rm', value: Math.round(newE1), prev: Math.round(cur.e1) });
        else if ((e.best_weight || 0) > cur.weight && cur.weight > 0) prs.push({ date: w.date, exercise: name, type: 'weight', value: e.best_weight, prev: cur.weight });
        cur.e1 = Math.max(cur.e1, newE1); cur.weight = Math.max(cur.weight, e.best_weight || 0); cur.reps = Math.max(cur.reps, e.best_reps || 0);
      }
      best[name] = cur;
    });
  });
  savePRs(prs);
}

// ─── physio list (user data only — nothing prescribed or progressed by the app) ───
const PHYSIO_KEY = 'gym_physio';
function getPhysio() {
  const p = tryParse(localStorage.getItem(PHYSIO_KEY) || '[]', []);
  return Array.isArray(p) ? p : [];
}
function savePhysio(list) { localStorage.setItem(PHYSIO_KEY, JSON.stringify(list)); }
function physioToday() { return new Date().toISOString().split('T')[0]; }
function renderPhysio() {
  const el = document.getElementById('physioContent');
  if (!el) return;
  const list = getPhysio();
  const today = physioToday();
  el.innerHTML = `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
        <div class="card-title" style="margin:0">Physio exercises</div>
        <button class="btn btn-primary btn-sm" onclick="openPhysioModal(-1)">+ Add</button>
      </div>
      <div style="font-size:11px;color:var(--text3);margin-top:8px;line-height:1.5">Exactly as your physio prescribes them — instructions are kept as given and the app never changes or progresses them. Tap Log when you have done one, here or during a workout. This list lives on this device and in your JSON backups only.</div>
    </div>
    ${list.length ? list.map((p, i) => {
      const doneToday = (p.log || []).includes(today);
      const lastDone = (p.log || []).slice().sort().pop() || null;
      return `<div class="card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
          <div style="min-width:0">
            <div style="font-size:15px;font-weight:600">${esc(p.name)}</div>
            <div style="font-size:11px;color:var(--text3);margin-top:2px;font-family:var(--font-mono)">${esc(p.dose || '')}${p.frequency ? ' · ' + esc(p.frequency) : ''}</div>
          </div>
          <div style="display:flex;gap:6px;flex:none">
            <button class="pe-icon" onclick="openPhysioModal(${i})">✎</button>
            <button class="pe-icon" onclick="deletePhysio(${i})">✕</button>
          </div>
        </div>
        ${p.instructions ? `<div style="margin-top:8px;padding:10px;background:var(--surface2);border:1px solid var(--border);border-radius:10px;font-size:12px;color:var(--text2);white-space:pre-wrap;line-height:1.5">${esc(p.instructions)}</div>` : ''}
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;gap:8px">
          <div style="font-size:11px;color:var(--text3)">${lastDone ? 'Last done ' + lastDone : 'Not logged yet'}</div>
          ${doneToday
            ? '<span style="font-size:12px;color:var(--accent);font-family:var(--font-mono)">✓ done today</span>'
            : `<button class="btn btn-secondary btn-sm" style="flex:none" onclick="logPhysio(${i})">Log done</button>`}
        </div>
      </div>`;
    }).join('') : `<div class="empty"><div class="empty-icon">✚</div><div class="empty-text">Nothing here yet.<br>Add the exercises your physio gives you — name, dose and instructions as given.</div></div>`}
  `;
}
function openPhysioModal(i) {
  const list = getPhysio();
  const p = i >= 0 && list[i] ? list[i] : { name: '', dose: '', frequency: '', instructions: '' };
  openGymModal(i >= 0 ? 'Edit physio exercise' : 'Add physio exercise', `
    <input class="form-input" id="gmPhysioName" value="${attr(p.name)}" placeholder="Name (e.g. Glute bridge)" style="width:100%;margin-bottom:8px">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
      <input class="form-input" id="gmPhysioDose" value="${attr(p.dose || '')}" placeholder="Dose (e.g. 3 × 15)">
      <input class="form-input" id="gmPhysioFreq" value="${attr(p.frequency || '')}" placeholder="Frequency (e.g. daily)">
    </div>
    <textarea class="form-input" id="gmPhysioInstr" placeholder="Instructions exactly as your physio gave them" style="width:100%;min-height:90px;resize:vertical">${esc(p.instructions || '')}</textarea>`, () => {
      const name = gmVal('gmPhysioName');
      if (!name) { showToast('Name required'); return; }
      const instrEl = document.getElementById('gmPhysioInstr');
      const entry = { name, dose: gmVal('gmPhysioDose'), frequency: gmVal('gmPhysioFreq'), instructions: instrEl ? instrEl.value.trim() : '' };
      const cur = getPhysio();
      if (i >= 0 && cur[i]) { entry.log = cur[i].log || []; cur[i] = entry; }
      else { entry.log = []; cur.push(entry); }
      savePhysio(cur);
      renderPhysio();
      closeGymModal();
      showToast(i >= 0 ? '✓ Physio exercise updated' : '✓ Physio exercise added');
    });
}
function logPhysio(i) {
  const cur = getPhysio();
  if (!cur[i]) return;
  const today = physioToday();
  cur[i].log = cur[i].log || [];
  if (cur[i].log.includes(today)) { showToast('Already logged today'); return; }
  cur[i].log.push(today);
  savePhysio(cur);
  renderPhysio();
  if (ws.active) renderActiveWorkout();
  showToast('✓ ' + cur[i].name + ' logged');
}
function deletePhysio(i) {
  const cur = getPhysio();
  if (!cur[i]) return;
  if (!confirm('Remove "' + cur[i].name + '"? Its log is deleted too.')) return;
  cur.splice(i, 1);
  savePhysio(cur);
  renderPhysio();
  if (ws.active) renderActiveWorkout();
}
