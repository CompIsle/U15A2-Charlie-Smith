# Unit 15 Assignment 2

- [Unit 15 Assignment 2](#unit-15-assignment-2)
  - [Requirements](#requirements)
    - [User Requirements](#user-requirements)
    - [Tooling](#tooling)
  - [Plans](#plans)
    - [Test planning](#test-planning)
  - [Design](#design)
    - [Wireframes/Storyboards](#wireframesstoryboards)
    - [Colour Schemes](#colour-schemes)
    - [Typography](#typography)
    - [Navigation](#navigation)
    - [Designs](#designs)
    - [Design Justification](#design-justification)
    - [Sources](#sources)
  - [Implementation](#implementation)
    - [Change Log](#change-log)
    - [Justification of Design Changes](#justification-of-design-changes)
  - [Test](#test)
    - [Validation Reports](#validation-reports)
    - [Test Results](#test-results)
      - [Functionality](#functionality)
      - [Performance](#performance)
    - [Rectification of Errors](#rectification-of-errors)
    - [Outstanding Issues](#outstanding-issues)
    - [User Feedback](#user-feedback)
  - [Review](#review)
    - [Response to Feedback](#response-to-feedback)
    - [Evaluation](#evaluation)
  - [References](#references)

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

### Tooling

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

### Wireframes/Storyboards

### Colour Schemes

I will be using these colours for the website:

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

After careful consideration, I have decided to select design 3 as the final design for the website. This particular design optimizes the use of space on the website, while still maintaining a clean and uncluttered appearance that is easy for users to navigate. In contrast, designs 1 and 2 did not fully utilize the available space and tended to cluster elements towards the center, which could have been overwhelming for users.

### Sources

-----------------------------------------------------------------------------------------------------------

## Implementation

### Change Log

<!-- Use Issue tracking in GitHub -->

Change Log tracked using Github issues

[Link to GitHub Issue page](https://github.com/CharlieS-432737/Unit-15-Assignment-2/issues)

### Justification of Design Changes

-----------------------------------------------------------------------------------------------------------

## Test

### Validation Reports
<!--
- Validation report for HTML: [HTML validation report](https://validator.w3.org/)
- Validation report for CSS: [CSS validation report](https://jigsaw.w3.org/css-validator/)
-->
### Test Results

| Test ID | What needs to happen for test | Expected behaviour | Actual behaviour | Pass |
|---------|-------------------------------|-------------------|-----------------|------|
|1| Test navigation links | When clicking on the Home tab in the navbar, the user should be taken to the Home page | User is redirected to the Home page | ✔️ |
|2| Test form submission | Fill out the online application form and click the Submit button | Form is submitted | ✔️ |
|3| Test compatibility with different browsers | Open the website in Chrome, Firefox and Edge | Website displays correctly in all three browsers | ✔️ |
|4| Test mobile responsiveness | View the website on a mobile device with different screen sizes |  |  |

#### Functionality
<!--
- Test the functionality of interactive elements such as buttons, forms, and links.
- Verify that all pages and sections load properly.
- Test any dynamic features, such as image sliders or interactive elements.
-->
#### Performance
<!--
- Measure the website's loading speed using tools like PageSpeed Insights or Lighthouse.
- Evaluate the website's performance on different devices and network conditions.
- Assess the website's resource usage, such as file sizes and caching.
-->
### Rectification of Errors
<!--
- Document any errors or issues encountered during testing.
- Provide steps taken to rectify those errors.
- Specify any remaining unresolved issues or errors.
-->
### Outstanding Issues
<!--
- List any unresolved issues or errors that need further attention or fixing.
-->
### User Feedback
<!--
- Collect user feedback on the website's usability, design, and functionality.
- Include verbatim comments from users.
- Provide a summary of the feedback received.
-->
-----------------------------------------------------------------------------------------------------------

## Review

### Response to Feedback

### Evaluation

-----------------------------------------------------------------------------------------------------------

## References

-----------------------------------------------------------------------------------------------------------
