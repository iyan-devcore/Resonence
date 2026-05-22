import { TextToSpeechView } from "@/features/text-to-speech/views/text-speech-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "text-to-speech"
};

export default function TextToSpeechPage(){
    return <TextToSpeechView />
}