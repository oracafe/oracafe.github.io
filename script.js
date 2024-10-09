/*const fixtureData = [
    { date: '2024-10-10', time: '14:00', team1: 'Takım A', team2: 'Takım B' },
    { date: '2024-10-10', time: '16:00', team1: 'Takım C', team2: 'Takım D' },
];
/*
const standingsData = [
    { team: 'Takım A', played: 2, wins: 1, draws: 1, losses: 0, points: 4, gd: 3 },
    { team: 'Takım B', played: 2, wins: 0, draws: 1, losses: 1, points: 1, gd: -1 },
];
/*
const teamsData = [
    { name: 'Takım A', description: 'Güçlü savunma stratejisi.' },
    { name: 'Takım B', description: 'Hücum odaklı, yaratıcı bir takım.' },
    { name: 'Takım ', description: 'Hücum odaklı, yaratıcı bir takım.' },

];
*/
const fixtureGrid = document.querySelector('.fixture-grid');
fixtureData.forEach(match => {
    const matchElement = document.createElement('div');
    matchElement.classList.add('match');
    matchElement.innerHTML = `<p><strong>${match.team1}</strong> vs <strong>${match.team2}</strong></p><p>${match.date} - ${match.time}</p>`;
    fixtureGrid.appendChild(matchElement);
});

const standingsBody = document.getElementById('standings-body');
standingsData.forEach(team => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${team.team}</td>
        <td>${team.played}</td>
        <td>${team.wins}</td>
        <td>${team.draws}</td>
        <td>${team.losses}</td>
        <td>${team.points}</td>
        <td>${team.gd}</td>
    `;
    standingsBody.appendChild(row);
});

const teamsContainer = document.querySelector('.teams-container');
teamsData.forEach(team => {
    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');
    teamCard.innerHTML = `<h3>${team.name}</h3><p>${team.description}</p>`;
    teamsContainer.appendChild(teamCard);
});