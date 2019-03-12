module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      compile: {
        files: { './index.css': 'css/layout.less'  }                                 } 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less:compile']);

};
