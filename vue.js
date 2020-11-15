new Vue({
    el : "#root",
    data:{
         artikli:[
            { naziv: "Meri Popins", cena: 4850 },
            { naziv: "Džoker", cena: 5130 },  
            { naziv: "Bel", cena: 4250 },                    
            { naziv: "Luj XVI", cena: 4860 },
            { naziv: "Grdana", cena: 5320 },
            { naziv: "Penivajz", cena: 5125 },
            { naziv: "Julije Cezar", cena: 3605 },  
            { naziv: "Isterivač duhova", cena: 3750 },                    
            { naziv: "Kal Drogo", cena: 3605 },
            { naziv: "Ursula", cena: 4150 },
            { naziv: "Grinč", cena: 4150 },
            { naziv: "Drvo", cena: 3800 },  
            { naziv: "Džejn Ostin", cena: 3230 },                    
            { naziv: "Bliznakinja", cena: 3205 },
            { naziv: "Čudesna žena", cena: 2850 },
            { naziv: "Betmen", cena: 3950 },
        ],
        jePodvuceno: true,
        posetilac : {
        ime: "",
        email : ""
    },
        recenica: "Unesite ime i email:",
        rec:"Kostimi",
        prikazano: false,
        websajt : "https://www.halloweencostumes.com",
        websiteTag: '<a href="https://www.facebook.com/HalloweenCostumesDotCom">Posetite fejsbuk stranicu</a>',
        websiteTag2: '<a href="https://www.instagram.com/FunCostumes/">Posetite instagram stranicu</a>',
        websiteTag3: '<a href="https://www.pinterest.com/alwayshalloween/">Posetite pinterest stranicu</a>',
    },
    computed: { 
        greskaIme : function() {
            if (this.posetilac.ime.length < 4) {
                return "Ime mora sadržati najmanje 4 karaktera";
            } else if (this.posetilac.ime.length > 10) {
                return "Ime ne sme sadržati više do 10 karaktera";
            }
         },
         greskaEmail : function() {
             if (this.posetilac.email.indexOf("@") < 0) {
                 return "Email adresa nije pravilno uneta"
             }
        }
    },
});