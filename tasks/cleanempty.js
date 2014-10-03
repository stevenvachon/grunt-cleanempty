"use strict";

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
			
			
			grunt.verbose.write((options["no-write"] ? "Not actually cleaning " : "Cleaning ") + filepath + "...");
			
			grunt.file.delete(filepath, deleteOptions);
			
			grunt.verbose.ok();
		}
		
		grunt.log.ok(this.filesSrc.length + " " + grunt.util.pluralize(this.filesSrc.length, "path/paths") + " cleaned.")
	});
};
