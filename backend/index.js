const express = require('express')
const app = express();
require('dotenv').config()
const mogoose = require("mongoose")
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT || 8000
const cors = require("cors")

const holdingdata = require("./data/holdingdata")
const Holding = require("./Models/HoldingModal")
const Position = require('./Models/PositionModal')
const positiondata = require('./data/positiondata')

const authRoute = require("./Routes/AuthRoute")

mogoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
        console.log("DB Connection Failed")
        console.log(error);
        process.exit(1);
    })


app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin: ["https://dashboard-git-main-jitesh-kumar-yadavs-projects.vercel.app","http://localhost:3000"],
        methods: ["GET", "POST", "UPDATE", "DELETE"],
        credentials: true
    })
)




// async function dataSample() {
//     try {
//         await Position.deleteMany({});
//         // sampleData.data = sampleData.data.map((obj) => ({
//         //     ...obj,
//         //     owner: "6650696e7d1f98ebfc7bc1dc"
//         // }))
//         const data = await Position.find({});
//         if (data.length === 0) {
//             await Position.insertMany(positiondata.data);
//             console.log("data was initialized")
//         }
//         else {
//             console.log("Sample DATA is present")
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }
// dataSample();

app.get("/getholdings", async (req, res) => {
    try {
        const data = await Holding.find({});
        if (data.length === 0) {
            return res.status(404).json({
                success: false,
                messsage: "Data not Found",
            })
        }
        else {
            return res.status(200).json({
                success: true,
                message: "Data Fetch successfully from DB",
                data,
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Someting went wrong"
        })
    }
})
app.get("/getposition", async (req, res) => {
    try {
        const data = await Position.find({});
        if (data.length === 0) {
            return res.status(404).json({
                success: false,
                messsage: "Data not Found",
            })
        }
        else {
            return res.status(200).json({
                success: true,
                message: "Data Fetch successfully from DB",
                data
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Someting went wrong"
        })
    }
})

app.use("/",authRoute)

app.get("/home", (req, res) => {
    res.send("Server Working Fine !")
})

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})