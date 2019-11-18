let studentDao = require('../dao/studentDao');

function queryAllStudent(success){
    studentDao.queryAllStudent(success)
}

module.exports = {
    queryAllStudent
}