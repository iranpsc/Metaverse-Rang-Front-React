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
      version: 60,
      file_url: "https://rgb.irpsc.com/lang/en.json",
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
                  id: 3449,
                  tab_id: 3,
                  name: "register",
                  translation: "Register",
                },
                {
                  id: 3463,
                  tab_id: 3,
                  name: "for more information and answers to",
                  translation: "Click on the login button",
                },
                {
                  id: 3470,
                  tab_id: 3,
                  name: "visit-the",
                  translation: "With",
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
            {
              id: 325,
              modal_id: 5,
              name: "forget-password",
              fields: [
                {
                  id: 4723,
                  tab_id: 325,
                  name: "forgot your password",
                  translation: "Forgot your password?",
                },
                {
                  id: 4730,
                  tab_id: 325,
                  name: "forgot password",
                  translation: "Forgot password",
                },
                {
                  id: 4737,
                  tab_id: 325,
                  name: "to retrieve it, please enter your email address in the box below",
                  translation:
                    "To retrieve it, please enter your email address in the box below.",
                },
                {
                  id: 4744,
                  tab_id: 325,
                  name: "example@example.com",
                  translation: "Example@Example.com",
                },
                {
                  id: 4751,
                  tab_id: 325,
                  name: "send",
                  translation: "send",
                },
                {
                  id: 4758,
                  tab_id: 325,
                  name: "return to the login page",
                  translation: "Return to the login page",
                },
                {
                  id: 4765,
                  tab_id: 325,
                  name: "the entered email is not correct",
                  translation: "The entered email is not correct.",
                },
                {
                  id: 4772,
                  tab_id: 325,
                  name: "an email containing",
                  translation:
                    "An email containing a password change link has been sent.",
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
                {
                  id: 4933,
                  tab_id: 6,
                  name: "website",
                  translation: "Website",
                },
                {
                  id: 4947,
                  tab_id: 6,
                  name: "this section is required",
                  translation: "This section is required",
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
                    "Metaverse Video Tutorials: A New Realm of Experiential Learning",
                },
                {
                  id: 2130,
                  tab_id: 137,
                  name: "search for the training you need",
                  translation: "Search For The Training You Need",
                },
                {
                  id: 2134,
                  tab_id: 137,
                  name: "top trainers",
                  translation: "Top Trainers",
                },
                {
                  id: 2138,
                  tab_id: 137,
                  name: "view other trainers",
                  translation: "View Other Trainers",
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
                  name: "view all",
                  translation: "View All",
                },
                {
                  id: 4199,
                  tab_id: 137,
                  name: "cv teacher",
                  translation: "CV Teacher",
                },
                {
                  id: 4206,
                  tab_id: 137,
                  name: "categories",
                  translation: "Categories",
                },
                {
                  id: 4234,
                  tab_id: 137,
                  name: "view more",
                  translation: "View More",
                },
                {
                  id: 4241,
                  tab_id: 137,
                  name: "search",
                  translation: "Search",
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
              fields: [
                {
                  id: 4996,
                  tab_id: 149,
                  name: "list of subcategories related to",
                  translation: "List of subcategories related to",
                },
                {
                  id: 5003,
                  tab_id: 149,
                  name: "description",
                  translation: "Description",
                },
                {
                  id: 5010,
                  tab_id: 149,
                  name: "search for the training you need",
                  translation: "Search for the training you need",
                },
                {
                  id: 5017,
                  tab_id: 149,
                  name: "all categories of metaverse training",
                  translation: "All categories of Metaverse training",
                },
                {
                  id: 5039,
                  tab_id: 149,
                  name: "metaverse category",
                  translation: "Metaverse category",
                },
                {
                  id: 5046,
                  tab_id: 149,
                  name: "metaverse educational categories",
                  translation: "A list of Metaverse educational categories",
                },
                {
                  id: 5053,
                  tab_id: 149,
                  name: "training related to",
                  translation: "Training related to",
                },
                {
                  id: 5346,
                  tab_id: 149,
                  name: "metaverse specialized training that is available in categories",
                  translation:
                    "Metaverse specialized training that is available in categories",
                },
                {
                  id: 6040,
                  tab_id: 149,
                  name: "training categories",
                  translation: "Training categories",
                },
              ],
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
                  name: "view all",
                  translation: "See More",
                },
                {
                  id: 2242,
                  tab_id: 165,
                  name: "related tutorials",
                  translation: "Related Tutorials",
                },
                {
                  id: 6089,
                  tab_id: 165,
                  name: "share",
                  translation: "Share",
                },
                {
                  id: 6096,
                  tab_id: 165,
                  name: "citizen id",
                  translation: "Citizen ID",
                },
                {
                  id: 6103,
                  tab_id: 165,
                  name: "your point of view",
                  translation: "Your point of view",
                },
                {
                  id: 6110,
                  tab_id: 165,
                  name: "response",
                  translation: "Response",
                },
                {
                  id: 6117,
                  tab_id: 165,
                  name: "video sharing",
                  translation: "Video sharing",
                },
                {
                  id: 6124,
                  tab_id: 165,
                  name: "edit",
                  translation: "Edit",
                },
                {
                  id: 6131,
                  tab_id: 165,
                  name: "delete",
                  translation: "Delete",
                },
                {
                  id: 6138,
                  tab_id: 165,
                  name: "your report has been registered and will be reviewed as soon",
                  translation:
                    "Your report has been registered and will be reviewed as soon as possible.",
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
                  name: "get red color",
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
                  translation: "Citizenship ID (Referral)",
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
                  name: "trainings",
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
                {
                  id: 4786,
                  tab_id: 65,
                  name: "share",
                  translation: "Share",
                },
                {
                  id: 4793,
                  tab_id: 65,
                  name: "copy",
                  translation: "Copy",
                },
                {
                  id: 4800,
                  tab_id: 65,
                  name: "citizen sharing",
                  translation: "Citizen sharing",
                },
                {
                  id: 4807,
                  tab_id: 65,
                  name: "aliens",
                  translation: "Aliens",
                },
                {
                  id: 4814,
                  tab_id: 65,
                  name: "animals nature",
                  translation: "Animals Nature",
                },
                {
                  id: 4821,
                  tab_id: 65,
                  name: "art",
                  translation: "Art",
                },
                {
                  id: 4828,
                  tab_id: 65,
                  name: "food cooking",
                  translation: "Food Cooking",
                },
                {
                  id: 4835,
                  tab_id: 65,
                  name: "history",
                  translation: "History",
                },
                {
                  id: 4842,
                  tab_id: 65,
                  name: "language culture",
                  translation: "Language Culture",
                },
                {
                  id: 4849,
                  tab_id: 65,
                  name: "manufacturing",
                  translation: "Manufacturing",
                },
                {
                  id: 4856,
                  tab_id: 65,
                  name: "music",
                  translation: "Music",
                },
                {
                  id: 4863,
                  tab_id: 65,
                  name: "philosophy",
                  translation: "Philosophy",
                },
                {
                  id: 4870,
                  tab_id: 65,
                  name: "politics economy",
                  translation: "Politics Economy",
                },
                {
                  id: 4877,
                  tab_id: 65,
                  name: "science technology",
                  translation: "Science Technology",
                },
                {
                  id: 4884,
                  tab_id: 65,
                  name: "space time",
                  translation: "Space Time",
                },
                {
                  id: 4898,
                  tab_id: 65,
                  name: "travel leisure",
                  translation: "Travel Leisure",
                },
                {
                  id: 4906,
                  tab_id: 65,
                  name: "sport health",
                  translation: "Sport Health",
                },
                {
                  id: 4941,
                  tab_id: 65,
                  name: "-participant",
                  translation: "Participant",
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
                  translation: "Meta RGB",
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
                  id: 4464,
                  tab_id: 133,
                  name: "home page",
                  translation: "Home Page",
                },
                {
                  id: 4625,
                  tab_id: 133,
                  name: "metaverse rang",
                  translation: "Metaverse Rang",
                },
                {
                  id: 4632,
                  tab_id: 133,
                  name: "light",
                  translation: "Light",
                },
                {
                  id: 4639,
                  tab_id: 133,
                  name: "dark",
                  translation: "Dark",
                },
                {
                  id: 4779,
                  tab_id: 133,
                  name: "my profile page",
                  translation: "My profile page",
                },
                {
                  id: 4912,
                  tab_id: 133,
                  name: "are you sure you want to exit",
                  translation: "Are you sure you want to exit?",
                },
                {
                  id: 4919,
                  tab_id: 133,
                  name: "yes",
                  translation: "Yes",
                },
                {
                  id: 4926,
                  tab_id: 133,
                  name: "no",
                  translation: "No",
                },
                {
                  id: 5024,
                  tab_id: 133,
                  name: "categories",
                  translation: "Categories",
                },
                {
                  id: 5031,
                  tab_id: 133,
                  name: "metaverse trainers",
                  translation: "Metaverse trainers",
                },
                {
                  id: 6047,
                  tab_id: 133,
                  name: "language",
                  translation: "Language",
                },
                {
                  id: 6075,
                  tab_id: 133,
                  name: "login",
                  translation: "Login",
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
          name: "footer-menu",
          tabs: [
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
                  translation: "Metaverse University",
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
                  translation: "Metaverse Color",
                },
                {
                  id: 2218,
                  tab_id: 161,
                  name: "real estate and properties",
                  translation: "Real Estate and Properties",
                },
                {
                  id: 4248,
                  tab_id: 161,
                  name: "national metaverse",
                  translation: "National Metaverse",
                },
                {
                  id: 4255,
                  tab_id: 161,
                  name: "global leadership in a parallel world",
                  translation: "Global leadership in a parallel world",
                },
                {
                  id: 4262,
                  tab_id: 161,
                  name: "footer description1",
                  translation:
                    "National Metaverse is a large and leading project in the parallel world of Color Metaverse, implemented by Behesht Supply Chain Cooperative. This project has achieved a new reality in the parallel and virtual world and offers amazing facilities to people all over the world to experience unique and fascinating experiences.",
                },
                {
                  id: 4269,
                  tab_id: 161,
                  name: "footer description2",
                  translation:
                    "Behesht supply chain cooperative, as the main founder of this project, has promoted the creation of a global virtual community by using advanced technologies and taking advantage of the metaverse concept. This project allows people to benefit from IoT technology, experience the 3D environment of virtual reality, and endless interactions.",
                },
                {
                  id: 4276,
                  tab_id: 161,
                  name: "join our networks",
                  translation: "Join Our Networks",
                },
                {
                  id: 4283,
                  tab_id: 161,
                  name: "facebook",
                  translation: "Facebook",
                },
                {
                  id: 4290,
                  tab_id: 161,
                  name: "feed",
                  translation: "Feed",
                },
                {
                  id: 4297,
                  tab_id: 161,
                  name: "instagram",
                  translation: "Instagram",
                },
                {
                  id: 4304,
                  tab_id: 161,
                  name: "linkedin",
                  translation: "Linkedin",
                },
                {
                  id: 4311,
                  tab_id: 161,
                  name: "pinterest",
                  translation: "Pinterest",
                },
                {
                  id: 4318,
                  tab_id: 161,
                  name: "whatsapp",
                  translation: "Whatsapp",
                },
                {
                  id: 4325,
                  tab_id: 161,
                  name: "youtube",
                  translation: "Youtube",
                },
                {
                  id: 4332,
                  tab_id: 161,
                  name: "rubika",
                  translation: "Rubika",
                },
                {
                  id: 4339,
                  tab_id: 161,
                  name: "telegram",
                  translation: "Telegram",
                },
                {
                  id: 4346,
                  tab_id: 161,
                  name: "virgool",
                  translation: "Virgool",
                },
                {
                  id: 4353,
                  tab_id: 161,
                  name: "add",
                  translation: "Add",
                },
                {
                  id: 4360,
                  tab_id: 161,
                  name: "aparat",
                  translation: "Aparat",
                },
                {
                  id: 4367,
                  tab_id: 161,
                  name: "dalfak",
                  translation: "Dalfak",
                },
                {
                  id: 4374,
                  tab_id: 161,
                  name: "discord",
                  translation: "Discord",
                },
                {
                  id: 4381,
                  tab_id: 161,
                  name: "faq",
                  translation: "Faq",
                },
                {
                  id: 4388,
                  tab_id: 161,
                  name: "filo",
                  translation: "Filo",
                },
                {
                  id: 4395,
                  tab_id: 161,
                  name: "jabeh",
                  translation: "Jabeh",
                },
                {
                  id: 4402,
                  tab_id: 161,
                  name: "medium",
                  translation: "Medium",
                },
                {
                  id: 4409,
                  tab_id: 161,
                  name: "mp4",
                  translation: "MP4",
                },
                {
                  id: 4416,
                  tab_id: 161,
                  name: "namasha",
                  translation: "Namasha",
                },
                {
                  id: 4429,
                  tab_id: 161,
                  name: "youtube-url",
                  translation: "https://www.youtube.com/@Irpsc",
                },
                {
                  id: 4436,
                  tab_id: 161,
                  name: "instagram-url",
                  translation: "https://www.instagram.com/rgb.irpsc/",
                },
                {
                  id: 4443,
                  tab_id: 161,
                  name: "ifilo-url",
                  translation: "https://ifilo.net/MetaRang.iran",
                },
                {
                  id: 4450,
                  tab_id: 161,
                  name: "mp4-url",
                  translation: "https://www.mp4.ir/meta.rang",
                },
                {
                  id: 4457,
                  tab_id: 161,
                  name: "dalfak-url",
                  translation: "https://www.dalfak.com/metarang",
                },
                {
                  id: 4471,
                  tab_id: 161,
                  name: "jabeh-url",
                  translation: "https://jabeh.com/c/1nk44b",
                },
                {
                  id: 4478,
                  tab_id: 161,
                  name: "namasha-url",
                  translation: "https://www.namasha.com/qzparadise",
                },
                {
                  id: 4485,
                  tab_id: 161,
                  name: "medium-url",
                  translation: "https://medium.com/@metarang.iran",
                },
                {
                  id: 4492,
                  tab_id: 161,
                  name: "rubika-url",
                  translation: "https://rubika.ir/metaverse_iran",
                },
                {
                  id: 4499,
                  tab_id: 161,
                  name: "faq-url",
                  translation: "https://faq.irpsc.com/",
                },
                {
                  id: 4506,
                  tab_id: 161,
                  name: "ad-url",
                  translation: "https://ad.irpsc.com/",
                },
                {
                  id: 4513,
                  tab_id: 161,
                  name: "aparat-url",
                  translation: "https://www.aparat.com/Qzparadise.ir",
                },
                {
                  id: 4520,
                  tab_id: 161,
                  name: "pinterest-url",
                  translation: "https://www.pinterest.com/metarangiran/",
                },
                {
                  id: 4527,
                  tab_id: 161,
                  name: "virgool-url",
                  translation: "https://virgool.io/@metarang.iran",
                },
                {
                  id: 4534,
                  tab_id: 161,
                  name: "video-url",
                  translation: "https://video.irpsc.com",
                },
                {
                  id: 4541,
                  tab_id: 161,
                  name: "faq-url",
                  translation: "https://faq.irpsc.com",
                },
                {
                  id: 4548,
                  tab_id: 161,
                  name: "shop-url",
                  translation: "https://shop.irpsc.com",
                },
                {
                  id: 4555,
                  tab_id: 161,
                  name: "supply-url",
                  translation: "https://supply.irpsc.com",
                },
                {
                  id: 4562,
                  tab_id: 161,
                  name: "crm-url",
                  translation: "https://crm.irpsc.com",
                },
                {
                  id: 4569,
                  tab_id: 161,
                  name: "target-url",
                  translation: "https://target.irpsc.com",
                },
                {
                  id: 4576,
                  tab_id: 161,
                  name: "animal-url",
                  translation: "https://animal.irpsc.com",
                },
                {
                  id: 4583,
                  tab_id: 161,
                  name: "meta-url",
                  translation: "https://meta.irpsc.com",
                },
                {
                  id: 4590,
                  tab_id: 161,
                  name: "uni-url",
                  translation: "https://uni.irpsc.com",
                },
                {
                  id: 4597,
                  tab_id: 161,
                  name: "knowledgebase-url",
                  translation: "https://crm.irpsc.com/knowledgebase",
                },
                {
                  id: 4604,
                  tab_id: 161,
                  name: "sale-url",
                  translation: "https://sale.irpsc.com",
                },
                {
                  id: 4611,
                  tab_id: 161,
                  name: "nft-url",
                  translation: "https://nft.irpsc.com",
                },
                {
                  id: 4618,
                  tab_id: 161,
                  name: "rgb-url",
                  translation: "https://rgb.irpsc.com",
                },
                {
                  id: 4709,
                  tab_id: 161,
                  name: "linkedin-url",
                  translation:
                    "https://ir.linkedin.com/in/\u062d\u0633\u06cc\u0646-\u0642\u062f\u06cc\u0631\u06cc-89161a189",
                },
                {
                  id: 4955,
                  tab_id: 161,
                  name: "hm",
                  translation: "HM",
                },
                {
                  id: 4962,
                  tab_id: 161,
                  name: "online store hm",
                  translation: "Online Store HM",
                },
                {
                  id: 4969,
                  tab_id: 161,
                  name: "national map",
                  translation: "National Map",
                },
                {
                  id: 4976,
                  tab_id: 161,
                  name: "national media",
                  translation: "National media",
                },
                {
                  id: 4983,
                  tab_id: 161,
                  name: "electronic symbol",
                  translation: "Electronic symbol",
                },
                {
                  id: 4989,
                  tab_id: 161,
                  name: "enamad",
                  translation: "Enamad",
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
                {
                  id: 3953,
                  tab_id: 311,
                  name: "citizenship profile",
                  translation: "Citizenship profile",
                },
              ],
            },
            {
              id: 318,
              modal_id: 117,
              name: "before-login",
              fields: [
                {
                  id: 3897,
                  tab_id: 318,
                  name: "complete list",
                  translation: "complete list",
                },
                {
                  id: 3904,
                  tab_id: 318,
                  name: "people online",
                  translation: "People online",
                },
                {
                  id: 3911,
                  tab_id: 318,
                  name: "entrance fee",
                  translation: "entrance fee",
                },
                {
                  id: 4002,
                  tab_id: 318,
                  name: "complete list",
                  translation: "complete list",
                },
                {
                  id: 4066,
                  tab_id: 318,
                  name: "home",
                  translation: "Home",
                },
                {
                  id: 4073,
                  tab_id: 318,
                  name: "news",
                  translation: "News",
                },
                {
                  id: 4080,
                  tab_id: 318,
                  name: "metaverse rang",
                  translation: "METAVETSE RANG",
                },
                {
                  id: 4087,
                  tab_id: 318,
                  name: "metargb",
                  translation: "META RGB",
                },
                {
                  id: 4094,
                  tab_id: 318,
                  name: "articles",
                  translation: "Articles",
                },
                {
                  id: 4101,
                  tab_id: 318,
                  name: "trainings",
                  translation: "Trainings",
                },
                {
                  id: 4108,
                  tab_id: 318,
                  name: "about",
                  translation: "About",
                },
                {
                  id: 4115,
                  tab_id: 318,
                  name: "contact",
                  translation: "Contact",
                },
                {
                  id: 4122,
                  tab_id: 318,
                  name: "version",
                  translation: "Version",
                },
                {
                  id: 4129,
                  tab_id: 318,
                  name: "calendar",
                  translation: "Calendar",
                },
                {
                  id: 4136,
                  tab_id: 318,
                  name: "citizens",
                  translation: "Citizens",
                },
                {
                  id: 4143,
                  tab_id: 318,
                  name: "overview",
                  translation: "Overview",
                },
                {
                  id: 4157,
                  tab_id: 318,
                  name: "login",
                  translation: "Login",
                },
                {
                  id: 4164,
                  tab_id: 318,
                  name: "light",
                  translation: "Light",
                },
                {
                  id: 4171,
                  tab_id: 318,
                  name: "dark",
                  translation: "Dark",
                },
                {
                  id: 4178,
                  tab_id: 318,
                  name: "citizen profile page",
                  translation: "Citizen profile page",
                },
                {
                  id: 4185,
                  tab_id: 318,
                  name: "enter the metaverse",
                  translation: "Enter the Metaverse",
                },
                {
                  id: 4192,
                  tab_id: 318,
                  name: "exit",
                  translation: "Exit",
                },
                {
                  id: 4423,
                  tab_id: 318,
                  name: "competitions",
                  translation: "Competitions",
                },
                {
                  id: 6081,
                  tab_id: 318,
                  name: "language",
                  translation: "Language",
                },
              ],
            },
          ],
        },
        {
          name: "property-information",
          tabs: [
            {
              id: 332,
              modal_id: 124,
              name: "specification",
              fields: [
                {
                  id: 5066,
                  tab_id: 332,
                  name: "property information",
                  translation: "Property information",
                },
                {
                  id: 5073,
                  tab_id: 332,
                  name: "property id",
                  translation: "Property ID",
                },
                {
                  id: 5080,
                  tab_id: 332,
                  name: "property owner",
                  translation: "Property Owner",
                },
                {
                  id: 5087,
                  tab_id: 332,
                  name: "condition",
                  translation: "Condition",
                },
                {
                  id: 5094,
                  tab_id: 332,
                  name: "square meter area",
                  translation: "Size | Square meters",
                },
                {
                  id: 5101,
                  tab_id: 332,
                  name: "density | floor",
                  translation: "Density | Floor",
                },
                {
                  id: 5108,
                  tab_id: 332,
                  name: "monthly profit",
                  translation: "Monthly Profit",
                },
                {
                  id: 5115,
                  tab_id: 332,
                  name: "build a package",
                  translation: "Build a package",
                },
                {
                  id: 5122,
                  tab_id: 332,
                  name: "building permits",
                  translation: "Building Permits",
                },
                {
                  id: 5129,
                  tab_id: 332,
                  name: "address",
                  translation: "Address",
                },
                {
                  id: 5136,
                  tab_id: 332,
                  name: "pricing",
                  translation: "Pricing",
                },
                {
                  id: 5143,
                  tab_id: 332,
                  name: "buy",
                  translation: "Buy",
                },
                {
                  id: 5150,
                  tab_id: 332,
                  name: "entering the property",
                  translation: "Entering the property",
                },
                {
                  id: 5157,
                  tab_id: 332,
                  name: "construction of the building",
                  translation: "Construction of the building",
                },
                {
                  id: 5164,
                  tab_id: 332,
                  name: "physical information",
                  translation: "Physical information",
                },
                {
                  id: 5171,
                  tab_id: 332,
                  name: "participation in construction",
                  translation: "Participation in construction",
                },
                {
                  id: 5270,
                  tab_id: 332,
                  name: "history",
                  translation: "History",
                },
              ],
            },
            {
              id: 339,
              modal_id: 124,
              name: "pricing",
              fields: [],
            },
            {
              id: 346,
              modal_id: 124,
              name: "buy",
              fields: [],
            },
            {
              id: 353,
              modal_id: 124,
              name: "entering-the-property",
              fields: [],
            },
            {
              id: 360,
              modal_id: 124,
              name: "construction-of-the-building",
              fields: [
                {
                  id: 5178,
                  tab_id: 360,
                  name: "general default",
                  translation: "General Default",
                },
                {
                  id: 5185,
                  tab_id: 360,
                  name: "special order",
                  translation: "Special Order",
                },
                {
                  id: 5192,
                  tab_id: 360,
                  name: "activity line",
                  translation: "Activity line",
                },
                {
                  id: 5199,
                  tab_id: 360,
                  name: "collection name",
                  translation: "Collection name",
                },
                {
                  id: 5206,
                  tab_id: 360,
                  name: "physical address of the complex",
                  translation: "Physical address of the complex",
                },
                {
                  id: 5213,
                  tab_id: 360,
                  name: "the physical postal code of the collection",
                  translation: "The physical postal code of the collection",
                },
                {
                  id: 5220,
                  tab_id: 360,
                  name: "website address",
                  translation: "Website address",
                },
                {
                  id: 5227,
                  tab_id: 360,
                  name: "the purpose of the establishment",
                  translation: "The purpose of the establishment",
                },
                {
                  id: 5234,
                  tab_id: 360,
                  name: "when building a structure on the property, the possibility of pricing the property is closed and you will not be able to sell the property until the construction is finished.",
                  translation:
                    "When building a structure on the property, the possibility of pricing the property is closed and you will not be able to sell the property until the construction is finished.",
                },
                {
                  id: 5241,
                  tab_id: 360,
                  name: "default property construction",
                  translation: "Default property construction",
                },
                {
                  id: 5248,
                  tab_id: 360,
                  name: "view more items",
                  translation: "View more items",
                },
                {
                  id: 5255,
                  tab_id: 360,
                  name: "delete",
                  translation: "Delete",
                },
                {
                  id: 5262,
                  tab_id: 360,
                  name: "submission",
                  translation: "Submission",
                },
                {
                  id: 5277,
                  tab_id: 360,
                  name: "3d model display",
                  translation: "3D model display",
                },
                {
                  id: 5284,
                  tab_id: 360,
                  name: "details of the building",
                  translation: "Details of the building",
                },
                {
                  id: 5291,
                  tab_id: 360,
                  name: "the total area of \u200b\u200bthe building",
                  translation: "The total area of \u200b\u200bthe building",
                },
                {
                  id: 5298,
                  tab_id: 360,
                  name: "density number",
                  translation: "Density number",
                },
                {
                  id: 5305,
                  tab_id: 360,
                  name: "underground",
                  translation: "Underground",
                },
                {
                  id: 5312,
                  tab_id: 360,
                  name: "storage data volume",
                  translation: "Storage data volume",
                },
                {
                  id: 5319,
                  tab_id: 360,
                  name: "input capacity",
                  translation: "Input capacity",
                },
                {
                  id: 5326,
                  tab_id: 360,
                  name: "score received",
                  translation: "Score received",
                },
                {
                  id: 5333,
                  tab_id: 360,
                  name: "construction time",
                  translation: "Construction time",
                },
                {
                  id: 5340,
                  tab_id: 360,
                  name: "day",
                  translation: "Day",
                },
              ],
            },
            {
              id: 367,
              modal_id: 124,
              name: "physical-information",
              fields: [],
            },
            {
              id: 374,
              modal_id: 124,
              name: "participation-in-construction",
              fields: [],
            },
            {
              id: 381,
              modal_id: 124,
              name: "history",
              fields: [],
            },
          ],
        },
        {
          name: "levels",
          tabs: [
            {
              id: 388,
              modal_id: 131,
              name: "levels-menu",
              fields: [
                {
                  id: 5354,
                  tab_id: 388,
                  name: "home page",
                  translation: null,
                },
                {
                  id: 5361,
                  tab_id: 388,
                  name: "citizen",
                  translation: null,
                },
                {
                  id: 5368,
                  tab_id: 388,
                  name: "reporter",
                  translation: null,
                },
                {
                  id: 5375,
                  tab_id: 388,
                  name: "participant",
                  translation: null,
                },
                {
                  id: 5382,
                  tab_id: 388,
                  name: "developer",
                  translation: null,
                },
                {
                  id: 5389,
                  tab_id: 388,
                  name: "inspector",
                  translation: null,
                },
                {
                  id: 5396,
                  tab_id: 388,
                  name: "businessman",
                  translation: null,
                },
                {
                  id: 5403,
                  tab_id: 388,
                  name: "lawyer",
                  translation: null,
                },
                {
                  id: 5410,
                  tab_id: 388,
                  name: "city council",
                  translation: null,
                },
                {
                  id: 5417,
                  tab_id: 388,
                  name: "the mayor",
                  translation: null,
                },
                {
                  id: 5424,
                  tab_id: 388,
                  name: "governor",
                  translation: null,
                },
                {
                  id: 5431,
                  tab_id: 388,
                  name: "minister",
                  translation: null,
                },
                {
                  id: 5438,
                  tab_id: 388,
                  name: "judge",
                  translation: null,
                },
                {
                  id: 5445,
                  tab_id: 388,
                  name: "legislator",
                  translation: null,
                },
              ],
            },
            {
              id: 395,
              modal_id: 131,
              name: "levels-page",
              fields: [
                {
                  id: 5487,
                  tab_id: 395,
                  name: "level",
                  translation: "Level",
                },
                {
                  id: 5494,
                  tab_id: 395,
                  name: "one",
                  translation: "One",
                },
                {
                  id: 5501,
                  tab_id: 395,
                  name: "two",
                  translation: "Two",
                },
                {
                  id: 5508,
                  tab_id: 395,
                  name: "three",
                  translation: "Three",
                },
                {
                  id: 5515,
                  tab_id: 395,
                  name: "basic level information",
                  translation: "Basic level information",
                },
                {
                  id: 5522,
                  tab_id: 395,
                  name: "permissions and access",
                  translation: "Permissions and Access",
                },
                {
                  id: 5529,
                  tab_id: 395,
                  name: "surface gem",
                  translation: "Surface gem",
                },
                {
                  id: 5536,
                  tab_id: 395,
                  name: "accompanying gift",
                  translation: "Accompanying gift",
                },
                {
                  id: 5543,
                  tab_id: 395,
                  name: "reward for reaching the level",
                  translation: "Reward for reaching the level",
                },
                {
                  id: 5550,
                  tab_id: 395,
                  name: "list of recipients",
                  translation: "List of recipients",
                },
                {
                  id: 5557,
                  tab_id: 395,
                  name: "description",
                  translation: "Description",
                },
                {
                  id: 5564,
                  tab_id: 395,
                  name: "required points",
                  translation: "Required points :",
                },
                {
                  id: 5571,
                  tab_id: 395,
                  name: "surface model file size",
                  translation: "Surface model file size :",
                },
                {
                  id: 5578,
                  tab_id: 395,
                  name: "level rank",
                  translation: "Level rank :",
                },
                {
                  id: 5585,
                  tab_id: 395,
                  name: "the number of points used in the level model",
                  translation: "The number of points used in the level model :",
                },
                {
                  id: 5592,
                  tab_id: 395,
                  name: "number of sub-branches",
                  translation: "Number of sub-branches :",
                },
                {
                  id: 5599,
                  tab_id: 395,
                  name: "number of surface model lines",
                  translation: "Number of surface model lines :",
                },
                {
                  id: 5606,
                  tab_id: 395,
                  name: "level creation date",
                  translation: "Level creation date :",
                },
                {
                  id: 5613,
                  tab_id: 395,
                  name: "animation",
                  translation: "Animation :",
                },
                {
                  id: 5620,
                  tab_id: 395,
                  name: "persian font used",
                  translation: "Persian font used :",
                },
                {
                  id: 5627,
                  tab_id: 395,
                  name: "surface designer",
                  translation: "Surface designer :",
                },
                {
                  id: 5634,
                  tab_id: 395,
                  name: "english font used",
                  translation: "English font used :",
                },
                {
                  id: 5641,
                  tab_id: 395,
                  name: "3d model designer",
                  translation: "3D model designer :",
                },
                {
                  id: 5648,
                  tab_id: 395,
                  name: "colors used",
                  translation: "Colors used :",
                },
                {
                  id: 5655,
                  tab_id: 395,
                  name: "income",
                  translation: "Income",
                },
                {
                  id: 5662,
                  tab_id: 395,
                  name: "a list of earned income by titles and clients",
                  translation: "A list of earned income by titles and clients",
                },
                {
                  id: 5669,
                  tab_id: 395,
                  name: "orders",
                  translation: "Orders",
                },
                {
                  id: 5676,
                  tab_id: 395,
                  name: "a list of registered orders with the ability to be attracted by correspondent level holders",
                  translation:
                    "A list of registered orders with the ability to be attracted by correspondent level holders",
                },
                {
                  id: 5683,
                  tab_id: 395,
                  name: "recording citizens' criticisms and suggestions regarding performance and capabilities",
                  translation:
                    "Recording citizens' criticisms and suggestions regarding performance and capabilities",
                },
                {
                  id: 5690,
                  tab_id: 395,
                  name: "update",
                  translation: "Update",
                },
                {
                  id: 5697,
                  tab_id: 395,
                  name: "decisions made to improve reporter level performance",
                  translation:
                    "Decisions made to improve reporter level performance :",
                },
                {
                  id: 5704,
                  tab_id: 395,
                  name: "license to establish an alliance",
                  translation: "License to establish an alliance :",
                },
                {
                  id: 5711,
                  tab_id: 395,
                  name: "the ability to register public positions of the level",
                  translation:
                    "The ability to register public positions of the level :",
                },
                {
                  id: 5718,
                  tab_id: 395,
                  name: "to join the alliance",
                  translation: "To join the alliance :",
                },
                {
                  id: 5725,
                  tab_id: 395,
                  name: "access to the section for answering citizens' questions",
                  translation:
                    "Access to the section for answering citizens' questions :",
                },
                {
                  id: 5732,
                  tab_id: 395,
                  name: "inspection permit",
                  translation: "Inspection permit :",
                },
                {
                  id: 5739,
                  tab_id: 395,
                  name: "the ability to ask questions in the question challenge",
                  translation:
                    "The ability to ask questions in the question challenge :",
                },
                {
                  id: 5746,
                  tab_id: 395,
                  name: "gate establishment license",
                  translation: "Gate establishment license :",
                },
                {
                  id: 5753,
                  tab_id: 395,
                  name: "the ability to upload music to the waiting list",
                  translation:
                    "The ability to upload music to the waiting list :",
                },
                {
                  id: 5760,
                  tab_id: 395,
                  name: "attorney's license",
                  translation: "Attorney's license :",
                },
                {
                  id: 5767,
                  tab_id: 395,
                  name: "ability to rent a satisfaction unit",
                  translation: "Ability to rent a satisfaction unit :",
                },
                {
                  id: 5774,
                  tab_id: 395,
                  name: "permission to enter the city council",
                  translation: "Permission to enter the city council :",
                },
                {
                  id: 5781,
                  tab_id: 395,
                  name: "ability to enter judgment",
                  translation: "Ability to enter judgment :",
                },
                {
                  id: 5788,
                  tab_id: 395,
                  name: "license to establish a special residential property",
                  translation:
                    "License to establish a special residential property :",
                },
                {
                  id: 5795,
                  tab_id: 395,
                  name: "ability to upload free images",
                  translation: "Ability to upload free images :",
                },
                {
                  id: 5802,
                  tab_id: 395,
                  name: "property establishment permit on the surface",
                  translation: "Property establishment permit on the surface :",
                },
                {
                  id: 5809,
                  tab_id: 395,
                  name: "ability to delete free images",
                  translation: "Ability to delete free images :",
                },
                {
                  id: 5816,
                  tab_id: 395,
                  name: "ability to record special level positions",
                  translation: "Ability to record special level positions :",
                },
                {
                  id: 5851,
                  tab_id: 395,
                  name: "gem chip",
                  translation: "Gem chip :",
                },
                {
                  id: 5858,
                  tab_id: 395,
                  name: "gem color",
                  translation: "Gem color :",
                },
                {
                  id: 5865,
                  tab_id: 395,
                  name: "the volume of the 3d stone model",
                  translation: "The volume of the 3D stone model :",
                },
                {
                  id: 5872,
                  tab_id: 395,
                  name: "gem png file",
                  translation: "Gem PNG file :",
                },
                {
                  id: 5879,
                  tab_id: 395,
                  name: "the number of points of the 3d stone model",
                  translation: "The number of points of the 3D stone model :",
                },
                {
                  id: 5886,
                  tab_id: 395,
                  name: "gem fbx file",
                  translation: "Gem FBX file :",
                },
                {
                  id: 5893,
                  tab_id: 395,
                  name: "the number of lines of the 3d stone model",
                  translation: "The number of lines of the 3D stone model :",
                },
                {
                  id: 5900,
                  tab_id: 395,
                  name: "central encryption",
                  translation: "Central encryption :",
                },
                {
                  id: 5907,
                  tab_id: 395,
                  name: "animation",
                  translation: "Animation :",
                },
                {
                  id: 5914,
                  tab_id: 395,
                  name: "gem designer",
                  translation: "Gem designer :",
                },
                {
                  id: 5921,
                  tab_id: 395,
                  name: "features of mobile gift",
                  translation: "Features of mobile gift",
                },
                {
                  id: 5928,
                  tab_id: 395,
                  name: "number of monthly capacity",
                  translation: "Number of monthly capacity :",
                },
                {
                  id: 5935,
                  tab_id: 395,
                  name: "ability to sell capacity",
                  translation: "Ability to sell capacity :",
                },
                {
                  id: 5942,
                  tab_id: 395,
                  name: "the volume of the 3d model of the gift",
                  translation: "The volume of the 3d model of the gift :",
                },
                {
                  id: 5949,
                  tab_id: 395,
                  name: "ability to sell bundled gifts",
                  translation: "Ability to sell bundled gifts :",
                },
                {
                  id: 5956,
                  tab_id: 395,
                  name: "the number of points of the accompanying gift model",
                  translation:
                    "The number of points of the accompanying gift model :",
                },
                {
                  id: 5963,
                  tab_id: 395,
                  name: "ability to rent accompanying gift",
                  translation: "Ability to rent accompanying gift :",
                },
                {
                  id: 5970,
                  tab_id: 395,
                  name: "the number of lines of the accompanying gift model",
                  translation:
                    "The number of lines of the accompanying gift model :",
                },
                {
                  id: 5977,
                  tab_id: 395,
                  name: "access link to mobile gift sellers",
                  translation: "Access link to mobile gift sellers :",
                },
                {
                  id: 5984,
                  tab_id: 395,
                  name: "gift designer",
                  translation: "Gift designer :",
                },
                {
                  id: 5991,
                  tab_id: 395,
                  name: "ability to store capacity",
                  translation: "Ability to store capacity :",
                },
                {
                  id: 5998,
                  tab_id: 395,
                  name: "gift png file",
                  translation: "Gift PNG file :",
                },
                {
                  id: 6005,
                  tab_id: 395,
                  name: "gift fbx file",
                  translation: "Gift FBX file :",
                },
                {
                  id: 6012,
                  tab_id: 395,
                  name: "get red color",
                  translation: "Get red color :",
                },
                {
                  id: 6019,
                  tab_id: 395,
                  name: "get blue color",
                  translation: "Get blue color :",
                },
                {
                  id: 6026,
                  tab_id: 395,
                  name: "satisfaction unit",
                  translation: "Satisfaction unit :",
                },
                {
                  id: 6033,
                  tab_id: 395,
                  name: "receive yellow color",
                  translation: "Receive yellow color :",
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
      version: 55,
      file_url: "https://rgb.irpsc.com/lang/fa.json",
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
                    "\u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 \u0648\u0631\u0648\u062f",
                },
                {
                  id: 3471,
                  tab_id: 4,
                  name: "visit-the",
                  translation: "\u0628\u0627",
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
                    "\u0634\u0645\u0627 \u0645\u0648\u0627\u0641\u0642\u062a \u0645\u06cc\u06a9\u0646\u06cc\u062f.",
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
            {
              id: 326,
              modal_id: 6,
              name: "forget-password",
              fields: [
                {
                  id: 4724,
                  tab_id: 326,
                  name: "forgot your password",
                  translation:
                    "\u0641\u0631\u0627\u0645\u0648\u0634\u06cc \u06af\u0630\u0631\u0648\u0627\u0698\u0647",
                },
                {
                  id: 4731,
                  tab_id: 326,
                  name: "forgot password",
                  translation:
                    "\u06af\u0630\u0631\u0648\u0627\u0698\u0647 \u062e\u0648\u062f \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f\u061f",
                },
                {
                  id: 4738,
                  tab_id: 326,
                  name: "to retrieve it, please enter your email address in the box below",
                  translation:
                    "\u0628\u0631\u0627\u06cc \u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0622\u0646, \u0644\u0637\u0641\u0627 \u0622\u062f\u0631\u0633 \u0627\u06cc\u0645\u06cc\u0644 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u06a9\u0627\u062f\u0631 \u0632\u06cc\u0631 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f.",
                },
                {
                  id: 4745,
                  tab_id: 326,
                  name: "example@example.com",
                  translation: "Example@Example.com",
                },
                {
                  id: 4752,
                  tab_id: 326,
                  name: "send",
                  translation: "\u0627\u0631\u0633\u0627\u0644",
                },
                {
                  id: 4759,
                  tab_id: 326,
                  name: "return to the login page",
                  translation:
                    "\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0635\u0641\u062d\u0647 \u0648\u0631\u0648\u062f",
                },
                {
                  id: 4766,
                  tab_id: 326,
                  name: "the entered email is not correct",
                  translation:
                    "\u0627\u06cc\u0645\u06cc\u0644 \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0635\u062d\u06cc\u062d \u0646\u0645\u06cc \u0628\u0627\u0634\u062f.",
                },
                {
                  id: 4773,
                  tab_id: 326,
                  name: "an email containing",
                  translation:
                    "\u06cc\u06a9 \u0627\u06cc\u0645\u06cc\u0644 \u062d\u0627\u0648\u06cc \u0644\u06cc\u0646\u06a9 \u062a\u063a\u06cc\u06cc\u0631 \u06af\u0630\u0631\u0648\u0627\u0698\u0647 \u0627\u0631\u0633\u0627\u0644 \u06af\u0631\u062f\u06cc\u062f .",
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
                {
                  id: 4934,
                  tab_id: 7,
                  name: "website",
                  translation: "\u0648\u0628\u0633\u0627\u06cc\u062a",
                },
                {
                  id: 4948,
                  tab_id: 7,
                  name: "this section is required",
                  translation:
                    "\u0627\u06cc\u0646 \u0628\u062e\u0634 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a",
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
                  name: "search for the training you need",
                  translation:
                    "\u0622\u0645\u0648\u0632\u0634 \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u062e\u0648\u062f \u0631\u0627 \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 2135,
                  tab_id: 138,
                  name: "top trainers",
                  translation:
                    "\u0645\u0631\u0628\u06cc\u0627\u0646 \u0628\u0631\u062a\u0631",
                },
                {
                  id: 2139,
                  tab_id: 138,
                  name: "view other trainers",
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
                  name: "view all",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u0647\u0645\u0647",
                },
                {
                  id: 4198,
                  tab_id: 138,
                  name: "cv teacher",
                  translation:
                    "\u0631\u0632\u0648\u0645\u0647 \u0645\u062f\u0631\u0633",
                },
                {
                  id: 4205,
                  tab_id: 138,
                  name: "categories",
                  translation:
                    "\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0647\u0627",
                },
                {
                  id: 4233,
                  tab_id: 138,
                  name: "view more",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u0628\u06cc\u0634\u062a\u0631",
                },
                {
                  id: 4240,
                  tab_id: 138,
                  name: "search",
                  translation: "\u062c\u0633\u062a\u062c\u0648",
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
              fields: [
                {
                  id: 4997,
                  tab_id: 150,
                  name: "list of subcategories related to",
                  translation:
                    "\u0644\u06cc\u0633\u062a \u0632\u06cc\u0631 \u062f\u0633\u062a\u0647 \u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637 \u0628\u0627",
                },
                {
                  id: 5004,
                  tab_id: 150,
                  name: "description",
                  translation: "\u062a\u0648\u0636\u06cc\u062d\u0627\u062a",
                },
                {
                  id: 5011,
                  tab_id: 150,
                  name: "search for the training you need",
                  translation:
                    "\u0622\u0645\u0648\u0632\u0634 \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u062e\u0648\u062f \u0631\u0627 \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f",
                },
                {
                  id: 5018,
                  tab_id: 150,
                  name: "all categories of metaverse training",
                  translation:
                    "\u062a\u0645\u0627\u0645\u06cc \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0647\u0627\u06cc \u0622\u0645\u0648\u0632\u0634 \u0645\u062a\u0627\u0648\u0631\u0633",
                },
                {
                  id: 5038,
                  tab_id: 150,
                  name: "metaverse category",
                  translation:
                    "\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0645\u062a\u0627\u0648\u0631\u0633",
                },
                {
                  id: 5045,
                  tab_id: 150,
                  name: "metaverse educational categories",
                  translation:
                    "\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0647\u0627\u06cc \u0622\u0645\u0648\u0632\u0634\u06cc \u0645\u062a\u0627\u0648\u0631\u0633",
                },
                {
                  id: 5052,
                  tab_id: 150,
                  name: "training related to",
                  translation:
                    "\u0622\u0645\u0648\u0632\u0634 \u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637 \u0628\u0627",
                },
                {
                  id: 5347,
                  tab_id: 150,
                  name: "metaverse specialized training that is available in categories",
                  translation:
                    "\u0622\u0645\u0648\u0632\u0634 \u062a\u062e\u0635\u0635\u06cc \u0645\u062a\u0627\u0648\u0631\u0633 \u06a9\u0647 \u062f\u0631 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0645\u0648\u062c\u0648\u062f \u0627\u0633\u062a",
                },
                {
                  id: 6039,
                  tab_id: 150,
                  name: "training categories",
                  translation:
                    "\u062f\u0633\u062a\u0647 \u0647\u0627\u06cc \u0622\u0645\u0648\u0632\u0634",
                },
              ],
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
                    "\u0627\u0631\u0633\u0627\u0644 \u06af\u0632\u0627\u0631\u0634",
                },
                {
                  id: 2239,
                  tab_id: 166,
                  name: "view all",
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
                {
                  id: 6088,
                  tab_id: 166,
                  name: "share",
                  translation: "\u0627\u0634\u062a\u0631\u0627\u06a9",
                },
                {
                  id: 6095,
                  tab_id: 166,
                  name: "citizen id",
                  translation:
                    "\u0634\u0646\u0627\u0633\u0647 \u0634\u0647\u0631\u0648\u0646\u062f",
                },
                {
                  id: 6102,
                  tab_id: 166,
                  name: "your point of view",
                  translation:
                    "\u062f\u06cc\u062f\u06af\u0627\u0647 \u0634\u0645\u0627",
                },
                {
                  id: 6109,
                  tab_id: 166,
                  name: "response",
                  translation: "\u067e\u0627\u0633\u062e",
                },
                {
                  id: 6116,
                  tab_id: 166,
                  name: "video sharing",
                  translation:
                    "\u0627\u0634\u062a\u0631\u0627\u06a9 \u06af\u0630\u0627\u0631\u06cc \u0648\u06cc\u062f\u06cc\u0648",
                },
                {
                  id: 6123,
                  tab_id: 166,
                  name: "edit",
                  translation: "\u0648\u06cc\u0631\u0627\u06cc\u0634",
                },
                {
                  id: 6130,
                  tab_id: 166,
                  name: "delete",
                  translation: "\u062d\u0630\u0641",
                },
                {
                  id: 6137,
                  tab_id: 166,
                  name: "your report has been registered and will be reviewed as soon",
                  translation:
                    "\u06af\u0632\u0627\u0631\u0634 \u0634\u0645\u0627 \u062b\u0628\u062a \u06af\u0631\u062f\u06cc\u062f \u0648 \u062f\u0631 \u0627\u0648\u0644\u06cc\u0646 \u0641\u0631\u0635\u062a \u0628\u0631\u0631\u0633\u06cc \u062e\u0648\u0627\u0647\u062f \u0634\u062f.",
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
                  name: "get red color",
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
                    "\u0634\u0646\u0627\u0633\u0647 \u0634\u0647\u0631\u0648\u0646\u062f\u06cc (\u0631\u0641\u0631\u0627\u0644)",
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
                  name: "trainings",
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
                {
                  id: 4787,
                  tab_id: 66,
                  name: "share",
                  translation: "\u0627\u0634\u062a\u0631\u0627\u06a9",
                },
                {
                  id: 4794,
                  tab_id: 66,
                  name: "copy",
                  translation: "\u06a9\u067e\u06cc",
                },
                {
                  id: 4801,
                  tab_id: 66,
                  name: "citizen sharing",
                  translation:
                    "\u0627\u0634\u062a\u0631\u0627\u06a9 \u06af\u0630\u0627\u0631\u06cc \u0634\u0647\u0631\u0648\u0646\u062f",
                },
                {
                  id: 4808,
                  tab_id: 66,
                  name: "aliens",
                  translation:
                    "\u0645\u0648\u062c\u0648\u062f\u0627\u062a \u0641\u0636\u0627\u06cc\u06cc",
                },
                {
                  id: 4815,
                  tab_id: 66,
                  name: "animals nature",
                  translation:
                    "\u062d\u06cc\u0648\u0627\u0646\u0627\u062a \u0648 \u0637\u0628\u06cc\u0639\u062a",
                },
                {
                  id: 4822,
                  tab_id: 66,
                  name: "art",
                  translation: "\u0647\u0646\u0631",
                },
                {
                  id: 4829,
                  tab_id: 66,
                  name: "food cooking",
                  translation:
                    "\u063a\u0630\u0627 \u0648 \u0622\u0634\u067e\u0632\u06cc",
                },
                {
                  id: 4836,
                  tab_id: 66,
                  name: "history",
                  translation:
                    "\u062a\u0627\u0631\u06cc\u062e \u0648 \u062a\u0645\u062f\u0646",
                },
                {
                  id: 4843,
                  tab_id: 66,
                  name: "language culture",
                  translation:
                    "\u0632\u0628\u0627\u0646 \u0648 \u0641\u0631\u0647\u0646\u06af",
                },
                {
                  id: 4850,
                  tab_id: 66,
                  name: "manufacturing",
                  translation:
                    "\u0633\u0627\u062e\u062a \u0648 \u062a\u0648\u0644\u06cc\u062f",
                },
                {
                  id: 4857,
                  tab_id: 66,
                  name: "music",
                  translation:
                    "\u0633\u0627\u0632 \u0648 \u0645\u0648\u0633\u06cc\u0642\u06cc",
                },
                {
                  id: 4864,
                  tab_id: 66,
                  name: "philosophy",
                  translation: "\u0641\u0644\u0633\u0641\u0647",
                },
                {
                  id: 4871,
                  tab_id: 66,
                  name: "politics economy",
                  translation:
                    "\u0633\u06cc\u0627\u0633\u062a \u0648 \u0627\u0642\u062a\u0635\u0627\u062f",
                },
                {
                  id: 4878,
                  tab_id: 66,
                  name: "science technology",
                  translation:
                    "\u0639\u0644\u0648\u0645 \u0648 \u062a\u06a9\u0646\u0648\u0644\u0648\u0698\u06cc",
                },
                {
                  id: 4885,
                  tab_id: 66,
                  name: "space time",
                  translation:
                    "\u0641\u0636\u0627 \u0648 \u0632\u0645\u0627\u0646",
                },
                {
                  id: 4899,
                  tab_id: 66,
                  name: "travel leisure",
                  translation:
                    "\u0633\u0641\u0631 \u0648 \u062a\u0641\u0631\u06cc\u062d",
                },
                {
                  id: 4905,
                  tab_id: 66,
                  name: "sport health",
                  translation:
                    "\u0648\u0631\u0632\u0634 \u0648 \u0633\u0644\u0627\u0645\u062a",
                },
                {
                  id: 4940,
                  tab_id: 66,
                  name: "-participant",
                  translation:
                    "\u0645\u0634\u0627\u0631\u06a9\u062a \u06a9\u0646\u0646\u062f\u0647",
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
                  translation: "\u0645\u062c\u0648\u0632\u0627\u062a",
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
                  id: 4465,
                  tab_id: 134,
                  name: "home page",
                  translation:
                    "\u0635\u0641\u062d\u0647 \u0646\u062e\u0633\u062a",
                },
                {
                  id: 4626,
                  tab_id: 134,
                  name: "metaverse rang",
                  translation:
                    "\u0645\u062a\u0627\u0648\u0631\u0633 \u0631\u0646\u06af",
                },
                {
                  id: 4633,
                  tab_id: 134,
                  name: "light",
                  translation: "\u0631\u0648\u0634\u0646",
                },
                {
                  id: 4640,
                  tab_id: 134,
                  name: "dark",
                  translation: "\u062a\u0627\u0631\u06cc\u06a9",
                },
                {
                  id: 4780,
                  tab_id: 134,
                  name: "my profile page",
                  translation:
                    "\u0645\u0634\u062e\u0635\u0627\u062a \u0634\u0647\u0631\u0648\u0646\u062f\u06cc \u0645\u0646",
                },
                {
                  id: 4913,
                  tab_id: 134,
                  name: "are you sure you want to exit",
                  translation:
                    " \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f \u0645\u06cc\u062e\u0648\u0627\u0647\u06cc\u062f \u062e\u0627\u0631\u062c \u0634\u0648\u06cc\u062f \u061f",
                },
                {
                  id: 4920,
                  tab_id: 134,
                  name: "yes",
                  translation: "\u0628\u0644\u0647",
                },
                {
                  id: 4927,
                  tab_id: 134,
                  name: "no",
                  translation: "\u0646\u0647",
                },
                {
                  id: 5025,
                  tab_id: 134,
                  name: "categories",
                  translation:
                    "\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0647\u0627",
                },
                {
                  id: 5032,
                  tab_id: 134,
                  name: "metaverse trainers",
                  translation:
                    "\u0645\u0631\u0628\u06cc\u0627\u0646 \u0645\u062a\u0627\u0648\u0631\u0633",
                },
                {
                  id: 6046,
                  tab_id: 134,
                  name: "language",
                  translation: "\u0632\u0628\u0627\u0646",
                },
                {
                  id: 6074,
                  tab_id: 134,
                  name: "login",
                  translation: "\u0648\u0631\u0648\u062f",
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
          name: "footer-menu",
          tabs: [
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
                {
                  id: 4247,
                  tab_id: 162,
                  name: "national metaverse",
                  translation:
                    "\u0645\u062a\u0627\u0648\u0631\u0633 \u0645\u0644\u06cc",
                },
                {
                  id: 4254,
                  tab_id: 162,
                  name: "global leadership in a parallel world",
                  translation:
                    "\u0631\u0647\u0628\u0631\u06cc \u062c\u0647\u0627\u0646\u06cc \u062f\u0631 \u062f\u0646\u06cc\u0627\u06cc \u0645\u0648\u0627\u0632\u06cc",
                },
                {
                  id: 4261,
                  tab_id: 162,
                  name: "footer description1",
                  translation:
                    "\u0645\u062a\u0627\u0648\u0631\u0633 \u0645\u0644\u06cc\u060c \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647 \u0628\u0632\u0631\u06af \u0648 \u067e\u06cc\u0634\u0631\u0648 \u062f\u0631 \u062f\u0646\u06cc\u0627\u06cc \u0645\u0648\u0627\u0632\u06cc \u0645\u062a\u0627\u0648\u0631\u0633 \u0631\u0646\u06af \u0627\u0633\u062a \u06a9\u0647 \u062a\u0648\u0633\u0637 \u0634\u0631\u06a9\u062a \u062a\u0639\u0627\u0648\u0646\u06cc \u0632\u0646\u062c\u06cc\u0631\u0647 \u062a\u0627\u0645\u06cc\u0646 \u0628\u0647\u0634\u062a \u0628\u0647 \u0627\u062c\u0631\u0627 \u062f\u0631\u0622\u0645\u062f\u0647 \u0627\u0633\u062a. \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647\u060c \u0628\u0647 \u0648\u0627\u0642\u0639\u06cc\u062a \u062c\u062f\u06cc\u062f\u06cc \u062f\u0631 \u062f\u0646\u06cc\u0627\u06cc \u0645\u0648\u0627\u0632\u06cc \u0648 \u0645\u062c\u0627\u0632\u06cc \u062f\u0633\u062a \u06cc\u0627\u0641\u062a\u0647 \u0648 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a\u06cc \u0634\u06af\u0641\u062a\u200c\u0627\u0646\u06af\u06cc\u0632 \u0631\u0627 \u0628\u0647 \u0645\u0631\u062f\u0645\u0627\u0646 \u0633\u0631\u062a\u0627\u0633\u0631 \u062c\u0647\u0627\u0646 \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0627 \u062a\u062c\u0631\u0628\u0647\u200c\u0647\u0627\u06cc\u06cc \u0645\u0646\u062d\u0635\u0631 \u0628\u0647 \u0641\u0631\u062f \u0648 \u062c\u0630\u0627\u0628 \u0631\u0627 \u062a\u062c\u0631\u0628\u0647 \u0646\u0645\u0627\u06cc\u0646\u062f.",
                },
                {
                  id: 4268,
                  tab_id: 162,
                  name: "footer description2",
                  translation:
                    "\u062a\u0639\u0627\u0648\u0646\u06cc \u0632\u0646\u062c\u06cc\u0631\u0647 \u062a\u0627\u0645\u06cc\u0646 \u0628\u0647\u0634\u062a\u060c \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0646\u06cc \u0627\u0635\u0644\u06cc \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647\u060c \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062a\u06a9\u0646\u0648\u0644\u0648\u0698\u06cc\u200c\u0647\u0627\u06cc \u067e\u06cc\u0634\u0631\u0641\u062a\u0647 \u0648 \u0628\u0647\u0631\u0647\u200c\u06af\u06cc\u0631\u06cc \u0627\u0632 \u0645\u0641\u0647\u0648\u0645 \u0645\u062a\u0627\u0648\u0631\u0633\u060c \u0628\u0647 \u0627\u06cc\u062c\u0627\u062f \u06cc\u06a9 \u062c\u0648\u0627\u0645\u0639 \u0645\u062c\u0627\u0632\u06cc \u062c\u0647\u0627\u0646\u06cc \u0627\u0631\u062a\u0642\u0627 \u062f\u0627\u062f\u0647 \u0627\u0633\u062a. \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u0627\u0645\u06a9\u0627\u0646 \u0628\u0647\u0631\u0647 \u0648\u0631\u06cc \u0627\u0632 \u0641\u0646\u0627\u0648\u0631\u06ccIoT\u060c \u062a\u062c\u0631\u0628\u0647\u200c\u06cc \u0645\u062d\u06cc\u0637 \u0633\u0647 \u0628\u0639\u062f\u06cc \u0648\u0627\u0642\u0639\u06cc\u062a \u0645\u062c\u0627\u0632\u06cc\u060c \u0648 \u062a\u0639\u0627\u0645\u0644\u0627\u062a \u0628\u06cc\u200c\u067e\u0627\u06cc\u0627\u0646 \u0631\u0627 \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0645\u0631\u062f\u0645 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u062f.",
                },
                {
                  id: 4275,
                  tab_id: 162,
                  name: "join our networks",
                  translation:
                    "\u0628\u0647 \u0634\u0628\u06a9\u0647 \u0647\u0627\u06cc \u0645\u0627 \u0645\u0644\u062d\u0642 \u0634\u0648\u06cc\u062f.",
                },
                {
                  id: 4282,
                  tab_id: 162,
                  name: "facebook",
                  translation: "\u0641\u06cc\u0633\u0628\u0648\u06a9",
                },
                {
                  id: 4289,
                  tab_id: 162,
                  name: "feed",
                  translation: "\u0641\u06cc\u062f",
                },
                {
                  id: 4296,
                  tab_id: 162,
                  name: "instagram",
                  translation:
                    "\u0627\u06cc\u0646\u0633\u062a\u0627\u06af\u0631\u0627\u0645",
                },
                {
                  id: 4303,
                  tab_id: 162,
                  name: "linkedin",
                  translation: "\u0644\u06cc\u0646\u06a9\u062f\u06cc\u0646",
                },
                {
                  id: 4310,
                  tab_id: 162,
                  name: "pinterest",
                  translation: "\u067e\u06cc\u0646\u062a\u0631\u0633\u062a",
                },
                {
                  id: 4317,
                  tab_id: 162,
                  name: "whatsapp",
                  translation: "\u0648\u0627\u062a\u0633 \u0627\u067e",
                },
                {
                  id: 4324,
                  tab_id: 162,
                  name: "youtube",
                  translation: "\u06cc\u0648\u062a\u0648\u0628",
                },
                {
                  id: 4331,
                  tab_id: 162,
                  name: "rubika",
                  translation: "\u0631\u0628\u06cc\u06a9\u0627",
                },
                {
                  id: 4338,
                  tab_id: 162,
                  name: "telegram",
                  translation: "\u062a\u0644\u06af\u0631\u0627\u0645",
                },
                {
                  id: 4345,
                  tab_id: 162,
                  name: "virgool",
                  translation: "\u0648\u06cc\u0631\u06af\u0648\u0644",
                },
                {
                  id: 4352,
                  tab_id: 162,
                  name: "add",
                  translation:
                    "\u062a\u0628\u0644\u06cc\u063a\u0627\u062a \u0645\u0644\u06cc",
                },
                {
                  id: 4359,
                  tab_id: 162,
                  name: "aparat",
                  translation: "\u0622\u067e\u0627\u0631\u0627\u062a",
                },
                {
                  id: 4366,
                  tab_id: 162,
                  name: "dalfak",
                  translation: "\u062f\u0627\u0644\u0641\u06a9",
                },
                {
                  id: 4373,
                  tab_id: 162,
                  name: "discord",
                  translation: "\u062f\u06cc\u0633\u06a9\u0648\u0631\u062f",
                },
                {
                  id: 4380,
                  tab_id: 162,
                  name: "faq",
                  translation: "\u0627\u0646\u062c\u0645\u0646 \u062d\u0645",
                },
                {
                  id: 4387,
                  tab_id: 162,
                  name: "filo",
                  translation: "\u0641\u06cc\u0644\u0648",
                },
                {
                  id: 4394,
                  tab_id: 162,
                  name: "jabeh",
                  translation: "\u062c\u0639\u0628\u0647",
                },
                {
                  id: 4401,
                  tab_id: 162,
                  name: "medium",
                  translation: "\u0645\u062f\u06cc\u0648\u0645",
                },
                {
                  id: 4408,
                  tab_id: 162,
                  name: "mp4",
                  translation: "MP4",
                },
                {
                  id: 4415,
                  tab_id: 162,
                  name: "namasha",
                  translation: "\u0646\u0645\u0627\u0634\u0627",
                },
                {
                  id: 4430,
                  tab_id: 162,
                  name: "youtube-url",
                  translation: "https://www.youtube.com/@Irpsc",
                },
                {
                  id: 4437,
                  tab_id: 162,
                  name: "instagram-url",
                  translation: "https://www.instagram.com/rgb.irpsc/",
                },
                {
                  id: 4444,
                  tab_id: 162,
                  name: "ifilo-url",
                  translation: "https://ifilo.net/MetaRang.iran",
                },
                {
                  id: 4451,
                  tab_id: 162,
                  name: "mp4-url",
                  translation: "https://www.mp4.ir/meta.rang",
                },
                {
                  id: 4458,
                  tab_id: 162,
                  name: "dalfak-url",
                  translation: "https://www.dalfak.com/metarang",
                },
                {
                  id: 4472,
                  tab_id: 162,
                  name: "jabeh-url",
                  translation: "https://jabeh.com/c/1nk44b",
                },
                {
                  id: 4479,
                  tab_id: 162,
                  name: "namasha-url",
                  translation: "https://www.namasha.com/qzparadise",
                },
                {
                  id: 4486,
                  tab_id: 162,
                  name: "medium-url",
                  translation: "https://medium.com/@metarang.iran",
                },
                {
                  id: 4493,
                  tab_id: 162,
                  name: "rubika-url",
                  translation: "https://rubika.ir/metaverse_iran",
                },
                {
                  id: 4500,
                  tab_id: 162,
                  name: "faq-url",
                  translation: "https://faq.irpsc.com/",
                },
                {
                  id: 4507,
                  tab_id: 162,
                  name: "ad-url",
                  translation: "https://ad.irpsc.com/",
                },
                {
                  id: 4514,
                  tab_id: 162,
                  name: "aparat-url",
                  translation: "https://www.aparat.com/Qzparadise.ir",
                },
                {
                  id: 4521,
                  tab_id: 162,
                  name: "pinterest-url",
                  translation: "https://www.pinterest.com/metarangiran/",
                },
                {
                  id: 4528,
                  tab_id: 162,
                  name: "virgool-url",
                  translation: "https://virgool.io/@metarang.iran",
                },
                {
                  id: 4535,
                  tab_id: 162,
                  name: "video-url",
                  translation: "https://video.irpsc.com",
                },
                {
                  id: 4542,
                  tab_id: 162,
                  name: "faq-url",
                  translation: "https://faq.irpsc.com",
                },
                {
                  id: 4549,
                  tab_id: 162,
                  name: "shop-url",
                  translation: "https://shop.irpsc.com",
                },
                {
                  id: 4556,
                  tab_id: 162,
                  name: "supply-url",
                  translation: "https://supply.irpsc.com",
                },
                {
                  id: 4563,
                  tab_id: 162,
                  name: "crm-url",
                  translation: "https://crm.irpsc.com",
                },
                {
                  id: 4570,
                  tab_id: 162,
                  name: "target-url",
                  translation: "https://target.irpsc.com",
                },
                {
                  id: 4577,
                  tab_id: 162,
                  name: "animal-url",
                  translation: "https://animal.irpsc.com",
                },
                {
                  id: 4584,
                  tab_id: 162,
                  name: "meta-url",
                  translation: "https://meta.irpsc.com",
                },
                {
                  id: 4591,
                  tab_id: 162,
                  name: "uni-url",
                  translation: "https://uni.irpsc.com",
                },
                {
                  id: 4598,
                  tab_id: 162,
                  name: "knowledgebase-url",
                  translation: "https://crm.irpsc.com/knowledgebase",
                },
                {
                  id: 4605,
                  tab_id: 162,
                  name: "sale-url",
                  translation: "https://sale.irpsc.com",
                },
                {
                  id: 4612,
                  tab_id: 162,
                  name: "nft-url",
                  translation: "https://nft.irpsc.com",
                },
                {
                  id: 4619,
                  tab_id: 162,
                  name: "rgb-url",
                  translation: "https://rgb.irpsc.com",
                },
                {
                  id: 4710,
                  tab_id: 162,
                  name: "linkedin-url",
                  translation:
                    "https://ir.linkedin.com/in/\u062d\u0633\u06cc\u0646-\u0642\u062f\u06cc\u0631\u06cc-89161a189",
                },
                {
                  id: 4954,
                  tab_id: 162,
                  name: "hm",
                  translation: "\u062d\u0645",
                },
                {
                  id: 4961,
                  tab_id: 162,
                  name: "online store hm",
                  translation:
                    "\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0645\u062c\u0627\u0632\u06cc \u062d\u0645",
                },
                {
                  id: 4968,
                  tab_id: 162,
                  name: "national map",
                  translation: "\u0646\u0642\u0634\u0647 \u0645\u0644\u06cc",
                },
                {
                  id: 4975,
                  tab_id: 162,
                  name: "national media",
                  translation:
                    "\u0631\u0633\u0627\u0646\u0647 \u0645\u0644\u06cc",
                },
                {
                  id: 4982,
                  tab_id: 162,
                  name: "electronic symbol",
                  translation:
                    "\u0646\u0645\u0627\u062f \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9",
                },
                {
                  id: 4990,
                  tab_id: 162,
                  name: "enamad",
                  translation:
                    "\u0646\u0645\u0627\u062f \u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9",
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
                {
                  id: 3954,
                  tab_id: 312,
                  name: "citizenship profile",
                  translation:
                    "\u0645\u0634\u062e\u0635\u0627\u062a \u0634\u0647\u0631\u0648\u0646\u062f\u06cc",
                },
              ],
            },
            {
              id: 319,
              modal_id: 118,
              name: "before-login",
              fields: [
                {
                  id: 3898,
                  tab_id: 319,
                  name: "complete list",
                  translation:
                    "\u0644\u06cc\u0633\u062a \u06a9\u0627\u0645\u0644",
                },
                {
                  id: 3905,
                  tab_id: 319,
                  name: "people online",
                  translation:
                    "\u0646\u0641\u0631\u0627\u062a \u0622\u0646\u0644\u0627\u06cc\u0646",
                },
                {
                  id: 3912,
                  tab_id: 319,
                  name: "entrance fee",
                  translation:
                    "\u0647\u0632\u06cc\u0646\u0647 \u0648\u0631\u0648\u062f\u06cc",
                },
                {
                  id: 4003,
                  tab_id: 319,
                  name: "complete list",
                  translation:
                    "\u0644\u06cc\u0633\u062a \u06a9\u0627\u0645\u0644",
                },
                {
                  id: 4065,
                  tab_id: 319,
                  name: "home",
                  translation:
                    "\u0635\u0641\u062d\u0647 \u0646\u062e\u0633\u062a",
                },
                {
                  id: 4072,
                  tab_id: 319,
                  name: "news",
                  translation: "\u0627\u062e\u0628\u0627\u0631",
                },
                {
                  id: 4079,
                  tab_id: 319,
                  name: "metaverse rang",
                  translation:
                    "\u0645\u062a\u0627\u0648\u0631\u0633 \u0631\u0646\u06af",
                },
                {
                  id: 4086,
                  tab_id: 319,
                  name: "metargb",
                  translation: "\u0645\u062a\u0627\u0631\u0646\u06af",
                },
                {
                  id: 4093,
                  tab_id: 319,
                  name: "articles",
                  translation: "\u0645\u0642\u0627\u0644\u0627\u062a",
                },
                {
                  id: 4100,
                  tab_id: 319,
                  name: "trainings",
                  translation: "\u0622\u0645\u0648\u0632\u0634",
                },
                {
                  id: 4107,
                  tab_id: 319,
                  name: "about",
                  translation:
                    "\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627",
                },
                {
                  id: 4114,
                  tab_id: 319,
                  name: "contact",
                  translation:
                    "\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627",
                },
                {
                  id: 4121,
                  tab_id: 319,
                  name: "version",
                  translation: "\u0648\u0631\u0698\u0646",
                },
                {
                  id: 4128,
                  tab_id: 319,
                  name: "calendar",
                  translation: "\u062a\u0642\u0648\u06cc\u0645",
                },
                {
                  id: 4135,
                  tab_id: 319,
                  name: "citizens",
                  translation:
                    "\u0634\u0647\u0631\u0648\u0646\u062f\u0627\u0646",
                },
                {
                  id: 4142,
                  tab_id: 319,
                  name: "overview",
                  translation: "\u0646\u0645\u0627\u06cc \u06a9\u0644\u06cc",
                },
                {
                  id: 4156,
                  tab_id: 319,
                  name: "login",
                  translation: "\u0648\u0631\u0648\u062f",
                },
                {
                  id: 4163,
                  tab_id: 319,
                  name: "light",
                  translation: "\u0631\u0648\u0634\u0646",
                },
                {
                  id: 4170,
                  tab_id: 319,
                  name: "dark",
                  translation: "\u062e\u0627\u0645\u0648\u0634",
                },
                {
                  id: 4177,
                  tab_id: 319,
                  name: "citizen profile page",
                  translation:
                    "\u0635\u0641\u062d\u0647 \u0645\u0634\u062e\u0635\u0627\u062a \u0634\u0647\u0631\u0648\u0646\u062f",
                },
                {
                  id: 4184,
                  tab_id: 319,
                  name: "enter the metaverse",
                  translation:
                    "\u0648\u0631\u0648\u062f \u0628\u0647 \u0645\u062a\u0627\u0648\u0631\u0633",
                },
                {
                  id: 4191,
                  tab_id: 319,
                  name: "exit",
                  translation: "\u062e\u0631\u0648\u062c",
                },
                {
                  id: 4422,
                  tab_id: 319,
                  name: "competitions",
                  translation: "\u0645\u0633\u0627\u0628\u0642\u0627\u062a",
                },
                {
                  id: 6082,
                  tab_id: 319,
                  name: "language",
                  translation: "\u0632\u0628\u0627\u0646",
                },
              ],
            },
          ],
        },
        {
          name: "property-information",
          tabs: [
            {
              id: 333,
              modal_id: 125,
              name: "specification",
              fields: [
                {
                  id: 5067,
                  tab_id: 333,
                  name: "property information",
                  translation:
                    "\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0644\u06a9",
                },
                {
                  id: 5074,
                  tab_id: 333,
                  name: "property id",
                  translation:
                    "\u0634\u0646\u0627\u0633\u0647 \u0645\u0644\u06a9",
                },
                {
                  id: 5081,
                  tab_id: 333,
                  name: "property owner",
                  translation: "\u0635\u0627\u062d\u0628 \u0645\u0644\u06a9",
                },
                {
                  id: 5088,
                  tab_id: 333,
                  name: "condition",
                  translation: "\u0648\u0636\u0639\u06cc\u062a",
                },
                {
                  id: 5095,
                  tab_id: 333,
                  name: "square meter area",
                  translation:
                    "\u0645\u0633\u0627\u062d\u062a | \u0645\u062a\u0631 \u0645\u0631\u0628\u0639",
                },
                {
                  id: 5102,
                  tab_id: 333,
                  name: "density | floor",
                  translation:
                    "\u062a\u0631\u0627\u06a9\u0645 | \u0637\u0628\u0642\u0647",
                },
                {
                  id: 5109,
                  tab_id: 333,
                  name: "monthly profit",
                  translation:
                    "\u0633\u0648\u062f \u0645\u0627\u0647\u0627\u0646\u0647",
                },
                {
                  id: 5116,
                  tab_id: 333,
                  name: "build a package",
                  translation:
                    "\u067e\u06a9\u06cc\u062c \u0633\u0627\u062e\u062a",
                },
                {
                  id: 5123,
                  tab_id: 333,
                  name: "building permits",
                  translation:
                    "\u0645\u062c\u0648\u0632 \u0633\u0627\u062e\u062a",
                },
                {
                  id: 5130,
                  tab_id: 333,
                  name: "address",
                  translation: "\u0622\u062f\u0631\u0633",
                },
                {
                  id: 5137,
                  tab_id: 333,
                  name: "pricing",
                  translation:
                    "\u0642\u06cc\u0645\u062a \u06af\u0630\u0627\u0631\u06cc",
                },
                {
                  id: 5144,
                  tab_id: 333,
                  name: "buy",
                  translation: "\u062e\u0631\u06cc\u062f",
                },
                {
                  id: 5151,
                  tab_id: 333,
                  name: "entering the property",
                  translation:
                    "\u0648\u0631\u0648\u062f \u0628\u0647 \u0645\u0644\u06a9",
                },
                {
                  id: 5158,
                  tab_id: 333,
                  name: "construction of the building",
                  translation: "\u0633\u0627\u062e\u062a \u0628\u0646\u0627",
                },
                {
                  id: 5165,
                  tab_id: 333,
                  name: "physical information",
                  translation:
                    "\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u06cc\u0632\u06cc\u06a9\u06cc",
                },
                {
                  id: 5172,
                  tab_id: 333,
                  name: "participation in construction",
                  translation:
                    "\u0645\u0634\u0627\u0631\u06a9\u062a \u062f\u0631 \u0633\u0627\u062e\u062a",
                },
                {
                  id: 5269,
                  tab_id: 333,
                  name: "history",
                  translation: "History",
                },
              ],
            },
            {
              id: 340,
              modal_id: 125,
              name: "pricing",
              fields: [],
            },
            {
              id: 347,
              modal_id: 125,
              name: "buy",
              fields: [],
            },
            {
              id: 354,
              modal_id: 125,
              name: "entering-the-property",
              fields: [],
            },
            {
              id: 361,
              modal_id: 125,
              name: "construction-of-the-building",
              fields: [
                {
                  id: 5179,
                  tab_id: 361,
                  name: "general default",
                  translation:
                    "\u067e\u06cc\u0634 \u0641\u0631\u0636 \u0639\u0645\u0648\u0645\u06cc",
                },
                {
                  id: 5186,
                  tab_id: 361,
                  name: "special order",
                  translation:
                    "\u0633\u0641\u0627\u0631\u0634 \u0627\u062e\u062a\u0635\u0627\u0635\u06cc",
                },
                {
                  id: 5193,
                  tab_id: 361,
                  name: "activity line",
                  translation:
                    "\u0631\u0633\u062a\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a",
                },
                {
                  id: 5200,
                  tab_id: 361,
                  name: "collection name",
                  translation:
                    "\u0646\u0627\u0645 \u0645\u062c\u0645\u0648\u0639\u0647",
                },
                {
                  id: 5207,
                  tab_id: 361,
                  name: "physical address of the complex",
                  translation:
                    "\u0622\u062f\u0631\u0633 \u0641\u06cc\u0632\u06cc\u06a9\u06cc \u0645\u062c\u0645\u0648\u0639\u0647",
                },
                {
                  id: 5214,
                  tab_id: 361,
                  name: "the physical postal code of the collection",
                  translation:
                    "\u06a9\u062f \u067e\u0633\u062a\u06cc \u0641\u06cc\u0632\u06cc\u06a9\u06cc \u0645\u062c\u0645\u0648\u0639\u0647",
                },
                {
                  id: 5221,
                  tab_id: 361,
                  name: "website address",
                  translation:
                    "\u0622\u062f\u0631\u0633 \u0648\u0628 \u0633\u0627\u06cc\u062a",
                },
                {
                  id: 5228,
                  tab_id: 361,
                  name: "the purpose of the establishment",
                  translation:
                    "\u0647\u062f\u0641 \u062a\u0627\u0633\u06cc\u0633",
                },
                {
                  id: 5235,
                  tab_id: 361,
                  name: "when building a structure on the property, the possibility of pricing the property is closed and you will not be able to sell the property until the construction is finished.",
                  translation:
                    "\u062f\u0631 \u0647\u0646\u06af\u0627\u0645 \u0633\u0627\u062e\u062a \u06cc\u06a9 \u0633\u0627\u0632\u0647 \u0628\u0631 \u0631\u0648\u06cc \u0645\u0644\u06a9 \u0627\u0645\u06a9\u0627\u0646 \u0642\u06cc\u0645\u062a \u06af\u0630\u0627\u0631\u06cc \u0645\u0644\u06a9 \u0628\u0633\u062a\u0647 \u0648 \u062a\u0627 \u067e\u0627\u06cc\u0627\u0646 \u0633\u0627\u062e\u062a \u0634\u0645\u0627 \u0642\u0627\u062f\u0631 \u0628\u0647 \u0641\u0631\u0648\u0634 \u0645\u0644\u06a9 \u0646\u062e\u0648\u0627\u0647\u06cc\u062f \u0628\u0648\u062f.",
                },
                {
                  id: 5242,
                  tab_id: 361,
                  name: "default property construction",
                  translation:
                    "\u0633\u0627\u062e\u062a \u0645\u0644\u06a9 \u067e\u06cc\u0634 \u0641\u0631\u0636",
                },
                {
                  id: 5249,
                  tab_id: 361,
                  name: "view more items",
                  translation:
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u0645\u0648\u0627\u0631\u062f \u0628\u06cc\u0634\u062a\u0631",
                },
                {
                  id: 5256,
                  tab_id: 361,
                  name: "delete",
                  translation: "\u062d\u0630\u0641",
                },
                {
                  id: 5263,
                  tab_id: 361,
                  name: "submission",
                  translation: "\u06af\u0632\u0627\u0631\u0634",
                },
                {
                  id: 5276,
                  tab_id: 361,
                  name: "3d model display",
                  translation:
                    "\u0646\u0645\u0627\u06cc\u0634\u06af\u0631 \u0645\u062f\u0644 \u0633\u0647 \u0628\u0639\u062f\u06cc",
                },
                {
                  id: 5283,
                  tab_id: 361,
                  name: "details of the building",
                  translation:
                    "\u062c\u0632\u0626\u06cc\u0627\u062a \u0628\u0646\u0627",
                },
                {
                  id: 5290,
                  tab_id: 361,
                  name: "the total area of \u200b\u200bthe building",
                  translation:
                    "\u0645\u062a\u0631\u0627\u0698 \u06a9\u0644 \u0628\u0646\u0627",
                },
                {
                  id: 5297,
                  tab_id: 361,
                  name: "density number",
                  translation:
                    "\u062a\u0639\u062f\u0627\u062f \u062a\u0631\u0627\u06a9\u0645",
                },
                {
                  id: 5304,
                  tab_id: 361,
                  name: "underground",
                  translation: "\u0632\u06cc\u0631\u0632\u0645\u06cc\u0646",
                },
                {
                  id: 5311,
                  tab_id: 361,
                  name: "storage data volume",
                  translation:
                    "\u062d\u062c\u0645 \u062f\u06cc\u062a\u0627\u06cc \u0630\u062e\u06cc\u0631\u0647",
                },
                {
                  id: 5318,
                  tab_id: 361,
                  name: "input capacity",
                  translation: "Input capacity",
                },
                {
                  id: 5325,
                  tab_id: 361,
                  name: "score received",
                  translation: "Score received",
                },
                {
                  id: 5332,
                  tab_id: 361,
                  name: "construction time",
                  translation:
                    "\u0632\u0645\u0627\u0646 \u0633\u0627\u062e\u062a",
                },
                {
                  id: 5339,
                  tab_id: 361,
                  name: "day",
                  translation: "\u0631\u0648\u0632",
                },
              ],
            },
            {
              id: 368,
              modal_id: 125,
              name: "physical-information",
              fields: [],
            },
            {
              id: 375,
              modal_id: 125,
              name: "participation-in-construction",
              fields: [],
            },
            {
              id: 382,
              modal_id: 125,
              name: "history",
              fields: [],
            },
          ],
        },
        {
          name: "levels",
          tabs: [
            {
              id: 389,
              modal_id: 132,
              name: "levels-menu",
              fields: [
                {
                  id: 5353,
                  tab_id: 389,
                  name: "home page",
                  translation:
                    "\u0635\u0641\u062d\u0647 \u0646\u062e\u0633\u062a",
                },
                {
                  id: 5360,
                  tab_id: 389,
                  name: "citizen",
                  translation: "\u0634\u0647\u0631\u0648\u0646\u062f",
                },
                {
                  id: 5367,
                  tab_id: 389,
                  name: "reporter",
                  translation: "\u062e\u0628\u0631\u0646\u06af\u0627\u0631",
                },
                {
                  id: 5374,
                  tab_id: 389,
                  name: "participant",
                  translation:
                    "\u0645\u0634\u0627\u0631\u06a9\u062a \u06a9\u0646\u0646\u062f\u0647",
                },
                {
                  id: 5381,
                  tab_id: 389,
                  name: "developer",
                  translation:
                    "\u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u0646\u062f\u0647",
                },
                {
                  id: 5388,
                  tab_id: 389,
                  name: "inspector",
                  translation: "\u0628\u0627\u0632\u0631\u0633",
                },
                {
                  id: 5395,
                  tab_id: 389,
                  name: "businessman",
                  translation: "\u062a\u0627\u062c\u0631",
                },
                {
                  id: 5402,
                  tab_id: 389,
                  name: "lawyer",
                  translation: "\u0648\u06a9\u06cc\u0644",
                },
                {
                  id: 5409,
                  tab_id: 389,
                  name: "city council",
                  translation:
                    "\u0634\u0648\u0631\u0627\u06cc \u0634\u0647\u0631",
                },
                {
                  id: 5416,
                  tab_id: 389,
                  name: "the mayor",
                  translation: "\u0634\u0647\u0631\u062f\u0627\u0631",
                },
                {
                  id: 5423,
                  tab_id: 389,
                  name: "governor",
                  translation:
                    "\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631",
                },
                {
                  id: 5430,
                  tab_id: 389,
                  name: "minister",
                  translation: "\u0648\u0632\u06cc\u0631",
                },
                {
                  id: 5437,
                  tab_id: 389,
                  name: "judge",
                  translation: "\u0642\u0627\u0636\u06cc",
                },
                {
                  id: 5444,
                  tab_id: 389,
                  name: "legislator",
                  translation:
                    "\u0642\u0627\u0646\u0648\u0646 \u06af\u0630\u0627\u0631",
                },
              ],
            },
            {
              id: 396,
              modal_id: 132,
              name: "levels-page",
              fields: [
                {
                  id: 5486,
                  tab_id: 396,
                  name: "level",
                  translation: "\u0633\u0637\u062d",
                },
                {
                  id: 5493,
                  tab_id: 396,
                  name: "one",
                  translation: "\u06cc\u06a9",
                },
                {
                  id: 5500,
                  tab_id: 396,
                  name: "two",
                  translation: "\u062f\u0648",
                },
                {
                  id: 5507,
                  tab_id: 396,
                  name: "three",
                  translation: "\u0633\u0647",
                },
                {
                  id: 5514,
                  tab_id: 396,
                  name: "basic level information",
                  translation:
                    "\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0648\u0644\u06cc\u0647 \u0633\u0637\u062d",
                },
                {
                  id: 5521,
                  tab_id: 396,
                  name: "permissions and access",
                  translation:
                    "\u0645\u062c\u0648\u0632\u0647\u0627 \u0648 \u062f\u0633\u062a\u0631\u0633\u06cc \u0647\u0627",
                },
                {
                  id: 5528,
                  tab_id: 396,
                  name: "surface gem",
                  translation: "\u0646\u06af\u06cc\u0646 \u0633\u0637\u062d",
                },
                {
                  id: 5535,
                  tab_id: 396,
                  name: "accompanying gift",
                  translation:
                    "\u0647\u062f\u06cc\u0647 \u0647\u0645\u0631\u0627\u0647",
                },
                {
                  id: 5542,
                  tab_id: 396,
                  name: "reward for reaching the level",
                  translation:
                    "\u067e\u0627\u062f\u0627\u0634 \u0631\u0633\u06cc\u062f\u0646 \u0628\u0647 \u0633\u0637\u062d",
                },
                {
                  id: 5549,
                  tab_id: 396,
                  name: "list of recipients",
                  translation:
                    "\u0644\u06cc\u0633\u062a \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f\u06af\u0627\u0646",
                },
                {
                  id: 5556,
                  tab_id: 396,
                  name: "description",
                  translation: "\u062a\u0648\u0636\u06cc\u062d\u0627\u062a",
                },
                {
                  id: 5563,
                  tab_id: 396,
                  name: "required points",
                  translation:
                    "\u0627\u0645\u062a\u06cc\u0627\u0632 \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 :",
                },
                {
                  id: 5570,
                  tab_id: 396,
                  name: "surface model file size",
                  translation:
                    "\u062d\u062c\u0645 \u0641\u0627\u06cc\u0644 \u0645\u062f\u0644 \u0633\u0637\u062d :",
                },
                {
                  id: 5577,
                  tab_id: 396,
                  name: "level rank",
                  translation: "\u0631\u062a\u0628\u0647 \u0633\u0637\u062d :",
                },
                {
                  id: 5584,
                  tab_id: 396,
                  name: "the number of points used in the level model",
                  translation:
                    "\u062a\u0639\u062f\u0627\u062f \u067e\u0648\u06cc\u0646\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u062f\u0631 \u0645\u062f\u0644 \u0633\u0637\u062d :",
                },
                {
                  id: 5591,
                  tab_id: 396,
                  name: "number of sub-branches",
                  translation:
                    "\u062a\u0639\u062f\u0627\u062f \u0632\u06cc\u0631\u0634\u0627\u062e\u0647 :",
                },
                {
                  id: 5598,
                  tab_id: 396,
                  name: "number of surface model lines",
                  translation:
                    "\u062a\u0639\u062f\u0627\u062f \u062e\u0637\u0648\u0637 \u0645\u062f\u0644 \u0633\u0637\u062d :",
                },
                {
                  id: 5605,
                  tab_id: 396,
                  name: "level creation date",
                  translation:
                    "\u062a\u0627\u0631\u06cc\u062e \u0627\u06cc\u062c\u0627\u062f \u0633\u0637\u062d :",
                },
                {
                  id: 5612,
                  tab_id: 396,
                  name: "animation",
                  translation: " \u0627\u0646\u06cc\u0645\u06cc\u0634\u0646 :",
                },
                {
                  id: 5619,
                  tab_id: 396,
                  name: "persian font used",
                  translation:
                    "\u0641\u0648\u0646\u062a \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0641\u0627\u0631\u0633\u06cc :",
                },
                {
                  id: 5626,
                  tab_id: 396,
                  name: "surface designer",
                  translation: "\u0637\u0631\u0627\u062d \u0633\u0637\u062d :",
                },
                {
                  id: 5633,
                  tab_id: 396,
                  name: "english font used",
                  translation:
                    "\u0641\u0648\u0646\u062a \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0646\u06af\u0644\u06cc\u0633\u06cc :",
                },
                {
                  id: 5640,
                  tab_id: 396,
                  name: "3d model designer",
                  translation:
                    "\u0637\u0631\u0627\u062d \u0645\u062f\u0644 \u0633\u0647 \u0628\u0639\u062f\u06cc :",
                },
                {
                  id: 5647,
                  tab_id: 396,
                  name: "colors used",
                  translation:
                    "\u0631\u0646\u06af \u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 :",
                },
                {
                  id: 5654,
                  tab_id: 396,
                  name: "income",
                  translation: "\u062f\u0631\u0622\u0645\u062f",
                },
                {
                  id: 5661,
                  tab_id: 396,
                  name: "a list of earned income by titles and clients",
                  translation:
                    "\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u062f\u0631\u0622\u0645\u062f \u0647\u0627\u06cc \u062d\u0627\u0635\u0644\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0639\u0646\u0627\u0648\u06cc\u0646 \u0648 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646",
                },
                {
                  id: 5668,
                  tab_id: 396,
                  name: "orders",
                  translation: "\u0633\u0641\u0627\u0631\u0634\u0627\u062a",
                },
                {
                  id: 5675,
                  tab_id: 396,
                  name: "a list of registered orders with the ability to be attracted by correspondent level holders",
                  translation:
                    "\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0633\u0641\u0627\u0631\u0634\u0627\u062a \u062b\u0628\u062a \u0634\u062f\u0647 \u0628\u0627 \u0642\u0627\u0628\u0644\u06cc\u062a \u062c\u0630\u0628 \u062a\u0648\u0633\u0637 \u062f\u0627\u0631\u0646\u062f\u06af\u0627\u0646 \u0633\u0637\u062d \u062e\u0628\u0631\u0646\u06af\u0627\u0631",
                },
                {
                  id: 5682,
                  tab_id: 396,
                  name: "recording citizens' criticisms and suggestions regarding performance and capabilities",
                  translation:
                    "\u062b\u0628\u062a \u0627\u0646\u062a\u0642\u0627\u062f\u0627\u062a \u0648 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f\u0627\u062a \u0634\u0647\u0631\u0648\u0646\u062f\u0627\u0646 \u062f\u0631 \u062e\u0635\u0648\u0635 \u0639\u0645\u0644\u06a9\u0631\u062f \u0648 \u0642\u0627\u0628\u0644\u06cc\u062a \u0647\u0627",
                },
                {
                  id: 5689,
                  tab_id: 396,
                  name: "update",
                  translation:
                    "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc",
                },
                {
                  id: 5696,
                  tab_id: 396,
                  name: "decisions made to improve reporter level performance",
                  translation:
                    "\u062a\u0635\u0645\u06cc\u0645\u0627\u062a \u06af\u0631\u0641\u062a\u0647 \u0634\u062f\u0647 \u0628\u0647 \u0645\u0646\u0638\u0648\u0631 \u0628\u0647\u0628\u0648\u062f \u0639\u0645\u0644\u06a9\u0631\u062f \u0633\u0637\u062d \u062e\u0628\u0631\u0646\u06af\u0627\u0631",
                },
                {
                  id: 5703,
                  tab_id: 396,
                  name: "license to establish an alliance",
                  translation:
                    "\u0645\u062c\u0648\u0632 \u062a\u0627\u0633\u06cc\u0633 \u0627\u062a\u062d\u0627\u062f :",
                },
                {
                  id: 5710,
                  tab_id: 396,
                  name: "the ability to register public positions of the level",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u062b\u0628\u062a \u0645\u0648\u0642\u0639\u06cc\u062a \u0647\u0627\u06cc \u0639\u0645\u0648\u0645\u06cc \u0633\u0637\u062d :",
                },
                {
                  id: 5717,
                  tab_id: 396,
                  name: "to join the alliance",
                  translation:
                    "\u0645\u062c\u0648\u0631 \u0639\u0636\u0648 \u06af\u06cc\u0631\u06cc \u0628\u0631\u0627\u06cc \u0627\u062a\u062d\u0627\u062f :",
                },
                {
                  id: 5724,
                  tab_id: 396,
                  name: "access to the section for answering citizens' questions",
                  translation:
                    "\u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0628\u062e\u0634 \u067e\u0627\u0633\u062e \u062f\u0647\u06cc \u0628\u0647 \u0633\u0648\u0627\u0644\u0627\u062a \u0634\u0647\u0631\u0648\u0646\u062f\u0627\u0646 :",
                },
                {
                  id: 5731,
                  tab_id: 396,
                  name: "inspection permit",
                  translation:
                    "\u0645\u062c\u0648\u0632 \u0628\u0627\u0632\u0631\u0633\u06cc :",
                },
                {
                  id: 5738,
                  tab_id: 396,
                  name: "the ability to ask questions in the question challenge",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u0637\u0631\u062d \u0633\u0648\u0627\u0644 \u062f\u0631 \u0686\u0627\u0644\u0634 \u0633\u0648\u0627\u0644\u0627\u062a :",
                },
                {
                  id: 5745,
                  tab_id: 396,
                  name: "gate establishment license",
                  translation:
                    "\u0645\u062c\u0648\u0632 \u062a\u0627\u0633\u06cc\u0633 \u062f\u0631\u0648\u0627\u0632\u0647 :",
                },
                {
                  id: 5752,
                  tab_id: 396,
                  name: "the ability to upload music to the waiting list",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0645\u0648\u0632\u06cc\u06a9 \u062f\u0631 \u0644\u06cc\u0633\u062a \u0627\u0646\u062a\u0638\u0627\u0631 :",
                },
                {
                  id: 5759,
                  tab_id: 396,
                  name: "attorney's license",
                  translation:
                    "\u0645\u062c\u0648\u0632 \u0648\u06a9\u0627\u0644\u062a :",
                },
                {
                  id: 5766,
                  tab_id: 396,
                  name: "ability to rent a satisfaction unit",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u06a9\u0631\u0627\u06cc\u0647 \u0648\u0627\u062d\u062f \u0631\u0636\u0627\u06cc\u062a :",
                },
                {
                  id: 5773,
                  tab_id: 396,
                  name: "permission to enter the city council",
                  translation:
                    "\u0645\u062c\u0648\u0632 \u0648\u0631\u0648\u062f \u0628\u0647 \u0634\u0648\u0631\u0627\u06cc \u0634\u0647\u0631 :",
                },
                {
                  id: 5780,
                  tab_id: 396,
                  name: "ability to enter judgment",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u0648\u0631\u0648\u062f \u0628\u0647 \u0642\u0636\u0627\u0648\u062a :",
                },
                {
                  id: 5787,
                  tab_id: 396,
                  name: "license to establish a special residential property",
                  translation:
                    "\u0645\u062c\u0648\u0632 \u062a\u0627\u0633\u06cc\u0633 \u0645\u0644\u06a9 \u0645\u0633\u06a9\u0648\u0646\u06cc \u0648\u06cc\u0698\u0647 :",
                },
                {
                  id: 5794,
                  tab_id: 396,
                  name: "ability to upload free images",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u062a\u0635\u0627\u0648\u06cc\u0631 \u0622\u0632\u0627\u062f :",
                },
                {
                  id: 5801,
                  tab_id: 396,
                  name: "property establishment permit on the surface",
                  translation:
                    "\u0645\u062c\u0648\u0632 \u062a\u0627\u0633\u06cc\u0633 \u0645\u0644\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u0633\u0637\u062d :",
                },
                {
                  id: 5808,
                  tab_id: 396,
                  name: "ability to delete free images",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u062d\u0630\u0641 \u062a\u0635\u0627\u0648\u06cc\u0631 \u0622\u0632\u0627\u062f :",
                },
                {
                  id: 5815,
                  tab_id: 396,
                  name: "ability to record special level positions",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u062b\u0628\u062a \u0645\u0648\u0642\u0639\u06cc\u062a \u0647\u0627\u06cc \u0648\u06cc\u0698\u0647  \u0633\u0637\u062d :",
                },
                {
                  id: 5850,
                  tab_id: 396,
                  name: "gem chip",
                  translation:
                    "\u062a\u0631\u0627\u0634\u0647 \u0646\u06af\u06cc\u0646 :",
                },
                {
                  id: 5857,
                  tab_id: 396,
                  name: "gem color",
                  translation: "\u0631\u0646\u06af \u0646\u06af\u06cc\u0646 :",
                },
                {
                  id: 5864,
                  tab_id: 396,
                  name: "the volume of the 3d stone model",
                  translation:
                    "\u062d\u062c\u0645 \u0645\u062f\u0644 \u0633\u0647 \u0628\u0639\u062f\u06cc \u0633\u0646\u06af :",
                },
                {
                  id: 5871,
                  tab_id: 396,
                  name: "gem png file",
                  translation:
                    "\u0641\u0627\u06cc\u0644 PNG \u0646\u06af\u06cc\u0646 :",
                },
                {
                  id: 5878,
                  tab_id: 396,
                  name: "the number of points of the 3d stone model",
                  translation:
                    "\u062a\u0639\u062f\u0627\u062f \u067e\u0648\u06cc\u0646\u062a \u0647\u0627\u06cc \u0645\u062f\u0644 \u0633\u0647 \u0628\u0639\u062f\u06cc \u0633\u0646\u06af :",
                },
                {
                  id: 5885,
                  tab_id: 396,
                  name: "gem fbx file",
                  translation:
                    "\u0641\u0627\u06cc\u0644 FBX \u0646\u06af\u06cc\u0646 :",
                },
                {
                  id: 5892,
                  tab_id: 396,
                  name: "the number of lines of the 3d stone model",
                  translation:
                    "\u062a\u0639\u062f\u0627\u062f \u062e\u0637\u0648\u0637 \u0645\u062f\u0644 \u0633\u0647 \u0628\u0639\u062f\u06cc \u0633\u0646\u06af :",
                },
                {
                  id: 5899,
                  tab_id: 396,
                  name: "central encryption",
                  translation:
                    "\u0631\u0645\u0632 \u06af\u0630\u0627\u0631\u06cc \u0645\u0631\u06a9\u0632\u06cc :",
                },
                {
                  id: 5906,
                  tab_id: 396,
                  name: "animation",
                  translation: "\u0627\u0646\u06cc\u0645\u06cc\u0634\u0646 :",
                },
                {
                  id: 5913,
                  tab_id: 396,
                  name: "gem designer",
                  translation:
                    "\u0637\u0631\u0627\u062d \u0646\u06af\u06cc\u0646 :",
                },
                {
                  id: 5920,
                  tab_id: 396,
                  name: "features of mobile gift",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u0647\u0627\u06cc \u0647\u062f\u06cc\u0647 \u0647\u0645\u0631\u0627\u0647",
                },
                {
                  id: 5927,
                  tab_id: 396,
                  name: "number of monthly capacity",
                  translation:
                    "\u062a\u0639\u062f\u0627\u062f \u0638\u0631\u0641\u06cc\u062a \u0645\u0627\u0647\u0627\u0646\u0647 :",
                },
                {
                  id: 5934,
                  tab_id: 396,
                  name: "ability to sell capacity",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u0641\u0631\u0648\u0634 \u0638\u0631\u0641\u06cc\u062a :",
                },
                {
                  id: 5941,
                  tab_id: 396,
                  name: "the volume of the 3d model of the gift",
                  translation:
                    "\u062d\u062c\u0645 \u0645\u062f\u0644 \u0633\u0647 \u0628\u0639\u062f\u06cc \u0647\u062f\u06cc\u0647 :",
                },
                {
                  id: 5948,
                  tab_id: 396,
                  name: "ability to sell bundled gifts",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u0641\u0631\u0648\u0634 \u0647\u062f\u06cc\u0647 \u0647\u0645\u0631\u0627\u0647 :",
                },
                {
                  id: 5955,
                  tab_id: 396,
                  name: "the number of points of the accompanying gift model",
                  translation:
                    "\u062a\u0639\u062f\u0627\u062f \u067e\u0648\u06cc\u0646\u062a \u0647\u0627\u06cc \u0645\u062f\u0644 \u0647\u062f\u06cc\u0647 \u0647\u0645\u0631\u0627\u0647 :",
                },
                {
                  id: 5962,
                  tab_id: 396,
                  name: "ability to rent accompanying gift",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u06a9\u0631\u0627\u06cc\u0647 \u0647\u062f\u06cc\u0647 \u0647\u0645\u0631\u0627\u0647 :",
                },
                {
                  id: 5969,
                  tab_id: 396,
                  name: "the number of lines of the accompanying gift model",
                  translation:
                    "\u062a\u0639\u062f\u0627\u062f \u062e\u0637\u0648\u0637 \u0645\u062f\u0644 \u0647\u062f\u06cc\u0647 \u0647\u0645\u0631\u0627\u0647 :",
                },
                {
                  id: 5976,
                  tab_id: 396,
                  name: "access link to mobile gift sellers",
                  translation:
                    "\u0644\u06cc\u0646\u06a9 \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0641\u0631\u0648\u0634\u0646\u062f\u06af\u0627\u0646 \u0647\u062f\u06cc\u0647 \u0647\u0645\u0631\u0627\u0647 :",
                },
                {
                  id: 5983,
                  tab_id: 396,
                  name: "gift designer",
                  translation:
                    "\u0637\u0631\u0627\u062d \u0647\u062f\u06cc\u0647 :",
                },
                {
                  id: 5990,
                  tab_id: 396,
                  name: "ability to store capacity",
                  translation:
                    "\u0642\u0627\u0628\u0644\u06cc\u062a \u0630\u062e\u06cc\u0631\u0647 \u0638\u0631\u0641\u06cc\u062a :",
                },
                {
                  id: 5997,
                  tab_id: 396,
                  name: "gift png file",
                  translation:
                    "\u0641\u0627\u06cc\u0644 PNG \u0647\u062f\u06cc\u0647 :",
                },
                {
                  id: 6004,
                  tab_id: 396,
                  name: "gift fbx file",
                  translation:
                    "\u0641\u0627\u06cc\u0644 FBX \u0647\u062f\u06cc\u0647 :",
                },
                {
                  id: 6011,
                  tab_id: 396,
                  name: "get red color",
                  translation:
                    "\u0631\u06cc\u0627\u0641\u062a \u0631\u0646\u06af \u0642\u0631\u0645\u0632 :",
                },
                {
                  id: 6018,
                  tab_id: 396,
                  name: "get blue color",
                  translation:
                    "\u062f\u0631\u06cc\u0627\u0641\u062a \u0631\u0646\u06af \u0622\u0628\u06cc :",
                },
                {
                  id: 6025,
                  tab_id: 396,
                  name: "satisfaction unit",
                  translation:
                    "\u0648\u0627\u062d\u062f \u0631\u0636\u0627\u06cc\u062a :",
                },
                {
                  id: 6032,
                  tab_id: 396,
                  name: "receive yellow color",
                  translation:
                    "\u062f\u0631\u06cc\u0627\u0641\u062a \u0631\u0646\u06af \u0632\u0631\u062f :",
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
