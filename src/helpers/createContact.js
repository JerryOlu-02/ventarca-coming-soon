import axios from "axios";

const createContact = async function ({ email }) {
  const apiKey = import.meta.env.VITE_BREVO_API_KEY;

  try {
    //   POST data to Brevo
    const response = await axios.post(
      "https://api.brevo.com/v3/contacts",
      {
        email: email,
        listIds: [2],
      },
      {
        headers: {
          "api-key": apiKey,
          "content-type": "application/json",
          accept: "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(
      "Error creating contact:",
      error.response ? error.response.data : error.message
    );

    throw error;
  }
};

export default createContact;
