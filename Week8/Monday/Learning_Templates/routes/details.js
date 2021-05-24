const express = require ('express');
const router = express.Router();
const axios = require('axios');

let array = [1, 2, 3];

let pictures = [
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg",
  "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9"
];

router.get('/details', (req, res) => {
  axios.get('https://corona.lmao.ninja/v2/states')
  .then(data => {
    res.render('./details', {
      pageTitle: 'Feedback',
      pageID: 'Detail',
      arr: array,
      isValid: false,
      pic: "",
      pictures: [],
      data: data.data
    })
  })
  // res.render('./details', {
  //   pageTitle: 'Feedback',
  //   pageID: 'Detail',
  //   arr: array,
  //   isValid: false,
  //   pic: "",
  //   pictures: pictures,
  //   data: []
  // });
})

router.get('/details/:id', (req, res) => {
  let id = req.params.id;
  res.render('./details', {
    pageTitle: 'Feedback',
    pageID: 'Detail',
    arr: array,
    isValid: false,
    pic: pictures[id],
    pictures: pictures,
    data: []
  });
})


module.exports = router;