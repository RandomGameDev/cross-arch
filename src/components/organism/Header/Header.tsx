import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <nav className="mx-auto h-16 w-pc bg-gray-200 px-16 py-4">
      <ul className="flex gap-x-16">
        <title>a</title>

        <li>
          <Link
            className="text-xl font-semibold text-gray-700 hover:text-gray-900"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-xl font-semibold text-gray-700 hover:text-gray-900"
            href="/chat"
          >
            Chat
          </Link>
        </li>
      </ul>
    </nav>
  )
}
