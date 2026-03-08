// Datos de las iglesias con información completa
        const iglesias = [
            {
                nombre: "Iglesia del Nazareno Alto Lima",
                direccion: "---",
                zona: "norte",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno bautista Saavedra",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno 16 de Julio",
                direccion: "Plaza Central #789, Centro",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Nueva Jerusalen",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Rio Seco",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno San Felipe de Sek'e",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Villa Palestina",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno 16 de Febrero",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Progreso",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno German Busch",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
                        {
                nombre: "Iglesia del Nazareno Mariscal Sucre",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "norte",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Betania",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Fortaleza ",
                direccion: "Plaza Central #789, Centro",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Mision Huayna Potosi ",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Abanzada Pumamaya",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Avanzada Bajo Milluni",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Avanzada Tacachira",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Avanzada Pomamaya Alta ",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Aposento Alto",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Belen",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
                        {
                nombre: "Iglesia del Nazareno El Paraiso",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "central",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Filadelfia",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Primero de Mayo ",
                direccion: "Plaza Central #789, Centro",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Sajama",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno 7 de Septiembre",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno 6 de Junio",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Villa Abaroa",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Pacajes",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno La Florida",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Villa Natividad",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Luz de Cristo",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenovillaabaroa",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Victoria",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Sayhuapampa",
                direccion: "Plaza Central #789, Centro",
                zona: "carabuco",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Saanchi",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "carabuco",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Italque",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "carabuco",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Joko Pampa",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "carabuco",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Tilacoca",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "carabuco",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Achica",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Alto Chijini",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Pocohota",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Senkata",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "sur",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Villa Exaltacion",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Villa Mercedes",
                direccion: "Plaza Central #789, Centro",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Villa Santiago I",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Villa Santiago II",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Santa Rosa",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Dignidad2",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno 2 de Febrero",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Santa Maria",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Alto Marquirivi",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Calata Grande",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "copacabana",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Calata Capurita",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "copacabana",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Isla Suriqui",
                direccion: "Plaza Central #789, Centro",
                zona: "copacabana",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Tiquina",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "copacabana",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Isla del Sol(mision)",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "copacabana",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Corpaputo",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Pongonhuyo Berenguela",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Pongonhuyo Central",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Jaillihuaya",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Kerani Central",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Pariri",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "cordillera",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Penas",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Turquia",
                direccion: "Plaza Central #789, Centro",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Central Calla",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Jesus de Machaca",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Khonkho Loquiliqui",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Suramaya",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Tacaca",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Yauriri de Machaca",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Nazacara",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
                        {
                nombre: "Iglesia del Nazareno Antacollo",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "lago",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Kalaque Wichiwichi",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "lago",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Huarina",
                direccion: "Plaza Central #789, Centro",
                zona: "lago",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Jancko Amaya",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "lago",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Samancha",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "lago",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Chipamaya",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Kenakahua",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Mucuna",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Seguenca",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Huaynapotosi Palcoco",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Lequinoso",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Caleria",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Khonkho Catavi",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Central Copajira",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Huacullani",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Cantapa",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Puchuni",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Santa Rosa de Taraco",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "andesII",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Viluyo",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Yanamuyo",
                direccion: "Plaza Central #789, Centro",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Nueva Cobija",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "cobija/Pando",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
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
                        <h4>${iglesia.nombre}</h4>
                        <div class="church-location">
                            <i class="bi bi-geo-alt"></i>
                            <div>
                                <strong>Dirección:</strong> ${iglesia.direccion}
                            </div>
                        </div>
                        <div class="social-icons-sm">
                            <a href="${iglesia.maps}" target="_blank" class="social-icon location-icon" title="Ver en Google Maps">
                                <i class="bi bi-geo-alt"></i>
                            </a>
                        </div>
                        <div class="mt-3">
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
            // ENERO 2026
            {
                id: 'ayuno-distrital-ene',
                titulo: 'Ayuno Distrital',
                fecha: new Date('2026-01-09'),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Jornada de ayuno y oración en todo el distrito.'
            },
            {
                id: 'convencion-nacional-1',
                titulo: 'Convención Nacional',
                fecha: new Date('2026-01-12'),
                hora: 'Todo el día',
                lugar: 'Sede Nacional',
                descripcion: 'Primera jornada de la Convención Nacional de la Iglesia del Nazareno.'
            },
            {
                id: 'convencion-nacional-2',
                titulo: 'Convención Nacional',
                fecha: new Date('2026-01-13'),
                hora: 'Todo el día',
                lugar: 'Sede Nacional',
                descripcion: 'Segunda jornada de la Convención Nacional.'
            },
            {
                id: 'convencion-nacional-3',
                titulo: 'Convención Nacional',
                fecha: new Date('2026-01-14'),
                hora: 'Todo el día',
                lugar: 'Sede Nacional',
                descripcion: 'Tercera jornada de la Convención Nacional. Clausura y compromisos.'
            },
            {
                id: 'asamblea-distrital-ene',
                titulo: 'Asamblea Distrital',
                fecha: new Date('2026-01-16'),
                hora: '09:00 - 13:00',
                lugar: 'Auditorio Distrital',
                descripcion: 'Asamblea ordinaria del distrito para tratar asuntos administrativos y ministeriales.'
            },
            {
                id: 'reunion-pastores-ene',
                titulo: 'Reunión Distrital de Pastores',
                fecha: new Date('2026-01-22'),
                hora: '09:00 - 12:00',
                lugar: 'Sala de Conferencias',
                descripcion: 'Reunión mensual de pastores para coordinación y fortalecimiento ministerial.'
            },
            {
                id: 'capacitacion-juntas',
                titulo: 'Capacitación de Juntas Locales',
                fecha: new Date('2026-01-30'),
                hora: '09:00 - 16:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Capacitación para miembros de juntas locales de las iglesias del distrito.'
            },
            // FEBRERO 2026
            {
                id: 'campamento-jni-feb-1',
                titulo: 'Campamento Zonal de JNI',
                fecha: new Date('2026-02-12'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Inicio del campamento zonal para jóvenes de JNI.'
            },
            {
                id: 'campamento-jni-feb-2',
                titulo: 'Campamento Zonal de JNI',
                fecha: new Date('2026-02-13'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Segundo día del campamento zonal de JNI.'
            },
            {
                id: 'campamento-jni-feb-3',
                titulo: 'Campamento Zonal de JNI',
                fecha: new Date('2026-02-14'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Tercer día del campamento zonal de JNI.'
            },
            {
                id: 'campamento-jni-feb-4',
                titulo: 'Campamento Zonal de JNI',
                fecha: new Date('2026-02-15'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Cuarto día del campamento zonal de JNI.'
            },
            {
                id: 'campamento-jni-feb-5',
                titulo: 'Campamento Zonal de JNI',
                fecha: new Date('2026-02-16'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Último día del campamento zonal de JNI. Clausura y celebración.'
            },
            {
                id: 'taller-maestros-dni',
                titulo: 'Taller para Maestros DNI',
                fecha: new Date('2026-02-21'),
                hora: '09:00 - 16:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Taller de capacitación para maestros del Departamento de Niños Internacional.'
            },
            {
                id: 'nazcom-jni',
                titulo: 'NazCom JNI',
                fecha: new Date('2026-02-27'),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Encuentro de comunicadores de Jóvenes de Nazareno Internacional.'
            },
            // ENERO 2026
            {
                id: 'ayuno-distrital-ene',
                titulo: 'Ayuno Distrital',
                fecha: new Date('2026-01-09'),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Jornada de ayuno y oración en todo el distrito.'
            },
            {
                id: 'convencion-nacional-1',
                titulo: 'Convención Nacional',
                fecha: new Date('2026-01-12'),
                hora: 'Todo el día',
                lugar: 'Sede Nacional',
                descripcion: 'Primera jornada de la Convención Nacional de la Iglesia del Nazareno.'
            },
            {
                id: 'convencion-nacional-2',
                titulo: 'Convención Nacional',
                fecha: new Date('2026-01-13'),
                hora: 'Todo el día',
                lugar: 'Sede Nacional',
                descripcion: 'Segunda jornada de la Convención Nacional.'
            },
            {
                id: 'convencion-nacional-3',
                titulo: 'Convención Nacional',
                fecha: new Date('2026-01-14'),
                hora: 'Todo el día',
                lugar: 'Sede Nacional',
                descripcion: 'Tercera jornada de la Convención Nacional. Clausura y compromisos.'
            },
            {
                id: 'asamblea-distrital-ene',
                titulo: 'Asamblea Distrital',
                fecha: new Date('2026-01-16'),
                hora: '09:00 - 13:00',
                lugar: 'Auditorio Distrital',
                descripcion: 'Asamblea ordinaria del distrito para tratar asuntos administrativos y ministeriales.'
            },
            {
                id: 'reunion-pastores-ene',
                titulo: 'Reunión Distrital de Pastores',
                fecha: new Date('2026-01-22'),
                hora: '09:00 - 12:00',
                lugar: 'Sala de Conferencias',
                descripcion: 'Reunión mensual de pastores para coordinación y fortalecimiento ministerial.'
            },
            {
                id: 'capacitacion-juntas',
                titulo: 'Capacitación de Juntas Locales',
                fecha: new Date('2026-01-30'),
                hora: '09:00 - 16:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Capacitación para miembros de juntas locales de las iglesias del distrito.'
            },
            // FEBRERO 2026
            {
                id: 'campamento-jni-feb-1',
                titulo: 'Campamento Zonal de JNI',
                fecha: new Date('2026-02-12'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Inicio del campamento zonal para jóvenes de JNI.'
            },
            {
                id: 'campamento-jni-feb-2',
                titulo: 'Campamento Zonal de JNI',
                fecha: new Date('2026-02-13'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Segundo día del campamento zonal de JNI.'
            },
            {
                id: 'campamento-jni-feb-3',
                titulo: 'Campamento Zonal de JNI',
                fecha: new Date('2026-02-14'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Tercer día del campamento zonal de JNI.'
            },
            {
                id: 'campamento-jni-feb-4',
                titulo: 'Campamento Zonal de JNI',
                fecha: new Date('2026-02-15'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Cuarto día del campamento zonal de JNI.'
            },
            {
                id: 'campamento-jni-feb-5',
                titulo: 'Campamento Zonal de JNI',
                fecha: new Date('2026-02-16'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Último día del campamento zonal de JNI. Clausura y celebración.'
            },
            {
                id: 'taller-maestros-dni',
                titulo: 'Taller para Maestros DNI',
                fecha: new Date('2026-02-21'),
                hora: '09:00 - 16:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Taller de capacitación para maestros del Departamento de Niños Internacional.'
            },
            {
                id: 'nazcom-jni',
                titulo: 'NazCom JNI',
                fecha: new Date('2026-02-27'),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Encuentro de comunicadores de Jóvenes de Nazareno Internacional.'
            },
            // MARZO 2026
            {
                id: 'retiro-lideres-jni-1',
                titulo: 'Retiro Distrital de Líderes de JNI',
                fecha: new Date('2026-03-13'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Primer día del retiro especial para líderes de Jóvenes de Nazareno Internacional.'
            },
            {
                id: 'retiro-lideres-jni-2',
                titulo: 'Retiro Distrital de Líderes de JNI',
                fecha: new Date('2026-03-14'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Segundo día del retiro de líderes JNI.'
            },
            {
                id: 'retiro-lideres-jni-3',
                titulo: 'Retiro Distrital de Líderes de JNI',
                fecha: new Date('2026-03-15'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Tercer día del retiro de líderes JNI. Clausura y compromisos para el año.'
            },
            {
                id: 'retiro-distrital-1',
                titulo: 'Retiro Distrital',
                fecha: new Date('2026-03-28'),
                hora: 'Todo el día',
                lugar: 'Centro de Retiros',
                descripcion: 'Retiro espiritual para toda la congregación. Tiempo de avivamiento y renovación.'
            },
            {
                id: 'retiro-distrital-2',
                titulo: 'Retiro Distrital',
                fecha: new Date('2026-03-29'),
                hora: 'Todo el día',
                lugar: 'Centro de Retiros',
                descripcion: 'Segundo día del retiro distrital con culto de clausura.'
            },
            // ABRIL 2026
            {
                id: 'semana-santa-1',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-01'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Primera jornada de la campaña evangelística zonal de Semana Santa.'
            },
            {
                id: 'semana-santa-2',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-02'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Segunda jornada de la campaña evangelística de Semana Santa.'
            },
            {
                id: 'semana-santa-3',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-03'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Tercera jornada de la campaña evangelística de Semana Santa.'
            },
            {
                id: 'semana-santa-4',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-04'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Última jornada de la campaña evangelística zonal de Semana Santa.'
            },
            {
                id: '40-dias-ayuno',
                titulo: '40 Días de Ayuno y Oración',
                fecha: new Date('2026-04-15'),
                hora: 'Todo el día',
                lugar: 'Templo Central',
                descripcion: 'Inicio de los 40 días de ayuno y oración. Culto especial de convocatoria.'
            },
            {
                id: 'campamento-ninos',
                titulo: 'Campamento Zonal de Niños',
                fecha: new Date('2026-04-17'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Campamento especial para niños de todas las iglesias de la zona.'
            },
            {
                id: 'reunion-pastores-abril',
                titulo: 'Reunión Distrital de Pastores',
                fecha: new Date('2026-04-22'),
                hora: '09:00 - 12:00',
                lugar: 'Sala de Conferencias',
                descripcion: 'Reunión mensual de pastores para coordinar actividades y fortalecer el trabajo ministerial.'
            },
            {
                id: 'dia-nino',
                titulo: 'Día del Niño / Actividad de Gracia',
                fecha: new Date('2026-04-26'),
                hora: '10:00 - 14:00',
                lugar: 'Templo Central',
                descripcion: 'Celebración del Día del Niño con actividades especiales y programa de gracia.'
            },
            // MAYO 2026
            {
                id: 'semana-santa-1',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-01'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Primera jornada de la campaña evangelística zonal de Semana Santa.'
            },
            {
                id: 'semana-santa-2',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-02'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Segunda jornada de la campaña evangelística de Semana Santa.'
            },
            {
                id: 'semana-santa-3',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-03'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Tercera jornada de la campaña evangelística de Semana Santa.'
            },
            {
                id: 'semana-santa-4',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-04'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Última jornada de la campaña evangelística zonal de Semana Santa.'
            },
            {
                id: '40-dias-ayuno',
                titulo: '40 Días de Ayuno y Oración',
                fecha: new Date('2026-04-15'),
                hora: 'Todo el día',
                lugar: 'Templo Central',
                descripcion: 'Inicio de los 40 días de ayuno y oración. Culto especial de convocatoria.'
            },
            {
                id: 'campamento-ninos',
                titulo: 'Campamento Zonal de Niños',
                fecha: new Date('2026-04-17'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Campamento especial para niños de todas las iglesias de la zona.'
            },
            {
                id: 'reunion-pastores-abril',
                titulo: 'Reunión Distrital de Pastores',
                fecha: new Date('2026-04-22'),
                hora: '09:00 - 12:00',
                lugar: 'Sala de Conferencias',
                descripcion: 'Reunión mensual de pastores para coordinar actividades y fortalecer el trabajo ministerial.'
            },
            {
                id: 'dia-nino',
                titulo: 'Día del Niño / Actividad de Gracia',
                fecha: new Date('2026-04-26'),
                hora: '10:00 - 14:00',
                lugar: 'Templo Central',
                descripcion: 'Celebración del Día del Niño con actividades especiales y programa de gracia.'
            },
            // MAYO 2026
            {
                id: 'aniversario-potosi',
                titulo: 'Aniversario Misión Potosí',
                fecha: new Date('2026-05-09'),
                hora: 'Todo el día',
                lugar: 'Iglesia Misión Potosí',
                descripcion: 'Celebración del aniversario de la Iglesia Misión Potosí. Culto especial y convivencia.'
            },
            {
                id: 'actualizacion-pastoral-may',
                titulo: 'Actualización Pastoral',
                fecha: new Date('2026-05-14'),
                hora: '09:00 - 14:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Jornada de actualización y capacitación para el equipo pastoral del distrito.'
            },
            {
                id: 'revision-casas-rurales',
                titulo: 'Revisión de Casas Rurales',
                fecha: new Date('2026-05-16'),
                hora: '09:00 - 12:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Revisión administrativa de las casas rurales de las iglesias del área rural.'
            },
            {
                id: 'encuentro-vid',
                titulo: 'Encuentro Distrital de VID',
                fecha: new Date('2026-05-23'),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Encuentro del Ministerio de Vida (VID) a nivel distrital.'
            },
            {
                id: 'campamento-plenitud',
                titulo: 'Campamento Distrital de Plenitud de Vida',
                fecha: new Date('2026-05-30'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Campamento para adultos sobre vida abundante en Cristo.'
            },
            // JUNIO 2026
            {
                id: 'retiro-pastores-jun',
                titulo: 'Retiro Distrital de Pastores',
                fecha: new Date('2026-06-11'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Segundo día del campamento de plenitud de vida. Cierre con culto especial.'
            },
            // JUNIO 2026
            {
                id: 'retiro-pastores-jun',
                titulo: 'Retiro Distrital de Pastores',
                fecha: new Date('2026-06-11'),
                hora: 'Todo el día',
                lugar: 'Centro de Retiros',
                descripcion: 'Retiro especial para pastores del distrito. Tiempo de descanso y renovación espiritual.'
            },
            {
                id: 'campamento-prejuvenil',
                titulo: 'Campamento Zonal de Prejuvenil',
                fecha: new Date('2026-06-19'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Campamento especial para prejuveniles de todas las iglesias.'
            },
            {
                id: 'torneos-biblicos-jni',
                titulo: 'Torneos Bíblicos JNI Zonal',
                fecha: new Date('2026-06-27'),
                hora: '09:00 - 17:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Competencia bíblica zonal para jóvenes de JNI.'
            },
            // JULIO 2026
            {
                id: 'dia-pastor',
                titulo: 'Día del Pastor',
                fecha: new Date('2026-07-10'),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Celebración especial en honor a los pastores y sus familias.'
            },
            {
                id: 'campamento-adultos',
                titulo: 'Campamento Zonal de Adultos',
                fecha: new Date('2026-07-23'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Campamento especial para adultos de todas las iglesias de la zona.'
            },
            // AGOSTO 2026
            {
                id: 'reunion-pastores-junio',
                titulo: 'Reunión Distrital de Pastores',
                fecha: new Date('2026-06-23'),
                hora: '15:00 - 17:00',
                lugar: 'Sala de Conferencias',
                descripcion: 'Reunión mensual de pastores para coordinar actividades del mes de julio.'
            },
            // JULIO 2026
            {
                id: 'dia-pastor',
                titulo: 'Día del Pastor',
                fecha: new Date('2026-07-10'),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Celebración especial en honor a los pastores y sus familias.'
            },
            {
                id: 'campamento-adultos',
                titulo: 'Campamento Zonal de Adultos',
                fecha: new Date('2026-07-23'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Campamento especial para adultos de todas las iglesias de la zona.'
            },
            // AGOSTO 2026
            {
                id: 'torneo-ninos-dni',
                titulo: 'Torneo de Niños DNI',
                fecha: new Date('2026-08-06'),
                hora: '09:00 - 17:00',
                lugar: 'Templo Central',
                descripcion: 'Torneo bíblico y competencia para niños del Departamento de Niños Internacional.'
            },
            {
                id: 'campamento-cafe',
                titulo: 'Campamento Zonal de CAFE',
                fecha: new Date('2026-08-12'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Campamento zonal para el ministerio CAFE (Centro de Amigos y Familias).'
            },
            {
                id: 'visita-senabol',
                titulo: 'Visita del SENABOL ETED',
                fecha: new Date('2026-08-16'),
                hora: '09:00 - 14:00',
                lugar: 'Auditorio Distrital',
                descripcion: 'Visita de representantes del SENABOL ETED para coordinación educativa.'
            },
            {
                id: 'encuentro-deportivo-jni',
                titulo: 'Encuentro Deportivo Distrital JNI',
                fecha: new Date('2026-08-21'),
                hora: '09:00 - 18:00',
                lugar: 'Canchas Distritales',
                descripcion: 'Encuentro deportivo para jóvenes de JNI de todo el distrito.'
            },
            {
                id: 'culto-pacto-jubileo',
                titulo: 'Culto de Pacto en Jubileo',
                fecha: new Date('2026-08-22'),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Culto especial de pacto y compromiso en el año de Jubileo.'
            },
            // SEPTIEMBRE 2026
            {
                id: 'actualizacion-pastoral-sep',
                titulo: 'Actualización Pastoral',
                fecha: new Date('2026-09-12'),
                hora: '09:00 - 14:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Jornada de actualización para el equipo pastoral del distrito.'
            },
            {
                id: 'campana-misionera-1',
                titulo: 'Campaña Misionera',
                fecha: new Date('2026-09-25'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Primera jornada de la campaña misionera de evangelismo.'
            },
            {
                id: 'campana-misionera-2',
                titulo: 'Campaña Misionera',
                fecha: new Date('2026-09-26'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Segunda jornada de la campaña misionera de evangelismo.'
            },
            {
                id: 'aniversario-hora-nazarena',
                titulo: 'Aniversario Hora Nazarena',
                fecha: new Date('2026-09-27'),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Celebración del aniversario del programa Hora Nazarena.'
            },
            // OCTUBRE 2026
            {
                id: 'maxima-mision',
                titulo: 'Máxima Misión Cause JNI / MNI Evangelismo',
                fecha: new Date('2026-10-09'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Jornada de máxima misión con evangelismo masivo de JNI y MNI.'
            },
            {
                id: 'encuentro-zonal-mam',
                titulo: 'Encuentro Zonal del MAM',
                fecha: new Date('2026-10-23'),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Encuentro zonal del Ministerio de Ayuda al Medio (MAM).'
            },
            // NOVIEMBRE 2026
            {
                id: 'capacitacion-caal',
                titulo: 'Capacitación de CAAL',
                fecha: new Date('2026-11-03'),
                hora: '09:00 - 16:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Capacitación para líderes del Comité de Ayuda al Anciano Lisiado (CAAL).'
            },
            {
                id: 'convencion-nacional-mam',
                titulo: 'Convención Nacional de MAM',
                fecha: new Date('2026-11-14'),
                hora: 'Todo el día',
                lugar: 'Sede Nacional',
                descripcion: 'Convención nacional del Ministerio de Ayuda al Medio (MAM).'
            },
            {
                id: 'entrevistas-pastorales',
                titulo: 'Entrevistas Pastorales',
                fecha: new Date('2026-11-19'),
                hora: '09:00 - 17:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Entrevistas pastorales individuales para evaluación y acompañamiento.'
            },
            {
                id: 'convencion-caal',
                titulo: 'Convención Distrital de CAAL',
                fecha: new Date('2026-11-28'),
                hora: '09:00 - 17:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Convención distrital del Comité de Ayuda al Anciano Lisiado (CAAL).'
            },
            // DICIEMBRE 2026
            {
                id: 'sesion-anual-1',
                titulo: 'Sesión Anual',
                fecha: new Date('2026-12-05'),
                hora: '09:00 - 13:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Primera sesión anual del distrito para cierre de actividades.'
            },
            {
                id: 'asamblea-distrital-dic',
                titulo: 'Asamblea Distrital',
                fecha: new Date('2026-12-10'),
                hora: '09:00 - 13:00',
                lugar: 'Auditorio Distrital',
                descripcion: 'Asamblea ordinaria del distrito para aprobación de informes anuales.'
            },
            {
                id: 'sesion-anual-2',
                titulo: 'Sesión Anual',
                fecha: new Date('2026-12-12'),
                hora: '09:00 - 13:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Segunda sesión anual para cierre de actividades y bendición apostólica.'
            },
            {
                id: 'culto-navidad',
                titulo: 'Culto de Navidad',
                fecha: new Date('2026-12-19'),
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

        // Función para renderizar el calendario ordenado cronológicamente
        function renderCalendar() {
            const container = document.getElementById('calendar-events-container');
            if (!container) return;

            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);

            // Ordenar eventos por fecha
            const eventosOrdenados = [...calendarEvents].sort((a, b) => a.fecha - b.fecha);

            // Filtrar solo eventos futuros (o mostrar todos si no hay futuros)
            let eventosFuturos = eventosOrdenados.filter(e => e.fecha >= hoy);
            if (eventosFuturos.length === 0) {
                eventosFuturos = eventosOrdenados.slice(-4); // Mostrar últimos 4 si no hay futuros
            }

            // Mostrar máximo 4 eventos próximos
            const eventosAMostrar = eventosFuturos.slice(0, 4);

            // Encontrar el próximo evento
            const proximoEvento = eventosFuturos[0];

            let html = '';
            eventosAMostrar.forEach((evento, index) => {
                const esProximo = proximoEvento && evento.id === proximoEvento.id;
                const fechaStr = evento.fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
                const mesStr = evento.fecha.toLocaleDateString('es-ES', { month: 'long' });
                const diaSemana = evento.fecha.toLocaleDateString('es-ES', { weekday: 'short' });

                const badgeProximo = esProximo ? '<span class="badge bg-danger mb-2"><i class="bi bi-star-fill me-1"></i>Próximo</span>' : '';
                const claseProximo = esProximo ? 'border-danger' : '';
                const diaNumero = evento.fecha.getDate();
                const mesCorto = evento.fecha.toLocaleDateString('es-ES', { month: 'short' });

                html += `
                    <div class="col-md-3 mb-4">
                        <div class="calendar-day ${claseProximo}">
                            ${badgeProximo}
                            <div class="d-flex align-items-center mb-2">
                                <div class="calendar-date-badge bg-primary text-white rounded p-2 me-2 text-center" style="min-width: 50px;">
                                    <div style="font-size: 1.5rem; font-weight: bold; line-height: 1;">${diaNumero}</div>
                                    <div style="font-size: 0.75rem; text-transform: uppercase;">${mesCorto}</div>
                            </div>
                                <div>
                                    <h6 class="mb-0 text-muted" style="font-size: 0.8rem;">${diaSemana.toUpperCase()}</h6>
                                    <small class="text-muted">2026</small>
                                </div>
                            </div>
                            <h5 style="font-size: 1rem; margin-bottom: 0.5rem;">${evento.titulo}</h5>
                            <div class="calendar-event-meta">
                                <small class="text-muted"><i class="bi bi-clock me-1"></i>${evento.hora}</small>
                                <br>
                                <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${evento.lugar}</small>
                            </div>
                            <button class="btn btn-sm btn-outline-primary mt-2 w-100" onclick="showEventDetail('${evento.id}')">
                                <i class="bi bi-info-circle me-1"></i>Ver detalles
                            </button>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html;

            // Actualizar indicador
            const indicator = document.getElementById('calendar-live-indicator');
            if (indicator) {
                if (proximoEvento) {
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
                } else {
                    indicator.innerHTML = '<i class="bi bi-circle-fill me-1"></i>Calendario Actualizado';
                    indicator.className = 'badge bg-secondary';
                }
            }
        }

        // Renderizar calendario al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
            renderCalendar();
        });
