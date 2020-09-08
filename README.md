[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/distance-calculator)

# Distance Calculator

## Usage example for your code

```

import { DistanceCalculator } from "https://x.nest.land/distance-calculator@1.0.0/mod.ts"

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
deno run --allow-net https://x.nest.land/distance-calculator@1.0.0/test-it.ts
```

## Available on Deno & Nest
https://deno.land/x/distancecalculator
https://nest.land/package/distance-calculator  


## Contributions are welcome
Feel free to create a pull request if you would like to improve things. Especially in the context of interplanetary distance calculations...  


## Support my Open Source Contributions

If you like my work please consider downloading the brave browser via my promotion link:  
[https://brave.com/fan464](https://brave.com/fan464).

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)

You might also consider sending some ETH to my wallet: **0x61bcBBdC0Ea8B824247956bb67C25949f435cCE7**  
I guess the money is well invested.