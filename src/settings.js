import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "11bad01e0d2e40e082d6d3e27af61c99";
const token = "007eJxTYCjq+uLNu+S+UsjkjTP73QqePDP3djAW/tZwvWtTzkvfz5cVGAwNkxJTDAxTDVKMUk0MUg0sjFLMUoxTjcwT08wMky0t5Rl1UhsCGRkk6yezMDJAIIjPwpCbmJnHwAAAkrgfdw=="
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
