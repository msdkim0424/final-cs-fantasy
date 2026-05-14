# CS Fantasy NES Prototype

This prototype is a static web build for CS Fantasy, a coding education RPG where Python is treated as magic.

The current visual baseline intentionally studies early NES-era JRPG interface structure:

- Black battle field
- White rectangular frame lines
- Blue command, status, and message windows
- Tiny side-view party sprites
- Centered enemy formation
- Uppercase command labels and short battle text

No original Final Fantasy assets are used. The layout and mood are genre-inspired, while the characters, monsters, names, and sprites are original.

## Loop

1. Choose a region on the world map.
2. Explore with FORWARD, SEARCH, REST, or RETURN.
3. Enter battle.
4. Use FIGHT, MAGIC, DRINK, SCAN, GUARD, or RUN.
5. FIGHT and MAGIC ask typed Python questions.
6. Enemy counterattacks ask guard questions.
7. Victory grants XP and a reward.
8. Defeat leads to review/retry.

## Run

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.
