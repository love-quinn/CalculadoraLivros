window.addEventListener('load', function() {
    function generateMultiplicationTable(number, totalPages, limit = 8) {
        const resultados = [];
        for (let i = 1; i <= limit; i++) {
            if (number * i > totalPages) {
                resultados.push(totalPages);
                break;
            }
            resultados.push(number * i);
        }
        return resultados;
    }

    /** Parse "DD/MM" from "DD/MM - Weekday" and return a Date at midnight for comparison */
    function parseDayDate(dayStr) {
        const match = dayStr.match(/^(\d{2})\/(\d{2})/);
        if (!match) return null;
        const year = new Date().getFullYear();
        return new Date(year, parseInt(match[2], 10) - 1, parseInt(match[1], 10));
    }

    function getDayState(dayStr) {
        const dayDate = parseDayDate(dayStr);
        if (!dayDate) return 'future';
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        dayDate.setHours(0, 0, 0, 0);
        if (dayDate.getTime() < today.getTime()) return 'past';
        if (dayDate.getTime() === today.getTime()) return 'today';
        return 'future';
    }

    const mobileTotalPages = 549;
    const desktopTotalPages = 252;
    const mobileResults = generateMultiplicationTable(69, mobileTotalPages);
    const desktopResults = generateMultiplicationTable(32, desktopTotalPages);

    const weekdays = [
        '18/02 - Quarta-feira', '19/02 - Quinta-feira', '20/02 - Sexta-feira', '21/02 - Sábado', '22/02 - Domingo', '23/02 - Segunda-feira', '24/02 - Terça-feira', '25/02 - Quarta-feira'
    ];

    const baseRowClass = 'py-2 px-3 rounded-lg border font-semibold flex flex-wrap items-center gap-2';
    const pastRowClass = 'bg-gray-100 border-gray-200 text-gray-500 line-through opacity-75';
    const todayRowClass = 'bg-green-100 border-green-400 border-2 ring-2 ring-green-400/50 text-green-900';
    const futureRowClass = 'bg-amber-50/80 border-amber-200/50 text-amber-900';

    function buildRow(day, pageNum, totalPages, state) {
        const p = document.createElement('p');
        const percent = totalPages > 0 ? ((pageNum / totalPages) * 100).toFixed(0) : '0';
        const stateClass = state === 'past' ? pastRowClass : state === 'today' ? todayRowClass : futureRowClass;
        p.className = `${baseRowClass} ${stateClass}`;

        if (state === 'today') {
            const badge = document.createElement('span');
            badge.className = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-green-500 text-white uppercase';
            badge.textContent = 'Hoje';
            p.appendChild(badge);
        }

        const text = document.createTextNode(`${day} — até página ${pageNum} (${percent}%)`);
        p.appendChild(text);
        return p;
    }

    function fillTable(tableElement, results, totalPages) {
        tableElement.innerHTML = '';
        results.forEach((res, idx) => {
            const day = weekdays[idx % weekdays.length];
            const state = getDayState(day);
            const row = buildRow(day, res, totalPages, state);
            tableElement.appendChild(row);
        });
    }

    const mobileTables = document.querySelectorAll('.mobile-multiplication-table');
    mobileTables.forEach(table => fillTable(table, mobileResults, mobileTotalPages));

    const desktopTables = document.querySelectorAll('.desktop-multiplication-table');
    desktopTables.forEach(table => fillTable(table, desktopResults, desktopTotalPages));
});