const regions = [
  {
    id: "stage-1-1",
    name: "Syntax Village",
    topic: "PRINT & STRINGS",
    codex: [
      "PRINT(): OUTPUTS TEXT TO THE SCREEN.",
      "STRINGS: TEXT WRAPPED IN QUOTES.",
      "EXAMPLE: print('HELLO')"
    ],
    story: [
      { speaker: "ADA", text: "Rune, wake up! The Indent Wraiths are breaching the village walls!" },
      { speaker: "ADA", text: "We need to cast a projection spell to call for help!" },
      { speaker: "ADA", text: "To project a message to the world, you must use the print() incantation. Wrap your message in quotes!" }
    ],
    art: "linear-gradient(45deg, transparent 0 42%, #38b858 42% 58%, transparent 58%), radial-gradient(circle at 25% 24%, #50d8f8 0 12%, transparent 13%), #184820",
    enemy: "String Slime",
    questions: [
      { prompt: "WHICH COMMAND OUTPUTS TEXT TO THE SCREEN?", choices: ["print()", "show()", "log()", "display()"], answer: "print()", lesson: "PRINT() IS USED TO OUTPUT TEXT." },
      { prompt: "WHAT DO WE USE TO SURROUND A STRING OF TEXT?", choices: ["()", "{}", "[]", "\" \""], answer: "\" \"", lesson: "STRINGS ARE TEXT WRAPPED IN QUOTES." },
      { prompt: "FILL IN THE BLANK: ___('HELP!')", choices: ["print", "send", "write", "say"], answer: "print", lesson: "PRINT OUTPUTS THE STRING." }
    ]
  },
  {
    id: "stage-1-2",
    name: "Village Gates",
    topic: "VARIABLES",
    codex: [
      "VARIABLES: CONTAINERS FOR DATA.",
      "=: ASSIGNS A VALUE TO A VARIABLE.",
      "EXAMPLE: hp = 100"
    ],
    story: [
      { speaker: "IORI", text: "We can't just keep shouting into the void, Rune! We need to store our magic to use it later." },
      { speaker: "IORI", text: "Use an equals sign '=' to assign your magic to a Variable." },
      { speaker: "IORI", text: "Think of a variable like a labeled box. 'health = 100' puts the number 100 into the box named health!" }
    ],
    art: "repeating-linear-gradient(90deg, #184820 0 16px, #286830 16px 28px), radial-gradient(circle at 72% 30%, #d84040 0 9%, transparent 10%)",
    enemy: "Var Bat",
    questions: [
      { prompt: "WHICH SYMBOL IS USED TO ASSIGN A VALUE TO A VARIABLE?", choices: ["==", "-", "+", "="], answer: "=", lesson: "THE EQUALS SIGN = IS FOR ASSIGNMENT." },
      { prompt: "IF x = 5, WHAT IS INSIDE THE VARIABLE x?", choices: ["x", "5", "0", "None"], answer: "5", lesson: "VARIABLES HOLD THE ASSIGNED VALUE." },
      { prompt: "WHICH IS A VALID VARIABLE ASSIGNMENT?", choices: ["10 = score", "score = 10", "score == 10", "score + 10"], answer: "score = 10", lesson: "THE VARIABLE NAME MUST BE ON THE LEFT." }
    ]
  },
  {
    id: "stage-1-3",
    name: "The Locked Gate",
    topic: "DATA TYPES",
    codex: [
      "INT: WHOLE NUMBERS.",
      "FLOAT: NUMBERS WITH DECIMALS.",
      "BOOLEAN: TRUE OR FALSE."
    ],
    story: [
      { speaker: "BRAM", text: "Halt! This gate only accepts pure data types! You can't just throw strings at it." },
      { speaker: "ADA", text: "He's right. Whole numbers are called Integers (int), and numbers with decimals are Floats (float)." },
      { speaker: "ADA", text: "And remember, Booleans are just True or False!" }
    ],
    art: "linear-gradient(135deg, #986030 0 28%, #f8d858 28% 36%, #603818 36% 62%, #d89038 62% 72%, #202020 72%)",
    enemy: "Float Phantom",
    questions: [
      { prompt: "WHAT DATA TYPE IS 3.14?", choices: ["int", "float", "string", "boolean"], answer: "float", lesson: "FLOATS ARE NUMBERS WITH DECIMALS." },
      { prompt: "WHAT DATA TYPE IS True?", choices: ["string", "int", "float", "boolean"], answer: "boolean", lesson: "BOOLEANS ARE TRUE OR FALSE." },
      { prompt: "WHAT DATA TYPE IS 42?", choices: ["int", "float", "string", "boolean"], answer: "int", lesson: "INTS ARE WHOLE NUMBERS." }
    ]
  },
  {
    id: "stage-1-4",
    name: "The Village Square",
    topic: "BOSS BATTLE",
    codex: [
      "BOSS BATTLE AHEAD.",
      "PREPARE YOUR CODE."
    ],
    story: [
      { speaker: "LORD NULL", text: "Fools. You cannot compile a future here. This village will be garbage collected." },
      { speaker: "IORI", text: "It's a Null Brute! Standard attacks won't work." },
      { speaker: "IORI", text: "Rune, you have to write the source code to break its armor!" }
    ],
    art: "linear-gradient(90deg, transparent 0 38%, #9c9c9c 38% 58%, transparent 58%), linear-gradient(0deg, #202020 0 24%, #50d8f8 24% 28%, #202020 28%)",
    enemy: "Null Brute",
    isBoss: true,
    questions: [
      { prompt: "BOSS SHIELD ACTIVE! PRINT THE EXACT TEXT 'HELLO WORLD' TO BREAK IT.", answer: "print('HELLO WORLD')", lesson: "PRINT() BREAKS THE SHIELD." },
      { prompt: "THE BOSS IS CHARGING! ASSIGN THE INTEGER 100 TO A VARIABLE NAMED 'power'.", answer: "power = 100", lesson: "VARIABLES STORE POWER." },
      { prompt: "FINAL BLOW! THE BOSS IS WEAK TO TRUTH. ASSIGN True TO A VARIABLE NAMED 'attack'.", answer: "attack = True", lesson: "BOOLEANS CAN DEFEAT LOGIC GOLEMS." }
    ]
  }
];

const guardQuestions = [
  { prompt: "TRUE OR FALSE: PYTHON WRITES BOOLEAN WORDS IN LOWERCASE.", choices: ["TRUE", "FALSE"], answer: "FALSE", lesson: "PYTHON BOOLEAN NAMES ARE CAPITALIZED." },
  { prompt: "WHICH KEYWORD CHECKS A CONDITION?", choices: ["for", "if", "def", "else"], answer: "if", lesson: "IF CHECKS A CONDITION." },
  { prompt: "WHICH VALUE MEANS NOTHING HERE?", choices: ["0", "False", "None", "[]"], answer: "None", lesson: "NONE MARKS NO VALUE." },
  { prompt: "WHICH SYMBOL ENDS AN IF OR DEF HEADER?", choices: [":", ";", ".", ","], answer: ":", lesson: "PYTHON BLOCK HEADERS END WITH COLON." }
];

const enemyBook = {
  "String Slime": {
    hp: 15,
    xp: 5,
    damage: 3,
    gold: [5, 10],
    drops: [
      { type: "item", name: "Potion", amount: 1, chance: 0.3 }
    ]
  },
  "Var Bat": {
    hp: 20,
    xp: 8,
    damage: 5,
    gold: [8, 12],
    drops: [
      { type: "item", name: "Potion", amount: 1, chance: 0.2 }
    ]
  },
  "Float Phantom": {
    hp: 25,
    xp: 12,
    damage: 8,
    gold: [10, 15],
    drops: [
      { type: "item", name: "Ether", amount: 1, chance: 0.2 }
    ]
  },
  "Null Brute": {
    hp: 9999,
    xp: 50,
    damage: 15,
    gold: [50, 100],
    drops: [
      { type: "item", name: "Revive", amount: 1, chance: 1.0 }
    ]
  }
};

