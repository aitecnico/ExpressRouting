const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("HOMEPAGE!")
})


const threeOps = {
    average: "mean",
    midpoint: "median",
    frequent: "mode"
}

app.get("/threeOp/:statistics", (req, res) => {
    const statistic = req.params.statistics;
    const threeOp = threeOps[statistic]
    res.send(threeOp);
})



app.listen(3000, () => {
    console.log("Server running on port 3000")
});