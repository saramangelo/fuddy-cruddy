const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint


  // find all categories
  // be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find one category by its `id` value
  // be sure to include its associated Products
  router.get('/:id', async (req, res) => {
    try {
      const categoriesData = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
  
      if (!categoriesData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
  
      res.status(200).json(categoriesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

    // create a new category
    router.post('/', async (req, res) => {
      try {
        const categoriesData = await Location.create({
          category_name: req.body.category_name,
        });
        res.status(200).json(categoriesData);
      } catch (err) {
        res.status(400).json(err);
      }
    });

  // update a category by its `id` value
router.put('/:id', (req, res) => {

});

  // delete a category by its `id` value
router.delete('/:id', (req, res) => {

});

module.exports = router;
