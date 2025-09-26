
forceDataCreation <- FALSE 
forceGeoMapsCreation <- FALSE

outputFolder <- ("./output")
dir.create("./output/iframe", showWarnings = FALSE)
dir.create("./output/drivers", showWarnings = FALSE)
dir.create("./output/img/geoMaps", showWarnings = FALSE)
dir.create("./data", showWarnings = FALSE)

rdsFiles <- c("mapping", "drivers", "data", "table", "charts_region") #, "charts_subregion"

if((any(!file.exists(paste0("./data/", rdsFiles, ".rds")))) | (forceDataCreation)){
  print("Creating data...")
  source("./R/createData.R")
} else {
  print("Loading data from previously created run...")
  out <- list()
  out$mapping <- readRDS(file = "./data/mapping.rds")
  out$drivers <- readRDS(file = "./data/drivers.rds")
  out$data    <- readRDS(file = "./data/data.rds")
  out$table   <- readRDS(file = "./data/table.rds")
  out$charts  <- readRDS(file = "./data/charts_region.rds")
#  out$charts$subRegion  <- readRDS(file = "./data/charts_subregion.rds")
}

#when other than the first element of the top regith region buttons is selected, when I change in between line and bar in the top left buttons the updateActiveState function is being called twice instead of once.
.createIndexHTML <- function(driversList, output_dir, region = c("REMIND_12"), top_items = NULL){
  
  # helper: safe IDs (for anchors/divs)
  .safe_id <- function(x){
    x <- gsub(" ", "_", x)
    gsub("[^A-Za-z0-9_]", "_", x)
  }
  
  indexHTML <- '<!DOCTYPE html>\n<html>\n<head>\n<meta name="viewport" content="width=device-width, initial-scale=1">'
  indexHTML <- paste0('<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      /* 1. Design System: CSS Variables */
      :root {
        --font-sans: "Inter", sans-serif;
        --color-brand: #0075FF;
        --color-brand-light: #e6f1ff;
        --color-text-primary: #1a1a1a;
        --color-text-secondary: #6b7280;
        --color-text-inverted: #f8f9fa;
        
        --bg-sidebar: #1f2937;
        --bg-sidebar-active: #374151;
        --bg-main: #f9fafb;
        --bg-topbar: #ffffff;

        --border-color: #e5e7eb;
        --border-radius-sm: 4px;
        --border-radius-md: 6px;

        --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        
        --spacing-sm: 8px;
        --spacing-md: 16px;
        --spacing-lg: 24px;
        --spacing-xl: 32px;
      }
      
      /* 2. Global Resets & Typography */
      *, *::before, *::after {
        box-sizing: border-box;
      }
      html, body { 
        margin: 0; 
        padding: 0; 
        height: 100%;
        font-family: var(--font-sans);
        color: var(--color-text-primary);
        background-color: var(--bg-main);
      }
      body { 
        display: flex; 
        height: 100vh; 
        overflow: hidden;
      }

      /* 3. Component Styles: Sidebar */
      .sidenav {
        width: 250px;
        height: 100%;
        background-color: var(--bg-sidebar);
        overflow-y: auto;
        padding: var(--spacing-md) 0;
        flex-shrink: 0;
        border-right: 1px solid var(--border-color);
      }
      .sidenav a, .dropdown-btn {
        display: block;
        width: 100%;
        padding: 10px var(--spacing-lg);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        color: #d1d5db; /* Lighter gray for better contrast on dark bg */
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
        outline: none;
        transition: background-color 0.2s ease, color 0.2s ease;
        border-left: 3px solid transparent;
      }
      .sidenav a:hover, .dropdown-btn:hover {
        background-color: var(--bg-sidebar-active);
        color: var(--color-text-inverted);
      }
      .sidenav a.selected, .dropdown-btn.active {
        background-color: var(--bg-sidebar-active);
        color: var(--color-text-inverted);
        border-left-color: var(--color-brand);
      }
      .dropdown-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      /* Dropdown arrow indicator */
      .dropdown-btn::after {
        content: "›";
        font-size: 1.5rem;
        line-height: 1;
        transform: rotate(90deg);
        transition: transform 0.2s ease;
      }
      .dropdown-btn.active::after {
        transform: rotate(-90deg);
      }
      .dropdown-container {
        display: none;
        background-color: rgba(0,0,0,0.2);
      }
      .dropdown-container a {
        padding-left: var(--spacing-xl);
        font-size: 0.85rem;
        color: #9ca3af;
      }
      .dropdown-container.show {
        display: block;
      }
      hr.sidebar-sep {
        border: 0;
        border-top: 1px solid #374151;
        margin: var(--spacing-md) 0;
      }
      
      /* Main Content Area */
      .content { 
    		flex: 1; 
    		display: flex; 
    		flex-direction: column; 
    		min-height: 0;          /* allow flex children to shrink */
    		overflow: hidden;
    	 }
      .main-area { 
    		flex: 1 1 auto;         /* grow & shrink */
    		min-height: 0;          /* allow child tabs to shrink */
    		padding: var(--spacing-lg);
    		overflow: hidden;
      }
  	  .content, .main-area {
        position: relative;
      }
      .hide { display: none !important; }

      /* Top Bar */
      .top-bar {
        display: flex;
        padding: var(--spacing-sm) var(--spacing-lg);
        background-color: var(--bg-topbar);
        border-bottom: 1px solid var(--border-color);
        gap: var(--spacing-sm);
        flex-shrink: 0;
        box-shadow: var(--shadow-sm);
        align-items: center;
        padding: 0.5rem 1rem;
      }
      .top-bar-left {
        flex: 0 0 auto;  /* only as wide as needed */
      }
      .spacer {
        flex: 1;         /* fills all available space */
      }
      .top-bar-right {
        display: flex;
        align-items: center;
        gap: 1rem;     /* Increased gap */
      }
      .top-bar-view-controls {
        display: flex;
        gap: var(--spacing-sm);
      }
      .top-bar-btn {
        padding: var(--spacing-sm) 12px;
        border: 1px solid var(--border-color);
        background-color: var(--bg-topbar);
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        border-radius: var(--border-radius-md);
        transition: all 0.2s ease-in-out;
      }
      .top-bar-btn:hover {
        background-color: var(--bg-main);
        border-color: #d1d5db;
      }
      .top-bar-btn.active {
        background-color: var(--color-brand);
        color: white;
        border-color: var(--color-brand);
      }
      .top-bar-btn:disabled {
		    background-color: #e5e7eb !important;
		    color: #9ca3af !important;
		    border-color: #d1d5db !important;
		    cursor: not-allowed !important;
		    opacity: 0.7;
		  }
      #pik-logo {
        height: 24px; 
        width: auto;
      }
      .credit-text {
        font-size: 0.9rem;
        color: #6b7280;   
      }
      /* Tabs Container */
      .tabs {
        display: flex;
        background-color: #ffffff;
        border-radius: var(--border-radius-md);
        box-shadow: var(--shadow-sm);
        border: 1px solid var(--border-color);
        overflow: hidden;
        width: 100%;
        height: 100%; 
        flex-direction: column;
      }
      .tab-content {
    		display: none;
    		flex: 1 1 auto;
    		min-height: 0;       
    		overflow: auto;      
    		padding: var(--spacing-md);
    		box-sizing: border-box;
	    }
      .tab-content.active {
        display: flex;
	    	flex-direction: column;
      }

      /* Chart visibility control */
      .chart-view {
        display: none;
        flex: 1;
        width: 100%;
        box-sizing: border-box;
      }
      .chart-view.active {
        display: block;
      }
      .plotly-graph-div {
        flex: 1;
    		width: 100%;
    		height: 100%;
    		box-sizing: border-box;
      }

      /* Iframe styling */
      .top_info, .driver_content { 
        height: 100%; 
      }
      iframe { 
        border: none; 
        height: 100%; 
        width: 100%; 
      }
      #loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);  /* center relative to parent */
        z-index: 10;                       /* appear above charts */
        pointer-events: none;               /* dont block clicks */
      }
      #loader.hidden {
        display: none;
      }
      .lds-ring { color: #1c4c5b; margin-left: 250px; }
      .lds-ring, .lds-ring div { box-sizing: border-box; }
      .lds-ring { display: inline-block; position: relative; width: 80px; height: 80px; }
      .lds-ring div { box-sizing: border-box; display: block; position: absolute; width: 64px; height: 64px; margin: 8px; border: 8px solid currentColor; border-radius: 50%; animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite; border-color: currentColor transparent transparent transparent; }
      .lds-ring div:nth-child(1) { animation-delay: -0.45s; }
      .lds-ring div:nth-child(2) { animation-delay: -0.3s; }
      .lds-ring div:nth-child(3) { animation-delay: -0.15s; }
      @keyframes lds-ring { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
    </head>
    
    <body>
    <div id="sideBar" class="sidenav">')
  
  # ---------- TOP ITEMS ----------
  if (!is.null(top_items) && length(top_items) > 0){
    for(i in seq_along(top_items)){
      item <- top_items[[i]]
      label <- item$label
      file  <- item$file
      idTop <- .safe_id(paste0("TOP_", label))
      indexHTML <- paste0(
        indexHTML,
        '\n      <a href="#', idTop, '" class="sidenavLink topItem">', label, '</a>'
      )
    }
    indexHTML <- paste0(indexHTML, '\n      <hr class="sidebar-sep">')
  }
  
  # ---------- COLLAPSIBLE GROUPS ----------
  for(groupName in names(driversList)){
    validIndicators <- names(driversList[[groupName]])[
      vapply(driversList[[groupName]], function(x) is.null(x$exclude) || x$exclude != "charts", logical(1))
    ]
    if(length(validIndicators) == 0) next
    
    indexHTML <- paste0(indexHTML, '\n      <button class="dropdown-btn">', groupName, '</button>')
    indexHTML <- paste0(indexHTML, '\n      <div class="dropdown-container">')
    for(indicator in validIndicators){
      idSafe <- .safe_id(paste0(groupName, "_", indicator))
      indexHTML <- paste0(indexHTML,'\n        <a href="#', idSafe,'" class="sidenavLink">', indicator, '</a>')
    }
    indexHTML <- paste0(indexHTML, '\n      </div>')
  }
  
  # ---------- CONTENT AREA ----------
  indexHTML <- paste0(indexHTML,'
    </div>
    <div id="content" class="content">
      <div id="loader">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      <div class="top-bar">
        <div class="top-bar-left">')
  for(reg in region){
    idSafe <- .safe_id(reg)
    indexHTML <- paste0(indexHTML,'\n          <button class="top-bar-btn ', ifelse(reg == region[1], "active", ""), '" data-reg="', .safe_id(reg), '" disabled> ',reg, '</button>')
  }
  indexHTML <- paste0(indexHTML,'
        </div>
        <div class="spacer"></div>
        <div class="top-bar-right">
          <div class="top-bar-view-controls">
            <button class="top-bar-btn top-bar-view-btn active" data-view="bar" disabled>Bar</button>
            <button class="top-bar-btn top-bar-view-btn" data-view="line" disabled>Line</button>
            <button class="top-bar-btn top-bar-view-btn" data-view="map" disabled>Map</button>
          </div>
          <img id="pik-logo" src="img/PIK_logo.svg" alt="PIK logo">
          <span class="credit-text">made by Renato Rodrigues</span>
        </div>
      </div>
      <div class="main-area">')
  
  if (!is.null(top_items) && length(top_items) > 0){
    for(i in seq_along(top_items)){
      item <- top_items[[i]]
      label <- item$label
      file  <- item$file
      idTop <- .safe_id(paste0("TOP_", label))
      indexHTML <- paste0(
        indexHTML,
        '\n        <div id="', idTop,'" class="top_info"><iframe data-src="./iframe/', file, '.html" loading="lazy" src="./iframe/', file, '.html"></iframe></div>'
      )
    }
  }
  
  indexHTML <- paste0(indexHTML,'\n        <div class="driver_content">')
  
  for(groupName in names(driversList)){
    validIndicators <- names(driversList[[groupName]])[
      vapply(driversList[[groupName]], function(x) is.null(x$exclude) || x$exclude != "charts", logical(1))
    ]
    if(length(validIndicators) == 0) next
    
    for(indicator in validIndicators){
      indicatorTabidSafe <- .safe_id(paste0(groupName, "_", indicator))
      indexHTML <- paste0(indexHTML,'\n          <div id="', indicatorTabidSafe, '" class="tabs hide">')
      idMapSafe <- .safe_id(paste0(groupName, "_", indicator, "_map"))
      indexHTML <- paste0(indexHTML,'
            <div id="', paste0(idMapSafe, "_mainTab"), '" class="tab-content">
              <div id="', paste0(idMapSafe), '" class="chart-view plotly-graph-div"></div>
            </div>')      
      for(reg in region){
        idSafe <- .safe_id(paste0(reg, "_", groupName, "_", indicator))
        # Create containers for each view type
        indexHTML <- paste0(indexHTML,'
            <div id="', paste0(idSafe, "_mainTab"), '" class="tab-content">
              <div id="', paste0(idSafe, "_line"), '" class="chart-view plotly-graph-div"></div>
              <div id="', paste0(idSafe, "_bar"), '" class="chart-view plotly-graph-div"></div>
            </div>')
      }
      indexHTML <- paste0(indexHTML,'\n          </div>')  
    }
  }  
  indexHTML <- paste0(indexHTML,'\n        </div>\n      </div>')  
  
  # ---------- JS ----------
  indexHTML <- paste0(indexHTML,'\n    </div>')
  indexHTML <- paste0(indexHTML,'
    <script type="text/javascript">
      const loadedScripts = new Set();
      const loadedCharts = new Set();
      
      // Debounce timer variable
      let stateUpdateTimeout;

      // --- HELPERS ---
      function loadChartScript(scriptUrl, containerId) {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.defer = true;
        script.onload = () => loadedCharts.add(containerId);
        document.body.appendChild(script);
        loadedScripts.add(scriptUrl);
      }

      // resize plotly charts
      function resizePlotlyCharts(div) {
        if (typeof Plotly === "undefined") return;
        if(div===null) return;
        //console.log(div);
        const tabsContainer = div.closest(".tabs");
        if (!tabsContainer) return;
        const availableWidth = tabsContainer.clientWidth - 40;
        const availableHeight = tabsContainer.clientHeight - 50;
        //console.log(availableWidth);
        //console.log(availableHeight);
        if (div._fullLayout) {
          //console.log("cccc");
          Plotly.relayout(div, {
            autosize: false,
            width: availableWidth,
            height: availableHeight,
            margin: { l: 10, r: 10, t: 30, b: 20 },
          });
          Plotly.Plots.resize(div);
        }
      }

      // --- ACTIVE STATE MANAGEMENT ---
      function updateActiveState() {
        const sideLink = document.querySelector(".sidenavLink.selected");
        const indicator = sideLink.getAttribute("href").replace("#", "");
        const activeRegionBtn = document.querySelector(".top-bar-left .top-bar-btn.active");
        const region = activeRegionBtn.dataset.reg;
        const activeViewButton = document.querySelector(".top-bar-view-btn.active");
        const viewType = activeViewButton.dataset.view;
        // Remove active class from chart content area 
        document.querySelectorAll(".tab-content, .chart-view").forEach(content => content.classList.remove("active"));
        if (viewType === "map") {
		      parentId = `${indicator}_map_mainTab`;
          containerId = `${indicator}_map`;
          scriptUrl = `./drivers/${indicator}_map.js`;
        } else {
		      parentId = `${region}_${indicator}_mainTab`;
          containerId = `${region}_${indicator}_${viewType}`;
          scriptUrl = `./drivers/${region}_${indicator}_${viewType}.js`;
        }
		    console.log(parentId);
		    console.log(containerId);
		    console.log(scriptUrl);
        //const containerId = `${region}_${indicator}_${viewType}`;
        //const scriptUrl = `./drivers/${containerId}.js`;
        //Add active to the tab content
        const tabContent = document.getElementById(parentId);
        if (tabContent) tabContent.classList.add("active");
        // Add active to the chart to be displayed	
        const chartView = document.getElementById(containerId);
        if (chartView) chartView.classList.add("active");
        // lear any pending update to prevent the function from running multiple times
        clearTimeout(stateUpdateTimeout);
        // Let a new timer to run the update after a short delay
        stateUpdateTimeout = setTimeout(() => {
          //if chart is loaded resize plot to div
          if(loadedScripts.has(scriptUrl)){
            //console.log("resizing");
            //console.log(containerId);
            //console.log(tabContent.querySelector(containerId));
            if (tabContent) resizePlotlyCharts(tabContent.querySelector(containerId));
          } else { // else load chart if it is not loaded yet
            //console.log("loading script");
            //console.log(scriptUrl);
            loadChartScript(scriptUrl, containerId);
          }
        }, 50); // 50 ms delay
      }

      // --- EVENT BINDINGS (no changes here) ---
      // side bar click
      document.querySelectorAll(".sidenavLink").forEach((sideButton) => {
        sideButton.addEventListener("click", (e) => {
          e.preventDefault();
          if (sideButton.classList.contains("selected")) return;
          // Remove selected class from all side bar links 
          document.querySelectorAll(".sidenavLink, .chart-view").forEach((el) => el.classList.remove("selected"));
          // hide all tab contents and top info
          document.querySelectorAll(".top_info, .tabs").forEach((div) => div.classList.add("hide"));
          // Add selected to the side bar link clicked
          sideButton.classList.add("selected");
          const allTopBarBtns = document.querySelectorAll(".top-bar-btn");
          if (sideButton.classList.contains("topItem")) {
            allTopBarBtns.forEach(btn => btn.disabled = true); // Disable all top-bar-btn if selected sidenavLink has topItem class
          } else { 
            allTopBarBtns.forEach(btn => btn.disabled = false); // Enable all top-bar-btn if selected sidenavLink has topItem class
            updateActiveState(); // Call showContent and updateActiveState for non-topItem
          }
          // if viewType = map disable region buttons
          const viewType = document.querySelector(".top-bar-view-btn.active").dataset.view;
          const regionTopBarBtns = document.querySelectorAll(".top-bar-left .top-bar-btn");
          if (viewType === "map") {
            regionTopBarBtns.forEach(btn => btn.disabled = true);
          }
          document.querySelector(sideButton.getAttribute("href")).classList.remove("hide");
        });
      });

      // region top bar click
      document.querySelectorAll(".top-bar-left .top-bar-btn").forEach((topButton) => {
        topButton.addEventListener("click", (e) => {
          e.preventDefault();
          if (topButton.classList.contains("active")) return;
          // Remove active class from all region buttons 
          document.querySelectorAll(".top-bar-left .top-bar-btn.active, .chart-view")
            .forEach((btn) => btn.classList.remove("active"));
          // Add active class to the clicked button
          topButton.classList.add("active");
          updateActiveState();
        });
      });

      // view top bar click
      document.querySelectorAll(".top-bar-view-btn").forEach((viewButton) => {
        viewButton.addEventListener("click", (e) => {
          e.preventDefault();
          if (viewButton.classList.contains("active")) return;
          // Remove active class from all region buttons 
          document.querySelectorAll(".top-bar-view-btn.active, .chart-view")
            .forEach((btn) => btn.classList.remove("active"));
          // Add active class to the clicked button
          viewButton.classList.add("active");
          updateActiveState();
          // if viewType = map disable region buttons
          const viewType = viewButton.dataset.view;
          const regionTopBarBtns = document.querySelectorAll(".top-bar-left .top-bar-btn");
          if (viewType === "map") {
            regionTopBarBtns.forEach(btn => btn.disabled = true);
          } else {
            regionTopBarBtns.forEach(btn => btn.disabled = false);
          }
        });
      });

      // side bar dropdown button
      document.querySelectorAll(".dropdown-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
        });
      });
	  
	    // remove loader when page is loaded
      document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("loader").classList.add("hidden");
		  });
	  
	  </script>
    <script defer src="libs/plotly-latest.min.js"></script>
  </body>
</html>')
  
  # write html to file
  fileConn <- file(normalizePath(paste0(output_dir,"/index.html")))
  writeLines(indexHTML, fileConn)
  close(fileConn)
}


top_items <- list( 
  list(label = "Data", file = "Data"), 
  list(label = "World Maps", file = "World_maps"),
  list(label = "Carbon Price", file = "Carbon_Price") )

#.createIndexHTML(driversList = out[["drivers"]][["driversList"]][1:3], output_dir = outputFolder, region = c("REMIND_12", "REMIND_62"), top_items = top_items)

.createIndexHTML(driversList = out[["drivers"]][["driversList"]], output_dir = outputFolder, region = out[["mapping"]][["mappingsVector"]], top_items = top_items)

print(paste0("Creating data html report..."))
rmarkdown::render("./rmd/data.Rmd", output_file = paste0(".", outputFolder, "/iframe/Data.html"), 
                  params = list(
                    mappingsVector = out$mapping$mappingsVector,
                    table = out$table))

print(paste0("Creating maps html report..."))
rmarkdown::render("./rmd/Worldmaps.Rmd", output_file = paste0(".", outputFolder, "/iframe/World_maps.html"), 
                  params = list(
                    mappingsVector = out$mapping$mappingsVector, 
                    charts = out$charts))

print(paste0("Creating carbon price report..."))
rmarkdown::render("./rmd/carbonPrice.Rmd", output_file = paste0(".", outputFolder, "/iframe/Carbon_Price.html"), 
                  params = list(
                    charts = out$charts$carbonPrice))

