const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const port = 8000;

// เก็บ user
let users = []
let counter = 1

/*
Get /users  สำหรับ user  ทั้งหมด
POST /user สำหรับสร้าง user ใหม่บันทึกเข้าไป
GET /user/:id สำหรับดูข้อมูล user ที่มี id ตามที่ระบุ
PUT /user/:id สำหรับแก้ไข user ที่มี id ตามที่ระบุ
DELETE /user/:id สำหรับลบ user ที่มี id ตามที่ระบุ
*/

// path = get /users
app.get('/users', (req, res) => {
    res.json(users);
})

// path = POST / user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({
        message: "User created",
        user: user
    });
})

//path = put /user/ : id
app.put('/user/:id', (req, res) => {
    let.id = req.params.id;
    let updateUser = req.body;
    // หา index ของ user ที่ต้องการ update
    let selectedIndex = users.findIndex(user => user.id == id)
    //  update user
    if (updateUser.firstname) {
        users[selectedIndex].firstname = updateUser.firstname
    }

    if (updateUser.lastname) {
        users[selectedIndex].lastname = updateUser.lastname
    }

    res.json({
        message: "User updated",
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
      }
    });
})


app.delete('/user/:id', (req, res) => {
    let id = req.params.id;

    let selectedIndex = users.findIndex(user => user.id == id)

        users.splice(selectedIndex, 1)
        res.json({
            message: "Delete Completed",
            indexDelete: selectedIndex
     });
})
 

app.listen(port, (req, res) => {
    console.log('server is running on port' + port);
});