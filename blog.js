const express = require('express');

const bodyParser = require('body-parser');

const blog = express()
blog.use(bodyParser.urlencoded({extended:true}));
let Allpostscreated  = [1] 

blog.get('/', function(req, res) {
   


    res.sendFile(__dirname + '/blog-homepage.html')
})
blog.get('/create-post', function(req, res) {
    res.sendFile(__dirname + '/create-post.html')
})

blog.post('/new-post', function(req, res) {
    const title = req.body.title
    const message = req.body.message

    allPosts.push(req.body)

    console.log(allPosts);

    res.redirect('/create-post')
})
const PORT = 3000

blog.listen(PORT, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Server running on port ' + PORT);
    }
})
