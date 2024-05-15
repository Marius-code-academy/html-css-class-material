import Product from "./Product.js"

export async function createProduct(req, res) {
  const { title, description } = req.body;

  const newProduct = new Product({
    title,
    description,
    amount: 0
  })

  await newProduct.save();

  res.json(newProduct);
}

export async function getProducts(req, res) {
  const products = await Product.find({}, { __v: 0 })

  res.json(products)
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const { title, description, amount } = req.body;

  const product = await Product.findById(id);

  if (title) {
    product.title = title;
  }
  if (description) {
    product.description = description;
  }
  if (amount !== undefined) {
    product.amount = amount;
  }

  await product.save();

  res.json(product)
}