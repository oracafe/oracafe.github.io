// Puan Durumu Verileri (Dinamik Veriler)takim1
const puanDurumu = [
    { sira: 1, takim: "Ayberk ", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/d/d9/Athleticbilbao.png/225px-Athleticbilbao.png", o: 6, g: 6, b: 0, m: 0, a: 38, y: 4, av: 34, p: 18 },
    { sira: 2, takim: "Karahan Ünverdi", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/b/b6/Manchester_United_FC_logo.png/225px-Manchester_United_FC_logo.png", o: 6, g: 6, b: 0, m: 0, a: 30, y: 1, av: 29, p: 18 },
    { sira: 3, takim: "Yiğit Emre", logo: "https://upload.wikimedia.org/wikipedia/tr/4/47/FC_Barcelona.png?20240504160644", o: 6, g: 6, b: 0, m: 0, a: 23, y: 1, av: 22, p: 18 },
    { sira: 4, takim: "Efe Çakıcı", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/8/86/Fenerbah%C3%A7e_SK.png/300px-Fenerbah%C3%A7e_SK.png", o: 6, g: 6, b: 0, m: 0, a: 24, y: 3, av: 21, p: 18 },
    { sira: 5, takim: "Erdem Deka", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_of_Be%C5%9Fikta%C5%9F_JK.svg/330px-Logo_of_Be%C5%9Fikta%C5%9F_JK.svg.png", o: 6, g: 6, b: 0, m: 0, a: 25, y: 5, av: 20, p: 18 },

    { sira: 6, takim: "Berat Gölpınar ", logo: "https://upload.wikimedia.org/wikipedia/tr/f/fd/RB_Leipzig.png?20150823162240", o: 6, g: 5, b: 1, m: 0, a: 22, y: 5, av: 17, p: 16 },
    { sira: 7, takim: "Tarık Enez", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/3/33/Real_Sociedad.png/225px-Real_Sociedad.png", o: 6, g: 5, b: 0, m: 1, a: 18, y: 5, av: 13, p: 15 },
    { sira: 8, takim: "Yusuf Kağan", logo: "https://upload.wikimedia.org/wikipedia/tr/6/6d/Tottenham_Hotspur.png", o: 6, g: 5, b: 0, m: 1, a: 14, y: 6, av: 8, p: 15 },
    { sira: 9, takim: "Hasan Şefik", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Al_Hilal_SFC_Logo.svg/225px-Al_Hilal_SFC_Logo.svg.png", o: 6, g: 4, b: 2, m: 0, a: 22, y: 8, av: 14, p: 14 },
    { sira: 10, takim: "Ahmet Hakan Avan", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/225px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png", o: 6, g: 4, b: 1, m: 1, a: 20, y: 8, av: 12, p: 13 },
    { sira: 11, takim: "Kaan Gülbil", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Al_Nassr_FC_Logo.svg/210px-Al_Nassr_FC_Logo.svg.png", o: 6, g: 4, b: 1, m: 1, a: 13, y: 2, av: 11, p: 13 },
    { sira: 12, takim: "Abdülkerim Karademir", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Galatasaray_Star_Logo.png/225px-Galatasaray_Star_Logo.png", o: 6, g: 4, b: 0, m: 2, a: 22, y: 4, av: 21, p: 12 },

    { sira: 13, takim: "Mahmut Enes Göze", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/f/f4/PSG_logosu.svg/422px-PSG_logosu.svg.png?20210520090551", o: 6, g: 4, b: 0, m: 2, a: 17, y: 10, av: 7, p: 12 },

    { sira: 14, takim: "Fatih Yılmaz", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/5/57/Aston_Villa.png/225px-Aston_Villa.png", o: 6, g: 4, b: 0, m: 2, a: 14, y: 9, av: 5, p: 12 },
    { sira: 15, takim: "Hüsam", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/AC_Milan.png/567px-AC_Milan.png", o: 6, g: 4, b: 0, m: 2, a: 12, y: 15, av: -3, p: 12 },
    { sira: 16, takim: "Volkan Gökçe", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0d/Chelsea_FC.png/270px-Chelsea_FC.png", o: 6, g: 3, b: 2, m: 1, a: 20, y: 11, av: 9, p: 11 },

    { sira: 17, takim: "Yusuf Korkmaz", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/f/f6/Manchester_City.png/225px-Manchester_City.png", o: 6, g: 3, b: 1, m: 2, a: 21, y: 20, av: 1, p: 10 },

    { sira: 18, takim: "Burak Pek", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/1/1a/Atl%C3%A9tico_Madrid_logo.png/225px-Atl%C3%A9tico_Madrid_logo.png", o: 6, g: 3, b: 0, m: 3, a: 26, y: 9, av: 15, p: 9 },
    { sira: 19, takim: "Burak Kotan", logo: "https://upload.wikimedia.org/wikipedia/tr/8/88/Olyon.png?20091024130812", o: 6, g: 3, b: 0, m: 3, a: 11, y: 9, av: 2, p: 9 },
    { sira: 20, takim: "Selahattin Eyüp Gürkan", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/a/a2/Bayer_Leverkusen.png/225px-Bayer_Leverkusen.png", o: 6, g: 2, b: 0, m: 2, a: 12, y: 10, av: 2, p: 6 },

    { sira: 21, takim: "Emir Afşar", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/9/92/Arsenal_Football_Club.png/225px-Arsenal_Football_Club.png", o: 6, g: 3, b: 0, m: 3, a: 16, y: 20, av: -4, p: 6 },


    { sira: 22, takim: "Recep Can Çalışır", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/3/3f/150px-Liverpool_FC_logo.png/375px-150px-Liverpool_FC_logo.png", o: 6, g: 2, b: 0, m: 4, a: 9, y: 14, av: -5, p: 6 },
    { sira: 23, takim: "Muhammed Talha Ayvalı", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/1/13/AS_Roma_Logo_2017.png/225px-AS_Roma_Logo_2017.png", o: 5, g: 2, b: 0, m: 3, a: 9, y: 35, av: -26, p: 6 },

    { sira: 24, takim: "Mustafa Eren Ural", logo: "https://upload.wikimedia.org/wikipedia/tr/9/98/Real_Madrid.png", o: 6, g: 1, b: 0, m: 5, a: 8, y: 15, av: -7, p: 3 },


    { sira: 25, takim: "Ahmet Baran Çiftçi", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/f/fc/Westham_logo.png/225px-Westham_logo.png", o: 6, g: 1, b: 0, m: 5, a: 4, y: 29, av: -25, p: 3 },




    { sira: 26, takim: "Uğur Güler", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/PSV_Eindhoven_-_Philips_Stadion_-_Kleedkamer_Welkom_-_Cropped_Logo.jpg/225px-PSV_Eindhoven_-_Philips_Stadion_-_Kleedkamer_Welkom_-_Cropped_Logo.jpg", o: 6, g: 0, b: 0, m: 6, a: 1, y: 32, av: -31, p: 0 },
    { sira: 27, takim: "Egemen Demirel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/225px-Borussia_Dortmund_logo.svg.png", o: 6, g: 0, b: 0, m: 6, a: 0, y: 18, av: -18, p: 0 },
    { sira: 28, takim: "Mehmet Emin Mert", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/5/52/FC.Porto.png/225px-FC.Porto.png", o: 6, g: 0, b: 0, m: 6, a: 0, y: 18, av: -18, p: 0 },
    { sira: 29, takim: "Bilal Gölbaşı", logo: "https://upload.wikimedia.org/wikipedia/tr/6/6d/Newcastle_United_crest.png", o: 6, g: 0, b: 0, m: 6, a: 0, y: 18, av: -18, p: 0 },
    { sira: 30, takim: "Talha Aydın", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg/225px-Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg.png", o: 6, g: 0, b: 0, m: 6, a: 0, y: 18, av: -18, p: 0 },
    { sira: 31, takim: "Emre Kaya", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/768px-FC_Internazionale_Milano_2021.svg.png", o: 6, g: 0, b: 0, m: 6, a: 0, y: 18, av: -18, p: 0 },
    { sira: 32, takim: "Ahmet Kubilay Şeker", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/a/a3/Lilleoscyeni.png/300px-Lilleoscyeni.png", o: 6, g: 0, b: 0, m: 6, a: 0, y: 18, av: -18, p: 0 },
    { sira: 33, takim: "Batuhan Temizer", logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/2/22/Sslazio.png/225px-Sslazio.png", o: 6, g: 0, b: 0, m: 6, a: 0, y: 18, av: -18, p: 0 },
    { sira: 34, takim: "Yusuf Paldır", logo: "", o: 6, g: 0, b: 0, m: 6, a: 0, y: 18, av: -18, p: 0 },
    { sira: 35, takim: "Furkan Doğan", logo: "https://upload.wikimedia.org/wikipedia/tr/6/61/Sporting_Lizbon_logo.png?20100916061141", o: 6, g: 0, b: 0, m: 6, a: 4, y: 28, av: -24, p: 0 },

    { sira: 36, takim: "El Agep", logo: "https://upload.wikimedia.org/wikipedia/tr/c/c7/Atalanta_bc.gif", o: 6, g: 0, b: 0, m: 6, a: 0, y: 18, av: -18, p: 0 },


];

// Fikstür Verileri (Dinamik Veriler)
const fikstur = [



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
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
