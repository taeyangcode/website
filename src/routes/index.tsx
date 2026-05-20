import { Clipboard } from "@effect/platform-browser";
import { createFileRoute } from "@tanstack/react-router";
import { Effect, Schema } from "effect";

import OskiImage from "#/assets/images/oski.png";
import SamoyedImage from "#/assets/images/samoyed.png";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="flex flex-col gap-6 p-8 sm:max-w-xl">
      <div className="flex flex-col gap-2">
        <img
          src={OskiImage}
          alt="Oski Bear"
          draggable={false}
          style={{ imageRendering: "pixelated" }}
          className="h-20 w-20"
        />
        <p className="font-pixel">
          Hello. My name is Corey Mostero. I graduated in 2026 from Berkeley studying Applied
          Mathematics.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <img
          src={SamoyedImage}
          alt="Samoyed"
          draggable={false}
          style={{ imageRendering: "pixelated" }}
          className="h-20 w-20"
        />
        <p className="font-pixel text-balance">
          Some things I like are compile time safety, Samoyeds, cafes, and truth. I love to make
          friends, so please reach out{" "}
          <button
            type="button"
            onClick={() => Effect.runPromise(copyEmail)}
            className="peer underline underline-offset-2"
          >
            here
          </button>
          ! <span className="invisible peer-active:visible"> (copied to clipboard)</span>
        </p>
      </div>
    </main>
  );
}

const copyEmail = Effect.gen(function* () {
  const clipboard = yield* Clipboard.Clipboard;

  const contentResponse = yield* Effect.tryPromise(() => fetch("/config.json"));
  const contentJson = yield* Effect.tryPromise(() =>
    Schema.decodeUnknownPromise(Schema.Json)(contentResponse.json()),
  );
  const content = yield* Effect.tryPromise(() =>
    Schema.decodeUnknownPromise(Schema.Record(Schema.String, Schema.String))(contentJson),
  );
  const [a, b, c, d] = Object.entries(content).toSorted(([a, _], [b, __]) => a.localeCompare(b));
  const result = `${a[0]}${a[1]}${b[0]}${b[1]}@${c[0]}${c[1]}${d[0]}.${d[1]}`;
  yield* clipboard.writeString(result);
}).pipe(Effect.provide(Clipboard.layer));
