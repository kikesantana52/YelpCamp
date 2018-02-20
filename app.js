var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var campgrounds = [
  {name:"Salmon Creek", image: "http://www.sportlife.com.mx/sites/default/files/styles/imagen_nota/public/2016-03/acampartips-sl.jpg?itok=NpKdpK7y"},
  {name:"Mountine Hike", image: "https://www.dondeir.com/wp-content/uploads/2017/04/destinos-acampar-cerca-cdmx-04.jpg"},
  {name:"Granite Hill", image: "https://www.turimexico.com/wp-content/uploads/2015/06/acampar-en-puebla.jpg"},
  {name:"Salmon Creek", image: "http://www.sportlife.com.mx/sites/default/files/styles/imagen_nota/public/2016-03/acampartips-sl.jpg?itok=NpKdpK7y"},
  {name:"Mountine Hike", image: "https://www.dondeir.com/wp-content/uploads/2017/04/destinos-acampar-cerca-cdmx-04.jpg"},
  {name:"Granite Hill", image: "https://www.turimexico.com/wp-content/uploads/2015/06/acampar-en-puebla.jpg"}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/",function(req,res) {
  res.render("landing");
})

app.get("/campgrounds",function(req,res){
  res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", (req,res)=>{
  // get data from form and add to campgrounds array
  // redirect to get/campgrounds
  var name = req.body.name;
  var image = req.body.image;
  campgrounds.push({name: name,image:image});
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
  res.render("new.ejs");
});


app.listen(2000,function() {
  console.log("Listen to port 2000");
})
