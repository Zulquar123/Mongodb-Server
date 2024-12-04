const express = require("express"); 
const app = express();

const userModal = require("./usermodel");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Backend")
})



app.get("/create",async (req, res) => {
  let createdUser = await  userModal.create({
        name: "Zeeshan",
        username: "Zeeshan@786",
        email: "Zeeshan@gmail.com",
  })
    res.send(createdUser);
})

app.get("/update", async (req, res) => {
    let updatedUser = await userModal.findOneAndUpdate({
        username: "harsh@786"},{name:"Zulquar Nain Nain Ansari" , email:"Zulquar@150gmail.com",username:"Zulquar@786"},{new:true} 
  );
  res.send(updatedUser);
});

app.get("/read", async (req, res) => {
    
    let showUsers = await userModal.find();
    res.send(showUsers);
})

app.get("/delete", async (req, res) => {
  let deletedUsers = await userModal.findOneAndDelete({ name: "Zeeshan" });
  res.send(deletedUsers);
});


app.listen(port, () => {
    console.log(`Server is running on the port : ${port}`);
})