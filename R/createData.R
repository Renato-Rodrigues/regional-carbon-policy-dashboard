
### Loading required packages
print("Loading required packages...")
packagesList <- c("dplyr","tidyr","zoo","RColorBrewer","purrr", "tibble", "rlang","highcharter", "madrat", "mrdrivers", "ggplot2", "plotly", "stringr", "mrPEM", "kableExtra", "ggrepel", "rlang")
packages <- suppressWarnings(suppressMessages(lapply(packagesList, function(x){ if(!require(x, character.only = T, quietly = T)){ install.packages(x); return(paste0("installed missing package: ", x)) } else paste0("required package is installed: ", x) } )))

#install.packages("webshot")
#webshot::install_phantomjs()
library(htmlwidgets)
library(webshot)
library(jsonlite)

### 
print("Defining data to create and aesthetics...")

out <- list()

out[["drivers"]][["driversList"]] <- list(
  "Environment" = list(
    "Carbon Price - bulk sectors"    = list("var" = "bulk_carbonPrice",                             "type" = "#",                   "exclude" = ""), 
    "Carbon Price - diffuse sectors" = list("var" = "diffuse_carbonPrice",                          "type" = "#",                   "exclude" = ""),
    "GHG emissions"                  = list("var" = "Greenhouse gas emissions",                     "type" = "rank",                "exclude" = ""),
    "CO2 emissions"                  = list("var" = "Carbon dioxide emissions",                     "type" = "rank",                "exclude" = ""),
    "CO2 emi per capita"             = list("var" = "Carbon dioxide emissions per capita",          "type" = "rank",                "exclude" = "")
    ),
  "Demographics" = list(
    "Population"                     = list("var" = "pop",                                          "type" = "rank",                "exclude" = ""),
    "Population growth"              = list("var" = "Population growth",                            "type" = "%",                   "exclude" = ""),
    "Population ages - 0 to 14"      = list("var" = "Population ages 0 14",                         "type" = "%",                   "exclude" = ""),
    "Population ages - 65 and above" = list("var" = "Population ages 65 and above",                 "type" = "%",                   "exclude" = ""),
    "Rural population"               = list("var" = "Rural population",                             "type" = "%",                   "exclude" = "")
  ),
  "Economy" = list(
    "GDP"                            = list("var" = "gdp",                                          "type" = "rank",                "exclude" = ""),
    "GDP per capita"                 = list("var" = "gdpPerCapita",                                 "type" = "rank",                "exclude" = ""),
    "Gini index"                     = list("var" = "Gini income inequality index",                 "type" = "rank",                "exclude" = ""),
    "Low Gini index"                 = list("var" = "Gini income inequality index",                 "type" = "reverseRank",         "exclude" = "charts")
  ),
  "Extraction" = list(
    "Oil production"                 = list("var" = "Oil production",                               "type" = "rank",                "exclude" = ""),
    "Coal production"                = list("var" = "Coal production",                              "type" = "rank",                "exclude" = ""),
    "Cobalt production"              = list("var" = "Cobalt production",                            "type" = "rank",                "exclude" = ""),
    "Lithium production"             = list("var" = "Lithium production",                           "type" = "rank",                "exclude" = "")
  ),
  "Consumption" = list(
    "Oil consumption"                = list("var" = "Oil consumption",                              "type" = "rank",                "exclude" = ""),
    "Coal consumption"               = list("var" = "Coal consumption",                             "type" = "rank",                "exclude" = "")
  ),
  "Resources" = list(
    "Land area"                      = list("var" = "Land area",                                    "type" = "rank",                "exclude" = ""),
    "Oil reserves"                   = list("var" = "Oil reserves",                                 "type" = "rank",                "exclude" = ""),
    "Coal reserves"                  = list("var" = "Coal reserves",                                "type" = "rank",                "exclude" = "")
  ),
  "Trade" = list(
    "Trade freedom index"            = list("var" = "Trade freedom",                                "type" = "rank",                "exclude" = ""),
    "Trade openness - exports plus imports" = list("var" = "Trade openness  exports plus imports",  "type" = "%",                   "exclude" = ""),
    "Exports"                        = list("var" = "Exports",                                      "type" = "rank",                "exclude" = ""),
    "Exports - coal"                = list("var" = "Coal exports",                                  "type" = "rank",                "exclude" = ""),
    "Exports - goods and services"  = list("var" = "Exports of goods and services",                 "type" = "%",                   "exclude" = ""),
    "Exports - high technology"     = list("var" = "High technology exports",                       "type" = "rank",                "exclude" = ""),
    "Imports"                       = list("var" = "Imports",                                       "type" = "rank",                "exclude" = ""),
    "Imports - energy"              = list("var" = "Energy imports",                                "type" = "%",                   "exclude" = ""),
    "Imports - coal"                = list("var" = "Coal imports",                                  "type" = "rank",                "exclude" = "")
  ),
  "Energy" = list(
    "Energy use per capita"          = list("var" = "Energy use",                                   "type" = "rank",                "exclude" = ""),
    "Alternative - and nuclear energy" = list("var" = "Alternative and nuclear energy",             "type" = "%",                   "exclude" = ""),
    "Access to electricity"          = list("var" = "Access to electricity",                        "type" = "%",                   "exclude" = "table")
  ),
  "Sectors" = list(
    "Value added - agriculture"      = list("var" = "Value added in the agricultural sector",       "type" = "%",                   "exclude" = ""),
    "Value added - industry"         = list("var" = "Value added by industry",                      "type" = "%",                   "exclude" = ""),
    "Value added - services"         = list("var" = "Value added in the services sector",           "type" = "%",                   "exclude" = "")
  ),
  "Government" = list(
    "Government spending - percent of GDP" = list("var" = "Government spending percent",            "type" = "%",                   "exclude" = ""),
    "Tax revenue"                    = list("var" = "Tax revenue",                                  "type" = "%",                   "exclude" = ""),
    "Taxes on international trade"   = list("var" = "Taxes on international trade",                 "type" = "%",                   "exclude" = "table"),
    "Number of taxes - paid by businesses" = list("var" = "Number of taxes paid by businesses",     "type" = "#",                   "exclude" = "table")
  ),
  "Education" = list(
    "Public spending - on education"   = list("var" = "Public spending on education",               "type" = "%",                   "exclude" = ""),
    "Literacy rate index"            = list("var" = "Literacy rate",                                "type" = "%",                   "exclude" = "table"),
    "Tertiary school - enrollment"     = list("var" = "Tertiary school enrollment",                 "type" = "rank",                "exclude" = "")
  ),
  "Credit" = list(
    "Domestic credit - to the private sector" = list("var" = "Domestic credit to the private sector", "type" = "%",                "exclude" = ""),
    "Bank credit interest rates - to the private sector " = list("var" = "Interest rates on bank credit to the private sector", "type" = "%", "exclude" = ""),
    "Bank credit - to the private sector" = list("var" = "Bank credit to the private sector",       "type" = "%",                   "exclude" = ""),
    "Foreign Direct Investment"      = list("var" = "Foreign Direct Investment",                    "type" = "%",                   "exclude" = ""),
    "Credit information - sharing index" = list("var" = "Credit information sharing",               "type" = "rank",                "exclude" = ""),
    "Business freedom index"         = list("var" = "Business freedom",                             "type" = "rank",                "exclude" = "")
  ),
  "Geopolitical Groups" = list(
    "European Union"                 = list("var" = "EU",                                           "type" = "membership",          "exclude" = "charts"),      
    "OECD"                           = list("var" = "OECD",                                         "type" = "membership",          "exclude" = "charts"),                          
    "G7"                             = list("var" = "G7",                                           "type" = "membership",          "exclude" = "charts"),                           
    "G20"                            = list("var" = "G20",                                          "type" = "membership",          "exclude" = "charts"),                           
    "BRICS"                          = list("var" = "BRICS",                                        "type" = "membership",          "exclude" = "charts"),                         
    "African Union"                  = list("var" = "African Union",                                "type" = "membership",          "exclude" = "charts"),                 
    "OPEC+"                          = list("var" = "OPEC+",                                        "type" = "membership",          "exclude" = "charts"),                      
#    "NATO"                          = list("var" = "NATO",                                         "type" = "membership",          "exclude" = "charts"),                        
    "ASEAN"                          = list("var" = "ASEAN",                                        "type" = "membership",          "exclude" = "charts"),                       
    "Mercosur"                       = list("var" = "Mercosur",                                     "type" = "membership",          "exclude" = "charts"),                     
#    "Andean Community"              = list("var" = "Andean Community",                             "type" = "membership",          "exclude" = "charts"),             
    "RCEP"                           = list("var" = "RCEP",                                         "type" = "membership",          "exclude" = "charts"),                        
    "USMCA"                          = list("var" = "USMCA",                                        "type" = "membership",          "exclude" = "charts"),                      
    "AfCFTA"                         = list("var" = "AfCFTA",                                       "type" = "membership",          "exclude" = "charts"),                      
    "Belt and Road Initiative"       = list("var" = "Belt and Road Initiative",                     "type" = "membership",          "exclude" = "charts"),     
    "SCO"                            = list("var" = "SCO",                                          "type" = "membership",          "exclude" = "charts")
#    "United Nations"                = list("var" = "UN",                                           "type" = "membership",          "exclude" = "charts"),
#    "World Trade Organization"      = list("var" = "WTO",                                          "type" = "membership",          "exclude" = "charts"),
#    "Arab League"                   = list("var" = "Arab League",                                  "type" = "membership",          "exclude" = "charts"),
#    "Organization of American States" = list("var" = "OAS",                                        "type" = "membership",          "exclude" = "charts")
  )
)

# Transform the list into a dataframe
out[["drivers"]][["drivers_df"]] <- purrr::map_dfr(names(out[["drivers"]][["driversList"]]), function(category_name) {
  # Convert the inner list to a tibble
  inner_df <- tibble::enframe(out[["drivers"]][["driversList"]][[category_name]])

  # Unnest the list-column 'value' into new columns
  # and add the category name
  inner_df %>%
    tidyr::unnest_wider(value) %>%
    dplyr::mutate(Category = category_name, .before = 1) %>%
    dplyr::rename(DisplayName = name, Variable = var) %>%
    dplyr::mutate(finalVariableName = ifelse(type %in% c("rank","reverseRank"), paste0(Variable, " ", type), Variable))
})

