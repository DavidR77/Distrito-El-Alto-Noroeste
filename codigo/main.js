// Datos de las iglesias con información completa - DIRECTORIO DE IGLESIAS DEL DISTRITO EL ALTO NOROESTE
        const iglesias = [
            {
                nombre: "1. ACHICA ARRIBA",
                direccion: "Comunidad Achica Arriba, Prov. Ingavi",
                zona: "machaca",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Achica+Arriba+Ingavi"
            },
            {
                nombre: "2. EL ALTO: ALTO CHIJINI",
                direccion: "Calle 3 N° 180, Zona Alto Chijini",
                zona: "sur",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calle+3+180+Alto+Chijini+El+Alto"
            },
            {
                nombre: "3. EL ALTO: 2 DE FEBRERO",
                direccion: "Cruce Ventilla, Z. 2 de Febrero",
                zona: "sur",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Cruce+Ventilla+2+de+Febrero+El+Alto"
            },
            {
                nombre: "4. EL ALTO: SENKATA",
                direccion: "Av. Goroicocha, Zona Ingavi \"B\", Senkata",
                zona: "sur",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Goroicocha+Senkata+El+Alto"
            },
            {
                nombre: "5. EL ALTO: VILLA EXALTACIÓN",
                direccion: "Calle 5, N° 10, Zona Villa Exaltación Ira. Sección",
                zona: "sur",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calle+5+10+Villa+Exaltacion+El+Alto"
            },
            {
                nombre: "6. EL ALTO: VILLA MERCEDES",
                direccion: "Calle Huayna Kapac, Z/ Villa Mercedes",
                zona: "sur",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calle+Huayna+Kapac+Villa+Mercedes+El+Alto"
            },
            {
                nombre: "7. EL ALTO: VILLA SANTIAGO I",
                direccion: "Calle 4 N° 102, Z/ Villa Santiago 1",
                zona: "sur",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calle+4+102+Villa+Santiago+1+El+Alto"
            },
            {
                nombre: "8. EL ALTO: VILLA SANTIAGO II",
                direccion: "Calle 5 N° 939, Z/ Villa Santiago II",
                zona: "sur",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calle+5+939+Villa+Santiago+II+El+Alto"
            },
            {
                nombre: "9. EL ALTO: SANTA ROSA",
                direccion: "Calle 5, Zona Santa Rosa N° 61",
                zona: "sur",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calle+5+Santa+Rosa+61+El+Alto"
            },
            {
                nombre: "10. POCOHOTA",
                direccion: "Comunidad Pocota, Prov. Ingavi",
                zona: "machaca",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Pocohota+Ingavi"
            },
            {
                nombre: "11. DIGNIDAD",
                direccion: "Urbanización Dignidad, Av. Japón N° 5015",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Japon+5015+Urbanizacion+Dignidad+El+Alto"
            },
            {
                nombre: "12. EL ALTO: APOSENTO ALTO",
                direccion: "Av. Adela Zamudio N° 1275, Zona San Martín de Porres",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Adela+Zamudio+1275+San+Martin+de+Porres+El+Alto"
            },
            {
                nombre: "13. EL ALTO: BELÉN",
                direccion: "C. San Javier N° 3364, Zona Santa Ana",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/C+San+Javier+3364+Santa+Ana+El+Alto"
            },
            {
                nombre: "14. EL ALTO: 6 DE JUNIO",
                direccion: "C. 13 de Noviembre, Zona 6 de Junio",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/C+13+de+Noviembre+6+de+Junio+El+Alto"
            },
            {
                nombre: "15. EL ALTO: 7 DE SEPTIEMBRE",
                direccion: "Av. La Paz, esq. Av. Cochabamba. Zona Illampu",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+La+Paz+Av+Cochabamba+Illampu+El+Alto"
            },
            {
                nombre: "16. EL ALTO: EL PARAÍSO",
                direccion: "Calle B N° 1254, Zona La Amistad",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calle+B+1254+La+Amistad+El+Alto"
            },
            {
                nombre: "17. EL ALTO: FILADELFIA",
                direccion: "C/ Ricardo Bustamante, Urb. San Martín de Porres",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/C+Ricardo+Bustamante+San+Martin+de+Porres+El+Alto"
            },
            {
                nombre: "18. EL ALTO: LA FLORIDA",
                direccion: "Ush. La Florida, calle Mejillones S/N",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Ush+La+Florida+Mejillones+El+Alto"
            },
            {
                nombre: "19. EL ALTO: PACAJES",
                direccion: "Calle Arturo Borda N° 1024, Zona Ilimani",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calle+Arturo+Borda+1024+Ilimani+El+Alto"
            },
            {
                nombre: "20. EL ALTO: PRIMERO DE MAYO",
                direccion: "C. Carabuco N° 6004, Z/Villa Primavera",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/C+Carabuco+6004+Villa+Primavera+El+Alto"
            },
            {
                nombre: "21. EL ALTO: SAJAMA",
                direccion: "C. Ismael Montes N° 2495 Z/ Sajama",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/C+Ismael+Montes+2495+Sajama+El+Alto"
            },
            {
                nombre: "22. EL ALTO: VILLA ABAROA",
                direccion: "Calle 140 N° 9. Zona Villa Abaroa",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calle+140+9+Villa+Abaroa+El+Alto"
            },
            {
                nombre: "23. EL ALTO: VILLA NATIVIDAD",
                direccion: "Av. Yotala N° 2814, Z/ Villa Natividad",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Yotala+2814+Villa+Natividad+El+Alto"
            },
            {
                nombre: "24. LUZ DE CRISTO",
                direccion: "Av. César Valdez N° 4374, Zona Cosmos 79",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Cesar+Valdez+4374+Cosmos+79+El+Alto"
            },
            {
                nombre: "25. VICTORIA",
                direccion: "El Alto, Calle Urbanización Aurelia- Tilata",
                zona: "central",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Urbanizacion+Aurelia+Tilata+El+Alto"
            },
            {
                nombre: "26. EL ALTO: ALTO LIMA",
                direccion: "C. Boquerón y Alto de la Alianza N° 7190",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/C+Boqueron+Alto+de+la+Alianza+7190+El+Alto"
            },
            {
                nombre: "27. EL ALTO: BAUTISTA SAAVEDRA",
                direccion: "Av. Ballivián, esq. San Román N° 4500, Bautista Saavedra",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Ballivian+San+Roman+4500+Bautista+Saavedra+El+Alto"
            },
            {
                nombre: "28. EL ALTO: 16 DE FEBRERO",
                direccion: "Av. Estanislao Torres, E José N° 1405, Z. 16 de Febrero",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Estanislao+Torres+E+Jose+1405+16+de+Febrero+El+Alto"
            },
            {
                nombre: "29. EL ALTO: 16 DE JULIO",
                direccion: "Av. 16 de Julio N° 157. Zona 16 de Julio",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+16+de+Julio+157+16+de+Julio+El+Alto"
            },
            {
                nombre: "30. EL ALTO: EL PROGRESO",
                direccion: "Av. 17 de Octubre N° 6, Zona El Progreso",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+17+de+Octubre+6+El+Progreso+El+Alto"
            },
            {
                nombre: "31. EL ALTO: GERMAN BUSCH",
                direccion: "Av. Radio el Condor Calle Santa Catalina, Z/ German Busch",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Radio+el+Condor+Santa+Catalina+German+Busch+El+Alto"
            },
            {
                nombre: "32. EL ALTO: MARISCAL SUCRE",
                direccion: "Av. Néstor Tahuada Calle Agustín Aspa N° 3235\"B\"",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Nestor+Tahuada+Agustin+Aspa+3235B+El+Alto"
            },
            {
                nombre: "33. EL ALTO: RÍO SECO",
                direccion: "Av. Tupac Amara N° 8131, Z/ Nueva Jerusalén",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Tupac+Amara+8131+Nueva+Jerusalen+El+Alto"
            },
            {
                nombre: "34. EL ALTO: NUEVA JERUSALÉN",
                direccion: "C. Illimani N° 50, Alto Lima 3ra. Sección",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/C+Illimani+50+Alto+Lima+3ra+Seccion+El+Alto"
            },
            {
                nombre: "35. EL ALTO: VILLA PALESTINA",
                direccion: "Urb. Palestina, Calle Exaltación N° 1084",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Urb+Palestina+Calle+Exaltacion+1084+El+Alto"
            },
            {
                nombre: "36. EL ALTO: SAN FELIPE DE SEK'E",
                direccion: "San Felipe de Sek'e",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/San+Felipe+de+Sek'e+El+Alto"
            },
            {
                nombre: "37. BETANIA",
                direccion: "Z/ Villa Ingenio, Calle Lodovido Bertonio N° 3085",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Villa+Ingenio+Calle+Lodovido+Bertonio+3085+El+Alto"
            },
            {
                nombre: "38. FORTALEZA (Ex San Roque)",
                direccion: "Urb. Palestina, San Roque, El Alto",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Urb+Palestina+San+Roque+El+Alto"
            },
            {
                nombre: "39. SAYHUAPAMPA (CARABICO)",
                direccion: "Comunidad Suyunpampa, Prov. Caracho",
                zona: "carabuco",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Suyunpampa+Caracho"
            },
            {
                nombre: "40. SAANCHI",
                direccion: "Comunidad Saanchi, Prov. Camacho",
                zona: "carabuco",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Saanchi+Camacho"
            },
            {
                nombre: "41. CALATA GRANDE",
                direccion: "Comunidad Calata Grande, Prov. Manker Kapac",
                zona: "copacabana",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calata+Grande+Manker+Kapac"
            },
            {
                nombre: "42. CALATA CAPURITA",
                direccion: "Comunidad Calata Capurita, Prov. Manko Kapac",
                zona: "copacabana",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calata+Capurita+Manko+Kapac"
            },
            {
                nombre: "43. ISLA SURIQUI",
                direccion: "Isla Suriqui, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Isla+Suriqui+Los+Andes"
            },
            {
                nombre: "44. TIQUINA",
                direccion: "San Pedro de Tiquina, Prov. Manco Kapac",
                zona: "copacabana",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/San+Pedro+de+Tiquina+Manco+Kapac"
            },
            {
                nombre: "45. ANTACOLLO",
                direccion: "Antacollo Bajo, Prov. Omasuyos",
                zona: "lago",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Antacollo+Bajo+Omasuyos"
            },
            {
                nombre: "46. CALAQUE WICHIWICHI",
                direccion: "Comunidad Wichiwichi, Prov. Omasuyos",
                zona: "lago",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Wichiwichi+Omasuyos"
            },
            {
                nombre: "47. HUARINA",
                direccion: "Plazuela de Huarina N° 100, Prov. Omasayos",
                zona: "lago",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Plazuela+de+Huarina+100+Omasuyos"
            },
            {
                nombre: "48. JANCKO AMAYA",
                direccion: "Comunidad Jancko Amaya, Av. Nueva Esperanza",
                zona: "lago",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Jancko+Amaya+Nueva+Esperanza"
            },
            {
                nombre: "49. SAMANCHA",
                direccion: "Comunidad Samancha, Prov. Omasuyos",
                zona: "lago",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Samancha+Omasuyos"
            },
            {
                nombre: "50. CORPAPUTO",
                direccion: "Comunidad Corpaputo, Prov. Omasuyos",
                zona: "lago",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Corpaputo+Omasuyos"
            },
            {
                nombre: "51. JAILLIHUAYA",
                direccion: "Comunidad Jaillihuaya, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Jaillihuaya+Los+Andes"
            },
            {
                nombre: "52. KERANI CENTRAL",
                direccion: "Comunidad Kerani Central, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Kerani+Central+Los+Andes"
            },
            {
                nombre: "53. PARIRI",
                direccion: "Comunidad Pariri, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Pariri+Los+Andes"
            },
            {
                nombre: "54. PEÑAS",
                direccion: "Comunidad Peñas, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Penas+Los+Andes"
            },
            {
                nombre: "55. PONGONHUYO BERENGUELA",
                direccion: "Comunidad Berenguela, Prov. Omasuyos",
                zona: "lago",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Berenguela+Omasuyos"
            },
            {
                nombre: "56. PONGONHUYO CENTRAL",
                direccion: "Comunidad Pongonhuyo Central, Prov. Omasuyos",
                zona: "lago",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Pongonhuyo+Central+Omasuyos"
            },
            {
                nombre: "57. TUQUIA",
                direccion: "Comunidad Tuquia, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Tuquia+Los+Andes"
            },
            {
                nombre: "58. CENTRAL CALLA",
                direccion: "Comunidad Calla Baja, Prov. Ingavi",
                zona: "machaca",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Calla+Baja+Ingavi"
            },
            {
                nombre: "59. JESÚS DE MACHACA",
                direccion: "Comunidad Jesús de Machaca, Prov. Ingavi",
                zona: "machaca",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Jesus+de+Machaca+Ingavi"
            },
            {
                nombre: "60. KHONKHO LIQUILIQUI",
                direccion: "Comunidad Khonkho Liquiliqui, Prov. Ingavi",
                zona: "machaca",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Khonkho+Liquiliqui+Ingavi"
            },
            {
                nombre: "61. SURAMAYA",
                direccion: "Comunidad Suramaya, Prov. Ingavi",
                zona: "machaca",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Suramaya+Ingavi"
            },
            {
                nombre: "62. TACACA",
                direccion: "Comunidad Tacaca, Prov. Ingavi",
                zona: "machaca",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Tacaca+Ingavi"
            },
            {
                nombre: "63. YAURIRI DE MACHACA",
                direccion: "Comunidad Yauriri de Machaca, Prov. Ingavi",
                zona: "machaca",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Yauriri+de+Machaca+Ingavi"
            },
            {
                nombre: "64. CHIPAMAYA",
                direccion: "Localidad Chipamaya, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Chipamaya+Los+Andes"
            },
            {
                nombre: "65. KENAKAHUA",
                direccion: "Comunidad Kenakahua, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Kenakahua+Los+Andes"
            },
            {
                nombre: "66. LEQUIÑOSO",
                direccion: "Comunidad Lequiñoso, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Lequinoso+Los+Andes"
            },
            {
                nombre: "67. MUCUÑA",
                direccion: "Comunidad Mucuña, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Mucuna+Los+Andes"
            },
            {
                nombre: "68. PUCARANI",
                direccion: "Calle Ángel Rivera, Comunidad Pucarani, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Pucarani+Angel+Rivera+Los+Andes"
            },
            {
                nombre: "69. SEGÜENCA",
                direccion: "Comunidad Següenca, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Seguenca+Los+Andes"
            },
            {
                nombre: "70. HUAYNA POTOSÍ PALCOCO",
                direccion: "Comunidad Viruyo, Prov. Los Andes",
                zona: "andesI",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Viruyo+Los+Andes"
            },
            {
                nombre: "71. CALERIA",
                direccion: "Comunidad Caleria, Prov. Los Andes",
                zona: "andesII",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Caleria+Los+Andes"
            },
            {
                nombre: "72. CANTAPA",
                direccion: "Comunidad Kantapa, Prov. Los Andes",
                zona: "andesII",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Kantapa+Los+Andes"
            },
            {
                nombre: "73. CATAVI",
                direccion: "Comunidad Catavi, Prov. Los Andes",
                zona: "andesII",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Catavi+Los+Andes"
            },
            {
                nombre: "74. CENTRAL COPAJIRA",
                direccion: "Comunidad Central Copajira, Prov. Los Andes",
                zona: "andesII",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Central+Copajira+Los+Andes"
            },
            {
                nombre: "75. HUACULLANI",
                direccion: "Cantón Huacullani, Prov. Ingavi",
                zona: "andesII",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Huacullani+Ingavi"
            },
            {
                nombre: "76. PUCHUNI",
                direccion: "Comunidad Puchuni, Prov. Los Andes",
                zona: "andesII",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Puchuni+Los+Andes"
            },
            {
                nombre: "77. SANTA ROSA DE TARACO",
                direccion: "Comunidad Santa Rosa de Taraco, Prov. Los Andes",
                zona: "andesII",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Santa+Rosa+de+Taraco+Los+Andes"
            },
            {
                nombre: "78. VILUYO",
                direccion: "Comunidad Viluyo, Prov. Ingavi",
                zona: "andesII",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Viluyo+Ingavi"
            },
            {
                nombre: "79. NUEVA COBIJA",
                direccion: "Departamento de Cobija Pando",
                zona: "cobija/Pando",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Cobija+Pando+Bolivia"
            },
            {
                nombre: "80. ISLA DEL SOL",
                direccion: "Comunidad Isla del Sol, Prov. Manco Kapac",
                zona: "copacabana",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Isla+del+Sol+Manco+Kapac"
            },
            {
                nombre: "81. HUAYNA POTOSÍ",
                direccion: "El Alto, z. Huayna Potosí. Ira Sección # 2114 C. Azteca",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Huayna+Potosi+Ira+Seccion+2114+C+Azteca+El+Alto"
            },
            {
                nombre: "82. VILLA POMAMAYA",
                direccion: "El Alto, Zona San Roque",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Villa+Pomamaya+San+Roque+El+Alto"
            },
            {
                nombre: "83. AVANZADA YANAMUYO",
                direccion: "Comunidad Yanamuyo Alto",
                zona: "andesII",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Yanamuyo+Alto"
            },
            {
                nombre: "84. ITALACQUE (Reabierta)",
                direccion: "Comunidad Italaque",
                zona: "carabuco",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Italaque"
            },
            {
                nombre: "85. NAZACARA",
                direccion: "Comunidad Yauriri de Machaca, Prov. Ingavi",
                zona: "machaca",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Nazacara+Yauriri+Machaca+Ingavi"
            },
            {
                nombre: "86. TACACHIRA",
                direccion: "Comunidad",
                zona: "carabuco",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Tacachira"
            },
            {
                nombre: "87. AVANZADA SANTA MARÍA",
                direccion: "Avenida Perimetral \"B\" Lote 3,4,5 Distrito 3",
                zona: "sur",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Av+Perimetral+B+Lote+3+4+5+Distrito+3+El+Alto"
            },
            {
                nombre: "88. MILLUNI BAJO",
                direccion: "El Alto, Lima",
                zona: "norte",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Milluni+Bajo+El+Alto"
            },
            {
                nombre: "89. TILACOCA (Reabierta)",
                direccion: "Comunidad Tilacoca",
                zona: "carabuco",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Tilacoca"
            },
            {
                nombre: "90. JOKOPAMPA",
                direccion: "Comunidad Jokopampa",
                zona: "carabuco",
                facebook: "#",
                instagram: "#",
                youtube: "#",
                maps: "https://www.google.com/maps/place/Jokopampa"
            }
        ];

        // Inicializar la página
        document.addEventListener('DOMContentLoaded', function() {
            document.body.classList.add('js-enabled');
            // Inicializar el carrusel
            const myCarousel = new bootstrap.Carousel(document.getElementById('carouselIglesia'), {
                interval: 5000,
                wrap: true
            });
            
            // Cargar iglesias por defecto
            loadChurches();

            refreshRevealTargets(document);
        });

        let revealObserver;

        function setupRevealObserver() {
            if (revealObserver) return;

            const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const hasIO = 'IntersectionObserver' in window;

            if (!hasIO || reduceMotion) {
                revealObserver = null;
                document.querySelectorAll('.fade-in').forEach(el => el.classList.add('is-visible'));
                return;
            }

            revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                });
            }, {
                threshold: 0.12,
                rootMargin: '0px 0px -10% 0px'
            });
        }

        function refreshRevealTargets(root = document) {
            setupRevealObserver();
            if (!revealObserver) return;
            root.querySelectorAll('.fade-in:not(.is-visible)').forEach(el => {
                revealObserver.observe(el);
            });
        }

        // Cargar las iglesias en la página
        function loadChurches(filteredIglesias = iglesias) {
            const container = document.getElementById('iglesias-container');
            
            if (filteredIglesias.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-5">
                        <i class="bi bi-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                        <h4>No se encontraron iglesias</h4>
                        <p>No hay iglesias que coincidan con los filtros seleccionados.</p>
                        <button class="btn btn-primary-custom mt-3" onclick="resetFilters()">
                            Ver todas las iglesias
                        </button>
                    </div>
                `;
                return;
            }
            
            let html = '';
            
            filteredIglesias.forEach((iglesia, index) => {
                html += `
                    <div class="church-card fade-in">
                        <h4 class="church-title">${iglesia.nombre}</h4>
                        <div class="church-address-line">
                            <i class="bi bi-geo-alt"></i>
                            <span><strong>Dirección:</strong> ${iglesia.direccion}</span>
                        </div>
                        <a href="${iglesia.maps}" target="_blank" class="maps-icon-link" title="Ver en Google Maps">
                            <div class="maps-icon-circle">
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>
                        </a>
                        <div class="mt-2">
                            <span class="badge bg-primary">${getZonaName(iglesia.zona)}</span>
                        </div>
                    </div>
                `;
            });
            
            container.innerHTML = html;

            refreshRevealTargets(container);
        }

        function hideAllContentPages() {
            const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            document.querySelectorAll('.content-page').forEach(page => {
                if (page.classList.contains('active')) {
                    page.classList.remove('active');

                    if (reduceMotion) {
                        page.classList.remove('leaving');
                        page.style.display = 'none';
                        return;
                    }

                    page.classList.add('leaving');
                    setTimeout(() => {
                        page.classList.remove('leaving');
                        page.style.display = 'none';
                    }, 520);
                    return;
                }

                page.classList.remove('active');
                page.classList.remove('leaving');
                page.style.display = 'none';
            });
        }

        // Obtener el nombre de la zona
        function getZonaName(zonaCode) {
            const zonas = {
                "norte": "Zona Norte",
                "sur": "Zona Sur",
                "este": "Zona Este",
                "oeste": "Zona Oeste",
                "central": "Zona Central"
            };
            return zonas[zonaCode] || zonaCode;
        }

        // Filtrar iglesias según los criterios seleccionados
        function filterChurches() {
            const zonaSelect = document.getElementById('zonaSelect');
            const nombreInput = document.getElementById('nombreIglesia');
            
            const zonaSeleccionada = zonaSelect.value;
            const nombreBusqueda = nombreInput.value.toLowerCase();
            
            let filtered = iglesias;
            
            // Filtrar por zona
            if (zonaSeleccionada !== 'todas') {
                filtered = filtered.filter(iglesia => iglesia.zona === zonaSeleccionada);
            }
            
            // Filtrar por nombre
            if (nombreBusqueda.trim() !== '') {
                filtered = filtered.filter(iglesia => 
                    iglesia.nombre.toLowerCase().includes(nombreBusqueda)
                );
            }
            
            loadChurches(filtered);
        }

        // Restablecer filtros
        function resetFilters() {
            document.getElementById('zonaSelect').value = 'todas';
            document.getElementById('nombreIglesia').value = '';
            loadChurches(iglesias);
        }

        // Mostrar la página principal
        function showMainPage() {
            document.body.classList.remove('show-content');
            document.getElementById('main-page').style.display = 'block';
            
            // Ocultar todas las páginas de contenido
            hideAllContentPages();
            
            // Desplazar al inicio
            window.scrollTo({top: 0, behavior: 'smooth'});

            refreshRevealTargets(document);
        }

        // Mostrar una página de contenido específica
        function showContentPage(pageId) {
            // Ocultar la página principal
            document.getElementById('main-page').style.display = 'none';
            
            // Ocultar todas las páginas de contenido
            hideAllContentPages();
            
            // Mostrar la página solicitada
            const page = document.getElementById(`${pageId}-page`);
            if (page) {
                page.style.display = 'block';
                page.classList.remove('leaving');
                requestAnimationFrame(() => {
                    page.classList.add('active');
                });
                document.body.classList.add('show-content');
                
                // Si es la página de buscar iglesia, cargar las iglesias
                if (pageId === 'buscar-iglesia') {
                    loadChurches();
                }

                refreshRevealTargets(page);
                
                // Desplazar al inicio de la página
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        }

        // Mostrar página específica de ministerio
        function showMinistryPage(ministryId) {
            // Ocultar la página principal
            document.getElementById('main-page').style.display = 'none';
            
            // Ocultar todas las páginas de contenido
            hideAllContentPages();
            
            // Mostrar la página del ministerio solicitado
            const page = document.getElementById(`${ministryId}-page`);
            if (page) {
                page.style.display = 'block';
                page.classList.remove('leaving');
                requestAnimationFrame(() => {
                    page.classList.add('active');
                });
                document.body.classList.add('show-content');

                refreshRevealTargets(page);
                
                // Desplazar al inicio de la página
                window.scrollTo({top: 0, behavior: 'smooth'});
            } else {
                // Si no existe la página específica, mostrar la página principal de ministerios
                showMainPage();
                setTimeout(() => document.getElementById('ministerios').scrollIntoView({behavior: 'smooth'}), 100);
            }
        }

        // Navegación suave para enlaces internos
        document.querySelectorAll('.main-section a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        function applyTheme(nextTheme) {
            if (nextTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }

            const btn = document.getElementById('theme-toggle');
            const icon = btn ? btn.querySelector('i') : null;

            if (btn) {
                btn.setAttribute('aria-pressed', nextTheme === 'dark' ? 'true' : 'false');
            }

            if (icon) {
                icon.classList.toggle('bi-moon-stars', nextTheme !== 'dark');
                icon.classList.toggle('bi-sun', nextTheme === 'dark');
            }
        }

        function getInitialTheme() {
            let saved = null;
            try {
                saved = localStorage.getItem('theme');
            } catch (_) {
                saved = null;
            }
            if (saved === 'dark' || saved === 'light') return saved;
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        const initialTheme = getInitialTheme();
        applyTheme(initialTheme);

        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('theme-toggle');
            if (!btn) return;

            const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            applyTheme(currentTheme);

            btn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
                const next = current === 'dark' ? 'light' : 'dark';
                try {
                    localStorage.setItem('theme', next);
                } catch (_) {
                }
                applyTheme(next);
            });
        });


        // Datos de eventos del calendario con fechas reales
        const calendarEvents = [
            // MARZO 2026
            {
                id: 'retiro-lideres-jni-1',
                titulo: 'Retiro Distrital de Líderes de JNI',
                fecha: new Date(2026, 2, 13),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Primer día del retiro especial para líderes de Jóvenes de Nazareno Internacional.'
            },
            {
                id: 'retiro-lideres-jni-2',
                titulo: 'Retiro Distrital de Líderes de JNI',
                fecha: new Date(2026, 2, 14),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Segundo día del retiro de líderes JNI.'
            },
            {
                id: 'retiro-lideres-jni-3',
                titulo: 'Retiro Distrital de Líderes de JNI',
                fecha: new Date(2026, 2, 15),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Tercer día del retiro de líderes JNI. Clausura y compromisos para el año.'
            },
            {
                id: 'retiro-mni-1',
                titulo: 'Retiro Distrital MNI',
                fecha: new Date(2026, 2, 27),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Primer día del retiro distrital de Misiones Nazarenas Internacionales.'
            },
            {
                id: 'retiro-mni-2',
                titulo: 'Retiro Distrital MNI',
                fecha: new Date(2026, 2, 28),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Segundo día del retiro distrital MNI.'
            },
            {
                id: 'retiro-mni-3',
                titulo: 'Retiro Distrital MNI',
                fecha: new Date(2026, 2, 29),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Tercer día del retiro distrital MNI. Clausura y evaluación.'
            },
            // ABRIL 2026
            {
                id: 'semana-santa-1',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date(2026, 3, 3),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Primera jornada de la campaña evangelística zonal de Semana Santa.'
            },
            {
                id: 'semana-santa-2',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date(2026, 3, 4),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Segunda jornada de la campaña evangelística de Semana Santa.'
            },
            {
                id: 'semana-santa-3',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date(2026, 3, 5),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Tercera jornada de la campaña evangelística de Semana Santa.'
            },
            {
                id: 'inicio-40-dias',
                titulo: 'Inicio de 40 Días de Ayuno y Oración',
                fecha: new Date(2026, 3, 15),
                hora: 'Todo el día',
                lugar: 'Templo Central',
                descripcion: 'Inicio de los 40 días de ayuno y oración. Culto especial de convocatoria.'
            },
            {
                id: 'campamento-ninos-1',
                titulo: 'Campamento Zonal de Niños',
                fecha: new Date(2026, 3, 17),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Primer día del campamento especial para niños de todas las iglesias de la zona.'
            },
            {
                id: 'campamento-ninos-2',
                titulo: 'Campamento Zonal de Niños',
                fecha: new Date(2026, 3, 18),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Segundo día del campamento zonal de niños.'
            },
            {
                id: 'campamento-ninos-3',
                titulo: 'Campamento Zonal de Niños',
                fecha: new Date(2026, 3, 19),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Tercer día del campamento zonal de niños. Clausura y celebración.'
            },
            {
                id: 'reunion-pastores-abril',
                titulo: 'Reunión Distrital de Pastores',
                fecha: new Date(2026, 3, 25),
                hora: '09:00 - 12:00',
                lugar: 'Sala de Conferencias',
                descripcion: 'Reunión mensual de pastores para coordinar actividades y fortalecer el trabajo ministerial.'
            },
            {
                id: 'cierre-40-dias-abril',
                titulo: 'Cierre de 40 Días de Ayuno y Oración',
                fecha: new Date(2026, 3, 26),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Culto de cierre de los 40 días de ayuno y oración. Celebración y agradecimiento.'
            },
            // MAYO 2026
            {
                id: 'aniversario-potosi-1',
                titulo: 'Aniversario Misión Potosí',
                fecha: new Date(2026, 4, 9),
                hora: 'Todo el día',
                lugar: 'Iglesia Misión Potosí',
                descripcion: 'Celebración del aniversario de la Iglesia Misión Potosí. Culto especial y convivencia.'
            },
            {
                id: 'aniversario-potosi-2',
                titulo: 'Aniversario Misión Potosí',
                fecha: new Date(2026, 4, 10),
                hora: 'Todo el día',
                lugar: 'Iglesia Misión Potosí',
                descripcion: 'Segundo día de celebración del aniversario con actividades especiales.'
            },
            {
                id: 'actualizacion-pastoral-1',
                titulo: 'Actualización Pastoral',
                fecha: new Date(2026, 4, 15),
                hora: '09:00 - 14:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Jornada de actualización y capacitación para el equipo pastoral del distrito.'
            },
            {
                id: 'actualizacion-pastoral-2',
                titulo: 'Actualización Pastoral',
                fecha: new Date(2026, 4, 16),
                hora: '09:00 - 14:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Segunda jornada de actualización pastoral.'
            },
            {
                id: 'revision-cajas-rural',
                titulo: 'Revisión de Cajas Área Rural',
                fecha: new Date(2026, 4, 23),
                hora: '09:00 - 12:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Revisión administrativa de cajas de las iglesias del área rural.'
            },
            {
                id: 'cierre-40-dias-mayo',
                titulo: 'Cierre de 40 Días de Ayuno y Oración',
                fecha: new Date(2026, 4, 24),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Culto de cierre y celebración final de los 40 días de ayuno y oración.'
            },
            {
                id: 'campamento-plenitud-1',
                titulo: 'Campamento Distrital de Plenitud de Vida',
                fecha: new Date(2026, 4, 29),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Inicio del campamento para adultos sobre vida abundante en Cristo.'
            },
            {
                id: 'campamento-plenitud-2',
                titulo: 'Campamento Distrital de Plenitud de Vida',
                fecha: new Date(2026, 4, 30),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Segundo día del campamento de plenitud de vida.'
            },
            {
                id: 'campamento-plenitud-3',
                titulo: 'Campamento Distrital de Plenitud de Vida',
                fecha: new Date(2026, 4, 31),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Tercer día del campamento de plenitud de vida. Clausura con culto especial.'
            },
            // JUNIO 2026
            {
                id: 'revision-cajas-junio',
                titulo: 'Revisión de Cajas Locales y Distritales',
                fecha: new Date(2026, 5, 13),
                hora: '09:00 - 14:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Revisión administrativa de cajas locales y distritales de las iglesias.'
            },
            {
                id: 'encuentro-vid-1',
                titulo: 'Encuentro Distrital de VID',
                fecha: new Date(2026, 5, 19),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Primer día del encuentro del Ministerio de Vida (VID) a nivel distrital.'
            },
            {
                id: 'encuentro-vid-2',
                titulo: 'Encuentro Distrital de VID',
                fecha: new Date(2026, 5, 20),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Segundo día del encuentro distrital de VID.'
            },
            {
                id: 'encuentro-vid-3',
                titulo: 'Encuentro Distrital de VID',
                fecha: new Date(2026, 5, 21),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Tercer día del encuentro distrital de VID. Clausura y compromisos.'
            },
            {
                id: 'torneo-biblico-jni-1',
                titulo: 'Torneos Bíblicos JNI Zonal',
                fecha: new Date(2026, 5, 27),
                hora: '09:00 - 17:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Primera jornada de la competencia bíblica zonal para jóvenes de JNI.'
            },
            {
                id: 'torneo-biblico-jni-2',
                titulo: 'Torneos Bíblicos JNI Zonal',
                fecha: new Date(2026, 5, 28),
                hora: '09:00 - 17:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Segunda jornada de los torneos bíblicos JNI. Final y premiación.'
            },
            // JULIO 2026
            {
                id: 'dia-pastor-1',
                titulo: 'Día del Pastor',
                fecha: new Date(2026, 6, 10),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Celebración especial en honor a los pastores y sus familias. Culto de agradecimiento.'
            },
            {
                id: 'dia-pastor-2',
                titulo: 'Día del Pastor',
                fecha: new Date(2026, 6, 11),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Segundo día de celebración del Día del Pastor con actividades especiales.'
            },
            {
                id: 'dia-pastor-3',
                titulo: 'Día del Pastor',
                fecha: new Date(2026, 6, 12),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Tercer día de celebración y cierre del Día del Pastor.'
            },
            {
                id: 'campamento-prejuvenil-1',
                titulo: 'Campamento Zonal de Prejuveniles',
                fecha: new Date(2026, 6, 24),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Inicio del campamento especial para prejuveniles de todas las iglesias.'
            },
            {
                id: 'campamento-prejuvenil-2',
                titulo: 'Campamento Zonal de Prejuveniles',
                fecha: new Date(2026, 6, 25),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Segundo día del campamento zonal de prejuveniles.'
            },
            {
                id: 'campamento-prejuvenil-3',
                titulo: 'Campamento Zonal de Prejuveniles',
                fecha: new Date(2026, 6, 26),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Tercer día del campamento de prejuveniles. Clausura y celebración.'
            },
            // AGOSTO 2026
            {
                id: 'dia-pastor-agosto',
                titulo: 'Día del Pastor',
                fecha: new Date(2026, 7, 6),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Celebración especial del Día del Pastor en el mes de agosto.'
            },
            {
                id: 'visita-senabol',
                titulo: 'Visita SENABOL – ETED',
                fecha: new Date(2026, 7, 12),
                hora: '09:00 - 14:00',
                lugar: 'Auditorio Distrital',
                descripcion: 'Visita de representantes del SENABOL ETED para coordinación educativa.'
            },
            {
                id: 'encuentro-deportivo-jni',
                titulo: 'Encuentro Deportivo Distrital JNI',
                fecha: new Date(2026, 7, 15),
                hora: '09:00 - 18:00',
                lugar: 'Canchas Distritales',
                descripcion: 'Encuentro deportivo para jóvenes de JNI de todo el distrito.'
            },
            {
                id: 'culto-pacto-jubileo',
                titulo: 'Culto de Pacto en Jubileo',
                fecha: new Date(2026, 7, 16),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Culto especial de pacto y compromiso en el año de Jubileo.'
            },
            {
                id: 'campamento-adultos-1',
                titulo: 'Campamento Zonal de Adultos',
                fecha: new Date(2026, 7, 21),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Inicio del campamento especial para adultos de todas las iglesias de la zona.'
            },
            {
                id: 'campamento-adultos-2',
                titulo: 'Campamento Zonal de Adultos',
                fecha: new Date(2026, 7, 22),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Segundo día del campamento zonal de adultos.'
            },
            {
                id: 'campamento-adultos-3',
                titulo: 'Campamento Zonal de Adultos',
                fecha: new Date(2026, 7, 23),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Tercer día del campamento de adultos. Clausura con culto especial.'
            },
            // SEPTIEMBRE 2026
            {
                id: 'torneo-ninos-nacional',
                titulo: 'Torneo Bíblico Nacional de Niños',
                fecha: new Date(2026, 8, 5),
                hora: '09:00 - 17:00',
                lugar: 'Templo Central',
                descripcion: 'Torneo bíblico nacional para niños de todas las zonas.'
            },
            {
                id: 'campamento-cafe-1',
                titulo: 'Campamento Zonal de CAFE',
                fecha: new Date(2026, 8, 11),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Inicio del campamento zonal para el ministerio CAFE (Centro de Amigos y Familias).'
            },
            {
                id: 'campamento-cafe-2',
                titulo: 'Campamento Zonal de CAFE',
                fecha: new Date(2026, 8, 12),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Segundo día del campamento zonal de CAFE.'
            },
            {
                id: 'campamento-cafe-3',
                titulo: 'Campamento Zonal de CAFE',
                fecha: new Date(2026, 8, 13),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Tercer día del campamento de CAFE. Clausura y celebración.'
            },
            {
                id: 'actualizacion-pastoral-sep',
                titulo: 'Actualización Pastoral',
                fecha: new Date(2026, 8, 25),
                hora: '09:00 - 14:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Jornada de actualización para el equipo pastoral del distrito.'
            },
            {
                id: 'aniversario-hora-nazarena',
                titulo: 'Aniversario Hora Nazarena',
                fecha: new Date(2026, 8, 27),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Celebración del aniversario del programa Hora Nazarena.'
            },
            // OCTUBRE 2026
            {
                id: 'maxima-mision-1',
                titulo: 'Máxima Misión Cause JNI / MNI Evangelismo',
                fecha: new Date(2026, 9, 9),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Primera jornada de máxima misión con evangelismo masivo de JNI y MNI.'
            },
            {
                id: 'maxima-mision-2',
                titulo: 'Máxima Misión Cause JNI / MNI Evangelismo',
                fecha: new Date(2026, 9, 10),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Segunda jornada de máxima misión y evangelismo.'
            },
            {
                id: 'maxima-mision-3',
                titulo: 'Máxima Misión Cause JNI / MNI Evangelismo',
                fecha: new Date(2026, 9, 11),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Tercera jornada de máxima misión. Cierre y celebración de resultados.'
            },
            {
                id: 'encuentro-mam-1',
                titulo: 'Encuentro Zonal del MAM',
                fecha: new Date(2026, 9, 23),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Primer día del encuentro zonal del Ministerio de Ayuda al Medio (MAM).'
            },
            {
                id: 'encuentro-mam-2',
                titulo: 'Encuentro Zonal del MAM',
                fecha: new Date(2026, 9, 24),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Segundo día del encuentro zonal MAM.'
            },
            {
                id: 'encuentro-mam-3',
                titulo: 'Encuentro Zonal del MAM',
                fecha: new Date(2026, 9, 25),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Tercer día del encuentro zonal MAM. Clausura y compromisos.'
            },
            // NOVIEMBRE 2026
            {
                id: 'bautismo-agua',
                titulo: 'Bautismo en Agua Zonal',
                fecha: new Date(2026, 10, 2),
                hora: '10:00 - 13:00',
                lugar: 'Templo Central',
                descripcion: 'Ceremonia zonal de bautismo en agua para nuevos creyentes.'
            },
            {
                id: 'reunion-pastores-nov',
                titulo: 'Reunión Distrital de Pastores',
                fecha: new Date(2026, 10, 14),
                hora: '09:00 - 12:00',
                lugar: 'Sala de Conferencias',
                descripcion: 'Reunión mensual de pastores para coordinación ministerial.'
            },
            {
                id: 'entrevistas-pastorales-1',
                titulo: 'Entrevistas Pastorales',
                fecha: new Date(2026, 10, 19),
                hora: '09:00 - 17:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Entrevistas pastorales individuales para evaluación y acompañamiento.'
            },
            {
                id: 'entrevistas-pastorales-2',
                titulo: 'Entrevistas Pastorales',
                fecha: new Date(2026, 10, 20),
                hora: '09:00 - 17:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Segundo día de entrevistas pastorales individuales.'
            },
            {
                id: 'revision-cajas-distritales',
                titulo: 'Revisión de Cajas Distritales',
                fecha: new Date(2026, 10, 28),
                hora: '09:00 - 14:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Revisión administrativa de cajas distritales de todas las iglesias.'
            },
            // DICIEMBRE 2026
            {
                id: 'sesion-anual-1',
                titulo: 'Sesión Anual',
                fecha: new Date(2026, 11, 6),
                hora: '09:00 - 13:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Primera sesión anual del distrito para cierre de actividades del año.'
            },
            {
                id: 'culto-agradecimiento-jni',
                titulo: 'Culto de Agradecimiento JNI',
                fecha: new Date(2026, 11, 12),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Culto especial de agradecimiento de Jóvenes de Nazareno Internacional.'
            },
            {
                id: 'sesion-anual-2',
                titulo: 'Sesión Anual',
                fecha: new Date(2026, 11, 13),
                hora: '09:00 - 13:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Segunda sesión anual para cierre de actividades y bendición apostólica.'
            },
            {
                id: 'culto-navidad',
                titulo: 'Culto de Navidad',
                fecha: new Date(2026, 11, 19),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Culto especial de celebración del nacimiento de Jesús. Programa navideño con coros y drama.'
            }
        ];

        // Función para mostrar detalles de eventos del calendario
        function showEventDetail(eventId) {
            const evento = calendarEvents.find(e => e.id === eventId);
            if (evento) {
                const fechaFormateada = evento.fecha.toLocaleDateString('es-ES', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
                alert(`📅 ${evento.titulo}\n\n📆 Fecha: ${fechaFormateada}\n🕐 Hora: ${evento.hora}\n📍 Lugar: ${evento.lugar}\n\n📝 ${evento.descripcion}`);
            }
        }

        // Función para renderizar el calendario agrupado por meses
        function renderCalendar() {
            const container = document.getElementById('calendar-events-container');
            if (!container) return;

            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);

            // Ordenar eventos por fecha
            const eventosOrdenados = [...calendarEvents].sort((a, b) => a.fecha - b.fecha);

            // Obtener mes actual
            const mesActual = hoy.getMonth();
            const añoActual = hoy.getFullYear();

            // Filtrar solo eventos del mes actual
            let eventosDelMesActual = eventosOrdenados.filter(e => {
                return e.fecha.getMonth() === mesActual && e.fecha.getFullYear() === añoActual;
            });

            // Si no hay eventos en el mes actual, mostrar próximos eventos
            if (eventosDelMesActual.length === 0) {
                eventosDelMesActual = eventosOrdenados.filter(e => e.fecha >= hoy).slice(0, 4);
            }

            // Encontrar el evento más próximo para el badge
            const proximoEvento = eventosDelMesActual.length > 0 ? eventosDelMesActual[0] : null;

            let html = '';
            const mesSolo = hoy.toLocaleDateString('es-ES', { month: 'long' }).charAt(0).toUpperCase() + 
                           hoy.toLocaleDateString('es-ES', { month: 'long' }).slice(1);
            
            if (eventosDelMesActual.length > 0) {
                html += `
                    <div class="col-12 mb-5">
                        <div class="calendar-month-section">
                            <div class="calendar-month-title">
                                <i class="bi bi-calendar3"></i>
                                <span>${mesSolo}</span>
                            </div>
                            <div class="row">
                                ${eventosDelMesActual.map(evento => {
                                    const esProximo = proximoEvento && evento.id === proximoEvento.id;
                                    const diaNumero = evento.fecha.getDate();
                                    const mesCorto = evento.fecha.toLocaleDateString('es-ES', { month: 'short' }).toUpperCase();
                                    return `
                                        <div class="col-md-6 col-lg-3 mb-4">
                                            <div class="calendar-event-card ${esProximo ? 'proximo' : ''}">
                                                ${esProximo ? '<span class="badge-proximo"><i class="bi bi-star-fill me-1"></i>Próximo</span>' : ''}
                                                <div class="d-flex align-items-start mb-3">
                                                    <div class="calendar-date-badge">
                                                        <div class="dia-numero">${diaNumero}</div>
                                                        <div class="mes-corto">${mesCorto}</div>
                                                    </div>
                                                    <div class="ms-3 flex-grow-1">
                                                        <div class="evento-titulo">${evento.titulo}</div>
                                                        <div class="evento-meta">
                                                            <span class="meta-item"><i class="bi bi-clock"></i>${evento.hora}</span>
                                                            <span class="meta-item"><i class="bi bi-geo-alt"></i>${evento.lugar}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button class="btn-ver-detalles" onclick="showEventDetail('${evento.id}')">
                                                    <i class="bi bi-info-circle me-1"></i>Ver detalles
                                                </button>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                `;
            } else {
                html = '<div class="col-12 text-center"><p class="text-muted">No hay eventos programados para este mes</p></div>';
            }

            container.innerHTML = html;

            // Actualizar indicador
            const indicator = document.getElementById('calendar-live-indicator');
            if (indicator && eventosDelMesActual.length > 0) {
                const diasRestantes = Math.ceil((proximoEvento.fecha - hoy) / (1000 * 60 * 60 * 24));
                if (diasRestantes === 0) {
                    indicator.innerHTML = '<i class="bi bi-circle-fill me-1"></i>¡Hoy hay evento!';
                    indicator.className = 'badge bg-warning text-dark';
                } else if (diasRestantes === 1) {
                    indicator.innerHTML = '<i class="bi bi-circle-fill me-1"></i>¡Mañana! ' + proximoEvento.titulo;
                    indicator.className = 'badge bg-warning text-dark';
                } else {
                    indicator.innerHTML = `<i class="bi bi-circle-fill me-1"></i>Próximo: ${diasRestantes} días - ${proximoEvento.titulo}`;
                    indicator.className = 'badge bg-success';
                }
            }
        }

        // Renderizar calendario al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
            renderCalendar();
        });
