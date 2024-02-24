import React from "react";
import useForms from "../Hooks/useForms";
import FormInput from "./FormInput";
import { DepartmentsDataResponse } from "../Types/form";

export const Form = () => {
  
  const { departments, validateError, isSendSuccess, updateFormState, handleSubmit } = useForms();
  
  return (
    <form className="mt-5" >
      {validateError && <div className="alert alert-danger" role="alert">{validateError}</div>}
      {isSendSuccess && <div className="alert alert-success" role="alert">Twoja wiadomość została poprawnie wysłana!</div>}
      <FormInput htmlFor="user-name" type="name" placeHolder="Imię i nazwisko" label="Imię i nazwisko" id="user-name" name="fullName" updateFormState={updateFormState}  />
      <FormInput htmlFor="user-birth-date" type="text" placeHolder="DD/MM/YYYY" label="Data urodzenia" id="user-birth-date" name="birthDate" updateFormState={updateFormState} />
      <FormInput htmlFor="user-email" type="email" placeHolder="user@example.com" label="Email" id="user-email" name="email" updateFormState={updateFormState} />
      <div className="mb-3">
        <label htmlFor="user-department" className="form-label">
          Wydział
        </label>
        <select className="form-select" name="department" id="user-department" defaultValue={'default'} onChange={updateFormState}>
          <option value="default" disabled hidden>
            Wybierz oddział
          </option>
          {Object.entries(departments as DepartmentsDataResponse[]).map(([key, value]) => ( 
            <option key={key} value={`${value.id}`}>{`${value.name}`}</option> 
          ))}
        </select>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="form-terms"
          name="termsOfUse"
          onChange={updateFormState}
        />
        <label className="form-check-label" htmlFor="form-terms">
          Akceptuję regulamin
        </label>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Zapisz
        </button>
      </div>
    </form>
  );
};