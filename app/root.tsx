import {
  Link
} from "remix";
import Posts from "./routes/posts";

export default function App() {
  return (

    <html>
      <Link to="/posts">Posts</Link>
      <div>
        <p>Hello world</p>

      </div>
    </html>
  );
}
