db.pilotosf1.drop()
db.pilotosf1.insertMany([
    {id:1,
    fichadePiloto:[
        {piloto: "Lewis Hamilton",
        sponsor:["AMD","TeamViewer","Monster"],
        nss:"AA111111111",
        fechaNacimiento:new Date("1985-01-07"),
        nacionalidad:"Ingles"}],
    coches:[
        {
        marca:"Mercedes",
        modelo:"W13",
        coste:750000,
        caracteristicasModelo:{
            distanciaEjes:3.6,
            cilindros:6,
            CV:[1026,1044],
            peso:793, 
            combustible: "E10"
            },
        fechaLanzamiento:new Date("2022-02-23"),
        
        },
        {
        marca:"Mercedes",
        modelo:"W12",
        coste:600000,
        caracteristicasModelo:{
            distanciaEjes:3.4,
            cilindros:6,
            CV:[1000,1014],
            peso:815, 
            combustible:"E10"
            },
        fechaLanzamiento:new Date("2021-01-20"),
        },
        {
        marca:"Mercedes",
        modelo:"W11",
        coste:500000,
        caracteristicasModelo:{
            distanciaEjes:3.5,
            cilindros:6,
            CV:[940,967],
            peso:805, 
            combustible:"E10"
            },
        fechaLanzamiento:new Date("2020-03-10"),
        }
    ]
    },
    {id:2,
        fichadePiloto:[
            {piloto: "Fernando Alonso",
            sponsor:["Fitnetwork","Movistar"],
            nss:"AA111111112",
            fechaNacimiento:new Date("1981-07-29"),
            nacionalidad:"Español"}],
        coches:[
            {
            marca:"Alpine",
            modelo:"A522",
            coste:650000,
            caracteristicasModelo:{
                distanciaEjes:3.6,
                cilindros:6,
                CV:[993,1012],
                peso:857,
                combustible: "E10"
                },
            fechaLanzamiento:new Date("2022-01-12"),
            
            },
            {
            marca:"Alpine",
            modelo:"A521",
            coste:600000,
            caracteristicasModelo:{
                distanciaEjes:3.5,
                cilindros:6,
                CV:[970,995],
                peso:872,
                combustible:"E9"
                },
            fechaLanzamiento:new Date("2021-11-21"),
            },
            {
            marca:"Mclaren",
            modelo:"MCL33",
            coste:550000,
            caracteristicasModelo:{
                distanciaEjes:3.4,
                cilindros:6,
                CV:[970,996],
                peso:853, 
                combustible:"E9"
                },
            fechaLanzamiento:new Date("2018-08-28"),
            }
            ]
        },
        {id:3, fichadePiloto:[ {piloto: "Max Verstappen", sponsor:["Red Bull","Movistar"], nss:"AA111111113", fechaNacimiento:new Date("1997-09-30"), nacionalidad:"Neerlandes"}], coches:[{marca:"Red Bull", modelo:"RB13",coste:680000, caracteristicasModelo:{ distanciaEjes:3.6, cilindros:6, CV:[1002,1014], peso:782,  combustible: "E10"}, fechaLanzamiento:new Date("2021-03-14"),}, {marca:"Red Bull", modelo:"RB12",coste:530000, caracteristicasModelo:{ distanciaEjes:3.5, cilindros:6, CV:[985,1001], peso:803,  combustible:"E10"}, fechaLanzamiento:new Date("2020-05-07"), }, {marca:"Red Bull", modelo:"RB11",coste:465000, caracteristicasModelo:{ distanciaEjes:3.7, cilindros:4, CV:[890,912], peso:730, combustible:"E9"}, fechaLanzamiento:new Date("2019-05-25")}]},

        {id:4, fichadePiloto:[ {piloto: "Yuki Tsunoda", sponsor:["Danone","Fitnetwork"], nss:"AA111111114", fechaNacimiento:new Date("2000-05-11"), nacionalidad:"Japones"}], coches:[{marca:"Alpha Tauri", modelo:"AT03",coste:625000, caracteristicasModelo:{ distanciaEjes:3.5, cilindros:6, CV:[1013,1026], peso:819,  combustible: "E10"}, fechaLanzamiento:new Date("2022-02-23"),}, {marca:"Alpha Tauri", modelo:"AT02",coste:540000, caracteristicasModelo:{ distanciaEjes:3.4, cilindros:6, CV:[968,980], peso:759,  combustible:"E9"}, fechaLanzamiento:new Date("2021-08-17")}]},
        
        {id:5, fichadePiloto:[ {piloto: "Sebastian Vettel", sponsor:["Monster","Nvidia"], nss:"AA111111115", fechaNacimiento:new Date("1987-07-03"), nacionalidad:"Aleman"}], coches:[{marca:"Aston Martin", modelo:"AMR22",coste:720000, caracteristicasModelo:{ distanciaEjes:3.8, cilindros:6, CV:[995,1017], peso:774,  combustible: "E10"}, fechaLanzamiento:new Date("2021-04-11"),}, {marca:"Aston Martin", modelo:"AMR21",coste:660000, caracteristicasModelo:{ distanciaEjes:3.7, cilindros:6, CV:[940,952], peso:837,  combustible:"E10"}, fechaLanzamiento:new Date("2020-06-29")}]},
        
        {id:6, fichadePiloto:[ {piloto: "George Russell", sponsor:["AMD","Movistar"], nss:"AA111111116", fechaNacimiento:new Date("1998-02-15"), nacionalidad:"Ingles"}], coches:[{marca:"Williams", modelo:"FW44",coste:640000, caracteristicasModelo:{ distanciaEjes:3.6, cilindros:6, CV:[915,940], peso:902,  combustible: "E10"}, fechaLanzamiento:new Date("2022-01-17"),}, {marca:"Williams", modelo:"FW43",coste:580000, caracteristicasModelo:{ distanciaEjes:3.8, cilindros:4, CV:[880,903], peso:796,  combustible:"E9"}, fechaLanzamiento:new Date("2021-06-09")}]},
        
        {id:7, fichadePiloto:[ {piloto: "Nikita Mazepin", sponsor:["Nvidia","Uralkali"], nss:"AA111111117", fechaNacimiento:new Date("1999-03-02"), nacionalidad:"Ruso"}], coches:[{marca:"Hass", modelo:"F1",coste:760000, caracteristicasModelo:{ distanciaEjes:3.8, cilindros:6, CV:[1006,1024], peso:789,  combustible: "E10"}, fechaLanzamiento:new Date("2022-03-05")}]},
        
        {id:8, fichadePiloto:[ {piloto: "Daniel Ricciardo", sponsor:["Movistar","BAT"], nss:"AA111111118", fechaNacimiento:new Date("1989-07-01"), nacionalidad:"Italiano"}], coches:[{marca:"McLaren", modelo:"MCL35M",coste:810000, caracteristicasModelo:{ distanciaEjes:3.6, cilindros:6, CV:[1016,1029], peso:781,  combustible: "E10"}, fechaLanzamiento:new Date("2022-04-10"),}, {marca:"McLaren", modelo:"MCL34M",coste:720000, caracteristicasModelo:{ distanciaEjes:3.8, cilindros:6, CV:[980,1000], peso:850,  combustible:"E10"}, fechaLanzamiento:new Date("2021-07-06")}]},
        
        {id:9, fichadePiloto:[ {piloto: "Carlos Sainz Jr.", sponsor:["CEVA"], nss:"AA111111119", fechaNacimiento:new Date("1994-09-01"), nacionalidad:"Español"}], coches:[{marca:"Ferrari", modelo:"SF22H",coste:900000, caracteristicasModelo:{ distanciaEjes:3.9, cilindros:6, CV:[1017,1021], peso:841,  combustible: "E10"}, fechaLanzamiento:new Date("2022-05-20"),}, {marca:"Ferrari", modelo:"SF21H",coste:780000, caracteristicasModelo:{ distanciaEjes:3.5, cilindros:6, CV:[945,963], peso:864,  combustible:"E10"}, fechaLanzamiento:new Date("2021-02-07"), }, {marca:"Ferrari", modelo:"SF20H",coste:540000, caracteristicasModelo:{ distanciaEjes:3.7, cilindros:6, CV:[870,904], peso:890, combustible:"E9"}, fechaLanzamiento:new Date("2020-06-14")}]},
        
        {id:10, fichadePiloto:[ {piloto: "Kimi Räikkönen", sponsor:["MTR"], nss:"AA111111120", fechaNacimiento:new Date("1979-10-17"), nacionalidad:"Finlandes"}], coches:[{marca:"Alfa Romeo", modelo:"C42",coste:780000, caracteristicasModelo:{ distanciaEjes:3.6, cilindros:6, CV:[985,1005], peso:820,  combustible: "E10"}, fechaLanzamiento:new Date("2022-01-21"),}, {marca:"Alfa Romeo", modelo:"C41",coste:560000, caracteristicasModelo:{ distanciaEjes:3.8, cilindros:6, CV:[950,968], peso:837,  combustible:"E10"}, fechaLanzamiento:new Date("2021-06-08"), }]}

]
)


