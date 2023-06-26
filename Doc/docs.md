# Unit 15 Assignment 2

- [Unit 15 Assignment 2](#unit-15-assignment-2)
  - [Requirements](#requirements)
    - [User Requirements](#user-requirements)
  - [Tooling](#tooling)
  - [Plans](#plans)
    - [Test planning](#test-planning)
  - [Design](#design)
    - [Colour Schemes](#colour-schemes)
    - [Typography](#typography)
    - [Navigation](#navigation)
    - [Designs](#designs)
    - [Design Justification](#design-justification)
  - [Implementation](#implementation)
    - [Change Log](#change-log)
    - [Justification of Design Changes](#justification-of-design-changes)
  - [Tests](#tests)
    - [Validation Reports](#validation-reports)
    - [Test Results](#test-results)
      - [Performance](#performance)
    - [Rectification of Errors](#rectification-of-errors)
    - [Outstanding Issues](#outstanding-issues)
    - [User Feedback](#user-feedback)
  - [Optimisation](#optimisation)
    - [Based on validation reports](#based-on-validation-reports)
      - [Fixes](#fixes)
    - [Based on performance reports](#based-on-performance-reports)
  - [Review](#review)
    - [Response to Feedback](#response-to-feedback)

-----------------------------------------------------------------------------------------------------------

## Requirements

### User Requirements

- A profile of the Company itself
- Profiles of existing trainee web developers
- Job specifications and required qualifications
- Online application form
- Links to web development courses
- User-Friendly Design
- Compatibility and Performance
- Usability

-----------------------------------------------------------------------------------------------------------

## Tooling

I selected Svelte Kit as the framework for building this website due to my familiarity with it and its ability to streamline development by enabling the creation of reusable components.

-----------------------------------------------------------------------------------------------------------

## Plans

### Test planning

- Test to make sure everything is rendering correctly
- Test to make sure the form works and something happens when the submit button is pressed
- Test to make sure all links work and link to the correct websites
- Test compatibility with multiple browsers
- Test compatibility with both desktop and mobile

-----------------------------------------------------------------------------------------------------------

## Design

### Colour Schemes

I will be using the following colours for the website:

<div style="display:flex; flex-direction:row;">
  <div style="display:flex; flex-direction:column;">
    <p>#0000FF</p>
    <img src="../assets/0000FF.png" alt="#0000FF" style="height: 10em;border: 1px black solid;">
  </div>
  <div style="display:flex; flex-direction:column;">
    <p>#809FFF</p>
    <img src="../assets/809FFF.png" alt="#809FFF" style="height: 10em;border: 1px black solid;">
  </div>
  <div style="display:flex; flex-direction:column;">
    <p>#001966</p>
    <img src="../assets/001966.png" alt="#001966" style="height: 10em;border: 1px black solid;">
  </div>
  <div style="display:flex; flex-direction:column;">
    <p>#BFCFFF</p>
    <img src="../assets/BFCFFF.png" alt="#BFCFFF" style="height: 10em;border: 1px black solid;">
  </div>
  <div style="display:flex; flex-direction:column;">
    <p>#FFFFFF</p>
    <img src="../assets/FFFFFF.png" alt="#FFFFFF" style="height: 10em;border: 1px black solid;">
  </div>
</div>

### Typography

I have selected the 'Roboto' font for its appealing visual aesthetic and excellent readability. To ensure a responsive and adaptable design, the font sizes on the webpage will dynamically adjust based on the device it is viewed on. The base font size will be set to 1dvw (dynamic viewport width), and other pages will utilize em values to appropriately scale their fonts. This approach enables the webpage to be flexible, automatically adjusting the font sizes for both larger and smaller screens, providing an optimal reading experience across devices.

### Navigation

Navigation will be handled with a navbar located at the top of the page. The navbar will have four tabs: Home, About Us, Our Team, and Join Us. The Home page will be the initial landing page for users when they open the website. This page may feature imagery and information related to the company's activities. The About Us page will provide information about the company's history. The Our Team page will showcase details about the current team members, including their images, names, background information, and qualifications. The Join Us page will include a job listing, a link to an online application form, and additional links to various web development courses.

### Designs

<div style="display:flex; flex-direction:column;">
  <p>Design 1</p>
  <div style="display:flex;flex-direction:row;">
    <img src="../assets/Design%201%20Home%20Page.png" alt="Design 1 Home Page" style="height: 10em;border: 1px black solid;">
  </div>  
</div>
<br>
<div style="display:flex; flex-direction:column;">
  <p>Design 2</p>
  <div style="display:flex;flex-direction:row;">
    <img src="../assets/Design%202%20Home.png" alt="Design 2 Home Page" style="height: 10em;border: 1px black solid;">
  </div>  
</div>
<br>
<div style="display:flex; flex-direction:column;">
  <p>Design 3</p>
  <div style="display:flex;flex-direction:row;">
    <img src="../assets/Design%203%20Home.png" alt="Design 3 Home Page" style="height: 10em;border: 1px black solid;">
    <img src="../assets/Design%203%20about%20us.png" alt="Design 3 Home Page" style="height: 10em;border: 1px black solid;">
    <img src="../assets/Design%203%20Our%20team.png" alt="Design 3 Home Page" style="height: 10em;border: 1px black solid;">
  </div>  
</div>

### Design Justification

I have decided to not include any measurements on the designs. This is because I plan to use em values to scale everything on the website. This allows me to easily make the page responsive.

After careful consideration, I have decided to select design 3 as the final design for the website. This particular design optimizes the use of space on the website, while still maintaining a clean and uncluttered appearance that is easy for users to navigate. In contrast, designs 1 and 2 did not fully utilize the available space and tended to cluster elements towards the centre, which could have been overwhelming for users.

The chosen design successfully fulfils the client's requirements by incorporating an "About Us" page for the company profile, an "Our Team" page displaying profiles of trainee web developers, and a "Join Us" page that presents job specifications, qualifications, and an online application form. Furthermore, the design includes links to web development courses, enhancing the user experience. The interface is user-friendly, ensuring ease of use for different types of users. It is also compatible with various devices and exhibits optimal performance.

-----------------------------------------------------------------------------------------------------------

## Implementation

### Change Log

Change Log tracked using GitHub issues

[Link to GitHub Issue page](https://github.com/CompIsle/U15A2-Charlie-Smith/issues?q=is%3Aissue+is%3Aclosed)

### Justification of Design Changes

The primary design alteration I implemented was a minor redesign to align with the new colour scheme and updated designs.

-----------------------------------------------------------------------------------------------------------

## Tests

### Validation Reports

- Validation report for HTML: [HTML validation report](https://validator.w3.org/nu/?doc=https%3A%2F%2Funit-15-assignment-2.pages.dev%2F)
- Validation report for CSS: [CSS validation report](http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Funit-15-assignment-2.pages.dev%2F&usermedium=all&vextwarning=&warning=1)

### Test Results

| Test ID | What needs to happen for test | Expected behaviour | Actual behaviour | Pass |
|---------|-------------------------------|-------------------|-----------------|------|
|1| Test navigation links | When clicking on the Home tab in the navbar, the user should be taken to the Home page | User is redirected to the Home page | ✔️ |
|2| Test form submission | Fill out the online application form and click the Submit button | Form is submitted | ✔️ |
|3| Test compatibility with different browsers | Open the website in Chrome, Firefox and Edge | Website displays correctly in all three browsers | ✔️ |
|4| Test mobile responsiveness | View the website on a mobile device with different screen sizes | Website displays correctly on smaller screens | ✔️ |

#### Performance

- [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-unit-15-assignment-2-pages-dev/yda0clw1mc?form_factor=desktop)
- [GTmetrix](../assets/GTmetrix-report-unit-15-assignment-2.pages.dev-20230529T125959-e0wlVJw2.pdf)

### Rectification of Errors

Extensive testing has revealed no significant errors.

### Outstanding Issues

One significant outstanding issue pertains to the performance of the website. Upon loading, the website retrieves its font from Google Fonts. However, this operation is categorized as a render-blocking resource, resulting in suboptimal load times. Addressing this issue presents a challenge since the webpage relies heavily on the specific font for its visual presentation and readability.

### User Feedback

Devon Wyatt:

"It’s a good website. There were only 2 possible things that could have been improved. One is that on the Our team page is that one of the profiles is out of line with the others. And the other possible improvement is that on mobile your website writing is too small to read. I will send screenshots of the possible improvements found."

-----------------------------------------------------------------------------------------------------------

## Optimisation 

### Based on validation reports

The CSS validation report found no errors on the webpage. However, the HTML report identified four errors: 'Start tag body seen but an element of the same type was already open,' 'End tag for body seen, but there were unclosed elements,' 'Unclosed element div,' and 'Stray start tag script.' It is important to note that most of these errors were caused by my use of SvelteKit to design my webpage.

#### Fixes

I resolved these errors by making the following changes:

In the layout.svelte file, I replaced the body element with the div element and moved the styling for the body to the app.html file.
By making these adjustments, I successfully resolved all the errors identified in the HTML report."

### Based on performance reports

Within the performance reports, there were only two areas in which my website can be improved to enhance its performance: 'Eliminate render-blocking resources' and 'Image elements do not have explicit width and height.' Unfortunately, the 'Eliminate render-blocking resources' issue cannot be resolved at the moment, as the render-blocking resource is the font used for the website. Similarly, the 'Image elements do not have explicit width and height' problem cannot be addressed due to the inherent nature of how the web handles responsiveness.

-----------------------------------------------------------------------------------------------------------

## Review

### Response to Feedback

Both of the improvements mentioned in the feedback have been successfully implemented. The first improvement addressed an issue caused by a bug that prevented employee images from loading, resulting in misaligned text. This issue has been resolved, ensuring that the images are now properly displayed. The second improvement involved the implementation of a mobile website, which was previously missing. By introducing a dedicated mobile version, the website now offers enhanced user experience with larger text that is optimized for mobile devices.

<style>
  h1,h2,h3,h4,h5,h6{
    font-weight: bold;
  }
</style>