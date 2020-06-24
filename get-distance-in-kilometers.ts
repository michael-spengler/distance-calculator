export function getDistanceInKilometers(latitude1: number, longitude1: number, latitude2: number, longitude2: number): number {
    return getDistance(latitude1, longitude1, latitude2, longitude2) * 1.609344
}

function getDistance(latitude1: number, longitude1: number, latitude2: number, longitude2: number) {
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