regions_pallete <- list(
  EUR = c("#FD8D3C", "#FEB24C", "#fec44f", "#FED976", "#FFEDA0", "#D94801", "#F16913"), 
  NEU = c("#41AB5D", "#238B45", "#006D2C", "#00441B", "#A1D99B", "#74C476"), # brewer.pal(9, "Greens")
  REF = c("#808080", "#696969", "#778899", "#A9A9A9"), # brewer.pal(9, "Greys")
  JPN = c("#980043"),
  CHA = c("#fec44f"),
  IND = c("#dc0005"),
  OAS = c("#8C6BB1", "#88419D", "#810F7C", "#4D004B", "#8C96C6"), # brewer.pal(9, "BuPu")
  MEA = c("#6BAED6", "#4292C6", "#2171B5", "#08519C", "#08306B", "#9ECAE1"), # brewer.pal(9, "Blues")
  SSA = c("#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"), # brewer.pal(9, "RdPu")
  LAM = c("#41AB5D", "#238B45", "#006D2C", "#00441B", "#A1D99B", "#74C476"), # brewer.pal(9, "Greens")
  USA = c("#dc0005"),
  CAZ = c("#08519C", "#2171B5", "#6BAED6"), #brewer.pal(9, "Oranges")
  SAU = c("#FD8D3C"),
  MEA_other = c("#fec44f", "#FED976", "#FFEDA0"),
  IRN = c("#D94801")
)

table_rank_color <- function(x, type = "rank") {
  if(type %in% c("rank","reverseRank")){
    case_when(
      x == 1 ~ "#00441B",
      x == 2 ~ "#00682A",
      x == 3 ~ "#1B843F",
      x == 4 ~ "#37A055",
      x == 5 ~ "#5DB86A",
      x == 6 ~ "#88CD86",
      x == 7 ~ "#ADDEA7",
      x == 8 ~ "#CDEBC7",
      x == 9 ~ "#E7F5E2",
      x == 10 ~ "#F7FCF5",
      TRUE ~ "transparent" # handles all other values
    )
  } else if (type %in% c("membership")){
    case_when(
      x == 1 ~ "#00441B", # member
      x == 2 ~ "#37A055", # partner
      x == 3 ~ "#88CD86", # candidate
      x == 4 ~ "#FD8D3C", # suspended
      x == 5 ~ "#dc0005", # ex-member
      TRUE ~ "transparent" # handles all other values
    )
  } else {
    TRUE ~ "transparent"
  }
}

text_table_rank_color <- function(x, type = "rank") {
  if(type %in% c("rank","reverseRank")){
    case_when(
      x %in% 1:5 ~ "white",
      TRUE ~ "black"
    )
  } else if (type %in% c("membership")){
    case_when(
      x == 1 ~ "#00441B", # member
      x == 2 ~ "#37A055", # partner
      x == 3 ~ "#88CD86", # candidate
      x == 4 ~ "#FD8D3C", # suspended
      x == 5 ~ "#dc0005", # ex-member
      TRUE ~ "black"
    )
  } else {
    TRUE ~ "black"
  }
}

################# Load mappings ######################

print("Loading mappings...")

region_sort <- c("DEU", "FRA", "ITA", "GRC", "ESP", "PRT", "AUT", "NLD", "BELUX", "POL", "ECE_other", "SWE", "DNK", "FIN", "ECS", "IRL", "GBR", "NOR", "CHE", "ISL", "UKR", "ALB", "NES_other", "TUR", "RUS", "KAZ", "REF_other", "JPN", "CHA", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "SEA_other2", "KOR", "BGD", "PAK", "OAS_other", "IRN", "MEA_other", "SAU", "EGY", "NAF_other", "ZAF", "NGA", "COD", "ETH", "AFC_other", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "LAM_other", "USA", "CAN", "AUS", "NZL")

# loading region mapping
regionMappingFile <- "./mappings/regionmapping_62.csv"
regionMapping <- read.csv2(regionMappingFile) 
out[["mapping"]][["mappingsVector"]] <- sort(grep("^REMIND_", names(regionMapping), value = TRUE))

out[["mapping"]][["regionMapping"]] <- regionMapping %>%
  select(countryName = X, CountryCode, all_of(out[["mapping"]][["mappingsVector"]])) %>%
  arrange(match(REMIND_62, region_sort))

out[["mapping"]][["regionsTable"]] <- regionMapping %>%
  select(all_of(out[["mapping"]][["mappingsVector"]])) %>%
  distinct() %>%
  arrange(match(REMIND_62, region_sort))

saveRDS(out[["mapping"]], file = "./data/mapping.rds")


################# Load data ######################

print("Loading data from mrPEM...")

# Load data in country level
setConfig(forcecache = TRUE) # c("GDPPast","PopulationPast"),.verbose = F)

gdp <- calcOutput("GDPPast", aggregate = FALSE) %>%
  as.data.frame() %>%
  select(CountryCode = Region, period = Year, gdp = Value) %>%
  mutate(gdp = gdp/1000000) #converting to trillions

pop <- calcOutput("PopulationPast", aggregate = FALSE) %>%
  as.data.frame() %>%
  select(CountryCode = Region, period = Year, pop = Value)

# remindHist
out[["data"]][["country"]][["Raw"]][["remindHist"]] <- out[["mapping"]][["regionMapping"]] %>%
  left_join(gdp, by = "CountryCode") %>%
  left_join(pop, by = c("CountryCode", "period")) %>%
  mutate(gdpPerCapita = gdp/pop * 1000) %>%
  arrange(desc(pop)) %>%
  arrange(match(REMIND_62, region_sort)) %>%
  mutate(period = as.integer(as.character(period))) %>% # Convert period to numeric
  arrange(match(REMIND_62, region_sort), period)

# carbonPrice
out[["data"]][["country"]][["Raw"]][["carbonPrice"]] <- out[["mapping"]][["regionMapping"]] %>%
  left_join(
    calcOutput("CarbonPrice", subtype = "effectivePrice", aggregate = FALSE) %>%
      as.data.frame() %>%
      select(region = Region, period = Year, sector = Data1, value = Value),
    by = c("CountryCode" = "region")) %>%
  mutate(period = as.integer(as.character(period))) %>% # Convert period to numeric
  arrange(sector, match(REMIND_62, region_sort), period)
  
# GlobalEconomyDataIndicators
out[["data"]][["country"]][["Raw"]][["globalEconomyDataIndicators"]] <- out[["mapping"]][["regionMapping"]] %>%
  left_join(
    globalEconomyDataIndicators <- calcOutput("GlobalEconomyDataIndicators", aggregate = FALSE) %>%
      as.data.frame() %>%
      select(region = Region, period = Year, type = Data1, driver = Data2, unit = Data3, value = Value), 
    by = c("CountryCode" = "region")) %>%
  mutate(period = as.integer(as.character(period))) %>% # Convert period to numeric
  arrange(type, driver, unit, match(REMIND_62, region_sort), period)

out[["data"]][["country"]][["Raw"]][["geopoliticalMemberships"]] <- 
  read.csv2("./mappings/geopoliticalMemberships.csv", check.names=FALSE) 

out[["drivers"]][["units"]] <- c(
  "gdp" = "trillions US Dollar 2023",
  "pop" = "millions in 2023",
  "gdpPerCapita" = "thousand of dollars per person",
  "bulk_carbonPrice" = "USD per t CO2",
  "diffuse_carbonPrice" = "USD per t CO2",
  out[["data"]][["country"]][["Raw"]][["globalEconomyDataIndicators"]] %>% filter(driver %in% (out[["drivers"]][["drivers_df"]] %>% pull(Variable))) %>% select(driver, unit) %>% mutate(unit = as.character(unit))%>% unique() %>% deframe()
)

saveRDS(out[["drivers"]], file = "./data/drivers.rds")

### Selected data

out[["data"]][["country"]][["selected"]] <- 
  out[["data"]][["country"]][["Raw"]][["remindHist"]] %>%
  left_join(
    out[["data"]][["country"]][["Raw"]][["globalEconomyDataIndicators"]] %>%
      select(CountryCode, period, driver, value) %>%
      pivot_wider(names_from = "driver", values_from = "value"),
    by = c("period", "CountryCode")) %>%
  left_join( 
    out[["data"]][["country"]][["Raw"]][["carbonPrice"]] %>%
      select(CountryCode, period, sector, value) %>%
      pivot_wider(names_from = "sector", values_from = "value") %>%
      rename(bulk_carbonPrice = bulk, diffuse_carbonPrice = diffuse),
    by = c("period", "CountryCode"))

out[["data"]][["country"]][["latest"]] <-
  out[["data"]][["country"]][["Raw"]][["remindHist"]] %>%
  filter(period == 2023)  %>%
  select(-period) %>%
  left_join(
    out[["data"]][["country"]][["Raw"]][["globalEconomyDataIndicators"]] %>%
      select(CountryCode, period, driver, value) %>%
      pivot_wider(names_from = "driver", values_from = "value") %>%
      filter(period == 2021) %>%
      select(-period),
    by = c("CountryCode")) %>%
  left_join( 
    out[["data"]][["country"]][["Raw"]][["carbonPrice"]] %>%
      select(CountryCode, period, sector, value) %>%
      pivot_wider(names_from = "sector", values_from = "value") %>%
      rename(bulk_carbonPrice = bulk, diffuse_carbonPrice = diffuse) %>%
      filter(period == 2025) %>%
      select(-period),
    by = c("CountryCode"))

