# Regional Carbon Policy Dashboard

A web-based dashboard for exploring and analyzing regional data to support carbon pricing policy modeling. 
The dashboard features interactive charts, maps, and tables across multiple domains—allowing comparative regional analysis that can help inform and support climate policy decisions.

---

## 🧭 Features & Domains

This dashboard integrates data across a wide set of domains relevant to carbon pricing and regional socioeconomic conditions:

- Geopolitics / regional groupings  
- Environment & emissions  
- Demographics & population  
- Economy & trade  
- Energy & resource extraction  
- Sectoral activity (e.g. industrial, agricultural, services)  
- Consumption & production  
- Government & fiscal variables  
- Education, credit access, and financial infrastructure  
- Spatial / geographic mappings and comparisons  

Using interactive visualizations (maps, line charts, bar charts, etc.), users can explore how these variables evolve over time and vary by region.

---

## 📊 Usage & Deployment

### Local / Development Mode

1. Clone this repository:
   ```bash
   git clone https://github.com/Renato-Rodrigues/regional-carbon-policy-dashboard.git
   cd regional-carbon-policy-dashboard
   ```

2. Run the R script to generate the dashboard assets:

   ```bash
   Rscript createReport.R
   ```
3. The output HTML and assets are placed into the `output/` folder.
4. Serve the `output/` directory using a static web server (e.g. `python -m http.server`) or host via GitHub Pages.

### Live Demo

A live version of the dashboard is available at:
[renato-rodrigues.github.io/regional-carbon-policy-dashboard/output/](https://renato-rodrigues.github.io/regional-carbon-policy-dashboard/output/)

---

## 🛠️ Project Structure

```
├── data/               # R data files saved from the data preparation
├── mappings/           # Data mappings, lookup tables, region definitions
├── maps/               # Geographic shapefiles / GeoJSON files
├── output/             # Generated dashboard HTML + static assets
├── rmd/                # R Markdown files used in report generation
├── createReport.R      # Main script to compile dashboard elements
├── README.md           # This README
└── .gitignore
```

* **createReport.R**: the core R script that reads input data, runs transformations, and produces the dashboard pages.
* **rmd/**: contains modular R Markdown templates or sections used to generate parts of the dashboard.
* **mappings/**: supports region definitions, classification tables, and mapping between codes and labels.
* **maps/**: stores spatial data (e.g. shapefiles or GeoJSON) for rendering geographic visualizations.

---

## 📦 Dependencies

This project primarily relies on R packages such as:

* `dplyr`, `tidyr`, `zoo`, `purrr`, `tibble`, `rlang`, `RColorBrewer`, `stringr`, ``
* `highcharter`, `ggplot2`, `ggrepel`, `plotly`, `rmarkdown`, `knitr`, `htmlwidgets`, `kableExtra`, `webshot`, `jsonlite`
* `madrat`, `mrdrivers`, `mrPEM`, 

---

## 📄 License & Citation

This project is intended for educational and analytical use. If you use or adapt this dashboard, please cite it appropriately:

> Rodrigues, Renato. *Regional Carbon Policy Dashboard*. (2025). GitHub repository.
> URL: [https://github.com/Renato-Rodrigues/regional-carbon-policy-dashboard](https://github.com/Renato-Rodrigues/regional-carbon-policy-dashboard)

You may also include any additional citation format you prefer (e.g. in papers).

---

## 👤 Author

Renato Rodrigues
