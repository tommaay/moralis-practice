import { useMoralis } from "react-moralis"

export default function Navbar() {
  const { authenticate, isAuthenticated, logout } = useMoralis()

  return (
    <nav className="p-3 bg-white">
      {isAuthenticated ? (
        <button
          className="px-5 py-1 rounded-full bg-yellow-300 ml-auto block"
          onClick={() => logout()}
        >
          Logout
        </button>
      ) : (
        <button
          className="px-5 py-1 rounded-full bg-yellow-300 ml-auto block"
          onClick={() => authenticate({ signingMessage: "Authorize linking of your wallet" })}
        >
          Login
        </button>
      )}
    </nav>
  )
}
