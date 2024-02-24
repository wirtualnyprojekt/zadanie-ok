import { useEffect, useState } from "react";
import { getDepartments, postForm } from "../Api/userForm";
import { FormDataPost } from "../Types/form";
import { ValidateFormMessage } from "../Types/formUnion";

const useForms = () => {
    const [departments, setDepartments] = useState({});
    const [validateError, setValidateError] = useState<ValidateFormMessage>(null);
    const [isSendSuccess, setIsSendSuccesss] = useState(false);
    const [form, setForm] = useState({
      fullName: null,
      birthDate: null,
      email: null,
      department: null,
      termsOfUse: null 
    });
  
    const validateFormField = (form: FormDataPost) => {
      if(!form.fullName) { 
        return "Podanie imienia i nazwiska jest wymagane"
      }
      if(!form.birthDate) {
        return "Podanie daty urodzenia jest wymagane"
      }
      if(!form.email) {
        return "Email jest wymagany"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
        return "Podałeś niepoprawny adres email"
      }
      if(!form.department) {
        return "Nie wybrałeś odpowiedniego działu"
      }
      if(!form.termsOfUse) {
        return "Musisz zaakceptować regulamin"
      }
      return null
    };
  
    const handleSubmit = async () => {
      const err = validateFormField(form);
      if(err) {
        setValidateError(err);
      } else {
        try {
            await postForm(form);
            setValidateError(null);
            setIsSendSuccesss(true);
        } 
        catch(error) {
            console.log(error)
        }
      }
    };

    const getUserDepartments = async () => {
      try {
          const response = await getDepartments();
          setDepartments(response);
      } 
      catch(error) {
          console.log(error)
      }
    };
  
    const updateFormState = (e: any) => {
      if(e.target.checked) {
        setForm({...form, 
          [e.target.name]: e.target.checked});
        } 
      else {
        setForm({...form, 
          [e.target.name]: e.target.value});
        }
    };
  
    useEffect(() => {
      getUserDepartments();
    }, []);
  
return { departments, validateError, isSendSuccess, updateFormState, handleSubmit }
}

export default useForms;