# Aggreggated per region mapping
mappingsFileNames = c("REMIND_12"="H12", "REMIND_21"="_21_EU11", "REMIND_26"="_26", "REMIND_39"="_39", "REMIND_54"="_54", "REMIND_62"="_62")
for(currRegion in out[["mapping"]][["mappingsVector"]]){
  
  print(currRegion)
  
  currFileName <- paste0("regionmapping",mappingsFileNames[currRegion], ".csv")
  setConfig(forcecache = TRUE, regionmapping = currFileName)
  
  print(currFileName)
  
  out[["data"]][[currRegion]][["Raw"]][["remindHist"]] <- out[["mapping"]][["regionsTable"]] %>%
    mutate(region = !!sym(currRegion)) %>%
    select("REMIND_12","region") %>%
    unique() %>%
    left_join(
      out[["data"]][["country"]][["Raw"]][["remindHist"]] %>%
        mutate(region = !!sym(currRegion)) %>%
        group_by(region, period) %>%
        summarize(
          pop = sum(pop),
          gdp = sum(gdp),
          countries = paste0(countryName, collapse = "; "), .groups = "keep") %>%
        ungroup() %>%
        mutate(gdpPerCapita = gdp/pop * 1000),
      by = "region") %>%
    mutate(period = as.integer(as.character(period)))
  
  out[["data"]][[currRegion]][["Raw"]][["carbonPrice"]] <- calcOutput("CarbonPrice", subtype = "effectivePrice") %>%
    as.data.frame() %>%
    select(region = Region, period = Year, sector = Data1, value = Value) %>%
    mutate(period = as.integer(as.character(period)))
  
  out[["data"]][[currRegion]][["Raw"]][["globalEconomyDataIndicators"]] <- calcOutput("GlobalEconomyDataIndicators") %>%
    as.data.frame() %>%
    select(region = Region, period = Year, type = Data1, driver = Data2, unit = Data3, value = Value) %>%
    mutate(period = as.integer(as.character(period))) %>% # Convert period to numeric
    arrange(type, driver, unit, match(region, region_sort), period)
  
  out[["data"]][[currRegion]][["selected"]] <- 
    out[["data"]][[currRegion]][["Raw"]][["remindHist"]] %>%
    left_join(
      out[["data"]][[currRegion]][["Raw"]][["globalEconomyDataIndicators"]] %>%
        select(region, period, driver, value) %>%
        pivot_wider(names_from = "driver", values_from = "value"),
      by = c("period", "region")) %>%
    left_join( 
      out[["data"]][[currRegion]][["Raw"]][["carbonPrice"]] %>%
        select(region, period, sector, value) %>%
        pivot_wider(names_from = "sector", values_from = "value") %>%
        rename(bulk_carbonPrice = bulk, diffuse_carbonPrice = diffuse),
      by = c("period", "region"))
  
  out[["data"]][[currRegion]][["latest"]] <-
    out[["data"]][[currRegion]][["Raw"]][["remindHist"]] %>%
    filter(period == 2023)  %>%
    select(-period) %>%
    left_join(
      out[["data"]][[currRegion]][["Raw"]][["globalEconomyDataIndicators"]] %>%
        select(region, period, driver, value) %>%
        pivot_wider(names_from = "driver", values_from = "value") %>%
        filter(period == 2021) %>%
        select(-period),
      by = c("region")) %>%
    left_join( 
      out[["data"]][[currRegion]][["Raw"]][["carbonPrice"]] %>%
        select(region, period, sector, value) %>%
        pivot_wider(names_from = "sector", values_from = "value") %>%
        rename(bulk_carbonPrice = bulk, diffuse_carbonPrice = diffuse) %>%
        filter(period == 2025) %>%
        select(-period),
      by = c("region"))
}

saveRDS(out[["data"]], file = "./data/data.rds")


################# Create data tables ######################

print("Creating data tables...")

displayData <- out[["data"]][["country"]][["latest"]] %>%
  left_join(out[["data"]][["country"]][["Raw"]][["geopoliticalMemberships"]], by = "CountryCode") %>%
  filter(pop > 1) %>%
  select(countryName, CountryCode, all_of(out[["mapping"]][["mappingsVector"]]), all_of(out[["drivers"]][["drivers_df"]] %>% filter(exclude != "table") %>% pull(Variable))) %>%
  mutate(across( # additional columns with top 20 rank for each driver
    .cols = all_of(
      out[["drivers"]][["drivers_df"]] %>%
        filter(exclude != "table") %>%
        filter(type == "rank") %>%
        pull(Variable)),
    .fns = ~ {
      # Only rank rows with non-missing and non-zero values
      valid <- !is.na(.x) & .x > 0
      ranks <- rep(NA_integer_, length(.x))
      ranks[valid] <- dense_rank(desc(.x[valid]))
      # Keep top 20, else empty string
      ifelse(!is.na(ranks) & ranks <= 20, as.character(ranks), "")
    },
    .names = "{.col} rank"
  )) %>%
  mutate(across( # Apply reverse ranking for 'reverseRank' type drivers
    .cols = all_of(
      out[["drivers"]][["drivers_df"]] %>%
        filter(exclude != "table") %>%
        filter(type == "reverseRank") %>%
        pull(Variable)),
    .fns = ~ {
      # Only rank rows with non-missing and non-zero values
      valid <- !is.na(.x) & .x > 0
      ranks <- rep(NA_integer_, length(.x))
      ranks[valid] <- dense_rank(.x[valid]) # Rank from lowest to highest
      # Keep top 20, else empty string
      ifelse(!is.na(ranks) & ranks <= 20, as.character(ranks), "")
    },
    .names = "{.col} reverseRank"
  )) %>%
  # Apply percentage formatting for '%' type drivers
  mutate(across(
    .cols = all_of(
      out[["drivers"]][["drivers_df"]] %>%
        filter(exclude != "table") %>%
        filter(type == "%") %>%
        pull(Variable)),
    .fns = ~ {
      # Only format non-missing values
      formatted_values <- ifelse(
        is.na(.x) | .x == 0,
        "",
        # Round the number and convert to character
        as.character(ifelse(
          round(.x, 0) == 0 & .x != 0,
          paste0(round(.x, 2), "%"),
          paste0(round(.x, 0), "%")
        ))
      )
      formatted_values
    }
  )) %>%
  # Apply round for '#' type drivers
  mutate(across(
    .cols = all_of(
      out[["drivers"]][["drivers_df"]] %>%
        filter(exclude != "table") %>%
        filter(type == "#") %>%
        pull(Variable)),
    .fns = ~ {
      # Only format non-missing values.
      # Return an empty string for NA values or values equal to 0.
      formatted_values <- ifelse(
        is.na(.x) | .x == 0,
        "",
        # Round the number and convert to character
        as.character(ifelse(
          round(.x, 0) == 0 & .x != 0,
          round(.x, 2),
          round(.x, 0)
        ))
      )
      formatted_values
    }
  )) %>%
  # Convert to number 'membership' type drivers
  mutate(across(
    .cols = all_of(
      out[["drivers"]][["drivers_df"]] %>%
        filter(exclude != "table") %>%
        filter(type == "membership") %>%
        pull(Variable)),
    .fns = ~ {
      # Only format non-missing values.
      # Return an empty string for NA values or values equal to 0.
      formatted_values <- ifelse(
        is.na(.x) | .x == 0,
        "",
        # Round the number and convert to character
        as.character(
          case_when(
            .x == "member" ~ 1,
            .x == "partner" ~ 2,
            .x == "candidate" ~ 3,
            .x == "suspended" ~ 4,
            .x == "ex-member" ~ 5
          )
        )
      )
      formatted_values
    }
  ))

display <- out[["mapping"]][["regionsTable"]] %>%
  left_join(displayData %>%
              filter(CountryCode %in% c(out[["mapping"]][["regionMapping"]] %>% filter(CountryCode %in% REMIND_62) %>% pull(REMIND_62), "CHN", "BEL")) %>%
              select("REMIND_62", out[["drivers"]][["drivers_df"]] %>% filter(exclude != "table") %>% pull(finalVariableName)), by = "REMIND_62") %>%
  mutate(across(where(is.character), ~replace_na(., ""))) %>%
  rename_with(~ gsub("^REMIND_", "REMIND ", .x)) %>%
  rename(!!!out[["drivers"]][["drivers_df"]] %>% filter(exclude != "table") %>% select(DisplayName, finalVariableName) %>% deframe())

# Named vector for add_header_above (top row)
n_reg <- setNames(sum(startsWith(names(display), "REMIND ")),"Regional Mapping")
n_data <- sapply(unique(out[["drivers"]][["drivers_df"]][["Category"]]), 
                 function(cat) { 
                   out[["drivers"]][["drivers_df"]] %>% filter((Category == cat) & (exclude != "table")) %>% nrow();})
header <- c(n_reg, n_data)

#names(header) <- paste0("<div style='text-align:left; position: sticky; top: 0px; background: #d9d9d9; z-index: 3;'>", names(header), "</div>")

# Rotate the lower header
col_names_rotated <- gsub(" - ", "<br>", names(display))
col_names_rotated[1:n_reg] <- paste0(
  "<div style='writing-mode: vertical-rl; transform: rotate(180deg); ",
  "min-height: 4em; line-height: 4em; text-align: center;'>",
  col_names_rotated[1:n_reg],
  "</div>"
)
col_names_rotated[(n_reg+1):length(names(display))] <- paste0(
  "<div style='writing-mode: vertical-rl; transform: rotate(180deg); ",
  "min-height: 4em; line-height: 1em; text-align: left; font-weight: normal;'>",
  col_names_rotated[(n_reg+1):length(names(display))],
  "</div>"
)

 
# Create table
out[["table"]][["countryData"]] <- display %>%
  mutate(across(
    .cols = (max(grep("^REMIND .*", names(display))) + 1):ncol(display),
    .fns = ~ {
      variable_name <- sub(" (rank|reverse rank)$", "", cur_column())
      col_type <- out[["drivers"]][["drivers_df"]] %>%
        filter(DisplayName == variable_name) %>%
        pull(type)
      val <- .x
      is_num <- grepl("^-?\\d+(\\.\\d+)?$", val) # only pure numbers
      num_val <- suppressWarnings(as.numeric(val))
      
      ifelse(
        is_num,
        cell_spec(
          x = num_val,
          background = table_rank_color(num_val, type = col_type),
          color = text_table_rank_color(num_val, type = col_type)
        ),
        as.character(val)
      )
    }
  )) %>%
  kbl(
    caption = "Country data",
    align = "c",
    format = "html",
    escape = FALSE,
    col.names = col_names_rotated,
    table.attr = "style='border: 1px solid #ccc; border-collapse: collapse;'"
  ) %>%
  kable_styling(
    full_width = FALSE,
    position = "center",
    bootstrap_options = c("striped", "hover", "condensed", "responsive")#, 
    #fixed_thead = TRUE
  ) %>%
  collapse_rows(columns = 1:n_reg, valign = "middle") %>%
  add_header_above(header, escape = FALSE, background = "#d9d9d9") %>%
  row_spec(0, bold = TRUE, background = "#d9d9d9") #%>% #, extra_css = "position: sticky; top: 30px; background: #d9d9d9; z-index: 2; text-align: left;"
  #column_spec(6, extra_css = "position: sticky; left:0px; background:white; z-index:1;")

