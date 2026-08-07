import "./campo-entrada.estilos.css";

// Spread Operator
export function CampoDeEntrada(props) {
  return <input className="campo-entrada-form" {...props} />;
}
