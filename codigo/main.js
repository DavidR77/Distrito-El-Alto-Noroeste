// Datos de las iglesias con información completa
        const iglesias = [
            {
                nombre: "Iglesia del Nazareno Alto Lima",
                pastor: "Pastor",
                direccion: "---",
                zona: "norte",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno bautista Saavedra",
                pastor: "Pastora María López",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno 16 de Julio",
                pastor: "Pastor Carlos Rodríguez",
                direccion: "Plaza Central #789, Centro",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Nueva Jerusalen",
                pastor: "Pastor José Fernández",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Rio Seco",
                pastor: "Pastor David González",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno San Felipe de Sek'e",
                pastor: "Pastor Pedro Sánchez",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Villa Palestina",
                pastor: "Pastora Ana Torres",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno 16 de Febrero",
                pastor: "Pastor Miguel Vargas",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Progreso",
                pastor: "Pastora Laura Méndez",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno German Busch",
                pastor: "Pastor Roberto Castro",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
                        {
                nombre: "Iglesia del Nazareno Mariscal Sucre",
                pastor: "Pastor Juan Martínez",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "norte",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Betania",
                pastor: "Pastora María López",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Fortaleza ",
                pastor: "Pastor Carlos Rodríguez",
                direccion: "Plaza Central #789, Centro",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Mision Huayna Potosi ",
                pastor: "Pastor José Fernández",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Abanzada Pumamaya",
                pastor: "Pastor David González",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Avanzada Bajo Milluni",
                pastor: "Pastor Pedro Sánchez",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Avanzada Tacachira",
                pastor: "Pastora Ana Torres",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Avanzada Pomamaya Alta ",
                pastor: "Pastor Miguel Vargas",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "norte",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Aposento Alto",
                pastor: "Pastora Laura Méndez",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Belen",
                pastor: "Pastor Roberto Castro",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
                        {
                nombre: "Iglesia del Nazareno El Paraiso",
                pastor: "Pastor Juan Martínez",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "central",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Filadelfia",
                pastor: "Pastora María López",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Primero de Mayo ",
                pastor: "Pastor Carlos Rodríguez",
                direccion: "Plaza Central #789, Centro",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Sajama",
                pastor: "Pastor José Fernández",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno 7 de Septiembre",
                pastor: "Pastor David González",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno 6 de Junio",
                pastor: "Pastor Pedro Sánchez",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Villa Abaroa",
                pastor: "Pastora Ana Torres",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Pacajes",
                pastor: "Pastor Miguel Vargas",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno La Florida",
                pastor: "Pastora Laura Méndez",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Villa Natividad",
                pastor: "Pastor Roberto Castro",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Luz de Cristo",
                pastor: "Pastor Juan Martínez",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenovillaabaroa",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Victoria",
                pastor: "Pastora María López",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "central",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Sayhuapampa",
                pastor: "Pastor Carlos Rodríguez",
                direccion: "Plaza Central #789, Centro",
                zona: "carabuco",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Saanchi",
                pastor: "Pastor José Fernández",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "carabuco",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Italque",
                pastor: "Pastor David González",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "carabuco",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Joko Pampa",
                pastor: "Pastor Pedro Sánchez",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "carabuco",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Tilacoca",
                pastor: "Pastora Ana Torres",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "carabuco",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Achica",
                pastor: "Pastor Miguel Vargas",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Alto Chijini",
                pastor: "Pastora Laura Méndez",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Pocohota",
                pastor: "Pastor Roberto Castro",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Senkata",
                pastor: "Pastor Juan Martínez",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "sur",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Villa Exaltacion",
                pastor: "Pastora María López",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Villa Mercedes",
                pastor: "Pastor Carlos Rodríguez",
                direccion: "Plaza Central #789, Centro",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Villa Santiago I",
                pastor: "Pastor José Fernández",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Villa Santiago II",
                pastor: "Pastor David González",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Santa Rosa",
                pastor: "Pastor Pedro Sánchez",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Dignidad2",
                pastor: "Pastora Ana Torres",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno 2 de Febrero",
                pastor: "Pastor Miguel Vargas",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Santa Maria",
                pastor: "Pastora Laura Méndez",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Alto Marquirivi",
                pastor: "Pastor Roberto Castro",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "sur",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Calata Grande",
                pastor: "Pastor Juan Martínez",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "copacabana",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Calata Capurita",
                pastor: "Pastora María López",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "copacabana",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Isla Suriqui",
                pastor: "Pastor Carlos Rodríguez",
                direccion: "Plaza Central #789, Centro",
                zona: "copacabana",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Tiquina",
                pastor: "Pastor José Fernández",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "copacabana",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Isla del Sol(mision)",
                pastor: "Pastor David González",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "copacabana",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Corpaputo",
                pastor: "Pastor Pedro Sánchez",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Pongonhuyo Berenguela",
                pastor: "Pastora Ana Torres",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Pongonhuyo Central",
                pastor: "Pastor Miguel Vargas",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Jaillihuaya",
                pastor: "Pastora Laura Méndez",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Kerani Central",
                pastor: "Pastor Roberto Castro",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Pariri",
                pastor: "Pastor Juan Martínez",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "cordillera",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Penas",
                pastor: "Pastora María López",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Turquia",
                pastor: "Pastor Carlos Rodríguez",
                direccion: "Plaza Central #789, Centro",
                zona: "cordillera",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Central Calla",
                pastor: "Pastor José Fernández",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Jesus de Machaca",
                pastor: "Pastor David González",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Khonkho Loquiliqui",
                pastor: "Pastor Pedro Sánchez",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Suramaya",
                pastor: "Pastora Ana Torres",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Tacaca",
                pastor: "Pastor Miguel Vargas",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Yauriri de Machaca",
                pastor: "Pastora Laura Méndez",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Nazacara",
                pastor: "Pastor Roberto Castro",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "machaca",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
                        {
                nombre: "Iglesia del Nazareno Antacollo",
                pastor: "Pastor Juan Martínez",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "lago",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Kalaque Wichiwichi",
                pastor: "Pastora María López",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "lago",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Huarina",
                pastor: "Pastor Carlos Rodríguez",
                direccion: "Plaza Central #789, Centro",
                zona: "lago",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Jancko Amaya",
                pastor: "Pastor José Fernández",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "lago",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Samancha",
                pastor: "Pastor David González",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "lago",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Chipamaya",
                pastor: "Pastor Pedro Sánchez",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Kenakahua",
                pastor: "Pastora Ana Torres",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Mucuna",
                pastor: "Pastor Miguel Vargas",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Seguenca",
                pastor: "Pastora Laura Méndez",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Huaynapotosi Palcoco",
                pastor: "Pastor Roberto Castro",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Lequinoso",
                pastor: "Pastor José Fernández",
                direccion: "Av. Libertad #234, Zona Oeste",
                zona: "andesI",
                facebook: "https://facebook.com/iglesianazarenograciadivina",
                instagram: "https://instagram.com/iglesianazarenograciadivina",
                youtube: "https://youtube.com/iglesianazarenograciadivina",
                maps: "https://maps.google.com/?q=Av+Libertad+234+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Caleria",
                pastor: "Pastor David González",
                direccion: "Calle Esperanza #567, Zona Este",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenoelredentor",
                instagram: "https://instagram.com/iglesianazarenoelredentor",
                youtube: "https://youtube.com/iglesianazarenoelredentor",
                maps: "https://maps.google.com/?q=Calle+Esperanza+567+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Khonkho Catavi",
                pastor: "Pastor Pedro Sánchez",
                direccion: "Av. Cristiana #890, Zona Norte",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenoemmanuel",
                instagram: "https://instagram.com/iglesianazarenoemmanuel",
                youtube: "https://youtube.com/iglesianazarenoemmanuel",
                maps: "https://maps.google.com/?q=Av+Cristiana+890+Zona+Norte"
            },
            {
                nombre: "Iglesia del Nazareno Central Copajira",
                pastor: "Pastora Ana Torres",
                direccion: "Calle Roca Fuerte #111, Zona Sur",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenolaroca",
                instagram: "https://instagram.com/iglesianazarenolaroca",
                youtube: "https://youtube.com/iglesianazarenolaroca",
                maps: "https://maps.google.com/?q=Calle+Roca+Fuerte+111+Zona+Sur"
            },
            {
                nombre: "Iglesia del Nazareno Huacullani",
                pastor: "Pastor Miguel Vargas",
                direccion: "Cerro Monte Sion #222, Zona Este",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenomontesion",
                instagram: "https://instagram.com/iglesianazarenomontesion",
                youtube: "https://youtube.com/iglesianazarenomontesion",
                maps: "https://maps.google.com/?q=Cerro+Monte+Sion+222+Zona+Este"
            },
            {
                nombre: "Iglesia del Nazareno Cantapa",
                pastor: "Pastora Laura Méndez",
                direccion: "Av. Celestial #333, Zona Central",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenopuertadelcielo",
                instagram: "https://instagram.com/iglesianazarenopuertadelcielo",
                youtube: "https://youtube.com/iglesianazarenopuertadelcielo",
                maps: "https://maps.google.com/?q=Av+Celestial+333+Zona+Central"
            },
            {
                nombre: "Iglesia del Nazareno Puchuni",
                pastor: "Pastor Roberto Castro",
                direccion: "Calle Refugio #444, Zona Oeste",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenorefugioeterno",
                instagram: "https://instagram.com/iglesianazarenorefugioeterno",
                youtube: "https://youtube.com/iglesianazarenorefugioeterno",
                maps: "https://maps.google.com/?q=Calle+Refugio+444+Zona+Oeste"
            },
            {
                nombre: "Iglesia del Nazareno Santa Rosa de Taraco",
                pastor: "Pastor Juan Martínez",
                direccion: "Av. Principal #123, Villa Abaroa",
                zona: "andesII",
                facebook: "#",
                instagram: "https://instagram.com/iglesianazarenovillaabaroa",
                youtube: "https://youtube.com/iglesianazarenovillaabaroa",
                maps: "https://maps.google.com/?q=Av+Principal+123+Villa+Abaroa"
            },
            {
                nombre: "Iglesia del Nazareno Viluyo",
                pastor: "Pastora María López",
                direccion: "Calle Paz #456, Zona Belén",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenobelen",
                instagram: "https://instagram.com/iglesianazarenobelen",
                youtube: "https://youtube.com/iglesianazarenobelen",
                maps: "https://maps.google.com/?q=Calle+Paz+456+Belén"
            },
            {
                nombre: "Iglesia del Nazareno Yanamuyo",
                pastor: "Pastor Carlos Rodríguez",
                direccion: "Plaza Central #789, Centro",
                zona: "andesII",
                facebook: "https://facebook.com/iglesianazarenofeyesperanza",
                instagram: "https://instagram.com/iglesianazarenofeyesperanza",
                youtube: "https://youtube.com/iglesianazarenofeyesperanza",
                maps: "https://maps.google.com/?q=Plaza+Central+789+Centro"
            },
            {
                nombre: "Iglesia del Nazareno Nueva Cobija",
                pastor: "Pastor José Fernández",
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
                        <div class="church-pastor">
                            <i class="bi bi-person-circle"></i> ${iglesia.pastor}
                        </div>
                        <div class="church-location">
                            <i class="bi bi-geo-alt"></i>
                            <div>
                                <strong>Dirección:</strong> ${iglesia.direccion}
                            </div>
                        </div>
                        <div class="social-icons-sm">
                            <a href="${iglesia.facebook}" target="_blank" class="social-icon facebook-icon" title="Facebook">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="${iglesia.instagram}" target="_blank" class="social-icon instagram-icon" title="Instagram">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="${iglesia.youtube}" target="_blank" class="social-icon youtube-icon" title="YouTube">
                                <i class="bi bi-youtube"></i>
                            </a>
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
                    iglesia.nombre.toLowerCase().includes(nombreBusqueda) ||
                    iglesia.pastor.toLowerCase().includes(nombreBusqueda)
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
