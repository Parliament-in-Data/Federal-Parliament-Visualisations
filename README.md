# Federal Parliament Visualisations
This repository hosts the code behind the <a href="https://parliamentdata.be">"Our Parliament in Data"</a> website. It uses the <a href="https://observablehq.com">Observable</a> runtime to import the notebooks in which the visualisations were implemented.

## Locally running this project
To locally run this project, you can use any simple HTTP server (like Python's `http.server`).

```sh
python -m http.server
```

## Underlying Observable Notebooks
<a href="https://observablehq.com">Observable</a> notebooks are used to build the content of all the pages in this repo dynamically. The runtime provides us with many conveniences for visualizing data using <a href="https://d3js.org">D3.js</a> and <a href="https://vega.github.io/vega-lite/">Vega-Lite</a>. Below you can find the link to the relevant notebooks for each page:

- <a href="https://parliamentdata.be">Homepage</a> (<a href="https://observablehq.com/@laurensdeb/hoe-is-het-gesteld-met-ons-federale-parlement?collection=@laurensdeb/belgisch-federaal-parlement">Observable Notebook</a>)
- <a href="https://parliamentdata.be/member">Member</a> (<a href="https://observablehq.com/@laurensdeb/untitled/3?collection=@laurensdeb/belgisch-federaal-parlement&session=55&member=3c75984bb3">Observable Notebook</a>)
- <a href="https://parliamentdata.be/party">Party</a> (<a href="https://observablehq.com/@laurensdeb/untitled/2?party=CD%26V&session=55">Observable Notebook</a>)
- <a href="https://parliamentdata.be/search">Search</a> (<a href="https://observablehq.com/@laurensdeb/ons-parlement-in-data?collection=@laurensdeb/belgisch-federaal-parlement">Observable Notebook</a>)


## Sponsors
The <a href="https://parliamentdata.be">Our Parliament in Data</a> website is hosted by Netlify and Cloudflare, without the free services provided by these valued partners we wouldn't be able to exist.

  <a href="https://www.netlify.com">
    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
  </a>