const partyBlueprints = [
  {
    id: "rune",
    name: "RUNE",
    role: "SP.CODE",
    sprite: "hero",
    maxHp: 30,
    maxMp: 10,
    attackDamage: 10,
    spellName: "SPARK",
    spellCost: 3,
    spellDamage: 17,
    equipment: {
      weapon: "trainee-quill",
      armor: "patch-robe",
      accessory: "focus-bead"
    }
  },
  {
    id: "bram",
    name: "BRAM",
    role: "KNIGHT",
    sprite: "knight",
    maxHp: 38,
    maxMp: 0,
    attackDamage: 12,
    spellName: "",
    spellCost: 0,
    spellDamage: 0,
    equipment: {
      weapon: "ash-blade",
      armor: "guard-vest",
      accessory: null
    }
  },
  {
    id: "ada",
    name: "ADA",
    role: "MAGE",
    sprite: "mage",
    maxHp: 24,
    maxMp: 14,
    attackDamage: 7,
    spellName: "APPEND",
    spellCost: 4,
    spellDamage: 16,
    equipment: {
      weapon: "novice-wand",
      armor: "patch-robe",
      accessory: null
    }
  },
  {
    id: "iori",
    name: "IORI",
    role: "RANGER",
    sprite: "ranger",
    maxHp: 28,
    maxMp: 8,
    attackDamage: 9,
    spellName: "LOOP",
    spellCost: 3,
    spellDamage: 14,
    equipment: {
      weapon: "field-bow",
      armor: "scout-cloak",
      accessory: null
    }
  }
];

const equipmentBook = {
  "trainee-quill": {
    id: "trainee-quill",
    name: "TRAINEE QUILL",
    slot: "weapon",
    cost: 0,
    bonuses: { spellDamage: 1 },
    roles: ["SP.CODE", "MAGE"]
  },
  "ash-blade": {
    id: "ash-blade",
    name: "ASH BLADE",
    slot: "weapon",
    cost: 0,
    bonuses: { attackDamage: 1 },
    roles: ["KNIGHT"]
  },
  "novice-wand": {
    id: "novice-wand",
    name: "NOVICE WAND",
    slot: "weapon",
    cost: 0,
    bonuses: { spellDamage: 1, maxMp: 1 },
    roles: ["MAGE"]
  },
  "field-bow": {
    id: "field-bow",
    name: "FIELD BOW",
    slot: "weapon",
    cost: 0,
    bonuses: { attackDamage: 1 },
    roles: ["RANGER"]
  },
  "patch-robe": {
    id: "patch-robe",
    name: "PATCH ROBE",
    slot: "armor",
    cost: 0,
    bonuses: { maxHp: 2, maxMp: 1 },
    roles: ["SP.CODE", "MAGE"]
  },
  "guard-vest": {
    id: "guard-vest",
    name: "GUARD VEST",
    slot: "armor",
    cost: 0,
    bonuses: { maxHp: 4 },
    roles: ["KNIGHT"]
  },
  "scout-cloak": {
    id: "scout-cloak",
    name: "SCOUT CLOAK",
    slot: "armor",
    cost: 0,
    bonuses: { maxHp: 3, attackDamage: 1 },
    roles: ["RANGER"]
  },
  "focus-bead": {
    id: "focus-bead",
    name: "FOCUS BEAD",
    slot: "accessory",
    cost: 0,
    bonuses: { maxMp: 1 },
    roles: ["SP.CODE", "MAGE", "RANGER", "KNIGHT"]
  },
  "function-staff": {
    id: "function-staff",
    name: "FUNCTION STAFF",
    slot: "weapon",
    cost: 34,
    bonuses: { spellDamage: 4, maxMp: 2 },
    roles: ["SP.CODE"]
  },
  "logic-mail": {
    id: "logic-mail",
    name: "LOGIC MAIL",
    slot: "armor",
    cost: 32,
    bonuses: { maxHp: 7, attackDamage: 1 },
    roles: ["KNIGHT"]
  },
  "data-wand": {
    id: "data-wand",
    name: "DATA WAND",
    slot: "weapon",
    cost: 36,
    bonuses: { spellDamage: 4, maxMp: 2 },
    roles: ["MAGE"]
  },
  "loop-bow": {
    id: "loop-bow",
    name: "LOOP BOW",
    slot: "weapon",
    cost: 34,
    bonuses: { attackDamage: 3, spellDamage: 2 },
    roles: ["RANGER"]
  },
  "mana-cloak": {
    id: "mana-cloak",
    name: "MANA CLOAK",
    slot: "armor",
    cost: 28,
    bonuses: { maxHp: 3, maxMp: 3 },
    roles: ["SP.CODE", "MAGE", "RANGER"]
  },
  "syntax-charm": {
    id: "syntax-charm",
    name: "SYNTAX CHARM",
    slot: "accessory",
    cost: 26,
    bonuses: { attackDamage: 1, spellDamage: 2, maxMp: 1 },
    roles: ["SP.CODE", "MAGE", "RANGER", "KNIGHT"]
  }
};

const palette = {
  K: "#050505",
  W: "#f8f8f8",
  G: "#9c9c9c",
  Y: "#f8d858",
  R: "#d84040",
  r: "#802020",
  B: "#2b65ff",
  b: "#0030c8",
  S: "#f0b878",
  s: "#986030",
  P: "#9858d8",
  p: "#502878",
  C: "#50d8f8",
  c: "#188090",
  L: "#38b858",
  l: "#186830",
  O: "#d89038",
  o: "#603818",
  M: "#b8b8b8",
  m: "#606060"
};

const art = {
  hero: [
    "................",
    "....KKKKK....Y..",
    "...KPPPPPK...s..",
    "..KPPSSSPK...s..",
    "..KPSKSKPK...s..",
    "..KPSSSSPK..Ys..",
    "...KSSSSK...ss..",
    "..KBBBBBBK..s...",
    ".KBPBBBBPBK.s...",
    ".KBYBWWBYBKs....",
    "..KBBbbbBK.s....",
    "...Kp..pK..s....",
    "..KGG..GGK......",
    "..KGG..GGK......",
    ".KKKK..KKKK.....",
    "................"
  ],
  knight: [
    "................",
    ".....KKKKK......",
    "....KMMMMMK.....",
    "...KMSSSSMK.....",
    "...KMSKSKMK..M..",
    "...KMSSSSMK.MMM.",
    "....KMMMMK..MMM.",
    "..KKKMMMMKK.MMM.",
    ".KMMMMMMMMK.MMM.",
    ".KMMWMMWMMK.MMM.",
    "..KMMmmMMK..MMM.",
    "...KG..GK...MMM.",
    "...KG..GK...MMM.",
    "..KKK..KKK..MMM.",
    "................",
    "................"
  ],
  mage: [
    "................",
    "......KK........",
    ".....KPPK.......",
    "....KPPPPK......",
    "...KPPSSPPK.....",
    "..KPPSSSSPPK....",
    "...KPSKSKPK..C..",
    "....KSSSSK...c..",
    "...KPPPPPPK..c..",
    "..KPPYPPYPPK.c..",
    "...KPPppPPK..c..",
    "....Kp..pK...c..",
    "...KGG..GGK.....",
    "...KK....KK.....",
    "................",
    "................"
  ],
  ranger: [
    "................",
    ".....KKKK.......",
    "....KLLLLK......",
    "...KLSLSSK......",
    "...KLSKSKK......",
    "....KSSSSK..s...",
    "..KKKLLLLKK.s...",
    ".KLLLYLLYLLKs...",
    ".KLLLllllLLKs...",
    "..KLLl..lLK.s...",
    "...KlL..LlK.s...",
    "..KGG....GGK....",
    "..KGG....GGK....",
    "...KK....KK.....",
    "................",
    "................"
  ],
  "Indent Wraith": [
    "................",
    ".....CCCCCC.....",
    "....CCccccCC....",
    "...CCcCCCCcCC...",
    "..CCcKCCKCCcCC..",
    "..CCCccccccCCC..",
    "...CCCCWWCCCC...",
    "....CCCccCCC....",
    "...CCcCccCcCC...",
    "..CCcc....ccCC..",
    "...Cc......cC...",
    "....C......C....",
    "................",
    "................",
    "................",
    "................"
  ],
  "Loop Serpent": [
    "................",
    ".........KKK....",
    "........KLLLK...",
    ".......KLLKLK...",
    "......KLLLKK....",
    "...KKKLLKK......",
    "..KLLLKLLKKK....",
    ".KLLK..KLLLK....",
    ".KLLK...KLLK....",
    "..KKK..KLLK.....",
    "......KLLK......",
    ".....KllK.......",
    "....KllK........",
    "................",
    "................",
    "................"
  ],
  "Syntax Mimic": [
    "................",
    "...KKKKKKKKKK...",
    "..KOOOOOOOOOOK..",
    ".KOOYYYYYYYYOOK.",
    ".KOKOKOKOKOKOOK.",
    ".KOOOOOOOOOOOOK.",
    ".KORRRRRRRRROOK.",
    ".KOOYKYKYKYOOOK.",
    "..KOOOrrrrOOK...",
    "...KKOOOOOOK....",
    "....KoOOOOoK....",
    "...Koo....ooK...",
    "................",
    "................",
    "................",
    "................"
  ],
  "Boolean Golem": [
    "................",
    ".....KKKKKK.....",
    "....KMMMMMMK....",
    "...KMMmmmmMMK...",
    "...KMKCmmCKMK...",
    "..KMMMMMMMMMMK..",
    "..KMMMYWYMMMMK..",
    "...KMMMMMMMMK...",
    "..KMMKMMMMKMMK..",
    ".KmmK.MMMM.KmmK.",
    ".....KmmmmK.....",
    "....KMM..MMK....",
    "...KMM....MMK...",
    "................",
    "................",
    "................"
  ],
  "Null Imp": [
    "................",
    "......PPPP......",
    ".....PPPPPP.....",
    "....PPpPPpPP....",
    "...PPKKPPKKPP...",
    "...PPPPPPPPPP...",
    "....PPPYYPPP....",
    "...PPPPPPPPPP...",
    "..PPP.PPPP.PPP..",
    ".ppp..pppp..ppp.",
    "......PPPP......",
    ".....pp..pp.....",
    "....pp....pp....",
    "................",
    "................",
    "................"
  ]
};

