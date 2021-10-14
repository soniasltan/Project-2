# SG Food Finder

Tired of wracking your brains over where to eat? Take the stress away by finding your next restaurant to visit on SG Food Finder.

## Description

This project allows users to find restaurants/food establishments in Singapore by searching through keywords, selecting the closest MRT station to search by, or selecting from pre-set options of popular cuisines on the home page. After inputting a search/making the relevant selection, users can also see more detailed restaurant information by clicking on the restaurant card on the results page. 

### Technical Used

JavaScript (React)
HTML/CSS
Material UI
react-google-/api

### Wireframes

![Home Page Wireframe] (https://user-images.githubusercontent.com/89738375/137369380-72c55cbe-24dd-4b1a-998f-c93064bff5cf.png)

![Search by Keyword Wireframe] (https://user-images.githubusercontent.com/89738375/137369700-c55d2507-77eb-4722-975e-f9eca1c9116f.png)

![Search by MRT Wireframe] (https://user-images.githubusercontent.com/89738375/137369689-70e955c2-7c16-4915-b7b6-3e2e5d8e0941.png)

![Modal Wireframe] (https://user-images.githubusercontent.com/89738375/137369682-2f03793e-11a3-4ba3-b452-ec1ef3c59d2e.png)

### User Stories

From the home page, users will be welcomed to the app, and given details on how to start their restaurant search.

```
User must be able to:

- Navigate to their desired search option (by keyword, closest MRT, or pre-set cuisine)
- If searching by keyword: 
-- User must be able to input their desired keyword and generate corresponding results on button submit
- If selecting closest MRT:
-- User must be able to select their desired MRT line, and the corresponding MRT station for search
- Once results are loaded through any of the search options, user should be able to:
-- Browse through restaurant results easily
-- View more restaurant details (e.g. description, address, contact info, cuisines, map location) by clicking on 'learn more' button
- User should also be able to navigate back to the home page at any time through the navigation bar

```

---

## Planning and Development Process

Started project planning by looking for interesting APIs with enough data to manipulate on a web app. Once the base TIH Food and Beverages API was selected, decided on interesting ways to show the data to create the overall project plans and wireframes. Broke down the development process to systematically tackle different features, while also trying to incorporate MUI styling along the way - switching between working on functionality and styling provided good variety, especially if stuck on problems with one. 

### Problem-Solving Strategy

Mainly looked through course materials and labs as the first point of reference while stuck on problems, and searched on Google for relevant documentation to try and troubleshoot the issue, or other similar examples faced by other people on StackOverflow for solutions that could be adapted to my issue. Failing that, looked instead for alternative solutions that could achieve the same/similar results. 

### Unsolved problems

Search by closest MRT is quite limited due to inconsistencies in the data available from the API (not all sources provide info to fill the nearestMRT value), so finding a way to continuously pull from the API until a minimum number of search results are met would be good - would however also need to account for the possibility that MRT stations in more remote areas may not ever generate results. 

## APIs Used

Singapore Tourism Board's Tourism Information Hub (TIH) Food and Beverages API - searchFoodBeveragesByKeyword (https://tih-dev.stb.gov.sg/content-api/apis/get/v1/food-beverages/search)
- Provided Singapore restaurant/food establishment data collected from various sources (e.g. STB, hungrygowhere)

Google Maps API (https://developers.google.com/maps/documentation/javascript/overview)
- Allowed for creation of customizable maps set with lat/long data - this was used with react-google-maps/api library to work with the data
---

## Acknowledgments
- The GA staff (Simon, Mike, and Justin) for their support and guidance
- Google and other sites like StackOverflow, W3Schools etc for examples and crowdsourced info on similar problems

---

 ## References
 - https://mui.com/
 - https://reactrouter.com/
 - https://reactjs.org/
 - https://www.npmjs.com/package/@react-google-maps/api
 - https://react-google-maps-api-docs.netlify.app/
 - https://stackoverflow.com
 - https://tih-dev.stb.gov.sg/content-api/apis
 - https://developers.google.com/maps/documentation/javascript/overview

