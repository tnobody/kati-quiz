// Import stylesheets

const format = (d) => {
  const day = `${d.getDate()}`.padStart(2, '0');
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const year = `${d.getFullYear()}`;
  return `${day}.${month}.${year}`;
}

const now = new Date();
const dateEl = document.getElementById('date');
const quoteEl = document.getElementById('quote');

const formattedNow = format(now)
dateEl.innerText = formattedNow;

const quoteMap = new Map();

quoteMap.set('24.08.2019', `Ab morgen wird hier jeden Tag ein kleines Rätsel für Dich stehen, ein Hinweis auf einen Ort in unserer Wohnung  😘`);
quoteMap.set('25.08.2019', `Ich war mal voller Spielzeug, nun bin ich ziemlich leer`);
quoteMap.set('26.08.2019', `Ich bin eher unordentlich, doch werde bald ausziehen!!`);
quoteMap.set('27.08.2019', `Ich kann zwischen zwei stiegen herausgezogen werden`);
quoteMap.set('28.08.2019', `Ich bin DORT wo der Wahnsinn beheimatet ist`);
quoteMap.set('29.08.2019', `Ich sollte Blumen tragen, nun Trage ich ein Herz`);
quoteMap.set('30.08.2019', `Ich bin da wo Keiner sein Zeug verstaut`);
quoteMap.set('31.08.2019', `Ich bin in einer Halbkugel, die zum leuchten gebracht werden kann`);

quoteEl.innerText = quoteMap.get(formattedNow) || 'Zu früh oder zu spät 😇'