const state = {
  mode: "map",
  region: null,
  currentStage: 0,
  playedStory: {},
  party: partyBlueprints.map((member) => ({
    ...member,
    baseMaxHp: member.maxHp,
    baseMaxMp: member.maxMp,
    baseAttackDamage: member.attackDamage,
    baseSpellDamage: member.spellDamage,
    hp: member.maxHp,
    mp: member.maxMp,
    defending: false
  })),
  xp: 0,
  gold: 24,
  inventory: { Potion: 1, Ether: 0, Revive: 0 },
  ownedGear: {
    "trainee-quill": true,
    "ash-blade": true,
    "novice-wand": true,
    "field-bow": true,
    "patch-robe": true,
    "guard-vest": true,
    "scout-cloak": true,
    "focus-bead": true
  },
  materials: {},
  enemy: null,
  activePartyIndex: 0,
  pendingQuestion: null,
  pendingAction: null,
  pendingActorIndex: null,
  mistakes: [],
  defend: false,
  animating: false,
  guardTargetIndex: null,
  lastLoot: []
};

const els = {
  title: document.querySelector("#screen-title"),
  field: document.querySelector(".field"),
  world: document.querySelector("#world-view"),
  battle: document.querySelector("#battle-view"),
  enemyField: document.querySelector("#enemy-field"),
  enemyLine: document.querySelector("#enemy-line"),
  partyRows: [
    document.querySelector("#hero-row"),
    document.querySelector("#knight-row"),
    document.querySelector("#mage-row"),
    document.querySelector("#ranger-row")
  ],
  partySprites: [
    document.querySelector("#hero-sprite"),
    document.querySelector("#knight-sprite"),
    document.querySelector("#mage-sprite"),
    document.querySelector("#ranger-sprite")
  ],
  dialogue: document.querySelector("#dialogue-text"),
  messageWindow: document.querySelector("#message-window"),
  questionCard: document.querySelector("#question-card"),
  questionKind: document.querySelector("#question-kind"),
  questionPrompt: document.querySelector("#question-prompt"),
  commandTitle: document.querySelector("#command-title"),
  commands: document.querySelector("#commands"),
  unit: document.querySelector("#unit-value"),
  hp: document.querySelector("#hp-value"),
  mp: document.querySelector("#mp-value"),
  xp: document.querySelector("#xp-value"),
  gold: document.querySelector("#gold-value"),
  inventory: document.querySelector("#inventory-value"),
  spells: document.querySelector("#spells-value"),
  monacoWrapper: document.querySelector("#monaco-wrapper"),
  monacoContainer: document.querySelector("#monaco-container"),
  btnRunCode: document.querySelector("#btn-run-code")
};

let monacoEditor = null;
let bossQuestions = [];
let bossQuestionIndex = 0;
let bossTimer = null;
let bossTimeLeft = 0;

let activeCommands = [];
let selectedCommandIndex = 0;
let selectedMapIndex = 0;
let messageTimer = null;
let messageFullText = "";
let messageIndex = 0;
let messageTyping = false;

let cutsceneActive = false;
let currentStory = [];
let currentStoryIndex = 0;
let cutsceneCallback = null;

function playCutscene(story, callback) {
  if (!story || story.length === 0) {
    if (callback) callback();
    return;
  }
  cutsceneActive = true;
  currentStory = story;
  currentStoryIndex = 0;
  cutsceneCallback = callback;
  els.commands.innerHTML = "";
  els.commandTitle.textContent = "STORY";
  nextCutsceneLine();
}

function nextCutsceneLine() {
  if (currentStoryIndex >= currentStory.length) {
    cutsceneActive = false;
    if (cutsceneCallback) cutsceneCallback();
    return;
  }
  const line = currentStory[currentStoryIndex];
  say(`[${line.speaker}] ${line.text}`);
  setCommands("STORY", [
    { label: "NEXT >>", onClick: () => {
        currentStoryIndex++;
        nextCutsceneLine();
    }}
  ]);
}

