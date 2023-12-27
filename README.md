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


## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.   
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)
