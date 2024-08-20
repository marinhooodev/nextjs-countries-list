import Image from "next/image"
import Link from "next/link"

async function getCountries() {
  const request = await fetch("https://restcountries.com/v3.1/all")
  return request.json()
}

export default async function Home() {
  const countries = await getCountries()

  return (
    <section className="container grid grid-cols-5 gap-3 w-full mt-16">
      
      {countries.map((country: any) => (
        <Link href={`/country/${country.name.common}`}>
          <article className="min-w-full h-64 bg-white border-2 rounded-xl p-2 hover:border-indigo-200 transition-all hover:shadow-xl" key={country.translations.por.common}>
  
            <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
              <Image 
              src={country.flags.svg}
              alt={country.flags.alt}
              fill
              className="object-cover"
              />
            </div>
  
            <h2 className="font-bold text-xl text-center mt-1">{country.translations.por.common}</h2>
          </article>
        </Link>
      ))}
      
    </section>
  )
}
