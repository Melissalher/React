let data = [
    {
      name: "John",
      age: 22,
      city: "New York",
    },
    {
      name: "Mike",
      age: 27,
      city: "Chicago",
    },
    {
      name: "Tony",
      age: 31,
      city: "Detroit",
    },
  ];

app.get("/get", (req, res) => {
    res.json({details:data});
  });
   
app.post("/post", (req, res) => {
    data.push(req.body);
    res.json({});
  });
   
app.put("/put", (req, res) => {
    res.json({});
  });
   
  app.delete("/deletedata/:name", (req, res) => {
    const index = data.indexOf(
      data.find((value) => value.name === req.params.name.toString())
    );
    data.splice(index, 1);
    res.json({message: "data deleted successfully!"});
  });

