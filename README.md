# Logger
A no fuss logging API :P

### What gets logged?
If successful, the following are logged
- IP
- User agent
- Country
- Country code
- Region
- Region Name
- City
- Zip / Pin code
- Latitude
- Longitude
- Timezone
- ISP
- Organization
The above information are fetched using the IP Geolocation API and may not be always accurate

### How to use?
- Visit <a href="https://log.cyclic.app/ids">log.cyclic.app/ids</a> to see ids that are in use
- Pick a new id for yourself that is not listed in the above page
- Embed the link (https://log.cyclic.app/log/YOUR_ID_HERE) in the webpage in which you want to enable logging
- You could embed the link as an invisible image or use any other method that works

E.g. `<img src="https://log.cyclic.app/log/YOUR_ID_HERE" style="display:none">`

### Viewing the logs
- Visit https://log.cyclic.app/logs/YOUR_ID_HERE to receive your page logs as JSON

<!-- <img src="https://log.cyclic.app/log/test" alt="" /> -->
