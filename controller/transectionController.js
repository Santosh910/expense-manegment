import transectionModel from "../models/transectionModel.js"
import moment from 'moment'

export const getAllTransection = async (req, res) => {
    try {
        const {
            frequency,
            selectedDate,
            type
        } = req.body;
        const transections = await transectionModel.find({
            ...(frequency !== 'custom' ? {
                date: {
                    $gt: moment().subtract(Number(frequency), "d").toDate(),
                },
            } : {
                date: {
                    $gte: selectedDate[0],
                    $lte: selectedDate[1]
                }
            }),
            userid: req.body.userid,
            ...(type !== "all" && {type}),
        });
        res.status(200).json(transections)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export const addTransection = async (req, res) => {
    try {
        const newTransection = new transectionModel(req.body);
        await newTransection.save();
        res.status(201).send("Transaction Created");
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export const editTransaction = async(req,res)=>{
    try {
        await transectionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
        return res.status(200).json("Edit Successfully")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export const deleteTransection = async(req,res) =>{
    try {
        await transectionModel.findOneAndDelete({_id:req.body.transactionId});
        return res.status(200).json("Transaction Deleted!");
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}