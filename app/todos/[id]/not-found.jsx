import Link from "next/link"

export default function NotFound() {
    return (
      <main className="text-center">
        <h2 className="text-3xl">Olmayan bir yapılacak aradınız</h2>
        <p>Diğer yapılacaklar için <Link href="/todos">Yapılacaklar</Link> sayfasına gidiniz</p>
      </main>
    )
  }