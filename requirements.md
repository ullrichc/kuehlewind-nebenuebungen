\# Nebenübungen App — Design Document



\## Overview



A standalone webapp (HTML + JavaScript) to support daily practice of Rudolf Steiner's Nebenübungen, with Georg Kühlewind's commentary. The app tracks which exercise the user is working on and maintains a streak counter for consecutive days of practice.



---



\## Core Features



1\. \*\*Exercise List View\*\* — displays all 8 exercises with visual indicators

2\. \*\*Exercise Detail View\*\* — shows selected exercise text (Kühlewind default, Steiner optional)

3\. \*\*Streak Counter\*\* — tracks consecutive days of opening an exercise

4\. \*\*Persistent Storage\*\* — remembers last viewed exercise and streak data



---



\## Data Model



\### Exercise Data (from JSON)



```

{

&nbsp; id: number,

&nbsp; weekday: string,        // "Samstag", "Sonntag", ... or "daily"

&nbsp; steiner: string,        // German text

&nbsp; kuehlewind: string      // German text

}

```



\### Stored State



| Key | Type | Description |

|-----|------|-------------|

| `lastViewedId` | number | ID of most recently opened exercise |

| `lastVisitDate` | string | ISO date (YYYY-MM-DD) of last practice |

| `streakCount` | number | Consecutive days practiced |



---



\## Architecture



\### Components



```

App

├── Header (title + StreakDisplay)

├── ExerciseList (when viewing list)

│   └── ExerciseCard (×8)

└── ExerciseDetail (when viewing exercise)

```



\### Storage Abstraction



```javascript

interface StorageService {

&nbsp; get(key: string): any

&nbsp; set(key: string, value: any): void

}



class LocalStorageService implements StorageService { ... }

// Future: class ApiStorageService implements StorageService { ... }

```



---



\## Views



\### Exercise List View



Displays all 8 exercises as a vertical list.



\*\*Highlights:\*\*

\- "Today" badge — applied to:

&nbsp; - Exercise matching current weekday (German)

&nbsp; - Daily exercise (id 8) — always

\- "Last viewed" marker — applied to exercise matching `lastViewedId`



\*\*Exercise titles\*\* (derived from Kühlewind text):

1\. Samstag — Die richtige Vorstellung

2\. Sonntag — Der richtige Entschluss

3\. Montag — Die richtige Rede

4\. Dienstag — Die richtige Tat

5\. Mittwoch — Der richtige Standpunkt

6\. Donnerstag — Das richtige Streben

7\. Freitag — Die richtige Erinnerung

8\. Täglich — Die richtige Beschaulichkeit



\### Exercise Detail View



\*\*Default state:\*\*

\- Header with back button and weekday

\- Exercise title

\- Kühlewind text (full)

\- Collapsed "Steiner-Text anzeigen" section



\*\*Expanded state:\*\*

\- Steiner text revealed below toggle



\*\*On mount:\*\*

\- Save `lastViewedId` to storage

\- Run streak update logic



---



\## Streak Logic



Triggered when user opens any exercise detail view:



```

today = current date (YYYY-MM-DD)

yesterday = today - 1 day



if (lastVisitDate === today)

&nbsp; → no change (already practiced)



else if (lastVisitDate === yesterday)

&nbsp; → streakCount += 1

&nbsp; → lastVisitDate = today



else

&nbsp; → streakCount = 1 (hard reset)

&nbsp; → lastVisitDate = today

```



---



\## Weekday Mapping



```javascript

const weekdayMap = {

&nbsp; 0: "Sonntag",

&nbsp; 1: "Montag",

&nbsp; 2: "Dienstag",

&nbsp; 3: "Mittwoch",

&nbsp; 4: "Donnerstag",

&nbsp; 5: "Freitag",

&nbsp; 6: "Samstag"

};



function getTodayWeekday() {

&nbsp; return weekdayMap\[new Date().getDay()];

}

```



---



\## UI Layout



\### List View

```

┌─────────────────────────────────┐

│  Nebenübungen         🔥 12 Tage │

├─────────────────────────────────┤

│                                 │

│  ○ Samstag                      │

│    Die richtige Vorstellung     │

│                                 │

│  ● Sonntag               HEUTE  │

│    Der richtige Entschluss      │

│                                 │

│  ...                            │

│                                 │

│  ● Täglich               HEUTE  │

│    Die richtige Beschaulichkeit │

│                                 │

└─────────────────────────────────┘



○ = last viewed    ● / HEUTE = today's exercise

```



\### Detail View

```

┌─────────────────────────────────┐

│  ← Zurück              🔥 12 Tage │

├─────────────────────────────────┤

│                                 │

│  Freitag                        │

│  DIE RICHTIGE ERINNERUNG        │

│                                 │

│  \[Kühlewind text...]            │

│                                 │

│  ┌───────────────────────────┐  │

│  │ Steiner-Text anzeigen ▼   │  │

│  └───────────────────────────┘  │

│                                 │

└─────────────────────────────────┘

```



---



\## Styling Guidelines



\- \*\*Aesthetic:\*\* Clean, minimal, contemplative

\- \*\*Typography:\*\* Readable serif or sans-serif for German text

\- \*\*Colors:\*\* Light background, subtle accent for highlights

\- \*\*Highlights:\*\*

&nbsp; - "Today" — subtle background tint + badge

&nbsp; - "Last viewed" — left border accent or small icon

\- \*\*Responsive:\*\* Mobile-first, touch-friendly targets



---



\## Technical Decisions



| Decision | Choice | Rationale |

|----------|--------|-----------|

| Framework | Vanilla JS or lightweight (e.g., Preact) | Simple app, no build step needed |

| Styling | Embedded CSS or Tailwind CDN | Single-file simplicity |

| Storage | localStorage with abstraction layer | Works offline, swappable later |

| Data | Embedded JSON | No server dependency |



---



\## Future Considerations



\- Cloud sync via backend API (swap StorageService implementation)