function drawSprite(target, rows, className = "tiny-sprite") {
  target.className = className;
  target.innerHTML = "";
  rows.forEach((row) => {
    [...row].forEach((key) => {
      const pixel = document.createElement("span");
      pixel.className = "pixel";
      if (key !== ".") pixel.style.backgroundColor = palette[key];
      target.append(pixel);
    });
  });
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function memberAt(index) {
  return state.party[index] || null;
}

function livingPartyIndices() {
  return state.party
    .map((member, index) => (member.hp > 0 ? index : -1))
    .filter((index) => index >= 0);
}

function firstLivingPartyIndex() {
  return livingPartyIndices()[0] ?? -1;
}

function nextLivingPartyIndex(afterIndex) {
  for (let index = afterIndex; index < state.party.length; index += 1) {
    if (state.party[index].hp > 0) return index;
  }
  return -1;
}

function activeMember() {
  const member = memberAt(state.activePartyIndex);
  if (member && member.hp > 0) return member;
  return memberAt(firstLivingPartyIndex());
}

function activeRow(index = state.activePartyIndex) {
  return els.partyRows[index] || null;
}

function activeSprite(index = state.activePartyIndex) {
  return els.partySprites[index] || null;
}

function allPartyDown() {
  return livingPartyIndices().length === 0;
}

function clearDefending() {
  state.party.forEach((member) => {
    member.defending = false;
  });
}

function addInventoryItem(name, amount = 1) {
  state.inventory[name] = (state.inventory[name] || 0) + amount;
}

function addMaterial(name, amount = 1) {
  state.materials[name] = (state.materials[name] || 0) + amount;
}

function itemCount(name) {
  return state.inventory[name] || 0;
}

function lootSummary() {
  if (!state.lastLoot.length) return "NO DROP.";
  return state.lastLoot.join(" ");
}

function gearItem(itemId) {
  return itemId ? equipmentBook[itemId] || null : null;
}

function gearName(itemId) {
  const item = gearItem(itemId);
  return item ? item.name : "NONE";
}

function slotLabel(slot) {
  return slot.toUpperCase();
}

function canEquip(member, item) {
  return Boolean(item && item.roles.includes(member.role));
}

function ownedGearForSlot(slot, member) {
  return Object.values(equipmentBook)
    .filter((item) => item.slot === slot && state.ownedGear[item.id] && canEquip(member, item));
}

function recalcMemberStats(member) {
  let maxHp = member.baseMaxHp;
  let maxMp = member.baseMaxMp;
  let attackDamage = member.baseAttackDamage;
  let spellDamage = member.baseSpellDamage;

  Object.values(member.equipment || {}).forEach((itemId) => {
    const item = gearItem(itemId);
    if (!item) return;
    maxHp += item.bonuses.maxHp || 0;
    maxMp += item.bonuses.maxMp || 0;
    attackDamage += item.bonuses.attackDamage || 0;
    spellDamage += item.bonuses.spellDamage || 0;
  });

  member.maxHp = maxHp;
  member.maxMp = maxMp;
  member.attackDamage = attackDamage;
  member.spellDamage = spellDamage;
  member.hp = Math.min(member.hp, member.maxHp);
  member.mp = Math.min(member.mp, member.maxMp);
}

function recalcPartyStats() {
  state.party.forEach(recalcMemberStats);
}

function moveGearFromOtherMember(itemId, slot, targetIndex) {
  state.party.forEach((member, index) => {
    if (index === targetIndex) return;
    if (member.equipment[slot] === itemId) {
      member.equipment[slot] = null;
    }
  });
}

function memberEquipmentSummary(member) {
  return `WEP ${gearName(member.equipment.weapon)}. ARM ${gearName(member.equipment.armor)}. ACC ${gearName(member.equipment.accessory)}.`;
}

function livingTargets() {
  return state.party
    .map((member, index) => (member.hp > 0 ? { member, index } : null))
    .filter(Boolean);
}

function fallenTargets() {
  return state.party
    .map((member, index) => (member.hp <= 0 ? { member, index } : null))
    .filter(Boolean);
}

function hasUsableBattleItems() {
  return itemCount("Potion") > 0 || itemCount("Ether") > 0 || itemCount("Revive") > 0;
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function currentEnemyCard() {
  return els.enemyLine.querySelector(".enemy-card");
}

async function pulseClass(target, className, duration) {
  if (!target) {
    await wait(duration);
    return;
  }

  target.classList.remove(className);
  void target.offsetWidth;
  target.classList.add(className);
  await wait(duration);
  target.classList.remove(className);
}

async function animatePhysicalAttack(memberIndex) {
  pulseClass(activeSprite(memberIndex), "attack-swing", 220);
  pulseClass(activeRow(memberIndex), "attack-step", 340);
  await wait(150);
  pulseClass(els.field, "shake-light", 180);
  await pulseClass(currentEnemyCard(), "hit", 220);
}

async function animateSpellCast(memberIndex) {
  pulseClass(activeSprite(memberIndex), "cast-spark", 320);
  pulseClass(activeRow(memberIndex), "cast-step", 420);
  await wait(140);
  pulseClass(els.field, "shake-heavy", 240);
  await pulseClass(currentEnemyCard(), "spell-hit", 280);
}

async function animateEnemyAdvance(targetIndex, blocked) {
  pulseClass(currentEnemyCard(), "enemy-strike", 280);
  await wait(130);
  pulseClass(els.field, blocked ? "shake-light" : "shake-heavy", blocked ? 180 : 240);
  await pulseClass(activeRow(targetIndex), blocked ? "guard-glow" : "damage-flash", 260);
}

function normalize(value) {
  return value.trim();
}

function correct(value, question) {
  const answer = normalize(value);
  if (question.answer) return question.answer === answer;
  return question.answers.some((candidate) => candidate === answer);
}

function finishMessage() {
  if (!messageTyping) return false;
  clearInterval(messageTimer);
  messageTimer = null;
  messageTyping = false;
  els.dialogue.textContent = messageFullText;
  els.messageWindow.classList.add("ready");
  return true;
}

function say(text, options = {}) {
  clearInterval(messageTimer);
  messageTimer = null;
  messageFullText = text;
  messageIndex = 0;
  messageTyping = !options.instant;
  els.dialogue.textContent = "";
  els.messageWindow.classList.remove("ready");

  if (options.instant) {
    els.dialogue.textContent = text;
    els.messageWindow.classList.add("ready");
    return;
  }

  messageTimer = setInterval(() => {
    messageIndex += 1;
    els.dialogue.textContent = messageFullText.slice(0, messageIndex);
    if (messageIndex >= messageFullText.length) {
      finishMessage();
    }
  }, 18);
}

function hideAnswer() {
  state.pendingQuestion = null;
  state.pendingAction = null;
  state.pendingActorIndex = null;
  els.questionCard.classList.add("hidden");
}

function choiceLabel(index) {
  return ["A", "B", "C", "D"][index] || String(index + 1);
}

function showQuestion(kind, prompt) {
  els.questionKind.textContent = kind;
  els.questionPrompt.textContent = prompt;
  els.questionCard.classList.remove("hidden");
}

function showCodex() {
  if (!state.region) return;
  els.questionKind.textContent = `${state.region.name.toUpperCase()} CODEX`;
  els.questionPrompt.textContent = state.region.codex.join("\n");
  els.questionCard.classList.remove("hidden");
  say(`FIELD NOTES FOR ${state.region.name.toUpperCase()}.`);
  updateStatus();
}

function ask(question, action, kind, introText, extraCommands = [], actorIndex = state.activePartyIndex) {
  state.pendingQuestion = question;
  state.pendingAction = action;
  state.pendingActorIndex = actorIndex;
  showQuestion(kind, question.prompt);
  say(introText);
  setCommands(kind, [
    ...question.choices.map((choice, index) => ({
      label: `${choiceLabel(index)}. ${choice}`,
      onClick: () => resolvePendingChoice(choice)
    })),
    ...extraCommands
  ]);
}

function setCommands(title, list) {
  els.commandTitle.textContent = title;
  els.commands.innerHTML = "";
  activeCommands = list;
  selectedCommandIndex = list.findIndex((command) => !command.disabled);
  if (selectedCommandIndex < 0) selectedCommandIndex = 0;
  list.forEach((command) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = command.reward ? "reward-button" : "command-button";
    button.innerHTML = `<span class="command-cursor">&gt;</span><span>${command.label}</span>`;
    button.disabled = Boolean(command.disabled);
    button.dataset.commandIndex = String(els.commands.children.length);
    button.addEventListener("click", () => {
      if (state.animating) return;
      command.onClick();
    });
    button.addEventListener("mouseenter", () => selectCommand(Number(button.dataset.commandIndex)));
    button.addEventListener("focus", () => selectCommand(Number(button.dataset.commandIndex)));
    els.commands.append(button);
  });
  renderCommandSelection();
}

function commandButtons() {
  return [...els.commands.querySelectorAll("button")];
}

function renderCommandSelection() {
  commandButtons().forEach((button, index) => {
    button.classList.toggle("selected", index === selectedCommandIndex && !button.disabled);
  });
}

function selectCommand(index) {
  if (state.animating) return;
  if (!activeCommands[index] || activeCommands[index].disabled) return;
  selectedCommandIndex = index;
  renderCommandSelection();
}

function moveCommandSelection(delta) {
  if (state.animating) return;
  if (!activeCommands.length) return;
  let next = selectedCommandIndex;
  for (let step = 0; step < activeCommands.length; step += 1) {
    next = (next + delta + activeCommands.length) % activeCommands.length;
    if (!activeCommands[next].disabled) {
      selectCommand(next);
      break;
    }
  }
}

function activateSelectedCommand() {
  if (state.animating) return;
  const command = activeCommands[selectedCommandIndex];
  if (!command || command.disabled) return;
  command.onClick();
}

function updatePartyDisplay() {
  els.partyRows.forEach((row, index) => {
    const member = state.party[index];
    row.classList.toggle("active", index === state.activePartyIndex && member.hp > 0);
    row.classList.toggle("muted", index !== state.activePartyIndex && member.hp > 0);
    row.classList.toggle("defeated", member.hp <= 0);
  });
}

function updateStatus() {
  const member = activeMember() || state.party[0];
  els.unit.textContent = member ? member.name : "NONE";
  els.hp.textContent = member ? `${member.hp}/${member.maxHp}` : "0/0";
  els.mp.textContent = member ? `${member.mp}/${member.maxMp}` : "0/0";
  els.xp.textContent = String(state.xp);
  els.gold.textContent = String(state.gold);
  els.inventory.textContent = String(state.inventory.Potion || 0);
  els.spells.textContent = member && member.spellName ? member.spellName : "NO MAGIC";
  updatePartyDisplay();
}

function updateMapSelection() {
  const buttons = [...els.world.querySelectorAll(".region-button")];
  buttons.forEach((button, index) => {
    button.classList.toggle("selected", index === selectedMapIndex);
  });

  const marker = els.world.querySelector(".map-marker");
  const selected = buttons[selectedMapIndex];
  if (!marker || !selected) return;
  marker.style.left = `${selected.offsetLeft + 12}px`;
  marker.style.top = `${selected.offsetTop + 27}px`;
}

function moveMapSelection(direction) {
  const row = Math.floor(selectedMapIndex / 2);
  const col = selectedMapIndex % 2;
  let nextRow = row;
  let nextCol = col;

  if (direction === "left") nextCol = Math.max(0, col - 1);
  if (direction === "right") nextCol = Math.min(1, col + 1);
  if (direction === "up") nextRow = Math.max(0, row - 1);
  if (direction === "down") nextRow = Math.min(1, row + 1);

  selectedMapIndex = nextRow * 2 + nextCol;
  updateMapSelection();
}

function drawMap() {
  els.world.innerHTML = "";
  regions.slice(0, state.currentStage + 1).forEach((region, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "region-button";
    button.dataset.regionIndex = String(idx);
    button.style.setProperty("--tile-art", region.art);
    button.innerHTML = `<strong>${region.name}</strong><span>${region.topic}</span>`;
    button.addEventListener("mouseenter", () => {
      selectedMapIndex = Number(button.dataset.regionIndex);
      updateMapSelection();
    });
    button.addEventListener("focus", () => {
      selectedMapIndex = Number(button.dataset.regionIndex);
      updateMapSelection();
    });
    button.addEventListener("click", () => enterRegion(regions[selectedMapIndex]));
    els.world.append(button);
  });
  const marker = document.createElement("div");
  marker.className = "map-marker";
  els.world.append(marker);
  updateMapSelection();
}

function startActorTurn(index, intro = "") {
  state.activePartyIndex = index;
  state.guardTargetIndex = null;
  const member = memberAt(index);
  const line = intro ? `${intro} ${member.name}'S TURN.` : `${member.name}'S TURN.`;
  say(line);
  setCommands("TURN", battleCommands(member));
  updateStatus();
}

function advancePartyTurn() {
  const nextIndex = nextLivingPartyIndex(state.activePartyIndex + 1);
  if (nextIndex >= 0) {
    startActorTurn(nextIndex);
    return;
  }
  beginEnemyTurn();
}

function beginPartyRound(intro = "") {
  clearDefending();
  const firstIndex = firstLivingPartyIndex();
  if (firstIndex < 0) {
    defeat();
    return;
  }
  startActorTurn(firstIndex, intro);
}

function showVillage() {
  state.mode = "village";
  state.region = null;
  state.enemy = null;
  state.activePartyIndex = firstLivingPartyIndex() >= 0 ? firstLivingPartyIndex() : 0;
  hideAnswer();
  els.title.textContent = "VILLAGE";
  els.world.classList.add("hidden");
  els.battle.classList.remove("hidden");
  els.enemyLine.innerHTML = "";
  say("OAKHAVEN VILLAGE. INN, GOODS, AND ROAD BACK TO THE WILDS.");
  setVillageCommands();
  updateStatus();
}

function setVillageCommands() {
  setCommands("VILLAGE", [
    { label: "INN", onClick: stayInn },
    { label: "FORGE", onClick: showForge },
    { label: "SHOP", onClick: openShop },
    { label: "BAG", onClick: bag },
    { label: "MAP", onClick: showMap }
  ]);
}

function stayInn() {
  const cost = 18;
  if (state.gold < cost) {
    say("NOT ENOUGH GOLD FOR THE INN.");
    setVillageCommands();
    return;
  }
  state.gold -= cost;
  fullRest();
  say(`THE PARTY SLEPT AT THE INN. ${cost} GOLD PAID.`);
  setVillageCommands();
  updateStatus();
}

function showForge() {
  hideAnswer();
  say("OAKHAVEN FORGE. BUY UPGRADES OR EQUIP THE PARTY.");
  setCommands("FORGE", [
    { label: "BUY GEAR", onClick: openGearShop },
    { label: "EQUIP", onClick: openEquipParty },
    { label: "BAG", onClick: bag },
    { label: "BACK", onClick: showVillage }
  ]);
  updateStatus();
}

function openGearShop(intro = "GEAR STOCK: STAFF 34. MAIL 32. WAND 36. BOW 34. CLOAK 28. CHARM 26.") {
  hideAnswer();
  say(intro);
  const stock = [
    "function-staff",
    "logic-mail",
    "data-wand",
    "loop-bow",
    "mana-cloak",
    "syntax-charm"
  ];
  setCommands("GEAR SHOP", [
    ...stock.map((itemId) => {
      const item = gearItem(itemId);
      return {
        label: `${item.name} ${item.cost}G`,
        onClick: () => buyGear(itemId),
        disabled: Boolean(state.ownedGear[itemId])
      };
    }),
    { label: "BACK", onClick: showForge }
  ]);
  updateStatus();
}

function buyGear(itemId) {
  const item = gearItem(itemId);
  if (!item) return;
  if (state.ownedGear[itemId]) {
    openGearShop("ALREADY OWNED.");
    return;
  }
  if (state.gold < item.cost) {
    openGearShop("NOT ENOUGH GOLD.");
    return;
  }
  state.gold -= item.cost;
  state.ownedGear[itemId] = true;
  openGearShop(`BOUGHT ${item.name} FOR ${item.cost} GOLD.`);
}

function openEquipParty(intro = "CHOOSE A PARTY MEMBER TO MANAGE GEAR.") {
  hideAnswer();
  say(intro);
  setCommands("EQUIP", [
    ...state.party.map((member, index) => ({
      label: member.name,
      onClick: () => openEquipMember(index),
      disabled: member.hp <= 0
    })),
    { label: "BACK", onClick: showForge }
  ]);
  updateStatus();
}

function openEquipMember(memberIndex) {
  const member = memberAt(memberIndex);
  state.activePartyIndex = memberIndex;
  say(`${member.name}. ${memberEquipmentSummary(member)}`);
  setCommands(`${member.name} GEAR`, [
    { label: `WEAPON ${gearName(member.equipment.weapon)}`, onClick: () => openEquipSlot(memberIndex, "weapon") },
    { label: `ARMOR ${gearName(member.equipment.armor)}`, onClick: () => openEquipSlot(memberIndex, "armor") },
    { label: `ACCESS ${gearName(member.equipment.accessory)}`, onClick: () => openEquipSlot(memberIndex, "accessory") },
    { label: "BACK", onClick: openEquipParty }
  ]);
  updateStatus();
}

function openEquipSlot(memberIndex, slot) {
  const member = memberAt(memberIndex);
  const options = ownedGearForSlot(slot, member);
  say(`${member.name} ${slotLabel(slot)}. CURRENT ${gearName(member.equipment[slot])}.`);
  setCommands(`${slotLabel(slot)}`, [
    ...options.map((item) => ({
      label: item.name,
      onClick: () => equipGear(memberIndex, slot, item.id)
    })),
    { label: "UNEQUIP", onClick: () => equipGear(memberIndex, slot, null) },
    { label: "BACK", onClick: () => openEquipMember(memberIndex) }
  ]);
  updateStatus();
}

function equipGear(memberIndex, slot, itemId) {
  const member = memberAt(memberIndex);
  if (itemId) moveGearFromOtherMember(itemId, slot, memberIndex);
  member.equipment[slot] = itemId;
  recalcPartyStats();
  const label = itemId ? `EQUIPPED ${gearName(itemId)}.` : `UNEQUIPPED ${slotLabel(slot)}.`;
  openEquipMember(memberIndex);
  say(`${member.name}. ${label}`);
  updateStatus();
}

function openShop(intro = "SHOP GOODS: POTION 10. ETHER 14. REVIVE 24.") {
  hideAnswer();
  say(intro);
  setCommands("SHOP", [
    { label: "POTION 10G", onClick: () => buyItem("Potion", 10) },
    { label: "ETHER 14G", onClick: () => buyItem("Ether", 14) },
    { label: "REVIVE 24G", onClick: () => buyItem("Revive", 24) },
    { label: "BACK", onClick: showVillage }
  ]);
  updateStatus();
}

function buyItem(item, price) {
  if (state.gold < price) {
    openShop("NOT ENOUGH GOLD.");
    return;
  }
  state.gold -= price;
  addInventoryItem(item, 1);
  openShop(`BOUGHT ${item.toUpperCase()} FOR ${price} GOLD.`);
}

function showMap() {
  state.mode = "map";
  state.region = null;
  state.enemy = null;
  state.mistakes = [];
  state.activePartyIndex = 0;
  hideAnswer();
  els.title.textContent = "WORLD";
  els.world.classList.remove("hidden");
  els.battle.classList.add("hidden");
  selectedMapIndex = 0;
  drawMap();
  say("CHOOSE A LAND. PYTHON IS THE MAGIC OF THIS WORLD.");
  setCommands("MAP", [
    { label: "VILLAGE", onClick: showVillage },
    { label: "BAG", onClick: bag }
  ]);
  updateStatus();
}

function enterRegion(region) {
  state.mode = "explore";
  state.region = region;
  state.enemy = null;
  hideAnswer();
  els.title.textContent = region.name.toUpperCase();
  els.world.classList.add("hidden");
  els.battle.classList.remove("hidden");
  els.enemyLine.innerHTML = "";
  
  if (region.story && !state.playedStory[region.id]) {
    state.playedStory[region.id] = true;
    playCutscene(region.story, () => showExploreMenu(region));
  } else {
    showExploreMenu(region);
  }
}

function showExploreMenu(region) {
  say(`${region.name.toUpperCase()}. TOPIC: ${region.topic}.`);
  setCommands("EXPLORE", [
    { label: "BATTLE", onClick: startBattle },
    { label: "CODEX", onClick: showCodex },
    { label: "RETURN", onClick: showMap }
  ]);
  updateStatus();
}

function fullRest() {
  hideAnswer();
  state.party.forEach((member) => {
    member.hp = member.maxHp;
    member.mp = member.maxMp;
    member.defending = false;
  });
  say("THE PARTY RESTED.");
  updateStatus();
}

function smallRest() {
  hideAnswer();
  state.party.forEach((member) => {
    member.hp = Math.min(member.maxHp, member.hp + 6);
    member.mp = Math.min(member.maxMp, member.mp + 3);
  });
  say("THE PARTY RESTED A MOMENT.");
  updateStatus();
}

function bag() {
  hideAnswer();
  const learned = state.party
    .filter((member) => member.spellName)
    .map((member) => `${member.name} ${member.spellName}`)
    .join(", ");
  const goods = `POTION ${state.inventory.Potion || 0}. ETHER ${state.inventory.Ether || 0}. REVIVE ${state.inventory.Revive || 0}. GOLD ${state.gold}.`;
  const mats = Object.entries(state.materials)
    .map(([name, amount]) => `${name} ${amount}.`)
    .join(" ");
  const gear = state.party
    .map((member) => `${member.name}: ${memberEquipmentSummary(member)}`)
    .join(" ");
  say(`${goods} ${mats || "NO MATERIALS."} ${learned || "NO MAGIC."} ${gear}`);
}

function startBattle() {
  const base = enemyBook[state.region.enemy];
  state.enemy = {
    name: state.region.enemy,
    hp: base.hp,
    maxHp: base.hp,
    xp: base.xp,
    damage: base.damage
  };
  state.guardTargetIndex = null;
  hideAnswer();
  els.title.textContent = "BATTLE";
  renderEnemy();

  if (state.region.isBoss) {
    startBossBattle();
  } else {
    beginPartyRound(`${state.enemy.name.toUpperCase()} APPEARED.`);
  }
}

function renderEnemy() {
  els.enemyLine.innerHTML = "";
  const card = document.createElement("div");
  card.className = "enemy-card";
  const sprite = document.createElement("div");
  const label = document.createElement("div");
  label.className = "enemy-label";
  label.textContent = `${state.enemy.name} ${state.enemy.hp}/${state.enemy.maxHp}`;
  drawSprite(sprite, art[state.enemy.name] || art["Null Imp"], "monster-sprite");
  card.append(sprite, label);
  els.enemyLine.append(card);
}

function battleCommands(member) {
  return [
    { label: "FIGHT", onClick: chooseAttack },
    { label: "MAGIC", onClick: chooseSpell, disabled: !member.spellName || member.mp < member.spellCost },
    { label: "ITEM", onClick: openItemMenu, disabled: !hasUsableBattleItems() },
    { label: "SCAN", onClick: analyze },
    { label: "GUARD", onClick: guard },
    { label: "RUN", onClick: flee }
  ];
}

function chooseAttack() {
  const member = activeMember();
  const question = pick(state.region.questions);
  ask(question, "attack", "QUESTION", `${member.name} ATTACKS. PICK THE CORRECT PYTHON ANSWER.`, [
    { label: "CANCEL", onClick: cancelInput }
  ]);
}

function chooseSpell() {
  const member = activeMember();
  const question = pick(state.region.questions);
  ask(question, "spell", "SPELL", `${member.spellName} COSTS ${member.spellCost} MP. PICK THE CORRECT PYTHON ANSWER.`, [
    { label: "CANCEL", onClick: cancelInput }
  ]);
}

function cancelInput() {
  hideAnswer();
  startActorTurn(state.activePartyIndex, "COMMAND RESET.");
}

function openItemMenu(intro = "CHOOSE AN ITEM.") {
  hideAnswer();
  say(intro);
  setCommands("ITEM", [
    { label: `POTION ${itemCount("Potion")}`, onClick: () => openItemTargetMenu("Potion"), disabled: itemCount("Potion") <= 0 },
    { label: `ETHER ${itemCount("Ether")}`, onClick: () => openItemTargetMenu("Ether"), disabled: itemCount("Ether") <= 0 },
    { label: `REVIVE ${itemCount("Revive")}`, onClick: () => openItemTargetMenu("Revive"), disabled: itemCount("Revive") <= 0 },
    { label: "BACK", onClick: cancelInput }
  ]);
  updateStatus();
}

function openItemTargetMenu(itemName) {
  let targets = [];
  if (itemName === "Revive") targets = fallenTargets();
  if (itemName === "Potion") targets = livingTargets();
  if (itemName === "Ether") targets = livingTargets().filter(({ member }) => member.maxMp > 0);
  if (!targets.length) {
    openItemMenu(`NO VALID TARGET FOR ${itemName.toUpperCase()}.`);
    return;
  }

  say(`CHOOSE TARGET FOR ${itemName.toUpperCase()}.`);
  setCommands("TARGET", [
    ...targets.map(({ member, index }) => ({
      label: `${member.name} ${member.hp}/${member.maxHp}`,
      onClick: () => useItemOnTarget(itemName, index)
    })),
    { label: "BACK", onClick: openItemMenu }
  ]);
  updateStatus();
}

function useItemOnTarget(itemName, targetIndex) {
  const actor = activeMember();
  const target = memberAt(targetIndex);

  if (itemCount(itemName) <= 0) {
    openItemMenu(`NO ${itemName.toUpperCase()} LEFT.`);
    return;
  }

  state.inventory[itemName] -= 1;

  if (itemName === "Potion") {
    target.hp = Math.min(target.maxHp, target.hp + 16);
    say(`${actor.name} USED POTION ON ${target.name}.`);
  }

  if (itemName === "Ether") {
    target.mp = Math.min(target.maxMp, target.mp + 8);
    say(`${actor.name} USED ETHER ON ${target.name}.`);
  }

  if (itemName === "Revive") {
    target.hp = Math.max(10, Math.ceil(target.maxHp * 0.4));
    target.mp = Math.max(target.mp, Math.ceil(target.maxMp * 0.25));
    say(`${actor.name} USED REVIVE ON ${target.name}.`);
  }

  updateStatus();
  advancePartyTurn();
}

function analyze() {
  say(pick(state.region.questions).lesson);
  advancePartyTurn();
}

function guard() {
  const member = activeMember();
  member.defending = true;
  say(`${member.name} IS GUARDING.`);
  advancePartyTurn();
}

function flee() {
  if (Math.random() > 0.25) {
    state.enemy = null;
    els.enemyLine.innerHTML = "";
    say("GOT AWAY.");
    setCommands("EXPLORE", [
      { label: "FORWARD", onClick: startBattle },
      { label: "CODEX", onClick: showCodex },
      { label: "REST", onClick: smallRest },
      { label: "RETURN", onClick: showMap }
    ]);
  } else {
    say("CAN'T RUN.");
    beginEnemyTurn();
  }
}

async function resolveHeroAnswer(value) {
  const question = state.pendingQuestion;
  const action = state.pendingAction;
  const actorIndex = state.pendingActorIndex;
  const member = memberAt(actorIndex);
  hideAnswer();

  if (!correct(value, question)) {
    state.mistakes.push(question);
    say(`MISS. ${question.lesson}`);
    advancePartyTurn();
    return;
  }

  state.animating = true;
  if (action === "attack") {
    await animatePhysicalAttack(actorIndex);
    damageEnemy(member.attackDamage);
    say(`${member.name} HIT! ${member.attackDamage} DAMAGE. ${question.lesson}`);
  } else {
    member.mp = Math.max(0, member.mp - member.spellCost);
    await animateSpellCast(actorIndex);
    damageEnemy(member.spellDamage);
    say(`${member.spellName}! ${member.spellDamage} DAMAGE. ${question.lesson}`);
  }
  state.animating = false;

  updateStatus();
  if (state.enemy.hp <= 0) winBattle();
  else advancePartyTurn();
}

function damageEnemy(amount) {
  state.enemy.hp = Math.max(0, state.enemy.hp - amount);
  renderEnemy();
}

function grantBattleRewards() {
  const book = enemyBook[state.enemy.name];
  const gold = randomInt(book.gold[0], book.gold[1]);
  state.gold += gold;
  state.lastLoot = [`GOT ${gold} GOLD.`];

  book.drops.forEach((drop) => {
    if (Math.random() > drop.chance) return;
    if (drop.type === "item") {
      addInventoryItem(drop.name, drop.amount || 1);
      state.lastLoot.push(`FOUND ${drop.name.toUpperCase()}.`);
      return;
    }
    if (drop.type === "material") {
      addMaterial(drop.name, 1);
      state.lastLoot.push(`FOUND ${drop.name}.`);
    }
  });
}

function beginEnemyTurn() {
  updateStatus();
  if (!state.enemy) return;
  const targets = livingPartyIndices();
  if (!targets.length) {
    defeat();
    return;
  }
  const targetIndex = pick(targets);
  const target = memberAt(targetIndex);
  const question = pick(guardQuestions);
  state.activePartyIndex = targetIndex;
  state.guardTargetIndex = targetIndex;
  updateStatus();
  ask(question, "guard", "GUARD CHECK", `${state.enemy.name.toUpperCase()} ATTACKS ${target.name}. ANSWER TO BLOCK.`, [
    { label: "TAKE HIT", onClick: takeHit }
  ], targetIndex);
}

function takeHit() {
  hideAnswer();
  void applyDamage("", state.guardTargetIndex);
}

async function resolveGuardAnswer(value) {
  const question = state.pendingQuestion;
  const targetIndex = state.pendingActorIndex;
  const target = memberAt(targetIndex);
  hideAnswer();
  if (correct(value, question)) {
    state.animating = true;
    await animateEnemyAdvance(targetIndex, true);
    state.animating = false;
    clearDefending();
    say(`${target.name} BLOCKED. ${question.lesson}`);
    beginPartyRound();
  } else {
    state.mistakes.push(question);
    await applyDamage(question.lesson, targetIndex);
  }
}

async function applyDamage(lesson = "", targetIndex = state.guardTargetIndex) {
  const target = memberAt(targetIndex);
  state.animating = true;
  await animateEnemyAdvance(targetIndex, false);
  const damage = target.defending ? Math.ceil(state.enemy.damage / 2) : state.enemy.damage;
  target.hp = Math.max(0, target.hp - damage);
  state.animating = false;
  clearDefending();
  updateStatus();
  if (allPartyDown()) {
    defeat();
  } else {
    const intro = lesson ? `HIT. ${lesson} ` : "";
    say(`${intro}${state.enemy.name.toUpperCase()} DID ${damage} DAMAGE TO ${target.name}.`);
    beginPartyRound();
  }
}

function winBattle() {
  const xp = state.enemy.xp;
  grantBattleRewards();
  state.xp += xp;
  state.enemy = null;
  els.enemyLine.innerHTML = "";
  hideAnswer();
  say(`VICTORY! GAINED ${xp} XP. ${lootSummary()} CHOOSE REWARD.`);
  setCommands("REWARD", [
    { label: "MAX HP", reward: true, onClick: () => reward("hp") },
    { label: "MAX MP", reward: true, onClick: () => reward("mp") },
    { label: "POTION", reward: true, onClick: () => reward("potion") },
    { label: "SPELL", reward: true, onClick: () => reward("spell") }
  ]);
  updateStatus();
}

function reward(type) {
  let msg = "";
  if (type === "hp") {
    state.party.forEach((member) => {
      member.baseMaxHp += 3;
    });
    recalcPartyStats();
    state.party.forEach((member) => {
      member.hp = member.maxHp;
    });
    msg = "PARTY MAX HP UP. ";
  }
  if (type === "mp") {
    state.party.forEach((member) => {
      if (member.spellName) member.baseMaxMp += 2;
    });
    recalcPartyStats();
    state.party.forEach((member) => {
      member.mp = member.maxMp;
    });
    msg = "PARTY MAX MP UP. ";
  }
  if (type === "potion") {
    state.inventory.Potion = (state.inventory.Potion || 0) + 1;
    msg = "GOT POTION. ";
  }
  if (type === "spell") {
    const upgrades = [
      { id: "rune", spellName: "BOLT", spellCost: 4, spellDamage: 21 },
      { id: "bram", spellName: "IF WALL", spellCost: 2, spellDamage: 10 },
      { id: "ada", spellName: "INDEX", spellCost: 5, spellDamage: 20 },
      { id: "iori", spellName: "WHILE", spellCost: 4, spellDamage: 18 }
    ];
    const nextUpgrade = upgrades.find((upgrade) => {
      const member = state.party.find((item) => item.id === upgrade.id);
      return member && member.spellName !== upgrade.spellName;
    });
    if (nextUpgrade) {
      const member = state.party.find((item) => item.id === nextUpgrade.id);
      member.spellName = nextUpgrade.spellName;
      member.spellCost = nextUpgrade.spellCost;
      member.baseSpellDamage = nextUpgrade.spellDamage;
      recalcPartyStats();
      msg = `${member.name} LEARNED ${member.spellName}. `;
    } else {
      state.inventory.Potion = (state.inventory.Potion || 0) + 1;
      msg = "SPELL BOOK WAS DUPLICATE. GOT POTION. ";
    }
  }
  
  const regionIndex = regions.findIndex(r => r.id === state.region.id);
  if (regionIndex === state.currentStage && regionIndex < regions.length - 1) {
    state.currentStage += 1;
    msg += "STAGE CLEARED! NEW REGION UNLOCKED.";
  } else {
    msg += "STAGE CLEARED!";
  }
  say(msg);

  setCommands("EXPLORE", [
    { label: "RETURN", onClick: showMap }
  ]);
  updateStatus();
}

function defeat() {
  hideAnswer();
  const review = state.mistakes.length ? state.mistakes[state.mistakes.length - 1].lesson : "TRY AGAIN.";
  say(`DEFEATED. ${review}`);
  setCommands("RETRY", [
    { label: "REVIEW", onClick: review },
    { label: "RETRY", onClick: retry },
    { label: "RETURN", onClick: showMap }
  ]);
}

function review() {
  const lines = state.mistakes.slice(-3).map((item) => item.lesson);
  say(lines.length ? lines.join(" ") : "NO MISSES RECORDED.");
}

function retry() {
  state.party.forEach((member) => {
    member.hp = Math.max(8, Math.ceil(member.maxHp * 0.65));
    member.mp = Math.max(member.spellName ? 2 : 0, Math.ceil(member.maxMp * 0.65));
    member.defending = false;
  });
  startBattle();
}

function resolvePendingChoice(choice) {
  if (state.animating) return;
  if (!state.pendingQuestion) return;
  if (state.pendingAction === "guard") void resolveGuardAnswer(choice);
  else void resolveHeroAnswer(choice);
}

document.addEventListener("keydown", (event) => {
  if (state.animating) {
    event.preventDefault();
    return;
  }

  if ((event.key === "Enter" || event.key === " ") && finishMessage()) {
    event.preventDefault();
    return;
  }

  if (state.mode === "map") {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveMapSelection("right");
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveMapSelection("left");
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveMapSelection("down");
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveMapSelection("up");
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      enterRegion(regions[selectedMapIndex]);
      return;
    }
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveCommandSelection(1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveCommandSelection(-1);
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    moveCommandSelection(2);
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    moveCommandSelection(-2);
  }
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    activateSelectedCommand();
  }
});

