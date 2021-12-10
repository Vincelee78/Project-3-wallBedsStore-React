## TCG-Project-3-React-Space Saving Furniture Systems
The name of this project is called React-Space Saving Furniture Systems and is an eCommerce platform for selling space-saving wall beds. The project is aimed at home owners, backbacker hotels, student domoritories, office owners who have a relatively small place or users who want more space in their rooms. This will solve these consumer needs by also freeing up more space in their bedrooms or study rooms so that they have place for more items in their rooms or to allow for better cleaning and maintenance of their rooms.

## My goal/motivation for creating this project:
I have observed how small and compact flats are here.  Built-to-order (BTO) flats are getting more compact with each project. Thus, the need for effective usage of space is in demand. People are finding ways to minimize space usage when in reality, the solution is to maximize what you have. How? By introducing space saving furniture to users to purchase.

## Context: 
Space-saving furniture is designed to make full use of limited spaces by incorporating folding mechanisms to keep furniture such as bed in stowed position when not in use. The space saving beds can also be designed to add on other furniture function such as desk or sitting sofa to form a multi-functional furniture system. The site provides users the option to purchase these beds as well as dual and multi-functional wall beds with desk or sofa, bunk beds, and many more. This concept allows users to maximize the space they already have without the worry of purchasing separate bulky furniture, shelves, or tables and taking up a lot of space.
Current and future homeowners should consider purchasing space-saving furniture as a cost-effective method and an efficient way to maximize their living space.

