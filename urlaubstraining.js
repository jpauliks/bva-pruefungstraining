const HOLIDAY_FOCUS = {
  '2026-11-22': [[5, 'Zweckbindung und Deckungsfähigkeit', /deckungs|titel|zweck|mittel|wirtschaft/i], [2, 'Tabellenentgelt, Teilzeit und Teilmonat', /entgelt|teilzeit|teilmonat|stufe/i]],
  '2026-11-23': [[1, 'Fehlerhafte Ernennung', /ernenn|urkunde|nichtig|wirksam|rücknahme/i], [3, 'Krankenhaus, Zahnarzt und Rezepte', /krankenhaus|zahn|rezept|eigenbehalt|bemess|entstanden/i]],
  '2026-11-24': [[0, 'Protokoll, Geschäftsgang und Aktenführung', /protokoll|akte|vermerk|post|geschäftsgang|mitzeich/i], [4, 'Flug, Hotel, Fahrtkosten und Frist', /flug|hotel|übernacht|frist|wegstreck|tagegeld/i]],
  '2026-11-25': [[5, 'Jährlichkeit, Übertragbarkeit und Sperren', /jährlich|übertrag|sperr|reste|deckungs|veranschlag/i], [2, 'Jahressonderzahlung und Ansprüche', /sonderzahlung|kürzung|ausschluss|beendig|urlaub|freistell/i]],
  '2026-11-26': [[1, 'Rücknahme und Rechtsfolgen', /rücknahme|nichtig|heilung|ernenn|urkunde/i], [3, 'Vorsorge, Geburt und Brille', /vorsorge|geburt|brille|hilfsmittel|bemess|eigenbehalt|beleg/i]],
  '2026-11-27': [[5, 'HKR-Klausurvorbereitung', /wirtschaft|titel|mittel|deckungs|zweck|übertrag/i], [2, 'Tarifrechtliche Klausurvorbereitung', /vertrag|entgelt|stufe|sonderzahlung|teilmonat/i]],
  '2026-11-28': [[0, 'Organisationsklausur vorbereiten', /vermerk|post|mitzeich|organigramm|dienstweg|protokoll/i], [4, 'Reisekostenabrechnung vorbereiten', /wegstreck|tagegeld|kürzung|übernacht|frist|beleg/i]],
  '2026-11-29': [[1, 'Urkunde und Rücknahme', /rücknahme|urkunde|ernenn|personalakte|nichtig/i], [3, 'Vollständige Beihilfeabrechnung', /beleg|entstanden|eigenbehalt|bemess|frist|rezept/i]],
  '2026-11-30': [[5, 'Übertragbarkeit und Titelzuordnung', /übertrag|titel|reste|deckungs|feststell/i], [2, 'Entgelt, Stufen und Ansprüche festigen', /entgelt|teilmonat|stufe|sonderzahlung|urlaub/i]],
  '2026-12-01': [[1, 'Ernennungsschema und Fehlerfolgen', /ernenn|urkunde|wirksam|nichtig|heilung|rücknahme/i], [3, 'Fristen, Personen und Belegprüfung', /frist|angehör|familie|beleg|entstanden|bemess|eigenbehalt/i]],
  '2026-12-02': [[0, 'Telefonnotiz, Vermerk und Mitzeichnung', /telefon|vermerk|mitzeich|zeichn|geschäftsgang/i], [4, 'Rechenfehler und Fristen', /wegstreck|tagegeld|kürzung|frist|kilometer|übernacht/i]],
  '2026-12-03': [[4, 'Reisekosten festigen', /wegstreck|tagegeld|kürzung|kilometer/i], [3, 'Beihilfe festigen', /beleg|bemess|frist|entstanden|eigenbehalt/i]]
};

const HOLIDAY_CUSTOM_QUESTIONS = {
  frauLevin: {
    id: 'BVA-2026-W48-AT-LEVIN-001',
    originId: 'BVA-CASE-AT-FRAU-LEVIN-20261019',
    subject: 'Arbeits- und Tarifrecht',
    topic: 'Teilzeitentgelt und Teilmonatsentgelt',
    difficulty: 'prüfungsnah',
    type: 'number',
    question: '2026: Frau Levin beginnt am 19.10.2026. Vereinbart sind 23,4 von 39 Wochenstunden; das fiktive Vollzeit-Tabellenentgelt beträgt 4.030 Euro. Anspruch besteht bis zum Monatsende. Wie hoch ist ihr Tabellenentgelt für Oktober 2026 in Euro?',
    correct: 1014,
    explanation: 'Zuerst wird das Teilzeitentgelt nach dem Verhältnis 23,4 zu 39 ermittelt; anschließend wird der Teilmonat nach Kalendertagen berechnet. Grundlage: § 24 Abs. 2 Buchst. a und Abs. 3 Satz 1 TVöD.',
    legalBasis: '§ 24 Abs. 2 Buchst. a und Abs. 3 Satz 1 TVöD',
    materialSources: [{
      file: 'Skript_ATR_Aug25.pdf',
      archive: '08-Arbeits-und-Tarifrecht-2.zip',
      archivePath: 'Skript_ATR_Aug25.pdf',
      pdfPages: [80, 81],
      pageConvention: 'PDF-Seiten ab 1'
    }],
    examAnchor: {
      file: 'HKR u ATR.pdf',
      pdfPages: [5, 6, 7],
      role: 'Themen- und Tiefenorientierung, eigenständig formulierter Wiederholungsfall'
    },
    week: '2026-11-23',
    caseYear: 2026,
    revision: 1,
    reuse: 'gezielte Wiederholung',
    repeatsOrigins: ['BVA-2026-W47-AT-046', 'BVA-2026-W47-AT-047'],
    primarySources: [{
      url: 'https://www.badv.bund.de/SharedDocs/Downloads/DE/Zentrale_Dienste/Tarifrecht/TVoeD.pdf',
      checked: '2026-11-22',
      provision: '§ 24 Abs. 2 Buchst. a und Abs. 3 Satz 1 TVöD'
    }],
    estimatedSeconds: 75
  }
};