drawSprite(els.partySprites[0], art.hero);
drawSprite(els.partySprites[1], art.knight);
drawSprite(els.partySprites[2], art.mage);
drawSprite(els.partySprites[3], art.ranger);
recalcPartyStats();
showMap();

/* ═══════════════════════════════════════════
   BOSS BATTLE — MONACO EDITOR ENGINE
   ═══════════════════════════════════════════ */

function startBossBattle() {
  say(`${state.enemy.name.toUpperCase()} APPEARED! PREPARE YOUR CODE.`);
  setCommands("BOSS", [
    { label: "BEGIN CODE BATTLE", onClick: initBossIDE }
  ]);
}

function initBossIDE() {
  bossQuestions = [...state.region.questions];
  bossQuestionIndex = 0;

  // Hide lower grid, show Monaco wrapper
  document.querySelector(".lower-grid").classList.add("hidden");
  document.querySelector(".message-window").classList.add("hidden");
  els.monacoWrapper.classList.remove("hidden");
  els.monacoWrapper.style.display = "flex";

  // Initialize Monaco Editor
  if (monacoEditor) {
    monacoEditor.dispose();
    monacoEditor = null;
  }

  require(['vs/editor/editor.main'], function () {
    monaco.editor.defineTheme('boss-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'fbbf24', fontStyle: 'bold' },
        { token: 'string', foreground: '38bdf8' },
        { token: 'number', foreground: '10b981' },
        { token: 'comment', foreground: '6b7280' }
      ],
      colors: {
        'editor.background': '#0a0f1c',
        'editor.foreground': '#f8fafc',
        'editor.lineHighlightBackground': '#1e293b',
        'editorCursor.foreground': '#fbbf24',
        'editor.selectionBackground': '#334155'
      }
    });

    monacoEditor = monaco.editor.create(els.monacoContainer, {
      value: '# Write your Python code here\n',
      language: 'python',
      theme: 'boss-theme',
      fontSize: 14,
      fontFamily: "'Outfit', monospace",
      minimap: { enabled: false },
      lineNumbers: 'on',
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      automaticLayout: true,
      padding: { top: 12 }
    });

    // Bind Ctrl+Enter / Cmd+Enter to submit
    monacoEditor.addAction({
      id: 'submit-code',
      label: 'Submit Code',
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter
      ],
      run: function () {
        checkBossAnswer();
      }
    });

    els.btnRunCode.onclick = checkBossAnswer;

    showBossPrompt();
  });
}

