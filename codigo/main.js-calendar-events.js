
        // Datos de eventos del calendario con fechas reales
        const calendarEvents = [
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
                id: 'retiro-mni-1',
                titulo: 'Retiro Distrital MNI',
                fecha: new Date('2026-03-27'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Primer día del retiro distrital de Misiones Nazarenas Internacionales.'
            },
            {
                id: 'retiro-mni-2',
                titulo: 'Retiro Distrital MNI',
                fecha: new Date('2026-03-28'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Segundo día del retiro distrital MNI.'
            },
            {
                id: 'retiro-mni-3',
                titulo: 'Retiro Distrital MNI',
                fecha: new Date('2026-03-29'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Tercer día del retiro distrital MNI. Clausura y evaluación.'
            },
            // ABRIL 2026
            {
                id: 'semana-santa-1',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-03'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Primera jornada de la campaña evangelística zonal de Semana Santa.'
            },
            {
                id: 'semana-santa-2',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-04'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Segunda jornada de la campaña evangelística de Semana Santa.'
            },
            {
                id: 'semana-santa-3',
                titulo: 'Campaña Zonal de Semana Santa',
                fecha: new Date('2026-04-05'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Tercera jornada de la campaña evangelística de Semana Santa.'
            },
            {
                id: 'inicio-40-dias',
                titulo: 'Inicio de 40 Días de Ayuno y Oración',
                fecha: new Date('2026-04-15'),
                hora: 'Todo el día',
                lugar: 'Templo Central',
                descripcion: 'Inicio de los 40 días de ayuno y oración. Culto especial de convocatoria.'
            },
            {
                id: 'campamento-ninos-1',
                titulo: 'Campamento Zonal de Niños',
                fecha: new Date('2026-04-17'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Primer día del campamento especial para niños de todas las iglesias de la zona.'
            },
            {
                id: 'campamento-ninos-2',
                titulo: 'Campamento Zonal de Niños',
                fecha: new Date('2026-04-18'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Segundo día del campamento zonal de niños.'
            },
            {
                id: 'campamento-ninos-3',
                titulo: 'Campamento Zonal de Niños',
                fecha: new Date('2026-04-19'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Tercer día del campamento zonal de niños. Clausura y celebración.'
            },
            {
                id: 'reunion-pastores-abril',
                titulo: 'Reunión Distrital de Pastores',
                fecha: new Date('2026-04-25'),
                hora: '09:00 - 12:00',
                lugar: 'Sala de Conferencias',
                descripcion: 'Reunión mensual de pastores para coordinar actividades y fortalecer el trabajo ministerial.'
            },
            {
                id: 'cierre-40-dias',
                titulo: 'Cierre de 40 Días de Ayuno y Oración',
                fecha: new Date('2026-04-26'),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Culto de cierre de los 40 días de ayuno y oración. Celebración y agradecimiento.'
            },
            // MAYO 2026
            {
                id: 'aniversario-potosi-1',
                titulo: 'Aniversario Misión Potosí',
                fecha: new Date('2026-05-09'),
                hora: 'Todo el día',
                lugar: 'Iglesia Misión Potosí',
                descripcion: 'Celebración del aniversario de la Iglesia Misión Potosí. Culto especial y convivencia.'
            },
            {
                id: 'aniversario-potosi-2',
                titulo: 'Aniversario Misión Potosí',
                fecha: new Date('2026-05-10'),
                hora: 'Todo el día',
                lugar: 'Iglesia Misión Potosí',
                descripcion: 'Segundo día de celebración del aniversario con actividades especiales.'
            },
            {
                id: 'actualizacion-pastoral-1',
                titulo: 'Actualización Pastoral',
                fecha: new Date('2026-05-15'),
                hora: '09:00 - 14:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Jornada de actualización y capacitación para el equipo pastoral del distrito.'
            },
            {
                id: 'actualizacion-pastoral-2',
                titulo: 'Actualización Pastoral',
                fecha: new Date('2026-05-16'),
                hora: '09:00 - 14:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Segunda jornada de actualización pastoral.'
            },
            {
                id: 'revision-cajas-rural',
                titulo: 'Revisión de Cajas Área Rural',
                fecha: new Date('2026-05-23'),
                hora: '09:00 - 12:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Revisión administrativa de cajas de las iglesias del área rural.'
            },
            {
                id: 'cierre-40-dias-mayo',
                titulo: 'Cierre de 40 Días de Ayuno y Oración',
                fecha: new Date('2026-05-24'),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Culto de cierre y celebración final de los 40 días de ayuno y oración.'
            },
            {
                id: 'campamento-plenitud-1',
                titulo: 'Campamento Distrital de Plenitud de Vida',
                fecha: new Date('2026-05-29'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Inicio del campamento para adultos sobre vida abundante en Cristo.'
            },
            {
                id: 'campamento-plenitud-2',
                titulo: 'Campamento Distrital de Plenitud de Vida',
                fecha: new Date('2026-05-30'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Segundo día del campamento de plenitud de vida.'
            },
            {
                id: 'campamento-plenitud-3',
                titulo: 'Campamento Distrital de Plenitud de Vida',
                fecha: new Date('2026-05-31'),
                hora: 'Todo el día',
                lugar: 'Campamento Distrital',
                descripcion: 'Tercer día del campamento de plenitud de vida. Clausura con culto especial.'
            },
            // JUNIO 2026
            {
                id: 'revision-cajas-junio',
                titulo: 'Revisión de Cajas Locales y Distritales',
                fecha: new Date('2026-06-13'),
                hora: '09:00 - 14:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Revisión administrativa de cajas locales y distritales de las iglesias.'
            },
            {
                id: 'encuentro-vid-1',
                titulo: 'Encuentro Distrital de VID',
                fecha: new Date('2026-06-19'),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Primer día del encuentro del Ministerio de Vida (VID) a nivel distrital.'
            },
            {
                id: 'encuentro-vid-2',
                titulo: 'Encuentro Distrital de VID',
                fecha: new Date('2026-06-20'),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Segundo día del encuentro distrital de VID.'
            },
            {
                id: 'encuentro-vid-3',
                titulo: 'Encuentro Distrital de VID',
                fecha: new Date('2026-06-21'),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Tercer día del encuentro distrital de VID. Clausura y compromisos.'
            },
            {
                id: 'torneo-biblico-jni-1',
                titulo: 'Torneos Bíblicos JNI Zonal',
                fecha: new Date('2026-06-27'),
                hora: '09:00 - 17:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Primera jornada de la competencia bíblica zonal para jóvenes de JNI.'
            },
            {
                id: 'torneo-biblico-jni-2',
                titulo: 'Torneos Bíblicos JNI Zonal',
                fecha: new Date('2026-06-28'),
                hora: '09:00 - 17:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Segunda jornada de los torneos bíblicos JNI. Final y premiación.'
            },
            // JULIO 2026
            {
                id: 'dia-pastor-1',
                titulo: 'Día del Pastor',
                fecha: new Date('2026-07-10'),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Celebración especial en honor a los pastores y sus familias. Culto de agradecimiento.'
            },
            {
                id: 'dia-pastor-2',
                titulo: 'Día del Pastor',
                fecha: new Date('2026-07-11'),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Segundo día de celebración del Día del Pastor con actividades especiales.'
            },
            {
                id: 'dia-pastor-3',
                titulo: 'Día del Pastor',
                fecha: new Date('2026-07-12'),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Tercer día de celebración y cierre del Día del Pastor.'
            },
            {
                id: 'campamento-prejuvenil-1',
                titulo: 'Campamento Zonal de Prejuveniles',
                fecha: new Date('2026-07-24'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Inicio del campamento especial para prejuveniles de todas las iglesias.'
            },
            {
                id: 'campamento-prejuvenil-2',
                titulo: 'Campamento Zonal de Prejuveniles',
                fecha: new Date('2026-07-25'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Segundo día del campamento zonal de prejuveniles.'
            },
            {
                id: 'campamento-prejuvenil-3',
                titulo: 'Campamento Zonal de Prejuveniles',
                fecha: new Date('2026-07-26'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Tercer día del campamento de prejuveniles. Clausura y celebración.'
            },
            // AGOSTO 2026
            {
                id: 'dia-pastor-agosto',
                titulo: 'Día del Pastor',
                fecha: new Date('2026-08-06'),
                hora: 'Todo el día',
                lugar: 'Todas las Iglesias',
                descripcion: 'Celebración especial del Día del Pastor en el mes de agosto.'
            },
            {
                id: 'visita-senabol',
                titulo: 'Visita SENABOL – ETED',
                fecha: new Date('2026-08-12'),
                hora: '09:00 - 14:00',
                lugar: 'Auditorio Distrital',
                descripcion: 'Visita de representantes del SENABOL ETED para coordinación educativa.'
            },
            {
                id: 'encuentro-deportivo-jni',
                titulo: 'Encuentro Deportivo Distrital JNI',
                fecha: new Date('2026-08-15'),
                hora: '09:00 - 18:00',
                lugar: 'Canchas Distritales',
                descripcion: 'Encuentro deportivo para jóvenes de JNI de todo el distrito.'
            },
            {
                id: 'culto-pacto-jubileo',
                titulo: 'Culto de Pacto en Jubileo',
                fecha: new Date('2026-08-16'),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Culto especial de pacto y compromiso en el año de Jubileo.'
            },
            {
                id: 'campamento-adultos-1',
                titulo: 'Campamento Zonal de Adultos',
                fecha: new Date('2026-08-21'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Inicio del campamento especial para adultos de todas las iglesias de la zona.'
            },
            {
                id: 'campamento-adultos-2',
                titulo: 'Campamento Zonal de Adultos',
                fecha: new Date('2026-08-22'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Segundo día del campamento zonal de adultos.'
            },
            {
                id: 'campamento-adultos-3',
                titulo: 'Campamento Zonal de Adultos',
                fecha: new Date('2026-08-23'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Tercer día del campamento de adultos. Clausura con culto especial.'
            },
            // SEPTIEMBRE 2026
            {
                id: 'torneo-ninos-nacional',
                titulo: 'Torneo Bíblico Nacional de Niños',
                fecha: new Date('2026-09-05'),
                hora: '09:00 - 17:00',
                lugar: 'Templo Central',
                descripcion: 'Torneo bíblico nacional para niños de todas las zonas.'
            },
            {
                id: 'campamento-cafe-1',
                titulo: 'Campamento Zonal de CAFE',
                fecha: new Date('2026-09-11'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Inicio del campamento zonal para el ministerio CAFE (Centro de Amigos y Familias).'
            },
            {
                id: 'campamento-cafe-2',
                titulo: 'Campamento Zonal de CAFE',
                fecha: new Date('2026-09-12'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Segundo día del campamento zonal de CAFE.'
            },
            {
                id: 'campamento-cafe-3',
                titulo: 'Campamento Zonal de CAFE',
                fecha: new Date('2026-09-13'),
                hora: 'Todo el día',
                lugar: 'Campamento Zonal',
                descripcion: 'Tercer día del campamento de CAFE. Clausura y celebración.'
            },
            {
                id: 'actualizacion-pastoral-sep',
                titulo: 'Actualización Pastoral',
                fecha: new Date('2026-09-25'),
                hora: '09:00 - 14:00',
                lugar: 'Centro de Capacitación',
                descripcion: 'Jornada de actualización para el equipo pastoral del distrito.'
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
                id: 'maxima-mision-1',
                titulo: 'Máxima Misión Cause JNI / MNI Evangelismo',
                fecha: new Date('2026-10-09'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Primera jornada de máxima misión con evangelismo masivo de JNI y MNI.'
            },
            {
                id: 'maxima-mision-2',
                titulo: 'Máxima Misión Cause JNI / MNI Evangelismo',
                fecha: new Date('2026-10-10'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Segunda jornada de máxima misión y evangelismo.'
            },
            {
                id: 'maxima-mision-3',
                titulo: 'Máxima Misión Cause JNI / MNI Evangelismo',
                fecha: new Date('2026-10-11'),
                hora: 'Todo el día',
                lugar: 'Todas las Zonas',
                descripcion: 'Tercera jornada de máxima misión. Cierre y celebración de resultados.'
            },
            {
                id: 'encuentro-mam-1',
                titulo: 'Encuentro Zonal del MAM',
                fecha: new Date('2026-10-23'),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Primer día del encuentro zonal del Ministerio de Ayuda al Medio (MAM).'
            },
            {
                id: 'encuentro-mam-2',
                titulo: 'Encuentro Zonal del MAM',
                fecha: new Date('2026-10-24'),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Segundo día del encuentro zonal MAM.'
            },
            {
                id: 'encuentro-mam-3',
                titulo: 'Encuentro Zonal del MAM',
                fecha: new Date('2026-10-25'),
                hora: '09:00 - 18:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Tercer día del encuentro zonal MAM. Clausura y compromisos.'
            },
            // NOVIEMBRE 2026
            {
                id: 'bautismo-agua',
                titulo: 'Bautismo en Agua Zonal',
                fecha: new Date('2026-11-02'),
                hora: '10:00 - 13:00',
                lugar: 'Templo Central',
                descripcion: 'Ceremonia zonal de bautismo en agua para nuevos creyentes.'
            },
            {
                id: 'reunion-pastores-nov',
                titulo: 'Reunión Distrital de Pastores',
                fecha: new Date('2026-11-14'),
                hora: '09:00 - 12:00',
                lugar: 'Sala de Conferencias',
                descripcion: 'Reunión mensual de pastores para coordinación ministerial.'
            },
            {
                id: 'entrevistas-pastorales-1',
                titulo: 'Entrevistas Pastorales',
                fecha: new Date('2026-11-19'),
                hora: '09:00 - 17:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Entrevistas pastorales individuales para evaluación y acompañamiento.'
            },
            {
                id: 'entrevistas-pastorales-2',
                titulo: 'Entrevistas Pastorales',
                fecha: new Date('2026-11-20'),
                hora: '09:00 - 17:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Segundo día de entrevistas pastorales individuales.'
            },
            {
                id: 'revision-cajas-distritales',
                titulo: 'Revisión de Cajas Distritales',
                fecha: new Date('2026-11-28'),
                hora: '09:00 - 14:00',
                lugar: 'Oficina Distrital',
                descripcion: 'Revisión administrativa de cajas distritales de todas las iglesias.'
            },
            // DICIEMBRE 2026
            {
                id: 'sesion-anual-1',
                titulo: 'Sesión Anual',
                fecha: new Date('2026-12-06'),
                hora: '09:00 - 13:00',
                lugar: 'Auditorio Principal',
                descripcion: 'Primera sesión anual del distrito para cierre de actividades del año.'
            },
            {
                id: 'culto-agradecimiento-jni',
                titulo: 'Culto de Agradecimiento JNI',
                fecha: new Date('2026-12-12'),
                hora: '19:00 - 21:00',
                lugar: 'Templo Central',
                descripcion: 'Culto especial de agradecimiento de Jóvenes de Nazareno Internacional.'
            },
            {
                id: 'sesion-anual-2',
                titulo: 'Sesión Anual',
                fecha: new Date('2026-12-13'),
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