out[["table"]][["countryDataText"]] <- paste0(
  "</br>Rankings are reported for countries with a population exceeding one million in 2023.</br>",
  "Population, GDP, and GDP per capita figures correspond to 2023, while all other indicators are based on 2021 data.</br>",
  "Ranks display results for China and Belgium in the CHA and BELUX regions respectivelly, however these regions include additional countries:</br>",
  "   - CHA: ", out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% "CHA") %>% pull(countryName) %>% paste(collapse = "; "), ".</br>",
  "   - BELUX: ", out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% "BELUX") %>% pull(countryName) %>% paste(collapse = "; "), ".</br>",
  "   - FRA: ", out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% "FRA") %>% pull(countryName) %>% paste(collapse = "; "), ".</br>",
  "   - ITA: ", out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% "ITA") %>% pull(countryName) %>% paste(collapse = "; "), ".</br>",
  "   - GRC: ", out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% "GRC") %>% pull(countryName) %>% paste(collapse = "; "), ".</br>",
  "   - DNK: ", out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% "DNK") %>% pull(countryName) %>% paste(collapse = "; "), ".</br>",
  "   - FIN: ", out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% "FIN") %>% pull(countryName) %>% paste(collapse = "; "), ".</br>",
  "   - GBR: ", out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% "GBR") %>% pull(countryName) %>% paste(collapse = "; "), ".</br>",
  "   - NOR: ", out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% "NOR") %>% pull(countryName) %>% paste(collapse = "; "), ".</br>",
  "   - CHE: ", out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% "CHE") %>% pull(countryName) %>% paste(collapse = "; "), ".</br>",
  "Geopolitical groups classification:</br>",
  "   - dark green  = member</br>",
  "   - green       = partner</br>",
  "   - light green = candidate</br>",
  "   - orange      = suspended</br>",
  "   - red         = ex-member</br>",
  "Geopolitical groups:</br>",
  "   - ASEAN (Association of Southeast Asian Nations)</br>",
  "   - RCEP (Regional Comprehensive Economic Partnership): free trade agreement between the Asia-Pacific nations.</br>",
  "   - USMCA (United States–Mexico–Canada Agreement): free trade agreement between the United States, Mexico, and Canada.</br>",
  "   - AfCFTA (African Continental Free Trade Area): aspiring free trade area encompassing most of Africa.</br>",
  "   - SCO (Shanghai Cooperation Organisation): Eurasian political, economic, and security alliance.</br></br>",
  "   - GCC (Gulf Cooperation Council): Alliance of six Arabian Peninsula states focused on political, economic, and social integration.</br></br>",
  "   - LAS (League of Arab States): Broader intergovernmental organization of 22 Arab countries from the Middle East and North Africa,</br>       aimed at coordinating policies and fostering cooperation among its diverse member states.</br></br>",
  "   - OIC (Organization of the Islamic Cooperation): Group to strengthen cooperation and solidarity, and to protect the rights and interests of the Islamic World.</br></br>"
  )

#  Missing top ranked countries
missingRanks <- 
  lapply(out[["drivers"]][["drivers_df"]] %>%
           filter(type %in% c("rank", "reverseRank")) %>%
           mutate(variableWithType = paste0(Variable, " ", type)) %>%
           pull("variableWithType"),
         function(col_name) {
           vals <- displayData %>% # REMIND 62 countries with data
             filter(CountryCode %in% c(out[["mapping"]][["regionMapping"]] %>% filter(CountryCode %in% REMIND_62) %>% pull(REMIND_62), "CHN", "HKG", "MAC", "TWN", "ATF", "SPM", "MLT", "CYP", "BEL", "LUX", "FRO", "GRL", "ALA", "IOT", "GIB", "GGY", "IMN", "JEY", "SJM", "LIE", "CXR", "CCK", "HMD")) %>%
             pull(!!sym(col_name)) %>% 
             na_if("") %>% 
             na.omit()
            
           max_val <- displayData %>% pull(!!sym(col_name)) %>% as.numeric() %>% na.omit() %>% max()
           
           missing_vals <- setdiff(1:max_val, vals[!is.na(vals)]) # index of countries not in data
           
           missing_countries <- displayData %>% # countries not in data
             filter(!!sym(col_name) %in% missing_vals) %>%
             pull(countryName) %>%
             paste(collapse = "; ")
           
           tibble(
             rank_type = out[["drivers"]][["drivers_df"]] %>% filter(finalVariableName == col_name) %>% pull(DisplayName),
             #rank_type = gsub(" rank", "", col_name),
             missing_rank = if(length(missing_vals) == 0) "All present" else paste(missing_vals, collapse = ", "),
             missing_countries = if(length(missing_countries) == 0) "All present" else paste(missing_countries, collapse = ", "),
             max_ranking = max_val
           )
         }) %>% bind_rows()

out[["table"]][["missingRanks"]] <- missingRanks %>%
  kbl(caption = "Missing country data in the REMIND_62 mapping",
      align = "c",
      booktabs = TRUE) %>%
  kable_styling(full_width = FALSE, 
                position = "center",
                bootstrap_options = c("striped", "hover", "condensed", "responsive")) %>%
  row_spec(0, bold = TRUE, background = "#f2f2f2")


# geopolitical groups
missingGeopoliticalGroups <- lapply(
  out[["drivers"]][["drivers_df"]] %>% filter(type %in% c("membership")) %>% pull(Variable),
  function(group){
    d_missing <- out[["mapping"]][["regionMapping"]] %>%
      left_join(out[["data"]][["country"]][["Raw"]][["geopoliticalMemberships"]], by = "CountryCode") %>%
      arrange(match(REMIND_62, region_sort)) %>%
      filter(!(CountryCode %in% c(out[["mapping"]][["regionMapping"]] %>% filter(CountryCode %in% REMIND_62) %>% pull(REMIND_62), "CHN", "BEL"))) %>%
      mutate(Membership = !!sym(group)) %>%
      select(countryName, CountryCode, REMIND_62, Membership)

    d_missing_categories <- d_missing %>%
      filter(Membership %in% c("member", "candidate", "suspended", "ex-member")) %>%
      group_by(REMIND_62, Membership) %>%
      summarize(countries = paste(countryName, collapse = "; "), .groups = 'drop') %>%
      mutate(final_string = paste0(REMIND_62, " (", countries, ")")) %>%
      group_by(Membership) %>%
      summarize(Countries = paste(final_string, collapse = "<br/>"), .groups = 'drop') %>%
      mutate("Geopolitical Group" = group) %>%
      select("Geopolitical Group", "Membership", "Countries")
    return(d_missing_categories)
  }) %>%
  bind_rows()

out[["table"]][["missingGeopoliticalGroups"]] <- missingGeopoliticalGroups %>%
  kbl(caption = "Missing independent countries from geopolitical groups in the REMIND_62 mapping",
      align = "l",
      booktabs = TRUE,
      escape = FALSE) %>%
  kable_styling(full_width = FALSE,
                position = "center",
                bootstrap_options = c("striped", "hover", "condensed", "responsive")) %>%
  row_spec(0, bold = TRUE, background = "#f2f2f2")


