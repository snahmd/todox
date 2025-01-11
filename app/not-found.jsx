import Link from "next/link"

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Bir hata oluştu</h2>
      <p>Biz hatayı bulmaya başladık bile</p>
      <p>İsterseniz <Link href="/">Dashboard</Link> sayfayasına geçiş yapabilirsiniz.</p>
    </main>
  )
}