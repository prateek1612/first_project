const employeeDao = require('../dao/db_operations');
const { Joi } = require('joi');
var _ = require('lodash');

const employeeController = {
    createNewEmployee: createNewEmployee,
    updateEmployeeData: updateEmployeeData,
    findActiveEmployees: findActiveEmployees,
    findByPk: findByPk,
    deleteById: deleteById,


}

//Controller of Create Employee Data API
async function createNewEmployee(req, res) {
    try {

        const result = await employeeDao.createNewEmployee(req.body);
        
        if (result == null) {
            res.status(404).send("Country with the specified ID does not exists");
        }
        else {
            res.status(201).json({ result });
        }


    } catch (err) {

        return res.status(500).json({ err: err.message });

    }


}

//Controller of Update Employee Data API
async function updateEmployeeData(req, res) {
    try {

        const id = req.params.id;

        const result = await employeeDao.updateEmployeeData(id, req.body)
        //employeeData = [1] i.e Employee Data is updated
        if (_.first(result) == 1) {
            return res.status(200).send("Employee Detail is updated");
        }
        //employeeData = [1] i.e Employee Data is updated
        else if (_.first(result) == 0) {
            return res
                .status(404)
                .send('employee with the specified ID does not exists');
        }
        /*
        if we got emloyeeData = null then it means user has given wrong Country 
        that is not present in out country table
        */
        return res
            .status(404)
            .send('Country does not exists');


    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
}




//Controller of Finding All Employees Data who are Active API
async function findActiveEmployees(req, res) {


    await employeeDao.findAll()
        .then(data => {
            if (!_.isEmpty(data)) {
                return res.status(200).json({ data });
            }
            return res.sendStatus(403).send("No data Available");

        }).catch(err => {
            res.status(500).json({ error: error.message });
        });

}

//Controller of find Employee Data using ID API
async function findByPk(req, res) {
    const id = req.params.id;

    await employeeDao.findByPk(id)
        .then(employeeData => {
            if (employeeData) {
                return res.status(200).json({ employeeData });
            }
            return res
                .status(404)
                .send('employee with the specified ID does not exists');
        }).catch(err => {

            res.status(500).json({ error: error.message });
            console.log("ERROR ---------- " + err);
        });
}

//Controller of Soft Delete Employee Data using ID API
async function deleteById(req, res) {
    const id = req.params.id;
    await employeeDao.deleteById(id)
        .then(result => {
            if (result && _.first(result) != 0) {
                console.log(result);
                return res.status(200).send('employee deleted successfully');
            }
            return res
                .status(404)
                .send('employee with the specified ID does not exists');
        })
        .catch(err => {
            console.log("ERROR ---------- " + err);
            return res.status(500).json({ error: error.message });

        }
        );
}


module.exports = employeeController;