# --- Main function to Find Best Region Combinations using a Greedy Algorithm ---
find_best_regions_greedy <- function(group, membership_statuses, region_col_name, region_sort, driver) {
  
  geopoliticalMemberships <- out[["data"]][["country"]][["Raw"]][["geopoliticalMemberships"]]

  # Ensure the provided region column exists in the mapping data
  if (!region_col_name %in% colnames(out[["mapping"]][["regionMapping"]])) {
    warning(paste("Region column", region_col_name, "not found. Skipping."))
    return(NULL)
  }
  
  # Step 1: Filter and classify countries based on the chosen driver (Population or Oil)
  if (driver == "Oil production") {
    
    # Get oil production data from globalEconomyDataIndicators
    driver_data <- out[["data"]][["country"]][["Raw"]][["globalEconomyDataIndicators"]] %>%
      filter(driver == "Oil production" & period == max(as.numeric(as.character(period)), na.rm = TRUE)) %>%
      select(CountryCode, value) %>%
      rename(oil_prod = value)
    
    # Calculate total oil production per regional group
    driver_region_total <- driver_data %>%
      left_join(out[["mapping"]][["regionMapping"]] %>% select(CountryCode, !!sym(region_col_name)), by = "CountryCode") %>%
      rename(Region_Group = !!sym(region_col_name)) %>%
      group_by(Region_Group) %>%
      summarize(total_driver_region = sum(oil_prod, na.rm = TRUE), .groups = 'drop')
    
    # Join and filter countries based on oil production share
    regions_data_filtered <- out[["mapping"]][["regionMapping"]] %>%
      select(countryName, CountryCode, !!sym(region_col_name)) %>%
      rename(Region_Group = !!sym(region_col_name)) %>%
      left_join(driver_data, by = "CountryCode") %>%
      left_join(driver_region_total, by = "Region_Group") %>%
      mutate(
        pop = NA, # Maintain a consistent column structure
        driver_share_of_region = (oil_prod / total_driver_region) * 100
      ) %>%
      filter(driver_share_of_region >= 1 | total_driver_region == 0) %>%
      select(countryName, CountryCode, Region_Group, driver_share_of_region, pop, oil_prod)
    
  } else { # Population is the default driver
    
    # Convert 'period' column to numeric
    remind_hist_data <- out[["data"]][["country"]][["Raw"]][["remindHist"]] %>%
      mutate(period = as.numeric(as.character(period))) %>%
      select(CountryCode, !!sym(region_col_name), pop, period) %>%
      rename(Region_Group = !!sym(region_col_name))
    
    # Calculate total population per regional group using the latest period's data
    driver_region_total <- remind_hist_data %>%
      filter(period == max(period, na.rm = TRUE)) %>%
      group_by(Region_Group) %>%
      summarize(total_driver_region = sum(pop, na.rm = TRUE), .groups = 'drop')
    
    # Join and filter countries based on population share
    regions_data_filtered <- out[["mapping"]][["regionMapping"]] %>%
      select(countryName, CountryCode, !!sym(region_col_name)) %>%
      rename(Region_Group = !!sym(region_col_name)) %>%
      left_join(remind_hist_data %>%
                  filter(period == max(period, na.rm = TRUE)), by = c("CountryCode", "Region_Group")) %>%
      left_join(driver_region_total, by = "Region_Group") %>%
      mutate(
        driver_share_of_region = (pop / total_driver_region) * 100,
        oil_prod = NA
      ) %>%
      filter(driver_share_of_region >= 1 | total_driver_region == 0) %>%
      select(countryName, CountryCode, Region_Group, driver_share_of_region, pop, oil_prod)
  }
  
  # Step 2: Prepare data for geopolitical group analysis
  regions_data <- regions_data_filtered %>%
    left_join(geopoliticalMemberships, by = "CountryCode") %>%
    select(countryName, CountryCode, Region_Group, pop, oil_prod, driver_share_of_region, !!sym(group)) %>%
    rename(Geopolitical_Status = !!sym(group)) %>%
    mutate(
      Is_Member = Geopolitical_Status %in% membership_statuses,
      Is_Unwanted_Non_Member = (is.na(Geopolitical_Status) | Geopolitical_Status == "" | !(Geopolitical_Status %in% membership_statuses)) &
        !is.na(driver_share_of_region) &
        driver_share_of_region >= 1 & driver_share_of_region < 20
    )
  
  # Calculate total value of the chosen driver for the geopolitical group
  if (driver == "Oil production") {
    total_driver_value_group <- regions_data %>%
      filter(Is_Member) %>%
      summarize(total_value = sum(oil_prod, na.rm = TRUE)) %>%
      pull(total_value)
  } else {
    total_driver_value_group <- regions_data %>%
      filter(Is_Member) %>%
      summarize(total_value = sum(pop, na.rm = TRUE)) %>%
      pull(total_value)
  }
  
  # Get all unique regions
  all_unique_regions <- unique(regions_data$Region_Group)
  
  # Get all member countries to track coverage
  all_member_countries <- regions_data %>% filter(Is_Member) %>% pull(CountryCode)
  
  # Handle groups with no members after filtering
  if (length(all_member_countries) == 0) {
    return(tibble(
      Group = group,
      Member_Status = paste(membership_statuses, collapse = ", "),
      Region_Group_Type = region_col_name,
      Best_Regions = list(character(0)),
      Members_Covered = 0,
      Non_Members_Included = 0,
      Members_Missing = 0,
      Members_Included_Countries = "",
      Members_Missing_Countries = "",
      Unwanted_Non_Members_Included = "",
      Coverage_Ratio = 0,
      Driver = driver
    ))
  }
  
  # Initialize variables for the greedy algorithm
  best_regions <- character(0)
  covered_members_codes <- character(0)
  
  # Step 3: Greedily select regions based on new rules
  while (length(covered_members_codes) < length(all_member_countries)) {
    best_region_in_step <- NA
    max_new_members <- 0
    
    for (region in setdiff(all_unique_regions, best_regions)) {
      countries_in_region <- regions_data %>% filter(Region_Group == region)
      
      # A region is invalid if it contains any country that is neither
      # a member of the group NOR an 'unwanted' non-member (i.e., a large non-member).
      if (any(countries_in_region$Is_Member == FALSE & countries_in_region$Is_Unwanted_Non_Member == FALSE)) {
        next
      }
      
      new_members <- setdiff(
        countries_in_region %>% filter(Is_Member) %>% pull(CountryCode),
        covered_members_codes
      )
      
      if (length(new_members) > max_new_members) {
        max_new_members <- length(new_members)
        best_region_in_step <- region
      }
    }
    
    if (is.na(best_region_in_step)) {
      break
    }
    
    best_regions <- c(best_regions, best_region_in_step)
    
    covered_members_codes <- c(
      covered_members_codes,
      regions_data %>%
        filter(Region_Group == best_region_in_step & Is_Member) %>%
        pull(CountryCode)
    ) %>% unique()
  }

  full_geo_group_raw <- out[["data"]][["country"]][["Raw"]][["geopoliticalMemberships"]] %>%
    left_join(out[["mapping"]][["regionMapping"]] %>% select(CountryCode, !!sym(region_col_name)), by = "CountryCode") %>%
    select(CountryCode, 
           Region_Group = !!sym(region_col_name),
           Geopolitical_Status = !!sym(group)) %>%
    filter(Geopolitical_Status %in% membership_statuses) %>%
    pull(CountryCode)
  full_geo_group <- c(full_geo_group_raw, out[["mapping"]][["regionMapping"]] %>% filter(REMIND_62 %in% full_geo_group_raw) %>% pull(CountryCode)) %>% unique()
  full_selected <- out[["mapping"]][["regionMapping"]] %>%
    select(CountryCode, region = !!sym(region_col_name)) %>%
    filter(region %in% best_regions) %>% 
    pull(CountryCode)
  full_covered_members     <- full_geo_group[full_geo_group %in% full_selected]
  full_missing_members     <- full_geo_group[!(full_geo_group %in% full_selected)]
  full_non_member_included <- full_selected[!(full_selected %in% full_geo_group)]
  
  # Step 3b: Check for population/oil coverage and filter selected regions
  regions_to_keep <- regions_data %>%
    filter(Region_Group %in% best_regions) %>%
    left_join(driver_region_total, by = "Region_Group") %>%
    group_by(Region_Group) %>%
    summarize(
      total_member_value = if (driver == "Oil production") sum(oil_prod[Is_Member], na.rm = TRUE) else sum(pop[Is_Member], na.rm = TRUE),
      total_region_driver = first(total_driver_region),
      .groups = 'drop'
    ) %>%
    mutate(coverage_pct = (total_member_value / total_region_driver) * 100) %>%
    filter(coverage_pct >= 50) %>%
    pull(Region_Group)
  
  best_regions <- regions_to_keep
  
  # Re-calculate covered_members_codes based on the new, filtered list of regions
  covered_members_codes <- regions_data %>%
    filter(Region_Group %in% best_regions & Is_Member) %>%
    pull(CountryCode) %>%
    unique()
  
  # Step 4: Summarize the results and format country lists
  
  # Determine which regions have more than one country with pop_share > 1%
  multi_country_regions <- regions_data_filtered %>%
    group_by(Region_Group) %>%
    summarize(n_countries = n(), .groups = 'drop') %>%
    filter(n_countries > 1) %>%
    pull(Region_Group)
  
  # Helper function to format country names with population/oil percentage
  format_country_list <- function(country_codes, total_driver_value_group) {
    if (length(country_codes) == 0) return("")
    
    # Join with regions_data to get countryName and pop/oil_prod
    country_data <- regions_data %>%
      filter(CountryCode %in% country_codes) %>%
      mutate(driver_value = if (driver == "Oil production") oil_prod else pop) %>%
      mutate(driver_pct = (driver_value / total_driver_value_group) * 100) %>%
      select(countryName, CountryCode, Region_Group, driver_pct) %>%
      # Ensure consistent order for multi-country regions
      left_join(tibble(CountryCode = country_codes), by = "CountryCode") %>%
      mutate(rank = row_number()) %>%
      arrange(rank)
    
    # Format the country name with percentage
    country_data <- country_data %>%
      mutate(formatted_name = paste0(countryName, " (", sprintf("%.2f", driver_pct), "%)"))
    
    # Create a temporary data frame with the correct region sort order
    region_order_df <- tibble(Region_Group = region_sort) %>%
      mutate(sort_order = row_number())
    
    # Join with region order to sort the final list
    country_data %>%
      left_join(region_order_df, by = "Region_Group") %>%
      arrange(sort_order) %>%
      group_by(Region_Group) %>%
      summarize(
        country_list = if (first(Region_Group) %in% multi_country_regions) {
          paste0(first(Region_Group), " (", paste(formatted_name, collapse = ", "), ")")
        } else {
          paste(formatted_name, collapse = ", ")
        },
        .groups = 'drop'
      ) %>%
      pull(country_list) %>%
      paste(collapse = ", ")
  }
  
  # Helper function to format list of regions only (no countries)
  format_included_regions <- function(country_codes) {
    if (length(country_codes) == 0) return("")
    
    # Create a temporary data frame with the correct order
    region_order_df <- tibble(Region_Group = region_sort) %>%
      mutate(sort_order = row_number())
    
    regions_data %>%
      filter(CountryCode %in% country_codes) %>%
      select(Region_Group) %>%
      distinct() %>%
      left_join(region_order_df, by = "Region_Group") %>%
      arrange(sort_order) %>%
      pull(Region_Group) %>%
      paste(collapse = ", ")
  }
  
  # Format the three country list columns using the appropriate function
  members_included_names <- format_included_regions(covered_members_codes)
  members_missing_codes <- regions_data %>%
    filter(Is_Member & !(CountryCode %in% covered_members_codes)) %>%
    pull(CountryCode) %>%
    unique()
  members_missing_names <- format_country_list(members_missing_codes, total_driver_value_group)
  
  unwanted_non_members_included_codes <- regions_data %>%
    filter(Region_Group %in% best_regions & Is_Unwanted_Non_Member == TRUE) %>%
    pull(CountryCode) %>%
    unique()
  unwanted_non_members_included <- format_country_list(unwanted_non_members_included_codes, total_driver_value_group)
  
  # Final calculations
  final_countries <- regions_data %>%
    filter(Region_Group %in% best_regions)
  
  non_members_included <- sum(final_countries$Is_Member == FALSE)
  members_covered <- sum(final_countries$Is_Member)
  members_missing <- length(all_member_countries) - members_covered
  
  total_driver_value_selected_regions <- if (driver == "Oil production") {
    final_countries %>% summarize(total_value = sum(oil_prod, na.rm = TRUE)) %>% pull(total_value)
  } else {
    final_countries %>% summarize(total_value = sum(pop, na.rm = TRUE)) %>% pull(total_value)
  }
  
  coverage_ratio <- total_driver_value_selected_regions / total_driver_value_group
  
  tibble(
    Group = group,
    Member_Status = paste(membership_statuses, collapse = ", "),
    Region_Group_Type = region_col_name,
    Best_Regions = list(best_regions),
    Members_Covered = members_covered,
    Non_Members_Included = non_members_included,
    Members_Missing = members_missing,
    Members_Included_Countries = members_included_names,
    Members_Missing_Countries = members_missing_names,
    Unwanted_Non_Members_Included = unwanted_non_members_included,
    Coverage_Ratio = coverage_ratio,
    Driver = driver,
    # --- new ISO3 code list-columns ---
    countries_covered_member = list(full_covered_members),
    countries_missing_member = list(full_missing_members),
    countries_non_member_included = list(full_non_member_included)
  )
}

# --- Apply the function to all geopolitical groups and statuses ---

# Get all unique geopolitical groups
geopolitical_groups_to_check <- out[["data"]][["country"]][["Raw"]][["geopoliticalMemberships"]] %>%
  select(-c(Country, CountryCode)) %>%
  colnames()

# Get all available region columns from the mapping data
region_columns_to_check <- setdiff(colnames(out[["mapping"]][["regionMapping"]]), c("countryName", "CountryCode"))

# Define the statuses you want to check
membership_status_list <- list(
  "Member" = "member",
  "Candidate" = "candidate",
  "Ex-Member" = "ex-member",
  "All_Members_and_Candidates" = c("member", "candidate")
)

