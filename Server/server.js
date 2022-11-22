import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoute.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/OrderRoute.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json())

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
});

//ERROR Handler
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server runs in port ${PORT}`)); 