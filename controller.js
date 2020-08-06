module.exports = {
    getAirplanes: (req, res) => {
        const db = req.app.get("db");
        db.get_planes().then(planes => res.status(200).send(planes))
        .catch(err => {
            res.sendStatus(404)
            console.log(err)})
    },
    getAirplaneById: (req, res) => {
        const db = req.app.get("db");
        db.get_plane_by_id([req.params.plane_id])
        .then(plane => {
            res.status(200).send(plane)
        }).catch(err => console.log(err))
    },
    addAirplane: (req, res) => {
        const db = req.app.get("db");
        const {planeType, passengerCount} = req.body
        db.add_plane([planeType, passengerCount])
        .then(planes => res.status(200).send(planes))
        .catch(err => console.log(err))
    }
}