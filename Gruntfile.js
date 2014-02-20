var ndd = require("node-dir-diff");
var path = require("path");



module.exports = function(grunt)
{
	grunt.initConfig(
	{
		cleanempty:
		{
			"default_options":
			{
				src: ["test/temp/default_options/**/*"]
			},
			"custom_options":
			{
				options:
				{
					files: false
				},
				src: ["test/temp/custom_options/**/*"]
			}
		},
		
		
		
		copy:
		{
			"pre":
			{
				files:
				[
					{ cwd:"test/fixtures/before/", src:["**"], dest:"test/temp/", expand:true, dot:true }
				]
			}
		}
	});
	
	
	
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadTasks("tasks");
	
	
	
	grunt.registerTask("reset", function()
	{
		grunt.file.delete("test/temp/");
	});
	
	
	
	grunt.registerTask("test", function()
	{
		var done = this.async();
		
		function test1(callback)
		{
			new ndd.Dir_Diff
			(
				[
					path.resolve("test/fixtures/after/custom_options/"),
					path.resolve("test/temp/custom_options/")
				],
				"list"
			).compare( function(err, result)
			{
				if (result.deviation) grunt.fail.fatal("Custom option results do not match");
				
				grunt.log.ok("Custom option results match");
				
				callback();
			});
		}
		
		function test2(callback)
		{
			new ndd.Dir_Diff
			(
				[
					path.resolve("test/fixtures/after/default_options/"),
					path.resolve("test/temp/default_options/")
				],
				"list"
			).compare( function(err, result)
			{
				if (result.deviation) grunt.fail.fatal("Default option results do not match");
				
				grunt.log.ok("Default option results match");
				
				callback();
			});
		}
		
		test1( function()
		{
			test2( function()
			{
				done();
			});
		});
	});
	
	
	
	grunt.registerTask("default", ["reset","copy:pre","cleanempty","test","reset"]);
};