# Define the sort order for REMIND_62 (this must be provided for each region grouping)
region_sort <- c("DEU", "FRA", "ITA", "GRC", "ESP", "PRT", "AUT", "NLD", "BELUX", "POL", "ECE_other", "SWE", "DNK", "FIN", "ECS", "IRL", "GBR", "NOR", "CHE", "ISL", "UKR", "ALB", "NES_other", "TUR", "RUS", "KAZ", "REF_other", "JPN", "CHA", "IND", "IDN", "VNM", "PHL", "THA", "SGP", "SEA_other2", "KOR", "BGD", "PAK", "OAS_other", "IRN", "MEA_other", "SAU", "EGY", "NAF_other", "ZAF", "NGA", "COD", "ETH", "AFC_other", "BRA", "MEX", "ARG", "CHL", "COL", "VEN", "URY", "LAM_other", "USA", "CAN", "AUS", "NZL")
region_sort_list <- list()
for (reg in region_columns_to_check){
  region_sort_list[[reg]] <- out[["mapping"]][["regionMapping"]] %>% arrange(match(REMIND_62, region_sort)) %>% select(!!sym(reg)) %>% pull(!!sym(reg)) %>% unique()
}

# Create a data frame with all combinations to be processed
combinations_df <- expand.grid(
  group = geopolitical_groups_to_check,
  status_name = names(membership_status_list),
  region_col_name = region_columns_to_check,
  stringsAsFactors = FALSE
) %>%
  mutate(
    membership_statuses = unname(membership_status_list[status_name]),
    region_sort = region_sort_list[region_col_name],
    # Add a new column to specify the driver for each group
    driver = case_when(
      group %in% c("OPEC", "OPEC+") ~ "Oil production",
      .default = "Population"
    )
  ) %>%
  # Filter out combinations where a sort order is not available
  filter(!map_lgl(region_sort, is.null))

# Apply the function to each row of the combinations data frame
efficient_combinations <- purrr::pmap_dfr(
  .l = combinations_df,
  .f = ~ find_best_regions_greedy(
    group = ..1, # This is the `group` column
    membership_statuses = ..4, # This is the `membership_statuses` column
    region_col_name = ..3, # This is the `region_col_name` column
    region_sort = ..5, # This is the `region_sort` column
    driver = ..6
  )
)

# save maps for geopolitical groups

colorVector <- c(
  Member = "#7ABD7E", 
  "Missing member" = "#F8D66D",
  "Non-member included" = "#FF6961"
)

expanded_df <- efficient_combinations %>%
  filter(Member_Status == "member") %>%
  select(Region_Group_Type, Group, countries_covered_member, countries_missing_member, countries_non_member_included) %>%
  # expand across all CountryCodes
  mutate(dummy = 1) %>%
  right_join(
    tibble(CountryCode = out[["mapping"]][["regionMapping"]]$CountryCode) %>%
      mutate(dummy = 1),
    by = "dummy"
  ) %>%
  select(-dummy) %>%
  rowwise() %>%
  mutate(
    Member = CountryCode %in% countries_covered_member,
    Missing = CountryCode %in% countries_missing_member,
    non_Member_Included = CountryCode %in% countries_non_member_included,
    color = ifelse(Member, colorVector[["Member"]],
                   ifelse(Missing, colorVector[["Missing member"]],
                          ifelse(non_Member_Included, colorVector[["Non-member included"]], NA_character_)))
  ) %>%
  ungroup() %>%
  select(Region_Group_Type, Group, CountryCode, Member, Missing, non_Member_Included, color)

nameColorVector <- setNames(names(colorVector), colorVector)
value_map <- setNames(seq_along(colorVector), names(colorVector))

#worldMap <- download_map_data("custom/world-highres")
#saveRDS(worldMap, "./maps/world-highres.rds")
#worldMap <- readRDS("./maps/world-highres.rds")
#worldMap <- download_map_data("custom/world-lowres")
#saveRDS(worldMap, "./maps/world_map_lowres.rds")
worldMapLowres <- readRDS("./maps/world_map_lowres.rds")
#library(httr)
#worldMapLowres <- "https://code.highcharts.com/mapdata/custom/world-lowres.json" %>% GET() %>% content()

print("Creating geopolitical maps...")

out[["table"]][["maps"]] <- NULL

for(currRegion in out[["mapping"]][["mappingsVector"]]){
  for(group in unique(expanded_df$Group)){
    
    mapFile <- paste0("./output/img/geoMaps/", currRegion, "_", group, ".png")
    
    if(forceGeoMapsCreation | (!(file.exists(mapFile)))){
      print(paste0("Creating file ", mapFile, " ..."))
      
      mapData <- expanded_df %>%
        filter(Region_Group_Type == currRegion, Group == group) %>%
        select(CountryCode, color) %>%
        mutate(category = nameColorVector[color],
               value = value_map[category]
        )
      
      data_classes <- imap(colorVector, ~list(from = .y, to = .y, name = .y, color = . )) %>%
        set_names(NULL) # Unname the list for highcharter
      
      out[["table"]][["maps"]][[currRegion]][[group]] <- 
        highchart(type = "map") %>%
          hc_add_series_map(
            map = worldMapLowres,
            df = mapData,
            joinBy = c("iso-a3", "CountryCode"), # Joins map's 'iso-a3' with our 'CountryCode'
            value = "value", # The numeric column we created
            name = "Status",
            allAreas = FALSE,
            borderWidth = 0.03,
            borderColor = "#FAFAFA",
            nullColor = "#f0f0f0"
        ) %>%
          hc_colorAxis(
            # Use dataClasses to create a categorical legend
            dataClasses = data_classes,
            # Set a color for countries with no data (value = 0)
            naColor = "#E0E0E0"
          ) %>%
          hc_legend(
            enabled = TRUE,
            layout = "horizontal",
            align = "center",
            verticalAlign = "bottom",
            itemStyle = list(
              fontSize = "20px"  # Set the desired font size
            )
          ) %>%
          hc_tooltip(
            useHTML = TRUE,
            headerFormat = "",
            pointFormat = "<b>{point.name}</b>: {point.category}"
          ) %>%
          hc_mapNavigation(
            enabled = FALSE
          )
      temp_file <- tempfile(fileext = ".html")
      saveWidget(out[["table"]][["maps"]][[currRegion]][[group]], temp_file)
      webshot(
        url = temp_file, # Pass the path of the saved file
        file = mapFile,
        delay = 5,
        vwidth = 1920,
        vheight = 960
      )
    
    }
    
  }
}

for(currRegion in out[["mapping"]][["mappingsVector"]]){
  out[["table"]][["geoGroup"]][["member"]][[currRegion]] <- efficient_combinations %>%
    filter(Region_Group_Type == currRegion, Member_Status == "member") %>%
    mutate(geoMaps = paste0("../img/geoMaps/", Region_Group_Type, "_", Group, ".png")) %>%
    select(`Geopolitical Group` = Group,  `Regions Selected` = Members_Included_Countries, `Coverage Variable` = Driver, `Coverage` = Coverage_Ratio, `Non Members Included` = Unwanted_Non_Members_Included, `Countries Missing` = Members_Missing_Countries, Maps = geoMaps) %>%
    mutate(`Coverage` = paste0(round(`Coverage`*100,1), "%")) %>%
    mutate(Maps = paste0('<img src="', Maps, '" width="200" class="myImages"/>')) %>%
    kbl(caption = "Correspondence between geopolitical group members and remind regions.",
        align = c("l", "l", "c", "l"),
        booktabs = TRUE,
        escape = FALSE) %>%
    kable_styling(full_width = FALSE,
                  position = "center",
                  bootstrap_options = c("striped", "hover", "condensed", "responsive"), 
                  fixed_thead = TRUE) %>%
    row_spec(0, bold = TRUE, background = "#f2f2f2") %>%
    kable_paper("hover", full_width = F)
  #column_spec(2, width = "40%")
  
}

saveRDS(out[["table"]], file = "./data/table.rds")


################# Create data for maps ######################
print("Creating maps...")

# 1. Create a map of every region to its top-level (REMIND_12) ancestor
ancestor_map <- out[["mapping"]][["regionsTable"]] %>%
  # Keep the ancestor column
  select(ancestor = REMIND_12) %>%
  # Add the original table back
  bind_cols(out[["mapping"]][["regionsTable"]]) %>%
  # Convert to a long format to get a simple two-column map
  pivot_longer(
    cols = -ancestor,
    names_to = "level",
    values_to = "region"
  ) %>%
  # Keep only the essential mapping
  select(ancestor, region) %>%
  # Get all unique combinations
  distinct()

# 2. For each ancestor, get an ordered list of its unique descendants
descendant_list <- ancestor_map %>%
  # Group by the ancestor
  group_by(ancestor) %>%
  # Get all regions, excluding the ancestor itself from its own list
  summarise(descendants = list(unique(region[region != ancestor])), .groups = 'drop')

# 3. Initialize an empty list for the final color map
region_color_map <- list()

# 4. Iterate through each ancestor to assign colors to its descendants
for (i in 1:nrow(descendant_list)) {
  ancestor_name <- descendant_list$ancestor[i]
  children <- descendant_list$descendants[[i]]
  palette <- regions_pallete[[ancestor_name]]
  
  if (is.null(palette) || length(children) == 0) next
  
  # Assign colors by cycling through the parent's palette
  child_colors <- rep_len(palette, length.out = length(children))
  names(child_colors) <- children
  
  # Add the named colors to our main list
  region_color_map <- c(region_color_map, as.list(child_colors))
}

# 5. Add the top-level regions themselves to the map.
#    - For those with single colors, this is their defined color.
#    - For those with palettes, we use the first color.
for (region_name in names(regions_pallete)) {
  region_color_map[[region_name]] <- regions_pallete[[region_name]][1]
}

# 6. Convert the list to the final tibble format and sort alphabetically
final_colors_df <- tibble(
  region = names(region_color_map),
  color = unlist(region_color_map)
) %>%
  arrange(region)

region_color <- out[["mapping"]][["regionMapping"]] %>% 
  select(countryName, REMIND_12, region = REMIND_62) %>%
  left_join(final_colors_df,
            by = "region")
  

################# Create maps ######################

# loading previously created map files
load("maps/WorldMap.RData") #worldMapMap

