// pages/create-company.tsx

import CreateCompanySteper from "./components/createcompany";
import { FormProvider } from "./context/formcontext";



export default function CreateCompanyPage() {
  return (
    <FormProvider>
      <CreateCompanySteper />
    </FormProvider>
  );
}
