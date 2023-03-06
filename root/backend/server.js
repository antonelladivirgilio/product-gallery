const express = require("express");

const v1ProductRouter = require("./v1/routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api", v1ProductRouter);

app.listen(PORT, () => {
    console.log(`👌 Server running on PORT=${PORT} 👌`);
});
