const mongoose = require("mongoose");

const CordinateSchema =  new mongoose.Schema(
    {
        latitude: {
            type: Number,
            required: true
          },
          longitude: {
            type: Number,
            required: true
          }

    },
    {timestamps: true}
)

const Coordinate = mongoose.model('Coordinate', CordinateSchema);

module.exports = Coordinate;