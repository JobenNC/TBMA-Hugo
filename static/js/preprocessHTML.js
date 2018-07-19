var Mustache = require("mustache");
var fs = require("fs");

var footerPage = fs.readFileSync("../mustache/common/footer.mustache").toString();
var headerPage = fs.readFileSync("../mustache/common/header.mustache").toString();
//var mainPage = fs.readFileSync("../mustache/index.mustache").toString();
//Will need to format header and footer from html files into json for includes
//var data = JSON.parse(fs.readFileSync("common.json").toString());

//var h = Mustache.render(mainPage, data);

fs.readdir("../mustache",
    function(err, files) {
        for (var i in files)
        {
            if (files[i] != "common")
            {

                var data = JSON.parse(fs.readFileSync("../mustache/common/" + files[i].split(".")[0] + ".json"));

                var header = Mustache.render(headerPage, data).toString();
                var footer = Mustache.render(footerPage, data).toString();
                var partials = {header: header, footer: footer};

                console.log(files[i]);
                var mainPage = fs.readFileSync("../mustache/" + files[i]).toString();
                var h = Mustache.render(mainPage, data, partials);
                console.log(h);
                fs.writeFile("../output/" + files[i].split(".")[0] + "." + data.extension, h.toString());
            }
        }
    }
);