for(currRegion in out[["mapping"]][["mappingsVector"]]){
  
  # Add colors to the regions
  map_data <- out[["data"]][["country"]][["latest"]] %>%
    mutate(region = !!sym(currRegion)) %>%
    left_join(final_colors_df, by = "region") %>%
    mutate(gdpPerCapita = round(gdp/pop * 1000,3),
           gdp = round(gdp,3),
           pop = round(pop,3))
  
  series <- map_data %>%
    group_by(name = region, color) %>%
    do(data = list_parse(select(., CountryCode, countryName, starts_with("REMIND"), pop, gdp, gdpPerCapita))) %>%
    ungroup()
  
  out[["charts"]][[currRegion]][["WorldMap"]] <-
    highchart(type = "map") %>%
    hc_plotOptions(map = list(allAreas = FALSE, joinBy = c("iso-a3", "CountryCode"), mapData = worldMap, borderColor = "#FAFAFA", borderWidth = 0.03, nullColor = "#f0f0f0", width = "100%")) %>%
    hc_add_series_list(series) %>%
    #hc_title(text = currRegion) %>%
    # Add the corrected custom tooltip
    hc_tooltip(
      useHTML = TRUE,
      formatter = JS("
          function() {
            return '<b>' + this.point.countryName + '</b><br/>' +
                   '<br/><b>Regions:</b><br/>' +
                   'REMIND_12: ' + this.point.REMIND_12 + '<br/>' +
                   'REMIND_21: ' + this.point.REMIND_21 + '<br/>' +
                   'REMIND_26: ' + this.point.REMIND_26 + '<br/>' +
                   'REMIND_39: ' + this.point.REMIND_39 + '<br/>' +
                   'REMIND_54: ' + this.point.REMIND_54 + '<br/>' +
                   'REMIND_62: ' + this.point.REMIND_62 + '</b><br/>' +
                   '<br/><b>Data:</b><br/>' +
                   'Population: ' + this.point.pop + ' millions of persons<br/>' +
                   'GDP: ' + this.point.gdp + ' trillions of dollars<br/>' +
                   'GDP per Capita: ' + this.point.gdpPerCapita + ' thousand of dollars';
          }
        ")
    ) %>%
    hc_mapNavigation(enabled = TRUE) %>%
    #hc_exporting(enabled=TRUE) %>%
    hc_legend(enabled = F)
  
  #export_hc(out[["charts"]][[currRegion]][["WorldMap"]], filename = paste0(currRegion, ".svg"))
  
} 


################# Create carbon price map ###################### 

colorVector <- c(
  "bulk and diffuse carbon price" = "#588157", 
  "bulk carbon price"    = "#00b4d8",
  "diffuse carbon price" = "#415a77"
)

value_map <- setNames(seq_along(colorVector), names(colorVector))

mapData <- out[["data"]][["country"]][["Raw"]][["carbonPrice"]] %>%
  select(countryName, CountryCode, period, sector, value) %>%
  pivot_wider(names_from = sector, values_from = value) %>%
  group_by(period) %>%
  mutate(category = ifelse(bulk > 0 & diffuse >0, "bulk and diffuse carbon price",
                           ifelse(bulk > 0, "bulk carbon price",
                                  ifelse(diffuse > 0, "diffuse carbon price",
                                         NA)))) %>%
  mutate(color = colorVector[category],
         value = value_map[category],
         roundBulk = round(bulk,2),
         roundDiffuse = round(diffuse,2)) %>%
  ungroup()


data_classes <- imap(colorVector, ~list(from = .y, to = .y, name = .y, color = . )) %>%
  set_names(NULL) # Unname the list for highcharter

out[["charts"]][["carbonPriceMap"]][["all"]][["2025"]] <- highchart(type = "map") %>%
  hc_add_series_map(
    map = worldMapLowres,
    df = mapData %>% filter(period == 2025),
    joinBy = c("iso-a3", "CountryCode"), # Joins map's 'iso-a3' with our 'CountryCode'
    value = "value", # The numeric column we created
    name = "Status",
    allAreas = FALSE,
    borderWidth = 0.03,
    borderColor = "#FAFAFA",
    nullColor = "#f0f0f0"
  ) %>%
  hc_colorAxis(
    # Use dataClasses to create a categorical legend
    dataClasses = data_classes,
    # Set a color for countries with no data (value = 0)
    naColor = "#E0E0E0"
  ) %>%
  hc_legend(
    enabled = TRUE,
    layout = "horizontal",
    align = "center",
    verticalAlign = "bottom",
    itemStyle = list(
      fontSize = "20px"  # Set the desired font size
    )
  ) %>%
  hc_tooltip(
    useHTML = TRUE,
    formatter = JS("
          function() {
            return '<b>' + this.point.countryName + '</b><br/>' +
                   '<br/><b>Carbon Price:</b><br/>' +
                   'bulk:    ' + this.point.roundBulk + ' USD per t CO2 <br/>' +
                   'diffuse: ' + this.point.roundDiffuse  + ' USD per t CO2' ;
          }
        ")
  ) %>%
  hc_mapNavigation(enabled = TRUE)

max <- out[["data"]][["country"]][["Raw"]][["carbonPrice"]] %>% pull(value) %>% max()
max <- round(max / 10 + 2) * 10

out[["charts"]][["carbonPriceMap"]][["bulk"]][["2025"]] <- highchart(type = "map") %>%
  hc_add_series_map(
    map = worldMapLowres,
    df = mapData %>% select(countryName, CountryCode, period, bulk) %>% mutate(bulk = ifelse(bulk == 0, NA, round(bulk,2))),
    value = "bulk",                    # Name of the column with numerical values
    joinBy = c("iso-a3", "CountryCode"), # Link map by ISO code to your CountryCode
    allAreas = FALSE,
    borderWidth = 0.03,
    borderColor = "#FAFAFA",
    nullColor = "#f0f0f0"
  ) %>%
  hc_colorAxis(
    max = max,  # Set the maximum value of the legend range
    stops = list(
      list(0, "#BAC8E1"),    # Sets the color for the minimum value (0) to white
      list(1, "#01339b")   # Sets the color for the maximum value to #01339b
    )
  ) %>%
  hc_mapNavigation(enabled = TRUE)

out[["charts"]][["carbonPriceMap"]][["diffuse"]][["2025"]] <- highchart(type = "map") %>%
  hc_add_series_map(
    map = worldMapLowres,
    df = mapData %>% select(countryName, CountryCode, diffuse) %>% mutate(diffuse = ifelse(diffuse == 0, NA, round(diffuse,2))),
    value = "diffuse",                    # Name of the column with numerical values
    joinBy = c("iso-a3", "CountryCode"), # Link map by ISO code to your CountryCode
    allAreas = FALSE,
    borderWidth = 0.03,
    borderColor = "#FAFAFA",
    nullColor = "#f0f0f0"
  ) %>%
  hc_colorAxis(
    max = max,  # Set the maximum value of the legend range
    stops = list(
      list(0, "#BAC8E1"),    # Sets the color for the minimum value (0) to white
      list(1, "#01339b")   # Sets the color for the maximum value to #01339b
    )
  ) %>%
  hc_mapNavigation(enabled = TRUE)


df <- mapData %>%
  select(countryName, CountryCode, period, bulk, diffuse) %>%
  mutate(bulk = ifelse(bulk == 0, NA, round(bulk,2)),
         diffuse = ifelse(diffuse == 0, NA, round(diffuse,2))) %>%
  mutate(period = as.character(period)) %>%
  mutate(period = factor(period, levels = rev(sort(unique(period)))))

out[["charts"]][["carbonPriceMap"]][["bulk"]][["timeline"]] <- plot_ly(
  data = df %>% select(countryName, CountryCode, period, bulk) %>% mutate(bulk = ifelse(is.na(bulk), 0, bulk)),
  type = "choropleth",
  locations = ~CountryCode,
  z = ~bulk,
  text = ~countryName,
  frame = ~period,
  colorscale = list(
    c(0, "#E0E0E0"),      # missing (mapped from -1)
    c(0.00001, "#BAC8E1"),  # 0 → white
    c(1, "#01339b")        # max value → dark blue
  ),
  zmin = 0,       # constant min
  zmax = max,       # constant max
  colorbar = list(title = "Bulk"),
  marker = list(line = list(color = "#FAFAFA", width = 1))  # country borders
) %>%
  layout(
    geo = list(
      scope = "world",
      projection = list(type = "miller"),
      showframe = FALSE,
      showcoastlines = FALSE
      #coastlinecolor = "#FAFAFA"
    )
  )

out[["charts"]][["carbonPriceMap"]][["diffuse"]][["timeline"]] <- plot_ly(
  data = df %>% select(countryName, CountryCode, period, diffuse) %>% mutate(diffuse = ifelse(is.na(diffuse), 0, diffuse)),
  type = "choropleth",
  locations = ~CountryCode,
  z = ~diffuse,
  text = ~countryName,
  frame = ~period,
  colorscale = list(
    c(0, "#E0E0E0"),      # missing (mapped from -1)
    c(0.00001, "#BAC8E1"),  # 0 → white
    c(1, "#01339b")        # max value → dark blue
  ),
  zmin = 0,       # constant min
  zmax = max,       # constant max
  colorbar = list(title = "diffuse"),
  marker = list(line = list(color = "#FAFAFA", width = 1))  # country borders
) %>%
  layout(
    geo = list(
      scope = "world",
      projection = list(type = "miller"),
      showframe = FALSE,
      showcoastlines = FALSE
      #coastlinecolor = "#FAFAFA"
    )
  )


################# Create Charts ######################

print("Creating charts...")

source("./R/plotly2js.R")
theme_set(theme_minimal())

### Carbon price

print("Creating chart: Carbon Price ...")

carbonPrice <- out[["data"]][["country"]][["Raw"]][["carbonPrice"]] %>%
  group_by(countryName, sector) %>%
  filter(any(value != 0 & !is.na(value))) %>%
  ungroup() %>%
  select(countryName, REMIND_12, period, sector, value) %>%
  mutate(tooltip = paste0(
    "Country: ", countryName, "\n",
    "Price: ", ifelse(
      round(value, 0) == 0 & value != 0,
      round(value, 2),
      round(value, 0)
    ), " USD per t CO2\n",
    "Period: ", period),
    legendLabel = paste0(REMIND_12, " - ", countryName), 
    legendLabel = factor(legendLabel, levels = unique(legendLabel)),
    period = as.numeric(as.character(period))) %>%
  filter(value != 0)

color_map <- region_color %>% mutate(legendLabel = paste0(REMIND_12, " - ", countryName)) %>% select(legendLabel, color) %>% deframe()

# Split data by sector
plots_by_sector <- carbonPrice %>%
  group_by(sector) %>%
  group_split()

# Create a list of plotly traces for each sector
plots <- lapply(plots_by_sector, function(df) {
  # Add an `is_first_plot` flag to the data frame
  lastValue <- df %>%
    group_by(countryName) %>%
    slice_max(period, with_ties = FALSE) %>%
    ungroup()
  plot_ly(
    data = df,
    x = ~period,
    y = ~value,
    color = ~legendLabel,
    colors = color_map,
    type = 'scatter',
    mode = 'lines+text',
    text = ~ifelse(period %in% lastValue$period, countryName, NA),
    textposition = 'right',
    hoverinfo = 'text',
    hovertext = ~tooltip,
    # This is the key change to avoid duplicate legends
    showlegend = ifelse(unique(df$sector) == "bulk", TRUE, FALSE)
  ) %>%
    layout(
      yaxis = list(title = unique(df$sector)), # Set sector name as y-axis title
      xaxis = list(title = ""),                # Remove x-axis title
      title = list(text = "")                  # Optional: remove subplot title
    )
})

# The rest of your code remains the same
out[["charts"]][["carbonPrice"]] <- 
  subplot(plots, nrows = 2, shareX = TRUE, shareY = FALSE, titleY = TRUE) %>%
    layout(
      legend = list(
        orientation = "v",
        xanchor = "left",
        yanchor = "middle",   # CHANGE 1: Anchor the legend's middle
        x = 1.02,
        y = 0.5,              # CHANGE 2: Position at the vertical midpoint
        title = list(text = "")
      ),
      yaxis = list(range = c(0, max(carbonPrice %>% pull(value))))
    )

### Drivers

d <- list()
for(driver in out[["drivers"]][["drivers_df"]] %>% filter(exclude != "charts") %>% pull(Variable)){
  
  print(paste0("Creating region charts for: ", driver, "..."))
  
  for(currRegion in out[["mapping"]][["mappingsVector"]]){
    
    regGroups <- out[["data"]][[currRegion]][["latest"]] %>%
      select("REMIND_12", "region") %>%
      unique()
    
    if(currRegion == "REMIND_12"){
      breaks <- regGroups$REMIND_12
    } else {
      breaks <- regGroups %>% 
        mutate(REMIND_12 = if_else(duplicated(REMIND_12), NA_character_, "")) %>%
        pivot_longer(
          cols = everything(),
          values_to = "combined"
        ) %>%
        filter(!is.na(combined)) %>%
        slice(which(combined != "")[1] : tail(which(combined != ""), 1)) %>%
        pull(combined)
    }
    
    d[[currRegion]][[driver]][["latest"]] <- out[["data"]][[currRegion]][["latest"]] %>%
      mutate(currentDriver = !!sym(driver),
             tooltip = paste0(
               out[["drivers"]][["drivers_df"]] %>% filter(Variable == driver, exclude != "charts") %>% pull(DisplayName), ": ",
               round(currentDriver, digits = 2),
               " ", out$drivers$units[[driver]], "<br>", currRegion, " region code: ", region, "<br>Countries in region: ", countries))
    
    maxValue <- 0
    for(reg in out[["mapping"]][["mappingsVector"]]){
      maxValue <- max(maxValue, out[["data"]][[reg]][["latest"]] %>% mutate(currentDriver = !!sym(driver)) %>% pull(currentDriver) %>% max())
    }
    isPercentage <- grepl("%", out$drivers$units[driver])
    isIndexTo100 <- grepl("0-100", out$drivers$units[driver])
    if(isPercentage | isIndexTo100)
      maxValue <- max(maxValue, 100)
    
    category    <- out[["drivers"]][["drivers_df"]] %>% filter(Variable == driver, exclude != "charts") %>% pull(Category)
    displayName <- out[["drivers"]][["drivers_df"]] %>% filter(Variable == driver, exclude != "charts") %>% pull(DisplayName)
    
    out[["charts"]][[currRegion]][[driver]][["latest_bar"]] <- 
      ggplotly(
        ggplot(d[[currRegion]][[driver]][["latest"]], aes(x = region, fill=region, text=tooltip)) +
          geom_col(aes(y = currentDriver)) +
          scale_fill_manual(values=final_colors_df %>% deframe()) +
          #facet_wrap( ~ REMIND_12, scales = "free_x", nrow = 1) + 
          guides(fill="none") +
          labs(x=NULL, y=out$drivers$units[driver], title = paste0(displayName, " (", currRegion, ")")) +
          theme(
            axis.text.x = element_text(angle = 90, vjust = 0.5, hjust = 1)
          ) +
          scale_x_discrete(limits = breaks,labels = breaks) +
          expand_limits(y = maxValue) + 
          theme(plot.margin = margin(t=0, b=0, r=0, l = 0, unit = "cm")), 
        tooltip = "text"
      ) %>%
      layout(
        yaxis = list(range = c(0, maxValue))
      )
    
    d[[currRegion]][[driver]][["selected"]] <- out[["data"]][[currRegion]][["selected"]] %>%
      mutate(currentDriver = !!sym(driver)) %>%
      group_by(period) %>%
      filter(!if_all(c(currentDriver), is.na)) %>%
      ungroup() %>%
      select(region, period, countries, currentDriver) %>%
      mutate(tooltip = paste0(
               out[["drivers"]][["drivers_df"]] %>% filter(Variable == driver, exclude != "charts") %>% pull(DisplayName), ": ",
               round(currentDriver, digits = 2),
               " ", out$drivers$units[[driver]], "<br>", "Period: ", period, "<br>", currRegion, " region code: ", region, "<br>Countries in region: ", countries))
    
    maxValue <- 0
    for(reg in out[["mapping"]][["mappingsVector"]]){
      maxValue <- max(maxValue, out[["data"]][[reg]][["selected"]] %>% mutate(currentDriver = !!sym(driver)) %>% pull(currentDriver) %>% max(na.rm = TRUE))
    }
    isPercentage <- grepl("%", out$drivers$units[driver])
    isIndexTo100 <- grepl("0-100", out$drivers$units[driver])
    if(isPercentage | isIndexTo100)
      maxValue <- max(maxValue, 100)
    
    category    <- out[["drivers"]][["drivers_df"]] %>% filter(Variable == driver, exclude != "charts") %>% pull(Category)
    displayName <- out[["drivers"]][["drivers_df"]] %>% filter(Variable == driver, exclude != "charts") %>% pull(DisplayName)
    
    out[["charts"]][[currRegion]][[driver]][["selected_line"]] <- 
      ggplotly(
        ggplot(d[[currRegion]][[driver]][["selected"]], aes(x = period, color=region, text=tooltip, group = region)) +
          geom_line(aes(y = currentDriver)) +
          scale_color_manual(values=final_colors_df %>% deframe()) +
          guides(color="none") +
          labs(x=NULL, y=out$drivers$units[driver], title = paste0(displayName, " (", currRegion, ")")) +
          theme(
            axis.text.x = element_text(angle = 90, vjust = 0.5, hjust = 1)
          ) +
          expand_limits(y = maxValue) + 
          theme(plot.margin = margin(t=0, b=0, r=0, l = 0, unit = "cm")), 
        tooltip = "text"
      ) %>%
      layout(
        yaxis = list(range = c(0, maxValue))
      )
  }
}

# save maps for data availability
for(driver in out[["drivers"]][["drivers_df"]] %>% filter(exclude != "charts") %>% pull(Variable)){
  
  print(paste0("Creating region maps for: ", driver, "..."))
  
  mapData <- out[["data"]][["country"]][["selected"]] %>%
    mutate(currentDriver = !!sym(driver)) %>%
    select(countryName, CountryCode, period, currentDriver) %>%
    group_by(period) %>%
    filter(!if_all(c(currentDriver), is.na)) %>%
    ungroup() %>%
    mutate(currentDriver = ifelse(currentDriver == 0, 0.00001, currentDriver)) %>%
    mutate(currentDriver = ifelse(is.na(currentDriver), 0, currentDriver))
  
  max <- mapData %>% pull(currentDriver) %>% max()
  max <- round(max / 10 + 1) * 10
  
  out[["charts"]][[driver]][["availability_map"]] <- plot_ly(
    data = mapData,
    type = "choropleth",
    locations = ~CountryCode,
    z = ~currentDriver,
    text = ~countryName,
    frame = ~period,
    colorscale = list(
      c(0, "#de5842"),      # missing (mapped from -1)
      c(0.00001, "#188AF0"),  # 0 → white
      c(1, "#00D4B0")        # max value → dark blue
    ),
    zmin = 0,       # constant min
    zmax = max,       # constant max
    colorbar = list(title = driver)
  ) %>%
    layout(
      geo = list(
        scope = "world",
        projection = list(type = "miller"),
        showframe = FALSE,
        showcoastlines = FALSE
        #coastlinecolor = "#FAFAFA"
      )
    )
}

# create independent plotly scripts
for(driver in out[["drivers"]][["drivers_df"]] %>% filter(exclude != "charts") %>% pull(Variable)){
  print(paste0("Creating plotly js files for: ", driver, "..."))
  for(currRegion in out[["mapping"]][["mappingsVector"]]){
    category    <- out[["drivers"]][["drivers_df"]] %>% filter(Variable == driver, exclude != "charts") %>% pull(Category)
    displayName <- out[["drivers"]][["drivers_df"]] %>% filter(Variable == driver, exclude != "charts") %>% pull(DisplayName)
    idSafe  <- .safe_id(paste0(currRegion, "_", category, "_", displayName))
    plotly2js(
      out[["charts"]][[currRegion]][[driver]][["latest_bar"]],
      div.id = paste0(idSafe, "_bar"), output.html = FALSE, output.file = paste0(idSafe, "_bar.js"), 
      output.dir = "./output/drivers", output.url = paste0("./output/drivers/", idSafe, "_bar.html"))
    plotly2js(
      out[["charts"]][[currRegion]][[driver]][["selected_line"]],
      div.id = paste0(idSafe, "_line"), output.html = FALSE, output.file = paste0(idSafe, "_line.js"), 
      output.dir = "./output/drivers", output.url = paste0("./output/drivers/", idSafe, "_line.html"))
  }
}


# create independent plotly scripts
for(driver in out[["drivers"]][["drivers_df"]] %>% filter(exclude != "charts") %>% pull(Variable)){
  print(paste0("Creating map plotly js files for: ", driver, "..."))
  category    <- out[["drivers"]][["drivers_df"]] %>% filter(Variable == driver, exclude != "charts") %>% pull(Category)
  displayName <- out[["drivers"]][["drivers_df"]] %>% filter(Variable == driver, exclude != "charts") %>% pull(DisplayName)
  idSafe  <- .safe_id(paste0(category, "_", displayName, "_map"))
  plotly2js(
    out[["charts"]][[driver]][["availability_map"]],
    div.id = idSafe, output.html = FALSE, output.file = paste0(idSafe, ".js"), 
    output.dir = "./output/drivers", output.url = paste0("./output/drivers/", idSafe, ".html"))
}

print("Saving region charts to file: ./data/charts_region.rds")
saveRDS(out[["charts"]], file = "./data/charts_region.rds")


