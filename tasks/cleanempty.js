/*
 * grunt-cleanempty
 * https://github.com/stevenvachon/grunt-cleanempty
 *
 * Copyright (c) 2013 Steven Vachon
 * Licensed under the MIT license.
 */

'use strict';

var fs = require("fs");

module.exports = function(grunt)
{
	grunt.registerMultiTask("cleanempty", "Clean empty files and folders.", function()
	{
		// Task options
		var files   = !(grunt.option("files")    === false);	// defaults to true
		var folders = !(grunt.option("folders")  === false);	// defaults to true
		var force   =   grunt.option("force")    === true;
		var noWrite =   grunt.option("no-write") === true;
		
		// Target options
		var options = this.options();
		var options = this.options(
		{
			files:      (options.files      ===undefined ? files   : options.files),
			folders:    (options.folders    ===undefined ? folders : options.folders),
			force:      (options.force      ===undefined ? force   : options.force),
			"no-write": (options["no-write"]===undefined ? noWrite : options["no-write"])
		});
		
		grunt.verbose.writeflags(options, "Options");
		
		
		var deleteOptions = {force:options.force, "no-write":options["no-write"]};
		
		
		for (var i=this.filesSrc.length-1; i>=0; i--)
		{
			var filepath = this.filesSrc[i];
			
			
			if ( !grunt.file.isDir(filepath) )
			{
				if (fs.readFileSync(filepath).length > 0 || !options.files) continue;
			}
			else
			{
				if (fs.readdirSync(filepath).length > 0 || !options.folders) continue;
			}
			
			
			grunt.log.write((options["no-write"] ? "Not actually cleaning " : "Cleaning ") + filepath + "...");
			
			grunt.file.delete(filepath, deleteOptions);
			
			grunt.log.ok();
		}
	});
	
	
	
  /*grunt.registerMultiTask('cleanempty', 'Clean empty files and folders.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });*/

};
