const express = require('express');
const upload = require('../helper/upload');
const Advertisement = require('../models/advertisement');
const router = express.Router();

router.post('/addAdvertisement', upload.single('image'), async (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const formData = req.body;
    const fileData = req.file;
    const fileUrl = `uploads/${fileData.filename}`;

    try{
        const newAdvertisement = new Advertisement({
            provider: formData.provider,
            image: fileUrl,
            adType: formData.adType,
            location: formData.location,
            cost: formData.cost,
            rating: formData.rating,
            contact: formData.contact
        })

        await newAdvertisement.save();

        res.send({status: 1, message: "success"});
    }catch(error){
        res.status(500).send({status: -1, message:'Error saving to database.'});
    }
  });

  router.get('/allAds', async (req, res) => {
    try {
      const ads = await Advertisement.find();
      res.json(ads);
    } catch (error) {
      res.status(500).send('Error retrieving advertisements.');
    }
  });

  router.get('/ads/:id', async (req, res) => {
    try {
      const ad = await Advertisement.findById(req.params.id);
      if (!ad) {
        return res.status(404).send('Advertisement not found.');
      }
      res.json(ad);
    } catch (error) {
      res.status(500).send(`Error retrieving the advertisement. ${error}`);
    }
  });

  module.exports = router