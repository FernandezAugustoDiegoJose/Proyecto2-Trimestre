//Con esta consulta comprobaremos que  si con el campeonato ganado se puede amortizar el gasto de compra de los vehiculos
//Si esta negativo significa que no se amortiza, ordenados de más beneficio a menos
db.pilotosf1.aggregate(
    [
        {
            $lookup:{
                from: "competiciones",
                localField:"fichadePiloto.piloto",
                foreignField:"ganador.nombre",
                as:"competicionGanada"
            }
        },
        {
        $project:{
                coste:{$sum:["$coches.coste"]},
                premio:{$avg:["$competicionGanada.premio"]},
                modelo:"$coches.modelo"

        }
        },
    {
        $project:{
            _id:0,
            modelo:1,
            Amortizado:{$subtract:["$premio","$coste"]}
        }
    },
    {
        $sort:{Amortizado:-1}
    }
]
).pretty()

//En esta consulta veremos cual son los modelos mas potentes que hay dentro de cada escuderia, siendo clasificados
//con un 10 los que estan por encima de 1000 CV y con un 1 los que estan por debajo

db.pilotosf1.aggregate(
    [
       {
           $unwind:{path:"$coches"}
       },
       { $project: { 
           _id:0,
           "coches.modelo":1, 
           MediaCV: { $avg: "$coches.caracteristicasModelo.CV" }
            }
        },
         
       { $project:
            {
                "coches.modelo":1,
                ClasificaciondeCoches:
                {
                  $cond:{if:{$lt:["$MediaCV",999]},then:1,else:10}
                }
            }
        }
    ]
 ).pretty()


//En una vuelta quiero saber la diferencia de velocidad que hay entre los coches

db.tiempos.aggregate( [
    {
       $setWindowFields: {
          partitionBy: "$cocheid",
          sortBy: { tiempoVuelta: 1},
          output: {
             DiferenciadeVelocidad: {
                $derivative: {
                   input: "$distancia",
                   unit: "second"
                },
                window: {
                   range: [ -30, 0 ],
                   unit: "second"
                }
             }
          }
       }
    }
])


//En esta consulta no encontramos con el porcentaje que se llevaria cada piloto al terminar la carrera redondeado


db.pilotosf1.aggregate(
    [
        {
            $lookup:{
                from: "competiciones",
                localField:"fichadePiloto.piloto",
                foreignField:"ganador.nombre",
                as:"competicionGanada"
            }
        },
        {$addFields:
            {porcentajePiloto: 10.5}
        },
        {
            $project:{
                    premio:{$avg:["$competicionGanada.premio"]},
                    porcentajePiloto:1,
                    nombre: "$fichadePiloto.piloto",
    
            }
            },
     {
        $project:
        {
            nombre:1,
            dineroPiloto:{$divide:["$premio","$porcentajePiloto"]}
        }
     },
     {
        $project:
        {
            _id:0,
            nombre:1,
            Dineroquegana:{$round:["$dineroPiloto",1]}
        }
     }

]
).pretty()



//El numero de metros que ha recorrio cada piloto en la competicion

db.pilotosf1.aggregate(
    [
        {
            $lookup:{
                from: "competiciones",
                localField:"fichadePiloto.piloto",
                foreignField:"ganador.nombre",
                as:"competicionGanada"
            }
        },
        {$addFields:
            {distanciaStandar: 1500}
        },
        {
            $project:
            {
                nombre: "$fichadePiloto.piloto",
                distanciaStandar:1,
                vueltasTotales:{$avg:["$competicionGanada.vueltas"]}
            }
         },
        {
            $project:
            {
                _id:0,
                nombre:1,
                distanciaTotal:{$max:{$multiply:["$vueltasTotales","$distanciaStandar"]}}
            }
         }

]
).pretty()

//En esta consulta se utiliza el arrayElemAt para escoger el primer y el ultimo valor de una array.

db.pilotosf1.aggregate([
    {
        $match:{"fichadePiloto.piloto":"Lewis Hamilton"}
    },
    {
        $project:
         {
             _id:0,
            nombre:"$fichadePiloto.piloto",
            PrimerSponsor: { $arrayElemAt:["$fichadePiloto.sponsor",0]},
            UltimoSponsor: { $arrayElemAt:["$fichadePiloto.sponsor",-1]}
         }
      }
]).pretty()


//


db.tiempos.aggregate([
    {
        $group:{
            _id:"$cocheid",
            distancias:{$push: "$distancia"}
        }
    },
    {
        $out:{db:"prueba", coll:"tiempos"}
    }
])

