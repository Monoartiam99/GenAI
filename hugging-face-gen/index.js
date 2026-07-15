import { HfInference } from "@huggingface/inference";
import "dotenv/config";
import fs from "fs";

const hf = new HfInference(process.env.HF_TOKEN);

async function generateImage() {
  const result = await hf.textToImage({
    model: "black-forest-labs/FLUX.1-schnell",
    provider: "hf-inference",	
  //  inputs: 'Comic illustration of a chaotic Indian parliament session, politicians shouting and throwing papers, Speaker banging gavel, exaggerated cartoon expressions, editorial cartoon style, 4k',
    inputs: 'generate image of a person is the beautiful one and most handsome',
  });

  fs.writeFileSync('output.png', Buffer.from(await result.arrayBuffer()));
  console.log("Image saved as output.png");
}

generateImage(); 