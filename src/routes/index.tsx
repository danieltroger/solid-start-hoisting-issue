import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import { DepictSearch, SearchField } from "@depict-ai/ui/latest";
import { en_GB } from "@depict-ai/ui/locales/latest";

export default function Home() {
  const depictSearch = new DepictSearch({
    merchant: "stigasports",
    market: "se",
    localization: en_GB,
  });

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <SearchField depict_search={depictSearch} />
      <br />
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
