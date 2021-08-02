const { Router } = require('express');
const {validateForNew,validateForUpdate}=require('../middlewares/validation');

const controllers = require('../controller/controller');
const router = Router();
router.post('/', validateForNew() ,controllers.createNewEmployee);
router.get('/',controllers.findActiveEmployees);
router.get('/:id', controllers.findByPk);
router.delete('/:id', controllers.deleteById)
router.put('/:id',validateForUpdate() ,controllers.updateEmployeeData);
module.exports = router;