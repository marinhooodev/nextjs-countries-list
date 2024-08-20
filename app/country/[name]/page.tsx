import Image from "next/image";
import Link from "next/link";

// const getCountryByName = async (name: string) => {
//   const request = await fetch(
//     `https://restcountries.com/v3.1/name/${name}?fullText=true`
//   );
//   return (await request.json())[0];
// };

async function getCountryByName(name:string) {
    const request = await fetch(
      `https://restcountries.com/v3.1/all`
    );
    const countries = await request.json()


    return countries.find((country: any) => country.name.common === name)!;
  };

export default async function country({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = await getCountryByName(decodeURI(name));
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl font-bold text-center text-gray-800 my-16">
        {country.translations.por.common}
      </h1>

      <Link href="/" className="flex items-center my-2 hover:underline">
        {" "}
        <Image
          src="/arrow-left.svg"
          alt="Left Arrow"
          width={24}
          height={24}
        />{" "}
        Voltar
      </Link>

      <article className="flex flex-row justify-between items-center bg-white p-10 min-w-full rounded-xl shadow-xl">
        <section className="w-full">
          {country.capital && (
            <h2 className="mt-3 text-xl text-gray-800">
              {" "}
              <b>🏙️ Capital:</b> {country.capital}{" "}
            </h2>
          )}
          <h2 className="mt-3 text-xl text-gray-800">
            
            <b>🗺️ Continente:</b> {country.region} 
            {country.subregion && `- ${country.subregion}`}
          </h2>
          <h2 className="mt-3 text-xl text-gray-800">
            <b>👨‍👩‍👧‍👦 População: </b> {formatter.format(country.population)}
          </h2>
          {country.languages && (
            <h2 className="mt-3 text-xl text-gray-800">
              <b>🗣️ Línguas faladas:</b>
              <br />
              {Object.values(country.languages).map((lang: any) => (
                <span
                  key={lang}
                  className="inline-block px-2 bg-indigo-700 mr-2 text-sm rounded-full text-white"
                >
                  {lang}
                </span>
              ))}
            </h2>
          )}
        </section>

        <div className="relative min-h-[300px] w-full m-10 shadow-xl">
          <Image
            src={country.flags.svg}
            alt={country.flags.alt}
            fill
            className="object-cover"
          />
        </div>
      </article>
      <section>
        <h3 className="mt-12 text-2xl font-semibold text-gray-800">
            Países que fazem fronteira
        </h3>

        <div className="grid grid-cols-5 w-full">
            {country.borders.map((border: any) => (
                <span>{border}</span>
            ))}
        </div>
      </section>
    </section>
  );
}
