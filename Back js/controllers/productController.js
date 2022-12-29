const Product = require("../models/Product");

exports.getProductAll = async (req, res) => {
    try {
        const product = await Product.find();
        res.json({product})
        
    } catch (error) {
        console.log("Error de Get" + error);
    }
}

exports.getProductId = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id);
        res.json({product})
        
    } catch (error) {
        console.log("Error de Get" + error);
    }
}

exports.getProduct = async (req, res) => {
    const { id } = req.params
    const product = await Product.find().where("categoryId").equals(id); // express request parecido a sql
    res.json(product)
};

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        
        product.save();

        res.json(product);

    } catch (error) {
        console.log("Error creando producto" + error);
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(304).json({msg: "Product Not found"});
        }

        product.nombre = req.body.nombre || product.nombre;
        product.descripcion = req.body.descripcion || product.descripcion;
        product.stock = req.body.stock || product.stock;
        product.precio = req.body.precio || product.precio; 
        product.imagen = req.body.imagen || product.imagen;
        
        product.save();

        console.log({product});

        res.json({product});


    } catch (error) {
        console.log(error); 
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({_id: req.params.id});
        res.json({msg: "product deleted"})
    } catch (error) {
        console.log("Error deleting product: "+ error);
    }
};

