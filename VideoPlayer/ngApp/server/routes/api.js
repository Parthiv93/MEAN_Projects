const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Video=require('../models/video');

require('dotenv').config();

const db= process.env.MONGODB_URI;

mongoose.connect(db)
.then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

  router.get('/videos', async (req, res) => {
    try {
      const videos = await Video.find({});
      res.json(videos);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  router.get('/videos/:id', async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
      res.json(video);
    } catch (err) {
      res.status(500).send(err); 
    }
  });

  router.post('/videos', async (req, res) => {
    try {
      const video = new Video();
      video.title = req.body.title;
      video.url = req.body.url;
      video.description = req.body.description;
      await video.save();
      res.json(video);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  router.put('/videos/:id', async (req, res) => {
    try {
      const video = await Video.findByIdAndUpdate
      (req.params.id, 
        {
          $set: { title: req.body.title, url: req.body.url, description: req.body.description }
        }, 
        { upsert: true }
      );
      res.json(video);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  router.delete('/videos/:id', async (req, res) => {
    try {
      const video = await Video.findByIdAndDelete(req.params.id);
      if (!video) {
        return res.status(404).json({ error: 'Video not found' });
      }
      res.json(video);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  

  

module.exports=router;