db.competiciones.drop()
db.competiciones.insertMany([
    {
        localizacion:"Europa",
        nombreCircuito:"Circuito de Barcelona",
        competicion:"GP ESPAÑA",
        premio:1500000,
        ganador:{nombre:"Lewis Hamilton", puntos:8},
        vueltas:78,
        curvaCerrada:true
    },
    {
        localizacion:"Europa",
        nombreCircuito:"Circuito de Lisboa",
        competicion:"GP PORTUGAL",
        premio:1550000,
        ganador:{nombre:"Fernando Alonso", puntos: 10},
        vueltas:92,
        curvaCerrada:true
    },
    {
        localizacion:"Asia",
        nombreCircuito:"Circuito de Japon",
        competicion:"GP SIRC",
        premio:2000000,
        ganador:{nombre:"Max Verstappen", puntos: 9},
        vueltas:83,
        curvaCerrada: false
    },
    {
        localizacion:"Asia",
        nombreCircuito:"Circuito de Macau",
        competicion:"GP GC",
        premio:1250000,
        ganador:{nombre:"Yuki Tsunoda", puntos: 7},
        vueltas:90,
        curvaCerrada: false
    },
    {
        localizacion:"Europa",
        nombreCircuito:"Circuito de Le Mans",
        competicion:"GP de Francia",
        premio:1300000,
        ganador:{nombre:"Sebastian Vettel", puntos: 8},
        vueltas:75,
        curvaCerrada:true
    },
    {
        localizacion:"Europa",
        nombreCircuito:"Circuito de Mónaco",
        competicion:"GP de Mónaco",
        premio:1800000,
        ganador:{nombre:"George Russell", puntos: 6},
        vueltas:93,
        curvaCerrada:false
    },
    {
        localizacion:"Oceania",
        nombreCircuito:"Circuito de Australia",
        competicion:"GP de Australia",
        premio:1750000,
        ganador:{nombre:"Nikita Mazepin", puntos:7},
        vueltas:69,
        curvaCerrada:true
    },
    {
        localizacion:"America",
        nombreCircuito:"Circuito de Austin",
        competicion:"GP EEUU",
        premio:2800000,
        ganador:{nombre:"Daniel Ricciardo", puntos:9},
        vueltas:79,
        curvaCerrada:true
    },
    {
        localizacion:"Europa",
        nombreCircuito:"Circuito de Imola",
        competicion:"GP Italia",
        premio:1400000,
        ganador:{nombre:"Carlos Sainz Jr.", puntos:8},
        vueltas:78,
        curvaCerrada:true
    },
    {
        localizacion:"Europa",
        nombreCircuito:"Circuito de Turquia",
        competicion:"GP de Turquia",
        premio:3000000,
        ganador:{nombre:"Kimi Räikkönen", puntos:6},
        vueltas:97,
        curvaCerrada:false
    }
])


