function concertChange(image) {
    document.getElementById("previewImage").src = "images/" + image;
    document.getElementById("previewImage").name = image;

}


function concertChangeDetail(image) {
    if (image == "concert1.jpg") {
        document.getElementById("title").innerHTML = "Concerten van BlØf";
        document.getElementById("preview1").src = "images/concerten/concert1_preview1.jpg";
        document.getElementById("preview2").src = "images/concerten/concert1_preview2.jpg";
        document.getElementById("concertDetailFeature").src = "images/concerten/concert1_wideFeature.jpg"

        document.getElementById("article1").innerHTML = "BLØF werd opgericht in 1992. In de eerste jaren speelden ze als coverband. Het eerste album met eigen\n" +
            "            nummers, Naakt onder de hemel, werd in eigen beheer uitgebracht. In 1998 werd BLØF bekend bij het grote\n" +
            "            publiek met de single Liefs uit Londen, waarna de populariteit van de band sterk steeg. De single kwam van\n" +
            "            het tweede album \"Helder\". Na het succes van Liefs uit Londen werden live-versies van Aan de kust en Wat zou\n" +
            "            je doen van het debuutalbum ook hits. Het derde album Boven bracht de hit Harder dan ik hebben kan. Niets\n" +
            "            dan dit en Zaterdag werden ook uitgebracht op single, maar werden minder grote hits.";

        document.getElementById("article2").innerHTML = "In 2001 overleed drummer Chris Götte na een verkeersongeluk. In Norman Bonink vond de band een nieuwe\n" +
            "                drummer. Bonink speelde eerder in de Frank Boeijen Groep.\n" +
            "\n" +
            "                Na de dood van Götte bracht de band het album Blauwe ruis uit; Dichterbij dan ooit was de eerste single\n" +
            "                die van het album werd getrokken.";

        document.getElementById("article3").innerHTML = "Het volgende album was Omarm. Dit album was het eerste Nederlandse album dat als Super audio compact\n" +
            "                disc werd uitgebracht. De gelijknamige single Omarm en onder meer de singles Hart tegen hart, Dat wij\n" +
            "                dat zijn en Barcelona werden hits.";


    } else if (image == "concert2.jpg") {
        document.getElementById("title").innerHTML = "Concerten van De Dijk";
        document.getElementById("preview1").src = "images/concerten/concert2_preview1.jpg";
        document.getElementById("preview2").src = "images/concerten/concert2_preview2.jpg";
        document.getElementById("concertDetailFeature").src = "images/concerten/concert2_wideFeature.jpg"

        document.getElementById("article1").innerHTML = "De band, opgericht in 1981, bracht zijn eerste album uit in 1982. De band kwam voort uit de in 1975 opgerichte Nederlandstalige band Stampei.\n" +
            "Eind 1987 ontving de band de Zilveren Harp, de prijs voor veelbelovende Nederlandse artiesten. Met de LP Niemand in de Stad vestigde de Dijk zijn naam doordat er 100.000 van werden verkocht. In 1993" +
            "werd de band bekroond met een Gouden Harp, de onderscheiding wegens \"grote verdiensten voor de Nederlandse lichte muziek\". Hun live cd was goed voor platina. Ook de cd Blauwe Schuit deed het goed;" +
            "het album haalde platina en deze mochten ze van Joe Cocker ontvangen.";

        document.getElementById("article2").innerHTML = "De Dijk is een in 1981 opgerichte, naar de Amsterdamse Zeedijk genoemde band uit Amsterdam, die sinds begin jaren '80 Nederlandstalige popmuziek maakt. Elementen uit de soul, blues, rock en chanson worden tot een eigen geluid gecombineerd. ";

        document.getElementById("article3").innerHTML = "Naar het voorbeeld van de Grammy werd door de toenmalige Nederlandse Commissie Collectieve Grammofoonplaten Campagne (CCGC) de prijs ingesteld als \"een jaarprijs voor artiesten, die haalden met hun platenoeuvre van dat jaar de beste prestatie.";

    } else if (image == "concert3.jpg") {
        document.getElementById("title").innerHTML = "Concerten van Doe Maar";
        document.getElementById("preview1").src = "images/concerten/concert3_preview1.jpg";
        document.getElementById("preview2").src = "images/concerten/concert3_preview2.jpg";
        document.getElementById("concertDetailFeature").src = "images/concerten/concert3_wideFeature.jpg"

        document.getElementById("article1").innerHTML = "Doe Maar is een Nederlandse popgroep, die invloeden uit onder andere ska, punk en reggae combineerde tot een eigen Nederpop-geluid. De band bestond oorspronkelijk van 1978 tot 1984. Het succes bij de overwegend jeugdige fans en de uitzinnige publieksreacties van vooral jonge tienermeisjes leidde regelmatig tot vergelijkingen met Beatlemania. Vanaf een eerste reünie in 2000 (met nieuw album) komt Doe Maar zo nu en dan bijeen voor concertreeksen (2008, 2012, 2013, 2016–2017, 2018). ";
        document.getElementById("article2").innerHTML = "Na het matig ontvangen debuut Doe Maar (uit 1979, nog zonder Henny Vrienten) haalden alle vier hun reguliere studioalbums de nummer 1-positie in de Nederlandse albumlijsten. Hiermee is Doe Maar een van de succesvolste Nederlandstalige groepen.";
        document.getElementById("article3").innerHTML = "In de loop der jaren haalden daarnaast acht verschillende verzamelalbums, drie live-albums en een studio-album met nieuwe versies de hitlijsten, waarvan het live-album met groot orkest Symphonica in Rosso (2012) ook weer op 1 kwam.";
    }

}

function sendConcertDetail(previewImage) {
    if (previewImage == "concert1.jpg") {
        location.href = "concerten_detail.html?band=blof";

    } else if (previewImage == "concert2.jpg") {
        location.href = "concerten_detail.html?band=dedijk";

    } else if (previewImage == "concert3.jpg") {
        location.href = "concerten_detail.html?band=doemaar";

    }

}


function loadConcertBand() {
    var link = document.URL;
    link = link.replace("file:///D:/Programming/school/PHP/BierHier/concerten_detail.html?band=", "");
    if (link == "blof") {
        concertChangeDetail("concert1.jpg");


    } else if (link == "dedijk") {
        concertChangeDetail("concert2.jpg");

    } else if (link == "doemaar") {
        concertChangeDetail("concert3.jpg");

    } else {
        concertChangeDetail("concert1.jpg");
    }
}

function loadReceipeDetail() {
    var link = document.URL;
    link = link.replace("file:///D:/Programming/school/PHP/BierHier/recepten_detail.html?receipe=", "");
    if (link == "boerenkool") {
    document.getElementById('receipeTitle').innerHTML = "Boerenkool met worst";
    document.getElementById('receipeDetailPreviewImage').src = "images/recepten/receipe3.jpg";
    } else if (link == "stamppot") {
        document.getElementById('receipeTitle').innerHTML = "Stamppot met jus";
        document.getElementById('receipeDetailPreviewImage').src = "images/recepten/receipe2.jpg";
    }
    else {
        document.getElementById('receipeTitle').innerHTML = "Boerenkool met worst";
        document.getElementById('receipeDetailPreviewImage').src = "images/recepten/receipe3.jpg";
    }
}
