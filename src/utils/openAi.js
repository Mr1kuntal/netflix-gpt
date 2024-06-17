import OpenAI from 'openai';
import { gptApiKey } from "./ConfigFileForFireBase";

const openAi = new OpenAI({
    	apiKey: gptApiKey,
    	baseURL: "https://api.pawan.krd/pai-001/v1",
     dangerouslyAllowBrowser: true ,
});

export default openAi;

