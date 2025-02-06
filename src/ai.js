import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that helps users find recipes based on the ingredients they have. Given a list of ingredients from the user, suggest a recipe that uses some or all of those ingredients. It's not necessary to use every ingredient they mention in the recipe. You can include a few additional ingredients that weren't listed, but try to keep extras to a minimum. Format your response in markdown, using lists for ingredients and steps, to ensure it's easy to display on a webpage.
`

const HF_ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_API_KEY;


const hf = new HfInference(HF_ACCESS_TOKEN);

export async function getRecipeFromLLaMA(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "meta-llama/Meta-Llama-3-8B-Instruct",  
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
            endpoint: "YOUR_ENDPOINT_URL",
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}
