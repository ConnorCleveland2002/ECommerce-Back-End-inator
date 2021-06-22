const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get("/", (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ["product_name"],
    },
  }).then((categoryData) => res.json(categoryData))
});

router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["category_id"],
    },
  }).then((categoryData) => res.json(categoryData))
});

router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  }).then((categoryData) => res.json(categoryData))
});

router.put("/:id", (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }).then((categoryData) => res.json(categoryData))
});

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((categoryData) => res.json(categoryData))
});

module.exports = router;
