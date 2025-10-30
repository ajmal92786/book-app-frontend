import AddBookForm from "./components/AddBookForm";
import Books from "./components/Books";
import BookByTitle from "./components/BookByTitle";
import BooksByHarperLee from "./components/BooksByHarperLee";
import "./App.css";

export default function App() {
  return (
    <main>
      <AddBookForm />
      <Books />
      <BookByTitle title="The Da Vinci Code" />
      <BooksByHarperLee />
    </main>
  );
}
