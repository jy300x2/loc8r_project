/* GET 'about' page */
module.exports.about = function(req, res) {
  res.render('generic-text', { 
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac cursus nulla. Curabitur scelerisque interdum erat, ac posuere velit vestibulum eu. Quisque imperdiet nec ex id tincidunt.'
  });
};
