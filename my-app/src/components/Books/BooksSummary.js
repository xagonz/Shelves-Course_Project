import classes from "./BooksSummary.module.css";

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>
        Christmas Sale Going on Now!<br></br> Shop our Bestsellers or other
        loved genres online today.{" "}
      </h2>
      <p>
        “Bookshops are dreams built of wood and paper. They are time travel and
        escape and knowledge and power. They are, simply put, the best of
        places.” – Jen Campbell
      </p>
    </section>
  );
};

export default BooksSummary;
