import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { animals } from "./data";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { CloseIcon } from "./core/icons/";
import ToggleTheme from "./core/components/ToggleTheme";
import FileUploadImg from "./../public/images/file.png";

export default function App() {
  return (
    <>
      <header className="bg-blue-900 p-2">
        <figure className="flex gap-3 items-center">
          <img
            width={60}
            src="https://unavatar.io/microlink/microlink.io"
            alt="logo"
          />
          <figcaption className="font-bold text-white text-xl">
            Latina
          </figcaption>
        </figure>
      </header>
      <main className="grid">
        <div className="mx-auto py-4">
          <Autocomplete className="w-[300px]" label="Select an animal">
            {animals.map((animal) => (
              <AutocompleteItem key={animal.key}>
                {animal.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
          <div className="space-x-3 mt-3">
            <Button variant="shadow">Recientes</Button>
            <Button color="primary" variant="shadow">
              Subir
            </Button>
            <Button variant="shadow">Mi unidad</Button>
          </div>
        </div>
        <Card className="mx-auto">
          <CardHeader>
            <div className="flex justify-between w-full">
              <h1 className="font-bold text-xl">Subir archivo</h1>
              <CloseIcon />
            </div>
          </CardHeader>
          <CardBody>
            <div className="h-[300px] w-[500px] grid p-3 border-2 border-dashed border-default rounded-lg">
              <span className="mx-auto flex flex-col items-center gap-3">
                <img
                  src={FileUploadImg}
                  className="w-[80px] h-[80px] mt-[40px]"
                />
                <p>
                  arrastra tu archivo aqui o{" "}
                  <a className="underline text-primary">escoge aqui</a>
                </p>
              </span>
            </div>
          </CardBody>
        </Card>
      </main>
      <ToggleTheme />
    </>
  );
}
