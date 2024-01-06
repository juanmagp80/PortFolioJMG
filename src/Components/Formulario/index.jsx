import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-400">
      <h1 className="mb-5 text-2xl font-bold text-white">Contáctame</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(20, "Debe tener 20 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Dirección de correo electrónico inválida")
            .required("Requerido"),
          message: Yup.string().required("Requerido"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col mb-20 p-6 bg-blue-400 border-2 rounded shadow-3xl space-y-4 w-72">
          <label htmlFor="firstName" className="font-medium text-gray-700">
            Nombre
          </label>
          <Field
            name="firstName"
            type="text"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="firstName" className="text-red-500" />

          <label htmlFor="lastName" className="font-medium text-gray-700">
            Apellido
          </label>
          <Field
            name="lastName"
            type="text"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="lastName" className="text-red-500" />

          <label htmlFor="email" className="font-medium text-gray-700">
            Correo Electrónico
          </label>
          <Field
            name="email"
            type="email"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="email" className="text-red-500" />

          <label htmlFor="message" className="font-medium text-gray-700">
            Mensaje
          </label>
          <Field
            name="message"
            as="textarea"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="message" className="text-red-500" />

          <button
            type="submit"
            className="p-2 rounded bg-blue-500 text-white mt-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Enviar
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
