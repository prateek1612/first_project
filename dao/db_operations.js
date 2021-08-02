const models = require('../models');
const mdlEmployee = models.employee;
const mdlCountry = models.country;


const employeeDao = {
    createNewEmployee: createNewEmployee,
    findAll: findAll,
    findByPk: findByPk,
    deleteById: deleteById,
    updateEmployeeData: updateEmployeeData
}

async function createNewEmployee(data) {
    
    const reqCountry = data.country;
    const result = await mdlCountry.findByPk(reqCountry);
    if (result != null){
        const crtResult =await mdlEmployee.create({
            employee_name: data.employee_name,
            gender: data.gender,
            address_1: data.address_1,
            address_2: data.address_2,
            city: data.city,
            state: data.state,
            country: data.country,
            is_active: data.is_active,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        );
       
    return crtResult;
    }
return result;

}

async function updateEmployeeData(id, data) {
    const reqCountry = data.country;
    if (reqCountry == undefined) {

        const result = await mdlEmployee.update({
            employee_name: data.employee_name,
            gender: data.gender,
            address_1: data.address_1,
            address_2: data.address_2,
            city: data.city,
            state: data.state,
            country: data.country,
            is_active: data.is_active,
            updatedAt: new Date(),
        },
            {
                where: {
                    id: id,
                }
            }
        )

        return result;
    }
    else {
        const result = await mdlCountry.findByPk(reqCountry);
        if (result != null){
            const updatedResult = await mdlEmployee.update({
                employee_name: data.employee_name,
                gender: data.gender,
                address_1: data.address_1,
                address_2: data.address_2,
                city: data.city,
                state: data.state,
                country: data.country,
                is_active: data.is_active,
                updatedAt: new Date(),
            },
                {
                    where: {
                        id: id,
                    }
                }
            )
            return updatedResult;
        }
        else{
            return result;
        }
        }
    }


async function findAll() {
    const result = await mdlEmployee.findAll({
        where: {
            is_active: true
        }
    });
    return result;
}

async function findByPk(id) {
    const result = await mdlEmployee.findByPk(id);
    return result;
}

async function deleteById(id) {

    const result = await mdlEmployee.update({

        is_active: false
    },
        {
            where: {
                id: id
            }
        }
    );
    return result;
}

module.exports = employeeDao;