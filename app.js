let http = require('http');
let formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/uploadedImg');


if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

http.createServer(function (req, res) {
    if (req.url === '/fileupload') {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            const oldpath = files.filetoupload.path;
            const newpath = dirPath + "/" + files.filetoupload.name;
            // The uploaded image file will be added to the folder name "uploadedImg" in this project

            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('Your file is uploaded to the folder "uploadedImg" in this project');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<head><title>Upload Image</title></head><body style="background-image: url('https://images.pexels.com/photos/3691528/pexels-photo-3691528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); background-size: cover">`);
        res.write('<div style="text-align: left; margin: 300px"><h1 style="color: royalblue">Upload Image</h1>');

        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit" style="margin-top: 10px; background-color: royalblue; color: white">');
        res.write('</form></div></body>');
        return res.end();
    }
}).listen(8080);


