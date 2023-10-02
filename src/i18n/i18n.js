import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      code: "en",
      name: "English",
      native_name: "English",
      status: 1,
      direction: "ltr",
      modals: [
        {
          name: "login",
          tabs: [
            {
              id: 3,
              modal_id: 5,
              name: "login",
              fields: [
                {
                  id: 5,
                  tab_id: 3,
                  name: "login to metargb",
                  translation: "login to MetaRGB",
                },
                {
                  id: 8,
                  tab_id: 3,
                  name: "enter-your-email",
                  translation: "Enter your email",
                },
                {
                  id: 11,
                  tab_id: 3,
                  name: "password",
                  translation: "Password",
                },
                {
                  id: 14,
                  tab_id: 3,
                  name: "login",
                  translation: "login",
                },
                {
                  id: 17,
                  tab_id: 3,
                  name: "remember me",
                  translation: "Remember me",
                },
                {
                  id: 20,
                  tab_id: 3,
                  name: "forget password",
                  translation: "Forget password",
                },
                {
                  id: 3449,
                  tab_id: 3,
                  name: "register",
                  translation: "Register",
                },
                {
                  id: 3463,
                  tab_id: 3,
                  name: "for more information and answers to",
                  translation: "For more information and answers to",
                },
                {
                  id: 3470,
                  tab_id: 3,
                  name: "visit-the",
                  translation: "question, visit the",
                },
                {
                  id: 3477,
                  tab_id: 3,
                  name: "website.",
                  translation: "website",
                },
                {
                  id: 3484,
                  tab_id: 3,
                  name: "email or password is not valid.",
                  translation: "Email or password is not valid.",
                },
                {
                  id: 3491,
                  tab_id: 3,
                  name: "accounts are for single",
                  translation:
                    "Metarang citizen accounts are for single people and two people cannot log in at the same time.",
                },
                {
                  id: 3499,
                  tab_id: 3,
                  name: "you agree",
                  translation: "You agree.",
                },
                {
                  id: 3862,
                  tab_id: 3,
                  name: "terms of service contract",
                  translation: "Terms of service contract",
                },
                {
                  id: 3883,
                  tab_id: 3,
                  name: "please specify",
                  translation: "Please specify that you are not a robot",
                },
              ],
            },
          ],
        },
        {
          name: "register",
          tabs: [
            {
              id: 6,
              modal_id: 8,
              name: "register",
              fields: [
                {
                  id: 29,
                  tab_id: 6,
                  name: "register in meta rgb",
                  translation: "Register in MetaRGB",
                },
                {
                  id: 32,
                  tab_id: 6,
                  name: "username",
                  translation: "User Name",
                },
                {
                  id: 35,
                  tab_id: 6,
                  name: "enter your email",
                  translation: "Enter your email",
                },
                {
                  id: 41,
                  tab_id: 6,
                  name: "password",
                  translation: "Password",
                },
                {
                  id: 44,
                  tab_id: 6,
                  name: "register",
                  translation: "Register",
                },
                {
                  id: 47,
                  tab_id: 6,
                  name: "log-in",
                  translation: "log in",
                },
                {
                  id: 53,
                  tab_id: 6,
                  name: "remember-me",
                  translation: "Remember Me",
                },
                {
                  id: 3393,
                  tab_id: 6,
                  name: "visit-the",
                  translation: "question, visit the",
                },
                {
                  id: 3400,
                  tab_id: 6,
                  name: "website.",
                  translation: "website",
                },
                {
                  id: 3407,
                  tab_id: 6,
                  name: "the password must contain",
                  translation:
                    "The password must contain numbers, symbols, and English lowercase and uppercase letters.",
                },
                {
                  id: 3414,
                  tab_id: 6,
                  name: "the user name is limited to hm-",
                  translation: "the user name is limited to hm-.",
                },
                {
                  id: 3421,
                  tab_id: 6,
                  name: "your email is not valid",
                  translation: "Your email is not valid.",
                },
                {
                  id: 3428,
                  tab_id: 6,
                  name: "this email has already been registered",
                  translation: "This email has already been registered.",
                },
                {
                  id: 3435,
                  tab_id: 6,
                  name: "this username is already registered",
                  translation: "This username is already registered.",
                },
                {
                  id: 3456,
                  tab_id: 6,
                  name: "for more information and answers to",
                  translation: "For more information and answers to questions,",
                },
              ],
            },
            {
              id: 304,
              modal_id: 8,
              name: "citizen-account-activation",
              fields: [
                {
                  id: 3505,
                  tab_id: 304,
                  name: "citizen account activation",
                  translation: "Citizen Account Activation",
                },
                {
                  id: 3512,
                  tab_id: 304,
                  name: "an email address",
                  translation: "An Email Address",
                },
                {
                  id: 3519,
                  tab_id: 304,
                  name: "sent",
                  translation: "Sent.",
                },
                {
                  id: 3526,
                  tab_id: 304,
                  name: "to confirm and activate",
                  translation: "To confirm and activate your account, click",
                },
                {
                  id: 3533,
                  tab_id: 304,
                  name: "on the link in the email",
                  translation: "on the link in the email",
                },
                {
                  id: 3540,
                  tab_id: 304,
                  name: "view gmail",
                  translation: "View gmail",
                },
                {
                  id: 3547,
                  tab_id: 304,
                  name: "view email",
                  translation: "View email",
                },
                {
                  id: 3554,
                  tab_id: 304,
                  name: "view yahoo",
                  translation: "View yahoo",
                },
                {
                  id: 3561,
                  tab_id: 304,
                  name: "view outlook",
                  translation: "View outlook",
                },
                {
                  id: 3568,
                  tab_id: 304,
                  name: "re-send the email",
                  translation:
                    "Re-send the citizenship account confirmation email",
                },
                {
                  id: 3575,
                  tab_id: 304,
                  name: "for more information",
                  translation: "For more information and answers to questions,",
                },
                {
                  id: 3582,
                  tab_id: 304,
                  name: "visit the",
                  translation: "visit the",
                },
                {
                  id: 3589,
                  tab_id: 304,
                  name: "website",
                  translation: "website",
                },
              ],
            },
          ],
        },
        {
          name: "training",
          tabs: [
            {
              id: 137,
              modal_id: 11,
              name: "central-school",
              fields: [
                {
                  id: 2118,
                  tab_id: 137,
                  name: "description",
                  translation:
                    "An institute that presents fresh content daily with immersive features, offering a unique and engaging learning experience.",
                },
                {
                  id: 2122,
                  tab_id: 137,
                  name: "key phrase",
                  translation: "metaverse training",
                },
                {
                  id: 2126,
                  tab_id: 137,
                  name: "page title",
                  translation:
                    "MetaVerse Video Tutorials: A New Realm of Experiential Learning",
                },
                {
                  id: 2130,
                  tab_id: 137,
                  name: "search for your desired tutorial",
                  translation: "Search for Your Desired Tutorial",
                },
                {
                  id: 2134,
                  tab_id: 137,
                  name: "top coaches",
                  translation: "Top Coaches",
                },
                {
                  id: 2138,
                  tab_id: 137,
                  name: "view more coaches",
                  translation: "View More Coaches",
                },
                {
                  id: 2142,
                  tab_id: 137,
                  name: "explore more categories",
                  translation: "Explore More Categories",
                },
                {
                  id: 2146,
                  tab_id: 137,
                  name: "see more",
                  translation: "See More",
                },
              ],
            },
            {
              id: 145,
              modal_id: 11,
              name: "internal-training",
              fields: [],
            },
            {
              id: 149,
              modal_id: 11,
              name: "categories",
              fields: [],
            },
            {
              id: 165,
              modal_id: 11,
              name: "education-page",
              fields: [
                {
                  id: 2222,
                  tab_id: 165,
                  name: "latest tutorials",
                  translation: "Latest Tutorials",
                },
                {
                  id: 2226,
                  tab_id: 165,
                  name: "publication date",
                  translation: "Publication Date",
                },
                {
                  id: 2230,
                  tab_id: 165,
                  name: "enter your comment",
                  translation: "Enter Your Comment",
                },
                {
                  id: 2234,
                  tab_id: 165,
                  name: "submit report",
                  translation: "Submit Report",
                },
                {
                  id: 2238,
                  tab_id: 165,
                  name: "see more",
                  translation: "See More",
                },
                {
                  id: 2242,
                  tab_id: 165,
                  name: "related tutorials",
                  translation: "Related Tutorials",
                },
              ],
            },
            {
              id: 169,
              modal_id: 11,
              name: "modal-tutorials",
              fields: [],
            },
          ],
        },
        {
          name: "store",
          tabs: [
            {
              id: 12,
              modal_id: 14,
              name: "tools",
              fields: [
                {
                  id: 59,
                  tab_id: 12,
                  name: "toman",
                  translation: "Toman",
                },
                {
                  id: 62,
                  tab_id: 12,
                  name: "yellow",
                  translation: "Yellow",
                },
                {
                  id: 65,
                  tab_id: 12,
                  name: "red",
                  translation: "Red",
                },
                {
                  id: 68,
                  tab_id: 12,
                  name: "blue",
                  translation: "Blue",
                },
                {
                  id: 71,
                  tab_id: 12,
                  name: "number",
                  translation: "Number",
                },
                {
                  id: 161,
                  tab_id: 12,
                  name: "store",
                  translation: "Store",
                },
                {
                  id: 722,
                  tab_id: 12,
                  name: "tools",
                  translation: "tools",
                },
                {
                  id: 726,
                  tab_id: 12,
                  name: "currencies",
                  translation: "Currencies",
                },
              ],
            },
            {
              id: 15,
              modal_id: 14,
              name: "currencies",
              fields: [
                {
                  id: 74,
                  tab_id: 15,
                  name: "toman",
                  translation: "Toman",
                },
                {
                  id: 77,
                  tab_id: 15,
                  name: "yellow",
                  translation: "Yellow",
                },
                {
                  id: 80,
                  tab_id: 15,
                  name: "red",
                  translation: "Red",
                },
                {
                  id: 83,
                  tab_id: 15,
                  name: "blue",
                  translation: "Blue",
                },
                {
                  id: 86,
                  tab_id: 15,
                  name: "number",
                  translation: "Number",
                },
                {
                  id: 164,
                  tab_id: 15,
                  name: "store",
                  translation: "Store",
                },
                {
                  id: 730,
                  tab_id: 15,
                  name: "tools",
                  translation: "tools",
                },
                {
                  id: 734,
                  tab_id: 15,
                  name: "currencies",
                  translation: "Currencies",
                },
              ],
            },
          ],
        },
        {
          name: "notification",
          tabs: [
            {
              id: 18,
              modal_id: 17,
              name: "notification",
              fields: [
                {
                  id: 89,
                  tab_id: 18,
                  name: "incoming notifications",
                  translation: "Incoming notifications",
                },
                {
                  id: 92,
                  tab_id: 18,
                  name: "change the notification status to viewed",
                  translation: "Change the notification status to viewed",
                },
              ],
            },
          ],
        },
        {
          name: "report",
          tabs: [
            {
              id: 21,
              modal_id: 20,
              name: "report",
              fields: [
                {
                  id: 95,
                  tab_id: 21,
                  name: "choose a topic",
                  translation: "Choose a topic",
                },
                {
                  id: 98,
                  tab_id: 21,
                  name: "display error",
                  translation: "Display error",
                },
                {
                  id: 101,
                  tab_id: 21,
                  name: "error in spelling",
                  translation: "Error in spelling",
                },
                {
                  id: 104,
                  tab_id: 21,
                  name: "error in coding",
                  translation: "Error in coding",
                },
                {
                  id: 107,
                  tab_id: 21,
                  name: "slow system fps",
                  translation: "Slow system fps",
                },
                {
                  id: 110,
                  tab_id: 21,
                  name: "respectful",
                  translation: "Respectful",
                },
                {
                  id: 113,
                  tab_id: 21,
                  name: "title",
                  translation: "Title",
                },
                {
                  id: 116,
                  tab_id: 21,
                  name: "the text of the report",
                  translation: "The text of the report",
                },
                {
                  id: 119,
                  tab_id: 21,
                  name: "drop files here or click to upload",
                  translation: "Drop files here or click to upload",
                },
                {
                  id: 122,
                  tab_id: 21,
                  name: "submit",
                  translation: "Submit",
                },
                {
                  id: 125,
                  tab_id: 21,
                  name: "list of reports",
                  translation: "List of reports",
                },
                {
                  id: 128,
                  tab_id: 21,
                  name: "title",
                  translation: "Title",
                },
                {
                  id: 131,
                  tab_id: 21,
                  name: "reports",
                  translation: "Reports",
                },
                {
                  id: 134,
                  tab_id: 21,
                  name: "issue",
                  translation: "Issue",
                },
                {
                  id: 137,
                  tab_id: 21,
                  name: "date of release",
                  translation: "Date of Release",
                },
                {
                  id: 140,
                  tab_id: 21,
                  name: "the operation",
                  translation: "The operation",
                },
              ],
            },
          ],
        },
        {
          name: "hour-meter-profit",
          tabs: [
            {
              id: 27,
              modal_id: 23,
              name: "property-interest",
              fields: [
                {
                  id: 149,
                  tab_id: 27,
                  name: "hourly profit absorption",
                  translation: "Hourly profit absorption",
                },
                {
                  id: 152,
                  tab_id: 27,
                  name: "property interest",
                  translation: "Property interest",
                },
                {
                  id: 155,
                  tab_id: 27,
                  name: "account type",
                  translation: "Account Type",
                },
                {
                  id: 158,
                  tab_id: 27,
                  name: "last collection",
                  translation: "Last collection",
                },
              ],
            },
          ],
        },
        {
          name: "account-security",
          tabs: [
            {
              id: 30,
              modal_id: 26,
              name: "account-security",
              fields: [
                {
                  id: 167,
                  tab_id: 30,
                  name: "account security",
                  translation: "Account security",
                },
                {
                  id: 170,
                  tab_id: 30,
                  name: "how long you want your wallet to be off",
                  translation: "How long you want your wallet to be off",
                },
                {
                  id: 173,
                  tab_id: 30,
                  name: "minutes",
                  translation: "minutes",
                },
                {
                  id: 176,
                  tab_id: 30,
                  name: "if you have not received the confirmation code, you can send the confirmation code again in 00:00  minutes",
                  translation:
                    "If you have not received the confirmation code, you can send the confirmation code again in 00:00  minutes",
                },
                {
                  id: 179,
                  tab_id: 30,
                  name: "confirmation",
                  translation: "onfirmation",
                },
                {
                  id: 182,
                  tab_id: 30,
                  name: "minutes left to relock user account security",
                  translation: "Minutes left to relock user account security",
                },
              ],
            },
          ],
        },
        {
          name: "search-in-metarang",
          tabs: [
            {
              id: 33,
              modal_id: 29,
              name: "citizen-search",
              fields: [
                {
                  id: 185,
                  tab_id: 33,
                  name: "search in metaverse rang",
                  translation: "Search in color metaverse",
                },
                {
                  id: 188,
                  tab_id: 33,
                  name: "search for citizen name or id",
                  translation: "Search for citizen name or ID",
                },
                {
                  id: 191,
                  tab_id: 33,
                  name: "there is no information, search",
                  translation: "There is no information, search",
                },
                {
                  id: 194,
                  tab_id: 33,
                  name: "citizen id",
                  translation: "Citizen ID",
                },
                {
                  id: 197,
                  tab_id: 33,
                  name: "name of the citizen",
                  translation: "Name of the citizen",
                },
                {
                  id: 200,
                  tab_id: 33,
                  name: "level",
                  translation: "level",
                },
                {
                  id: 203,
                  tab_id: 33,
                  name: "followers",
                  translation: "Followers",
                },
                {
                  id: 206,
                  tab_id: 33,
                  name: "unity",
                  translation: "Unity",
                },
                {
                  id: 212,
                  tab_id: 33,
                  name: "citizen search",
                  translation: "Citizen search",
                },
                {
                  id: 362,
                  tab_id: 33,
                  name: "property search",
                  translation: "Property search",
                },
              ],
            },
            {
              id: 36,
              modal_id: 29,
              name: "property-search",
              fields: [
                {
                  id: 209,
                  tab_id: 36,
                  name: "search in metaverse rang",
                  translation: "Search in color metaverse",
                },
                {
                  id: 215,
                  tab_id: 36,
                  name: "citizen search",
                  translation: "Citizen search",
                },
                {
                  id: 218,
                  tab_id: 36,
                  name: "property search",
                  translation: "Property search",
                },
                {
                  id: 221,
                  tab_id: 36,
                  name: "search for property address or id",
                  translation: "Search for property address or ID",
                },
                {
                  id: 224,
                  tab_id: 36,
                  name: "there is no information, search",
                  translation: "There is no information, search",
                },
                {
                  id: 227,
                  tab_id: 36,
                  name: "property id",
                  translation: "Property ID",
                },
                {
                  id: 230,
                  tab_id: 36,
                  name: "usage",
                  translation: "usage",
                },
                {
                  id: 233,
                  tab_id: 36,
                  name: "owner id",
                  translation: "Owner ID",
                },
                {
                  id: 236,
                  tab_id: 36,
                  name: "irr pricing",
                  translation: "IRR pricing",
                },
                {
                  id: 239,
                  tab_id: 36,
                  name: "psc pricing",
                  translation: "PSC pricing",
                },
                {
                  id: 242,
                  tab_id: 36,
                  name: "property address",
                  translation: "property address",
                },
              ],
            },
          ],
        },
        {
          name: "citizenship-account",
          tabs: [
            {
              id: 42,
              modal_id: 35,
              name: "general",
              fields: [
                {
                  id: 245,
                  tab_id: 42,
                  name: "collection of assets",
                  translation: "collection of assets",
                },
                {
                  id: 248,
                  tab_id: 42,
                  name: "psc",
                  translation: "psc",
                },
                {
                  id: 251,
                  tab_id: 42,
                  name: "rial",
                  translation: "Rial",
                },
                {
                  id: 254,
                  tab_id: 42,
                  name: "blue color",
                  translation: "Blue color",
                },
                {
                  id: 257,
                  tab_id: 42,
                  name: "red color",
                  translation: "Red color",
                },
                {
                  id: 260,
                  tab_id: 42,
                  name: "yellow color",
                  translation: "Yellow color",
                },
                {
                  id: 263,
                  tab_id: 42,
                  name: "satisfaction",
                  translation: "Satisfaction",
                },
                {
                  id: 266,
                  tab_id: 42,
                  name: "Membership from",
                  translation: "membership from",
                },
                {
                  id: 269,
                  tab_id: 42,
                  name: "information",
                  translation: "Information",
                },
                {
                  id: 272,
                  tab_id: 42,
                  name: "level",
                  translation: "level",
                },
                {
                  id: 275,
                  tab_id: 42,
                  name: "followers",
                  translation: "Followers",
                },
                {
                  id: 278,
                  tab_id: 42,
                  name: "following",
                  translation: "Following",
                },
                {
                  id: 281,
                  tab_id: 42,
                  name: "citizenship account",
                  translation: "Citizenship account",
                },
                {
                  id: 311,
                  tab_id: 42,
                  name: "transactions",
                  translation: "Transactions",
                },
                {
                  id: 314,
                  tab_id: 42,
                  name: "general",
                  translation: "General",
                },
              ],
            },
            {
              id: 45,
              modal_id: 35,
              name: "property",
              fields: [
                {
                  id: 284,
                  tab_id: 45,
                  name: "search",
                  translation: "search",
                },
                {
                  id: 287,
                  tab_id: 45,
                  name: "real estates",
                  translation: "Real estates",
                },
                {
                  id: 290,
                  tab_id: 45,
                  name: "followers",
                  translation: "Followers",
                },
                {
                  id: 293,
                  tab_id: 45,
                  name: "following",
                  translation: "Following",
                },
                {
                  id: 296,
                  tab_id: 45,
                  name: "address",
                  translation: "Address",
                },
                {
                  id: 302,
                  tab_id: 45,
                  name: "price",
                  translation: "Price",
                },
                {
                  id: 305,
                  tab_id: 45,
                  name: "usage",
                  translation: "usage",
                },
                {
                  id: 317,
                  tab_id: 45,
                  name: "citizenship account",
                  translation: "Citizenship account",
                },
                {
                  id: 323,
                  tab_id: 45,
                  name: "transactions",
                  translation: "Transactions",
                },
                {
                  id: 326,
                  tab_id: 45,
                  name: "general",
                  translation: "General",
                },
              ],
            },
            {
              id: 48,
              modal_id: 35,
              name: "transactions",
              fields: [
                {
                  id: 329,
                  tab_id: 48,
                  name: "transaction id",
                  translation: "Transaction ID",
                },
                {
                  id: 332,
                  tab_id: 48,
                  name: "date and time of sending",
                  translation: "Date and time of sending",
                },
                {
                  id: 335,
                  tab_id: 48,
                  name: "condition",
                  translation: "Condition",
                },
                {
                  id: 338,
                  tab_id: 48,
                  name: "title",
                  translation: "Title",
                },
                {
                  id: 341,
                  tab_id: 48,
                  name: "issue",
                  translation: "Issue",
                },
                {
                  id: 344,
                  tab_id: 48,
                  name: "the amount of",
                  translation: "The amount of",
                },
                {
                  id: 347,
                  tab_id: 48,
                  name: "view-print",
                  translation: "View/Print",
                },
                {
                  id: 350,
                  tab_id: 48,
                  name: "citizenship account",
                  translation: "Citizenship account",
                },
                {
                  id: 356,
                  tab_id: 48,
                  name: "transactions",
                  translation: "Transactions",
                },
                {
                  id: 359,
                  tab_id: 48,
                  name: "general",
                  translation: "General",
                },
              ],
            },
          ],
        },
        {
          name: "Citizenship-profile",
          tabs: [
            {
              id: 65,
              modal_id: 48,
              name: "home",
              fields: [
                {
                  id: 542,
                  tab_id: 65,
                  name: "developer",
                  translation: "Developer",
                },
                {
                  id: 546,
                  tab_id: 65,
                  name: "inspector",
                  translation: "inspector",
                },
                {
                  id: 550,
                  tab_id: 65,
                  name: "businessman",
                  translation: "Businessman",
                },
                {
                  id: 554,
                  tab_id: 65,
                  name: "lawyer",
                  translation: "Lawyer",
                },
                {
                  id: 558,
                  tab_id: 65,
                  name: "city council",
                  translation: "City Council",
                },
                {
                  id: 562,
                  tab_id: 65,
                  name: "the mayor",
                  translation: "the mayor",
                },
                {
                  id: 566,
                  tab_id: 65,
                  name: "governor",
                  translation: "Governor",
                },
                {
                  id: 570,
                  tab_id: 65,
                  name: "minister",
                  translation: "Minister",
                },
                {
                  id: 574,
                  tab_id: 65,
                  name: "judge",
                  translation: "Judge",
                },
                {
                  id: 578,
                  tab_id: 65,
                  name: "legislator",
                  translation: "Legislator",
                },
                {
                  id: 582,
                  tab_id: 65,
                  name: "citizenship id",
                  translation: "Citizenship ID",
                },
                {
                  id: 586,
                  tab_id: 65,
                  name: "citizenship name",
                  translation: "Citizenship name",
                },
                {
                  id: 590,
                  tab_id: 65,
                  name: "entry date",
                  translation: "entry date",
                },
                {
                  id: 594,
                  tab_id: 65,
                  name: "responsibility",
                  translation: "Responsibility",
                },
                {
                  id: 598,
                  tab_id: 65,
                  name: "achieved score",
                  translation: "achieved score",
                },
                {
                  id: 602,
                  tab_id: 65,
                  name: "date of birth",
                  translation: "Date of birth",
                },
                {
                  id: 606,
                  tab_id: 65,
                  name: "phone number",
                  translation: "Phone number",
                },
                {
                  id: 610,
                  tab_id: 65,
                  name: "email",
                  translation: "Email",
                },
                {
                  id: 614,
                  tab_id: 65,
                  name: "address",
                  translation: "Address",
                },
                {
                  id: 618,
                  tab_id: 65,
                  name: "job",
                  translation: "Job",
                },
                {
                  id: 622,
                  tab_id: 65,
                  name: "education",
                  translation: "Education",
                },
                {
                  id: 626,
                  tab_id: 65,
                  name: "i love this city",
                  translation: "I love this city",
                },
                {
                  id: 630,
                  tab_id: 65,
                  name: "i am interested in this country",
                  translation: "I am interested in this country",
                },
                {
                  id: 634,
                  tab_id: 65,
                  name: "i am interested in this language",
                  translation: "I am interested in this language",
                },
                {
                  id: 638,
                  tab_id: 65,
                  name: "if you had the ability to solve a problem, what would it be?",
                  translation:
                    "If you had the ability to solve a problem, what would it be?",
                },
                {
                  id: 642,
                  tab_id: 65,
                  name: "forecast 2022",
                  translation: "Forecast 2022",
                },
                {
                  id: 646,
                  tab_id: 65,
                  name: "pleasant memory",
                  translation: "pleasant memory",
                },
                {
                  id: 650,
                  tab_id: 65,
                  name: "favorites",
                  translation: "Favorites",
                },
                {
                  id: 654,
                  tab_id: 65,
                  name: "about me",
                  translation: "About Me",
                },
                {
                  id: 666,
                  tab_id: 65,
                  name: "art",
                  translation: "art",
                },
                {
                  id: 670,
                  tab_id: 65,
                  name: "music",
                  translation: "music",
                },
                {
                  id: 674,
                  tab_id: 65,
                  name: "sport health",
                  translation: "sport health",
                },
                {
                  id: 678,
                  tab_id: 65,
                  name: "language culture",
                  translation: "language culture",
                },
                {
                  id: 682,
                  tab_id: 65,
                  name: "philosophy",
                  translation: "philosophy",
                },
                {
                  id: 686,
                  tab_id: 65,
                  name: "animals nature",
                  translation: "animals nature",
                },
                {
                  id: 690,
                  tab_id: 65,
                  name: "aliens",
                  translation: "aliens",
                },
                {
                  id: 694,
                  tab_id: 65,
                  name: "food cooking",
                  translation: "food cooking",
                },
                {
                  id: 698,
                  tab_id: 65,
                  name: "travel leature",
                  translation: "travel leature",
                },
                {
                  id: 702,
                  tab_id: 65,
                  name: "manufacturing",
                  translation: "manufacturing",
                },
                {
                  id: 706,
                  tab_id: 65,
                  name: "science technology",
                  translation: "science technology",
                },
                {
                  id: 710,
                  tab_id: 65,
                  name: "space time",
                  translation: "space time",
                },
                {
                  id: 714,
                  tab_id: 65,
                  name: "history and civilization",
                  translation: "History and civilization\t",
                },
                {
                  id: 718,
                  tab_id: 65,
                  name: "politics economy",
                  translation: "politics economy",
                },
                {
                  id: 2591,
                  tab_id: 65,
                  name: "read more",
                  translation: "Read more",
                },
                {
                  id: 2596,
                  tab_id: 65,
                  name: "view",
                  translation: "View",
                },
              ],
            },
            {
              id: 69,
              modal_id: 48,
              name: "property",
              fields: [],
            },
            {
              id: 73,
              modal_id: 48,
              name: "real-estate",
              fields: [],
            },
            {
              id: 77,
              modal_id: 48,
              name: "structures",
              fields: [],
            },
            {
              id: 81,
              modal_id: 48,
              name: "belongings",
              fields: [],
            },
            {
              id: 85,
              modal_id: 48,
              name: "permissions",
              fields: [],
            },
            {
              id: 89,
              modal_id: 48,
              name: "invitations",
              fields: [],
            },
            {
              id: 93,
              modal_id: 48,
              name: "transaction",
              fields: [],
            },
            {
              id: 97,
              modal_id: 48,
              name: "reward",
              fields: [],
            },
            {
              id: 101,
              modal_id: 48,
              name: "dynasty",
              fields: [],
            },
            {
              id: 105,
              modal_id: 48,
              name: "connections",
              fields: [],
            },
            {
              id: 109,
              modal_id: 48,
              name: "infractions",
              fields: [],
            },
            {
              id: 133,
              modal_id: 48,
              name: "menu",
              fields: [
                {
                  id: 1834,
                  tab_id: 133,
                  name: "meta rgb",
                  translation: "META RGB",
                },
                {
                  id: 1838,
                  tab_id: 133,
                  name: "metaverse rang",
                  translation: "Metaverse Rang",
                },
                {
                  id: 1842,
                  tab_id: 133,
                  name: "home",
                  translation: "Home",
                },
                {
                  id: 1846,
                  tab_id: 133,
                  name: "property",
                  translation: "Property",
                },
                {
                  id: 1850,
                  tab_id: 133,
                  name: "real estate",
                  translation: "Real Estate",
                },
                {
                  id: 1854,
                  tab_id: 133,
                  name: "structures",
                  translation: "Structures",
                },
                {
                  id: 1858,
                  tab_id: 133,
                  name: "belongings",
                  translation: "Belongings",
                },
                {
                  id: 1862,
                  tab_id: 133,
                  name: "permissions",
                  translation: "Permissions",
                },
                {
                  id: 1866,
                  tab_id: 133,
                  name: "invitations",
                  translation: "Invitations",
                },
                {
                  id: 1870,
                  tab_id: 133,
                  name: "transaction",
                  translation: "Transaction",
                },
                {
                  id: 1874,
                  tab_id: 133,
                  name: "reward",
                  translation: "Reward",
                },
                {
                  id: 1878,
                  tab_id: 133,
                  name: "dynasty",
                  translation: "Dynasty",
                },
                {
                  id: 1882,
                  tab_id: 133,
                  name: "connections",
                  translation: "Connections",
                },
                {
                  id: 1886,
                  tab_id: 133,
                  name: "crimes",
                  translation: "Infractions",
                },
                {
                  id: 1890,
                  tab_id: 133,
                  name: "log in",
                  translation: "log in",
                },
                {
                  id: 1894,
                  tab_id: 133,
                  name: "logout",
                  translation: "logout",
                },
                {
                  id: 1898,
                  tab_id: 133,
                  name: "citizenship page",
                  translation: "Citizenship Page",
                },
                {
                  id: 1902,
                  tab_id: 133,
                  name: "enter the metaverse",
                  translation: "Enter the Metaverse",
                },
                {
                  id: 1907,
                  tab_id: 133,
                  name: "language",
                  translation: "Language",
                },
              ],
            },
          ],
        },
        {
          name: "dynasty",
          tabs: [
            {
              id: 113,
              modal_id: 52,
              name: "establishment-of-a-dynasty",
              fields: [
                {
                  id: 1554,
                  tab_id: 113,
                  name: "family dynasty",
                  translation: "Family Dynasty",
                },
                {
                  id: 1566,
                  tab_id: 113,
                  name: "establishment of a dynasty",
                  translation: "Establishment of a Dynasty",
                },
                {
                  id: 1570,
                  tab_id: 113,
                  name: "members",
                  translation: "Members",
                },
                {
                  id: 1574,
                  tab_id: 113,
                  name: "submitted request",
                  translation: "Submitted Request",
                },
                {
                  id: 1578,
                  tab_id: 113,
                  name: "request received",
                  translation: "Request Received",
                },
                {
                  id: 1582,
                  tab_id: 113,
                  name: "establishment of dynasty and its characteristics",
                  translation:
                    "Establishment of Dynasty and its Characteristics",
                },
                {
                  id: 1586,
                  tab_id: 113,
                  name: "by building a chain, enjoy huge rewards and outputs. The amount of increase in each entry.",
                  translation:
                    "By building a chain, enjoy huge rewards and outputs. The amount of increase in each entry.",
                },
                {
                  id: 1590,
                  tab_id: 113,
                  name: "father",
                  translation: "Father",
                },
                {
                  id: 1594,
                  tab_id: 113,
                  name: "mother",
                  translation: "Mother",
                },
                {
                  id: 1598,
                  tab_id: 113,
                  name: "sister",
                  translation: "Sister",
                },
                {
                  id: 1602,
                  tab_id: 113,
                  name: "brother",
                  translation: "Brother",
                },
                {
                  id: 1606,
                  tab_id: 113,
                  name: "child",
                  translation: "Child",
                },
                {
                  id: 1610,
                  tab_id: 113,
                  name: "husband",
                  translation: "Husband",
                },
                {
                  id: 1614,
                  tab_id: 113,
                  name: "female",
                  translation: "Female",
                },
                {
                  id: 1618,
                  tab_id: 113,
                  name: "choose a residential property to establish your dynasty.",
                  translation:
                    "Choose a residential property to establish your Dynasty.",
                },
                {
                  id: 1622,
                  tab_id: 113,
                  name: "vod id",
                  translation: "VOD ID",
                },
                {
                  id: 1626,
                  tab_id: 113,
                  name: "total area",
                  translation: "Total Area",
                },
                {
                  id: 1630,
                  tab_id: 113,
                  name: "selection and establishment",
                  translation: "Selection and Establishment",
                },
              ],
            },
            {
              id: 117,
              modal_id: 52,
              name: "members",
              fields: [
                {
                  id: 1634,
                  tab_id: 117,
                  name: "citizenship id",
                  translation: "Citizenship ID",
                },
                {
                  id: 1638,
                  tab_id: 117,
                  name: "father",
                  translation: "Father",
                },
                {
                  id: 1642,
                  tab_id: 117,
                  name: "mother",
                  translation: "Mother",
                },
                {
                  id: 1646,
                  tab_id: 117,
                  name: "sister",
                  translation: "Sister",
                },
                {
                  id: 1650,
                  tab_id: 117,
                  name: "brother",
                  translation: "Brother",
                },
                {
                  id: 1654,
                  tab_id: 117,
                  name: "child",
                  translation: "Child",
                },
                {
                  id: 1658,
                  tab_id: 117,
                  name: "husband",
                  translation: "Husband",
                },
                {
                  id: 1662,
                  tab_id: 117,
                  name: "female",
                  translation: "Female",
                },
                {
                  id: 1666,
                  tab_id: 117,
                  name: "search for the name or id of the desired citizen",
                  translation:
                    "Search for the name or ID of the desired citizen",
                },
                {
                  id: 1670,
                  tab_id: 117,
                  name: "ability to buy from metargb store",
                  translation: "Ability to buy from META RGB store",
                },
                {
                  id: 1674,
                  tab_id: 117,
                  name: "the possibility of selling real estate in meta rgb",
                  translation:
                    "The possibility of selling real estate in META RGB",
                },
                {
                  id: 1678,
                  tab_id: 117,
                  name: "condition",
                  translation: "Condition",
                },
                {
                  id: 1682,
                  tab_id: 117,
                  name: "the possibility of withdrawing capital from meta rgb",
                  translation:
                    "The possibility of withdrawing capital from META RGB",
                },
                {
                  id: 1686,
                  tab_id: 117,
                  name: "the possibility of joining the unity",
                  translation: "The possibility of joining the Unity",
                },
                {
                  id: 1690,
                  tab_id: 117,
                  name: "dynasty management capability",
                  translation: "Dynasty Management Capability",
                },
                {
                  id: 1694,
                  tab_id: 117,
                  name: "ability to participate in joint unity projects",
                  translation: "Ability to participate in joint unity projects",
                },
                {
                  id: 1698,
                  tab_id: 117,
                  name: "ability to participate in challenges",
                  translation: "Ability to Participate in Challenges",
                },
                {
                  id: 1702,
                  tab_id: 117,
                  name: "ability to participate in competitions",
                  translation: "Ability to Participate in Competitions",
                },
                {
                  id: 1706,
                  tab_id: 117,
                  name: "ability to establish a store or office",
                  translation: "Ability to Establish a Store or Office",
                },
                {
                  id: 1710,
                  tab_id: 117,
                  name: "ability to cooperate in construction",
                  translation: "Ability to Cooperate in Construction",
                },
                {
                  id: 1714,
                  tab_id: 117,
                  name: "level",
                  translation: "Level",
                },
                {
                  id: 1718,
                  tab_id: 117,
                  name: "family dynasty",
                  translation: "Family Dynasty",
                },
                {
                  id: 1722,
                  tab_id: 117,
                  name: "dynasty property",
                  translation: "Dynasty Property",
                },
                {
                  id: 1726,
                  tab_id: 117,
                  name: "members",
                  translation: "Members",
                },
                {
                  id: 1730,
                  tab_id: 117,
                  name: "submitted request",
                  translation: "Submitted Request",
                },
                {
                  id: 1734,
                  tab_id: 117,
                  name: "request received",
                  translation: "Request Received",
                },
                {
                  id: 1738,
                  tab_id: 117,
                  name: "establishment of a dynasty",
                  translation: "Establishment of a Dynasty",
                },
                {
                  id: 1743,
                  tab_id: 117,
                  name: "search",
                  translation: "Search",
                },
              ],
            },
            {
              id: 121,
              modal_id: 52,
              name: "submitted-request",
              fields: [
                {
                  id: 1746,
                  tab_id: 121,
                  name: "family dynasty",
                  translation: "Family Dynasty",
                },
                {
                  id: 1750,
                  tab_id: 121,
                  name: "dynasty property",
                  translation: "Dynasty Property",
                },
                {
                  id: 1754,
                  tab_id: 121,
                  name: "members",
                  translation: "Members",
                },
                {
                  id: 1758,
                  tab_id: 121,
                  name: "submitted request",
                  translation: "Submitted Request",
                },
                {
                  id: 1762,
                  tab_id: 121,
                  name: "request received",
                  translation: "Request Received",
                },
                {
                  id: 1766,
                  tab_id: 121,
                  name: "establishment of a dynasty",
                  translation: "Establishment of a Dynasty",
                },
                {
                  id: 1770,
                  tab_id: 121,
                  name: "send to",
                  translation: "Send to",
                },
                {
                  id: 1774,
                  tab_id: 121,
                  name: "date and time of sending",
                  translation: "Date and time of sending",
                },
                {
                  id: 1778,
                  tab_id: 121,
                  name: "family relationship",
                  translation: "Family Relationship",
                },
                {
                  id: 1782,
                  tab_id: 121,
                  name: "application status",
                  translation: "Application Status",
                },
                {
                  id: 1786,
                  tab_id: 121,
                  name: "view",
                  translation: "View",
                },
              ],
            },
            {
              id: 125,
              modal_id: 52,
              name: "request-received",
              fields: [
                {
                  id: 1790,
                  tab_id: 125,
                  name: "family dynasty",
                  translation: "Family Dynasty",
                },
                {
                  id: 1794,
                  tab_id: 125,
                  name: "dynasty property",
                  translation: "Dynasty Property",
                },
                {
                  id: 1798,
                  tab_id: 125,
                  name: "members",
                  translation: "Members",
                },
                {
                  id: 1802,
                  tab_id: 125,
                  name: "submitted request",
                  translation: "Submitted Request",
                },
                {
                  id: 1806,
                  tab_id: 125,
                  name: "request received",
                  translation: "Request Received",
                },
                {
                  id: 1810,
                  tab_id: 125,
                  name: "establishment of a dynasty",
                  translation: "Establishment of a Dynasty",
                },
                {
                  id: 1814,
                  tab_id: 125,
                  name: "send to",
                  translation: "Receive From",
                },
                {
                  id: 1818,
                  tab_id: 125,
                  name: "date and time of sending",
                  translation: "Date and time of sending",
                },
                {
                  id: 1822,
                  tab_id: 125,
                  name: "family relationship",
                  translation: "Family Relationship",
                },
                {
                  id: 1826,
                  tab_id: 125,
                  name: "application status",
                  translation: "Application Status",
                },
                {
                  id: 1830,
                  tab_id: 125,
                  name: "view",
                  translation: "View",
                },
              ],
            },
            {
              id: 129,
              modal_id: 52,
              name: "dynasty-property",
              fields: [
                {
                  id: 1498,
                  tab_id: 129,
                  name: "family dynasty",
                  translation: "Family Dynasty",
                },
                {
                  id: 1502,
                  tab_id: 129,
                  name: "dynasty property",
                  translation: "Dynasty Property",
                },
                {
                  id: 1506,
                  tab_id: 129,
                  name: "members",
                  translation: "Members",
                },
                {
                  id: 1510,
                  tab_id: 129,
                  name: "submitted request",
                  translation: "Submitted Request",
                },
                {
                  id: 1514,
                  tab_id: 129,
                  name: "request received",
                  translation: "Request Received",
                },
                {
                  id: 1518,
                  tab_id: 129,
                  name: "dynasty characteristics",
                  translation: "Dynasty Characteristics",
                },
                {
                  id: 1522,
                  tab_id: 129,
                  name: "total area",
                  translation: "Total Area",
                },
                {
                  id: 1526,
                  tab_id: 129,
                  name: "density",
                  translation: "Density",
                },
                {
                  id: 1530,
                  tab_id: 129,
                  name: "increased profit from residential real estate",
                  translation: "Increased profit from residential real estate",
                },
                {
                  id: 1534,
                  tab_id: 129,
                  name: "number of family members",
                  translation: "Number of family members",
                },
                {
                  id: 1538,
                  tab_id: 129,
                  name: "ability to transfer property",
                  translation: "Ability to transfer property",
                },
                {
                  id: 1542,
                  tab_id: 129,
                  name: "vod id",
                  translation: "VOD ID",
                },
                {
                  id: 1546,
                  tab_id: 129,
                  name: "total area",
                  translation: "Total Area",
                },
                {
                  id: 1550,
                  tab_id: 129,
                  name: "dynasty transfer",
                  translation: "Dynasty transfer",
                },
              ],
            },
          ],
        },
        {
          name: "head-menu",
          tabs: [
            {
              id: 153,
              modal_id: 60,
              name: "landing",
              fields: [
                {
                  id: 1910,
                  tab_id: 153,
                  name: "home",
                  translation: "Home",
                },
                {
                  id: 1914,
                  tab_id: 153,
                  name: "news",
                  translation: "News",
                },
                {
                  id: 1918,
                  tab_id: 153,
                  name: "articles",
                  translation: "Articles",
                },
                {
                  id: 1922,
                  tab_id: 153,
                  name: "competitions",
                  translation: "Competitions",
                },
                {
                  id: 1926,
                  tab_id: 153,
                  name: "trainings",
                  translation: "Trainings",
                },
                {
                  id: 1930,
                  tab_id: 153,
                  name: "about",
                  translation: "About",
                },
                {
                  id: 1934,
                  tab_id: 153,
                  name: "contact us",
                  translation: "Contact us",
                },
                {
                  id: 1938,
                  tab_id: 153,
                  name: "meta rgb",
                  translation: "META RGB",
                },
                {
                  id: 1942,
                  tab_id: 153,
                  name: "metaverse rang",
                  translation: "Metaverse Rang",
                },
                {
                  id: 1946,
                  tab_id: 153,
                  name: "log in",
                  translation: "log in",
                },
                {
                  id: 1950,
                  tab_id: 153,
                  name: "logout",
                  translation: "logout",
                },
                {
                  id: 1954,
                  tab_id: 153,
                  name: "citizenship page",
                  translation: "Citizenship Page",
                },
                {
                  id: 1958,
                  tab_id: 153,
                  name: "enter the metaverse",
                  translation: "Enter the Metaverse",
                },
                {
                  id: 1962,
                  tab_id: 153,
                  name: "language",
                  translation: "Language",
                },
                {
                  id: 1967,
                  tab_id: 153,
                  name: "metaverse rang",
                  translation: null,
                },
                {
                  id: 1975,
                  tab_id: 153,
                  name: "copyright",
                  translation: null,
                },
                {
                  id: 1983,
                  tab_id: 153,
                  name: "our networks",
                  translation: null,
                },
                {
                  id: 1991,
                  tab_id: 153,
                  name: "instagram",
                  translation: null,
                },
                {
                  id: 1999,
                  tab_id: 153,
                  name: "telegram",
                  translation: null,
                },
                {
                  id: 2007,
                  tab_id: 153,
                  name: "twitter",
                  translation: null,
                },
                {
                  id: 2015,
                  tab_id: 153,
                  name: "medium",
                  translation: null,
                },
                {
                  id: 2023,
                  tab_id: 153,
                  name: "youtube",
                  translation: null,
                },
                {
                  id: 2031,
                  tab_id: 153,
                  name: "filo",
                  translation: null,
                },
                {
                  id: 2039,
                  tab_id: 153,
                  name: "mp4",
                  translation: null,
                },
                {
                  id: 2047,
                  tab_id: 153,
                  name: "aparat",
                  translation: null,
                },
                {
                  id: 2055,
                  tab_id: 153,
                  name: "namasha",
                  translation: null,
                },
                {
                  id: 2063,
                  tab_id: 153,
                  name: "dalfak",
                  translation: null,
                },
                {
                  id: 2071,
                  tab_id: 153,
                  name: "faq",
                  translation: null,
                },
                {
                  id: 2079,
                  tab_id: 153,
                  name: "uni",
                  translation: null,
                },
                {
                  id: 2087,
                  tab_id: 153,
                  name: "virgool",
                  translation: null,
                },
                {
                  id: 2095,
                  tab_id: 153,
                  name: "linkedin",
                  translation: null,
                },
                {
                  id: 2103,
                  tab_id: 153,
                  name: "facebook",
                  translation: null,
                },
                {
                  id: 2111,
                  tab_id: 153,
                  name: "namayesh",
                  translation: null,
                },
              ],
            },
          ],
        },
        {
          name: "footer-menu",
          tabs: [
            {
              id: 157,
              modal_id: 64,
              name: "landing",
              fields: [
                {
                  id: 1966,
                  tab_id: 157,
                  name: "metaverse rang",
                  translation: "METAVERSE RANG",
                },
                {
                  id: 1974,
                  tab_id: 157,
                  name: "copyright",
                  translation:
                    "The intellectual property rights of this platform's structure are registered. In case of content duplication, the source must be cited, under the protection of the judiciary and the Ministry of Cooperation.",
                },
                {
                  id: 1982,
                  tab_id: 157,
                  name: "our networks",
                  translation: "Our Networks",
                },
                {
                  id: 1990,
                  tab_id: 157,
                  name: "instagram",
                  translation: "Instagram",
                },
                {
                  id: 1998,
                  tab_id: 157,
                  name: "telegram",
                  translation: "Telegram",
                },
                {
                  id: 2006,
                  tab_id: 157,
                  name: "twitter",
                  translation: "twitter",
                },
                {
                  id: 2014,
                  tab_id: 157,
                  name: "medium",
                  translation: "Medium",
                },
                {
                  id: 2022,
                  tab_id: 157,
                  name: "youtube",
                  translation: "YouTube",
                },
                {
                  id: 2030,
                  tab_id: 157,
                  name: "filo",
                  translation: "Filo",
                },
                {
                  id: 2038,
                  tab_id: 157,
                  name: "mp4",
                  translation: "MP4",
                },
                {
                  id: 2046,
                  tab_id: 157,
                  name: "aparat",
                  translation: "Aparat",
                },
                {
                  id: 2054,
                  tab_id: 157,
                  name: "namasha",
                  translation: "Namasha",
                },
                {
                  id: 2062,
                  tab_id: 157,
                  name: "dalfak",
                  translation: "Dalfak",
                },
                {
                  id: 2070,
                  tab_id: 157,
                  name: "faq",
                  translation: "FAQ",
                },
                {
                  id: 2078,
                  tab_id: 157,
                  name: "uni",
                  translation: "UNI",
                },
                {
                  id: 2086,
                  tab_id: 157,
                  name: "virgool",
                  translation: "Virgool",
                },
                {
                  id: 2094,
                  tab_id: 157,
                  name: "linkedin",
                  translation: "Linkedin",
                },
                {
                  id: 2102,
                  tab_id: 157,
                  name: "facebook",
                  translation: "Facebook",
                },
                {
                  id: 2110,
                  tab_id: 157,
                  name: "namayesh",
                  translation: "Namayesh",
                },
              ],
            },
            {
              id: 161,
              modal_id: 64,
              name: "our-systems",
              fields: [
                {
                  id: 2150,
                  tab_id: 161,
                  name: "ministry of cooperation license",
                  translation: "Ministry of Cooperation License",
                },
                {
                  id: 2154,
                  tab_id: 161,
                  name: "judiciary authority license",
                  translation: "Judiciary Authority License",
                },
                {
                  id: 2158,
                  tab_id: 161,
                  name: "video training center",
                  translation: "Video Training Center",
                },
                {
                  id: 2162,
                  tab_id: 161,
                  name: "q&q forum",
                  translation: "Q&A Forum",
                },
                {
                  id: 2166,
                  tab_id: 161,
                  name: "national store",
                  translation: "National Store",
                },
                {
                  id: 2170,
                  tab_id: 161,
                  name: "iranian producers",
                  translation: "Iranian Producers",
                },
                {
                  id: 2174,
                  tab_id: 161,
                  name: "management system for managers",
                  translation: "Management System for Managers",
                },
                {
                  id: 2178,
                  tab_id: 161,
                  name: "target system",
                  translation: "Target System",
                },
                {
                  id: 2182,
                  tab_id: 161,
                  name: "animal system",
                  translation: "Animal System",
                },
                {
                  id: 2186,
                  tab_id: 161,
                  name: "structure center",
                  translation: "Structure Center",
                },
                {
                  id: 2190,
                  tab_id: 161,
                  name: "meta news",
                  translation: "Meta News",
                },
                {
                  id: 2194,
                  tab_id: 161,
                  name: "metaverse university",
                  translation: "MetaVerse University",
                },
                {
                  id: 2198,
                  tab_id: 161,
                  name: "knowledge-centric system",
                  translation: "Knowledge-Centric System",
                },
                {
                  id: 2202,
                  tab_id: 161,
                  name: "it services system",
                  translation: "IT Services System",
                },
                {
                  id: 2206,
                  tab_id: 161,
                  name: "national advertising",
                  translation: "National Advertising",
                },
                {
                  id: 2210,
                  tab_id: 161,
                  name: "nft marketplace",
                  translation: "NFT Marketplace",
                },
                {
                  id: 2214,
                  tab_id: 161,
                  name: "metaverse color",
                  translation: "MetaVerse Color",
                },
                {
                  id: 2218,
                  tab_id: 161,
                  name: "real estate and properties",
                  translation: "Real Estate and Properties",
                },
              ],
            },
          ],
        },
        {
          name: "ip-checker",
          tabs: [
            {
              id: 290,
              modal_id: 110,
              name: "access-error",
              fields: [
                {
                  id: 3344,
                  tab_id: 290,
                  name: "access level",
                  translation: "Access level",
                },
                {
                  id: 3351,
                  tab_id: 290,
                  name: "unauthorized ip",
                  translation: "Unauthorized IP",
                },
                {
                  id: 3358,
                  tab_id: 290,
                  name: "your IP is known",
                  translation: "Your IP is known as non-iranian",
                },
                {
                  id: 3365,
                  tab_id: 290,
                  name: "if you use a",
                  translation: "If you use a",
                },
                {
                  id: 3372,
                  tab_id: 290,
                  name: "vpn",
                  translation: "VPN",
                },
                {
                  id: 3603,
                  tab_id: 290,
                  name: "otherwise, click",
                  translation: "Otherwise, click on the option below",
                },
                {
                  id: 3610,
                  tab_id: 290,
                  name: "ip authorization",
                  translation: "IP Authorization",
                },
                {
                  id: 3617,
                  tab_id: 290,
                  name: "for more information",
                  translation: "For more information and answers to questions.",
                },
                {
                  id: 3624,
                  tab_id: 290,
                  name: "visit the",
                  translation: "visit the",
                },
                {
                  id: 3631,
                  tab_id: 290,
                  name: "website",
                  translation: "website.",
                },
                {
                  id: 3869,
                  tab_id: 290,
                  name: "turn it off",
                  translation: ", turn it off",
                },
                {
                  id: 3876,
                  tab_id: 290,
                  name: "then reload the page",
                  translation: "Then reload the page",
                },
              ],
            },
            {
              id: 297,
              modal_id: 110,
              name: "review-and-notification",
              fields: [
                {
                  id: 3295,
                  tab_id: 297,
                  name: "access level",
                  translation: "Access level",
                },
                {
                  id: 3302,
                  tab_id: 297,
                  name: "check ip status",
                  translation: "Check IP Status",
                },
                {
                  id: 3309,
                  tab_id: 297,
                  name: "time required 24 hours",
                  translation: "Time required 24 hours",
                },
                {
                  id: 3316,
                  tab_id: 297,
                  name: "to inform about",
                  translation: "To inform about the description of actions",
                },
                {
                  id: 3638,
                  tab_id: 297,
                  name: "enter your email below",
                  translation: "Enter your email below",
                },
                {
                  id: 3645,
                  tab_id: 297,
                  name: "enter your email",
                  translation: "Enter your email",
                },
                {
                  id: 3652,
                  tab_id: 297,
                  name: "the email entered is not valid",
                  translation: "The email entered is not valid",
                },
                {
                  id: 3659,
                  tab_id: 297,
                  name: "let me know",
                  translation: "Let me know",
                },
                {
                  id: 3666,
                  tab_id: 297,
                  name: "for more information",
                  translation: "For more information and answers to questions,",
                },
                {
                  id: 3673,
                  tab_id: 297,
                  name: "visit the",
                  translation: "visit the",
                },
                {
                  id: 3680,
                  tab_id: 297,
                  name: "website",
                  translation: "website",
                },
                {
                  id: 3890,
                  tab_id: 297,
                  name: "your email has been registered",
                  translation: "Your email has been registered",
                },
              ],
            },
          ],
        },
        {
          name: "central-page",
          tabs: [
            {
              id: 311,
              modal_id: 117,
              name: "central-page",
              fields: [
                {
                  id: 3687,
                  tab_id: 311,
                  name: "meta rgb",
                  translation: "META RGB",
                },
                {
                  id: 3694,
                  tab_id: 311,
                  name: "metaverse rang",
                  translation: "METAVERSE RANG",
                },
                {
                  id: 3701,
                  tab_id: 311,
                  name: "sign out",
                  translation: "Sign Out",
                },
                {
                  id: 3708,
                  tab_id: 311,
                  name: "account security",
                  translation: "Account Security",
                },
                {
                  id: 3715,
                  tab_id: 311,
                  name: "challenges",
                  translation: "Challenges",
                },
                {
                  id: 3722,
                  tab_id: 311,
                  name: "central search",
                  translation: "Central Search",
                },
                {
                  id: 3729,
                  tab_id: 311,
                  name: "global statistics",
                  translation: "Global Statistics",
                },
                {
                  id: 3736,
                  tab_id: 311,
                  name: "family tree",
                  translation: "Family Tree",
                },
                {
                  id: 3743,
                  tab_id: 311,
                  name: "vod guide",
                  translation: "VOD Guide",
                },
                {
                  id: 3750,
                  tab_id: 311,
                  name: "accumulated earnings",
                  translation: "Accumulated Earnings",
                },
                {
                  id: 3757,
                  tab_id: 311,
                  name: "identify verification",
                  translation: "Identify Verification",
                },
                {
                  id: 3764,
                  tab_id: 311,
                  name: "calendar",
                  translation: "Calender",
                },
                {
                  id: 3771,
                  tab_id: 311,
                  name: "store",
                  translation: "Store",
                },
                {
                  id: 3778,
                  tab_id: 311,
                  name: "notifications",
                  translation: "Notifications",
                },
                {
                  id: 3785,
                  tab_id: 311,
                  name: "reports",
                  translation: "Reports",
                },
                {
                  id: 3792,
                  tab_id: 311,
                  name: "language",
                  translation: "Language",
                },
                {
                  id: 3799,
                  tab_id: 311,
                  name: "dark mode",
                  translation: "Dark Mode",
                },
                {
                  id: 3806,
                  tab_id: 311,
                  name: "light mode",
                  translation: "Light Mode",
                },
                {
                  id: 3813,
                  tab_id: 311,
                  name: "send document",
                  translation: "Send Document",
                },
                {
                  id: 3820,
                  tab_id: 311,
                  name: "chat",
                  translation: "Chat",
                },
                {
                  id: 3827,
                  tab_id: 311,
                  name: "profile",
                  translation: "Profile",
                },
                {
                  id: 3834,
                  tab_id: 311,
                  name: "share",
                  translation: "Share",
                },
                {
                  id: 3841,
                  tab_id: 311,
                  name: "dynasty",
                  translation: "Dynasty",
                },
                {
                  id: 3848,
                  tab_id: 311,
                  name: "unity",
                  translation: "Unity",
                },
                {
                  id: 3855,
                  tab_id: 311,
                  name: "visit portfolio",
                  translation: "Visit Portfolio",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  fa: {
    translation: {
      code: "fa",
      name: "Persian",
      native_name: "\u0641\u0627\u0631\u0633\u06cc",
      status: 1,
      direction: "rtl",
      modals: [
        {
          name: "login",
          tabs: [
            {
              id: 4,
              modal_id: 6,
              name: "login",
              fields: [
                {
                  id: 6,
                  tab_id: 4,
                  name: "login to metargb",
                  translation:
                    "\u0648\u0627\u0631\u062f \u0645\u062a\u0627\u0648\u0631\u0633 \u0631\u0646\u06af \u0634\u0648\u06cc\u062f",
                },
                {
                  id: 9,
                  tab_id: 4,
                  name: "enter-your-email",
                  translation:
                    "\u0627\u06cc\u0645\u06cc\u0644 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 12,
                  tab_id: 4,
                  name: "password",
                  translation: "\u0631\u0645\u0632 \u0648\u0631\u0648\u062f",
                },
                {
                  id: 15,
                  tab_id: 4,
                  name: "login",
                  translation: "\u0648\u0631\u0648\u062f",
                },
                {
                  id: 18,
                  tab_id: 4,
                  name: "remember me",
                  translation:
                    "\u0645\u0631\u0627 \u0628\u0647 \u062e\u0627\u0637\u0631 \u0628\u0633\u067e\u0627\u0631",
                },
                {
                  id: 21,
                  tab_id: 4,
                  name: "forget password",
                  translation:
                    "\u0641\u0631\u0627\u0645\u0648\u0634\u06cc \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
                },
                {
                  id: 3450,
                  tab_id: 4,
                  name: "register",
                  translation: "\u062b\u0628\u062a \u0646\u0627\u0645",
                },
                {
                  id: 3464,
                  tab_id: 4,
                  name: "for more information and answers to",
                  translation:
                    "\u0627\u06af\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 \u0648\u0631\u0648\u062f \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 3471,
                  tab_id: 4,
                  name: "visit-the",
                  translation: "\u0628\u0627",
                },
                {
                  id: 3478,
                  tab_id: 4,
                  name: "website.",
                  translation: "\u0648\u0628\u0633\u0627\u06cc\u062a",
                },
                {
                  id: 3485,
                  tab_id: 4,
                  name: "email or password is not valid.",
                  translation:
                    "\u0627\u06cc\u0645\u06cc\u0644 \u06cc\u0627 \u0631\u0645\u0632 \u0648\u0631\u0648\u062f \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a.",
                },
                {
                  id: 3492,
                  tab_id: 4,
                  name: "accounts are for single",
                  translation:
                    "\u062d\u0633\u0627\u0628 \u0647\u0627\u06cc \u0634\u0647\u0631\u0648\u0646\u062f\u06cc \u0645\u062a\u0627\u0631\u0646\u06af \u062a\u06a9 \u0646\u0641\u0631\u0647 \u0627\u0633\u062a \u0648 \u062f\u0648 \u0646\u0641\u0631 \u0646\u0645\u06cc \u062a\u0648\u0627\u0646\u0646\u062f \u0647\u0645\u0632\u0645\u0627\u0646 \u0648\u0627\u0631\u062f \u0634\u0648\u0646\u062f.",
                },
                {
                  id: 3498,
                  tab_id: 4,
                  name: "you agree",
                  translation:
                    "\u0634\u0645\u0627 \u0645\u0648\u0627\u0641\u0642\u06cc\u062f",
                },
                {
                  id: 3863,
                  tab_id: 4,
                  name: "terms of service contract",
                  translation:
                    "\u0634\u0631\u0627\u06cc\u0637 \u0642\u0631\u0627\u0631\u062f\u0627\u062f \u062e\u062f\u0645\u0627\u062a",
                },
                {
                  id: 3884,
                  tab_id: 4,
                  name: "please specify",
                  translation:
                    "\u0644\u0637\u0641\u0627\u064b \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0631\u0628\u0627\u062a \u0646\u06cc\u0633\u062a\u06cc\u062f",
                },
              ],
            },
          ],
        },
        {
          name: "register",
          tabs: [
            {
              id: 7,
              modal_id: 9,
              name: "register",
              fields: [
                {
                  id: 30,
                  tab_id: 7,
                  name: "register in meta rgb",
                  translation:
                    "\u062f\u0631 \u0645\u062a\u0627\u0631\u0646\u06af \u062b\u0628\u062a \u0646\u0627\u0645 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 33,
                  tab_id: 7,
                  name: "username",
                  translation:
                    "\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",
                },
                {
                  id: 36,
                  tab_id: 7,
                  name: "enter your email",
                  translation:
                    "\u0627\u06cc\u0645\u06cc\u0644 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 42,
                  tab_id: 7,
                  name: "password",
                  translation: "\u0631\u0645\u0632 \u0648\u0631\u0648\u062f",
                },
                {
                  id: 45,
                  tab_id: 7,
                  name: "register",
                  translation: "\u062b\u0628\u062a \u0646\u0627\u0645",
                },
                {
                  id: 48,
                  tab_id: 7,
                  name: "log-in",
                  translation: "\u0648\u0631\u0648\u062f",
                },
                {
                  id: 54,
                  tab_id: 7,
                  name: "remember-me",
                  translation:
                    "\u0645\u0631\u0627 \u0628\u0647 \u062e\u0627\u0637\u0631 \u0628\u0633\u067e\u0627\u0631",
                },
                {
                  id: 3394,
                  tab_id: 7,
                  name: "visit-the",
                  translation:
                    "\u062f\u06cc\u062f\u0646 \u0646\u0645\u0627\u06cc\u06cc\u062f.",
                },
                {
                  id: 3401,
                  tab_id: 7,
                  name: "website.",
                  translation: "\u0648\u0628\u0633\u0627\u06cc\u062a",
                },
                {
                  id: 3408,
                  tab_id: 7,
                  name: "the password must contain",
                  translation:
                    "\u0631\u0645\u0632 \u0648\u0631\u0648\u062f \u0645\u06cc\u0628\u0627\u06cc\u0633\u062a \u0634\u0627\u0645\u0644 \u0627\u0639\u062f\u0627\u062f\u060c \u0633\u06cc\u0645\u0628\u0644 \u0648 \u062d\u0631\u0648\u0641 \u06a9\u0648\u0686\u06a9 \u0648 \u0628\u0632\u0631\u06af \u0627\u0646\u06af\u0644\u06cc\u0633\u06cc \u0628\u0627\u0634\u062f.",
                },
                {
                  id: 3415,
                  tab_id: 7,
                  name: "the user name is limited to hm-",
                  translation:
                    "\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062f\u0627\u0631\u0627\u06cc \u0645\u062d\u062f\u0648\u062f\u06cc\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 hm- \u0645\u06cc\u0628\u0627\u0634\u062f.",
                },
                {
                  id: 3422,
                  tab_id: 7,
                  name: "your email is not valid",
                  translation:
                    "\u0627\u06cc\u0645\u06cc\u0644 \u0634\u0645\u0627 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a.",
                },
                {
                  id: 3429,
                  tab_id: 7,
                  name: "this email has already been registered",
                  translation:
                    "\u0627\u06cc\u0646 \u0627\u06cc\u0645\u06cc\u0644 \u0642\u0628\u0644\u0627 \u062b\u0628\u062a \u0634\u062f\u0647 \u0627\u0633\u062a.",
                },
                {
                  id: 3436,
                  tab_id: 7,
                  name: "this username is already registered",
                  translation:
                    "\u0627\u06cc\u0646 \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0642\u0628\u0644\u0627 \u062b\u0628\u062a \u0634\u062f\u0647 \u0627\u0633\u062a.",
                },
                {
                  id: 3457,
                  tab_id: 7,
                  name: "for more information and answers to",
                  translation:
                    "\u0628\u0631\u0627\u06cc \u06a9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0648 \u067e\u0627\u0633\u062e \u0628\u0647 \u0633\u0648\u0627\u0644\u0627\u062a\u060c \u0627\u0632",
                },
              ],
            },
            {
              id: 305,
              modal_id: 9,
              name: "citizen-account-activation",
              fields: [
                {
                  id: 3506,
                  tab_id: 305,
                  name: "citizen account activation",
                  translation:
                    "\u0641\u0639\u0627\u0644\u0633\u0627\u0632\u06cc \u062d\u0633\u0627\u0628 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 3513,
                  tab_id: 305,
                  name: "an email address",
                  translation:
                    "\u06cc\u06a9 \u0627\u06cc\u0645\u06cc\u0644 \u0628\u0647 \u0622\u062f\u0631\u0633",
                },
                {
                  id: 3520,
                  tab_id: 305,
                  name: "sent",
                  translation:
                    "\u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647 \u0627\u0633\u062a.",
                },
                {
                  id: 3527,
                  tab_id: 305,
                  name: "to confirm and activate",
                  translation:
                    "\u062c\u0647\u062a \u062a\u0627\u06cc\u06cc\u062f \u0648 \u0641\u0639\u0627\u0644 \u0633\u0627\u0632\u06cc \u062d\u0633\u0627\u0628 \u062e\u0648\u062f. \u0628\u0631\u0631\u0648\u06cc \u0644\u06cc\u0646\u06a9",
                },
                {
                  id: 3534,
                  tab_id: 305,
                  name: "on the link in the email",
                  translation:
                    "\u0645\u0648\u062c\u0648\u062f \u062f\u0631 \u0627\u06cc\u0645\u06cc\u0644 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 3541,
                  tab_id: 305,
                  name: "view gmail",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u062c\u06cc\u0645\u06cc\u0644",
                },
                {
                  id: 3548,
                  tab_id: 305,
                  name: "view email",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u0627\u06cc\u0645\u06cc\u0644",
                },
                {
                  id: 3555,
                  tab_id: 305,
                  name: "view yahoo",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u06cc\u0627\u0647\u0648 \u0645\u06cc\u0644",
                },
                {
                  id: 3562,
                  tab_id: 305,
                  name: "view outlook",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u0627\u0648\u062a \u0644\u0648\u06a9",
                },
                {
                  id: 3569,
                  tab_id: 305,
                  name: "re-send the email",
                  translation:
                    "\u0627\u0631\u0633\u0627\u0644 \u0645\u062c\u062f\u062f \u0627\u06cc\u0645\u06cc\u0644 \u062a\u0627\u06cc\u06cc\u062f \u062d\u0633\u0627\u0628 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 3576,
                  tab_id: 305,
                  name: "for more information",
                  translation:
                    "\u0628\u0631\u0627\u06cc \u06a9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0648 \u067e\u0627\u0633\u062e \u0628\u0647 \u0633\u0648\u0627\u0644\u0627\u062a\u060c \u0627\u0632",
                },
                {
                  id: 3583,
                  tab_id: 305,
                  name: "visit the",
                  translation:
                    "\u062f\u06cc\u062f\u0646 \u0646\u0645\u0627\u06cc\u06cc\u062f.",
                },
                {
                  id: 3590,
                  tab_id: 305,
                  name: "website",
                  translation: "\u0648\u0628\u0633\u0627\u06cc\u062a",
                },
              ],
            },
          ],
        },
        {
          name: "training",
          tabs: [
            {
              id: 138,
              modal_id: 12,
              name: "central-school",
              fields: [
                {
                  id: 2119,
                  tab_id: 138,
                  name: "description",
                  translation:
                    "\u0622\u0645\u0648\u0632\u0634\u06af\u0627\u0647\u06cc \u06a9\u0647 \u0647\u0631 \u0631\u0648\u0632 \u0628\u0627 \u0648\u06cc\u0698\u06af\u06cc\u200c\u0647\u0627\u06cc \u0645\u062a\u0627\u0648\u0631\u0633\u06cc \u0645\u062d\u062a\u0648\u0627\u0647\u0627\u06cc \u062a\u0627\u0632\u0647\u200c\u0627\u06cc \u0631\u0627 \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f\u060c \u062c\u0647\u062a \u062a\u062c\u0631\u0628\u0647\u200c\u06cc \u0622\u0645\u0648\u0632\u0634\u06cc \u0645\u062a\u0641\u0627\u0648\u062a \u0648 \u062c\u0630\u0627\u0628.",
                },
                {
                  id: 2123,
                  tab_id: 138,
                  name: "key phrase",
                  translation:
                    "\u0622\u0645\u0648\u0632\u0634 \u0645\u062a\u0627\u0648\u0631\u0633",
                },
                {
                  id: 2127,
                  tab_id: 138,
                  name: "page title",
                  translation:
                    "\u0622\u0645\u0648\u0632\u0634\u200c\u0647\u0627\u06cc \u0648\u06cc\u062f\u06cc\u0648\u06cc\u06cc \u0645\u062a\u0627\u0648\u0631\u0633: \u062c\u0647\u0627\u0646\u06cc \u062c\u062f\u06cc\u062f \u0627\u0632 \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u062a\u062c\u0631\u0628\u06cc",
                },
                {
                  id: 2131,
                  tab_id: 138,
                  name: "search for your desired tutorial",
                  translation:
                    "\u0622\u0645\u0648\u0632\u0634 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 2135,
                  tab_id: 138,
                  name: "top coaches",
                  translation:
                    "\u0645\u0631\u0628\u06cc\u0627\u0646 \u0628\u0631\u062a\u0631",
                },
                {
                  id: 2139,
                  tab_id: 138,
                  name: "view more coaches",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u062f\u06cc\u06af\u0631 \u0645\u0631\u0628\u06cc\u0627\u0646",
                },
                {
                  id: 2143,
                  tab_id: 138,
                  name: "explore more categories",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u062f\u06cc\u06af\u0631 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0647\u0627",
                },
                {
                  id: 2147,
                  tab_id: 138,
                  name: "see more",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u0628\u06cc\u0634\u062a\u0631",
                },
              ],
            },
            {
              id: 146,
              modal_id: 12,
              name: "internal-training",
              fields: [],
            },
            {
              id: 150,
              modal_id: 12,
              name: "categories",
              fields: [],
            },
            {
              id: 166,
              modal_id: 12,
              name: "education-page",
              fields: [
                {
                  id: 2223,
                  tab_id: 166,
                  name: "latest tutorials",
                  translation:
                    "\u062c\u062f\u06cc\u062f\u062a\u0631\u06cc\u0646 \u0622\u0645\u0648\u0632\u0634 \u0647\u0627",
                },
                {
                  id: 2227,
                  tab_id: 166,
                  name: "publication date",
                  translation:
                    "\u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u062a\u0634\u0627\u0631",
                },
                {
                  id: 2231,
                  tab_id: 166,
                  name: "enter your comment",
                  translation:
                    "\u062f\u06cc\u062f\u06af\u0627\u0647 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 2235,
                  tab_id: 166,
                  name: "submit report",
                  translation:
                    "\u0627\u0631\u0633\u0627\u0644 \u06af\u0630\u0627\u0631\u0634",
                },
                {
                  id: 2239,
                  tab_id: 166,
                  name: "see more",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u0628\u06cc\u0634\u062a\u0631",
                },
                {
                  id: 2243,
                  tab_id: 166,
                  name: "related tutorials",
                  translation:
                    "\u0622\u0645\u0648\u0632\u0634 \u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637",
                },
              ],
            },
            {
              id: 170,
              modal_id: 12,
              name: "modal-tutorials",
              fields: [],
            },
          ],
        },
        {
          name: "store",
          tabs: [
            {
              id: 13,
              modal_id: 15,
              name: "tools",
              fields: [
                {
                  id: 60,
                  tab_id: 13,
                  name: "toman",
                  translation: "\u062a\u0648\u0645\u0627\u0646",
                },
                {
                  id: 63,
                  tab_id: 13,
                  name: "yellow",
                  translation: "\u0632\u0631\u062f",
                },
                {
                  id: 66,
                  tab_id: 13,
                  name: "red",
                  translation: "\u0642\u0631\u0645\u0632",
                },
                {
                  id: 69,
                  tab_id: 13,
                  name: "blue",
                  translation: "\u0622\u0628\u06cc",
                },
                {
                  id: 72,
                  tab_id: 13,
                  name: "number",
                  translation: "\u0639\u062f\u062f",
                },
                {
                  id: 162,
                  tab_id: 13,
                  name: "store",
                  translation: "\u0641\u0631\u0648\u0634\u06af\u0627\u0647",
                },
                {
                  id: 723,
                  tab_id: 13,
                  name: "tools",
                  translation: "\u0627\u0628\u0632\u0627\u0631 \u0647\u0627",
                },
                {
                  id: 727,
                  tab_id: 13,
                  name: "currencies",
                  translation: "\u0627\u0631\u0632 \u0647\u0627",
                },
              ],
            },
            {
              id: 16,
              modal_id: 15,
              name: "currencies",
              fields: [
                {
                  id: 75,
                  tab_id: 16,
                  name: "toman",
                  translation: "\u062a\u0648\u0645\u0627\u0646",
                },
                {
                  id: 78,
                  tab_id: 16,
                  name: "yellow",
                  translation: "\u0632\u0631\u062f",
                },
                {
                  id: 81,
                  tab_id: 16,
                  name: "red",
                  translation: "\u0642\u0631\u0645\u0632",
                },
                {
                  id: 84,
                  tab_id: 16,
                  name: "blue",
                  translation: "\u0622\u0628\u06cc",
                },
                {
                  id: 87,
                  tab_id: 16,
                  name: "number",
                  translation: "\u0639\u062f\u062f",
                },
                {
                  id: 165,
                  tab_id: 16,
                  name: "store",
                  translation: "\u0641\u0631\u0648\u0634\u06af\u0627\u0647",
                },
                {
                  id: 731,
                  tab_id: 16,
                  name: "tools",
                  translation: "\u0627\u0628\u0632\u0627\u0631 \u0647\u0627",
                },
                {
                  id: 735,
                  tab_id: 16,
                  name: "currencies",
                  translation: "\u0627\u0631\u0632 \u0647\u0627",
                },
              ],
            },
          ],
        },
        {
          name: "notification",
          tabs: [
            {
              id: 19,
              modal_id: 18,
              name: "notification",
              fields: [
                {
                  id: 90,
                  tab_id: 19,
                  name: "incoming notifications",
                  translation:
                    "\u0627\u0639\u0644\u0627\u0646 \u0647\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc",
                },
                {
                  id: 93,
                  tab_id: 19,
                  name: "change the notification status to viewed",
                  translation:
                    "\u0648\u0636\u0639\u06cc\u062a \u0627\u0639\u0644\u0627\u0646 \u0631\u0627 \u0628\u0647 \u0645\u0634\u0627\u0647\u062f\u0647 \u0634\u062f\u0647 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u062f",
                },
              ],
            },
          ],
        },
        {
          name: "report",
          tabs: [
            {
              id: 22,
              modal_id: 21,
              name: "report",
              fields: [
                {
                  id: 96,
                  tab_id: 22,
                  name: "choose a topic",
                  translation:
                    "\u0645\u0648\u0636\u0648\u0639\u06cc \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 99,
                  tab_id: 22,
                  name: "display error",
                  translation:
                    "\u062e\u0637\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634",
                },
                {
                  id: 102,
                  tab_id: 22,
                  name: "error in spelling",
                  translation:
                    "\u0627\u0634\u062a\u0628\u0627\u0647 \u062f\u0631 \u0627\u0645\u0644\u0627\u0621",
                },
                {
                  id: 105,
                  tab_id: 22,
                  name: "error in coding",
                  translation:
                    "\u062e\u0637\u0627 \u062f\u0631 \u06a9\u062f\u0646\u0648\u06cc\u0633\u06cc",
                },
                {
                  id: 108,
                  tab_id: 22,
                  name: "slow system fps",
                  translation:
                    "\u0641\u0631\u06cc\u0645 \u0628\u0631 \u062b\u0627\u0646\u06cc\u0647 \u06a9\u0646\u062f \u0633\u06cc\u0633\u062a\u0645",
                },
                {
                  id: 111,
                  tab_id: 22,
                  name: "respectful",
                  translation: "\u0627\u062d\u062a\u0631\u0627\u0645",
                },
                {
                  id: 114,
                  tab_id: 22,
                  name: "title",
                  translation: "\u0639\u0646\u0648\u0627\u0646",
                },
                {
                  id: 117,
                  tab_id: 22,
                  name: "the text of the report",
                  translation:
                    "\u0645\u062a\u0646 \u06af\u0632\u0627\u0631\u0634",
                },
                {
                  id: 120,
                  tab_id: 22,
                  name: "drop files here or click to upload",
                  translation:
                    "\u0641\u0627\u06cc\u0644 \u0647\u0627 \u0631\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0631\u0647\u0627 \u06a9\u0646\u06cc\u062f \u06cc\u0627 \u0628\u0631\u0627\u06cc \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 123,
                  tab_id: 22,
                  name: "submit",
                  translation: "\u0627\u0631\u0633\u0627\u0644",
                },
                {
                  id: 126,
                  tab_id: 22,
                  name: "list of reports",
                  translation:
                    "\u0644\u06cc\u0633\u062a \u06af\u0632\u0627\u0631\u0634 \u0647\u0627",
                },
                {
                  id: 129,
                  tab_id: 22,
                  name: "title",
                  translation: "\u0639\u0646\u0648\u0627\u0646",
                },
                {
                  id: 132,
                  tab_id: 22,
                  name: "reports",
                  translation: "\u06af\u0632\u0627\u0631\u0634 \u0647\u0627",
                },
                {
                  id: 135,
                  tab_id: 22,
                  name: "issue",
                  translation: "\u0645\u0648\u0636\u0648\u0639",
                },
                {
                  id: 138,
                  tab_id: 22,
                  name: "date of release",
                  translation:
                    "\u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u062a\u0634\u0627\u0631",
                },
                {
                  id: 141,
                  tab_id: 22,
                  name: "the operation",
                  translation: "\u0639\u0645\u0644\u06cc\u0627\u062a",
                },
              ],
            },
          ],
        },
        {
          name: "hour-meter-profit",
          tabs: [
            {
              id: 28,
              modal_id: 24,
              name: "property-interest",
              fields: [
                {
                  id: 150,
                  tab_id: 28,
                  name: "hourly profit absorption",
                  translation:
                    "\u062c\u0630\u0628 \u0633\u0648\u062f \u0633\u0627\u0639\u062a\u06cc",
                },
                {
                  id: 153,
                  tab_id: 28,
                  name: "property interest",
                  translation:
                    "\u0628\u0647\u0631\u0647 \u0645\u0644\u06a9\u06cc",
                },
                {
                  id: 156,
                  tab_id: 28,
                  name: "account type",
                  translation: "\u0646\u0648\u0639 \u062d\u0633\u0627\u0628",
                },
                {
                  id: 159,
                  tab_id: 28,
                  name: "last collection",
                  translation:
                    "\u0622\u062e\u0631\u06cc\u0646 \u0645\u062c\u0645\u0648\u0639\u0647",
                },
              ],
            },
          ],
        },
        {
          name: "account-security",
          tabs: [
            {
              id: 31,
              modal_id: 27,
              name: "account-security",
              fields: [
                {
                  id: 168,
                  tab_id: 31,
                  name: "account security",
                  translation:
                    "\u0627\u0645\u0646\u06cc\u062a \u062d\u0633\u0627\u0628",
                },
                {
                  id: 171,
                  tab_id: 31,
                  name: "how long you want your wallet to be off",
                  translation:
                    "\u0686\u0647 \u0645\u062f\u062a \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u062f \u06a9\u06cc\u0641 \u0634\u0645\u0627 \u062e\u0627\u0645\u0648\u0634 \u0628\u0627\u0634\u062f",
                },
                {
                  id: 174,
                  tab_id: 31,
                  name: "minutes",
                  translation: "\u062f\u0642\u0627\u06cc\u0642",
                },
                {
                  id: 177,
                  tab_id: 31,
                  name: "if you have not received the confirmation code, you can send the confirmation code again in 00:00  minutes",
                  translation:
                    "\u0627\u06af\u0631 \u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u062a\u0627 \u0633\u0627\u0639\u062a 00:00 \u062f\u0642\u06cc\u0642\u0647 \u062f\u06cc\u06af\u0631 \u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f \u0631\u0627 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 180,
                  tab_id: 31,
                  name: "confirmation",
                  translation: "\u062a\u0627\u0626\u06cc\u062f\u06cc\u0647",
                },
                {
                  id: 183,
                  tab_id: 31,
                  name: "minutes left to relock user account security",
                  translation:
                    "\u0686\u0646\u062f \u062f\u0642\u06cc\u0642\u0647 \u0628\u0627\u0642\u06cc \u0645\u0627\u0646\u062f\u0647 \u0627\u0633\u062a \u062a\u0627 \u0627\u0645\u0646\u06cc\u062a \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062f\u0648\u0628\u0627\u0631\u0647 \u0642\u0641\u0644 \u0634\u0648\u062f",
                },
              ],
            },
          ],
        },
        {
          name: "search-in-metarang",
          tabs: [
            {
              id: 34,
              modal_id: 30,
              name: "citizen-search",
              fields: [
                {
                  id: 186,
                  tab_id: 34,
                  name: "search in metaverse rang",
                  translation:
                    "\u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u0645\u062a\u0627\u0648\u0631\u0633 \u0631\u0646\u06af",
                },
                {
                  id: 189,
                  tab_id: 34,
                  name: "search for citizen name or id",
                  translation:
                    "\u0646\u0627\u0645 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc \u06cc\u0627 \u0634\u0646\u0627\u0633\u0647 \u0631\u0627 \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 192,
                  tab_id: 34,
                  name: "there is no information, search",
                  translation:
                    "\u0647\u06cc\u0686 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f\u060c \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 195,
                  tab_id: 34,
                  name: "citizen id",
                  translation:
                    "\u0634\u0646\u0627\u0633\u0647 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 198,
                  tab_id: 34,
                  name: "name of the citizen",
                  translation:
                    "\u0646\u0627\u0645 \u0634\u0647\u0631\u0648\u0646\u062f",
                },
                {
                  id: 201,
                  tab_id: 34,
                  name: "level",
                  translation: "\u0633\u0637\u062d",
                },
                {
                  id: 204,
                  tab_id: 34,
                  name: "followers",
                  translation:
                    "\u062f\u0646\u0628\u0627\u0644 \u06a9\u0646\u0646\u062f\u06af\u0627\u0646",
                },
                {
                  id: 207,
                  tab_id: 34,
                  name: "unity",
                  translation: "\u0627\u062a\u062d\u0627\u062f",
                },
                {
                  id: 213,
                  tab_id: 34,
                  name: "citizen search",
                  translation:
                    "\u062c\u0633\u062a\u062c\u0648\u06cc \u0634\u0647\u0631\u0648\u0646\u062f\u0627\u0646",
                },
                {
                  id: 363,
                  tab_id: 34,
                  name: "property search",
                  translation:
                    "\u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u0644\u06a9",
                },
              ],
            },
            {
              id: 37,
              modal_id: 30,
              name: "property-search",
              fields: [
                {
                  id: 210,
                  tab_id: 37,
                  name: "search in metaverse rang",
                  translation:
                    "\u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u0645\u062a\u0627\u0648\u0631\u0633 \u0631\u0646\u06af",
                },
                {
                  id: 216,
                  tab_id: 37,
                  name: "citizen search",
                  translation:
                    "\u062c\u0633\u062a\u062c\u0648\u06cc \u0634\u0647\u0631\u0648\u0646\u062f\u0627\u0646",
                },
                {
                  id: 219,
                  tab_id: 37,
                  name: "property search",
                  translation:
                    "\u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u0644\u06a9",
                },
                {
                  id: 222,
                  tab_id: 37,
                  name: "search for property address or id",
                  translation:
                    "\u0622\u062f\u0631\u0633 \u06cc\u0627 \u0634\u0646\u0627\u0633\u0647 \u0645\u0644\u06a9 \u0631\u0627 \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 225,
                  tab_id: 37,
                  name: "there is no information, search",
                  translation:
                    "\u0647\u06cc\u0686 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f\u060c \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 228,
                  tab_id: 37,
                  name: "property id",
                  translation:
                    "\u0634\u0646\u0627\u0633\u0647 \u0645\u0644\u06a9",
                },
                {
                  id: 231,
                  tab_id: 37,
                  name: "usage",
                  translation: "\u06a9\u0627\u0631\u0628\u0631\u06cc",
                },
                {
                  id: 234,
                  tab_id: 37,
                  name: "owner id",
                  translation:
                    "\u0634\u0646\u0627\u0633\u0647 \u0645\u0627\u0644\u06a9",
                },
                {
                  id: 237,
                  tab_id: 37,
                  name: "irr pricing",
                  translation:
                    "\u0642\u06cc\u0645\u062a \u06af\u0630\u0627\u0631\u06cc \u0631\u06cc\u0627\u0644",
                },
                {
                  id: 240,
                  tab_id: 37,
                  name: "psc pricing",
                  translation:
                    "\u0642\u06cc\u0645\u062a \u06af\u0630\u0627\u0631\u06cc PSC",
                },
                {
                  id: 243,
                  tab_id: 37,
                  name: "property address",
                  translation: "\u0627\u062f\u0631\u0633 \u0645\u0644\u06a9",
                },
              ],
            },
          ],
        },
        {
          name: "citizenship-account",
          tabs: [
            {
              id: 43,
              modal_id: 36,
              name: "general",
              fields: [
                {
                  id: 246,
                  tab_id: 43,
                  name: "collection of assets",
                  translation:
                    "\u0645\u062c\u0645\u0648\u0639 \u062f\u0627\u0631\u0627\u06cc\u06cc \u0647\u0627",
                },
                {
                  id: 249,
                  tab_id: 43,
                  name: "psc",
                  translation: "\u067e\u06cc \u0627\u0633 \u0633\u06cc",
                },
                {
                  id: 252,
                  tab_id: 43,
                  name: "rial",
                  translation: "\u0631\u06cc\u0627\u0644",
                },
                {
                  id: 255,
                  tab_id: 43,
                  name: "blue color",
                  translation: "\u0631\u0646\u06af \u0622\u0628\u06cc",
                },
                {
                  id: 258,
                  tab_id: 43,
                  name: "red color",
                  translation: "\u0631\u0646\u06af \u0642\u0631\u0645\u0632",
                },
                {
                  id: 261,
                  tab_id: 43,
                  name: "yellow color",
                  translation: "\u0631\u0646\u06af \u0632\u0631\u062f",
                },
                {
                  id: 264,
                  tab_id: 43,
                  name: "satisfaction",
                  translation: "\u0631\u0636\u0627\u06cc\u062a",
                },
                {
                  id: 267,
                  tab_id: 43,
                  name: "Membership from",
                  translation: "\u0639\u0636\u0648\u06cc\u062a \u0627\u0632",
                },
                {
                  id: 270,
                  tab_id: 43,
                  name: "information",
                  translation: "\u0627\u0637\u0644\u0627\u0639\u0627\u062a",
                },
                {
                  id: 273,
                  tab_id: 43,
                  name: "level",
                  translation: "\u0633\u0637\u062d",
                },
                {
                  id: 276,
                  tab_id: 43,
                  name: "followers",
                  translation:
                    "\u062f\u0646\u0628\u0627\u0644 \u06a9\u0646\u0646\u062f\u06af\u0627\u0646",
                },
                {
                  id: 279,
                  tab_id: 43,
                  name: "following",
                  translation:
                    "\u062f\u0646\u0628\u0627\u0644 \u0634\u0648\u0646\u062f\u06af\u0627\u0646",
                },
                {
                  id: 282,
                  tab_id: 43,
                  name: "citizenship account",
                  translation:
                    "\u062d\u0633\u0627\u0628 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 312,
                  tab_id: 43,
                  name: "transactions",
                  translation:
                    "\u062a\u0631\u0627\u06a9\u0646\u0634 \u0647\u0627",
                },
                {
                  id: 315,
                  tab_id: 43,
                  name: "general",
                  translation: "\u06a9\u0644\u06cc\u0627\u062a",
                },
              ],
            },
            {
              id: 46,
              modal_id: 36,
              name: "property",
              fields: [
                {
                  id: 285,
                  tab_id: 46,
                  name: "search",
                  translation:
                    "\u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 288,
                  tab_id: 46,
                  name: "real estates",
                  translation:
                    "\u0627\u0645\u0644\u0627\u06a9 \u0648 \u0645\u0633\u062a\u063a\u0644\u0627\u062a",
                },
                {
                  id: 291,
                  tab_id: 46,
                  name: "followers",
                  translation:
                    "\u062f\u0646\u0628\u0627\u0644 \u06a9\u0646\u0646\u062f\u06af\u0627\u0646",
                },
                {
                  id: 294,
                  tab_id: 46,
                  name: "following",
                  translation:
                    "\u062f\u0646\u0628\u0627\u0644 \u0634\u0648\u0646\u062f\u06af\u0627\u0646",
                },
                {
                  id: 297,
                  tab_id: 46,
                  name: "address",
                  translation: "\u0622\u062f\u0631\u0633",
                },
                {
                  id: 303,
                  tab_id: 46,
                  name: "price",
                  translation: "\u0642\u06cc\u0645\u062a",
                },
                {
                  id: 306,
                  tab_id: 46,
                  name: "usage",
                  translation: "\u06a9\u0627\u0631\u0628\u0631\u06cc",
                },
                {
                  id: 318,
                  tab_id: 46,
                  name: "citizenship account",
                  translation:
                    "\u062d\u0633\u0627\u0628 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 324,
                  tab_id: 46,
                  name: "transactions",
                  translation:
                    "\u062a\u0631\u0627\u06a9\u0646\u0634 \u0647\u0627",
                },
                {
                  id: 327,
                  tab_id: 46,
                  name: "general",
                  translation: "\u06a9\u0644\u06cc\u0627\u062a",
                },
              ],
            },
            {
              id: 49,
              modal_id: 36,
              name: "transactions",
              fields: [
                {
                  id: 330,
                  tab_id: 49,
                  name: "transaction id",
                  translation:
                    "\u0634\u0646\u0627\u0633\u0647 \u062a\u0631\u0627\u06a9\u0646\u0634",
                },
                {
                  id: 333,
                  tab_id: 49,
                  name: "date and time of sending",
                  translation:
                    "\u062a\u0627\u0631\u06cc\u062e \u0648 \u0632\u0645\u0627\u0646 \u0627\u0631\u0633\u0627\u0644",
                },
                {
                  id: 336,
                  tab_id: 49,
                  name: "condition",
                  translation: "\u0648\u0636\u0639\u06cc\u062a",
                },
                {
                  id: 339,
                  tab_id: 49,
                  name: "title",
                  translation: "\u0639\u0646\u0648\u0627\u0646",
                },
                {
                  id: 342,
                  tab_id: 49,
                  name: "issue",
                  translation: "\u0645\u0648\u0636\u0648\u0639",
                },
                {
                  id: 345,
                  tab_id: 49,
                  name: "the amount of",
                  translation: "\u0645\u0642\u062f\u0627\u0631",
                },
                {
                  id: 348,
                  tab_id: 49,
                  name: "view-print",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647-\u0686\u0627\u067e",
                },
                {
                  id: 351,
                  tab_id: 49,
                  name: "citizenship account",
                  translation:
                    "\u062d\u0633\u0627\u0628 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 357,
                  tab_id: 49,
                  name: "transactions",
                  translation:
                    "\u062a\u0631\u0627\u06a9\u0646\u0634 \u0647\u0627",
                },
                {
                  id: 360,
                  tab_id: 49,
                  name: "general",
                  translation: "\u06a9\u0644\u06cc\u0627\u062a",
                },
              ],
            },
          ],
        },
        {
          name: "Citizenship-profile",
          tabs: [
            {
              id: 66,
              modal_id: 49,
              name: "home",
              fields: [
                {
                  id: 543,
                  tab_id: 66,
                  name: "developer",
                  translation:
                    "\u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u0646\u062f\u0647",
                },
                {
                  id: 547,
                  tab_id: 66,
                  name: "inspector",
                  translation: "\u0628\u0627\u0632\u0631\u0633",
                },
                {
                  id: 551,
                  tab_id: 66,
                  name: "businessman",
                  translation: "\u062a\u0627\u062c\u0631",
                },
                {
                  id: 555,
                  tab_id: 66,
                  name: "lawyer",
                  translation: "\u0648\u06a9\u06cc\u0644",
                },
                {
                  id: 559,
                  tab_id: 66,
                  name: "city council",
                  translation:
                    "\u0634\u0648\u0631\u0627\u06cc \u0634\u0647\u0631",
                },
                {
                  id: 563,
                  tab_id: 66,
                  name: "the mayor",
                  translation: "\u0634\u0647\u0631\u062f\u0627\u0631",
                },
                {
                  id: 567,
                  tab_id: 66,
                  name: "governor",
                  translation:
                    "\u0641\u0631\u0645\u0627\u0646\u062f\u0627\u0631",
                },
                {
                  id: 571,
                  tab_id: 66,
                  name: "minister",
                  translation: "\u0648\u0632\u06cc\u0631",
                },
                {
                  id: 575,
                  tab_id: 66,
                  name: "judge",
                  translation: "\u0642\u0627\u0636\u06cc",
                },
                {
                  id: 579,
                  tab_id: 66,
                  name: "legislator",
                  translation:
                    "\u0642\u0627\u0646\u0648\u0646 \u06af\u0630\u0627\u0631",
                },
                {
                  id: 583,
                  tab_id: 66,
                  name: "citizenship id",
                  translation:
                    "\u0634\u0646\u0627\u0633\u0647 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 587,
                  tab_id: 66,
                  name: "citizenship name",
                  translation:
                    "\u0646\u0627\u0645 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 591,
                  tab_id: 66,
                  name: "entry date",
                  translation:
                    "\u062a\u0627\u0631\u06cc\u062e \u0648\u0631\u0648\u062f",
                },
                {
                  id: 595,
                  tab_id: 66,
                  name: "responsibility",
                  translation: "\u0645\u0633\u0626\u0648\u0644\u06cc\u062a",
                },
                {
                  id: 599,
                  tab_id: 66,
                  name: "achieved score",
                  translation:
                    "\u0627\u0645\u062a\u06cc\u0627\u0632 \u06a9\u0633\u0628 \u0634\u062f\u0647",
                },
                {
                  id: 603,
                  tab_id: 66,
                  name: "date of birth",
                  translation:
                    "\u062a\u0627\u0631\u06cc\u062e \u062a\u0648\u0644\u062f",
                },
                {
                  id: 607,
                  tab_id: 66,
                  name: "phone number",
                  translation:
                    "\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633",
                },
                {
                  id: 611,
                  tab_id: 66,
                  name: "email",
                  translation:
                    "\u067e\u0633\u062a \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9\u06cc",
                },
                {
                  id: 615,
                  tab_id: 66,
                  name: "address",
                  translation: "\u0622\u062f\u0631\u0633",
                },
                {
                  id: 619,
                  tab_id: 66,
                  name: "job",
                  translation: "\u0634\u063a\u0644",
                },
                {
                  id: 623,
                  tab_id: 66,
                  name: "education",
                  translation: "\u062a\u062d\u0635\u06cc\u0644\u0627\u062a",
                },
                {
                  id: 627,
                  tab_id: 66,
                  name: "i love this city",
                  translation:
                    "\u0627\u06cc\u0646 \u0634\u0647\u0631 \u0631\u0627 \u062f\u0648\u0633\u062a \u062f\u0627\u0631\u0645",
                },
                {
                  id: 631,
                  tab_id: 66,
                  name: "i am interested in this country",
                  translation:
                    "\u0628\u0647 \u0627\u06cc\u0646 \u06a9\u0634\u0648\u0631 \u0639\u0644\u0627\u0642\u0647 \u062f\u0627\u0631\u0645",
                },
                {
                  id: 635,
                  tab_id: 66,
                  name: "i am interested in this language",
                  translation:
                    "\u0628\u0647 \u0627\u06cc\u0646 \u0632\u0628\u0627\u0646 \u0639\u0644\u0627\u0642\u0647 \u062f\u0627\u0631\u0645",
                },
                {
                  id: 639,
                  tab_id: 66,
                  name: "if you had the ability to solve a problem, what would it be?",
                  translation:
                    "\u0627\u06af\u0631 \u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u062d\u0644 \u06cc\u06a9 \u0645\u0634\u06a9\u0644 \u0631\u0627 \u062f\u0627\u0634\u062a\u06cc\u062f \u0622\u0646 \u0645\u0634\u06a9\u0644 \u0686\u06cc\u0633\u062a \u061f",
                },
                {
                  id: 643,
                  tab_id: 66,
                  name: "forecast 2022",
                  translation:
                    "\u067e\u06cc\u0634 \u0628\u06cc\u0646\u06cc 1401",
                },
                {
                  id: 647,
                  tab_id: 66,
                  name: "pleasant memory",
                  translation:
                    "\u062e\u0627\u0637\u0631\u0647 \u062e\u0648\u0634",
                },
                {
                  id: 651,
                  tab_id: 66,
                  name: "favorites",
                  translation: "\u0639\u0644\u0627\u06cc\u0642",
                },
                {
                  id: 655,
                  tab_id: 66,
                  name: "about me",
                  translation:
                    "\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
                },
                {
                  id: 667,
                  tab_id: 66,
                  name: "art",
                  translation: "\u0647\u0646\u0631",
                },
                {
                  id: 671,
                  tab_id: 66,
                  name: "music",
                  translation:
                    "\u0633\u0627\u0632 \u0648 \u0645\u0648\u0633\u06cc\u0642\u06cc",
                },
                {
                  id: 675,
                  tab_id: 66,
                  name: "sport health",
                  translation:
                    "\u0648\u0631\u0632\u0634 \u0648 \u0633\u0644\u0627\u0645\u062a",
                },
                {
                  id: 679,
                  tab_id: 66,
                  name: "language culture",
                  translation:
                    "\u0632\u0628\u0627\u0646 \u0648 \u0641\u0631\u0647\u0646\u06af",
                },
                {
                  id: 683,
                  tab_id: 66,
                  name: "philosophy",
                  translation: "\u0641\u0644\u0633\u0641\u0647",
                },
                {
                  id: 687,
                  tab_id: 66,
                  name: "animals nature",
                  translation:
                    "\u062d\u06cc\u0648\u0627\u0646\u0627\u062a \u0648 \u0637\u0628\u06cc\u0639\u062a",
                },
                {
                  id: 691,
                  tab_id: 66,
                  name: "aliens",
                  translation:
                    "\u0645\u0648\u062c\u0648\u062f\u0627\u062a \u0628\u06cc\u06af\u0627\u0646\u0647",
                },
                {
                  id: 695,
                  tab_id: 66,
                  name: "food cooking",
                  translation:
                    "\u063a\u0630\u0627 \u0648 \u0622\u0634\u067e\u0632\u06cc",
                },
                {
                  id: 699,
                  tab_id: 66,
                  name: "travel leature",
                  translation:
                    "\u0633\u0641\u0631 \u0648 \u062a\u0641\u0631\u06cc\u062d",
                },
                {
                  id: 703,
                  tab_id: 66,
                  name: "manufacturing",
                  translation:
                    "\u0633\u0627\u062e\u062a \u0648 \u062a\u0648\u0644\u06cc\u062f",
                },
                {
                  id: 707,
                  tab_id: 66,
                  name: "science technology",
                  translation:
                    "\u0639\u0644\u0648\u0645 \u0648 \u062a\u06a9\u0646\u0648\u0644\u0648\u0698\u06cc",
                },
                {
                  id: 711,
                  tab_id: 66,
                  name: "space time",
                  translation:
                    "\u0641\u0636\u0627 \u0648 \u0632\u0645\u0627\u0646",
                },
                {
                  id: 715,
                  tab_id: 66,
                  name: "history and civilization",
                  translation:
                    "\u062a\u0627\u0631\u06cc\u062e \u0648 \u062a\u0645\u062f\u0646",
                },
                {
                  id: 719,
                  tab_id: 66,
                  name: "politics economy",
                  translation:
                    "\u0633\u06cc\u0627\u0633\u062a \u0648 \u0627\u0642\u062a\u0635\u0627\u062f",
                },
                {
                  id: 2592,
                  tab_id: 66,
                  name: "read more",
                  translation:
                    "\u0645\u0637\u0627\u0644\u0639\u0647 \u0628\u06cc\u0634\u062a\u0631",
                },
                {
                  id: 2597,
                  tab_id: 66,
                  name: "view",
                  translation: "\u0645\u0634\u0627\u0647\u062f\u0647",
                },
              ],
            },
            {
              id: 70,
              modal_id: 49,
              name: "property",
              fields: [],
            },
            {
              id: 74,
              modal_id: 49,
              name: "real-estate",
              fields: [],
            },
            {
              id: 78,
              modal_id: 49,
              name: "structures",
              fields: [],
            },
            {
              id: 82,
              modal_id: 49,
              name: "belongings",
              fields: [],
            },
            {
              id: 86,
              modal_id: 49,
              name: "permissions",
              fields: [],
            },
            {
              id: 90,
              modal_id: 49,
              name: "invitations",
              fields: [],
            },
            {
              id: 94,
              modal_id: 49,
              name: "transaction",
              fields: [],
            },
            {
              id: 98,
              modal_id: 49,
              name: "reward",
              fields: [],
            },
            {
              id: 102,
              modal_id: 49,
              name: "dynasty",
              fields: [],
            },
            {
              id: 106,
              modal_id: 49,
              name: "connections",
              fields: [],
            },
            {
              id: 110,
              modal_id: 49,
              name: "infractions",
              fields: [],
            },
            {
              id: 134,
              modal_id: 49,
              name: "menu",
              fields: [
                {
                  id: 1835,
                  tab_id: 134,
                  name: "meta rgb",
                  translation: "\u0645\u062a\u0627\u0631\u0646\u06af",
                },
                {
                  id: 1839,
                  tab_id: 134,
                  name: "metaverse rang",
                  translation:
                    "\u0645\u062a\u0627\u0648\u0631\u0633 \u0631\u0646\u06af",
                },
                {
                  id: 1843,
                  tab_id: 134,
                  name: "home",
                  translation: "\u062e\u0627\u0646\u0647",
                },
                {
                  id: 1847,
                  tab_id: 134,
                  name: "property",
                  translation: "\u062f\u0627\u0631\u0627\u06cc\u06cc",
                },
                {
                  id: 1851,
                  tab_id: 134,
                  name: "real estate",
                  translation: "\u0627\u0645\u0644\u0627\u06a9",
                },
                {
                  id: 1855,
                  tab_id: 134,
                  name: "structures",
                  translation: "\u0633\u0627\u0632\u0647 \u0647\u0627",
                },
                {
                  id: 1859,
                  tab_id: 134,
                  name: "belongings",
                  translation: "\u0645\u062a\u0639\u0644\u0642\u0627\u062a",
                },
                {
                  id: 1863,
                  tab_id: 134,
                  name: "permissions",
                  translation: "\u0645\u062c\u0648\u0632 \u0647\u0627",
                },
                {
                  id: 1867,
                  tab_id: 134,
                  name: "invitations",
                  translation: "\u062f\u0639\u0648\u062a\u06cc \u0647\u0627",
                },
                {
                  id: 1871,
                  tab_id: 134,
                  name: "transaction",
                  translation: "\u062a\u0631\u0627\u06a9\u0646\u0634",
                },
                {
                  id: 1875,
                  tab_id: 134,
                  name: "reward",
                  translation: "\u067e\u0627\u062f\u0627\u0634",
                },
                {
                  id: 1879,
                  tab_id: 134,
                  name: "dynasty",
                  translation: "\u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1883,
                  tab_id: 134,
                  name: "connections",
                  translation:
                    "\u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a",
                },
                {
                  id: 1887,
                  tab_id: 134,
                  name: "crimes",
                  translation: "\u062c\u0631\u0627\u06cc\u0645",
                },
                {
                  id: 1891,
                  tab_id: 134,
                  name: "log in",
                  translation: "\u0648\u0631\u0648\u062f",
                },
                {
                  id: 1895,
                  tab_id: 134,
                  name: "logout",
                  translation: "\u062e\u0631\u0648\u062c",
                },
                {
                  id: 1899,
                  tab_id: 134,
                  name: "citizenship page",
                  translation:
                    "\u0645\u0634\u062e\u0635\u0627\u062a \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 1903,
                  tab_id: 134,
                  name: "enter the metaverse",
                  translation:
                    "\u0648\u0631\u0648\u062f \u0628\u0647 \u0645\u062a\u0627\u0648\u0631\u0633",
                },
                {
                  id: 1906,
                  tab_id: 134,
                  name: "language",
                  translation: "\u0632\u0628\u0627\u0646",
                },
              ],
            },
          ],
        },
        {
          name: "dynasty",
          tabs: [
            {
              id: 114,
              modal_id: 53,
              name: "establishment-of-a-dynasty",
              fields: [
                {
                  id: 1555,
                  tab_id: 114,
                  name: "family dynasty",
                  translation:
                    "\u0633\u0644\u0633\u0644\u0647 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",
                },
                {
                  id: 1567,
                  tab_id: 114,
                  name: "establishment of a dynasty",
                  translation:
                    "\u062a\u0623\u0633\u06cc\u0633 \u06cc\u06a9 \u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1571,
                  tab_id: 114,
                  name: "members",
                  translation: "\u0627\u0639\u0636\u0627\u0621",
                },
                {
                  id: 1575,
                  tab_id: 114,
                  name: "submitted request",
                  translation:
                    "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647",
                },
                {
                  id: 1579,
                  tab_id: 114,
                  name: "request received",
                  translation:
                    "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f\u0647",
                },
                {
                  id: 1583,
                  tab_id: 114,
                  name: "establishment of dynasty and its characteristics",
                  translation:
                    "\u062a\u0623\u0633\u06cc\u0633 \u0633\u0644\u0633\u0644\u0647 \u0648 \u0648\u06cc\u0698\u06af\u06cc \u0647\u0627\u06cc \u0622\u0646",
                },
                {
                  id: 1587,
                  tab_id: 114,
                  name: "by building a chain, enjoy huge rewards and outputs. The amount of increase in each entry.",
                  translation:
                    "\u0628\u0627 \u0633\u0627\u062e\u062a\u0646 \u06cc\u06a9 \u0632\u0646\u062c\u06cc\u0631\u0647\u060c \u0627\u0632 \u067e\u0627\u062f\u0627\u0634 \u0647\u0627 \u0648 \u062e\u0631\u0648\u062c\u06cc \u0647\u0627\u06cc \u0639\u0638\u06cc\u0645 \u0644\u0630\u062a \u0628\u0628\u0631\u06cc\u062f. \u0645\u06cc\u0632\u0627\u0646 \u0627\u0641\u0632\u0627\u06cc\u0634 \u062f\u0631 \u0647\u0631 \u0648\u0631\u0648\u062f\u06cc.",
                },
                {
                  id: 1591,
                  tab_id: 114,
                  name: "father",
                  translation: "\u067e\u062f\u0631",
                },
                {
                  id: 1595,
                  tab_id: 114,
                  name: "mother",
                  translation: "\u0645\u0627\u062f\u0631",
                },
                {
                  id: 1599,
                  tab_id: 114,
                  name: "sister",
                  translation: "\u062e\u0648\u0627\u0647\u0631",
                },
                {
                  id: 1603,
                  tab_id: 114,
                  name: "brother",
                  translation: "\u0628\u0631\u0627\u062f\u0631",
                },
                {
                  id: 1607,
                  tab_id: 114,
                  name: "child",
                  translation: "\u0641\u0631\u0632\u0646\u062f",
                },
                {
                  id: 1611,
                  tab_id: 114,
                  name: "husband",
                  translation: "\u0634\u0648\u0647\u0631",
                },
                {
                  id: 1615,
                  tab_id: 114,
                  name: "female",
                  translation: "\u0632\u0646",
                },
                {
                  id: 1619,
                  tab_id: 114,
                  name: "choose a residential property to establish your dynasty.",
                  translation:
                    "\u06cc\u06a9 \u0645\u0644\u06a9 \u0645\u0633\u06a9\u0648\u0646\u06cc \u0631\u0627 \u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u0633\u0644\u0633\u0644\u0647 \u062e\u0648\u062f \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.",
                },
                {
                  id: 1623,
                  tab_id: 114,
                  name: "vod id",
                  translation: "\u0634\u0646\u0627\u0633\u0647 VOD",
                },
                {
                  id: 1627,
                  tab_id: 114,
                  name: "total area",
                  translation: "\u0645\u0633\u0627\u062d\u062a \u06a9\u0644",
                },
                {
                  id: 1631,
                  tab_id: 114,
                  name: "selection and establishment",
                  translation:
                    "\u0627\u0646\u062a\u062e\u0627\u0628 \u0648 \u0627\u0633\u062a\u0642\u0631\u0627\u0631",
                },
              ],
            },
            {
              id: 118,
              modal_id: 53,
              name: "members",
              fields: [
                {
                  id: 1635,
                  tab_id: 118,
                  name: "citizenship id",
                  translation:
                    "\u0634\u0646\u0627\u0633\u0647 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 1639,
                  tab_id: 118,
                  name: "father",
                  translation: "\u067e\u062f\u0631",
                },
                {
                  id: 1643,
                  tab_id: 118,
                  name: "mother",
                  translation: "\u0645\u0627\u062f\u0631",
                },
                {
                  id: 1647,
                  tab_id: 118,
                  name: "sister",
                  translation: "\u062e\u0648\u0627\u0647\u0631",
                },
                {
                  id: 1651,
                  tab_id: 118,
                  name: "brother",
                  translation: "\u0628\u0631\u0627\u062f\u0631",
                },
                {
                  id: 1655,
                  tab_id: 118,
                  name: "child",
                  translation: "\u0641\u0631\u0632\u0646\u062f",
                },
                {
                  id: 1659,
                  tab_id: 118,
                  name: "husband",
                  translation: "\u0634\u0648\u0647\u0631",
                },
                {
                  id: 1663,
                  tab_id: 118,
                  name: "female",
                  translation: "\u0632\u0646",
                },
                {
                  id: 1667,
                  tab_id: 118,
                  name: "search for the name or id of the desired citizen",
                  translation:
                    "\u0646\u0627\u0645 \u06cc\u0627 \u0634\u0646\u0627\u0633\u0647 \u0634\u0647\u0631\u0648\u0646\u062f \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 1671,
                  tab_id: 118,
                  name: "ability to buy from metargb store",
                  translation:
                    "\u0627\u0645\u06a9\u0627\u0646 \u062e\u0631\u06cc\u062f \u0627\u0632 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0645\u062a\u0627\u0631\u0646\u06af",
                },
                {
                  id: 1675,
                  tab_id: 118,
                  name: "the possibility of selling real estate in meta rgb",
                  translation:
                    "\u0627\u0645\u06a9\u0627\u0646 \u0641\u0631\u0648\u0634 \u0627\u0645\u0644\u0627\u06a9 \u0648 \u0645\u0633\u062a\u063a\u0644\u0627\u062a \u062f\u0631 \u0645\u062a\u0627\u0631\u0646\u06af",
                },
                {
                  id: 1679,
                  tab_id: 118,
                  name: "condition",
                  translation: "\u0648\u0636\u0639\u06cc\u062a",
                },
                {
                  id: 1683,
                  tab_id: 118,
                  name: "the possibility of withdrawing capital from meta rgb",
                  translation:
                    "\u0627\u0645\u06a9\u0627\u0646 \u0628\u0631\u062f\u0627\u0634\u062a \u0633\u0631\u0645\u0627\u06cc\u0647 \u0627\u0632 \u0645\u062a\u0627\u0631\u0646\u06af",
                },
                {
                  id: 1687,
                  tab_id: 118,
                  name: "the possibility of joining the unity",
                  translation:
                    "\u0627\u0645\u06a9\u0627\u0646 \u067e\u06cc\u0648\u0633\u062a\u0646 \u0628\u0647 \u0627\u062a\u062d\u0627\u062f",
                },
                {
                  id: 1691,
                  tab_id: 118,
                  name: "dynasty management capability",
                  translation:
                    "\u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a \u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1695,
                  tab_id: 118,
                  name: "ability to participate in joint unity projects",
                  translation:
                    "\u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u0645\u0634\u0627\u0631\u06a9\u062a \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u0647\u0627\u06cc \u0627\u062a\u062d\u0627\u062f\u06cc",
                },
                {
                  id: 1699,
                  tab_id: 118,
                  name: "ability to participate in challenges",
                  translation:
                    "\u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u0634\u0631\u06a9\u062a \u062f\u0631 \u0686\u0627\u0644\u0634 \u0647\u0627",
                },
                {
                  id: 1703,
                  tab_id: 118,
                  name: "ability to participate in competitions",
                  translation:
                    "\u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u0634\u0631\u06a9\u062a \u062f\u0631 \u0645\u0633\u0627\u0628\u0642\u0627\u062a",
                },
                {
                  id: 1707,
                  tab_id: 118,
                  name: "ability to establish a store or office",
                  translation:
                    "\u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u0627\u06cc\u062c\u0627\u062f \u06cc\u06a9 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u06cc\u0627 \u062f\u0641\u062a\u0631",
                },
                {
                  id: 1711,
                  tab_id: 118,
                  name: "ability to cooperate in construction",
                  translation:
                    "\u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u0647\u0645\u06a9\u0627\u0631\u06cc \u062f\u0631 \u0633\u0627\u062e\u062a \u0648 \u0633\u0627\u0632",
                },
                {
                  id: 1715,
                  tab_id: 118,
                  name: "level",
                  translation: "\u0633\u0637\u062d",
                },
                {
                  id: 1719,
                  tab_id: 118,
                  name: "family dynasty",
                  translation:
                    "\u0633\u0644\u0633\u0644\u0647 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",
                },
                {
                  id: 1723,
                  tab_id: 118,
                  name: "dynasty property",
                  translation:
                    "\u062f\u0627\u0631\u0627\u06cc\u06cc \u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1727,
                  tab_id: 118,
                  name: "members",
                  translation: "\u0627\u0639\u0636\u0627\u0621",
                },
                {
                  id: 1731,
                  tab_id: 118,
                  name: "submitted request",
                  translation:
                    "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647",
                },
                {
                  id: 1735,
                  tab_id: 118,
                  name: "request received",
                  translation:
                    "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f",
                },
                {
                  id: 1739,
                  tab_id: 118,
                  name: "establishment of a dynasty",
                  translation:
                    "\u062a\u0623\u0633\u06cc\u0633 \u06cc\u06a9 \u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1742,
                  tab_id: 118,
                  name: "search",
                  translation: "\u062c\u0633\u062a\u062c\u0648",
                },
              ],
            },
            {
              id: 122,
              modal_id: 53,
              name: "submitted-request",
              fields: [
                {
                  id: 1747,
                  tab_id: 122,
                  name: "family dynasty",
                  translation:
                    "\u0633\u0644\u0633\u0644\u0647 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",
                },
                {
                  id: 1751,
                  tab_id: 122,
                  name: "dynasty property",
                  translation:
                    "\u062f\u0627\u0631\u0627\u06cc\u06cc \u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1755,
                  tab_id: 122,
                  name: "members",
                  translation: "\u0627\u0639\u0636\u0627\u0621",
                },
                {
                  id: 1759,
                  tab_id: 122,
                  name: "submitted request",
                  translation:
                    "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647",
                },
                {
                  id: 1763,
                  tab_id: 122,
                  name: "request received",
                  translation:
                    "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f",
                },
                {
                  id: 1767,
                  tab_id: 122,
                  name: "establishment of a dynasty",
                  translation:
                    "\u062a\u0623\u0633\u06cc\u0633 \u06cc\u06a9 \u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1771,
                  tab_id: 122,
                  name: "send to",
                  translation: "\u0627\u0631\u0633\u0627\u0644 \u0628\u0647",
                },
                {
                  id: 1775,
                  tab_id: 122,
                  name: "date and time of sending",
                  translation:
                    "\u062a\u0627\u0631\u06cc\u062e \u0648 \u0632\u0645\u0627\u0646 \u0627\u0631\u0633\u0627\u0644",
                },
                {
                  id: 1779,
                  tab_id: 122,
                  name: "family relationship",
                  translation:
                    "\u0646\u0633\u0628\u062a \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",
                },
                {
                  id: 1783,
                  tab_id: 122,
                  name: "application status",
                  translation:
                    "\u0648\u0636\u0639\u06cc\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a",
                },
                {
                  id: 1787,
                  tab_id: 122,
                  name: "view",
                  translation: "\u0645\u0634\u0627\u0647\u062f\u0647",
                },
              ],
            },
            {
              id: 126,
              modal_id: 53,
              name: "request-received",
              fields: [
                {
                  id: 1791,
                  tab_id: 126,
                  name: "family dynasty",
                  translation:
                    "\u0633\u0644\u0633\u0644\u0647 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",
                },
                {
                  id: 1795,
                  tab_id: 126,
                  name: "dynasty property",
                  translation:
                    "\u062f\u0627\u0631\u0627\u06cc\u06cc \u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1799,
                  tab_id: 126,
                  name: "members",
                  translation: "\u0627\u0639\u0636\u0627\u0621",
                },
                {
                  id: 1803,
                  tab_id: 126,
                  name: "submitted request",
                  translation:
                    "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647",
                },
                {
                  id: 1807,
                  tab_id: 126,
                  name: "request received",
                  translation:
                    "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f",
                },
                {
                  id: 1811,
                  tab_id: 126,
                  name: "establishment of a dynasty",
                  translation:
                    "\u062a\u0623\u0633\u06cc\u0633 \u06cc\u06a9 \u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1815,
                  tab_id: 126,
                  name: "send to",
                  translation:
                    "\u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0632",
                },
                {
                  id: 1819,
                  tab_id: 126,
                  name: "date and time of sending",
                  translation:
                    "\u062a\u0627\u0631\u06cc\u062e \u0648 \u0632\u0645\u0627\u0646 \u0627\u0631\u0633\u0627\u0644",
                },
                {
                  id: 1823,
                  tab_id: 126,
                  name: "family relationship",
                  translation:
                    "\u0646\u0633\u0628\u062a \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",
                },
                {
                  id: 1827,
                  tab_id: 126,
                  name: "application status",
                  translation:
                    "\u0648\u0636\u0639\u06cc\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a",
                },
                {
                  id: 1831,
                  tab_id: 126,
                  name: "view",
                  translation: "\u0645\u0634\u0627\u0647\u062f\u0647",
                },
              ],
            },
            {
              id: 130,
              modal_id: 53,
              name: "dynasty-property",
              fields: [
                {
                  id: 1499,
                  tab_id: 130,
                  name: "family dynasty",
                  translation:
                    "\u0633\u0644\u0633\u0644\u0647 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",
                },
                {
                  id: 1503,
                  tab_id: 130,
                  name: "dynasty property",
                  translation:
                    "\u062f\u0627\u0631\u0627\u06cc\u06cc \u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1507,
                  tab_id: 130,
                  name: "members",
                  translation: "\u0627\u0639\u0636\u0627\u0621",
                },
                {
                  id: 1511,
                  tab_id: 130,
                  name: "submitted request",
                  translation:
                    "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647",
                },
                {
                  id: 1515,
                  tab_id: 130,
                  name: "request received",
                  translation:
                    "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f\u0647",
                },
                {
                  id: 1519,
                  tab_id: 130,
                  name: "dynasty characteristics",
                  translation:
                    "\u062e\u0635\u0648\u0635\u06cc\u0627\u062a \u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 1523,
                  tab_id: 130,
                  name: "total area",
                  translation: "\u0645\u0633\u0627\u062d\u062a \u06a9\u0644",
                },
                {
                  id: 1527,
                  tab_id: 130,
                  name: "density",
                  translation: "\u062a\u0631\u0627\u06a9\u0645",
                },
                {
                  id: 1531,
                  tab_id: 130,
                  name: "increased profit from residential real estate",
                  translation:
                    "\u0627\u0641\u0632\u0627\u06cc\u0634 \u0633\u0648\u062f \u0627\u0632 \u0627\u0645\u0644\u0627\u06a9 \u0645\u0633\u06a9\u0648\u0646\u06cc",
                },
                {
                  id: 1535,
                  tab_id: 130,
                  name: "number of family members",
                  translation:
                    "\u062a\u0639\u062f\u0627\u062f \u0627\u0639\u0636\u0627\u06cc \u062e\u0627\u0646\u0648\u0627\u062f\u0647",
                },
                {
                  id: 1539,
                  tab_id: 130,
                  name: "ability to transfer property",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u0627\u0646\u062a\u0642\u0627\u0644 \u0645\u0644\u06a9",
                },
                {
                  id: 1543,
                  tab_id: 130,
                  name: "vod id",
                  translation: "\u0634\u0646\u0627\u0633\u0647 VOD",
                },
                {
                  id: 1547,
                  tab_id: 130,
                  name: "total area",
                  translation: "\u0645\u0633\u0627\u062d\u062a \u06a9\u0644",
                },
                {
                  id: 1551,
                  tab_id: 130,
                  name: "dynasty transfer",
                  translation:
                    "\u0627\u0646\u062a\u0642\u0627\u0644 \u0633\u0644\u0633\u0644\u0647",
                },
              ],
            },
          ],
        },
        {
          name: "head-menu",
          tabs: [
            {
              id: 154,
              modal_id: 61,
              name: "landing",
              fields: [
                {
                  id: 1911,
                  tab_id: 154,
                  name: "home",
                  translation: null,
                },
                {
                  id: 1915,
                  tab_id: 154,
                  name: "news",
                  translation: null,
                },
                {
                  id: 1919,
                  tab_id: 154,
                  name: "articles",
                  translation: null,
                },
                {
                  id: 1923,
                  tab_id: 154,
                  name: "competitions",
                  translation: null,
                },
                {
                  id: 1927,
                  tab_id: 154,
                  name: "trainings",
                  translation: null,
                },
                {
                  id: 1931,
                  tab_id: 154,
                  name: "about",
                  translation: null,
                },
                {
                  id: 1935,
                  tab_id: 154,
                  name: "contact us",
                  translation: null,
                },
                {
                  id: 1939,
                  tab_id: 154,
                  name: "meta rgb",
                  translation: null,
                },
                {
                  id: 1943,
                  tab_id: 154,
                  name: "metaverse rang",
                  translation: null,
                },
                {
                  id: 1947,
                  tab_id: 154,
                  name: "log in",
                  translation: null,
                },
                {
                  id: 1951,
                  tab_id: 154,
                  name: "logout",
                  translation: null,
                },
                {
                  id: 1955,
                  tab_id: 154,
                  name: "citizenship page",
                  translation: null,
                },
                {
                  id: 1959,
                  tab_id: 154,
                  name: "enter the metaverse",
                  translation: null,
                },
                {
                  id: 1963,
                  tab_id: 154,
                  name: "language",
                  translation: null,
                },
                {
                  id: 1968,
                  tab_id: 154,
                  name: "metaverse rang",
                  translation: null,
                },
                {
                  id: 1976,
                  tab_id: 154,
                  name: "copyright",
                  translation: null,
                },
                {
                  id: 1984,
                  tab_id: 154,
                  name: "our networks",
                  translation: null,
                },
                {
                  id: 1992,
                  tab_id: 154,
                  name: "instagram",
                  translation: null,
                },
                {
                  id: 2000,
                  tab_id: 154,
                  name: "telegram",
                  translation: null,
                },
                {
                  id: 2008,
                  tab_id: 154,
                  name: "twitter",
                  translation: null,
                },
                {
                  id: 2016,
                  tab_id: 154,
                  name: "medium",
                  translation: null,
                },
                {
                  id: 2024,
                  tab_id: 154,
                  name: "youtube",
                  translation: null,
                },
                {
                  id: 2032,
                  tab_id: 154,
                  name: "filo",
                  translation: null,
                },
                {
                  id: 2040,
                  tab_id: 154,
                  name: "mp4",
                  translation: null,
                },
                {
                  id: 2048,
                  tab_id: 154,
                  name: "aparat",
                  translation: null,
                },
                {
                  id: 2056,
                  tab_id: 154,
                  name: "namasha",
                  translation: null,
                },
                {
                  id: 2064,
                  tab_id: 154,
                  name: "dalfak",
                  translation: null,
                },
                {
                  id: 2072,
                  tab_id: 154,
                  name: "faq",
                  translation: null,
                },
                {
                  id: 2080,
                  tab_id: 154,
                  name: "uni",
                  translation: null,
                },
                {
                  id: 2088,
                  tab_id: 154,
                  name: "virgool",
                  translation: null,
                },
                {
                  id: 2096,
                  tab_id: 154,
                  name: "linkedin",
                  translation: null,
                },
                {
                  id: 2104,
                  tab_id: 154,
                  name: "facebook",
                  translation: null,
                },
                {
                  id: 2112,
                  tab_id: 154,
                  name: "namayesh",
                  translation: null,
                },
              ],
            },
          ],
        },
        {
          name: "footer-menu",
          tabs: [
            {
              id: 158,
              modal_id: 65,
              name: "landing",
              fields: [
                {
                  id: 1971,
                  tab_id: 158,
                  name: "metaverse rang",
                  translation:
                    "\u0645\u062a\u0627\u0648\u0631\u0633 \u0631\u0646\u06af",
                },
                {
                  id: 1979,
                  tab_id: 158,
                  name: "copyright",
                  translation:
                    "\u062d\u0642\u0648\u0642 \u0633\u0627\u062e\u062a\u0627\u0631 \u0627\u06cc\u0646 \u0628\u0633\u062a\u0631 \u062b\u0628\u062a \u0634\u062f\u0647 \u0627\u0633\u062a . \u062f\u0631\u0635\u0648\u0631\u062a \u06a9\u067e\u06cc \u0645\u0637\u0627\u0644\u0628 \u0645\u06cc\u0628\u0627\u06cc\u0633\u062a \u0645\u0646\u0628\u0639 \u0631\u0627 \u0630\u06a9\u0631 \u06a9\u0646\u06cc\u062f \u060c \u062a\u062d\u062a \u062d\u0645\u0627\u06cc\u062a \u0642\u0648\u0647 \u0642\u0636\u0627\u06cc\u06cc\u0647 \u060c \u0648\u0632\u0627\u0631\u062a \u062a\u0639\u0627\u0648\u0646 .",
                },
                {
                  id: 1987,
                  tab_id: 158,
                  name: "our networks",
                  translation:
                    "\u0634\u0628\u06a9\u0647 \u0647\u0627\u06cc \u0645\u0627",
                },
                {
                  id: 1995,
                  tab_id: 158,
                  name: "instagram",
                  translation:
                    "\u0627\u06cc\u0646\u0633\u062a\u0627\u06af\u0631\u0627\u0645",
                },
                {
                  id: 2003,
                  tab_id: 158,
                  name: "telegram",
                  translation: "\u062a\u0644\u06af\u0631\u0627\u0645",
                },
                {
                  id: 2011,
                  tab_id: 158,
                  name: "twitter",
                  translation: "\u062a\u0648\u06cc\u062a\u0631",
                },
                {
                  id: 2019,
                  tab_id: 158,
                  name: "medium",
                  translation: "\u0645\u062f\u06cc\u0648\u0645",
                },
                {
                  id: 2027,
                  tab_id: 158,
                  name: "youtube",
                  translation: "\u06cc\u0648\u062a\u0648\u0628",
                },
                {
                  id: 2035,
                  tab_id: 158,
                  name: "filo",
                  translation: "\u0641\u06cc\u0644\u0648",
                },
                {
                  id: 2043,
                  tab_id: 158,
                  name: "mp4",
                  translation: "\u0627\u0645 \u067e\u06cc \u0641\u0648\u0631",
                },
                {
                  id: 2051,
                  tab_id: 158,
                  name: "aparat",
                  translation: "\u0622\u067e\u0627\u0631\u0627\u062a",
                },
                {
                  id: 2059,
                  tab_id: 158,
                  name: "namasha",
                  translation: "\u0646\u0645\u0627\u0634\u0627",
                },
                {
                  id: 2067,
                  tab_id: 158,
                  name: "dalfak",
                  translation: "\u062f\u0627\u0644\u0641\u06a9",
                },
                {
                  id: 2075,
                  tab_id: 158,
                  name: "faq",
                  translation:
                    "\u0627\u0646\u062c\u0645\u0646 \u0645\u062a\u0627\u0648\u0631\u0633",
                },
                {
                  id: 2083,
                  tab_id: 158,
                  name: "uni",
                  translation:
                    "\u062f\u0627\u0646\u0634\u06af\u0627\u0647 \u0645\u062a\u0627\u0648\u0631\u0633",
                },
                {
                  id: 2091,
                  tab_id: 158,
                  name: "virgool",
                  translation: "\u0648\u06cc\u0631\u06af\u0648\u0644",
                },
                {
                  id: 2099,
                  tab_id: 158,
                  name: "linkedin",
                  translation: "\u0644\u06cc\u0646\u06a9\u062f\u06cc\u0646",
                },
                {
                  id: 2107,
                  tab_id: 158,
                  name: "facebook",
                  translation: "\u0641\u06cc\u0633\u0628\u0648\u06a9",
                },
                {
                  id: 2115,
                  tab_id: 158,
                  name: "namayesh",
                  translation: "\u0646\u0645\u0627\u06cc\u0634",
                },
              ],
            },
            {
              id: 162,
              modal_id: 65,
              name: "our-systems",
              fields: [
                {
                  id: 2151,
                  tab_id: 162,
                  name: "ministry of cooperation license",
                  translation:
                    "\u0645\u062c\u0648\u0632 \u0648\u0632\u0627\u0631\u062a \u062a\u0639\u0627\u0648\u0646",
                },
                {
                  id: 2155,
                  tab_id: 162,
                  name: "judiciary authority license",
                  translation:
                    "\u0645\u062c\u0648\u0632 \u0627\u0632 \u0642\u0648\u0647 \u0642\u0636\u0627\u067e\u06cc\u0647",
                },
                {
                  id: 2159,
                  tab_id: 162,
                  name: "video training center",
                  translation:
                    "\u0645\u0631\u06a9\u0632 \u0622\u0645\u0648\u0632\u0634 \u0648\u06cc\u062f\u06cc\u0648\u06cc\u06cc",
                },
                {
                  id: 2163,
                  tab_id: 162,
                  name: "q&q forum",
                  translation:
                    "\u0627\u0646\u062c\u0645\u0646 \u067e\u0631\u0633\u0634 \u0648 \u067e\u0627\u0633\u062e",
                },
                {
                  id: 2167,
                  tab_id: 162,
                  name: "national store",
                  translation:
                    "\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0645\u0644\u06cc",
                },
                {
                  id: 2171,
                  tab_id: 162,
                  name: "iranian producers",
                  translation:
                    "\u062a\u0648\u0644\u06cc\u062f \u06a9\u0646\u0646\u062f\u06af\u0627\u0646 \u0627\u06cc\u0631\u0627\u0646",
                },
                {
                  id: 2175,
                  tab_id: 162,
                  name: "management system for managers",
                  translation:
                    "\u0633\u0627\u0645\u0627\u0646\u0647 \u0645\u062f\u06cc\u0631\u06cc\u062a \u0628\u0631 \u0645\u062f\u06cc\u0631\u0627\u0646",
                },
                {
                  id: 2179,
                  tab_id: 162,
                  name: "target system",
                  translation:
                    "\u0633\u0627\u0645\u0627\u0646\u0647 \u0647\u062f\u0641",
                },
                {
                  id: 2183,
                  tab_id: 162,
                  name: "animal system",
                  translation:
                    "\u0633\u0627\u0645\u0627\u0646\u0647 \u062d\u06cc\u0648\u0627\u0646\u0627\u062a",
                },
                {
                  id: 2187,
                  tab_id: 162,
                  name: "structure center",
                  translation:
                    "\u0645\u0631\u06a9\u0632 \u0633\u0627\u062e\u062a\u0627\u0631",
                },
                {
                  id: 2191,
                  tab_id: 162,
                  name: "meta news",
                  translation:
                    "\u0627\u062e\u0628\u0627\u0631 \u0645\u062a\u0627",
                },
                {
                  id: 2195,
                  tab_id: 162,
                  name: "metaverse university",
                  translation:
                    "\u062f\u0627\u0646\u0634\u06af\u0627\u0647 \u0645\u062a\u0627\u0648\u0631\u0633",
                },
                {
                  id: 2199,
                  tab_id: 162,
                  name: "knowledge-centric system",
                  translation:
                    "\u0633\u0627\u0645\u0627\u0646\u0647 \u062f\u0627\u0646\u0634 \u0645\u062d\u0648\u0631",
                },
                {
                  id: 2203,
                  tab_id: 162,
                  name: "it services system",
                  translation:
                    "\u0633\u0627\u0645\u0627\u0646\u0647 \u062e\u062f\u0645\u0627\u062a IT",
                },
                {
                  id: 2207,
                  tab_id: 162,
                  name: "national advertising",
                  translation:
                    "\u062a\u0628\u0644\u06cc\u063a\u0627\u062a \u0645\u0644\u06cc",
                },
                {
                  id: 2211,
                  tab_id: 162,
                  name: "nft marketplace",
                  translation: "\u0628\u0627\u0632\u0627\u0631 NFT",
                },
                {
                  id: 2215,
                  tab_id: 162,
                  name: "metaverse color",
                  translation:
                    "\u0645\u062a\u0627\u0648\u0631\u0633 \u0631\u0646\u06af",
                },
                {
                  id: 2219,
                  tab_id: 162,
                  name: "real estate and properties",
                  translation:
                    "\u0627\u0645\u0644\u0627\u06a9 \u0648 \u0645\u0633\u062a\u063a\u0644\u0627\u062a",
                },
              ],
            },
          ],
        },
        {
          name: "ip-checker",
          tabs: [
            {
              id: 291,
              modal_id: 111,
              name: "access-error",
              fields: [
                {
                  id: 3345,
                  tab_id: 291,
                  name: "access level",
                  translation:
                    "\u0633\u0637\u062d \u062f\u0633\u062a\u0631\u0633\u06cc",
                },
                {
                  id: 3352,
                  tab_id: 291,
                  name: "unauthorized ip",
                  translation:
                    "\u0622\u06cc \u067e\u06cc \u063a\u06cc\u0631\u0645\u062c\u0627\u0632",
                },
                {
                  id: 3359,
                  tab_id: 291,
                  name: "your IP is known",
                  translation:
                    "IP \u0634\u0645\u0627 \u063a\u06cc\u0631 \u0627\u06cc\u0631\u0627\u0646\u06cc \u0634\u0646\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a",
                },
                {
                  id: 3366,
                  tab_id: 291,
                  name: "if you use a",
                  translation: "\u0627\u06af\u0631 \u0627\u0632",
                },
                {
                  id: 3373,
                  tab_id: 291,
                  name: "vpn",
                  translation: "VPN",
                },
                {
                  id: 3604,
                  tab_id: 291,
                  name: "otherwise, click",
                  translation:
                    "\u062f\u0631 \u063a\u06cc\u0631\u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0631\u0648\u06cc \u06af\u0632\u06cc\u0646\u0647 \u0632\u06cc\u0631 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 3611,
                  tab_id: 291,
                  name: "ip authorization",
                  translation:
                    "\u0645\u062c\u0627\u0632 \u0633\u0627\u0632\u06cc IP",
                },
                {
                  id: 3618,
                  tab_id: 291,
                  name: "for more information",
                  translation:
                    "\u0628\u0631\u0627\u06cc \u06a9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0648 \u067e\u0627\u0633\u062e \u0628\u0647 \u0633\u0648\u0627\u0644\u0627\u062a\u060c \u0627\u0632",
                },
                {
                  id: 3625,
                  tab_id: 291,
                  name: "visit the",
                  translation:
                    "\u062f\u06cc\u062f\u0646 \u0646\u0645\u0627\u06cc\u06cc\u062f.",
                },
                {
                  id: 3632,
                  tab_id: 291,
                  name: "website",
                  translation: "\u0648\u0628\u0633\u0627\u06cc\u062a",
                },
                {
                  id: 3870,
                  tab_id: 291,
                  name: "turn it off",
                  translation:
                    "\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u062f \u0622\u0646 \u0631\u0627 \u062e\u0627\u0645\u0648\u0634 \u06a9\u0631\u062f\u0647",
                },
                {
                  id: 3877,
                  tab_id: 291,
                  name: "then reload the page",
                  translation:
                    "\u0633\u067e\u0633 \u0635\u0641\u062d\u0647 \u0631\u0627 \u0645\u062c\u062f\u062f \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u06a9\u0646\u06cc\u062f",
                },
              ],
            },
            {
              id: 298,
              modal_id: 111,
              name: "review-and-notification",
              fields: [
                {
                  id: 3296,
                  tab_id: 298,
                  name: "access level",
                  translation:
                    "\u0633\u0637\u062d \u062f\u0633\u062a\u0631\u0633\u06cc",
                },
                {
                  id: 3303,
                  tab_id: 298,
                  name: "check ip status",
                  translation:
                    "\u0628\u0631\u0631\u0633\u06cc \u0648\u0636\u0639\u06cc\u062a IP",
                },
                {
                  id: 3310,
                  tab_id: 298,
                  name: "time required 24 hours",
                  translation:
                    "\u0632\u0645\u0627\u0646 \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 24 \u0633\u0627\u0639\u062a",
                },
                {
                  id: 3317,
                  tab_id: 298,
                  name: "to inform about",
                  translation:
                    "\u062c\u0647\u062a \u0627\u0637\u0644\u0627\u0639 \u0631\u0633\u0627\u0646\u06cc \u0627\u0632 \u0634\u0631\u062d \u0627\u0642\u062f\u0627\u0645\u0627\u062a",
                },
                {
                  id: 3639,
                  tab_id: 298,
                  name: "enter your email below",
                  translation:
                    "\u0627\u06cc\u0645\u06cc\u0644 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u06a9\u0627\u062f\u0631 \u0632\u06cc\u0631 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 3646,
                  tab_id: 298,
                  name: "enter your email",
                  translation:
                    "\u0627\u06cc\u0645\u06cc\u0644 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 3653,
                  tab_id: 298,
                  name: "the email entered is not valid",
                  translation:
                    "\u0627\u06cc\u0645\u06cc\u0644 \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a",
                },
                {
                  id: 3660,
                  tab_id: 298,
                  name: "let me know",
                  translation:
                    "\u0645\u0631\u0627 \u062e\u0628\u0631\u06a9\u0646",
                },
                {
                  id: 3667,
                  tab_id: 298,
                  name: "for more information",
                  translation:
                    "\u0628\u0631\u0627\u06cc \u06a9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0648 \u067e\u0627\u0633\u062e \u0628\u0647 \u0633\u0648\u0627\u0644\u0627\u062a\u060c \u0627\u0632",
                },
                {
                  id: 3674,
                  tab_id: 298,
                  name: "visit the",
                  translation:
                    "\u062f\u06cc\u062f\u0646 \u0646\u0645\u0627\u06cc\u06cc\u062f.",
                },
                {
                  id: 3681,
                  tab_id: 298,
                  name: "website",
                  translation: "\u0648\u0628\u0633\u0627\u06cc\u062a",
                },
                {
                  id: 3891,
                  tab_id: 298,
                  name: "your email has been registered",
                  translation:
                    "\u0627\u06cc\u0645\u06cc\u0644 \u0634\u0645\u0627 \u062b\u0628\u062a \u0634\u062f\u0647 \u0627\u0633\u062a",
                },
              ],
            },
          ],
        },
        {
          name: "central-page",
          tabs: [
            {
              id: 312,
              modal_id: 118,
              name: "central-page",
              fields: [
                {
                  id: 3688,
                  tab_id: 312,
                  name: "meta rgb",
                  translation: "\u0645\u062a\u0627 \u0631\u0646\u06af",
                },
                {
                  id: 3695,
                  tab_id: 312,
                  name: "metaverse rang",
                  translation:
                    "\u0645\u062a\u0627\u0648\u0631\u0633 \u0631\u0646\u06af",
                },
                {
                  id: 3702,
                  tab_id: 312,
                  name: "sign out",
                  translation:
                    "\u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 3709,
                  tab_id: 312,
                  name: "account security",
                  translation:
                    "\u0627\u0645\u0646\u06cc\u062a \u062d\u0633\u0627\u0628 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
                {
                  id: 3716,
                  tab_id: 312,
                  name: "challenges",
                  translation: "\u0686\u0627\u0644\u0634 \u0647\u0627",
                },
                {
                  id: 3723,
                  tab_id: 312,
                  name: "central search",
                  translation:
                    "\u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u0631\u06a9\u0632\u06cc",
                },
                {
                  id: 3730,
                  tab_id: 312,
                  name: "global statistics",
                  translation:
                    "\u0622\u0645\u0627\u0631 \u0633\u0631\u0627\u0633\u0631\u06cc",
                },
                {
                  id: 3737,
                  tab_id: 312,
                  name: "family tree",
                  translation:
                    "\u0633\u0644\u0633\u0644\u0647 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",
                },
                {
                  id: 3744,
                  tab_id: 312,
                  name: "vod guide",
                  translation: "\u0631\u0627\u0647\u0646\u0645\u0627\u06cc VOD",
                },
                {
                  id: 3751,
                  tab_id: 312,
                  name: "accumulated earnings",
                  translation:
                    "\u0633\u0648\u062f \u0627\u0646\u0628\u0627\u0634\u062a\u0647",
                },
                {
                  id: 3758,
                  tab_id: 312,
                  name: "identify verification",
                  translation:
                    "\u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a",
                },
                {
                  id: 3765,
                  tab_id: 312,
                  name: "calendar",
                  translation: "\u062a\u0642\u0648\u06cc\u0645",
                },
                {
                  id: 3772,
                  tab_id: 312,
                  name: "store",
                  translation: "\u0641\u0631\u0648\u0634\u06af\u0627\u0647",
                },
                {
                  id: 3779,
                  tab_id: 312,
                  name: "notifications",
                  translation: "\u0627\u0639\u0644\u0627\u0646 \u0647\u0627",
                },
                {
                  id: 3786,
                  tab_id: 312,
                  name: "reports",
                  translation: "\u06af\u0632\u0627\u0631\u0634\u0627\u062a",
                },
                {
                  id: 3793,
                  tab_id: 312,
                  name: "language",
                  translation: "\u0632\u0628\u0627\u0646",
                },
                {
                  id: 3800,
                  tab_id: 312,
                  name: "dark mode",
                  translation: "\u062a\u06cc\u0631\u0647",
                },
                {
                  id: 3807,
                  tab_id: 312,
                  name: "light mode",
                  translation: "\u0631\u0648\u0634\u0646",
                },
                {
                  id: 3814,
                  tab_id: 312,
                  name: "send document",
                  translation:
                    "\u0627\u0631\u0633\u0627\u0644 \u0633\u0646\u062f",
                },
                {
                  id: 3821,
                  tab_id: 312,
                  name: "chat",
                  translation: "\u06af\u0641\u062a\u06af\u0648",
                },
                {
                  id: 3828,
                  tab_id: 312,
                  name: "profile",
                  translation: "\u067e\u0631\u0648\u0641\u0627\u06cc\u0644",
                },
                {
                  id: 3835,
                  tab_id: 312,
                  name: "share",
                  translation:
                    "\u0627\u0634\u062a\u0631\u0627\u06a9 \u06af\u0630\u0627\u0631\u06cc",
                },
                {
                  id: 3842,
                  tab_id: 312,
                  name: "dynasty",
                  translation: "\u0633\u0644\u0633\u0644\u0647",
                },
                {
                  id: 3849,
                  tab_id: 312,
                  name: "unity",
                  translation: "\u0627\u062a\u062d\u0627\u062f",
                },
                {
                  id: 3856,
                  tab_id: 312,
                  name: "visit portfolio",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631\u0647\u0627",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
