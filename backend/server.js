const express = require('express');
const app = express();
const cors = require('cors');
const PORT = '5000';

const users = require('./Users.json');

app.use(cors());

app.get('/user', (req, res) => {
    ``
    let { search } = req.query;

    if (search && search.length > 0) {
        const usersData = users.filter((val) => val.name.includes(`${search.toLowerCase()}`));
        return res.status(200).json({ users: usersData });
    }

    return res.status(200).json({ users });
})


app.listen(PORT, () => {
    console.log("Server has started");
})