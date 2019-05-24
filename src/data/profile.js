export default {
    "profile": {
        // Required Properties
        "name": "Your Name Here",
        "email": "Your Email Here",
        "avatarURL": "Profile Image",

        "description": `Edit the profile.json file found in src/data to fill 
                        out your information`,

        // Optional
        "github": "Enter Github Profile Link",
        "npm": "Enter NPM Profile Link",
        /*
            Enter a list of languages you have experience with
            For Example:
            "codeLiteracy": [
                "Java",
                "Javascript",
                "Dart",
                "Python",
                "HTML",
                "CSS"
            ]
        */
        "codeLiteracy": []
    },
    /*
        Used to load categories and setup project filtering
        In order for it to work define the categories you want to use in
        the below array. 

        When defining a project object enusure the "type" property matches
        one of the categories that you defined.

        Categories are also OPTIONAL, just set the "categories" property to
        an empty array.

        For Example:

        "categories": [
            "React",
            "Flutter",
            "Javascript",
        ]
    */
        "categories": [],
        /*
            Fill out your list of projects as shown by the placeholder project
            NOTE: Ensure the type property matches one of the categories defined 
            above if you want to use filters to sort and organise your projects.

            The project object has three parameters which are optional:
            "demo": Can be used to link to a live version of your project etc.
            "npm": Can be used to link to an npm package page
            "repo": Can be used to link to a github repo.

            More properties can be added here. Just make sure you modify the code
            that draws each project card so that it knows what propeties to use.
            The project card component can be found in  "src/components/ProjectCard.js"
        
            For Example: 
            {
                "type": "React",
                "title": "Open Trivia",

                "description": `A party quiz game built using React for the frontend paired with a node js 
                                server to handle the game logic.`,

                "repo": "Github Repo URL",
                "demo": "If site is live add a demo url ",
                "screenshot": "Screenshot URL"
            }
            
        */
        "projects": [
            {
                "type": "Enter Category Here",
                "title": "Project Name",

                "description": `Project Description`,

                "repo": "Repo Link",
                "demo": "Live Demo Link",
                "screenshot": "Link to Image"
            },
        ]
    }

