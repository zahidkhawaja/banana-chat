import * as banana from "@banana-dev/banana-dev";

// Enter your Banana API keys in .env.local
const apiKey = process.env.BANANA_API_KEY
const modelKey = process.env.BANANA_MODEL_KEY

export default async function (req, res) {

  const modelInputs = {
      "prompt": req.body.prompt
  }

  const output = await banana.run(apiKey, modelKey, modelInputs);

  res.status(200).json(output);

}