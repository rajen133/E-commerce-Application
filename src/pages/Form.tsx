const Form = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="departure">Departure</label>
          <input
            type="text"
            id="departure"
            name="departure"
            className="bg-white"
          />
        </div>
        <div>
          <label htmlFor="arrival">Arrival</label>
          <input type="text" id="arrival" name="arrival" className="bg-white" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" className="bg-white" />
        </div>
        <button type="submit" className=" btn btn-primary">
          Find
        </button>
      </form>
    </div>
  );
};

export default Form;
