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

## Test it via command line
```
deno run --allow-net https://deno.land/x/distancecalculator/test-it.ts
```

## Contributions are welcome
Feel free to create a pull request if you would like to improve things. Especially in the context of interplanetary distance calculations...  


## Support my Open Source Contributions

If you like my work please consider downloading the brave browser via my
promotion link: [https://brave.com/fan464](https://brave.com/fan464).

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
