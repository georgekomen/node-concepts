/**
 * npm would mean:
 * 1.) the npm cli
 * 2.) or the npm registry
 * 
 * npm ls -g // lists all top level packages and there dependencies
 * npm ls -g --depth=0 // only top level without the dependencies
 * npm ll -g --depth=0 // shows the description and more info about the package
 * npm ls -g --depth=0 --json // parses the output to json so you could read the output from a program
 */

 /**
  * The bare minimum of a package.json file is:
  * 
  {
      "name": "name",
      "version": "1.0.0",
      "dependencies" : {
          "request": "2.79.0"
      },
      "devDependencies" : {
          "babel-cli": "2.0.1"
      },
      "optionalDependencies" : {
          "nodemon" : "2.20.2"
      }
  }
  */

  /**
   * Documenting dependencies can be done under three different categories:
   * 1.) npm i -S request // prod dependencies
   * 2.) npm i -D babel-cli // development dependencies
   * 3.) npm i -O nodemon // optional dependencies 
   */

   /**
    * Optional dependencies are recommended but not required,
    * the code should usually check them and only use them when found
    */

    /**
     * npm update // updates packages and also respect any specified version ranges e.g. =, ~, ^
     * npm i npm -g // updates npm itself
     * npm outdated -g // checks for outdated packages
     * npm config list | grep init // checks for configurable npm commands in this case once for init
     * npm config set save true // sets save to true
     * npm home lodash // opens homepage of a package
     * npm repo lodash // opens repo of a package
     * npm prune // cleans up installed packages that are not declared in the package.json file
     * npm xmas // prints an xmas tree
     */