<div class="container">
    <h1>Application Form</h1>

    <form class="application" method="post">
        <div class="personalInfo">
            <div class="name">
                <label for="firstname">First name</label>
                <input class="text" id="firstname" type="text" required>

                <label for="surname">Surname</label>
                <input class="text last" id="surname" type="text" required>
            </div>
            <div class="contactInfo">
                <label for="phoneNumber">Phone number</label>
                <input class="text" id="phoneNumber" type="text" required>

                <label for="emailAddress">Email address</label>
                <input class="text last" id="emailAddress" type="text" required>
            </div>
        </div>
        <div class="pastExperience">
            <label for="education">Education</label>
            <input class="message" id="education" type="message" required>

            <label for="experience">Work experience</label>
            <input class="message" id="experience" type="message" required>

            <label for="projects">Past Projects</label>
            <input class="message" id="projects" type="message" required>

            <label for="skills">Technical skills</label>
            <input class="message" id="skills" type="message" required>
        </div>

        <label for="coverLetter">Cover Letter</label>
        <input class="file" id="coverLetter" type="file">

        <label for="references">References</label>
        <input class="message" id="references" type="message">

        <label for="additionInfo">Additional Information</label>
        <input class="message" id="additonalInfo" type="message">

        <div class="submit">
            <button type="submit">Submit</button>
        </div>
    </form>
</div>

<style>
    .container{
        border-radius: 1em;
        background-color: #ffffff;
        padding: 1em 3em;
    }
    h1{
        padding-bottom: .3em;
        padding-left: .4em;
        border-bottom: .1em solid #bebebe;
    }
    .application{
        margin: 2em;
        border-radius: 1em;
        border: .1em solid #bebebe;
        padding: 1em;
    }
    .name,.contactInfo{
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto 2em;
        margin-bottom: 1em;
    }
    label{
        margin-bottom: .3em;
    }
    input{
        margin-bottom: 1em;
        height: 100%;
    }
    .name > label,.contactInfo > label{
        grid-row: 1;
    }
    .name >input,.contactInfo >input {
        grid-row: 2;
        margin-right: .5em;
    }
    .message {
        min-height: 3em;
    }
    .personalInfo, .application, .pastExperience{
        flex-direction: column;
        display: flex;
    }
    .file{
        font-size: 1em;
    }
    .last {
        margin-right: 0px !important
    }
    .submit {
        display: flex;
        justify-content: center;
    }
    .submit > button {
        background-color: #020096;
        padding: 1em 3em;
        text-decoration: none;
        color: inherit;
        border-radius: 1em;
        border: .1em solid #000000;
        color: #ffffff;
    }
    .submit button:hover {
        background-color: #beb8fa;
        color:#000000;
    }
</style>