function showBossPrompt() {
  if (bossQuestionIndex >= bossQuestions.length) {
    winBossBattle();
    return;
  }
  const q = bossQuestions[bossQuestionIndex];
  const remaining = bossQuestions.length - bossQuestionIndex;
  els.monacoWrapper.querySelector("header span").textContent =
    `PHASE ${bossQuestionIndex + 1}/${bossQuestions.length}`;
  
  // Clear editor and set a hint comment
  if (monacoEditor) {
    monacoEditor.setValue(`# ${q.prompt}\n`);
    monacoEditor.setPosition({ lineNumber: 2, column: 1 });
    monacoEditor.focus();
  }

  // Start timer (30 seconds per prompt)
  bossTimeLeft = 30;
  updateBossTimerDisplay();
  if (bossTimer) clearInterval(bossTimer);
  bossTimer = setInterval(() => {
    bossTimeLeft--;
    updateBossTimerDisplay();
    if (bossTimeLeft <= 0) {
      clearInterval(bossTimer);
      bossTimer = null;
      failBossPhase();
    }
  }, 1000);
}

function updateBossTimerDisplay() {
  const color = bossTimeLeft <= 10 ? '#ef4444' : '#fbbf24';
  els.btnRunCode.textContent = `COMPILE (${bossTimeLeft}s)`;
  els.btnRunCode.style.background = color;
}

