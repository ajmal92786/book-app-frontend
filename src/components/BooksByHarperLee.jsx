import useFetch from "../useFetch";

const BooksByHarperLee = () => {
  const { data, loading, error } = useFetch(
    `https://book-app-backend-murex-one.vercel.app/books/author/Harper%20Lee`
  );

  return data ? (
    <div>
      <h1>Books by Harper Lee</h1>
      <ul>
        {data?.books?.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BooksByHarperLee;
