import { HfInference } from "@huggingface/inference";
import "dotenv/config";
import fs from "fs";

const hf = new HfInference(process.env.HF_TOKEN);

async function generateImage() {
  const result = await hf.textToImage({
    model: "black-forest-labs/FLUX.1-schnell",
    provider: "hf-inference",	
  //  inputs: 'Comic illustration of a chaotic Indian parliament session, politicians shouting and throwing papers, Speaker banging gavel, exaggerated cartoon expressions, editorial cartoon style, 4k',
    inputs: 'Satirical cartoon of acrowded Indian election rally, politicians on a stage making big promises, oversized banners and posters, confused voters in the crowd, bright colors, comic exaggerated style, 4k detailed illustration',
  });

  fs.writeFileSync('output.png', Buffer.from(await result.arrayBuffer()));
  console.log("Image saved as output.png");
}

generateImage(); 