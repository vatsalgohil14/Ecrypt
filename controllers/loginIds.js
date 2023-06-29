const { UserDatabase } = require("../models/userData");
const mongoose = require("mongoose");

const loginsController = {
  getLoginIds: async (req, res) => {
    // console.log(req.query.user_id)
    try {
      const loginIds = await UserDatabase.findOne({ _id: req.query.user_id });
      // console.log(loginIds)
      res.status(200).send(loginIds.loginIdsArray);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  addLoginId: async (req, res) => {
    // console.log("at loginId controller", req.body.newLoginData, req.body.user_id);
    try {
      const response = await UserDatabase.findOneAndUpdate(
        { _id: req.body.user_id },
        { $push: { loginIdsArray: req.body.newLoginData } },
        { returnOriginal: false }
      );
      // console.log(response)
      const data = response;
      res.status(200).send(data);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  editLoginId: async (req, res) => {
    const id = req.params.id;
    const { title, category, app, username, password, logoIndex } = req.body;
    // console.log("at edit loginId", title)
    try {
      const response = await UserDatabase.findOneAndUpdate(
        { "loginIdsArray._id": id },
        {
          $set: {
            "loginIdsArray.$.title": title,
            "loginIdsArray.$.app": app,
            "loginIdsArray.$.category": category,
            "loginIdsArray.$.username": username,
            "loginIdsArray.$.password": password,
            "loginIdsArray.$.logoIndex": logoIndex,
          },
        },
        { returnOriginal: false }
      );
      res.status(200).json(response.loginIdsArray);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  deleteLoginId: async (req, res) => {
    const loginIdID = req.params.id;
    const userId = req.body.user_id;

    // console.log(loginIdID, userId);
    try {
      const response = await UserDatabase.findOneAndUpdate(
        { _id: userId },
        {
          $pull: {
            loginIdsArray: {
              _id: loginIdID,
            },
          },
        },
        { returnOriginal: false }
      );
      res.status(200).send(response.loginIdsArray);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  toggleFav: async (req, res) => {
    const id = req.params.id;
    const isFav = req.body.data;
    // console.log(id, isFav);

    try {
      const response = await UserDatabase.findOneAndUpdate(
        { "loginIdsArray._id": id },
        {
          $set: {
            "loginIdsArray.$.isFavourite": isFav,
          },
        },
        { returnOriginal: false }
      );
      res.status(201).json(response.loginIdsArray);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  getFavorites: async (req, res) => {
    // console.log('at fav fetch', req.query.user_id)
    try {
      const response = await UserDatabase.aggregate([
        { $match: { _id: mongoose.Types.ObjectId(req.query.user_id) } },
        {
          $project: {
            'loginIdsFavArray': {
              $filter: {
                input: "$loginIdsArray",
                as: "item",
                cond: { $eq: ["$$item.isFavourite", true] },
              },
            },
            'cardsFavArray.bankCards': {
              $filter: {
                input: "$cardsData.bankCardsArray",
                as: "item",
                cond: { $eq: ["$$item.isFavourite", true] },
              },
            },
            'cardsFavArray.identityCards': {
              $filter: {
                input: "$cardsData.identityCardsArray",
                as: "item",
                cond: { $eq: ["$$item.isFavourite", true] },
              },
            },
            'cardsFavArray.licenseCards': {
              $filter: {
                input: "$cardsData.licenseCardsArray",
                as: "item",
                cond: { $eq: ["$$item.isFavourite", true] },
              },
            },
            'docsArrayFavArray': {
              $filter: {
                input: "$docsArray",
                as: "item",
                cond: { $eq: ["$$item.isFavourite", true] },
              },
            },
          },
        },
      ]);
      res.status(200).send(response);
    } catch (error) {
      res.status(404).json(error);
    }
  },
};

module.exports = loginsController;
