
const port = 3000;

mongoose.connect('mongodb://localhost/beyonddb', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/signup', (req, res)=> {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    user.save((err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});




const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  companyname: {
    type: String,
    required: true
  },
  emaoladress: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

