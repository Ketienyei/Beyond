const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body
  // You can now use the name, email, and password variables to create a new user account, 
  // save them to a database, or perform any other necessary actions.

  res.send('Sign Up Successful!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})


