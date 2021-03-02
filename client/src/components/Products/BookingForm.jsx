import React from 'react';
import { guestsNumbers } from '../../constants/guestNumbers';
import '../../styles/components/bookingForm.css';

const BookingForm = () => {
  return (
    <div
      id="booking-form-container"
      className="booking-form-container container-fluid"
    >
      <form id="booking-form" name="booking-form" className="booking-form card">
        <div className="form-header card-header">
          <h5 className="form-title card-title">Book Now</h5>
        </div>
        <div className="form-body card-body">
          <div className="form-control-row input-row card-text">
            <input
              id="check-in-date"
              name="check-in-date"
              type="date"
              placeholder="Check in"
            />
          </div>
          <div className="form-control-row input-row card-text">
            <input
              id="check-out-date"
              name="check-out-date"
              type="date"
              placeholder="Check out"
            />
          </div>
          <div className="form-control-row select-row card-text">
            <select
              id="number-guests"
              name="number-guests"
              placeholder="Guests"
            >
              {guestsNumbers.map((guest, i) => {
                return (
                  <option
                    key={i}
                    className="select-guests"
                    value={guest === 0 ? '' : guest}
                  >
                    {guest === 0 ? 'Guests' : guest}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control-row submit-row card-text">
            <button
              id="btnSubmit"
              name="btnSubmit"
              type="submit"
              className="btn btn-primary btnSubmit"
            >
              Book Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
