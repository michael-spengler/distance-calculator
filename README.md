# Distance Calculator

## Usage example for your code

```

import { DistanceCalculator } from "https://deno.land/x/distancecalculator/distance-calculator.ts"

const mannheimGeo = {
    latitude: 49.4891,
    longitude: 8.46694
}

const heidelbergGeo = {
    latitude: 49.40768,
    longitude: 8.69079
}

const distanceInKilometers = 
 DistanceCalculator.getDistanceInKilometers(heidelbergGeo.latitude, heidelbergGeo.longitude, mannheimGeo.latitude, mannheimGeo.longitude)

const distanceInNauticMiles = 
  DistanceCalculator.getDistanceInNauticMiles(heidelbergGeo.latitude, heidelbergGeo.longitude, mannheimGeo.latitude, mannheimGeo.longitude)

const distanceInLightYears = 
  DistanceCalculator.getDistanceInLightYears(heidelbergGeo.latitude, heidelbergGeo.longitude, mannheimGeo.latitude, mannheimGeo.longitude)  


console.log(`The distance between Mannheim and Heidelberg is: \n${distanceInKilometers} kilometers \n${distanceInNauticMiles} nautic miles \n${distanceInLightYears} light years`)


```

## Command Line Example
```
deno run --allow-net https://deno.land/x/distancecalculator/test-it.ts
```
