const mongoose = require('mongoose');
const Activity = require('../models/Activity.model');
const Sport = require('../models/Sport.model')
require("dotenv").config()

mongoose.connect(`${process.env.DB}`, { useNewUrlParser: true })



const activities = [
    {
        company: "Jucar Aventura",
        activity: "Barranquismo",
        price: 35,
        duration: 2,
        difficulty: "alta",
        description: "Descenderás el Barranco del Júcar, el famoso cañón del Ventano del Diablo en los Cortados del Júcar, un parque acuático natural donde harás barranquismo descendiendo toboganes, saltos a pozas, jacuzzis naturales y cascadas, todo ello en un paraje natural único en Cuenca.",
        image: "https://jucaraventura.es/wp-content/uploads/2015/10/GOPR7705-1-e1490958433522.jpg",
        province: "Cuenca",
        map: {
            lat: 40.230906,
            leng: -2.093493,
            name: "Júcar Aventura",
        },
    },

    {
        company: "Akenay",
        activity: "Barranquismo",
        price: 45,
        duration: 2.5,
        difficulty: "media",
        description: "El barranco más cercano de Madrid, ven y disfruta de rápeles de hasta 30 metros . Un barranco ideal para aquellos que desean iniciarse en esta aventura llamada Barranquismo... y a menos de una hora de la capital!!",
        image: "https://amadablamaventura.es/public/imagenes/via/somosierra-barranco%20-%201.jpg",
        province: "Madrid",
        map: {
            lat: 40.672117,
            leng: -4.089342,
            name: "Akenay",
        },
    },
    {
        company: "Beloaventura",
        activity: "Barranquismo",
        price: 35,
        duration: 3,
        difficulty: "alta",
        description: "El barranco más visitado es el de Pedroso, que es ideal para los grupos que quieren divertirse y vivir fuertes sensaciones rapelando sus cascadas. Hay más opciones como, Cañón de Leza, Llano de la Casa, Cárdenas, Puente Ra, Najerilla, etc. No es necesaria experiencia.",
        image: "https://cdn.pixabay.com/photo/2015/02/26/12/07/sport-650211_960_720.jpg",
        province: "Soria",
        map: {
            lat: 41.761576,
            leng: -2.628059,
            name: "Beloaventura",
        },
    },
    {
        company: "Los Barrancos",
        activity: "Barranquismo",
        price: 45,
        duration: 4,
        difficulty: "media",
        description: "El Descenso de Barrancos de barrancos es una disciplina deportiva que tiene un gran número de seguidores en Cuenca. Su geografía y su entorno hacen que Cuenca y alrededores sean un lungar ideal para la práctica de este deporte. Dispone de un buen abanico de posibilidades y niveles, pudiendo disfrutar de esta actividad desde los mas pequeños hasta los mas mayores.",
        image: "https://cdn.pixabay.com/photo/2016/11/11/11/09/canyoning-descent-1816416_960_720.jpg",
        province: "Cuenca",
        map: {
            lat: 39.921570,
            leng: -2.142950,
            name: "Los Barrancos",
        },
    },
    {
        company: "Alto Tajo",
        activity: "Barranquismo",
        price: 40,
        duration: 3,
        difficulty: "media",
        description: "Entre los Parques Naturales del Alto Tajo en Guadalajara y la Serranía de Cuenca, existen varios barrancos acuáticos y secos de una belleza inimaginable. Descenderemos por los cañones haciendo rápeles (bajada con cuerdas), saltando y nadando, siempre con la mayor seguridad gracias a nuestros monitores especializados, y casi siempre sin otra compañía que los buitres y los pinos en barrancos muy desconocidos.",
        image: "https://cdn.pixabay.com/photo/2015/02/26/12/07/sport-650212_960_720.jpg",
        province: "Guadalajara",
        map: {
            lat: 40.529458,
            leng: -3.031265,
            name: "Alto Tajo",
        },
    },
    {
        company: "Canoe",
        activity: "Barranquismo",
        price: 35,
        duration: 3.5,
        difficulty: "alta",
        description: "La sensación de aventura comienza al llegar a las instalaciones. El barranco está a diez minutos de nuestra base en Panes y solo otros diez minutos de aproximación (recorrido desde el vehículo a la cabecera del barranco) por el antiguo camino que une Navedo con la Hermida y Potes. Tras las instrucciones del guía, una cascada nos recibe dándonos una refrescante ducha. Es el comienzo de una jornada llena de sorpresas, toboganes y chapuzones.",
        image: "https://cdn.pixabay.com/photo/2015/06/28/21/06/mountaineering-824911__340.jpg",
        province: "Cantabria",
        map: {
            lat: 43.142338,
            leng: -4.937838,
            name: "Canoe",
        },
    },
    {
        company: "Akenay",
        activity: "Buggie",
        price: 20,
        duration: 1.5,
        difficulty: "baja",
        description: "¿Alguna vez has sentido las emociones que te proporciona la conducción de un buggie? Estar en contacto con la naturaleza, tener acceso a lugares casi imposibles y disfrutar de una condcción al límite, hacen de la experiencia a bordo de nuestros buggies una aventura totalmente extrema.Qé mejor que disfrutar de la velocidad mientras te deleitas con las preciosas vistas de los paisajes madrileños. Ahora, tú y tus amigos podréis formar parte de la naturaleza mientras recorréis los mejores itinerarios jamás pensados en la sierra de Madrid",
        image: "https://cdn1.yumping.com/emp/fotos/7/2/2/8/tb_file0062buggy-aventura-cb.jpg",
        province: "Madrid",
        map: {
            lat: 40.672117,
            leng: -4.089342,
            name: "Akenay",
        },
    },

    {
        company: "Aventura Amazonia",
        activity: "Arborismo",
        price: 20,
        duration: 2.5,
        difficulty: "todos los niveles",
        description: "Con la entrada puedes disfrutar en nuestros circuitos multiaventura de un máximo de 3 HORAS de Emoción y Adrenalina, es decir, puedes realizar los circuitos tantas veces como quieras en ese tiempo. E incluye el Curso de Iniciación que se realiza en un circuito especial de aprendizaje, por donde todos los participantes, adultos y niños, tenéis que practicar antes de subir a los circuitos.",
        image: "https://cdn.pixabay.com/photo/2016/04/27/04/15/end-1355949_960_720.jpg",
        province: "Madrid",
        map: {
            lat: 40.786996,
            leng: -3.980566,
            name: "Aventura Amazonia",
        },
    },
    {
        company: "TuriaAventura",
        activity: "Buggie",
        price: 40,
        duration: 1.5,
        difficulty: "Moderado",
        description: "Ruta por las laderas del valle Júcar en Albacete donde disfrutarás de emociones, paisajes, una espectacular vegetación y un sin fin de emociones.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4Sa-TqdJQpcgCS3PcgP6vO_IO3ZvPWf7GEKIdVz02Sxdzc7oj",
        province: "Albacete",
        map: {
            lat: 39.191076,
            leng: -1.426549,
            name: "TuriaAventura",
        },
    },
    {
        company: "TuriaAventura",
        activity: "Rafting",
        price: 40,
        duration: 2.5,
        difficulty: "Alto",
        description: "Si vienes a pasar el fin de semana con tus amigos a la provincia de Albacete no dudes ni un segundo en relazar el rafting de aguas bravas, juegos, abordajes, saltos, rápidos y mucha agua hacen que en esta actividad la diversión esté asegurada",
        image: "http://www.multiaventuralosolivos.com/img/activities/1/57681.jpg",
        province: "Albacete",
        map: {
            lat: 39.191076,
            leng: -1.426549,
            name: "TuriaAventura",
        },
    },
    {
        company: "SoriaAventura",
        activity: "Vía Ferrata",
        price: 28,
        duration: 2,
        difficulty: "Inicial",
        description: "Vía Ferrata apta para personas sin nivel ni experiencia. Disfrutarás con el paisaje, con las dificultades y las excelentes vístas.",
        image: "https://cdn.pixabay.com/photo/2019/08/22/14/39/via-ferrata-4423715_960_720.jpg",
        province: "Soria",
        map: {
            lat: 41.767215,
            leng: -2.474249,
            name: "SoriaAventura",
        },
    },
    {
        company: "SoriaAventura",
        activity: "Arborismo",
        price: 20,
        duration: 3,
        difficulty: "Todos los niveles",
        description: "Parque de Cuerdas y tirolinas: Una aventura única. Un recorrido apasionante por el bosque como nunca te habías imaginado. Experimenta la adrenalina en estado puro. Situada entre la Soria Verde y la Ribera del Duero. Una actividad que no te dejará indiferente, descubre de qué material estás hecho, lanzándote de árbol en árbol mediante tirolinas, cuerdas colgantes, pasarelas, puentes naturales,... Te ofrecemos una experiencia irrepetible. Esta actividad se puede realizar en familia, con amigos o como reto personal, atrévete a descubrir una forma nueva de pasear por el bosque.",
        image: "https://www.clizzz-aventuras.com/wp-content/uploads/2019/05/adventure-beautiful-cheerful-2041759-min-1080x675.jpg",
        province: "Soria",
        map: {
            lat: 41.767215,
            leng: -2.474249,
            name: "SoriaAventura",
        },
    },
    {
        company: "Zurriola",
        activity: "Surf",
        price: 15,
        duration: 1,
        difficulty: "Todos los niveles",
        description: "Zurriola es una escuela referente en la enseñanza del surf.Sus amplias y modernas instalaciones, sus apasionados monitores titulados, junto con otros requisitos establecidos, han dado lugar a que sea la primera escuela de surf, bodyboard y actividades físicas que haya obtenido el certificado de calidad y seguridad",
        image: "https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg",
        province: "San Sebastián",
        map: {
            lat: 43.325017,
            leng: -1.976030,
            name: "Zurriola",
        },
    },
    {
        company: "Espumeru",
        activity: "Surf",
        price: 20,
        duration: 1,
        difficulty: "Todos los niveles",
        description: "Asturias es un lugar ideal para surfear todo el año. Con rompientes para todos los gustos y una costa variopinta donde la imprevisibilidad de la próxima ola, ésa que alimenta la adrenalina surfera, es tan fascinante o más que en cualquier otro litoral. Asturias tiene además su propia historia del surf.",
        image: "https://www.surfhouseasfurnas.com/wp-content/uploads/2018/02/surf-web-1024x768.jpg",
        province: "Asturias",
        map: {
            lat: 43.540823,
            leng: -5.655616,
            name: "Espumeru",
        },
    },
    {
        company: "Hopupu",
        activity: "Surf",
        price: 15,
        duration: 1,
        difficulty: "Todos los niveles",
        description: "Asturias es un lugar ideal para surfear todo el año. Con rompientes para todos los gustos y una costa variopinta donde la imprevisibilidad de la próxima ola, ésa que alimenta la adrenalina surfera, es tan fascinante o más que en cualquier otro litoral. Asturias tiene además su propia historia del surf.",
        image: "https://cdn.pixabay.com/photo/2016/03/09/15/16/wave-1246560_960_720.jpg",
        province: "Asturias",
        map: {
            lat: 43.540823,
            leng: -5.655616,
            name: "Hopupu",
        },
    },
    {
        company: "Bastiaguero",
        activity: "Surf",
        price: 20,
        duration: 1,
        difficulty: "Todos los niveles",
        description: "A 10 minutos de A Coruña, nuestra escuela de surf está situada a pie de playa, con vestuarios, duchas de agua caliente, albergue para material, zona de espera y porche con vistas al mar, todo esto en una de las playas más transitadas durante todo el año por los surfistas.",
        image: "https://cdn.pixabay.com/photo/2019/04/22/04/32/blue-4145659_960_720.jpg",
        province: "A Coruña",
        map: {
            lat: 43.343075,
            leng: -8.356618,
            name: "Bastiaguero",
        },
    },
    {
        company: "Latas Surf",
        activity: "Surf",
        price: 30,
        duration: 1.5,
        difficulty: "Todos los niveles",
        description: "Latas Surf se encuentra a tan solo 5 minutos andando de la playa de Somo, en Cantabria, uno de los mejores lugares de Europa para practicar surf.  Es un sueño hecho realidad, creado por surfistas que quieren compartir su pasión y estilo de vida con todos aquellos que quieran probarlo. Nuestro equipo se asegurará de que aproveches al máximo tu tiempo en las olas pero también que continues divirtiéndote fuera del agua. Barbacoas, fiestas en barco, skate, entrenamiento funcional, gimnasio, yoga y viajes de surf.",
        image: "https://cdn.pixabay.com/photo/2016/11/18/18/45/beach-1836366_960_720.jpg",
        province: "Cantabria",
        map: {
            lat: 43.462435,
            leng: -3.717686,
            name: "Latas Surf",
        },
    },
    {
        company: "Yerbabuena Surf",
        activity: "Surf",
        price: 30,
        duration: 1.5,
        difficulty: "Todos los niveles",
        description: "Junto al histórico faro de Trafalgar encontramos varias olas en un entorno privilegiado protegidas del poniente.  Una larga derecha perfecta para el longboard que bombea cuando hay mucho mar y marea baja. En la misma playa hay una ola denominada Marisucia indicada para un nivel intermedio a la que acudimos a menudo para dar clases de este nivel y que rompe mejor con marea llena. Cerca hay otros picos de gran calidad para surfistas experimentados.",
        image: "https://cdn.pixabay.com/photo/2016/02/18/22/24/surfing-1208255_960_720.jpg",
        province: "Cádiz",
        map: {
            lat: 36.187070,
            leng: -5.921507,
            name: "Yerbabuena Surf",
        },
    },
    {
        company: "Agua y Nieve",
        activity: "Alpinismo",
        price: 80,
        duration: 8,
        difficulty: "Medio",
        description: "Con nuestros cursos de alpinismo en pirineos podras introducirte en el fascinante mundo del Alpinismo, aquí podrás adquirir los conocimientos necesarios para hacerlo con total seguridad. Tanto si no tienes experiencia, como si quieres afianzar tus conocimientos o adentrarte en las grandes caras nortes, corredores y cascadas de nuestras montañas.",
        image: "https://cdn.pixabay.com/photo/2017/03/07/14/19/mountaineering-2124113_960_720.jpg",
        province: "Huesca",
        map: {
            lat: 42.199767,
            leng: -0.340286,
            name: "Agua y Nieve",
        },
    },
    {
        company: "Extrem",
        activity: "Alpinismo",
        price: 90,
        duration: 10,
        difficulty: "Alto",
        description: "Nuestra cordillera tiene infinidad de paredes, valles, rincones por descubrir y ¡vías por escalar! una lista interminable de sueños, ilusiones y experiencias por vivir. Con este programa os queremos acercar a las grandes montañas del Pirineo, tanto en invierno como en verano.",
        image: "https://cdn.pixabay.com/photo/2017/06/21/13/20/mountain-climber-2427191_960_720.jpg",
        province: "Huesca",
        map: {
            lat: 42.266408,
            leng: -0.438850,
            name: "Extrem",
        },
    },
    {
        company: "PirineoSur",
        activity: "Alpinismo",
        price: 130,
        duration: 10,
        difficulty: "Alto",
        description: "¿Quieres prácticar alpinismo técnico? Escaladas alpinas más técnicas con pasajes de hielo y mixto, recorridos por las  rutas clásicas a los picos más emblematicos del Pirineo Aragonés. Nos adentraremos en las entrañas del Valle de Tena, Valle de Aragón, Valle de Hecho, Valle de Ordesa, Pirineo Francés",
        image: "https://cdn.pixabay.com/photo/2015/06/08/15/29/mountain-climbing-802099_960_720.jpg",
        province: "Huesca",
        map: {
            lat: 42.756517,
            leng: -0.315123,
            name: "PirineoSur",
        },
    },
    {
        company: "Agua y Nieve",
        activity: "Rafting",
        price: 40,
        duration: 3,
        difficulty: "Alto",
        description: "Descenso de Rafting en aguas bravas ideal para amigos y jóvenes aventureros que deseen vivir una experiencia única.",
        image: "https://www.guiasdetorlaordesa.com/wp-content/uploads/2017/05/Descenso-Rafting-Rio-Ara.jpg",
        province: "Huesca",
        map: {
            lat: 42.199767,
            leng: -0.340286,
            name: "Agua y Nieve",
        },
    },
    {
        company: "AdrePirineos",
        activity: "Rafting",
        price: 45,
        duration: 2,
        difficulty: "Alto",
        description: "Descenso de un tramo típicamente alpino. Muy impresionante, atravesando un espectacular cañón frondoso y escarpado de fuerte pendiente. En cada embarcación descienden un máximo de 6 tripulantes acompañados por un guía y con cada grupo desciende otro guía más manejando una piragüa de seguridad safety-kayak.",
        image: "https://cdn.pixabay.com/photo/2015/08/11/04/03/rafting-883523_960_720.jpg",
        province: "Huesca",
        map: {
            lat: 42.603458,
            leng: -0.122370,
            name: "AdrePirineos",
        },
    },
    {
        company: "Canoe",
        activity: "Rafting",
        price: 40,
        duration: 4,
        difficulty: "Medio",
        description: "El Rafting se realiza en los ríos Cares y Deva en sus tramos altos de aguas bravas. Descendemos en lanchas hinchables de hasta siete participantes más el guía. Es en invierno y primavera cuando nuestros ríos son más caudalosos y las condiciones son optimas para el descenso de rafting.",
        image: "https://cdn.pixabay.com/photo/2015/04/16/17/02/whitewater-725935_960_720.jpg",
        province: "Cantabria",
        map: {
            lat: 43.142338,
            leng: -4.937838,
            name: "Canoe",
        },
    },
    {
        company: "Akenay",
        activity: "Rafting",
        price: 45,
        duration: 3,
        difficulty: "Medio",
        description: "El alto Tormes es con diferencia el mejor río de aguas bravas de la zona centro y el más próximo a la capital de España. En esta zona, el rafting sólo se puede realizar de octubre a junio, siendo los más óptimos los meses de marzo, abril y mayo, no solo por el buen tiempo, sino porque, además, el deshielo propio de la época garantiza el caudal necesario para la adecuada navegación de las balsas.",
        image: "https://cdn.pixabay.com/photo/2016/07/28/20/47/waterfall-1549639_960_720.jpg",
        province: "Salamanca",
        map: {
            lat: 40.901081,
            leng: -5.203445,
            name: "Akenay",
        },
    },
    {
        company: "Oceanus Cádiz",
        activity: "Buceo",
        price: 140,
        duration: 16,
        difficulty: "Inicial",
        description: "Este es el primer curso con certificación, pero con limitaciones. El curso Scuba Diver está diseñado para personas que no dispongan de tiempo para realizar el curso Open Water, ya que es posible realizarlo en 2 días. También para personas que quieran bucear sin complicaciones y a no mucha profundidad, ya que esta está limitada  a 12 metros y tienes que ir acompañado en todo momento de un profesional de buceo recreativo.",
        image: "https://cdn.pixabay.com/photo/2015/03/19/23/03/divers-681516_960_720.jpg",
        province: "Cádiz",
        map: {
            lat: 36.438770,
            leng: -6.140058,
            name: "Oceanus Cádiz",
        },
    },
    {
        company: "Hondarrabia",
        activity: "Buceo",
        price: 100,
        duration: 4,
        difficulty: "Inicial",
        description: "Esta actividad se lleva a cabo de una manera muy controlada. De la mano de un Divecon o un Instructor, realizarás una inmersión completa disfrutando de toda la vida marina, y del contacto con el agua con total seguridad y confort.",
        image: "https://cdn.pixabay.com/photo/2015/06/17/20/54/diving-813028_960_720.jpg",
        province: "San Sebastián",
        map: {
            lat: 43.314766,
            leng: -1.989678,
            name: "Hondarrabia",
        },
    },
    {
        company: "Fly Zgz",
        activity: "Globo",
        price: 180,
        duration: 2,
        difficulty: "Inicial",
        description: "Este es el primer curso con certificación, pero con limitaciones. El curso Scuba Diver está diseñado para personas que no dispongan de tiempo para realizar el curso Open Water, ya que es posible realizarlo en 2 días. También para personas que quieran bucear sin complicaciones y a no mucha profundidad, ya que esta está limitada  a 12 metros y tienes que ir acompañado en todo momento de un profesional de buceo recreativo.",
        image: "https://globosboreal.com/wp-content/uploads/2017/12/globo-jb-zaragoza-600x600.jpg",
        province: "Zaragoza",
        map: {
            lat: 41.632252,
            leng: -0.891160,
            name: "Fly Zgz",
        },
    },
    {
        company: "A vista de globo",
        activity: "Globo",
        price: 200,
        duration: 1,
        difficulty: "Inicial",
        description: "Disfrutaremos de una vista hasta ahora desconocida de Cuenca, ciudad declarada Patrimonio de la Humanidad por la UNESCO, descubriremos desde el aire a bordo de nuestro globo aerostático la belleza del casco antiguo, enclavado entre dos espectaculares hoces en plena Naturaleza. ¡Una experiencia que os resultará difícil de olvidar!",
        image: "https://cdn.pixabay.com/photo/2016/03/09/09/35/baloon-1245886__340.jpg",
        province: "Cuenca",
        map: {
            lat: 40.064463, 
            leng: -2.139271,
            name: "A vista de globo",
        },
    },

]


