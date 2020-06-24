export class DistanceCalculator {

    public static getDistanceInKilometers(latitude1: number, longitude1: number, latitude2: number, longitude2: number): number {
        return DistanceCalculator.getDistance(latitude1, longitude1, latitude2, longitude2) * 1.609344
    }

    public static getDistanceInNauticMiles(latitude1: number, longitude1: number, latitude2: number, longitude2: number): number {
        return DistanceCalculator.getDistance(latitude1, longitude1, latitude2, longitude2) * 0.8684
    }

    public static getDistanceInLightYears(latitude1: number, longitude1: number, latitude2: number, longitude2: number): number {
        return DistanceCalculator.getDistance(latitude1, longitude1, latitude2, longitude2) * 1.609344 * 0.00000000000010570
    }

    public static showDemo() {
        const distanceInKilometers = DistanceCalculator.getDistanceInKilometers(heidelbergGeo.latitude, heidelbergGeo.longitude, mannheimGeo.latitude, mannheimGeo.longitude)
        const distanceInNauticMiles = DistanceCalculator.getDistanceInNauticMiles(heidelbergGeo.latitude, heidelbergGeo.longitude, mannheimGeo.latitude, mannheimGeo.longitude)
        const distanceInLightYears = DistanceCalculator.getDistanceInLightYears(heidelbergGeo.latitude, heidelbergGeo.longitude, mannheimGeo.latitude, mannheimGeo.longitude)

        console.log(`The distance between Mannheim and Heidelberg is: \n${distanceInKilometers} kilometers \n${distanceInNauticMiles} nautic miles \n${distanceInLightYears} light years`)
    }

    private static getDistance(latitude1: number, longitude1: number, latitude2: number, longitude2: number) {
        if ((latitude1 === latitude2) && (longitude1 === longitude2)) {
            return 0
        }
        const radlatitude1 = Math.PI * latitude1 / 180
        const radlatitude2 = Math.PI * latitude2 / 180
        const theta = longitude1 - longitude2
        const radtheta = Math.PI * theta / 180
        let distance = Math.sin(radlatitude1) * Math.sin(radlatitude2) + Math.cos(radlatitude1) * Math.cos(radlatitude2) * Math.cos(radtheta)
        if (distance > 1) {
            distance = 1
        }
        distance = Math.acos(distance)
        distance = distance * 180 / Math.PI
        distance = distance * 60 * 1.1515

        return distance

    }

}

const mannheimGeo = {
    latitude: 49.4891,
    longitude: 8.46694
}

const heidelbergGeo = {
    latitude: 49.40768,
    longitude: 8.69079
}
