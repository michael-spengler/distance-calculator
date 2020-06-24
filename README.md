# Distance Calculator
## Usage from command line 
deno run DistanceCalculator.getDistanceInKilometers(49.40768, 8.69079, 49.4891, 8.46694)


## Example Usage 
import { DistanceCalculator } from "distance-calculator"


const mannheimGeo = {
    lat: 49.4891,
    lon: 8.46694
}

const heidelbergGeo = {
    lat: 49.40768,
    lon: 8.69079
}


const distanceInKilometers = DistanceCalculator.getDistanceInKilometers(heidelbergGeo.lat, heidelbergGeo.lon, mannheimGeo.lat, mannheimGeo.lon)
const distanceInNauticMiles = DistanceCalculator.getDistanceInNauticMiles(heidelbergGeo.lat, heidelbergGeo.lon, mannheimGeo.lat, mannheimGeo.lon)
const distanceInLightYears = DistanceCalculator.getDistanceInLightYears(heidelbergGeo.lat, heidelbergGeo.lon, mannheimGeo.lat, mannheimGeo.lon)

console.log(`the distance between Mannheim and Heidelberg is: \n${distanceInKilometers} kilometers \n${distanceInNauticMiles} nautic miles \n${distanceInLightYears} light years`)