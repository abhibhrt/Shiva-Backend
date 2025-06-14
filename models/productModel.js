const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  avgKmPerCharge: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  colorsAvailable: {
    type: [String],
    default: [],
  },
  warranty: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  images: {
    type: [String],
    default: [],
  },
  battery: {
    type: {
      type: [String] // ['VRLA', 'Lithium']
    },
    ratingAh: {
      type: [Number], // e.g. [135, 145, 150, 160]
    },
    lithiumRating: Number, // e.g. 100
    numberOfBatteries: {
      vrla: Number,
      lithium: Number,
    },
    chargerType: String, // e.g. SMPS
    chargerRatingA: Number,
    chargingTime: {
      vrla: String, // "8 Hours"
      lithium: String, // "4 Hours"
    },
    mileagePerFullCharge: String, // e.g. "120 - 150 kmpc"
  },

  powertrain: {
    motorOutputRated: Number, // 1200
    motorOutputPeak: Number, // 2000
    motorType: String, // e.g. "BLDC - Hub Type"
    topSpeed: String, // e.g. "25 kmph"
  },

  wheelsAndBrakes: {
    tyreSize: String, // e.g. "3.75 x 12 inch"
    rimSize: String, // e.g. "12 inch"
    rimType: String, // e.g. "Alloy"
    turningRadius: String, // e.g. "2.3 meters"
    frontBrakes: String, // e.g. "Drum"
    rearBrakes: String, // e.g. "Drum"
  },

  frameAndChassis: {
    chassisType: String, // e.g. "MS Heavy Duty Tubular"
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
    },
    groundClearance: Number,
    roofMaterial: String, // e.g. "CR Sheet Metal"
    frontSuspension: String, // e.g. "Telescopic"
    rearSuspension: String, // e.g. "Leaf Spring + Shock Absorber"
    seatingCapacity: String, // "Driver + 4"
    passengerSeat: String, // e.g. "Double Bonded & Cushion Type"
    payloadCapacityKg: Number,
  },

  additionalFeatures: {
    digitalSpeedometer: Boolean,
    reverseCamera: { type: String, enum: ['Yes', 'Optional', 'No'], default: 'No' },
    stepneeCover: Boolean,
    bluetoothMusicSystem: Boolean,
    ledHeadlights: Boolean,
    ledTurnTailLights: Boolean,
    passengerGrabHandles: Boolean,
    passengerCurtains: Boolean,
    fireExtinguisher: Boolean,
    rubberFloorMats: Boolean,
    toolKit: Boolean,
    openingRearDoor: { type: String, enum: ['Yes', 'Optional', 'No'], default: 'No' },
    roofCarrier: Boolean,
    cabinLight: Boolean,
    taxiLight: { type: String, enum: ['Yes', 'Optional', 'No'], default: 'No' },
    reverseBuzzer: { type: String, enum: ['Yes', 'Optional', 'No'], default: 'No' },
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;