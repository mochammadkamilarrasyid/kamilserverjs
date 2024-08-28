const getGoals = (req, res) => {
    res.status(200).json({
        message:"Get Method Running"
    })
}

const setGoal = (req,res)=>{
    res.status(200).json({
        message:"Set Method Running"
    })
}

module.exports = {getGoals,setGoal }