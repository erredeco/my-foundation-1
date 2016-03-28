// https://www.npmjs.com/package/grunt-dev-update
module.exports = {
    main: {
        options: {
            updateType: 'prompt', //prompt to update every outdated packages 
            reportUpdated: false, //don't report up-to-date packages 
            packages: {
                devDependencies: true, //only check for devDependencies 
                dependencies: false
            }
        }
    }

};