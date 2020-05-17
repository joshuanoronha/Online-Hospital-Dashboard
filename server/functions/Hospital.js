class Hospital {
    constructor(id, data) {
        this.hospitalData = {}

        this.id = id
        this.hospitalData.name = data.name
        this.hospitalData.covid = data.covid
        this.hospitalData.noncovid = data.noncovid
        this.hospitalData.websiteUrl = data.websiteUrl
        this.hospitalData.government = data.government
        this.hospitalData.covidtesting = data.covidtesting
        this.hospitalData.numberOfCovidBeds = data.numberOfCovidBeds
        this.hospitalData.numberOfCovidBedsOccupied = data.numberOfCovidBedsOccupied
        this.hospitalData.numberOfICUBeds = data.numberOfICUBeds
        this.hospitalData.numberOfICUBedsOccupied = data.numberOfICUBedsOccupied
        this.hospitalData.numberOfNonCovidBeds = data.numberOfNonCovidBeds
        this.hospitalData.numberOfNonCovidBedsOccupied = data.numberOfNonCovidBedsOccupied
        this.hospitalData.phoneNo = data.phoneNo
        this.hospitalData.locationCity = data.locationCity
        this.hospitalData.location = data.location
        this.hospitalData.underReview = data.underReview || false
    }
    getHospitalData(){
        let tempData = {}
        for (let i in this.hospitalData){
            if (this.hospitalData[i]!==undefined){
                tempData[i] = this.hospitalData[i]
            }
        }
        return tempData;
    }
}
module.exports = Hospital