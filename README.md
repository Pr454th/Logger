# Logger
A no fuss logging API
#### ✨ Effective even in the presence of content/ad blockers like uBlock Origin

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

> The above information are fetched using the IP Geolocation API and may not be always accurate

### How to use?
- Visit <a href="https://lite-logs.vercel.app/ids">lite-logs.vercel.app/ids</a> to see ids that are in use
- Pick a new id for yourself that is not listed in the above page
- Embed the link <i>https://lite-logs.vercel.app/log/YOUR_ID_HERE</i> in the webpage in which you want to enable logging
- You could embed the link as an invisible image or use any other method that works

**Note: May not work as expected if the site uses SSR**

E.g. `<img src="https://lite-logs.vercel.app/log/YOUR_ID_HERE" style="display:none">`

### Viewing the logs
- Visit https://lite-logs.vercel.app/logs/YOUR_ID_HERE to receive your page logs as JSON

<img src="https://https://lite-logs.vercel.app/log/loggerGithubReadme" alt="" />
