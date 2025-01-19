import Link from "next/link"

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h1>AOS Admin</h1>
        <Link href="/signup">Üyelik Oluştur</Link>
        <Link href="/login">Giriş</Link>
      </nav>
      {children}
    </>
  )
}