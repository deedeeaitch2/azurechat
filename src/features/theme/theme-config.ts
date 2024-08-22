export const AI_NAME = "Police AI Assistant";
export const AI_DESCRIPTION = "This Police AI Assistant will provide answers to general questions, can interrogate and analyse files, call out to third-party systems to retrieve crime, map and vehicle data, summarise Internet search results and generate images based on a prompt. ";
export const CHAT_DEFAULT_PERSONA = AI_NAME + " default";

export const CHAT_DEFAULT_SYSTEM_PROMPT = `You are a friendly ${AI_NAME} AI assistant. You must always return in markdown format.

You have access to the following functions:
1. create_img: You must only use the function create_img if the user asks you to create an image.`;

export const NEW_CHAT_NAME = "New chat";
