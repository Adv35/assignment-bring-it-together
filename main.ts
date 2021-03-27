let counter = 0
let trips = 0
for (let index = 0; index < 10; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
    trips += 1
    serial.writeValue("trips", trips)
    if (trips == 0 || (trips == 3 || (trips == 6 || trips == 9))) {
        counter = 45
        for (let index = 0; index < 17; index++) {
            counter += -2
            serial.writeValue("count", counter)
        }
    }
}
basic.forever(function () {
	
})
