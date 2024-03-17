// const express =  require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const cors = require('cors')
// const { stat } = require('fs')
// const port = 3001 //3001

// const storedUsers = [
//     {
//         name: 'Deexith Parandaman',
//         mail: 'deexith2002@gmail.com',
//         password: '1234',
//         role: 'Grover'
//     }
// ]

// app.use(cors())
// app.use(bodyParser.json())
// app.use(express.json())

// app.post('/reg', (req, res) => {

//     console.log("Entry log of stored val in reg",storedUsers)

//     const newUser = req.body;
//     let status = false

//     console.log(newUser.name)

//     for(const obj of storedUsers){

//         //check every object for name and email
//         if(newUser.name === obj.name || newUser.email === obj.mail){
//             res.status(409).json({message : 'User Already Present'})
//             status = true 
//             break
//         }

//     }

//     if(status===false){
//         storedUsers.push(newUser)
//         console.log('Post request made',storedUsers)
//         res.status(201).json({message:'User Created'})
//     }
    
// })

// app.post('/log', (req,res)=>{

//     console.log("Entry log of stored val in log",storedUsers)

//     const cred = req.body
//     let status = false

//     for(const elem of storedUsers){

//         console.log(elem)

//         //check every object for name and email
//         if(cred.name == elem.name && cred.password == elem.password){

//             res.status(200).json({
//                 message : 'Login Success',
//                 name : elem.name,
//                 email : elem.email,
//                 role : elem.role
//             })

//             status = true
//             break
//         }

//     }

//     if(status===false){
//         res.status(401).json({
//             message:'invalid cred'
//         })
//     }

// })

// app.listen(port, ()=>{
//     console.log('server is running and initial state is',storedUsers)
// })
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Dummy user data for demonstration purposes (replace with actual user data from your database)
const users = [
  {  name: 'user1',mail:'Kishoreselvarajan57@gmail.com', password: '1234', role: 'Farmer' },
  
];

app.use(bodyParser.json());
app.use(cors());

app.post('/log', (req, res) => {
  const { name, password } = req.body;

  // Find the user with the given name and password
  const user = users.find(u => u.name === name && u.password === password);

  if (user) {
    // If user is found, return the user data
    res.status(200).json({ user });
  } else {
    // If user is not found, return 401 Unauthorized
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/reg', (req, res) => {
    const { name, mail, password, role } = req.body;
  
    // Check if user already exists
    const existingUser = users.find(user => user.name === name || user.mail === mail);
    if (existingUser) {
      // If user already exists, return 409 Conflict
      res.status(409).json({ message: 'User already present. Please choose a different name or email.' });
    } else {
      // If user does not exist, add the user to the array
      const newUser = { name, mail, password, role };
      users.push(newUser);
      // Simulate saving user data to a database
      // Replace this with actual database operations in a real-world scenario
      console.log('New user registered:', newUser);
      // Return 201 Created
      res.status(201).json({ message: 'User registered successfully' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
