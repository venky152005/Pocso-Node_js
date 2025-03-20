import Complaint from "../../model/model.js";

export const addStudent = async (req, res) => {
    const { name, email, phonenumber, incidentdetails, location } = req.body;

    const user = new Complaint({
        name,
        email,
        phonenumber,
        incidentdetails,
        location,

    })

    await user.save();

    res.json({
        "Status": "Successfully saved",
        "success": true
    })
}

export const listStudent = async (req,res) => {

    const user = await Complaint.find();

    res.json({
        "Students": user
    })
}

export const updateStudent = async (req, res) => {
    const { _id, name, email, phonenumber, location, } = req.body;

    const checkStudent = await Complaint.findById(_id);

    if (!checkStudent) {
        res.json({
            "Error": "Student not found"
        })
    }

    const user = await Complaint.findByIdAndUpdate({
        _id
    }, {
        name,
        email,
        phonenumber,
        location,
    });

    res.json({
        "Status": "Student has been updated"
    })
}

export const deleteStudent = async (req, res) => {
    const { _id } = req.body;

    const checkStudent = await Complaint.findById(_id);

    if (!checkStudent) {
        res.json({
            "Error": "Student not found"
        })
    }

    const user = await Complaint.findByIdAndDelete(_id);

    res.json({
        "Status": "Account has been deleted"
    })
}

export const mail = async () => {
    const user = await Complaint.find({},'email');
    return user;
}