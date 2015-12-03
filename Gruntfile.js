module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        jasmine: {
            src: 'numberFormatter.js',
            options: {
                keepRunner: false,
                specs: 'tests/*Spec.js',
                template: require('grunt-template-jasmine-requirejs'),
                templateOptions: {
                    requireConfig: {
                        baseUrl: './',
                        paths: {
                            'NumberFormatter': './numberFormatter'
                        }
                    }
                }
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'numberFormatter.js', 'tests/*.js']
        },

        watch: {
            scripts: {
                files: ['numberFormatter.js', 'tests/*.js'],
                tasks: ['default']
            },
        }

    });

    grunt.registerTask('test', ['jasmine']);

    grunt.registerTask('default', ['jshint', 'test']);
};
