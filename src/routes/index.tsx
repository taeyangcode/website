import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import OskiImage from "#/assets/images/oski.png";

export const Route = createFileRoute("/")({ component: Home });

type Language = "english" | "korean";

function Home() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("english");

  return (
    <main className="flex max-w-lg flex-col gap-4 p-8">
      <LanguageSelector activeLanguage={activeLanguage} onLanguageChange={setActiveLanguage} />

      <div className="flex flex-col gap-2">
        <img
          src={OskiImage}
          alt="Oski Bear"
          style={{ imageRendering: "pixelated" }}
          className="h-20 w-20"
        />
        <p className="font-pixel">
          Hello. My name is Corey Mostero and I like to build fault-tolerant software. I graduated
          from Berkeley studying Applied Mathematics.
        </p>
      </div>
    </main>
  );
}

type LanguageSelectorProps = {
  activeLanguage: Language;
  onLanguageChange: React.Dispatch<React.SetStateAction<Language>>;
};

function LanguageSelector(props: LanguageSelectorProps) {
  return (
    <div className="flex flex-row">
      <Button
        variant="link"
        onClick={() => props.onLanguageChange("english")}
        className={cn("transition-none", {
          underline: props.activeLanguage === "english",
        })}
      >
        ENG
      </Button>
      <Button
        variant="link"
        onClick={() => props.onLanguageChange("korean")}
        className={cn("transition-none", {
          underline: props.activeLanguage === "korean",
        })}
      >
        KOR
      </Button>
    </div>
  );
}
