module.exports = function(grunt) {
    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    //validate js files
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Grunfile.js', 'src/**/*.js']
    },
    //minify js files
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'public/dist/js/app.min.js': 'public/js/**/*.js'
        }
      }
    },
    //minify css files
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'public/dist/css/style.min.css': 'public/css/style.css'
        }
      }
    },
    //auto update
    watch: {
        stylesheets: { 
            files: ['**/*.css', '**/*.less', '!**/dist/**/*.css', '!**/dist/**/*.less'], 
            tasks: ['cssmin'] 
        },
        scripts: { 
            files: ['**/*.js', '!**/dist/**/*.js'], 
            tasks: ['jshint', 'uglify'] 
        } 
    }


    });
    
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
