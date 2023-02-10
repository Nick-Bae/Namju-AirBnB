'use strict';
const moment = require('moment')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      Spot.belongsTo(models.User,  {foreignKey:'ownerId'})
      Spot.hasMany(models.Booking, {foreignKey:'spotId'})
      Spot.hasMany(models.Review, {foreignKey:'spotId'})
      Spot.hasMany(models.Image, {foreignKey:'spotId'})
      // Spot.hasMany(models.Image, {foreignKey:'spotId'})
    }
  };
  Spot.init({
    ownerId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    address: {
      type:
      DataTypes.STRING,
      allowNull:false
    },
    city: {
      type:
      DataTypes.STRING,
      allowNull:false
    },
    state: {
      type:
      DataTypes.STRING,
      allowNull:false
    },
    country: {
      type:
      DataTypes.STRING,
      allowNull:false
    },
    lat: {
      type:
      DataTypes.DECIMAL,
      allowNull:false
    },
    lng: {
      type:
      DataTypes.DECIMAL,
      allowNull:false
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      // unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    guestNum: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    createdAt: {
      type: DataTypes.DATE,                  
    get() {
          return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD hh:mm:ss');
      }
  },
  updatedAt: {
      type: DataTypes.DATE,
      get() {
          return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD hh:mm:ss');
      }
  }
  }, {
    sequelize,
    modelName: 'Spot',
    // defaultScope: {
    //   attributes: {
    //     exclude: ["createdAt", "updatedAt"]
    //   }
    // }
  });
  return Spot;
};