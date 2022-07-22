
const express = require('express')
const router = express.Router() 
const tonos = require('../public/javascripts/Tonos')
const sellos = require('../public/javascripts/Sellos')

const fs = require('fs')

const indexController = {

    index: function(req,res){
        
        res.render('index', {sellos, tonos})
    },

    resultado: function(req,res){
       
        // DECLARO LAS VARIABLES QUE VOY A UTILIZAR
        let tonoNumA 
        let tonoNumB
        let selloNumA
        let selloNumB
        let selloA = req.body.selloA
        let selloB = req.body.selloB
        let tonoA = req.body.tonoA
        let tonoB = req.body.tonoB

        // == KIN A ==
        // SELLO A
        let arraySelloResA = sellos.find(sello => sello.nombre == selloA)
        selloNumA = arraySelloResA.numero

        // TONO A
        let arrayTonosResA = tonos.find(tono => tono.nombre == tonoA)
        tonoNumA = arrayTonosResA.numero

        // == KIN B ==
        // SELLO B
        let arraySelloResB = sellos.find(sello => sello.nombre == selloB)
        selloNumB = arraySelloResB.numero

        // TONO B
        let arrayTonoResB = tonos.find(tono => tono.nombre == tonoB)
        tonoNumB = arrayTonoResB.numero

        
        // console.log(tonoNumA);
        // console.log(selloNumA);

        let resA = {
            tonoA : tonoA,
            tonoNumA: tonoNumA, 
            selloA : selloA,
            selloNumA: selloNumA
        }

        let resB = {
            tonoB : tonoB,
            tonoNumB: tonoNumB,
            selloB : selloB,
            selloNumB: selloNumB
        }

        // == KIN C / KIN PAREJA ==

        let tonoNumC = tonoNumA + tonoNumB

        if(tonoNumC > 13 ){

            tonoNumC = tonoNumC - 13
        }

        let selloNumC = selloNumA + selloNumB

        if(selloNumC > 20){

            selloNumC = selloNumC - 20
        }

        // FIND TONO C
        let tonoC
        let selloC

        console.log('tonoC:: ', tonoNumC);
        console.log('selloC:: ', selloNumC );

        let arrayTonosResC = tonos.find(tono => tono.numero == tonoNumC)
        tonoC = arrayTonosResC.nombre
        // console.log("🚀 ~ file: indexController.js ~ line 89 ~ arrayTonosResC", arrayTonosResC)

        // FIND SELLO C
        let arraySellosResC = sellos.find(sello => sello.numero == selloNumC)
        // console.log("🚀 ~ file: indexController.js ~ line 93 ~ arraySellosResC", arraySellosResC)
        selloC = arraySellosResC.nombre


        let resC = {
            tonoC : tonoC,
            tonoNumC: tonoNumC,
            selloC : selloC,
            selloNumC: selloNumC
        }

        // console.log('A: ', resA);
        

        res.render('resultado', {resA, resB, resC})
    }

}

module.exports = indexController



// Calcular el Kin maya para A, siguiendo las indicaciones en el artículo kin maya. *
// Calcular el Kin maya para B, siguiendo las indicaciones en el artículo kin maya. *

// Calcula el tono de P sumando el tono de A y el tono de B. si el resultado es mayor que trece, restarle trece. Este resultado es el tono de P o kin de la pareja.
// Para construir el nombre de P, busca en la tabla de sellos solares el nombre y color del sello asociado al número del sello de P.
// Luego busca, en la tabla de tonos galácticos, el nombre del tono asociado al número del tono de P.
// Construye el nombre del kin P como: nombre del sello + nombre del tono + color del sello.