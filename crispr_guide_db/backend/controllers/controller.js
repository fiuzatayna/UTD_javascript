const db = require('../config/db.config.js');
const GuideSeq = db.GuideSeq;

exports.createGuideSeq = (req, res) => {
    let guideSeq = {};

    try{
        guideSeq.gene = req.body.gene;
        guideSeq.sequence = req.body.sequence;
        guideSeq.species = req.body.species;

        GuideSeq.create(guideSeq, 
                    {attributes: ['id', 'gene', 'sequence', 'species']})
                .then(result => {
                    res.status(200).json(result);
            });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.getGuideSeq = (req, res) => {
    
    GuideSeq.findByPk(req.params.id, 
                {attributes: ['id', 'gene', 'sequence', 'species']})
            .then(guideSeq => {
                res.status(200).json(guideSeq);
        }).catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        })
}

exports.guideSeqs = (req,res) => {
    try{ 
        GuideSeq.findAll({attributes: ['id', 'gene', 'sequence', 'species']})
        .then(guideSeqs => {
            res.status(200).json(guideSeqs);
        })        
    }catch(error) {
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

exports.deleteGuideSeq = async(req, res) => {
    try{
        let guideSeqsId = req.params.id;
        let guideSeq = await GuideSeq.findByPk(guideSeqsId);

        if(!guideSeq){
            res.status(404).json({
                message: "There is no guide sequence with id =="+guideSeqsId,
                error: "404"
            });
        } else {
            await guideSeq.destroy();
            res.status(200).json('Guide sequence successfully deleted!');
        }
    }catch(error){
        res.status(500).json({
            message: "Error: It was not possible to delete guide sequence id == "+req.params.id,
            error: error.message
        })
    }
}

exports.updateGuideSeq = async (req, res) => {
    try{
        let guideSeq = await GuideSeq.findByPk(req.body.id);

        if(!guideSeq){
            // return a response to client
            res.status(404).json({
                message: "There is no guide sequence with id == "+guideSeqsId,
                error: "404"
            });
        } else {
            // update new change to database
            let updatedObject = {
                gene: req.body.gene,
                sequence: req.body.sequence,
                species: req.body.species,
            }
            let result = await GuideSeq.update(updatedObject,
                    {
                    returning: true,
                    where: {id: req.body.id},
                    attributes: ['id', 'gene', 'species', 'sequence']
                    }
                );
        // return the response to client

        if(!result) {
            res.status(500).json({
                message: "Error -> No change performed on guide sequence with id =="+req.params.id,
                error: "Could not be changed",
            });
        }

        res.status(200).json("Guide sequence successfully changed");
        }
    }catch(error){
        res.status(500).json({
            message: "Error -> Could not change guide sequence with id == "+req.params.id,
            error: error.message
        });
    }
}

