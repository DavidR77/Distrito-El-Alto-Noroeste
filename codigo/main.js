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

            // Filtrar solo eventos futuros (o mostrar todos si no hay futuros)
            let eventosFuturos = eventosOrdenados.filter(e => e.fecha >= hoy);
            if (eventosFuturos.length === 0) {
                eventosFuturos = eventosOrdenados.slice(-12);
            }

            // Agrupar eventos por mes
            const mesesAgrupados = {};
            eventosFuturos.forEach(evento => {
                const mesKey = evento.fecha.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
                const mesCapitalizado = mesKey.charAt(0).toUpperCase() + mesKey.slice(1);
                if (!mesesAgrupados[mesCapitalizado]) {
                    mesesAgrupados[mesCapitalizado] = [];
                }
                mesesAgrupados[mesCapitalizado].push(evento);
            });

            // Mostrar máximo 4 meses
            const mesesAMostrar = Object.keys(mesesAgrupados).slice(0, 4);

            let html = '';
            mesesAMostrar.forEach((mesNombre, index) => {
                const eventosDelMes = mesesAgrupados[mesNombre];
                
                html += `
                    <div class="col-md-3 mb-4">
                        <div class="calendar-month-card">
                            <div class="calendar-month-header">
                                <i class="bi bi-calendar3"></i>
                                <span class="ms-2">${mesNombre.charAt(0).toUpperCase() + mesNombre.slice(1).toLowerCase().replace(' 2026', '')}</span>
                            </div>
                            <div class="calendar-month-events">
                                ${eventosDelMes.map(evento => `
                                    <div class="calendar-month-event" onclick="showEventDetail('${evento.id}')">
                                        <i class="bi bi-check2-square"></i>
                                        <span><strong>${evento.fecha.getDate()}</strong> — ${evento.titulo}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html;

            // Actualizar indicador
            const indicator = document.getElementById('calendar-live-indicator');
            if (indicator && eventosFuturos.length > 0) {
                const proximoEvento = eventosFuturos[0];
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