function checkBossAnswer() {
  if (!monacoEditor) return;
  const code = monacoEditor.getValue()
    .split('\n')
    .filter(line => !line.trim().startsWith('#'))
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n');
  
  const q = bossQuestions[bossQuestionIndex];
  const expected = q.answer.trim();
  
  if (code === expected) {
    // Correct!
    if (bossTimer) { clearInterval(bossTimer); bossTimer = null; }
    bossQuestionIndex++;
    
    // Flash green
    els.monacoWrapper.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.6)';
    setTimeout(() => {
      els.monacoWrapper.style.boxShadow = '';
      showBossPrompt();
    }, 800);
  } else {
    // Wrong — flash red, lose time
    els.monacoWrapper.style.boxShadow = '0 0 30px rgba(239, 68, 68, 0.6)';
    bossTimeLeft = Math.max(0, bossTimeLeft - 5);
    updateBossTimerDisplay();
    setTimeout(() => {
      els.monacoWrapper.style.boxShadow = '';
    }, 400);
  }
}

function failBossPhase() {
  cleanupBossIDE();
  say("TIME'S UP! THE BOSS OVERWHELMED YOUR CODE. TRY AGAIN.");
  setCommands("RETRY", [
    { label: "RETRY", onClick: startBattle },
    { label: "RETURN", onClick: showMap }
  ]);
}

function winBossBattle() {
  if (bossTimer) { clearInterval(bossTimer); bossTimer = null; }
  cleanupBossIDE();
  
  const xp = state.enemy.xp;
  grantBattleRewards();
  state.xp += xp;
  state.enemy = null;
  els.enemyLine.innerHTML = "";
  
  const regionIndex = regions.findIndex(r => r.id === state.region.id);
  if (regionIndex === state.currentStage && regionIndex < regions.length - 1) {
    state.currentStage += 1;
  }
  
  say(`BOSS DEFEATED! GAINED ${xp} XP. ${lootSummary()} CHAPTER 1 COMPLETE!`);
  setCommands("VICTORY", [
    { label: "RETURN", onClick: showMap }
  ]);
  updateStatus();
}

function cleanupBossIDE() {
  if (monacoEditor) {
    monacoEditor.dispose();
    monacoEditor = null;
  }
  els.monacoWrapper.classList.add("hidden");
  els.monacoWrapper.style.display = "";
  document.querySelector(".lower-grid").classList.remove("hidden");
  document.querySelector(".message-window").classList.remove("hidden");
}
