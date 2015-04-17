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
          'dist/js/app.min.js': 'public/js/**/*.js'
        }
      }
    },
    //preprocess sass files
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'public/css/sass/',
                src: ['*.scss'],
                dest: 'public/css',
                ext: '.css'
            }]
        }
    },
    //minify css files
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/style.min.css': 'public/css/**/*.css'
        }
      }
    },
    //preprocess index.html
    targethtml: {
        dist: {
            files: {
                'public/views/index.html': 'public/views/index.src.html'
            }
        },
        dev: {
            files: {
                'public/views/index.html': 'public/views/index.src.html'
            }
        }
    },
    //create dist package
    compress: {
        main: {
            options: {
                archive: 'dist/<%= pkg.name %>V<%= pkg.version %>.tar.gz'
            },
            files: [
                {
                    expand: true,
                    cwd: '.',
                    src: [
                        'dist/**/*.js',
                        'dist/**/*.css',
                        'public/views/**', 
                        'config/**', 
                        'app/**',
                        '.bowerrc',
                        'bower.json',
                        'package.json',
                        'server.js'
                        ],
                    dest: '',
                }
            ]
        }
    },
    //nodemon
    nodemon: {
        dev: {
            script: './server.js'
        }
    }


    });
    
    grunt.registerTask('default', ['targethtml:dev', 'nodemon']);
    grunt.registerTask('build', ['jshint', 'uglify', 'sass', 'cssmin', 'targethtml:dist', 'compress']);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');

};
