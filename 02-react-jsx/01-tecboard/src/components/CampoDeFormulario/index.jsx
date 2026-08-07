import "./campo-formulario.estilos.css";

// Destructuring no props
export function CampoDeFormulario({ children }) {
  return <fieldset className="campo-form">{children}</fieldset>;
}
