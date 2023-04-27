import app from "./api/src/app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Api is running on port ${PORT}`)
});