function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded p-4 md:p-6 lg:p-8">
      {children}
    </div>
  );
}

export default Card;