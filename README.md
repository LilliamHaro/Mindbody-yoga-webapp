# Mindbody-yoga-webapp
Mindbody Urban Yoga webpage

## Project requirements:
1. Clone this repo (or download the zip archive) to get started.
2. Your page should closely resemble [business_overview.png](business_overview.png) on the page load:
    
    <img src="business_overview.png" alt="alt text" width="250"/>
3. Your page should closely resemble [business_overview_expanded.png](business_overview_expanded.png) when the "more" links are clicked:
    
    <img src="business_overview_expanded.png" alt="alt text" width="250"/>
4. The pencil icon should change color on hover.
5. The "New Program" button should open a form to add a new program. This is where you get some UX/design freedom, but the form should have the following fields:
    - Program Type (single select)
        + Count Series
        + Time Series
        + Membership
    - Program Name (input)
    - Allow online scheduling (boolean)
    - Default capacity (input)
    - Tabs this program is on (multi-select)
        + Classes
        + Appointments
        + Workshops
        + Outside
        + Inside
        + Gym
6. You may use any front-end libraries you wish to complete the task. The Internet is your oyster!
7. Use the following API calls to populate any or all parts of page. The data returned may not reflect the amounts in the business_overview.png image.      Assume that the data from these calls is correct.
    - Programs (GET: https://api.myjson.com/bins/5bdb3)
    - Pricing Options (GET: https://api.myjson.com/bins/47axv)

## Bonus Points
You may choose to make the application responsive.