function holidayKey(day) {
  return 'vorbereitung::' + day;
}

function holidayTarget(day) {
  const target = new Date(day + 'T12:00:00Z');
  target.setUTCDate(target.getUTCDate() + 1);
  return target.toISOString().slice(0, 10);
}

function holidayTasks(day) {
  const source = WEEK_PACKAGES.find(p => p.packageId === 'BVA-2026-W47-r1');
  const session = HOLIDAY_FOCUS[day];
  return session.flatMap(([index, , focus]) => {
    const questions = source.bank[SUBJECTS[index]];
    const offset = (Number(day.slice(-2)) * 7) % questions.length;
    const rotated = questions.slice(offset).concat(questions.slice(0, offset));
    const relevance = q => Number(focus.test(q.question + ' ' + (q.legalBasis || '')));
    const selected = [];
    const ranked = rotated.sort((a, b) => relevance(b) - relevance(a));
    for (const [type, count] of Object.entries({single: 16, multi: 5, number: 5, order: 1, match: 3})) {
      selected.push(...ranked.filter(question => question.type === type).slice(0, count));
    }
    for (const question of ranked) {
      if (selected.length === 30) break;
      if (!selected.includes(question)) selected.push(question);
    }
    if (day === '2026-11-22' && index === 2) {
      const replaceAt = selected.findIndex(question => question.type === 'number');
      if (replaceAt >= 0) selected[replaceAt] = HOLIDAY_CUSTOM_QUESTIONS.frauLevin;
    }
    return selected;
  });
}

const berlinHour = new Intl.DateTimeFormat('de-DE', {
  timeZone: 'Europe/Berlin', hour: 'numeric', hourCycle: 'h23'
});

function availableHolidayDays(now = new Date()) {
  const today = dateKey(now);
  const days = [today];
  const hour = berlinHour.formatToParts(now).find(part => part.type === 'hour');
  if (Number(hour.value) >= 20) days.push(holidayTarget(today));
  return days.filter(day => HOLIDAY_FOCUS[day]);
}

function renderHoliday() {
  const today = dateKey();
  const heading = document.querySelector('#main > h2');
  for (const day of availableHolidayDays()) heading.before(holidaySection(day, today));
}

function holidaySection(day, today) {
  const session = HOLIDAY_FOCUS[day];
  const key = holidayKey(day);
  const result = state.history.find(r => r.preparationDay === day);
  const draft = state.drafts[key];
  const section = document.createElement('section');
  section.dataset.preparationDay = day;
  const note = day === today
    ? 'Bitte den Ergebnisbericht möglichst bis heute um 19:45 Uhr absenden.'
    : 'Vorab verfügbar. Bearbeite dieses Paket morgen oder starte schon jetzt. Ergebnisbericht bitte bis ' + fmt(day) + ', 19:45 Uhr, absenden.';
  section.innerHTML = '<h2>Vorbereitung für ' + fmt(holidayTarget(day)) + '</h2>'
    + '<p>' + session.map(([, title]) => esc(title)).join(' · ') + '</p>'
    + '<p class="small">60 Fragen mit Wiederholungen aus der Fragenbank. ' + esc(note) + '</p>';
  const button = document.createElement('button');
  button.textContent = result ? 'Ergebnis öffnen und per E-Mail teilen'
    : draft ? 'Vorbereitung fortsetzen (' + progress(draft) + '/60)' : '60 Vorbereitungsfragen starten';
  button.onclick = () => {
    if (result) {
      state.active = {kind: 'result', id: result.id};
    } else {
      if (!state.drafts[key]) {
        const tasks = shuffled(prepare(SUBJECTS[session[0][0]], holidayTasks(day)));
        state.drafts[key] = {
          id: crypto.randomUUID(), subject: SUBJECTS[session[0][0]], mode: 'practice',
          preparationDay: day, targetDay: holidayTarget(day), tasks, answers: tasks.map(initial),
          index: 0, started: new Date().toISOString(), week: weekKey(), packageId: 'BVA-Urlaub-2026'
        };
      }
      state.active = {kind: 'draft', key};
    }
    persist();
    render();
    focusMain();
  };
  section.append(button);
  return section;
}

function refreshHolidayRelease() {
  if (!document.getElementById('subjects')) return;
  const shown = [...document.querySelectorAll('[data-preparation-day]')].map(section => section.dataset.preparationDay);
  if (shown.join() !== availableHolidayDays().join()) render();
}

window.addEventListener('focus', refreshHolidayRelease);
setInterval(refreshHolidayRelease, 15000);

function exerciseTitle(exercise) {
  return exercise.targetDay ? 'Vorbereitung für ' + fmt(exercise.targetDay) : exercise.subject;
}
