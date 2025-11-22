const mongoose = require("mongoose");
const Listing = require("../Wanderlust/models/listing");

async function addCoordinates() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
    console.log("Connected to MongoDB");

    // Get all listings without geometry
    const listings = await Listing.find({
      $or: [{ geometry: { $exists: false } }, { geometry: null }],
    });

    console.log(`Found ${listings.length} listings without coordinates`);

    // Default coordinates for different countries (approximate)
    const countryCoordinates = {
      India: [78.9629, 20.5937],
      USA: [-95.7129, 37.0902],
      Switzerland: [8.2275, 46.8182],
      Greenland: [-42.6043, 71.7069],
      Jordan: [36.2384, 30.5852],
      Netherlands: [5.2913, 52.1326],
      Japan: [138.2529, 36.2048],
      default: [0, 0],
    };

    // Update each listing
    for (let listing of listings) {
      const coords =
        countryCoordinates[listing.country] || countryCoordinates["default"];

      listing.geometry = {
        type: "Point",
        coordinates: coords,
      };

      await listing.save();
      console.log(`Updated: ${listing.title} - ${listing.country}`);
    }

    console.log("✅ Migration completed!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Migration error:", error);
    mongoose.connection.close();
  }
}

addCoordinates();
