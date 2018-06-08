//https://www.meethue.com/api/nupnp

export const fetchHue = async () => {
  const response = await fetch('https://www.meethue.com/api/nupnp')
  const {results} = await response.json()
  return results
}

export const light = async (state = true, sat = 254, bri = 254, hue = 10000) => {
  const response = await fetch('http://10.1.10.154/api/z6jeAd-8LsGEBCtEkluBMgxCmUhh0DaZvM9mORKg/lights/1/state', {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({"on": state, "sat": sat, "bri": bri, "hue": hue}),
  })

  if (response.ok) {
    return true
  }

  const errMessage = await response.text()
  throw new Error(errMessage)
}
