import { Link } from "react-router-dom"
import Tweet from "../components/Tweet"

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">to About</Link>
      <Tweet />
    </div>
  )
}

export default Home

