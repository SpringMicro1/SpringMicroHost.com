import type { IChangeEvent } from "@rjsf/core";
import type { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { DaisyUIForm } from "smhost-template-forms";
import { Alert } from "react-daisyui";
// @ts-ignore
import { MdInfo, MdCheckCircle, MdWarning, MdError } from "react-icons/md";
import React from "react";
import "react-datepicker/dist/react-datepicker.min.css";

type AlertStatus = "info" | "success" | "warning" | "error";
type AlertType = {
  status: AlertStatus;
  message: string;
};

function GetAlertIcon(status: AlertStatus) {
  if (status === "success") {
    return <MdCheckCircle />;
  } else if (status === "warning") {
    return <MdWarning />;
  } else if (status === "error") {
    return <MdError />;
  } else {
    return <MdInfo />;
  }
}

export default function JSONForm({ json, env }) {
  const [disabled, setDisabled] = React.useState(false);
  const [alert, setAlert] = React.useState<AlertType>();

  function onSubmit(
    data: IChangeEvent<any, RJSFSchema, any>,
    event: React.FormEvent<any>
  ) {
    event.preventDefault();

    if (env.PUBLIC_IN_CONTAINER) {
      console.log(data);
      setDisabled(true);
      setAlert({
        status: "success",
        message: json.alerts["success"] ?? "Submission received!",
      });
    } else if (env.PUBLIC_URL && env.PUBLIC_FORMS_API_URL) {
      // const formData = new FormData();
      // formData.append("body", JSON.stringify(data.formData));
      const body = JSON.stringify({ data: data.formData });
      const url = `${env.PUBLIC_FORMS_API_URL}/api/forms/submissions/${json.jsonSchema["$id"]}`;
      fetch(url, {
        mode: "cors",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      })
        .then((res) => {
          console.log(res);
          setDisabled(true);
          setAlert({
            status: "success",
            message: json.alerts["success"] ?? "Submission received!",
          });
        })
        .catch((e) => {
          setAlert({
            status: "warning",
            message: `${
              json.alerts["warning"] ?? "Error in submitting form: "
            } ${e}`,
          });
        });
    } else {
      setAlert({
        status: "error",
        message: json.alerts["error"] ?? "Server error, form not submitted.",
      });
    }
  }

  const formData = Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  );

  return (
    <>
      <DaisyUIForm
        {...json}
        schema={json.jsonSchema}
        validator={validator}
        onSubmit={onSubmit}
        disabled={disabled}
        formData={formData}
      />
      {alert && (
        <Alert {...alert} icon={GetAlertIcon(alert.status)} className="mt-4">
          {alert.message}
        </Alert>
      )}
    </>
  );
}
