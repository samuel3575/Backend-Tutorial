const express = require("express");

const lodash = require("lodash");

const path = require("path");

const sam = express();

const bodyParser = require("body-parser");

const posts = [
  // {
  //   title: "Napoli offer Osimhen N6.5bn annual salary to remain at club",
  //   text: `Serie A champions, Napoli want to keep their man and top scorer from last season, Nigerian striker, Victor Osimhen, and are doing everything possible to make this happen. Osimhen has been on the radar of top European clubs following his outstanding performance that was pivotal in Napoli’s title-winning campaign, their first in 33 years. The club has now offered Osimhen a new two-year contract extension with a salary worth N6.5bn — €6.5m plus €1m in bonuses, according to reports. Skysports reported on Monday that Napoli was in advanced talks to extend his (Osimhen) contract until 2027 with an increase in salary. Osimhen who has two years left in his contract had earlier requested an improved deal with €7 million. Napoli has now, however, tabled their offer that comes with a release clause of £170m. Napoli’s new manager, Rudi Garcia had confirmed that Osimhen would remain at the club ahead of the new season, saying “Of course, I have spoken to Osimhen who wants to stay here to make another great season with Napoli.” “I can assure you that he (OsImhen) wants to stay, he is happy to be with us and still wants to do great things.” Osimhen scored 26 goals plus five assists in 32 league appearances for Napoli last season. The post Napoli offer Osimhen N6.5bn annual salary to remain at club appeared first on Vanguard News.`,
  // },
  // {
  //   title: `Kanu sacks Enyimba’s coaches, saves Finidi
  //   `,
  //   text: `Nigeria Premier League champions, Enyimba have announced the sacking of their Board and technical crew except coach George Finidi.
  //   Kanu said last night they were asked to re-apply for their positions within the next 48 hours if they want to continue in their role.
  //   “We told everyone to re-apply except Finidi. The coach has done well and will stay to continue his good job.
  //   “Finidi is our coach and we are happy with him,” he added.
  //   Finidi guided the Aba giants to a historic ninth NPL title less than a month ago.
  //   The former Nigeria international was in charge of Enyimba for two seasons.
  //   The Abia State Government recently appointed former Super Eagles captain, Nwankwo Kanu, as new chairman of the club.
  //   Kanu and Finidi were teammates during their playing days at Dutch club, Ajax Amsterdam.
  //   The post Kanu sacks Enyimba’s coaches, saves Finidi appeared first on Vanguard News.`,
  // },
];

sam.set("view engine", "ejs");
sam.set("views", "views");

sam.use(bodyParser.urlencoded({ extended: false }));
const PORT = 3000;

sam.get("/", function (req, res) {
  for (let i = 0; i < posts.length; i++) {
    const titleFormatted = lodash.kebabCase(posts[i].title);
    posts[i].titleForm = titleFormatted;
    console.log(posts);
  }
  res.render("posts", { posts, pageTitle: "All Posts" });
});

sam.get("/create-post", function (req, res) {
  res.render("create-post", { pageTitle: "Create a Post" });
});

sam.post("/create-post", function (req, res) {
  posts.push(req.body);
  console.log(posts);
  console.log(req.body);
  res.redirect("/");
});

sam.get("/:postUrl", function (req, res) {
  let post;
  const postUrl = req.params.postUrl;

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].titleForm == postUrl) {
      post = posts[i];
    }
  }
  //   console.log(post);
  res.render("post", { pageTitle: post.title, post });
});
//    // sam.get("/posts", function(req,res){
//         for(let i = 0; i < posts.length; i++) {
//             if (postts[i].create-post===true) {
//                 products.push(products(i))

//             }
//         }
//         console.log( products);
//     res.render("addproducts", {products});
//     });

sam.listen(PORT, function (req, res) {
  console.log(`server started on port ${PORT}`);
});

console.log(__dirname);