const sports = [
    {
        sport: "Barranquismo",
        image: "https://cdn.pixabay.com/photo/2016/11/11/11/09/jump-1816417_960_720.jpg",
        groupSport: [""]
    },
    {
        sport: "Alpinismo",
        image: "https://cdn.pixabay.com/photo/2016/02/19/10/18/summit-1209168_960_720.jpg",
        groupSport: [""],
    },
    {
        sport: "Buggie",
        image: "https://cdn.pixabay.com/photo/2017/04/06/17/23/buggy-2208873_960_720.jpg",
        groupSport: [""]
    },
    {
        sport: "Surf",
        image: "https://cdn.pixabay.com/photo/2016/01/19/17/07/surfer-1149551_960_720.jpg",
        groupSport: [""]
    },
    {
        sport: "Vía Ferrata",
        image: "https://cdn.pixabay.com/photo/2012/10/05/01/51/climbing-59661_960_720.jpg",
        groupSport: [""]
    },

    {
        sport: "Buceo",
        image: "https://cdn.pixabay.com/photo/2013/02/25/04/36/diver-85913_960_720.jpg",
        groupSport: [""]
    },
    {
        sport: "Globo",
        image: "https://cdn.pixabay.com/photo/2016/01/19/15/11/hot-air-balloon-1149183__340.jpg",
        groupSport: [""]
    },
    {
        sport: "Arborismo",
        image: "https://media.smartbox.com/pim/es000559913_original.jpg?thumbor=720x540",
        groupSport: [""]
    },
    {
        sport: "Rafting",
        image: "https://somosaventura.com/wp-content/uploads/2016/09/Raf1.jpg",
        groupSport: [""]
    },
]
Activity.create(activities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${activities.length} activities`)
    mongoose.connection.close();
});

Sport.create(sports, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${sports.length} sports`)
    mongoose.connection.close();
});