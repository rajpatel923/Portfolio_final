import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))

app.use(express.json({limit: "16kb"})) 

app.use(express.urlencoded({
    extended:true,
    limit: "16kb",
})) //for configurating url: (chaning some text in the url);
app.use(express.static("public")) //for storing files and anything into local server: link on public 
app.use(cookieParser()) //for getting access to user's cookie and setting up the cookies

export {app}