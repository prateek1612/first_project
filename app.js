
const express = require('express');
const routes = require('./routes/routes');
const {sequelize} = require('./models/index');

const app = express();


const PORT = process.env.PORT;

sequelize.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

sequelize.sync().then(result => {
    //Api Called 
    app.use(express.json());
    app.use('/api/v1.0/employees/', routes);
    app.use('*', (req, res) => { res.sendStatus(404).json('Page not found') });
    app.listen(PORT, () => {
        //  console.log("\nlistning At port number 3000");
    });
}).catch(err => {
    // console.log(err);
});
module.exports = {
    app
}