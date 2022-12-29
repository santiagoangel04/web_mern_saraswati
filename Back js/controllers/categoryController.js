// controler sends the objects to database with
//Import object
const Category = require("../models/Category");

exports.getCategoryHOME = async (req, res) => {
    try {
        const category = await Category.find();
        res.json({category});
        
    } catch (error) {
        console.log("Error de Get" + error);
    }
}

exports.getCategory = async (req, res) => {
   try {
        const category = await Category.find({creador: req.user.id});

        res.json({category});
    
   } catch (error) {
        console.log("Error de Get" + error);
   }
};


exports.getCategoryId = async (req, res) => {
    const {id} = req.params
    try {
        const category = await Category.findById(id);
        res.json({category})

    } catch (error) {
        console.log("Error de GetById" + error)
        
    }
};



exports.createCategory = async (req, res) => {
 
     try {
        
        const category = new Category(req.body);
        
        category.creador = req.user.id; 

        category.save();
        
        res.json(category);

    } catch(error) {
        console.log("AN ERROR HAS OCCURRED  Categorycontroller: "+ error);
    }
}

exports.updateCategory = async (req, res ) => {

    try {
        
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category) {
        return res.status(404).json({msg: "Not found"});
    }

   // if (category.creador.toString() !== req.user.id.toString) {
    //    return res.json({msg: "Not valid action for User"});
   // }

    category.nombre = req.body.nombre || category.nombre;
    category.imagen = req.body.imagen || category.imagen;

    category.save();

    res.json({category});

   } catch (error) {
        console.log(error);
    }
};


exports.deleteCategory = async (req, res ) => {
    try {
       await Category.deleteOne({_id: req.params.id}); 
       res.json({msg: "category deleted"});
    } catch (error) {
        console.log("Error in Delete" + error)
    }
};