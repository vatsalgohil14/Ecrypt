const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileAvatarUrl: {
      type: String,
      required: true,
    },
    
    cardsData: {

      bankCardsArray: [
        {
          title: {
            type: String,
            required: true,
          },
          logoIndex: {
            type: Number,
            required: true,
          },
          category: {
            type: String,
            required: true,
          },
          cardHolder: {
            type: String,
            required: true,
          },
          cardNumber: {
            type: String,
            required: true,
          },

          expiry: {
            type: String,
            required: true,
          },
          cvv: {
            type: String,
            required: true,
          },
          isFavourite: {
            type: Boolean,
            default: false,
            required: true,
          },
          time: { type: Date, default: Date.now }

        },
      ],

      identityCardsArray: [
        {
          title: {
            type: String,
            required: true,
          },
          logoIndex: {
            type: Number,
            required: true,
          },
          category: {
            type: String,
            required: true,
          },
          cardHolder: {
            type: String,
            required: true,
          },
          cardNumber: {
            type: String,
            required: true,
          },

          issueDate: {
            type: String,
            required: true,
          },
          dob: {
            type: String,
            required: true,
          },
          isFavourite: {
            type: Boolean,
            default: false,
            required: true,
          },
          time: { type: Date, default: Date.now }

        }
      ],
      licenseCardsArray: [
        {
          title: {
            type: String,
            required: true,
          },
          logoIndex: {
            type: Number,
            required: true,
          },
          category: {
            type: String,
            required: true,
          },
          cardHolder: {
            type: String,
            required: true,
          },
          licenseNumber: {
            type: String,
            required: true,
          },

          expiry: {
            type: String,
            required: true,
          },
          dob: {
            type: String,
            required: true,
          },
          isFavourite: {
            type: Boolean,
            default: false,
            required: true,
          },
          time: { type: Date, default: Date.now }
        }

      ],
    },
    loginIdsArray: [
      {
        title: {
          type: String,
          required: true,
        },
        logoIndex: {
          type: Number,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        app: {
          type: String,
          required: true,
        },
        username: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        isFavourite: {
          type: Boolean,
          default: false,
          required: true,
        },
      },
    ],
    docsArray: [
      {
        imageName: {
          type: String,
          required: true,
        },

        imageUrl: {
          type: String,
          required: true,
        },

        cloudinary_id: {
          type: String,
          required: true,
        },
        isFavourite: {
          type: Boolean,
          default: false,
        },
      },
    ],
    activities: [{ type: mongoose.Schema.Types.Mixed, }],
  }

);




const UserDatabase = mongoose.model("userdatas", userSchema);
module.exports = { UserDatabase };
