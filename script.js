const fixtureData = [
    { date: '2024-09-11 (CUMARTESİ)', time: '11.00', team1: 'İbrahim Dağ', team2: 'Berat Gölpınar' },
    { date: '2024-09-11 (CUMARTESİ)', time: '11.00', team1: 'Muhammed Talha Ayvalı', team2: 'Ahmet Utku Özel' },
    { date: '2024-09-11 (CUMARTESİ)', time: '11.00', team1: 'Emre Kaya', team2: 'Hamid Heemati' },
    { date: '2024-09-11 (CUMARTESİ)', time: '11.00', team1: 'Muhammed Enes Göze', team2: 'Mustafa Can' },
    { date: '2024-09-11 (CUMARTESİ)', time: '11.00', team1: 'İbrahim Efe Küpeli', team2: 'Emir Afşar' },
    { date: '2024-09-11 (CUMARTESİ)', time: '12.00', team1: 'Mustafa Kemal Keylan', team2: 'Bekir Çömez' },
    { date: '2024-09-11 (CUMARTESİ)', time: '12.00', team1: 'Alperem Ballı', team2: 'Yusuf Paldır' },
    { date: '2024-09-11 (CUMARTESİ)', time: '12.00', team1: 'Mustafa Büyükköroğlu', team2: 'Caner Aktepe' },
    { date: '2024-09-11 (CUMARTESİ)', time: '12.00', team1: 'Yakup Taha Yıldırım', team2: 'Ahmet Baran Çifçi' },
    { date: '2024-09-11 (CUMARTESİ)', time: '12.00', team1: 'Abdul Moqtadir Jamil', team2: 'Selahattin Eyüp Gürkan' },
    { date: '2024-09-12 (PAZAR)', time: '11.00', team1: 'Furkan Doğan', team2: 'Ertuğrul Meral' },
    { date: '2024-09-12 (PAZAR)', time: '11.00', team1: 'Talha Aydın', team2: 'Ali Osman Köse' },
    { date: '2024-09-12 (PAZAR)', time: '11.00', team1: 'Fatih Yılmaz', team2: 'Hasan Şefik' },
    { date: '2024-09-12 (PAZAR)', time: '11.00', team1: 'Kubilay Dikçal', team2: 'Ayberk' },
    { date: '2024-09-12 (PAZAR)', time: '11.00', team1: 'Eren Ataş', team2: 'Erdem Deka' },
    { date: '2024-09-12 (PAZAR)', time: '11.00', team1: 'Umut Kepenek', team2: 'Yiğit Emre' },
    { date: '2024-09-12 (PAZAR)', time: '12.00', team1: 'Abdulkerim Karademir', team2: 'Mehmet Bacak' },
    { date: '2024-09-12 (PAZAR)', time: '12.00', team1: 'Egemen Demirel', team2: 'Levent Birbaş' },
    { date: '2024-09-12 (PAZAR)', time: '12.00', team1: 'Kerem Polat', team2: 'Burak Pek' },
    { date: '2024-09-12 (PAZAR)', time: '12.00', team1: 'Emad Kaild', team2: 'Efe Çakıcı' },
    { date: '2024-09-12 (PAZAR)', time: '12.00', team1: 'Berat Bacak', team2: 'Burak Kotan' },
    { date: '2024-09-13 (PAZARTESİ)', time: '18.00', team1: 'Mehmet Emin Mert', team2: 'Baran Doğu' },
    { date: '2024-09-13 (PAZARTESİ)', time: '18.00', team1: 'Kaan Gülbil', team2: 'A. Hakan Avan' },
    { date: '2024-09-13 (PAZARTESİ)', time: '18.00', team1: 'Husam Aqlan', team2: 'Ömer Kartal' },
    { date: '2024-09-13 (PAZARTESİ)', time: '19.00', team1: 'Fatih Selek', team2: 'Batuhan Akın' },
    { date: '2024-09-14 (SALI)', time: '18.00', team1: 'Tarık Enes', team2: 'Yusuf Korkmaz' },
    { date: '2024-09-14 (SALI)', time: '18.00', team1: 'Ali Mustafa Çakar', team2: 'Ahmet Kubilay Şeker' },
    { date: '2024-09-15 (ÇARŞAMBA)', time: '18.00', team1: 'Birkan Demir', team2: 'Yusuf Kağan Hasbek' },
    { date: '2024-09-15 (ÇARŞAMBA)', time: '18.00', team1: 'Hakan İyidoğan', team2: 'Karahan Ünverdi' },
    { date: '2024-09-15 (PERŞEMBE)', time: '19.00', team1: 'Emir Taplaktepe', team2: 'Volkan Gökçe' },
];
/*
const standingsData = [
    { team: 'Takım A', played: 2, wins: 1, draws: 1, losses: 0, points: 4, gd: 3 },
    { team: 'Takım B', played: 2, wins: 0, draws: 1, losses: 1, points: 1, gd: -1 },
];
 ZİRVE TEK KİŞİLİK
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
