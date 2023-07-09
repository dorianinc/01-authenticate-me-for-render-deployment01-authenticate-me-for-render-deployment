"use strict";
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Spots";
    return queryInterface.bulkInsert(
      options,
      [
        {
          name: "Cozy LA Retreat",
          address: "1234 Maple Street",
          city: "Los Angeles",
          state: "California",
          country: "United States",
          lat: 34.0522,
          lng: -118.2437,
          description: "Welcome to your cozy retreat in LA! This modern apartment offers all the amenities you need for a comfortable stay. With stylish decor, a fully equipped kitchen, and a spacious living area, it's the perfect home away from home. Explore the vibrant city or simply relax and unwind in the serene ambiance. Book now and make unforgettable memories!",
          price: 350,
          minNights: 2,
          maxGuests: 8,
          ownerId: 1
        },
        {
          name: "SF Urban Oasis",
          address: "5678 Oak Avenue",
          city: "San Francisco",
          state: "California",
          country: "United States",
          lat: 37.7749,
          lng: -122.4194,
          description: "Welcome to San Francisco! This charming apartment in the heart of the city offers a perfect blend of comfort and convenience. Immerse yourself in the vibrant culture, visit iconic landmarks, and savor the culinary delights. The tastefully furnished rooms, fully equipped kitchen, and breathtaking views make it an ideal choice for your stay. Don't miss out on this enchanting experience!",
          price: 250,
          minNights: 3,
          maxGuests: 4,
          ownerId: 1
        },
        {
          name: "Modern SD Apartment",
          address: "9876 Elm Street",
          city: "San Diego",
          state: "California",
          country: "United States",
          lat: 32.7157,
          lng: -117.1611,
          description: "Experience the vibrant city of San Diego from the comfort of this modern apartment. Located in a prime location, it offers easy access to popular attractions, stunning beaches, and a variety of culinary delights. Relax in the cozy living space, enjoy the gorgeous views, and indulge in the local culture. With comfortable accommodations and a welcoming atmosphere, your stay in San Diego will be unforgettable.",
          price: 400,
          minNights: 2,
          maxGuests: 6,
          ownerId: 2
        },
        {
          name: "Charming Santa Barbara House",
          address: "5432 Pine Lane",
          city: "Santa Barbara",
          state: "California",
          country: "United States",
          lat: 34.4208,
          lng: -119.6982,
          description: "Welcome to your home in Santa Barbara! This charming house offers a perfect blend of comfort and convenience. Located in a peaceful neighborhood, it provides easy access to beautiful beaches, picturesque vineyards, and vibrant downtown. Relax in the spacious rooms, enjoy the well-manicured garden, and soak up the sunny weather. With its ideal location and cozy ambiance, this is the perfect place for your stay in Santa Barbara.",
          price: 300,
          minNights: 3,
          maxGuests: 8,
          ownerId: 2
        },
        {
          name: "Stylish Loft in SF",
          address: "2468 Cypress Street",
          city: "San Francisco",
          state: "California",
          country: "United States",
          lat: 37.7749,
          lng: -122.4194,
          description: "Welcome to your urban oasis in San Francisco! This stylish loft apartment is located in the heart of the city, offering a perfect blend of modern comfort and vibrant atmosphere. With its open floor plan, sleek design, and stunning city views, it's the ideal space to relax and recharge. Explore the city's eclectic neighborhoods, visit world-renowned attractions, and indulge in the diverse culinary scene. Your unforgettable San Francisco experience awaits!",
          price: 450,
          minNights: 2,
          maxGuests: 4,
          ownerId: 3
        },
        {
          name: "Beachfront Villa in LA",
          address: "1357 Redwood Avenue",
          city: "Los Angeles",
          state: "California",
          country: "United States",
          lat: 34.0522,
          lng: -118.2437,
          description: "Welcome to sunny Los Angeles! This spacious beachfront villa offers a luxurious and relaxing getaway. With its breathtaking ocean views, private pool, and modern amenities, it's the perfect retreat for a memorable vacation. Whether you want to unwind by the pool, explore nearby attractions, or soak up the sun on the sandy beach, this villa provides the ultimate beachfront experience. Get ready to indulge in the California coastal lifestyle!",
          price: 500,
          minNights: 3,
          maxGuests: 10,
          ownerId: 3
        },
        {
          name: "Beachfront Condo in Santa Monica",
          address: "9876 Ocean Avenue",
          city: "Santa Monica",
          state: "California",
          country: "United States",
          lat: 34.0194,
          lng: -118.4912,
          description: "Welcome to your beachfront getaway in Santa Monica! This stunning condo offers breathtaking ocean views, luxurious amenities, and a prime location just steps away from the sandy beach. Relax on the private balcony, take a refreshing swim in the pool, or stroll along the iconic Santa Monica Pier. With its prime location and elegant design, this is the perfect retreat for a memorable coastal vacation.",
          price: 400,
          minNights: 2,
          maxGuests: 6,
          ownerId: 4
        },
        {
          name: "Cozy Beach Cottage in SD",
          address: "2468 Palm Street",
          city: "San Diego",
          state: "California",
          country: "United States",
          lat: 32.7157,
          lng: -117.1611,
          description: "Welcome to sunny San Diego! This cozy beach cottage offers a relaxing and charming stay just steps away from the sand. With its bright and airy interior, outdoor patio, and proximity to local attractions, it's the perfect place to enjoy the coastal lifestyle. Take a surf lesson, visit the world-famous San Diego Zoo, or simply unwind on the nearby beach. Experience the best of California in this delightful beach cottage.",
          price: 300,
          minNights: 3,
          maxGuests: 8,
          ownerId: 4
        },
        {
          name: "Modern City Apartment in SF",
          address: "4321 Elmwood Lane",
          city: "San Francisco",
          state: "California",
          country: "United States",
          lat: 37.7749,
          lng: -122.4194,
          description: "Welcome to your modern city escape in San Francisco! This newly renovated apartment offers contemporary design, comfortable furnishings, and a prime location. Explore the city's vibrant neighborhoods, discover hidden gems, and indulge in the diverse culinary scene. After a day of exploration, return to the cozy ambiance of your stylish retreat. Unwind, recharge, and create unforgettable memories in the city by the bay.",
         price: 380,
          minNights: 2,
          maxGuests: 5,
          ownerId: 5
        },
        {
          name: "Luxury Villa in LA",
          address: "7890 Oakwood Avenue",
          city: "Los Angeles",
          state: "California",
          country: "United States",
          lat: 34.0522,
          lng: -118.2437,
          description: "Welcome to the vibrant city of Los Angeles! This spacious villa offers a luxurious and private oasis. With its modern design, stunning outdoor area, and high-end amenities, it's the perfect place for a memorable stay. Relax by the pool, enjoy the breathtaking views of the city, or venture out to explore nearby attractions. Experience the glamour and excitement of L.A. in this exclusive villa.",
          price: 480,
          minNights: 3,
          maxGuests: 7,
          ownerId: 5
        },
        {
          name: "Beachfront House in SD",
          address: "9876 Palm Avenue",
          city: "San Diego",
          state: "California",
          country: "United States",
          lat: 32.7157,
          lng: -117.1611,
          description: "Welcome to sunny San Diego! This beautiful beachfront house offers the perfect retreat for a relaxing vacation. With its stunning ocean views, private beach access, and spacious outdoor area, it's an idyllic coastal getaway. Relax on the sun-drenched terrace, listen to the waves, and soak up the California sunshine. Experience the ultimate beachfront lifestyle in this charming San Diego escape.",
          price: 520,
          minNights: 2,
          maxGuests: 6,
          ownerId: 6
        },
        {
          name: "Quaint Cottage in Santa Barbara",
          address: "5432 Cedar Street",
          city: "Santa Barbara",
          state: "California",
          country: "United States",
          lat: 34.4208,
          lng: -119.6982,
          description: "Welcome to the enchanting city of Santa Barbara! This cozy cottage offers a delightful stay in a charming neighborhood. With its inviting interior, peaceful garden, and proximity to local attractions, it's the perfect base for exploring the area. Stroll along the scenic coastline, visit the renowned wineries, or simply relax in the comfort of your home away from home. Experience the magic of Santa Barbara in this quaint cottage.",
          price: 380,
          minNights: 3,
          maxGuests: 8,
          ownerId: 6
        },
        {
          name: "Stylish Loft in SF",
          address: "1234 Sunset Boulevard",
          city: "Los Angeles",
          state: "California",
          country: "United States",
          lat: 34.0522,
          lng: -118.2437,
          description: "Welcome to the heart of Los Angeles! This stylish loft apartment offers a trendy and comfortable stay in the city. With its modern design, open layout, and convenient location, it's the perfect base for exploring L.A.'s vibrant culture, entertainment, and culinary scene. Enjoy the breathtaking city views, discover nearby attractions, and experience the energetic atmosphere of the city of angels.",
          price: 450,
          minNights: 2,
          maxGuests: 4,
          ownerId: 7
        },
        {
          name: "Modern Apartment in SF",
          address: "5678 Vine Street",
          city: "San Francisco",
          state: "California",
          country: "United States",
          lat: 37.7749,
          lng: -122.4194,
          description: "Welcome to the iconic city of San Francisco! This spacious apartment offers a comfortable and convenient stay in the heart of the city. With its prime location, modern amenities, and stunning views, it's the perfect home base for exploring the city's famous landmarks, cultural attractions, and culinary delights. Immerse yourself in the vibrant atmosphere of San Francisco and create unforgettable memories.",
          price: 350,
          minNights: 3,
          maxGuests: 6,
          ownerId: 7
        },
        {
          name: "Beachfront Condo in Santa Monica",
          address: "2468 Ocean Boulevard",
          city: "Santa Monica",
          state: "California",
          country: "United States",
          lat: 34.0194,
          lng: -118.4912,
          description: "Welcome to your beachfront retreat in Santa Monica! This stunning condo offers panoramic ocean views, luxurious amenities, and a prime location just steps away from the sandy beach. Relax on your private balcony, take a dip in the sparkling pool, or explore the vibrant Santa Monica Pier. With its prime location and upscale design, this is the perfect getaway for a memorable beachside vacation.",
          price: 400,
          minNights: 2,
          maxGuests: 6,
          ownerId: 8
        },
        {
          name: "Cozy Beach Cottage in SD",
          address: "1357 Palm Tree Lane",
          city: "San Diego",
          state: "California",
          country: "United States",
          lat: 32.7157,
          lng: -117.1611,
          description: "Welcome to sunny San Diego! This charming beach cottage offers a cozy and relaxed stay in the coastal city. With its inviting interior, outdoor patio, and proximity to beautiful beaches, it's the perfect place to unwind and soak up the California sunshine. Discover local attractions, indulge in delicious cuisine, or simply relax in the comfort of your beachside retreat. Experience the laid-back vibe of San Diego in this delightful cottage.",
          price: 350,
          minNights: 3,
          maxGuests: 8,
          ownerId: 8
        },
        {
          name: "Beachfront House in LA",
          address: "9876 Beachside Avenue",
          city: "Los Angeles",
          state: "California",
          country: "United States",
          lat: 34.0522,
          lng: -118.2437,
          description: "Welcome to your beachside retreat in Los Angeles! This modern and spacious villa offers a luxurious and comfortable stay just steps away from the sandy beach. With its stunning ocean views, private pool, and stylish interior, it's the perfect getaway for a relaxing vacation. Indulge in the vibrant beach culture, explore nearby attractions, or simply unwind in the tranquil ambiance of your own private oasis.",
          price: 500,
          minNights: 2,
          maxGuests: 10,
          ownerId: 9
        },
        {
          name: "Modern Apartment in SF",
          address: "5432 Sunset Avenue",
          city: "San Francisco",
          state: "California",
          country: "United States",
          lat: 37.7749,
          lng: -122.4194,
          description: "Welcome to the dynamic city of San Francisco! This elegant and spacious apartment offers a comfortable and convenient stay in the heart of the city. With its prime location, modern amenities, and stunning views, it's the perfect base for exploring the city's iconic landmarks, vibrant neighborhoods, and world-class dining scene. Immerse yourself in the uniqueculture and energy of San Francisco!",
          price: 450,
          minNights: 3,
          maxGuests: 8,
          ownerId: 9
        },
        {
          name: "Beachfront Retreat in SD",
          address: "1234 Ocean View Drive",
          city: "San Diego",
          state: "California",
          country: "United States",
          lat: 32.7157,
          lng: -117.1611,
          description: "Welcome to your beachfront retreat in sunny San Diego! This stunning villa offers breathtaking ocean views, luxurious amenities, and direct access to the sandy beach. Relax in the spacious living areas, take a dip in the private pool, or enjoy a barbecue on the expansive patio. With its prime location and upscale design, this is the perfect escape for an unforgettable beach vacation.",
          price: 550,
          minNights: 2,
          maxGuests: 12,
          ownerId: 10
        },
        {
          name: "Chic City Apartment in LA",
          address: "5678 Sunset Boulevard",
          city: "Los Angeles",
          state: "California",
          country: "United States",
          lat: 34.0522,
          lng: -118.2437,
          description: "Welcome to the glamorous city of Los Angeles! This modern apartment offers a comfortable and stylish stay in a prime location. With its sleek design, well-appointed furnishings, and proximity to popular attractions, it's the perfect base for exploring the vibrant city. Immerse yourself in the entertainment industry, visit iconic landmarks, and indulge in the diverse culinary scene. Experience the allure of L.A. in this chic apartment.",
          price: 400,
          minNights: 3,
          maxGuests: 6,
          ownerId: 10
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Spots";
    return queryInterface.bulkDelete(options, null, {});
  },
};
