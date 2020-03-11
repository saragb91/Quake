const mongoose = require('mongoose');
const Activity = require('../models/Activity.model');
const Sport= require('../models/Sport.model')
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
        activity: "Vía ferrata",
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
        image: "https://www.surfhouseasfurnas.com/wp-content/uploads/2018/02/surf-web-1024x768.jpg",
        province: "Asturias",
        map: {
            lat: 43.540823,
            leng: -5.655616,
            name: "Espumeru",
        },
    },
    {
        company: "Agua y Nieve",
        activity: "Alpinismo",
        price: 80,
        duration: 8,
        difficulty: "Todos los niveles",
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
   
]


const sports=[
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
        image: "https://www.cangasaventura.com/wp-content/uploads/2018/11/buggie5.jpg",
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