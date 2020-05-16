const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()

exports.fetchHospitals = functions.https.onRequest((req, res) => {
    admin.firestore().collection("hospitals").get().then(data => {
        let hospitals = []
        data.forEach(hospital => {
            hospital = hospital.data()
            let tempHospitalData = {
                id: hospital._id,
                name: hospital.name,
                covid: hospital.covid,
                noncovid: hospital.noncovid,
                websiteUrl: hospital.websiteUrl,
                government: hospital.government,
                covidtesting: hospital.covidtesting,
                numberOfCovidBeds: hospital.numberOfCovidBeds,
                numberOfCovidBedsOccupied: hospital.numberOfCovidBedsOccupied,
                numberOfICUBeds: hospital.numberOfICUBeds,
                numberOfICUBedsOccupied: hospital.numberOfICUBedsOccupied,
                numberOfNonCovidBeds: hospital.numberOfNonCovidBeds,
                numberOfNonCovidBedsOccupied: hospital.numberOfNonCovidBedsOccupied,
                phoneNo: hospital.phoneNo,
                locationCity: hospital.locationCity,
                location: hospital.location,
                underReview: hospital.underReview
            }
            hospitals.push(tempHospitalData)
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
    let hospitalData = {
        name: req.body.name,
        covid: req.body.covid,
        noncovid: req.body.noncovid,
        websiteUrl: req.body.websiteUrl,
        government: req.body.government,
        covidtesting: req.body.covidtesting,
        numberOfCovidBeds: req.body.numberOfCovidBeds,
        numberOfCovidBedsOccupied: req.body.numberOfCovidBedsOccupied,
        numberOfICUBeds: req.body.numberOfICUBeds,
        numberOfICUBedsOccupied: req.body.numberOfICUBedsOccupied,
        numberOfNonCovidBeds: req.body.numberOfNonCovidBeds,
        numberOfNonCovidBedsOccupied: req.body.numberOfNonCovidBedsOccupied,
        phoneNo: req.body.phoneNo,
        locationCity: req.body.locationCity,
        location: req.body.location,
        underReview: true
    }
    admin.firestore()
        .collection('hospitals')
        .add(hospitalData)
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
    const id = req.body.id;
    const hospitalData = {
        name: req.body.name,
        covid: req.body.covid,
        noncovid: req.body.noncovid,
        websiteUrl: req.body.websiteUrl,
        government: req.body.government,
        covidtesting: req.body.covidtesting,
        numberOfCovidBeds: req.body.numberOfCovidBeds,
        numberOfCovidBedsOccupied: req.body.numberOfCovidBedsOccupied,
        numberOfICUBeds: req.body.numberOfICUBeds,
        numberOfICUBedsOccupied: req.body.numberOfICUBedsOccupied,
        numberOfNonCovidBeds: req.body.numberOfNonCovidBeds,
        numberOfNonCovidBedsOccupied: req.body.numberOfNonCovidBedsOccupied,
        phoneNo: req.body.phoneNo,
        locationCity: req.body.locationCity,
        location: req.body.location,
        underReview: true
    }
    admin.firestore()
        .collection('hospitals')
        .doc(id)
        .set(hospitalData)
        .then(value => {
            return res.json(value)
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: "Internal Server Error" })
        })
}) 
