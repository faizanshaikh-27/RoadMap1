const fs = require("fs");


//create a file
fs.writeFileSync("sync.txt", "This is syncVSasync topic statement");
const data = fs.readFileSync("sync.txt", "utf-8");
console.log(data);

fs.readFile("sync.txt", "utf-8", (err,data) =>{
    console.log(data); // will take some time so the below argument will be passed first
});
console.log("after the data"); // will read first this data and give an output


//create a folder
// fs.mkdir("asyncDirectory", (err) => {
//     console.log("folder created");
// })

fs.writeFile("synchronous.txt", "Writing a text using writeFile", (err) => {
    console.log("File is created");
});

fs.appendFile("synchronous.txt", " \n Using append in synchronous.txt", (err) => {
    console.log("file append has been sucessfully done");
});

fs.readFile("synchronous.txt", "utf-8", (err, data) => {
    console.log(data);
});

fs.rename("synchronous.txt", "newSynchronous.txt", (err) => {
    console.log("Rename has been done");
});

// fs.unlink("newSynchronous.txt", (err) => {
//     console.log("file Deleted");
// });
// will delete a .js file

fs.rmdir("asyncDirectory", (err) => {
    console.log("folder deleted");
}); // will delete a folder