![Space-Saving Furniture Systems](https://res.cloudinary.com/dtrwtlldr/image/upload/v1639098464/SSFS_home_page_final_ijnxgo.jpg "Space-Saving Furniture Systems")

## Index:
1. [Project Design](#project-design)
2. Deployment
3. Website Features and Navigation
4. Technologies Used
5. Design
6. Testing
7. Acknowledgements
 
## 1. Project Design
There are two parts to this project. The front-end of this project is done with React.js and the back-end of this project is done with Node.js, mySQL database and Express.js for which the code can be found [here.](https://github.com/Vincelee78/Project-3-Express-mySQL)

The schema diagram for mySQL database can be found [here.](https://res.cloudinary.com/dtrwtlldr/image/upload/v1639099995/mySQL_relationship_final_tq5zw7.jpg)

### Structure:
The organization of the site content will contain the landing page with the navigation bar and site’s logo on the top. The landing page will show the hero image of the open and closed image of a featured wall bed, and clicking on 'shop all beds' will bring the user to another page where it show the different wall bed categories and their respective images. In this page, filtering the wall beds is possible using a search feature. Clicking on the wall beds' categories will show their respective options, their description and the add to cart feature.
* The total unit price and subtotal will be shown when the user selects the wall bed he/she wants to purchase. This website caters to the local residents in Singapore so there are no additional shipping costs as it is included in the unit cost price.
*	Refund is allowed when the furniture arrives in a damaged condition. User has 3 days to file a claim after they receive the bed and provide photo evidence under at the bottom of the landing page where our contact details, location and email can be found.
*	The database will store the user's shipping and order details and will be shown in their user account in the front end.
*	The order status will also be shown in the user account.

### (i) Skeleton:
### Layout:
*	The user login, logout and register is at the top right of the screen for easy reference.
*	Checking out button will be done in the shopping cart. It is located on the top right of the navigation bar where it can be seen easily as a blue shopping cart icon. Total and subtotal price will be shown in the shopping cart, including shipping.
*	Search function will be in the catalogue page of the site with the image and name of the wall beds.
*	In the navigation bar at the top, will be home, catalogue, about and account pages. Within the 'home' option of the navigation bar, it will have a dropdown bar consisting of the 'home page' and 'directions' option. Clicking on the 'directions' option will open a map showing the marker with the location of our showroom and an marker of the nearest MRT station to our showroom.
*	The company logo is at the left of the navigation bar at the top.

### (ii) Surface:
### Colours:
White background with black and dark brown fonts in the landing page for better contrast and easy visualization. 
Usage of [coolors](https://coolors.co/) to select my colour scheme.
Images used will not be too bright colours as I am using a white background.
Usage of traditional fonts such as 'Stencil Std, Fantasy' and 'Times New Roman, Times, serif'.
Adequate white spaces between characters and lines in description for easy reading.


## 2. Deployment
This project is deployed on Netlify. The website can be accessed at the following link:

https://www

The backend express.js uses tailwindcss, bootstrap and css. The react.js frontend uses bootstrap and css. The tailwindcss is complied using the inline css feature under the <style> tag in the base.hbs of the backend express.js.
 

## 3. Website Features and Navigation
 The website is free to browse for everyone, however user accounts need to be created to access cart and do checkout. The features of this website are listed below:
 
 * Product Listing, searching, sorting, filtering and browsing.
 The website supports searching, sorting, filtering and browsing products. The products are listed in a card graphical view. It can be filtered by their different category options, maximum and minimum cost, name, etc.
 
 * Cart, Checkout, Order Details
 A logged in user can add products to cart, checkout and view their order details.

 * Directions
 There is directions page on the website. The user can locate the location of the company's showroom on the marker in the map and the nearest mrt station to our showroom.
 
 * About
 There is an about page where it will provide background information to the user about space-saving furniture and our company.
 
### 3(i) Navigation
The following tree shows a general direction in which one might navigate through the website:
 
├── Home Page
│   ├── Directions
├── Login
│   ├── Logout
│   └── Register
├── Main
│   ├── Product Graphical View
│   └── Product Detailed  View
│   └── Cart
│   └── Stripe Checkout
├── About Us
├── User Account

 
## 4. Technologies Used

* [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
<br> This project uses HTML5 to structure the content and to insert buttons and images.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
<br> This project uses CSS to add visual colors, adjust the size of the features and also positioning and animation of the features, and ensure it is mobile responsive.
* [React 17.0.2](https://reactjs.org/)
<br> This project uses React as a frontend application for building user interfaces.
* [Bootstrap 5.1.3](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
<br> This project uses Bootstrap to structure the layout of the website such as my Navtab and added features such as Carousel. It is also used in positioning the text and features.
* [React Bootstrap](https://react-bootstrap.github.io/)
<br> This project uses React Bootstrap for added features such as the Nav tabs and allow the displaying of the data in each individual tab by tweaking the handleSelect code in the original code. I also used it for the Modal box, Accordion display,  Overlay display and the Tooltip display for the User favourite rating feature.
* [date-fns](https://date-fns.org/)
<br> This project uses date-fns toolset to change the datetime format in mongoDB to a more readable date format in React.
* [FontAwesome 5.15.4](https://fontawesome.com/v5/changelog/latest)
<br> This project uses FontAwesome to add custom icons such as the heart icons for the ratings feature of the website.
* [Axios 0.21.1](https://www.npmjs.com/package/axios/v/0.21.1) 
<br> This project uses the axios plugin for Promise based HTTP client for the browser and make requests to an API, return data from the API.
* [MongoDB](https://www.mongodb.com/)
<br> This project uses MongoDB to store documents in the collections which the user has uploaded in React. 
* [ExpressJS 4.17.1](https://expressjs.com/)
<br> This project uses ExpressJS to provide methods to specify what function is called for a particular HTTP verb ( GET , POST , PUT , DELETE) and URL pattern and to retrieve data from MongoDB and send them to React or vice versa.

### 5. Testing
| Test Case Number| Test Case Description| Results|
| ------ | ------ | ------ |
| 1 | On the landing page, you should see a Carousel feature with a featured case below it. Clicking on the accordion 'Information on Featured Case' will collapse it. Clicking on the other accordions will pan out an information box explaining information based on the title on the accordion  | Pass |
| 2 | On the landing page, clicking on the green edit case button under the featured case will open a box containing all the fields(which have been pre-filled) to be edited. Clicking on the 'confirm' button will update the featured case accordingly to the fields that were filled up | Pass |
| 3 | On the landing page, clicking on the patient ID (highlighted blue) or radiologist ID field value (highlighted blue) in the featured case will bring up a modal box to show the patient details, ID: P01, Andrew Ang etc or the radiologist details R03, Dr Rachael Ang and her details respectively | Pass |
| 4 | On the landing page, clicking on 2nd tab of the NavTab 'Create New Report' will render a form to be filled up. Filling up all the form fields will enable the create report button to be active. Clicking on the create report button next will will show a successful message and add a new report to the report page.  The new report will be shown as the last report in the report page of the Navbar | Pass |
| 5 | On the landing page, clicking on 3rd tab of the NavTab 'Add Case' will render a form to be filled up. Filling up all the form fields will enable the Add button to be active. Clicking on the add button next will show a successful message and add a new case to the all cases page. The new case will be shown as the last case in the All Cases page of the Navbar | Pass |
| 6 | On the landing page, clicking on 4th tab of the NavTab 'Add Radiologist' will render a form to be filled up. Filling up all the form fields will enable the Add new radiologist button to be active. Clicking on the add new radiologist button next will show a successful message and add a radiologist to the radiologist information page.The new radiologist details will be shown as the last row in the table in the radiologist information page of the Navbar | Pass |
| 7 | On the landing page, clicking on 5th tab of the NavTab 'Search Cases' will show a text box will a search icon. Entering the keyword 'fracture' will display 2 cases. The first case is a CT with 2 sternal body fractures and the 2nd case is an ultrasound case with left chest wall trauma and pneumothorax diagnosis | Pass |
| 8 | From the landing page, clicking on the 'About' bar in the NavBar will show a new page which displays background information and the aims and objectives of the website | Pass |
| 9 | From the About page, clicking on the 'Reports' bar in the NavBar will show a new page which displays 2 reports that were already in the database  | Pass |
| 10 | In the reports page, clicking on heart icons will allow the hearts to be highlighted for a rating | Pass |
| 11 | In the reports page, clicking on the red delete button on the bottom of each report will delete the report | Pass |
| 12 | From the reports page, clicking on the 'All Cases' bar in the NavBar will show a new page which displays 5 cases that were already in the database. Clicking on the accordion just above the Carousel will collapse the Carousel feature to allow better scrolling to the cases below | Pass |
| 13 | In the all cases page, clicking on the radio button at the top 'Patients younger than 21' will filter the cases by the criteria and show 1 case which diagnosis is a bullet in the rectum X-ray. Clicking on the other radio buttons will filter to the criteria accordingly | Pass |
| 14 | In the all cases page, clicking on the green edit button on the left of each case image will display a box with the fields(pre-filled) to be edited. Clicking on the confirm button next will update that case fields. Clicking on the red delete button above the edit button will delete that case | Pass  |
| 15 | In the all cases page, clicking on heart icons under the radiological image of each case will highlight the heart icons accordingly. Clicking on 4 hearts will favourite the case as 4 stars | Pass  |
| 16 | In the all cases page, clicking on the radiologist ID field value (highlighted blue) in the first case(MRI, prostate cancer) will bring up a modal box showing the radiologist R02, Dr John Wong and his details | Pass |
| 17 | From the all cases page, clicking on the 'Radiologist Information' bar in the NavBar will show a new page which displays 4 radiologist details that were already in the database  | Pass |
| 18 | After testing the add, edit and delete buttons for the reports, featured case, all cases, radiologist information and all the functions above, I checked the express server terminal in my express/mongoDB gitpod to see whether there are any errors. There were no errors in my express server terminal  | Pass |


#### (i) Mobile Responsiveness
- The test results can be found [here](https://search.google.com/test/mobile-friendly/result?id=84WEjVlEU9HRktwiAVtipg). 
- Test results were done on 3 mobile devices
1. [Iphone SE 2020](https://drive.google.com/file/d/1B06e0L3hfUrrEeajgfzpnTTRQsVkN9NI/view?usp=sharing)
2. [Iphone SE 2020](https://drive.google.com/file/d/1jlnrQgIrxTtGkpZ26uqcvULjYThx2won/view?usp=sharing)
3. [Iphone7](https://drive.google.com/file/d/17JSsa8ndR0jqm9YPSC4i6wlzV6iq9ueP/view?usp=sharing)
4. [Iphone7](https://drive.google.com/file/d/1i-CZn-8A3UUucZ7DTT-Ph3HM76dxyXoy/view?usp=sharing)
5. [Oppo R17 pro](https://drive.google.com/file/d/1lqkfbubAylYw5RjCdXd7EkBEhw-S28CS/view?usp=sharing)
6. [Oppo R17 pro](https://drive.google.com/file/d/1tOywxp3MgakxsQFZ-tI2SM-UOcrHR4CN/view?usp=sharing)
- The web application is mobile responsive.

### 6. Credits and Acknowledgement
- Credits to https://radiopaedia.org/encyclopaedia/cases/all for the radiological images and radiology data.
- Credits to https://www.maxester.com/blog/2019/02/27/simple-5-star-rating-with-csshover/ for the template code for the heart ratings(with my own custom tweaking).
- Credits to 
1. [Elsevier](https://www.elsevier.com/__data/assets/image/0012/1022133/Radiology-at-a-Crossroads_Five-converging-trends-reshaping-the-need-for-diagnostic-decision-support.JPG)
2. https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900164/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpg
3. https://thumbnail.imgbin.com/21/9/7/imgbin-chevron-corporation-computer-icons-paper-down-arrow-zsjsUFtqHLkphdGeCb1rYSBxa_t.jpg
4. https://filmdaily.co/wp-content/uploads/2021/06/rad-01.jpg
5. https://i0.wp.com/swdic.com/wp-content/uploads/2020/08/Brain-MRI-min.jpg?fit=1973%2C963&ssl=1
6. https://image.shutterstock.com/image-photo/brain-ct-scan-head-computed-260nw-1390517843.jpg
7. https://www.philips.com/c-dam/b2bhc/master/Specialties/radiology/ivp-page/media-asset-IVP-radiology-workflows-700.jpg
8. https://d1hj7uubji8r0c.cloudfront.net/sites/radiology/files/styles/max_width_full/public/images/2020-02/pcir_cover_photos_hi_res_resize.jpg?itok=VHDBxu-X
9. https://www.carestream.com/blog/wp-content/uploads/2020/01/future_of_diag_imaging_fb_1_2020_en.jpg
10. https://flyclipart.com/radiology-clipart-radiology-clipart-211360
for their images, icons and logos
