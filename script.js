// Puan Durumu Verileri (Dinamik Veriler)
const puanDurumu = [
    { sira: 1, takim: "Mahmut Enes Göze", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/f/f4/PSG_logosu.svg/422px-PSG_logosu.svg.png?20210520090551", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 2, takim: "Emre Kaya", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/768px-FC_Internazionale_Milano_2021.svg.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 3, takim: "Mustafa Kemal Keylan", logo: "https://upload.wikimedia.org/wikipedia/tr/9/98/Real_Madrid.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 4, takim: "Berat Gölpınar ", logo: "https://upload.wikimedia.org/wikipedia/tr/f/fd/RB_Leipzig.png?20150823162240", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 5, takim: "Ahmet Hakan Avan", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/225px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 6, takim: "Hüsam", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/AC_Milan.png/567px-AC_Milan.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 7, takim: "Mehmet Emin Mert", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/d/dc/SL_Benfica.png/225px-SL_Benfica.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 8, takim: "Batuhan Akın", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/SSC_Napoli.svg/669px-SSC_Napoli.svg.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 9, takim: "Furkan Doğan", logo: "https://upload.wikimedia.org/wikipedia/tr/6/61/Sporting_Lizbon_logo.png?20100916061141", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 10, takim: "Talha Aydın", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg/225px-Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 11, takim: "Yiğit Emre", logo: "https://upload.wikimedia.org/wikipedia/tr/4/47/FC_Barcelona.png?20240504160644", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 12, takim: "Ayberk ", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/225px-Logo_TSG_Hoffenheim.svg.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 13, takim: "Burak Pek", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/1/1a/Atl%C3%A9tico_Madrid_logo.png/225px-Atl%C3%A9tico_Madrid_logo.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 14, takim: "Abdülkerim Karademir", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/7/79/Everton_Logo.png/300px-Everton_Logo.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 15, takim: "Erdem Deka", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/3/33/Real_Sociedad.png/225px-Real_Sociedad.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 16, takim: "Egemen Demirel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/225px-Borussia_Dortmund_logo.svg.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 17, takim: "Burak Kotan", logo: "https://upload.wikimedia.org/wikipedia/tr/8/88/Olyon.png?20091024130812", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 18, takim: "Ahmet Baran Çiftçi", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/f/fc/Westham_logo.png/225px-Westham_logo.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 19, takim: "Yusuf Paldır", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/3/39/Celtic_FC_logo.png/225px-Celtic_FC_logo.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 20, takim: "El Agep", logo: "https://upload.wikimedia.org/wikipedia/tr/c/c7/Atalanta_bc.gif", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 21, takim: "Selahattin Eyüp Gürkan", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/PSV_Eindhoven_-_Philips_Stadion_-_Kleedkamer_Welkom_-_Cropped_Logo.jpg/225px-PSV_Eindhoven_-_Philips_Stadion_-_Kleedkamer_Welkom_-_Cropped_Logo.jpg", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 22, takim: "Hasan Şefik", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/d/d9/Athleticbilbao.png/225px-Athleticbilbao.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 23, takim: "Batuhan Akın", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/SSC_Napoli.svg/669px-SSC_Napoli.svg.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 24, takim: "Efe Çakıcı", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/8/86/Fenerbah%C3%A7e_SK.png/300px-Fenerbah%C3%A7e_SK.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 25, takim: "Karahan Ünverdi", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/6/68/AFC_Ajax_logo.png/225px-AFC_Ajax_logo.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 26, takim: "Emir Afşar", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/9/92/Arsenal_Football_Club.png/225px-Arsenal_Football_Club.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 27, takim: "Muhammed Talha Ayvalı", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/1/13/AS_Roma_Logo_2017.png/225px-AS_Roma_Logo_2017.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 28, takim: "Ahmet Kubilay Şeker", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/a/a3/Lilleoscyeni.png/300px-Lilleoscyeni.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 29, takim: "Yusuf Korkmaz", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/f/f6/Manchester_City.png/225px-Manchester_City.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 30, takim: "Volkan Gökçe", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0d/Chelsea_FC.png/270px-Chelsea_FC.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 31, takim: "Yusuf Kağan", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/225px-Eintracht_Frankfurt_Logo.svg.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 32, takim: "Uğur Güler", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Galatasaray_Sports_Club_Logo.svg/300px-Galatasaray_Sports_Club_Logo.svg.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 33, takim: "Bilal Gölbaşı", logo: "https://upload.wikimedia.org/wikipedia/tr/6/6d/Newcastle_United_crest.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 34, takim: "Batuhan Temizer", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/a/a2/Bayer_Leverkusen.png/225px-Bayer_Leverkusen.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 35, takim: "Fatih Yılmaz", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/3/3f/150px-Liverpool_FC_logo.png/375px-150px-Liverpool_FC_logo.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 36, takim: "Tarık Enes", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/f/fc/Villarreal_CF_logo.png/225px-Villarreal_CF_logo.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },
    { sira: 37, takim: "Batın Efe Yolcular", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/c/c5/Crystal_Palace_FC_logo_%282022%29.png/225px-Crystal_Palace_FC_logo_%282022%29.png", o: 0, g: 0, b: 0, m: 0, a: 0, y: 0, av: 0, p: 0 },

];

// Fikstür Verileri (Dinamik Veriler)
const fikstur = [
    { tarih: "12 Ekim 2024", takim1: "Galatasaray", skor: "2-1", takim2: "Fenerbahçe" },
    { tarih: "13 Ekim 2024", takim1: "Beşiktaş", skor: "3-2", takim2: "Trabzonspor" }
];

// Puan Durumu Tablosunu Oluşturma
const tableBodyPuan = document.getElementById('puanDurumu');

puanDurumu.forEach(takim => {
    const row = `
        <tr>
            <td>${takim.sira}</td>
            <td><img src="${takim.logo}" class="team-logo"> ${takim.takim}</td>
            <td>${takim.o}</td>
            <td>${takim.g}</td>
            <td>${takim.b}</td>
            <td>${takim.m}</td>
            <td>${takim.a}</td>
            <td>${takim.y}</td>
            <td>${takim.av}</td>
            <td>${takim.p}</td>
        </tr>
    `;
    tableBodyPuan.innerHTML += row;
});

// Fikstür Tablosunu Oluşturma
const tableBodyFikstur = document.getElementById('fikstur');

fikstur.forEach(match => {
    const row = `
        <tr>
            <td>${match.tarih}</td>
            <td>${match.takim1}</td>
            <td>${match.skor}</td>
            <td>${match.takim2}</td>
        </tr>
    `;
    tableBodyFikstur.innerHTML += row;
});

// Hamburger menü kontrolü
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
