const functions = require('firebase-functions');
const admin = require('firebase-admin')
const Hospital = require('./Hospital')
admin.initializeApp()

exports.fetchHospitals = functions.https.onRequest((req, res) => {
    res.set("Access-Control-Allow-Origin", "*"); // you can also whitelist a specific domain like "http://127.0.0.1:4000"
    res.set("Access-Control-Allow-Headers", "Content-Type");

    admin.firestore().collection("hospitals").get().then(data => {
        let hospitals = []
        data.forEach(hospital => {
            const id = hospital.id
            hospital = hospital.data()
            const hospitalObject = new Hospital(id,hospital)
            let temp = hospitalObject.getHospitalData()
            temp.id = id
            hospitals.push(temp)
        })
        return res.json(hospitals)
    }).catch(err => {
        console.error(err)
        return res.status(500)
            .json({ error: "Internal Server Error" })
    })
})


exports.createHospital = functions.https.onRequest((req, res) => {
    if (req.method !== 'POST') {
        return res.status(400)
            .json({ error: "Method not allowed" })
    }

    res.set("Access-Control-Allow-Origin", "*"); // you can also whitelist a specific domain like "http://127.0.0.1:4000"
    res.set("Access-Control-Allow-Headers", "Content-Type");


    const hospitalData = new Hospital(null, req.body.data)
    admin.firestore()
        .collection('hospitals')
        .add(hospitalData.getHospitalData())
        .then(hospital => {
            res.json(hospital.id)
        }).catch(err => {
            console.error(err)
            return res.status(500).json({ error: "Internal Server Error" })
        })
})

exports.updateHospital = functions.https.onRequest((req, res) => {
    if (req.method !== 'POST') {
        return res.status(400).json({ error: "Method not allowed" })
    }
    
    res.set("Access-Control-Allow-Origin", "*"); // you can also whitelist a specific domain like "http://127.0.0.1:4000"
    res.set("Access-Control-Allow-Headers", "Content-Type");

    const id = req.body.id;
    const hospitalData = new Hospital(id, req.body.data)
    admin.firestore()
        .collection('hospitals')
        .doc(id)
        .update(hospitalData.getHospitalData())
        .then(value => {
            return res.json(value)
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: "Internal Server Error" })
        })
}) 