db.tiempos.drop()
db.tiempos.insertMany( [
    { cocheid: "1", tiempoVuelta: new Date( "2022-01-18T14:10:30Z" ), distancia: 1125.1 },
    { cocheid: "1", tiempoVuelta: new Date( "2022-01-18T14:11:00Z" ), distancia: 1125.63 },
    { cocheid: "1", tiempoVuelta: new Date( "2022-01-18T14:11:30Z" ), distancia: 1126.25 },
    { cocheid: "1", tiempoVuelta: new Date( "2022-01-18T14:12:00Z" ), distancia: 1126.76 },
    { cocheid: "2", tiempoVuelta: new Date( "2022-01-18T14:10:30Z" ), distancia: 10132.1 },
    { cocheid: "2", tiempoVuelta: new Date( "2022-01-18T14:11:00Z" ), distancia: 10132.33 },
    { cocheid: "2", tiempoVuelta: new Date( "2022-01-18T14:11:30Z" ), distancia: 10132.73 },
    { cocheid: "2", tiempoVuelta: new Date( "2022-01-18T14:12:00Z" ), distancia: 10133.13 }
]
)

//La distancia entre ejes se mide en centímetros y el coste en €
//Todos los coches de formula 1 se impulsan con Gasolina

//Si curvaCerrada es true significa que en ese circuito tiene curva cerrada, si es false tiene curva abierta